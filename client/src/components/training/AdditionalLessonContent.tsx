import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, BookOpen, TrendingUp, Zap } from 'lucide-react';

interface CaseStudy {
  title: string;
  organization: string;
  scenario: string;
  challenge: string;
  solution: string;
  outcome: string;
  lessonsLearned: string[];
}

interface PracticalExample {
  title: string;
  description: string;
  steps: string[];
  commonMistakes: string[];
  tips: string[];
}

interface RegulatoryUpdate {
  title: string;
  date: string;
  summary: string;
  impact: string;
  action: string;
}

interface BestPractice {
  title: string;
  description: string;
  implementation: string[];
  benefits: string[];
  resources: string[];
}

interface AdditionalContent {
  caseStudies?: CaseStudy[];
  practicalExamples?: PracticalExample[];
  regulatoryUpdates?: RegulatoryUpdate[];
  bestPractices?: BestPractice[];
}

export const AdditionalLessonContent: React.FC<{ content: AdditionalContent }> = ({ content }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="space-y-6 mt-8">
      {/* Case Studies */}
      {content.caseStudies && content.caseStudies.length > 0 && (
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('caseStudies')}
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-900">Real-World Case Studies</h3>
            </div>
            {expandedSections['caseStudies'] ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            )}
          </div>

          {expandedSections['caseStudies'] && (
            <div className="mt-4 space-y-4">
              {content.caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-lg text-gray-900">{study.title}</h4>
                  <p className="text-sm text-blue-700 font-semibold mt-1">Organization: {study.organization}</p>
                  
                  <div className="mt-3 space-y-2 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Scenario:</p>
                      <p>{study.scenario}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Challenge:</p>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Solution:</p>
                      <p>{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Outcome:</p>
                      <p>{study.outcome}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Key Lessons Learned:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {study.lessonsLearned.map((lesson, i) => (
                          <li key={i} className="text-gray-700">{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Practical Examples */}
      {content.practicalExamples && content.practicalExamples.length > 0 && (
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('practicalExamples')}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-green-900">Practical Examples</h3>
            </div>
            {expandedSections['practicalExamples'] ? (
              <ChevronUp className="w-5 h-5 text-green-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-green-600" />
            )}
          </div>

          {expandedSections['practicalExamples'] && (
            <div className="mt-4 space-y-4">
              {content.practicalExamples.map((example, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-lg text-gray-900">{example.title}</h4>
                  <p className="text-gray-700 mt-2">{example.description}</p>
                  
                  <div className="mt-3 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Steps:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        {example.steps.map((step, i) => (
                          <li key={i} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Common Mistakes:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {example.commonMistakes.map((mistake, i) => (
                          <li key={i} className="text-red-700">{mistake}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Tips:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {example.tips.map((tip, i) => (
                          <li key={i} className="text-green-700">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Regulatory Updates */}
      {content.regulatoryUpdates && content.regulatoryUpdates.length > 0 && (
        <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('regulatoryUpdates')}
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-purple-900">Regulatory Updates</h3>
            </div>
            {expandedSections['regulatoryUpdates'] ? (
              <ChevronUp className="w-5 h-5 text-purple-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-purple-600" />
            )}
          </div>

          {expandedSections['regulatoryUpdates'] && (
            <div className="mt-4 space-y-4">
              {content.regulatoryUpdates.map((update, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-gray-900">{update.title}</h4>
                    <span className="text-sm font-semibold text-purple-600">{update.date}</span>
                  </div>
                  
                  <div className="mt-3 space-y-2 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Summary:</p>
                      <p>{update.summary}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Impact:</p>
                      <p>{update.impact}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Action:</p>
                      <p className="text-purple-700">{update.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Best Practices */}
      {content.bestPractices && content.bestPractices.length > 0 && (
        <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-lg">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('bestPractices')}
          >
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold text-amber-900">Best Practices</h3>
            </div>
            {expandedSections['bestPractices'] ? (
              <ChevronUp className="w-5 h-5 text-amber-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-amber-600" />
            )}
          </div>

          {expandedSections['bestPractices'] && (
            <div className="mt-4 space-y-4">
              {content.bestPractices.map((practice, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-bold text-lg text-gray-900">{practice.title}</h4>
                  <p className="text-gray-700 mt-2">{practice.description}</p>
                  
                  <div className="mt-3 space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Implementation:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {practice.implementation.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Benefits:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {practice.benefits.map((benefit, i) => (
                          <li key={i} className="text-green-700">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Resources:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {practice.resources.map((resource, i) => (
                          <li key={i} className="text-gray-700">{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdditionalLessonContent;
