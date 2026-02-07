import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, CheckCircle2, XCircle, AlertTriangle, TrendingUp } from 'lucide-react';

interface AIEthicsScenario {
  id: number;
  title: string;
  description: string;
  situation: string;
  ethicalConcerns: string[];
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
    ethicsRating: 'excellent' | 'good' | 'concerning' | 'unethical';
  }[];
}

interface GovernancePrinciple {
  id: number;
  title: string;
  description: string;
  keyPoints: string[];
  icon: string;
  category: 'transparency' | 'accountability' | 'fairness' | 'privacy' | 'security';
}

export function AIEthicsScenarioComponent({ scenario }: { scenario: AIEthicsScenario }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption !== null && scenario.options[selectedOption].isCorrect;
  const selectedOption_ = selectedOption !== null ? scenario.options[selectedOption] : null;

  const ethicsRatingColors = {
    excellent: 'bg-green-50 border-green-200 text-green-900',
    good: 'bg-blue-50 border-blue-200 text-blue-900',
    concerning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    unethical: 'bg-red-50 border-red-200 text-red-900'
  };

  const ethicsRatingLabels = {
    excellent: '✓ Excellent',
    good: '✓ Good',
    concerning: '⚠ Concerning',
    unethical: '✗ Unethical'
  };

  return (
    <Card className="mb-6 border-l-4 border-l-purple-500">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Brain className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{scenario.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-gray-800 font-medium">{scenario.situation}</p>
        </div>

        {scenario.ethicalConcerns.length > 0 && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm font-semibold text-yellow-900 mb-2">Ethical Concerns to Consider:</p>
            <ul className="space-y-1">
              {scenario.ethicalConcerns.map((concern, idx) => (
                <li key={idx} className="text-sm text-yellow-800">• {concern}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-gray-700 font-medium mb-4">What's the most ethical approach?</p>

        <div className="space-y-3 mb-6">
          {scenario.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedOption === idx
                  ? idx === scenario.options.findIndex(o => o.isCorrect)
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              } ${selectedOption !== null ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  selectedOption === idx
                    ? idx === scenario.options.findIndex(o => o.isCorrect)
                      ? 'border-green-500 bg-green-500'
                      : 'border-red-500 bg-red-500'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === idx && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>

        {showFeedback && selectedOption_ && (
          <div className={`p-4 rounded-lg border ${ethicsRatingColors[selectedOption_.ethicsRating]}`}>
            <div className="flex items-start gap-3 mb-3">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold">
                  {isCorrect ? 'Excellent ethical reasoning!' : 'Consider the ethical implications more carefully.'}
                </p>
                <p className="text-sm mt-1 font-medium">
                  Ethics Rating: {ethicsRatingLabels[selectedOption_.ethicsRating]}
                </p>
              </div>
            </div>
            <p className="text-sm mt-3">
              {selectedOption_.explanation}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

export function GovernancePrincipleComponent({ principle }: { principle: GovernancePrinciple }) {
  const categoryColors = {
    transparency: 'bg-blue-50 border-blue-200',
    accountability: 'bg-purple-50 border-purple-200',
    fairness: 'bg-green-50 border-green-200',
    privacy: 'bg-red-50 border-red-200',
    security: 'bg-yellow-50 border-yellow-200'
  };

  const categoryLabels = {
    transparency: 'Transparency',
    accountability: 'Accountability',
    fairness: 'Fairness',
    privacy: 'Privacy',
    security: 'Security'
  };

  return (
    <Card className={`border-l-4 ${categoryColors[principle.category]}`}>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{principle.icon}</span>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-lg">{principle.title}</h4>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white bg-opacity-60 inline-block mt-1">
              {categoryLabels[principle.category]}
            </span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{principle.description}</p>
        <div className="space-y-2">
          {principle.keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span className="text-gray-700 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Module3InteractiveContent() {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'principles'>('scenarios');

  const scenarios: AIEthicsScenario[] = [
    {
      id: 1,
      title: "Biased AI Hiring System",
      description: "Addressing algorithmic bias in recruitment",
      situation: "Your organization implemented an AI system to screen job applications. The system was trained on historical hiring data and is now systematically rejecting qualified candidates from underrepresented groups. You discover this bias during a routine audit.",
      ethicalConcerns: [
        "Perpetuation of historical discrimination",
        "Violation of employment equity principles",
        "Unfair treatment of qualified candidates",
        "Damage to organizational reputation"
      ],
      options: [
        {
          text: "Ignore the bias since the system is already deployed and working",
          isCorrect: false,
          explanation: "Ignoring bias violates ethical principles and legal requirements. Biased AI systems cause real harm to individuals and organizations.",
          ethicsRating: 'unethical'
        },
        {
          text: "Immediately remove the system and retrain it with diverse data, then implement bias monitoring",
          isCorrect: true,
          explanation: "The correct approach is to address bias promptly, retrain with diverse data, and establish ongoing monitoring to prevent future bias.",
          ethicsRating: 'excellent'
        },
        {
          text: "Continue using the system but adjust the results manually for underrepresented groups",
          isCorrect: false,
          explanation: "Manual adjustments don't address the root cause and create inconsistent decision-making. The system itself must be fixed.",
          ethicsRating: 'concerning'
        }
      ]
    },
    {
      id: 2,
      title: "AI Privacy Violation",
      description: "Protecting personal data in AI systems",
      situation: "Your AI system collects user data to improve recommendations. You discover that the system is retaining personal information longer than stated in your privacy policy and sharing it with third parties without explicit user consent.",
      ethicalConcerns: [
        "Violation of privacy rights",
        "Breach of user trust",
        "Non-compliance with privacy regulations (PIPEDA)",
        "Unauthorized data sharing"
      ],
      options: [
        {
          text: "Continue the current practice but update the privacy policy to match actual behavior",
          isCorrect: false,
          explanation: "Changing the policy to match unethical behavior is not a solution. You must change the behavior to match ethical standards.",
          ethicsRating: 'unethical'
        },
        {
          text: "Stop the unauthorized data sharing, reduce retention periods, and obtain explicit consent for any data use",
          isCorrect: true,
          explanation: "The correct approach is to align practices with privacy principles, obtain proper consent, and respect user data rights.",
          ethicsRating: 'excellent'
        },
        {
          text: "Only share data with 'trusted' third parties without asking users",
          isCorrect: false,
          explanation: "Users should always have control over their personal data. Trust doesn't replace the need for explicit consent.",
          ethicsRating: 'unethical'
        }
      ]
    },
    {
      id: 3,
      title: "Lack of AI Transparency",
      description: "Making AI decisions explainable",
      situation: "Your AI system makes credit decisions that significantly impact people's lives. However, the system is a 'black box' - even your team can't explain why it approves or denies applications.",
      ethicalConcerns: [
        "Lack of accountability for decisions",
        "Users can't understand or challenge decisions",
        "Potential discrimination without visibility",
        "Regulatory non-compliance"
      ],
      options: [
        {
          text: "Keep the black box system since it's more accurate than explainable alternatives",
          isCorrect: false,
          explanation: "Accuracy without accountability is unethical. Explainability is essential for high-impact decisions, even if it slightly reduces accuracy.",
          ethicsRating: 'unethical'
        },
        {
          text: "Implement explainability features and provide users with clear explanations of decisions",
          isCorrect: true,
          explanation: "Transparency is essential. Users have the right to understand decisions that affect them and to challenge unfair outcomes.",
          ethicsRating: 'excellent'
        },
        {
          text: "Tell users the system is AI-powered but don't explain how it works",
          isCorrect: false,
          explanation: "Disclosure without explanation is insufficient. Users need to understand the reasoning behind decisions.",
          ethicsRating: 'concerning'
        }
      ]
    }
  ];

  const principles: GovernancePrinciple[] = [
    {
      id: 1,
      title: "Transparency & Explainability",
      description: "AI systems should be transparent and their decisions explainable to users and stakeholders.",
      keyPoints: [
        "Document how AI systems make decisions",
        "Provide explanations users can understand",
        "Disclose when AI is being used",
        "Enable users to challenge decisions"
      ],
      icon: "👁️",
      category: "transparency"
    },
    {
      id: 2,
      title: "Accountability & Governance",
      description: "Organizations must be responsible for AI systems and their impacts.",
      keyPoints: [
        "Establish clear ownership and responsibility",
        "Implement governance frameworks",
        "Conduct impact assessments",
        "Document decision-making processes"
      ],
      icon: "📋",
      category: "accountability"
    },
    {
      id: 3,
      title: "Fairness & Non-Discrimination",
      description: "AI systems must treat all individuals fairly and not perpetuate discrimination.",
      keyPoints: [
        "Test for bias in training data",
        "Monitor for discriminatory outcomes",
        "Use diverse training datasets",
        "Implement fairness metrics"
      ],
      icon: "⚖️",
      category: "fairness"
    },
    {
      id: 4,
      title: "Privacy & Data Protection",
      description: "AI systems must respect privacy and protect personal information.",
      keyPoints: [
        "Minimize data collection",
        "Obtain informed consent",
        "Implement data security measures",
        "Respect user rights to access and delete data"
      ],
      icon: "🔒",
      category: "privacy"
    },
    {
      id: 5,
      title: "Security & Robustness",
      description: "AI systems must be secure and resilient against attacks and failures.",
      keyPoints: [
        "Protect against adversarial attacks",
        "Implement security controls",
        "Test system robustness",
        "Have contingency plans for failures"
      ],
      icon: "🛡️",
      category: "security"
    },
    {
      id: 6,
      title: "Human Oversight & Control",
      description: "Humans must maintain meaningful oversight and control of AI systems.",
      keyPoints: [
        "Keep humans in the decision loop for high-impact decisions",
        "Enable human override of AI decisions",
        "Provide training on AI system limitations",
        "Maintain human judgment in critical areas"
      ],
      icon: "👤",
      category: "accountability"
    }
  ];

  return (
    <div className="my-8">
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'scenarios'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Brain className="w-5 h-5 inline mr-2" />
          Ethics Scenarios
        </button>
        <button
          onClick={() => setActiveTab('principles')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'principles'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <TrendingUp className="w-5 h-5 inline mr-2" />
          Governance Principles
        </button>
      </div>

      {activeTab === 'scenarios' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Ethics Decision Scenarios</h3>
          <p className="text-gray-600 mb-6">Explore real-world ethical dilemmas in AI systems and practice ethical decision-making:</p>
          {scenarios.map(scenario => (
            <AIEthicsScenarioComponent key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}

      {activeTab === 'principles' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Governance Principles</h3>
          <p className="text-gray-600 mb-6">Master the core principles for responsible AI governance and implementation:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map(principle => (
              <GovernancePrincipleComponent key={principle.id} principle={principle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
