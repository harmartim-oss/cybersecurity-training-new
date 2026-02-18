import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Award,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  Download
} from 'lucide-react';

// ============================================================================
// QUIZ QUESTION TYPES
// ============================================================================
export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface MultipleChoiceQuestion extends QuizQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswerIndex: number;
}

export interface TrueFalseQuestion extends QuizQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface ShortAnswerQuestion extends QuizQuestion {
  type: 'short-answer';
  correctAnswers: string[];
  caseSensitive?: boolean;
}

export interface Quiz {
  id: string;
  moduleId: number;
  title: string;
  description: string;
  passingScore: number;
  timeLimit?: number; // in minutes
  questions: (MultipleChoiceQuestion | TrueFalseQuestion | ShortAnswerQuestion)[];
  certificateEligible: boolean;
}

// ============================================================================
// QUIZ RESULT TYPE
// ============================================================================
export interface QuizResult {
  quizId: string;
  score: number;
  percentage: number;
  passed: boolean;
  totalPoints: number;
  earnedPoints: number;
  answers: { [questionId: string]: string | number | boolean };
  timestamp: string;
  timeSpent: number; // in seconds
}

// ============================================================================
// QUIZ COMPONENT
// ============================================================================
interface QuizComponentProps {
  quiz: Quiz;
  onComplete: (result: QuizResult) => void;
  onCancel: () => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  quiz,
  onComplete,
  onCancel
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string | number | boolean }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(quiz.timeLimit ? quiz.timeLimit * 60 : null);
  const [startTime] = useState(Date.now());
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Timer effect
  useEffect(() => {
    if (!timeRemaining || showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, showResults]);

  const handleAnswerChange = (value: string | number | boolean) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let earnedPoints = 0;
    let totalPoints = 0;

    quiz.questions.forEach((question) => {
      totalPoints += question.points;
      const userAnswer = answers[question.id];

      if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
        return;
      }

      let isCorrect = false;

      if (question.type === 'multiple-choice') {
        const mcQuestion = question as MultipleChoiceQuestion;
        isCorrect = userAnswer === mcQuestion.correctAnswerIndex;
      } else if (question.type === 'true-false') {
        const tfQuestion = question as TrueFalseQuestion;
        isCorrect = userAnswer === tfQuestion.correctAnswer;
      } else if (question.type === 'short-answer') {
        const saQuestion = question as ShortAnswerQuestion;
        const userAnswerStr = String(userAnswer).trim();
        isCorrect = saQuestion.correctAnswers.some((correctAnswer) => {
          if (saQuestion.caseSensitive) {
            return userAnswerStr === correctAnswer;
          }
          return userAnswerStr.toLowerCase() === correctAnswer.toLowerCase();
        });
      }

      if (isCorrect) {
        earnedPoints += question.points;
      }
    });

    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    const passed = percentage >= quiz.passingScore;

    return {
      earnedPoints,
      totalPoints,
      percentage,
      passed
    };
  };

  const handleSubmitQuiz = () => {
    const { earnedPoints, totalPoints, percentage, passed } = calculateScore();
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    const quizResult: QuizResult = {
      quizId: quiz.id,
      score: earnedPoints,
      percentage,
      passed,
      totalPoints,
      earnedPoints,
      answers,
      timestamp: new Date().toISOString(),
      timeSpent
    };

    setResult(quizResult);
    setShowResults(true);
    onComplete(quizResult);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setTimeRemaining(quiz.timeLimit ? quiz.timeLimit * 60 : null);
  };

  const formatTime = (seconds: number | null) => {
    if (seconds === null) return 'No limit';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults && result) {
    return <QuizResults quiz={quiz} result={result} onRetake={handleRetakeQuiz} onCancel={onCancel} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Quiz Header */}
        <Card className="mb-6 border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{quiz.title}</h1>
            <p className="text-blue-100">{quiz.description}</p>
          </div>

          <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="font-bold text-gray-900">{currentQuestionIndex + 1}/{totalQuestions}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Passing Score</p>
                <p className="font-bold text-gray-900">{quiz.passingScore}%</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="font-bold text-gray-900">{quiz.questions.reduce((sum, q) => sum + q.points, 0)}</p>
              </div>
            </div>

            {timeRemaining !== null && (
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${timeRemaining < 300 ? 'bg-red-100' : 'bg-teal-100'}`}>
                  <Clock className={`w-5 h-5 ${timeRemaining < 300 ? 'text-red-600' : 'text-teal-600'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Time Remaining</p>
                  <p className={`font-bold ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-900'}`}>
                    {formatTime(timeRemaining)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Quiz Progress</span>
            <span className="text-sm font-bold text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <Card className="mb-6 border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 border-b-2 border-blue-200">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-bold text-gray-900 flex-1">{currentQuestion.question}</h2>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                currentQuestion.difficulty === 'easy'
                  ? 'bg-green-100 text-green-700'
                  : currentQuestion.difficulty === 'medium'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </div>
            </div>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="font-semibold">{currentQuestion.points} points</span>
            </p>
          </div>

          <div className="p-6">
            {currentQuestion.type === 'multiple-choice' && (
              <MultipleChoiceRenderer
                question={currentQuestion as MultipleChoiceQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onChange={handleAnswerChange}
              />
            )}

            {currentQuestion.type === 'true-false' && (
              <TrueFalseRenderer
                question={currentQuestion as TrueFalseQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onChange={handleAnswerChange}
              />
            )}

            {currentQuestion.type === 'short-answer' && (
              <ShortAnswerRenderer
                question={currentQuestion as ShortAnswerQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onChange={handleAnswerChange}
              />
            )}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 mb-6">
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="flex-1"
          >
            Previous
          </Button>

          {currentQuestionIndex === totalQuestions - 1 ? (
            <Button
              onClick={handleSubmitQuiz}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold"
            >
              Next
            </Button>
          )}
        </div>

        {/* Cancel Button */}
        <Button
          onClick={onCancel}
          variant="outline"
          className="w-full"
        >
          Cancel Quiz
        </Button>
      </div>
    </div>
  );
};

// ============================================================================
// MULTIPLE CHOICE RENDERER
// ============================================================================
const MultipleChoiceRenderer: React.FC<{
  question: MultipleChoiceQuestion;
  selectedAnswer?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
}> = ({ question, selectedAnswer, onChange }) => {
  return (
    <div className="space-y-3">
      {question.options.map((option, idx) => (
        <label
          key={idx}
          className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedAnswer === idx
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:border-blue-300'
          }`}
        >
          <input
            type="radio"
            name={question.id}
            value={idx}
            checked={selectedAnswer === idx}
            onChange={() => onChange(idx)}
            className="mt-1 mr-3"
          />
          <span className="text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );
};

// ============================================================================
// TRUE/FALSE RENDERER
// ============================================================================
const TrueFalseRenderer: React.FC<{
  question: TrueFalseQuestion;
  selectedAnswer?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
}> = ({ question, selectedAnswer, onChange }) => {
  return (
    <div className="space-y-3">
      {[
        { value: true, label: 'True' },
        { value: false, label: 'False' }
      ].map(({ value, label }) => (
        <label
          key={String(value)}
          className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedAnswer === value
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:border-blue-300'
          }`}
        >
          <input
            type="radio"
            name={question.id}
            value={String(value)}
            checked={selectedAnswer === value}
            onChange={() => onChange(value)}
            className="mr-3"
          />
          <span className="text-gray-700 font-semibold">{label}</span>
        </label>
      ))}
    </div>
  );
};

// ============================================================================
// SHORT ANSWER RENDERER
// ============================================================================
const ShortAnswerRenderer: React.FC<{
  question: ShortAnswerQuestion;
  selectedAnswer?: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
}> = ({ question, selectedAnswer, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={String(selectedAnswer || '')}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your answer..."
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
      />
      <p className="text-sm text-gray-600 mt-2">
        <Lightbulb className="w-4 h-4 inline mr-1" />
        Type your answer carefully. Spelling and capitalization may matter.
      </p>
    </div>
  );
};

// ============================================================================
// QUIZ RESULTS COMPONENT
// ============================================================================
interface QuizResultsProps {
  quiz: Quiz;
  result: QuizResult;
  onRetake: () => void;
  onCancel: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  quiz,
  result,
  onRetake,
  onCancel
}) => {
  const minutes = Math.floor(result.timeSpent / 60);
  const seconds = result.timeSpent % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Results Card */}
        <Card className={`mb-6 border-4 overflow-hidden ${
          result.passed
            ? 'border-green-400 bg-gradient-to-br from-green-50 to-emerald-50'
            : 'border-red-400 bg-gradient-to-br from-red-50 to-orange-50'
        }`}>
          <div className={`p-8 text-center ${
            result.passed
              ? 'bg-gradient-to-r from-green-600 to-emerald-600'
              : 'bg-gradient-to-r from-red-600 to-orange-600'
          }`}>
            <div className="text-6xl mb-4">
              {result.passed ? '🎉' : '📚'}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {result.passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h1>
            <p className="text-lg text-white/90">
              {result.passed
                ? `You passed the ${quiz.title} quiz!`
                : `You need ${quiz.passingScore}% to pass. Try again!`}
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg border-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Your Score</p>
                <p className="text-4xl font-bold text-blue-600">{result.percentage}%</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg border-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Points Earned</p>
                <p className="text-4xl font-bold text-green-600">{result.earnedPoints}/{result.totalPoints}</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg border-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Time Spent</p>
                <p className="text-2xl font-bold text-purple-600">{minutes}m {seconds}s</p>
              </div>

              <div className="text-center p-4 bg-white rounded-lg border-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Passing Score</p>
                <p className="text-2xl font-bold text-amber-600">{quiz.passingScore}%</p>
              </div>
            </div>

            {result.passed && quiz.certificateEligible && (
              <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-300 mb-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Certificate Available</h3>
                    <p className="text-amber-800 mb-4">
                      Congratulations! You've earned a certificate for completing this module.
                    </p>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={onRetake}
            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Retake Quiz
          </Button>

          <Button
            onClick={onCancel}
            variant="outline"
            className="flex-1 py-3"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default {
  QuizComponent,
  QuizResults
};
