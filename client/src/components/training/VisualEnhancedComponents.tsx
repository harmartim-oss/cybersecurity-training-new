import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  Lightbulb,
  TrendingUp,
  Shield,
  Eye,
  Lock,
  Zap,
  ChevronDown,
  ChevronUp,
  Target
} from 'lucide-react';

// ============================================================================
// COMPARISON TABLE COMPONENT
// ============================================================================
interface ComparisonItem {
  label: string;
  correct: string;
  incorrect: string;
  icon?: React.ReactNode;
}

export const ComparisonTable: React.FC<{ items: ComparisonItem[]; title?: string }> = ({ 
  items, 
  title = "Best Practices vs Common Mistakes" 
}) => {
  return (
    <Card className="my-6 border-2 border-blue-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Aspect</th>
              <th className="px-6 py-3 text-left font-semibold text-green-700 bg-green-50">✓ Correct Approach</th>
              <th className="px-6 py-3 text-left font-semibold text-red-700 bg-red-50">✗ Common Mistake</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{item.label}</td>
                <td className="px-6 py-4 text-green-800 bg-green-50/30">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item.correct}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-red-800 bg-red-50/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{item.incorrect}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

// ============================================================================
// TIMELINE COMPONENT
// ============================================================================
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export const Timeline: React.FC<{ items: TimelineItem[]; title?: string }> = ({ 
  items, 
  title = "Historical Timeline" 
}) => {
  return (
    <Card className="my-6 border-2 border-purple-200 p-6">
      <h3 className="text-xl font-bold mb-8 text-gray-900">{title}</h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400" />
        
        {/* Timeline items */}
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-16 h-16 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-2xl">{item.icon || '📅'}</div>
              </div>
              
              {/* Content */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="text-sm font-bold text-purple-600 mb-1">{item.year}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// PROCESS FLOW COMPONENT
// ============================================================================
interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export const ProcessFlow: React.FC<{ steps: ProcessStep[]; title?: string }> = ({ 
  steps, 
  title = "Process Flow" 
}) => {
  return (
    <Card className="my-6 border-2 border-teal-200 p-6">
      <h3 className="text-xl font-bold mb-8 text-gray-900">{title}</h3>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx}>
            <div className="flex items-start gap-4 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {step.icon && <div className="text-3xl">{step.icon}</div>}
            </div>
            {idx < steps.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="text-teal-500 text-2xl">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// INFO BOX COMPONENTS
// ============================================================================
export const InfoBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ 
  children, 
  title = "Information" 
}) => {
  return (
    <Card className="my-4 border-l-4 border-l-blue-500 bg-blue-50">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            {title && <h4 className="font-bold text-blue-900 mb-2">{title}</h4>}
            <div className="text-blue-800">{children}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const WarningBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ 
  children, 
  title = "Warning" 
}) => {
  return (
    <Card className="my-4 border-l-4 border-l-red-500 bg-red-50">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            {title && <h4 className="font-bold text-red-900 mb-2">{title}</h4>}
            <div className="text-red-800">{children}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const TipBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ 
  children, 
  title = "Pro Tip" 
}) => {
  return (
    <Card className="my-4 border-l-4 border-l-amber-500 bg-amber-50">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            {title && <h4 className="font-bold text-amber-900 mb-2">{title}</h4>}
            <div className="text-amber-800">{children}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const SuccessBox: React.FC<{ children: React.ReactNode; title?: string }> = ({ 
  children, 
  title = "Success" 
}) => {
  return (
    <Card className="my-4 border-l-4 border-l-green-500 bg-green-50">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            {title && <h4 className="font-bold text-green-900 mb-2">{title}</h4>}
            <div className="text-green-800">{children}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// STATISTICS GRID COMPONENT
// ============================================================================
interface StatItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  color?: string;
}

export const StatisticsGrid: React.FC<{ stats: StatItem[]; title?: string }> = ({ 
  stats, 
  title = "Key Statistics" 
}) => {
  return (
    <Card className="my-6 border-2 border-indigo-200 p-6">
      {title && <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border-2 border-indigo-200 hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-3 flex justify-center">{stat.icon || '📊'}</div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
            <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// EXPANDABLE SECTION COMPONENT
// ============================================================================
interface ExpandableItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export const ExpandableSection: React.FC<{ 
  items: ExpandableItem[]; 
  title?: string;
  defaultOpen?: number;
}> = ({ items, title, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <Card className="my-6 border-2 border-green-200 p-6">
      {title && <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>}
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="border border-green-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors flex items-center justify-between font-semibold text-gray-900 border-b border-green-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon || '📌'}</span>
                <span>{item.title}</span>
              </div>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5 text-green-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-green-600" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// HIGHLIGHT BOX COMPONENT
// ============================================================================
export const HighlightBox: React.FC<{ 
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'accent';
}> = ({ children, type = 'primary' }) => {
  const styles = {
    primary: 'bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-600 text-blue-900',
    secondary: 'bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-600 text-purple-900',
    accent: 'bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-600 text-amber-900'
  };

  return (
    <div className={`my-4 p-4 rounded-lg ${styles[type]} font-semibold`}>
      {children}
    </div>
  );
};

// ============================================================================
// FEATURE GRID COMPONENT
// ============================================================================
interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureGrid: React.FC<{ 
  features: FeatureItem[];
  title?: string;
  columns?: number;
}> = ({ features, title, columns = 3 }) => {
  return (
    <Card className="my-6 border-2 border-cyan-200 p-6">
      {title && <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-200 hover:shadow-lg transition-all hover:scale-105"
          >
            <div className="text-4xl mb-3">{feature.icon || '✨'}</div>
            <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// VISUAL HIERARCHY COMPONENT
// ============================================================================
export const SectionDivider: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-teal-400" />
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 px-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      <div className="flex-1 h-1 bg-gradient-to-r from-teal-400 to-blue-400" />
    </div>
  );
};

// ============================================================================
// LEARNING OBJECTIVES VISUAL COMPONENT
// ============================================================================
export const LearningObjectivesVisual: React.FC<{ objectives: string[] }> = ({ objectives }) => {
  return (
    <Card className="my-6 border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Target className="w-6 h-6" />
        Learning Objectives
      </h3>
      <div className="space-y-3">
        {objectives.map((objective, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border-l-4 border-blue-500">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {idx + 1}
            </div>
            <span className="text-gray-800 font-medium">{objective}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ============================================================================
// KEY POINTS VISUAL COMPONENT
// ============================================================================
export const KeyPointsVisual: React.FC<{ points: string[] }> = ({ points }) => {
  return (
    <Card className="my-6 border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 p-6">
      <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6" />
        Key Points
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border-l-4 border-amber-500">
            <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-800">{point}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default {
  ComparisonTable,
  Timeline,
  ProcessFlow,
  InfoBox,
  WarningBox,
  TipBox,
  SuccessBox,
  StatisticsGrid,
  ExpandableSection,
  HighlightBox,
  FeatureGrid,
  SectionDivider,
  LearningObjectivesVisual,
  KeyPointsVisual
};
