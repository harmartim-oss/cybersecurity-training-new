import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

// ============================================================================
// CIA TRIAD DIAGRAM
// ============================================================================
export const CIATriadDiagram: React.FC = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The CIA Triad: Foundation of Cybersecurity</h3>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
        {/* SVG Triangle */}
        <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-lg">
          {/* Triangle */}
          <polygon
            points="150,30 270,240 30,240"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          
          {/* Confidentiality - Top */}
          <circle
            cx="150"
            cy="50"
            r="35"
            fill={hoveredElement === 'confidentiality' ? '#ef4444' : '#fca5a5'}
            stroke="#dc2626"
            strokeWidth="2"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredElement('confidentiality')}
            onMouseLeave={() => setHoveredElement(null)}
          />
          <text x="150" y="55" textAnchor="middle" className="font-bold text-sm fill-white">C</text>
          
          {/* Integrity - Bottom Right */}
          <circle
            cx="245"
            cy="220"
            r="35"
            fill={hoveredElement === 'integrity' ? '#10b981' : '#86efac'}
            stroke="#059669"
            strokeWidth="2"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredElement('integrity')}
            onMouseLeave={() => setHoveredElement(null)}
          />
          <text x="245" y="225" textAnchor="middle" className="font-bold text-sm fill-white">I</text>
          
          {/* Availability - Bottom Left */}
          <circle
            cx="55"
            cy="220"
            r="35"
            fill={hoveredElement === 'availability' ? '#f59e0b' : '#fcd34d'}
            stroke="#d97706"
            strokeWidth="2"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredElement('availability')}
            onMouseLeave={() => setHoveredElement(null)}
          />
          <text x="55" y="225" textAnchor="middle" className="font-bold text-sm fill-white">A</text>
          
          {/* Center label */}
          <text x="150" y="155" textAnchor="middle" className="font-bold text-lg fill-blue-600">Security</text>
        </svg>

        {/* Information Panel */}
        <div className="w-full lg:w-96">
          {hoveredElement === 'confidentiality' && (
            <div className="animate-in fade-in">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Confidentiality
                </h4>
                <p className="text-red-800 text-sm">
                  Ensures data is accessible only to authorized individuals. Protects against unauthorized disclosure through encryption and access controls.
                </p>
              </div>
            </div>
          )}
          
          {hoveredElement === 'integrity' && (
            <div className="animate-in fade-in">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Integrity
                </h4>
                <p className="text-green-800 text-sm">
                  Ensures data accuracy and hasn't been altered without authorization. Uses checksums and digital signatures to verify data authenticity.
                </p>
              </div>
            </div>
          )}
          
          {hoveredElement === 'availability' && (
            <div className="animate-in fade-in">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Availability
                </h4>
                <p className="text-amber-800 text-sm">
                  Ensures systems and data are accessible when needed. Requires redundancy, backups, and protection against denial-of-service attacks.
                </p>
              </div>
            </div>
          )}
          
          {!hoveredElement && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h4 className="font-bold text-blue-900 mb-2">Hover over each element</h4>
              <p className="text-blue-800 text-sm">
                Click on each corner of the triangle to learn about Confidentiality, Integrity, and Availability.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="bg-white border-2 border-blue-300 rounded-lg p-4 mt-6">
        <p className="text-gray-700 font-semibold">
          💡 <strong>Key Takeaway:</strong> Effective cybersecurity requires balancing all three principles. A system that protects confidentiality but lacks availability is not effective, and vice versa.
        </p>
      </div>
    </Card>
  );
};

