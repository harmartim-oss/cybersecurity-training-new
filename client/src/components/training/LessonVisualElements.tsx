import React from 'react';
import { Separator } from '@/components/ui/separator';

export const LessonSectionDivider: React.FC<{ title?: string; icon?: string }> = ({ 
  title, 
  icon 
}) => {
  return (
    <div className="my-12 flex items-center gap-4">
      <div className="flex-1 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-transparent rounded-full" />
      {title && (
        <div className="flex items-center gap-2 px-4">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-bold text-gray-700 whitespace-nowrap">{title}</h3>
        </div>
      )}
      <div className="flex-1 h-1 bg-gradient-to-l from-blue-200 via-teal-200 to-transparent rounded-full" />
    </div>
  );
};

export const LessonSpacing: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'my-4',
    md: 'my-8',
    lg: 'my-12'
  };
  return <div className={sizes[size]} />;
};

export const ContentCard: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'subtle';
  className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    highlight: 'bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 shadow-md',
    subtle: 'bg-gray-50 border border-gray-100'
  };

  return (
    <div className={`rounded-lg p-6 transition-all duration-300 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const LessonHeader: React.FC<{
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}> = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="p-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 rounded-full" />
    </div>
  );
};

export const ReadingTime: React.FC<{ minutes: number }> = ({ minutes }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-gray-700">
      <span className="font-semibold">{minutes} min read</span>
      <span className="text-blue-600">📖</span>
    </div>
  );
};

export const ProgressIndicator: React.FC<{
  current: number;
  total: number;
  label?: string;
}> = ({ current, total, label }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="my-6">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="text-sm text-gray-600">{current} of {total}</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-sm">
        <div
          className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600 h-full transition-all duration-500 ease-out rounded-full shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export const SummaryBox: React.FC<{
  title: string;
  items: string[];
}> = ({ title, items }) => {
  return (
    <ContentCard variant="highlight" className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">✓</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 text-white flex items-center justify-center text-xs font-bold">
              {idx + 1}
            </span>
            <span className="text-gray-700 pt-0.5">{item}</span>
          </li>
        ))}
      </ul>
    </ContentCard>
  );
};

export const LessonFooter: React.FC<{
  previousLesson?: { title: string; onClick: () => void };
  nextLesson?: { title: string; onClick: () => void };
  onComplete?: () => void;
}> = ({ previousLesson, nextLesson, onComplete }) => {
  return (
    <div className="mt-12 pt-8 border-t-2 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previousLesson ? (
          <button
            onClick={previousLesson.onClick}
            className="p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all duration-300 group"
          >
            <p className="text-sm text-gray-600 mb-1">← Previous</p>
            <p className="font-semibold text-gray-900 group-hover:text-blue-600">{previousLesson.title}</p>
          </button>
        ) : (
          <div />
        )}

        {onComplete && (
          <button
            onClick={onComplete}
            className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ✓ Mark Complete
          </button>
        )}

        {nextLesson ? (
          <button
            onClick={nextLesson.onClick}
            className="p-4 text-right bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-lg border border-blue-200 transition-all duration-300 group"
          >
            <p className="text-sm text-gray-600 mb-1">Next →</p>
            <p className="font-semibold text-gray-900 group-hover:text-blue-600">{nextLesson.title}</p>
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
