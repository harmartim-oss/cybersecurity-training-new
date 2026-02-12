import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Zap,
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  TrendingUp,
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface VisualSection {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'teal';
}

interface ComparisonItem {
  label: string;
  correct: string;
  incorrect: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-100' },
  green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-100' },
  red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', accent: 'bg-red-100' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600', accent: 'bg-amber-100' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'bg-purple-100' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', accent: 'bg-teal-100' }
};

export function VisualSectionComponent({ section }: { section: VisualSection }) {
  const colors = colorMap[section.color];

  return (
    <Card className={`${colors.bg} border-2 ${colors.border} mb-6`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 ${colors.accent} rounded-lg`}>
            {section.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {section.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.accent} flex items-center justify-center text-xs font-bold ${colors.icon} mt-0.5`}>
                ✓
              </span>
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ComparisonTableComponent({ title, items }: { title: string; items: ComparisonItem[] }) {
  return (
    <Card className="mb-6 border-2 border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-green-50 to-red-50 border-b-2 border-gray-200">
                <th className="px-4 py-3 text-left font-bold text-gray-900">Aspect</th>
                <th className="px-4 py-3 text-left font-bold text-green-700">✓ Correct Approach</th>
                <th className="px-4 py-3 text-left font-bold text-red-700">✗ Incorrect Approach</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{item.label}</td>
                  <td className="px-4 py-3 text-green-700 bg-green-50 border-l-4 border-green-500">{item.correct}</td>
                  <td className="px-4 py-3 text-red-700 bg-red-50 border-l-4 border-red-500">{item.incorrect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

export function TimelineComponent({ events }: { events: TimelineEvent[] }) {
  return (
    <Card className="mb-6 border-2 border-blue-200 bg-blue-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Timeline</h3>
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
                {idx < events.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-teal-400 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-blue-600">{event.year}</p>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{event.title}</h4>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function ProcessFlowComponent({ steps }: { steps: string[] }) {
  return (
    <Card className="mb-6 border-2 border-purple-200 bg-purple-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Process Flow</h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:flex-none">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block text-2xl text-purple-400">→</div>
              )}
              {idx < steps.length - 1 && (
                <div className="md:hidden text-2xl text-purple-400 rotate-90">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function WarningBoxComponent({ title, message }: { title: string; message: string }) {
  return (
    <Card className="mb-6 border-l-4 border-l-red-500 bg-red-50 border-2 border-red-200">
      <div className="p-6 flex gap-4">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-red-900 mb-1">{title}</h4>
          <p className="text-red-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function InfoBoxComponent({ title, message }: { title: string; message: string }) {
  return (
    <Card className="mb-6 border-l-4 border-l-blue-500 bg-blue-50 border-2 border-blue-200">
      <div className="p-6 flex gap-4">
        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-blue-900 mb-1">{title}</h4>
          <p className="text-blue-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function TipBoxComponent({ title, message }: { title: string; message: string }) {
  return (
    <Card className="mb-6 border-l-4 border-l-amber-500 bg-amber-50 border-2 border-amber-200">
      <div className="p-6 flex gap-4">
        <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900 mb-1">{title}</h4>
          <p className="text-amber-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function SuccessBoxComponent({ title, message }: { title: string; message: string }) {
  return (
    <Card className="mb-6 border-l-4 border-l-green-500 bg-green-50 border-2 border-green-200">
      <div className="p-6 flex gap-4">
        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-green-900 mb-1">{title}</h4>
          <p className="text-green-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function StatisticsGridComponent({ stats }: { stats: Array<{ label: string; value: string; icon: React.ReactNode }> }) {
  return (
    <Card className="mb-6 border-2 border-teal-200 bg-teal-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Key Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-teal-200 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-3 text-teal-600">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-teal-600 mb-1">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
