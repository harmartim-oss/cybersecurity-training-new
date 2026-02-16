import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Menu, 
  X, 
  ChevronDown,
  BookOpen,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  showSidebar?: boolean;
  onToggleSidebar?: () => void;
}

export function ResponsiveLessonLayout({
  children,
  sidebar,
  showSidebar = true,
  onToggleSidebar
}: ResponsiveLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(showSidebar);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar?.();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-20 right-4 z-40">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      <div className="flex gap-6 max-w-7xl mx-auto px-4 py-8">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="space-y-6">
            {children}
          </div>
        </main>

        {/* Sidebar - Hidden on mobile, visible on lg+ */}
        {sidebar && (
          <>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Sidebar Content */}
            <aside
              className={`
                fixed lg:relative
                top-0 right-0 bottom-0
                w-80 bg-white
                transform transition-transform duration-300 ease-in-out
                lg:transform-none lg:w-80
                z-40
                overflow-y-auto
                border-l border-gray-200
                lg:border-l-0 lg:border-l border-gray-200
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
              `}
            >
              <div className="p-6 space-y-6">
                {sidebar}
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}

export function AccessibleLessonContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm max-w-none">
      <style>{`
        .prose h1 { @apply text-3xl font-bold text-gray-900 mb-4; }
        .prose h2 { @apply text-2xl font-bold text-gray-900 mb-3 mt-6; }
        .prose h3 { @apply text-xl font-bold text-gray-900 mb-2 mt-4; }
        .prose p { @apply text-gray-700 leading-relaxed mb-4; }
        .prose ul { @apply list-disc list-inside space-y-2 mb-4; }
        .prose li { @apply text-gray-700; }
        .prose strong { @apply font-bold text-gray-900; }
        .prose em { @apply italic text-gray-800; }
        .prose a { @apply text-blue-600 hover:text-blue-700 underline; }
        .prose code { @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-900; }
        .prose blockquote { @apply border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4; }
      `}</style>
      {children}
    </div>
  );
}

export function OptimizedLessonCard({ 
  title, 
  icon: Icon, 
  children,
  variant = 'default',
  isCompleted = false 
}: { 
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  isCompleted?: boolean;
}) {
  const variantStyles = {
    default: 'border-blue-200 bg-blue-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-amber-200 bg-amber-50',
    info: 'border-teal-200 bg-teal-50'
  };

  return (
    <Card className={`border-2 ${variantStyles[variant]} hover:shadow-lg transition-shadow duration-300`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <div className={`p-2 rounded-lg ${
              variant === 'success' ? 'bg-green-100' :
              variant === 'warning' ? 'bg-amber-100' :
              variant === 'info' ? 'bg-teal-100' :
              'bg-blue-100'
            }`}>
              {Icon}
            </div>
          )}
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          {isCompleted && (
            <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
          )}
        </div>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </Card>
  );
}

export function ResponsiveTable({ 
  headers, 
  rows 
}: { 
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            {headers.map((header, idx) => (
              <th 
                key={idx}
                className="px-4 py-3 text-left font-bold text-gray-900 text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr 
              key={rowIdx}
              className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td 
                  key={cellIdx}
                  className="px-4 py-3 text-gray-700 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AccessibleAlert({ 
  type = 'info',
  title,
  message 
}: { 
  type?: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
}) {
  const typeStyles = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-900', msg: 'text-blue-800' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', title: 'text-amber-900', msg: 'text-amber-800' },
    error: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', title: 'text-red-900', msg: 'text-red-800' },
    success: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', title: 'text-green-900', msg: 'text-green-800' }
  };

  const styles = typeStyles[type];
  const Icon = type === 'warning' ? AlertCircle : type === 'error' ? AlertCircle : BookOpen;

  return (
    <div className={`${styles.bg} border-l-4 ${styles.border} p-4 rounded-lg`} role="alert">
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 ${styles.icon} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-bold ${styles.title} mb-1`}>{title}</h4>
          <p className={`text-sm ${styles.msg}`}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export function LessonMetaInfo({ 
  duration, 
  difficulty, 
  estimatedTime 
}: { 
  duration: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime?: string;
}) {
  const difficultyColor = {
    'Beginner': 'text-green-600 bg-green-50',
    'Intermediate': 'text-amber-600 bg-amber-50',
    'Advanced': 'text-red-600 bg-red-50'
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
        <Clock className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-blue-900">{duration}</span>
      </div>
      
      {difficulty && (
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${difficultyColor[difficulty]}`}>
          <span className="text-sm font-medium">{difficulty}</span>
        </div>
      )}

      {estimatedTime && (
        <div className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg border border-teal-200">
          <Clock className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-teal-900">{estimatedTime}</span>
        </div>
      )}
    </div>
  );
}