// ============================================================================
// PRIVACY LAW FRAMEWORK DIAGRAM
// ============================================================================
export const PrivacyLawFrameworkDiagram: React.FC = () => {
  const [expandedLaw, setExpandedLaw] = useState<string | null>('fippa');

  const laws = [
    {
      id: 'fippa',
      name: 'FIPPA',
      fullName: 'Freedom of Information and Protection of Privacy Act',
      scope: 'Provincial Government',
      color: 'blue',
      institutions: '1,000+ provincial institutions',
      year: '1987',
      details: 'Applies to provincial government agencies, ministries, and crown corporations. Provides public access to government records while protecting personal information.'
    },
    {
      id: 'mfippa',
      name: 'MFIPPA',
      fullName: 'Municipal Freedom of Information and Protection of Privacy Act',
      scope: 'Municipal Government',
      color: 'green',
      institutions: '444 municipalities',
      year: '1990',
      details: 'Applies to municipal governments, local councils, school boards, and public utilities. Similar to FIPPA but tailored for municipal operations.'
    },
    {
      id: 'pipeda',
      name: 'PIPEDA',
      fullName: 'Personal Information Protection and Electronic Documents Act',
      scope: 'Private Sector',
      color: 'purple',
      institutions: '2M+ organizations',
      year: '2000',
      details: 'Applies to private sector organizations across Canada. Governs how businesses collect, use, and protect personal information.'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-50 border-blue-300',
    green: 'bg-green-50 border-green-300',
    purple: 'bg-purple-50 border-purple-300'
  };

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-gray-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ontario Privacy Law Framework</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {laws.map((law) => (
          <div
            key={law.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              expandedLaw === law.id
                ? `${colorMap[law.color as keyof typeof colorMap]} shadow-lg`
                : 'bg-white border-gray-200 hover:shadow-md'
            }`}
            onClick={() => setExpandedLaw(expandedLaw === law.id ? null : law.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-gray-900">{law.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{law.fullName}</p>
              </div>
              <span className="text-2xl font-bold text-gray-400">{law.year}</span>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-sm font-semibold text-gray-700">
                <span className="inline-block bg-gray-200 px-3 py-1 rounded-full text-xs">
                  {law.scope}
                </span>
              </p>
              <p className="text-xs text-gray-600">{law.institutions}</p>
            </div>

            {expandedLaw === law.id && (
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-700 leading-relaxed">{law.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden">
        <div className="bg-gray-100 p-4">
          <h4 className="font-bold text-gray-900">Quick Comparison</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Aspect</th>
                <th className="px-4 py-3 text-left font-semibold text-blue-700">FIPPA</th>
                <th className="px-4 py-3 text-left font-semibold text-green-700">MFIPPA</th>
                <th className="px-4 py-3 text-left font-semibold text-purple-700">PIPEDA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Applies To</td>
                <td className="px-4 py-3 text-gray-700">Provincial govt</td>
                <td className="px-4 py-3 text-gray-700">Municipalities</td>
                <td className="px-4 py-3 text-gray-700">Private sector</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Access Request Time</td>
                <td className="px-4 py-3 text-gray-700">30 days</td>
                <td className="px-4 py-3 text-gray-700">30 days</td>
                <td className="px-4 py-3 text-gray-700">30 days</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-gray-900">Privacy Commissioner</td>
                <td className="px-4 py-3 text-gray-700">Ontario IPC</td>
                <td className="px-4 py-3 text-gray-700">Ontario IPC</td>
                <td className="px-4 py-3 text-gray-700">Federal Privacy Commissioner</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// CYBERSECURITY THREATS MATRIX
// ============================================================================
export const ThreatMatrixDiagram: React.FC = () => {
  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);

  const threats = [
    {
      id: 'phishing',
      name: 'Phishing',
      severity: 'High',
      likelihood: 'Very High',
      icon: '🎣',
      color: 'bg-red-100 border-red-400',
      description: 'Deceptive emails/messages to trick users into revealing information or clicking malicious links.',
      defense: 'Email filtering, user training, multi-factor authentication, verification procedures'
    },
    {
      id: 'ransomware',
      name: 'Ransomware',
      severity: 'Critical',
      likelihood: 'High',
      icon: '🔒',
      color: 'bg-orange-100 border-orange-400',
      description: 'Encrypts data and demands payment for decryption. Can cripple operations and cause significant losses.',
      defense: 'Regular backups (offline), endpoint protection, network segmentation, incident response plans'
    },
    {
      id: 'malware',
      name: 'Malware',
      severity: 'High',
      likelihood: 'High',
      icon: '🦠',
      color: 'bg-yellow-100 border-yellow-400',
      description: 'Viruses, worms, trojans, and spyware that damage systems or steal information.',
      defense: 'Antivirus software, regular patching, network monitoring, user awareness training'
    },
    {
      id: 'zeroday',
      name: 'Zero-Day',
      severity: 'Critical',
      likelihood: 'Medium',
      icon: '💣',
      color: 'bg-red-100 border-red-400',
      description: 'Exploits previously unknown vulnerabilities. No patch exists, making them particularly dangerous.',
      defense: 'Security monitoring, network segmentation, rapid incident response'
    },
    {
      id: 'dos',
      name: 'DoS/DDoS',
      severity: 'High',
      likelihood: 'Medium',
      icon: '⚡',
      color: 'bg-purple-100 border-purple-400',
      description: 'Overwhelms systems with traffic, making them unavailable to legitimate users.',
      defense: 'Rate limiting, traffic filtering, redundant systems, CDN services'
    },
    {
      id: 'social',
      name: 'Social Engineering',
      severity: 'High',
      likelihood: 'Very High',
      icon: '👤',
      color: 'bg-blue-100 border-blue-400',
      description: 'Manipulates people into divulging information or performing actions that compromise security.',
      defense: 'User training, clear security policies, verification procedures, security awareness'
    }
  ];

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-gray-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cybersecurity Threats Matrix</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {threats.map((threat) => (
          <div
            key={threat.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedThreat === threat.id ? threat.color + ' shadow-lg' : 'bg-white border-gray-200 hover:shadow-md'
            }`}
            onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{threat.icon}</span>
                <h4 className="font-bold text-gray-900">{threat.name}</h4>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <p className="text-xs">
                <span className="font-semibold text-gray-700">Severity:</span>
                <span className={`ml-2 inline-block px-2 py-1 rounded text-xs font-bold ${
                  threat.severity === 'Critical' ? 'bg-red-200 text-red-800' :
                  threat.severity === 'High' ? 'bg-orange-200 text-orange-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {threat.severity}
                </span>
              </p>
              <p className="text-xs">
                <span className="font-semibold text-gray-700">Likelihood:</span>
                <span className={`ml-2 inline-block px-2 py-1 rounded text-xs font-bold ${
                  threat.likelihood === 'Very High' ? 'bg-red-200 text-red-800' :
                  threat.likelihood === 'High' ? 'bg-orange-200 text-orange-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {threat.likelihood}
                </span>
              </p>
            </div>

            {selectedThreat === threat.id && (
              <div className="mt-4 pt-4 border-t border-gray-300 space-y-2">
                <p className="text-sm text-gray-700">{threat.description}</p>
                <div className="bg-white bg-opacity-60 p-2 rounded">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Defense Strategies:</p>
                  <p className="text-xs text-gray-600">{threat.defense}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-lg border-2 border-gray-300 p-6">
        <h4 className="font-bold text-gray-900 mb-4">Risk Assessment Framework</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <p className="font-semibold text-red-900 mb-2">Critical Priority</p>
            <p className="text-sm text-red-800">Ransomware, Zero-Day exploits. Require immediate mitigation strategies.</p>
          </div>
          <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
            <p className="font-semibold text-orange-900 mb-2">High Priority</p>
            <p className="text-sm text-orange-800">Phishing, Malware, DoS attacks. Require robust defense mechanisms.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="font-semibold text-blue-900 mb-2">Ongoing Vigilance</p>
            <p className="text-sm text-blue-800">Social Engineering. Requires continuous user awareness and training.</p>
          </div>
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <p className="font-semibold text-green-900 mb-2">Defense Strategy</p>
            <p className="text-sm text-green-800">Layered defense, regular updates, monitoring, and incident response planning.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// DATA GOVERNANCE LIFECYCLE DIAGRAM
// ============================================================================
export const DataGovernanceLifecycleDiagram: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      number: 1,
      name: 'Collection',
      icon: '📥',
      description: 'Gather data according to policies and legal requirements',
      details: 'Define what data to collect, obtain proper consent, ensure compliance with privacy laws, document collection procedures'
    },
    {
      number: 2,
      name: 'Classification',
      icon: '🏷️',
      description: 'Classify data based on sensitivity and regulatory requirements',
      details: 'Assign classification levels (public, internal, confidential, restricted), apply appropriate controls, document classification decisions'
    },
    {
      number: 3,
      name: 'Storage',
      icon: '💾',
      description: 'Maintain data securely and accessibly',
      details: 'Use secure storage systems, implement encryption, maintain backups, ensure data integrity, control access'
    },
    {
      number: 4,
      name: 'Usage',
      icon: '⚙️',
      description: 'Use data for authorized purposes only',
      details: 'Apply data for intended purposes, maintain audit logs, monitor access, enforce access controls, prevent unauthorized use'
    },
    {
      number: 5,
      name: 'Sharing',
      icon: '🔄',
      description: 'Share data appropriately with authorized parties',
      details: 'Verify recipient authorization, use secure transfer methods, document sharing, maintain data agreements'
    },
    {
      number: 6,
      name: 'Retention',
      icon: '📅',
      description: 'Keep data for required periods',
      details: 'Establish retention schedules, comply with legal requirements, review retention periods, prepare for disposal'
    },
    {
      number: 7,
      name: 'Disposal',
      icon: '🗑️',
      description: 'Securely delete data when no longer needed',
      details: 'Use secure deletion methods, verify complete removal, document disposal, maintain audit trail'
    }
  ];

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Data Governance Lifecycle</h3>

      {/* Circular Flow Diagram */}
      <div className="flex justify-center mb-8">
        <svg width="400" height="400" viewBox="0 0 400 400" className="drop-shadow-lg">
          {/* Outer circle */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
          
          {/* Inner circle */}
          <circle cx="200" cy="200" r="100" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
          
          {/* Center text */}
          <text x="200" y="200" textAnchor="middle" className="font-bold text-lg fill-green-700">
            Data
          </text>
          <text x="200" y="220" textAnchor="middle" className="font-bold text-lg fill-green-700">
            Governance
          </text>

          {/* Phases around circle */}
          {phases.map((phase, idx) => {
            const angle = (idx / phases.length) * 2 * Math.PI - Math.PI / 2;
            const x = 200 + 180 * Math.cos(angle);
            const y = 200 + 180 * Math.sin(angle);
            
            return (
              <g key={idx}>
                {/* Phase circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="30"
                  fill={activePhase === idx ? '#059669' : '#d1fae5'}
                  stroke={activePhase === idx ? '#047857' : '#10b981'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onClick={() => setActivePhase(idx)}
                />
                
                {/* Phase number/icon */}
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  className={`font-bold text-lg ${activePhase === idx ? 'fill-white' : 'fill-green-700'}`}
                >
                  {phase.icon}
                </text>
              </g>
            );
          })}

          {/* Arrows between phases */}
          {phases.map((_, idx) => {
            const angle1 = (idx / phases.length) * 2 * Math.PI - Math.PI / 2;
            const angle2 = ((idx + 1) / phases.length) * 2 * Math.PI - Math.PI / 2;
            
            const x1 = 200 + 150 * Math.cos(angle1);
            const y1 = 200 + 150 * Math.sin(angle1);
            const x2 = 200 + 150 * Math.cos(angle2);
            const y2 = 200 + 150 * Math.sin(angle2);
            
            return (
              <line
                key={`arrow-${idx}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#10b981"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            );
          })}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Phase Details */}
      <div className="bg-white rounded-lg border-2 border-green-300 p-6">
        <div className="flex items-start gap-4">
          <div className="text-5xl">{phases[activePhase].icon}</div>
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Phase {phases[activePhase].number}: {phases[activePhase].name}
            </h4>
            <p className="text-gray-700 mb-3">{phases[activePhase].description}</p>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <p className="text-sm text-gray-700">{phases[activePhase].details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActivePhase((activePhase - 1 + phases.length) % phases.length)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          ← Previous
        </button>
        <span className="px-4 py-2 bg-green-100 text-green-900 rounded-lg font-semibold">
          {activePhase + 1} / {phases.length}
        </span>
        <button
          onClick={() => setActivePhase((activePhase + 1) % phases.length)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Next →
        </button>
      </div>
    </Card>
  );
};

// ============================================================================
// AI ETHICS PRINCIPLES DIAGRAM
// ============================================================================
export const AIEthicsPrinciplesDiagram: React.FC = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string | null>('fairness');

  const principles = [
    {
      id: 'fairness',
      name: 'Fairness',
      icon: '⚖️',
      color: 'bg-blue-100 border-blue-400',
      description: 'AI systems should treat all individuals fairly without discrimination',
      details: 'Avoid bias in training data, test for discriminatory outcomes, monitor for fairness issues, implement bias mitigation strategies'
    },
    {
      id: 'transparency',
      name: 'Transparency',
      icon: '👁️',
      color: 'bg-purple-100 border-purple-400',
      description: 'AI decision-making should be explainable to users',
      details: 'Document AI processes, provide explanations for decisions, enable user understanding, disclose AI use'
    },
    {
      id: 'accountability',
      name: 'Accountability',
      icon: '📋',
      color: 'bg-green-100 border-green-400',
      description: 'Organizations must be responsible for AI impacts',
      details: 'Establish governance structures, maintain audit trails, document decisions, enable challenge mechanisms'
    },
    {
      id: 'privacy',
      name: 'Privacy',
      icon: '🔒',
      color: 'bg-red-100 border-red-400',
      description: 'AI systems must respect individual privacy rights',
      details: 'Protect training data, minimize data collection, implement security, comply with privacy laws'
    },
    {
      id: 'security',
      name: 'Security',
      icon: '🛡️',
      color: 'bg-orange-100 border-orange-400',
      description: 'AI systems must be protected against attacks',
      details: 'Secure training data, protect against adversarial attacks, implement safeguards, monitor for misuse'
    },
    {
      id: 'explainability',
      name: 'Explainability',
      icon: '💡',
      color: 'bg-yellow-100 border-yellow-400',
      description: 'AI decisions should be understandable in human terms',
      details: 'Provide clear explanations, use interpretable models, document reasoning, enable user comprehension'
    }
  ];

  return (
    <Card className="my-8 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-purple-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">AI Ethics Principles</h3>

      {/* Hexagon-like Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {principles.map((principle) => (
          <div
            key={principle.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedPrinciple === principle.id
                ? principle.color + ' shadow-lg'
                : 'bg-white border-gray-200 hover:shadow-md'
            }`}
            onClick={() => setSelectedPrinciple(selectedPrinciple === principle.id ? null : principle.id)}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{principle.icon}</div>
              <h4 className="font-bold text-gray-900">{principle.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Principle Details */}
      {selectedPrinciple && (
        <div className="bg-white rounded-lg border-2 border-purple-300 p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-5xl">
              {principles.find(p => p.id === selectedPrinciple)?.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {principles.find(p => p.id === selectedPrinciple)?.name}
              </h4>
              <p className="text-gray-700 mb-3">
                {principles.find(p => p.id === selectedPrinciple)?.description}
              </p>
              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm text-gray-700 font-semibold mb-2">Implementation:</p>
                <p className="text-sm text-gray-700">{principles.find(p => p.id === selectedPrinciple)?.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interconnection Note */}
      <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
        <p className="text-gray-700 font-semibold">
          🔗 <strong>Interconnected Principles:</strong> These six principles work together to create responsible AI. For example, transparency supports accountability, and privacy protections enable fairness by preventing bias from hidden data practices.
        </p>
      </div>
    </Card>
  );
};

export default {
  CIATriadDiagram,
  PrivacyLawFrameworkDiagram,
  ThreatMatrixDiagram,
  DataGovernanceLifecycleDiagram,
  AIEthicsPrinciplesDiagram
};
