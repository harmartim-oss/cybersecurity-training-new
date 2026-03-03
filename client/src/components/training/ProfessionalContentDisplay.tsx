import React from 'react';
import { 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb,
  ArrowRight,
  Quote
} from 'lucide-react';

export interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'highlight' | 'warning' | 'tip' | 'quote' | 'definition' | 'example';
  content: string | string[];
  level?: number;
}

interface ProfessionalContentProps {
  sections: ContentSection[];
  className?: string;
}

export const ProfessionalContentDisplay: React.FC<ProfessionalContentProps> = ({ 
  sections, 
  className = '' 
}) => {
  const renderSection = (section: ContentSection, idx: number) => {
    switch (section.type) {
      case 'heading':
        return (
          <div key={idx} className="mt-8 mb-4 first:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-3">
              {section.content}
            </h2>
          </div>
        );

      case 'paragraph':
        return (
          <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-lg">
            {section.content}
          </p>
        );

      case 'list':
        return (
          <div key={idx} className="mb-6 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <ul className="space-y-3">
              {Array.isArray(section.content) ? (
                section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))
              ) : (
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{section.content}</span>
                </li>
              )}
            </ul>
          </div>
        );

      case 'highlight':
        return (
          <div key={idx} className="my-6 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="flex gap-4">
              <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Key Concept</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'warning':
        return (
          <div key={idx} className="my-6 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-300">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Important Notice</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'tip':
        return (
          <div key={idx} className="my-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300">
            <div className="flex gap-4">
              <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Pro Tip</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'quote':
        return (
          <div key={idx} className="my-6 pl-6 border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg italic">
            <div className="flex gap-3 mb-2">
              <Quote className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700 font-medium">{section.content}</p>
            </div>
          </div>
        );

      case 'definition':
        return (
          <div key={idx} className="my-6 bg-white p-6 rounded-lg border-2 border-purple-200 shadow-sm">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Definition</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            </div>
          </div>
        );

      case 'example':
        return (
          <div key={idx} className="my-6 bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <h4 className="font-bold mb-3 text-gray-300">Example</h4>
            <pre className="whitespace-pre-wrap">{section.content}</pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`prose-lg max-w-none ${className}`}>
      {sections.map((section, idx) => renderSection(section, idx))}
    </div>
  );
};

// Content formatting utilities
export const createHeading = (text: string): ContentSection => ({
  type: 'heading',
  content: text
});

export const createParagraph = (text: string): ContentSection => ({
  type: 'paragraph',
  content: text
});

export const createList = (items: string[]): ContentSection => ({
  type: 'list',
  content: items
});

export const createHighlight = (text: string): ContentSection => ({
  type: 'highlight',
  content: text
});

export const createWarning = (text: string): ContentSection => ({
  type: 'warning',
  content: text
});

export const createTip = (text: string): ContentSection => ({
  type: 'tip',
  content: text
});

export const createQuote = (text: string): ContentSection => ({
  type: 'quote',
  content: text
});

export const createDefinition = (text: string): ContentSection => ({
  type: 'definition',
  content: text
});

export const createExample = (text: string): ContentSection => ({
  type: 'example',
  content: text
});
