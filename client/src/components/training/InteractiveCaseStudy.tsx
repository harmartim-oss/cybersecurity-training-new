import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface CaseStudyProps {
  id: string;
  title: string;
  organization: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyLearnings: string[];
}

export const InteractiveCaseStudy: React.FC<{ caseStudy: CaseStudyProps }> = ({ caseStudy }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('challenge');

  const sections = [
    { id: 'challenge', label: 'Challenge', icon: AlertCircle, content: caseStudy.challenge },
    { id: 'solution', label: 'Solution', icon: BookOpen, content: caseStudy.solution },
    { id: 'outcome', label: 'Outcome', icon: CheckCircle2, content: caseStudy.outcome }
  ];

  return (
    <div className="my-8 space-y-4">
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{caseStudy.title}</h3>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="bg-white">{caseStudy.organization}</Badge>
              <Badge variant="outline" className="bg-white">{caseStudy.industry}</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;
            return (
              <div key={section.id} className="border-l-4 border-blue-400 pl-4">
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  className="flex items-center gap-2 font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {section.label}
                </button>
                {isExpanded && (
                  <p className="mt-2 text-gray-700 leading-relaxed">{section.content}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t-2 border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Key Learnings
          </h4>
          <ul className="space-y-2">
            {caseStudy.keyLearnings.map((learning, index) => (
              <li key={index} className="flex gap-2 text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default InteractiveCaseStudy;
