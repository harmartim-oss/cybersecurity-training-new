import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle2, XCircle, Shield, Zap } from 'lucide-react';

interface SecurityScenario {
  id: number;
  title: string;
  description: string;
  situation: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

interface SecurityTip {
  id: number;
  title: string;
  description: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

export function SecurityScenarioComponent({ scenario }: { scenario: SecurityScenario }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const isCorrect = selectedOption !== null && scenario.options[selectedOption].isCorrect;

  return (
    <Card className="mb-6 border-l-4 border-l-red-500">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{scenario.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-gray-800 font-medium">{scenario.situation}</p>
        </div>

        <p className="text-gray-700 font-medium mb-4">What should you do?</p>

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

        {showFeedback && selectedOption !== null && (
          <div className={`p-4 rounded-lg flex gap-3 items-start ${
            isCorrect
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-semibold ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                {isCorrect ? 'Correct! Great security awareness.' : 'Not quite right.'}
              </p>
              <p className="text-sm mt-2 text-gray-700">
                {scenario.options[selectedOption].explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export function SecurityTipComponent({ tip }: { tip: SecurityTip }) {
  const priorityColors = {
    high: 'bg-red-50 border-red-200 text-red-900',
    medium: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    low: 'bg-blue-50 border-blue-200 text-blue-900'
  };

  const priorityLabels = {
    high: 'Critical',
    medium: 'Important',
    low: 'Recommended'
  };

  const priorityIcons = {
    high: '🔴',
    medium: '🟡',
    low: '🔵'
  };

  return (
    <Card className={`border-l-4 ${
      tip.priority === 'high' ? 'border-l-red-500' :
      tip.priority === 'medium' ? 'border-l-yellow-500' :
      'border-l-blue-500'
    }`}>
      <div className={`p-4 ${priorityColors[tip.priority]}`}>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{priorityIcons[tip.priority]}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold">{tip.title}</h4>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white bg-opacity-50">
                {priorityLabels[tip.priority]}
              </span>
            </div>
            <p className="text-sm">{tip.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function Module2InteractiveContent() {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'tips'>('scenarios');

  const scenarios: SecurityScenario[] = [
    {
      id: 1,
      title: "Suspicious Email Scenario",
      description: "Test your phishing awareness",
      situation: "You receive an email from 'support@bankofcanada.com' asking you to verify your account by clicking a link and entering your credentials. The email looks professional and includes your account number.",
      options: [
        {
          text: "Click the link and verify your account immediately",
          isCorrect: false,
          explanation: "This is a phishing attempt. Legitimate banks never ask for credentials via email. Always go directly to the bank's website by typing the URL yourself."
        },
        {
          text: "Call your bank's official number to verify if the request is legitimate",
          isCorrect: true,
          explanation: "Correct! Always verify suspicious requests through official channels. Call the number on your bank card or statement, never use contact info from the email."
        },
        {
          text: "Reply to the email asking for more information",
          isCorrect: false,
          explanation: "Don't engage with phishing emails. Replying confirms your email is active and may lead to more attacks. Simply delete or report the email."
        }
      ]
    },
    {
      id: 2,
      title: "Password Sharing Scenario",
      description: "Test your password security knowledge",
      situation: "A colleague is on vacation and asks you to check their email for an urgent client message. They offer to share their password with you.",
      options: [
        {
          text: "Accept the password and check their email",
          isCorrect: false,
          explanation: "Never share passwords, even with trusted colleagues. This violates security policies and creates audit trail issues. Suggest using account delegation features instead."
        },
        {
          text: "Ask your IT department about secure delegation options",
          isCorrect: true,
          explanation: "Correct! Most systems have delegation features that allow temporary access without sharing passwords. This maintains security and creates proper audit trails."
        },
        {
          text: "Tell them to change their password and share the new one",
          isCorrect: false,
          explanation: "Even with a new password, sharing is still insecure. It violates the principle that passwords should never be shared, regardless of circumstances."
        }
      ]
    },
    {
      id: 3,
      title: "USB Device Scenario",
      description: "Test your physical security awareness",
      situation: "You find a USB drive in the parking lot labeled 'Confidential - Employee Salaries'. You're curious about its contents.",
      options: [
        {
          text: "Plug it into your computer to see what's inside",
          isCorrect: false,
          explanation: "Never plug in unknown USB devices. They may contain malware that can compromise your system. This is a common attack vector called 'USB drop attacks'."
        },
        {
          text: "Turn it in to your IT or security department",
          isCorrect: true,
          explanation: "Correct! Report found devices to your IT or security team. They can safely examine it and return it to the owner if possible."
        },
        {
          text: "Leave it where you found it",
          isCorrect: false,
          explanation: "While not as risky as plugging it in, leaving it unattended could allow someone else to use it maliciously. Report it to IT for proper handling."
        }
      ]
    }
  ];

  const tips: SecurityTip[] = [
    {
      id: 1,
      title: "Use Strong, Unique Passwords",
      description: "Create passwords with 12+ characters including uppercase, lowercase, numbers, and symbols. Use a password manager to generate and store them securely.",
      icon: "🔐",
      priority: "high"
    },
    {
      id: 2,
      title: "Enable Multi-Factor Authentication",
      description: "Add an extra layer of security by requiring a second form of verification (authenticator app, security key, or SMS) when logging in.",
      icon: "🔑",
      priority: "high"
    },
    {
      id: 3,
      title: "Keep Software Updated",
      description: "Install security patches and updates promptly. Outdated software has known vulnerabilities that attackers exploit.",
      icon: "⚙️",
      priority: "high"
    },
    {
      id: 4,
      title: "Be Cautious with Email Attachments",
      description: "Don't open attachments from unknown senders. Verify the sender through another channel before opening suspicious files.",
      icon: "📧",
      priority: "medium"
    },
    {
      id: 5,
      title: "Use VPN on Public WiFi",
      description: "When connecting to public WiFi networks, use a VPN to encrypt your traffic and protect your data from interception.",
      icon: "🌐",
      priority: "medium"
    },
    {
      id: 6,
      title: "Backup Your Data Regularly",
      description: "Create regular backups of important data to protect against ransomware and data loss. Store backups offline when possible.",
      icon: "💾",
      priority: "medium"
    },
    {
      id: 7,
      title: "Lock Your Computer When Away",
      description: "Always lock your computer when stepping away from your desk. Use Windows+L or Command+Q to quickly secure your session.",
      icon: "🔒",
      priority: "low"
    },
    {
      id: 8,
      title: "Report Suspicious Activity",
      description: "If you notice unusual system behavior or security concerns, report them to your IT security team immediately.",
      icon: "🚨",
      priority: "low"
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
          <Shield className="w-5 h-5 inline mr-2" />
          Security Scenarios
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'tips'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Zap className="w-5 h-5 inline mr-2" />
          Security Tips
        </button>
      </div>

      {activeTab === 'scenarios' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Real-World Security Scenarios</h3>
          <p className="text-gray-600 mb-6">Test your security awareness with these realistic scenarios:</p>
          {scenarios.map(scenario => (
            <SecurityScenarioComponent key={scenario.id} scenario={scenario} />
          ))}
        </div>
      )}

      {activeTab === 'tips' && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Security Tips</h3>
          <p className="text-gray-600 mb-6">Follow these critical security practices to protect yourself and your organization:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map(tip => (
              <SecurityTipComponent key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
