import { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { modules } from '@/data/lessonContent';
import { ScenarioQuizComponent } from '@/components/training/ScenarioQuiz';
import { getScenarioQuiz } from '@/data/scenarioQuizzes';
import { CheckCircle2, ChevronLeft, Trophy } from 'lucide-react';

export default function ModuleCompletion() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/module/:moduleId/completion');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizPassed, setQuizPassed] = useState<boolean | null>(null);

  if (!match) return null;

  const moduleId = parseInt(params?.moduleId as string);
  const module = modules.find(m => m.id === moduleId);
  const scenarioQuiz = getScenarioQuiz(moduleId);

  if (!module || !scenarioQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <p className="text-gray-600 mb-4">Module not found</p>
            <Button onClick={() => setLocation('/dashboard')}>Back to Dashboard</Button>
          </Card>
        </div>
      </div>
    );
  }

  const handleQuizComplete = (score: number, passed: boolean) => {
    setQuizScore(score);
    setQuizPassed(passed);
    
    // Save progress
    const progress = JSON.parse(localStorage.getItem('ocs_progress') || '{"completedLessons":[],"completedQuizzes":[],"achievements":[],"points":0,"streak":0,"lastActivity":null}');
    if (!progress.completedQuizzes.includes(moduleId)) {
      progress.completedQuizzes.push(moduleId);
      progress.points += score;
    }
    localStorage.setItem('ocs_progress', JSON.stringify(progress));
  };

  if (quizScore !== null && quizPassed !== null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-blue-50">
            <div className="text-center mb-8">
              {quizPassed ? (
                <>
                  <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Module Completed! 🎉</h2>
                  <p className="text-gray-600 mb-4">You've successfully completed {module.title}</p>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-4">📚</div>
                  <h2 className="text-3xl font-bold text-amber-700 mb-2">Keep Learning</h2>
                  <p className="text-gray-600 mb-4">Review the module content and retake the quiz to pass</p>
                </>
              )}
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">Your Score</p>
                  <p className="text-3xl font-bold text-blue-600">{quizScore}</p>
                  <p className="text-xs text-gray-600">out of {scenarioQuiz.totalPoints}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">Passing Score</p>
                  <p className="text-3xl font-bold text-amber-600">{scenarioQuiz.passingScore}</p>
                  <p className="text-xs text-gray-600">required</p>
                </div>
              </div>
            </div>

            {quizPassed && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-8">
                <p className="text-green-800 font-semibold mb-2">
                  ✓ Excellent work! You've demonstrated mastery of {module.title}
                </p>
                <p className="text-sm text-green-700">
                  You can now move on to the next module or review any lessons you'd like to strengthen.
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={() => setLocation('/dashboard')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-lg font-semibold"
              >
                Back to Dashboard
              </Button>
              {moduleId < modules.length && (
                <Button
                  onClick={() => setLocation(`/module/${moduleId + 1}/lesson/1`)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold"
                >
                  Next Module →
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => setLocation(`/module/${moduleId}/lesson/1`)}
            className="mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Lessons
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{module.title}</h1>
          <p className="text-gray-600">Module {moduleId} of {modules.length}</p>
        </div>

        {/* Module Summary */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-white to-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Module Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <p className="text-sm text-gray-600 mb-1">Lessons Completed</p>
              <p className="text-2xl font-bold text-blue-600">{module.lessons.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <p className="text-sm text-gray-600 mb-1">Key Concepts</p>
              <p className="text-2xl font-bold text-green-600">{module.lessons.length * 3}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
              <p className="text-sm text-gray-600 mb-1">Quiz Questions</p>
              <p className="text-2xl font-bold text-purple-600">{scenarioQuiz.scenarios.length}</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-2 border-gray-300 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">What You've Learned:</h3>
            <ul className="space-y-2">
              {module.lessons.slice(0, 5).map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{lesson.title}</span>
                </li>
              ))}
              {module.lessons.length > 5 && (
                <li className="text-gray-600 italic">...and {module.lessons.length - 5} more lessons</li>
              )}
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900 font-semibold mb-1">Ready to Test Your Knowledge?</p>
            <p className="text-sm text-amber-800">
              Complete the scenario-based quiz below to demonstrate your mastery of {module.title}. You need to score at least {scenarioQuiz.passingScore} points to pass.
            </p>
          </div>
        </Card>

        {/* Scenario Quiz */}
        {!quizStarted ? (
          <Card className="p-8 text-center bg-gradient-to-br from-white to-teal-50">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Module Assessment</h2>
            <p className="text-gray-600 mb-6">
              Test your understanding of {module.title} through realistic scenarios and decision-making exercises.
            </p>
            <Button
              onClick={() => setQuizStarted(true)}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Start Quiz
            </Button>
          </Card>
        ) : (
          <ScenarioQuizComponent quiz={scenarioQuiz} onComplete={handleQuizComplete} />
        )}
      </div>
    </div>
  );
}
