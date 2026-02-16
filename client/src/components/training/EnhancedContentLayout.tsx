import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Lightbulb,
  BookOpen,
  Target,
  CheckCircle2,
  AlertTriangle,
  Info,
  Zap,
  Quote
} from 'lucide-react';

interface ContentSection {
  title: string;
  content: string | React.ReactNode;
  type?: 'default' | 'highlight' | 'important';
}

export function EnhancedContentLayout({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
    </div>
  );
}

function ContentSection({ title, content, type = 'default' }: ContentSection) {
  const typeStyles = {
    default: 'border-gray-200 bg-white',
    highlight: 'border-blue-300 bg-blue-50',
    important: 'border-red-300 bg-red-50'
  };

  return (
    <Card className={`border-2 ${typeStyles[type]} hover:shadow-lg transition-shadow duration-300`}>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-gray-200">
          {title}
        </h2>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          {typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    </Card>
  );
}

export function TypographyHierarchy({ 
  h1, h2, h3, body 
}: { 
  h1?: string;
  h2?: string;
  h3?: string;
  body?: string;
}) {
  return (
    <div className="space-y-6">
      {h1 && <h1 className="text-4xl font-bold text-gray-900">{h1}</h1>}
      {h2 && <h2 className="text-3xl font-bold text-gray-900">{h2}</h2>}
      {h3 && <h3 className="text-2xl font-bold text-gray-900">{h3}</h3>}
      {body && <p className="text-lg text-gray-700 leading-relaxed">{body}</p>}
    </div>
  );
}

export function SpacedContentGrid({ items }: { items: Array<{ title: string; description: string; icon?: React.ReactNode }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <Card key={idx} className="border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 p-6">
          <div className="space-y-4">
            {item.icon && (
              <div className="p-3 bg-blue-100 rounded-lg w-fit">
                {item.icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function HighlightedQuote({ quote, author }: { quote: string; author?: string }) {
  return (
    <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-teal-50 p-8">
      <div className="flex gap-4">
        <Quote className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg italic text-gray-900 mb-3">"{quote}"</p>
          {author && (
            <p className="text-sm font-semibold text-gray-600">— {author}</p>
          )}
        </div>
      </div>
    </Card>
  );
}

export function LearningObjectivesList({ objectives }: { objectives: string[] }) {
  return (
    <Card className="border-2 border-blue-200 bg-blue-50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Target className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Learning Objectives</h3>
      </div>
      <div className="space-y-3">
        {objectives.map((objective, idx) => (
          <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              {idx + 1}
            </span>
            <span className="text-gray-700 pt-0.5">{objective}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function KeyPointsList({ points }: { points: string[] }) {
  return (
    <Card className="border-2 border-amber-200 bg-amber-50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg">
          <Zap className="w-6 h-6 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Key Points</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {points.map((point, idx) => (
          <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg border border-amber-200 hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ActionItemsList({ items }: { items: string[] }) {
  return (
    <Card className="border-2 border-teal-200 bg-teal-50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <BookOpen className="w-6 h-6 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Action Items</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-3 p-3 bg-white rounded-lg border border-teal-200 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-teal-500 flex items-center justify-center mt-0.5">
              <span className="text-xs font-bold text-teal-600">{idx + 1}</span>
            </div>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ReflectionPrompts({ prompts }: { prompts: string[] }) {
  return (
    <Card className="border-2 border-purple-200 bg-purple-50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Lightbulb className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Reflection Prompts</h3>
      </div>
      <div className="space-y-4">
        {prompts.map((prompt, idx) => (
          <div key={idx} className="p-4 bg-white rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
            <p className="text-sm font-semibold text-purple-900 mb-2">Question {idx + 1}:</p>
            <p className="text-gray-700 italic">"{prompt}"</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ImportantNotice({ title, message }: { title: string; message: string }) {
  return (
    <Card className="border-l-4 border-l-red-500 bg-red-50 border-2 border-red-200 p-6">
      <div className="flex gap-4">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-red-900 mb-2">{title}</h4>
          <p className="text-red-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function InfoBox({ title, message }: { title: string; message: string }) {
  return (
    <Card className="border-l-4 border-l-blue-500 bg-blue-50 border-2 border-blue-200 p-6">
      <div className="flex gap-4">
        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-blue-900 mb-2">{title}</h4>
          <p className="text-blue-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function TipBox({ title, message }: { title: string; message: string }) {
  return (
    <Card className="border-l-4 border-l-amber-500 bg-amber-50 border-2 border-amber-200 p-6">
      <div className="flex gap-4">
        <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900 mb-2">{title}</h4>
          <p className="text-amber-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}

export function SuccessBox({ title, message }: { title: string; message: string }) {
  return (
    <Card className="border-l-4 border-l-green-500 bg-green-50 border-2 border-green-200 p-6">
      <div className="flex gap-4">
        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-green-900 mb-2">{title}</h4>
          <p className="text-green-800">{message}</p>
        </div>
      </div>
    </Card>
  );
}
