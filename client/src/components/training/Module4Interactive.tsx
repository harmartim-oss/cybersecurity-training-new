import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, CheckCircle2, XCircle, AlertTriangle, Shield } from 'lucide-react';

interface DataGovernanceScenario {
  id: number;
  title: string;
  description: string;
  situation: string;
  complianceConcerns: string[];
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
  }[];
}

interface DataManagementPrinciple {
  id: number;
  title: string;
  description: string;
  keyPoints: string[];
  icon: string;
  category: 'classification' | 'retention' | 'access' | 'quality' | 'security' | 'compliance';
}

export function DataGovernanceScenarioComponent({ scenario }: { scenario: DataGovernanceScenario }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption !== null && scenario.options[selectedOption].isCorrect;
  const selectedOption_ = selectedOption !== null ? scenario.options[selectedOption] : null;

  const riskColors = {
    low: 'bg-green-50 border-green-200 text-green-900',
    medium: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    high: 'bg-orange-50 border-orange-200 text-orange-900',
    critical: 'bg-red-50 border-red-200 text-red-900'
  };

  const riskLabels = {
    low: '✓ Low Risk',
    medium: '⚠ Medium Risk',
    high: '⚠ High Risk',
    critical: '✗ Critical Risk'
  };

  return (
    <Card className="mb-6 border-l-4 border-l-blue-500">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Database className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{scenario.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-gray-800 font-medium">{scenario.situation}</p>
        </div>

        {scenario.complianceConcerns.length > 0 && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm font-semibold text-red-900 mb-2">Compliance & Risk Concerns:</p>
            <ul className="space-y-1">
              {scenario.complianceConcerns.map((concern, idx) => (
                <li key={idx} className="text-sm text-red-800">• {concern}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-gray-700 font-medium mb-4">What's the best data management approach?</p>

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
                  : 'border-gray-200 bg-white hover:border-blue-300'
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
          <div className={`p-4 rounded-lg border ${riskColors[selectedOption_.riskLevel]}`}>
            <div className="flex items-start gap-3 mb-3">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold">
                  {isCorrect ? 'Excellent data governance approach!' : 'This approach creates compliance and risk issues.'}
                </p>
                <p className="text-sm mt-1 font-medium">
                  Risk Level: {riskLabels[selectedOption_.riskLevel]}
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

export function DataManagementPrincipleComponent({ principle }: { principle: DataManagementPrinciple }) {
  const categoryColors = {
    classification: 'bg-purple-50 border-purple-200',
    retention: 'bg-blue-50 border-blue-200',
    access: 'bg-green-50 border-green-200',
    quality: 'bg-yellow-50 border-yellow-200',
    security: 'bg-red-50 border-red-200',
    compliance: 'bg-indigo-50 border-indigo-200'
  };

  const categoryLabels = {
    classification: 'Data Classification',
    retention: 'Retention Policies',
    access: 'Access Control',
    quality: 'Data Quality',
    security: 'Security',
    compliance: 'Compliance'
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
              <span className="text-blue-600 font-bold mt-0.5">✓</span>
              <span className="text-gray-700 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Module4InteractiveContent() {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'principles'>('scenarios');

  const scenarios: DataGovernanceScenario[] = [
    {
      id: 1,
      title: "Uncontrolled Data Proliferation",
      description: "Managing data sprawl and retention",
      situation: "Your organization has collected customer data for years without a clear retention policy. Data is stored across multiple systems, and no one knows what data exists or how long it should be kept. A privacy audit reveals you're storing data far longer than necessary.",
      complianceConcerns: [
        "Violation of PIPEDA data minimization principle",
        "Increased breach risk from excessive data storage",
        "Non-compliance with retention requirements",
        "Inability to fulfill data deletion requests"
      ],
      options: [
        {
          text: "Keep all data indefinitely since it might be useful someday",
          isCorrect: false,
          explanation: "Storing data longer than necessary violates privacy principles and increases risk. Organizations should only retain data for legitimate business purposes.",
          riskLevel: 'critical'
        },
        {
          text: "Implement a data retention policy, classify data by sensitivity, and delete data when retention periods expire",
          isCorrect: true,
          explanation: "The correct approach is to establish clear retention policies, classify data appropriately, and implement automated deletion processes to minimize risk and ensure compliance.",
          riskLevel: 'low'
        },
        {
          text: "Delete all customer data immediately to avoid any compliance issues",
          isCorrect: false,
          explanation: "While data minimization is important, you must retain data needed for legitimate business purposes and legal obligations. The key is having a clear, documented policy.",
          riskLevel: 'high'
        }
      ]
    },
    {
      id: 2,
      title: "Poor Data Access Controls",
      description: "Protecting sensitive information",
      situation: "Your organization stores sensitive customer financial data in a shared database. All employees have the same access level and can view any customer's information. An employee accidentally shares a spreadsheet containing thousands of customer records with a contractor.",
      complianceConcerns: [
        "Unauthorized data access and exposure",
        "Violation of principle of least privilege",
        "Breach of customer trust and privacy",
        "Regulatory penalties for inadequate access controls"
      ],
      options: [
        {
          text: "Tell employees to be more careful with data sharing",
          isCorrect: false,
          explanation: "Relying on employee behavior alone is insufficient. You need technical controls to prevent unauthorized access and sharing.",
          riskLevel: 'critical'
        },
        {
          text: "Implement role-based access control (RBAC), encrypt sensitive data, and audit all access",
          isCorrect: true,
          explanation: "The correct approach is to implement technical controls like RBAC, encryption, and access logging to prevent unauthorized access and detect breaches.",
          riskLevel: 'low'
        },
        {
          text: "Restrict all data access to only the IT department",
          isCorrect: false,
          explanation: "While access should be restricted, completely centralizing it in IT creates bottlenecks and prevents legitimate business operations.",
          riskLevel: 'high'
        }
      ]
    },
    {
      id: 3,
      title: "Data Quality Issues",
      description: "Ensuring data accuracy and integrity",
      situation: "Your organization uses customer data for decision-making and analytics. You discover that the database contains duplicate records, incomplete information, and outdated contact details. This is affecting customer service quality and analytics accuracy.",
      complianceConcerns: [
        "Inaccurate decision-making based on poor data",
        "Customer service failures from incomplete data",
        "Compliance issues with PIPEDA accuracy requirements",
        "Wasted resources on data cleanup"
      ],
      options: [
        {
          text: "Ignore data quality issues since they don't pose a security risk",
          isCorrect: false,
          explanation: "Data quality directly impacts compliance, decision-making, and customer experience. Poor data quality is a serious governance issue.",
          riskLevel: 'high'
        },
        {
          text: "Implement data quality standards, establish validation rules, and conduct regular data audits",
          isCorrect: true,
          explanation: "The correct approach is to establish data quality standards, implement validation at the point of entry, and conduct regular audits to maintain data integrity.",
          riskLevel: 'low'
        },
        {
          text: "Manually review all data quarterly to catch errors",
          isCorrect: false,
          explanation: "Manual review is too slow and error-prone. Automated validation and continuous monitoring are needed for effective data quality management.",
          riskLevel: 'medium'
        }
      ]
    }
  ];

  const principles: DataManagementPrinciple[] = [
    {
      id: 1,
      title: "Data Classification",
      description: "Categorizing data by sensitivity and value to apply appropriate controls.",
      keyPoints: [
        "Classify data as public, internal, confidential, or restricted",
        "Apply security controls based on classification level",
        "Document classification decisions and rationale",
        "Review and update classifications regularly"
      ],
      icon: "🏷️",
      category: "classification"
    },
    {
      id: 2,
      title: "Data Retention & Deletion",
      description: "Establishing clear policies for how long data should be retained and securely deleting it when no longer needed.",
      keyPoints: [
        "Define retention periods for each data type",
        "Document retention requirements and business justification",
        "Implement automated deletion processes",
        "Securely destroy data at end of retention period"
      ],
      icon: "🗑️",
      category: "retention"
    },
    {
      id: 3,
      title: "Access Control & Principle of Least Privilege",
      description: "Ensuring users only have access to data they need for their job responsibilities.",
      keyPoints: [
        "Implement role-based access control (RBAC)",
        "Grant minimum necessary permissions",
        "Regularly review and revoke unnecessary access",
        "Audit all data access and modifications"
      ],
      icon: "🔐",
      category: "access"
    },
    {
      id: 4,
      title: "Data Quality & Integrity",
      description: "Maintaining accurate, complete, and consistent data throughout its lifecycle.",
      keyPoints: [
        "Establish data quality standards and metrics",
        "Implement validation rules at data entry",
        "Conduct regular data quality audits",
        "Correct errors and maintain data accuracy"
      ],
      icon: "✅",
      category: "quality"
    },
    {
      id: 5,
      title: "Data Security & Encryption",
      description: "Protecting data from unauthorized access, modification, and loss.",
      keyPoints: [
        "Encrypt sensitive data in transit and at rest",
        "Implement strong access controls and authentication",
        "Regular security assessments and penetration testing",
        "Maintain secure backups and disaster recovery"
      ],
      icon: "🛡️",
      category: "security"
    },
    {
      id: 6,
      title: "Compliance & Governance",
      description: "Ensuring data management practices comply with regulations and organizational policies.",
      keyPoints: [
        "Understand applicable regulations (PIPEDA, FIPPA, MFIPPA)",
        "Document data management policies and procedures",
        "Conduct compliance audits and assessments",
        "Maintain audit trails and documentation"
      ],
      icon: "📋",
      category: "compliance"
    }
  ];

  return (
    <div className="my-8">
      <div className="flex gap-4 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'scenarios'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Database className="w-5 h-5 inline mr-2" />
          Governance Scenarios
        </button>
        <button
          onClick={() => setActiveTab('principles')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'principles'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Shield className="w-5 h-5 inline mr-2" />
          Management Principles
        </button>
      </div>

      {activeTab === 'scenarios' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Governance Decision Scenarios</h3>
          <p className="text-gray-600 mb-6">Explore real-world data management challenges and practice governance decision-making:</p>
          {scenarios.map(scenario => (
            <DataGovernanceScenarioComponent key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}

      {activeTab === 'principles' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Management Principles</h3>
          <p className="text-gray-600 mb-6">Master the core principles for effective data management and governance:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map(principle => (
              <DataManagementPrincipleComponent key={principle.id} principle={principle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
