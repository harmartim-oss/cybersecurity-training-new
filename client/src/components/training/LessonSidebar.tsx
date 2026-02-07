import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Clock } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface LessonSidebarProps {
  modules: Module[];
  currentModuleId: number;
  currentLessonId: number;
  completedLessons: string[];
  onLessonSelect: (moduleId: number, lessonId: number) => void;
}

export function LessonSidebar({
  modules,
  currentModuleId,
  currentLessonId,
  completedLessons,
  onLessonSelect
}: LessonSidebarProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([currentModuleId]);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const currentModule = modules.find(m => m.id === currentModuleId);
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = completedLessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-lg p-4 h-fit sticky top-24">
      {/* Progress Overview */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Your Progress</h3>
        <div className="mb-2">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">{completedCount} of {totalLessons} completed</span>
            <span className="font-semibold text-blue-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-2">
        {modules.map(module => {
          const isExpanded = expandedModules.includes(module.id);
          const moduleLessons = module.lessons;
          const moduleCompleted = moduleLessons.filter(lesson =>
            completedLessons.includes(`${module.id}-${lesson.id}`)
          ).length;

          return (
            <div key={module.id}>
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{module.title}</p>
                    <p className="text-xs text-gray-600">{moduleCompleted}/{moduleLessons.length} lessons</p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {/* Lessons List */}
              {isExpanded && (
                <div className="ml-2 mt-1 space-y-1 border-l border-gray-200 pl-3">
                  {moduleLessons.map(lesson => {
                    const lessonKey = `${module.id}-${lesson.id}`;
                    const isCompleted = completedLessons.includes(lessonKey);
                    const isCurrent = currentModuleId === module.id && currentLessonId === lesson.id;

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onLessonSelect(module.id, lesson.id)}
                        className={`w-full flex items-center gap-2 p-2 rounded text-left text-sm transition-colors ${
                          isCurrent
                            ? 'bg-blue-100 text-blue-900 font-semibold'
                            : isCompleted
                            ? 'text-green-700 hover:bg-green-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                        )}
                        <span className="truncate flex-1">{lesson.title}</span>
                        <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
