import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { modules } from '@/data/lessonContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, CheckCircle2, XCircle } from 'lucide-react';

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  submitted: boolean;
  score: number;
}

export default function QuizPage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [moduleId, setModuleId] = useState<number | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    submitted: false,
    score: 0
  });
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/\/quiz\/(\d+)/);
    if (match) {
      const id = parseInt(match[1]);
      setModuleId(id);
      
      const module = modules.find(m => m.id === id);
      const quizQuestions = module?.lessons.flatMap(l => l.quiz || []) || [];
      setQuizState(prev => ({
        ...prev,
        answers: new Array(quizQuestions.length).fill(null)
      }));
    }

    const savedProgress = localStorage.getItem('ocs_progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  if (!moduleId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading quiz...</p>
      </div>
    );
  }

  const module = modules.find(m => m.id === moduleId);
  const quizQuestions = module?.lessons.flatMap(l => l.quiz || []) || [];

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Button variant="outline" onClick={() => setLocation('/dashboard')}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Available</h1>
            <p className="text-gray-600 mb-6">This module doesn't have a quiz yet.</p>
            <Button onClick={() => setLocation('/dashboard')}>Back to Dashboard</Button>
          </Card>
        </main>
      </div>
    );
  }

  const currentQuestion = quizQuestions[quizState.currentQuestion];
  const isAnswered = quizState.answers[quizState.currentQuestion] !== null;
  const isLastQuestion = quizState.currentQuestion === quizQuestions.length - 1;

  const handleSelectAnswer = (optionIndex: number) => {
    if (!quizState.submitted) {
      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentQuestion] = optionIndex;
      setQuizState(prev => ({ ...prev, answers: newAnswers }));
    }
  };

  const handleNext = () => {
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }));
    }
  };

  const handleSubmit = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizState.answers[idx] === q.correct) {
        score++;
      }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);
    setQuizState(prev => ({ ...prev, submitted: true, score: percentage }));

    // Update progress
    if (percentage >= 80) {
      const currentProgress = progress || {
        completedLessons: [],
        completedQuizzes: [],
        achievements: [],
        points: 0,
        streak: 0,
        lastActivity: null
      };

      if (!currentProgress.completedQuizzes.includes(moduleId)) {
        currentProgress.completedQuizzes.push(moduleId);
        currentProgress.points += 50;
        currentProgress.achievements.push(`quiz_${moduleId}`);
        currentProgress.lastActivity = new Date().toISOString();
        localStorage.setItem('ocs_progress', JSON.stringify(currentProgress));
      }
    }
  };

  if (quizState.submitted) {
    const passed = quizState.score >= 80;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Button variant="outline" onClick={() => setLocation('/dashboard')}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="p-8 text-center">
            <div className="mb-6">
              {passed ? (
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              ) : (
                <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {passed ? 'Congratulations!' : 'Quiz Complete'}
            </h1>

            <div className="text-5xl font-bold text-blue-600 mb-6">{quizState.score}%</div>

            <p className="text-lg text-gray-600 mb-8">
              {passed
                ? `You passed the ${module?.title} quiz! You've earned 50 points.`
                : `You scored ${quizState.score}%. You need 80% to pass. Try again!`}
            </p>

            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Score: {quizState.answers.filter((ans, idx) => ans === quizQuestions[idx].correct).length} / {quizQuestions.length} correct
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              {!passed && (
                <Button 
                  onClick={() => {
                    setQuizState({
                      currentQuestion: 0,
                      answers: new Array(quizQuestions.length).fill(null),
                      submitted: false,
                      score: 0
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Retake Quiz
                </Button>
              )}
              <Button 
                variant="outline"
                onClick={() => setLocation('/dashboard')}
              >
                Back to Dashboard
              </Button>
            </div>
          </Card>

          {/* Review Answers */}
          <Card className="mt-8 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quiz Review</h2>
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const isCorrect = quizState.answers[idx] === q.correct;
                return (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Question {idx + 1}: {q.question}</p>
                      </div>
                    </div>

                    <div className="ml-8 space-y-2">
                      {q.options.map((option, optIdx) => (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg ${
                            optIdx === q.correct
                              ? 'bg-green-50 border border-green-200'
                              : optIdx === quizState.answers[idx] && !isCorrect
                              ? 'bg-red-50 border border-red-200'
                              : 'bg-gray-50'
                          }`}
                        >
                          <p className="text-gray-700">
                            <span className="font-semibold">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>{' '}
                            {option}
                            {optIdx === q.correct && ' ✓'}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 text-sm text-gray-600 italic">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" onClick={() => setLocation('/dashboard')}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <span className="text-sm font-semibold text-gray-600">
              Question {quizState.currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{
                width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  quizState.answers[quizState.currentQuestion] === idx
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      quizState.answers[quizState.currentQuestion] === idx
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {quizState.answers[quizState.currentQuestion] === idx && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={quizState.currentQuestion === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmit}
                disabled={quizState.answers.some(a => a === null)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
                <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            )}
          </div>
        </Card>

        {/* Question Indicator */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {quizState.answers.map((answer, idx) => (
            <button
              key={idx}
              onClick={() => setQuizState(prev => ({ ...prev, currentQuestion: idx }))}
              className={`w-full aspect-square rounded-lg font-semibold transition-all ${
                idx === quizState.currentQuestion
                  ? 'bg-blue-600 text-white'
                  : answer !== null
                  ? 'bg-green-100 text-green-700 border border-green-300'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
