/**
 * Comprehensive Interactive Content Library
 * Case Studies, Scenarios, Exercises, and Reflection Prompts
 */

export interface CaseStudy {
  id: string;
  moduleId: number;
  title: string;
  organization: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyLearnings: string[];
  relatedLessons: number[];
}

export interface InteractiveScenario {
  id: string;
  moduleId: number;
  lessonId: number;
  title: string;
  description: string;
  situation: string;
  options: {
    text: string;
    correct: boolean;
    feedback: string;
    explanation: string;
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Exercise {
  id: string;
  moduleId: number;
  title: string;
  description: string;
  instructions: string[];
  expectedOutcome: string;
  tips: string[];
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// ============================================
// MODULE 1: ONTARIO PRIVACY LAW MASTERY
// ============================================

export const module1CaseStudies: CaseStudy[] = [
  {
    id: 'case-1-1',
    moduleId: 1,
    title: 'Municipal Data Breach Response Under MFIPPA',
    organization: 'City of Toronto',
    industry: 'Municipal Government',
    challenge: 'A ransomware attack exposed personal information of 50,000 residents including names, addresses, phone numbers, and health records. The municipality faced significant pressure to respond quickly while maintaining MFIPPA compliance.',
    solution: 'The city implemented immediate containment procedures, isolated affected systems, conducted a forensic investigation, and established a dedicated breach response team. They notified all affected residents within the required 30-day window, provided credit monitoring, and enhanced security controls including multi-factor authentication and employee security training.',
    outcome: 'Successfully managed the incident with full MFIPPA compliance. No regulatory fines were imposed. Residents received comprehensive support. The city improved its overall security posture and prevented similar incidents through enhanced controls.',
    keyLearnings: [
      'Timely notification is critical for MFIPPA compliance',
      'Documentation of response efforts is essential for regulatory review',
      'Employee training significantly reduces human error risks',
      'Incident response planning enables faster and more effective recovery',
      'Transparent communication builds public trust during crises'
    ],
    relatedLessons: [1, 2, 3]
  },
  {
    id: 'case-1-2',
    moduleId: 1,
    title: 'Healthcare Privacy Compliance Under PIPEDA',
    organization: 'Regional Health Network',
    industry: 'Healthcare',
    challenge: 'A healthcare provider needed to comply with PIPEDA while managing patient records across multiple facilities. Staff were not consistently following privacy protocols, and patient consent processes were unclear.',
    solution: 'Developed comprehensive privacy policy, implemented role-based access controls limiting staff access to only necessary information, conducted mandatory privacy training for all staff, established privacy audit procedures, and created clear patient consent forms.',
    outcome: 'Achieved full PIPEDA compliance. Reduced unauthorized access incidents by 95%. Improved patient trust and satisfaction scores by 40%. Reduced privacy complaints to near zero.',
    keyLearnings: [
      'Role-based access controls are essential for protecting sensitive health information',
      'Staff training must be ongoing and mandatory for all personnel',
      'Privacy audits identify gaps and improvement opportunities',
      'Clear policies reduce compliance violations significantly',
      'Patient communication builds trust and improves outcomes'
    ],
    relatedLessons: [1, 2, 3, 4]
  },
  {
    id: 'case-1-3',
    moduleId: 1,
    title: 'Corporate PIPEDA Implementation in Finance',
    organization: 'Financial Services Company',
    industry: 'Finance',
    challenge: 'A financial institution collected customer data across multiple channels (online, phone, in-person) but lacked clear privacy governance. Customer consent processes were unclear and inconsistent across channels.',
    solution: 'Implemented centralized customer consent management system, created clear and accessible privacy notices, established data retention policies with automatic deletion procedures, and trained all customer-facing staff on privacy requirements.',
    outcome: 'Achieved PIPEDA compliance. Increased customer trust scores. Reduced privacy complaints by 80%. Improved data quality by 60% through standardized collection processes.',
    keyLearnings: [
      'Consent must be clear, specific, and documented',
      'Privacy notices should be accessible and written in plain language',
      'Data retention policies must be actively enforced',
      'Customer communication builds trust and improves compliance',
      'Centralized systems ensure consistent privacy practices'
    ],
    relatedLessons: [1, 2, 3, 4, 5]
  }
];

export const module1Scenarios: InteractiveScenario[] = [
  {
    id: 'scenario-1-1',
    moduleId: 1,
    lessonId: 1,
    title: 'Identifying Applicable Privacy Law',
    description: 'Determine which privacy law applies to different organizations',
    situation: 'You are advising three different organizations about privacy requirements. Organization A is a provincial government agency, Organization B is a city municipality, and Organization C is a private bank.',
    options: [
      {
        text: 'All three follow PIPEDA',
        correct: false,
        feedback: 'Incorrect. Different sectors follow different laws.',
        explanation: 'PIPEDA only applies to private sector organizations. Government entities follow FIPPA or MFIPPA depending on their level.'
      },
      {
        text: 'A follows FIPPA, B follows MFIPPA, C follows PIPEDA',
        correct: true,
        feedback: 'Correct! You identified the applicable laws correctly.',
        explanation: 'Provincial agencies follow FIPPA, municipalities follow MFIPPA, and private sector organizations follow PIPEDA.'
      },
      {
        text: 'A and B follow FIPPA, C follows PIPEDA',
        correct: false,
        feedback: 'Incorrect. Municipalities have their own law.',
        explanation: 'Municipalities follow MFIPPA, not FIPPA. FIPPA only applies to provincial government.'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'scenario-1-2',
    moduleId: 1,
    lessonId: 2,
    title: 'Privacy Breach Notification Decision',
    description: 'A customer calls asking if their data was in a breach. What should you do?',
    situation: 'A customer calls your organization asking if their personal information was affected by a recent data breach. You are not sure if they were affected.',
    options: [
      {
        text: 'Tell them you cannot discuss breaches over the phone',
        correct: false,
        feedback: 'This creates unnecessary frustration.',
        explanation: 'You should provide information about the breach and how to verify if they were affected.'
      },
      {
        text: 'Provide information about the breach and direct them to verify their status online',
        correct: true,
        feedback: 'Correct! You are being transparent and helpful.',
        explanation: 'Transparency about breaches builds trust. Providing clear information helps customers protect themselves.'
      },
      {
        text: 'Deny that any breach occurred',
        correct: false,
        feedback: 'This violates privacy law requirements.',
        explanation: 'Privacy laws require organizations to notify affected individuals about breaches. Denying breaches is not compliant.'
      }
    ],
    difficulty: 'intermediate'
  }
];

export const module1Exercises: Exercise[] = [
  {
    id: 'exercise-1-1',
    moduleId: 1,
    title: 'Privacy Impact Assessment',
    description: 'Conduct a comprehensive privacy impact assessment for a new customer data collection initiative.',
    instructions: [
      'Identify all types of personal information being collected (direct and indirect identifiers)',
      'Determine the legal basis for collection under applicable privacy law',
      'Assess potential privacy risks including data breaches and unauthorized access',
      'Identify mitigation measures for each identified risk',
      'Document consent mechanisms and ensure they comply with requirements',
      'Plan for data retention periods and secure disposal procedures',
      'Document all findings in a formal assessment report'
    ],
    expectedOutcome: 'A comprehensive privacy impact assessment document that demonstrates understanding of privacy principles, applicable laws, and risk mitigation strategies.',
    tips: [
      'Consider all types of personal information including indirect identifiers like IP addresses',
      'Reference specific sections of applicable privacy laws (FIPPA, MFIPPA, or PIPEDA)',
      'Think about data breaches and how to minimize impact on individuals',
      'Document consent clearly and ensure it is obtained before collection',
      'Involve stakeholders from different departments in the assessment'
    ],
    estimatedTime: 120,
    difficulty: 'intermediate'
  }
];

// ============================================
// MODULE 2: CYBERSECURITY FUNDAMENTALS
// ============================================

export const module2Scenarios: InteractiveScenario[] = [
  {
    id: 'scenario-2-1',
    moduleId: 2,
    lessonId: 1,
    title: 'Phishing Email Detection',
    description: 'Identify and respond to a phishing attempt',
    situation: 'Subject: URGENT: Verify Your Account Immediately\nFrom: it-support@company.com\nBody: "Your account will be locked in 24 hours. Click here to verify your credentials immediately."',
    options: [
      {
        text: 'Click the link and verify credentials',
        correct: false,
        feedback: 'This is a phishing attempt!',
        explanation: 'Legitimate IT departments never ask for credentials via email links. The urgent language and credential request are red flags. Always verify by contacting IT directly.'
      },
      {
        text: 'Forward to IT security team and delete',
        correct: true,
        feedback: 'Correct! You identified and reported the phishing attempt.',
        explanation: 'Always report suspicious emails to your security team. Legitimate IT communications never include credential requests via email links.'
      },
      {
        text: 'Reply asking for more information',
        correct: false,
        feedback: 'This could confirm your email is active.',
        explanation: 'Replying to phishing emails confirms your email is active, leading to more attacks. Always report to security instead.'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'scenario-2-2',
    moduleId: 2,
    lessonId: 3,
    title: 'Password Security Decision',
    description: 'Create a strong password for a work system',
    situation: 'The system requires a minimum 8-character password. You are thinking of using your pet\'s name with the current year.',
    options: [
      {
        text: 'Use "Fluffy2026" - it\'s 10 characters',
        correct: false,
        feedback: 'This password is too predictable.',
        explanation: 'Personal information like pet names are easily guessed. Combine uppercase, lowercase, numbers, and special characters for strong passwords.'
      },
      {
        text: 'Use "P@ssw0rd123" - it has all character types',
        correct: false,
        feedback: 'This is a common password pattern.',
        explanation: 'Common words and predictable patterns are easily cracked. Use unique combinations of unrelated words or phrases.'
      },
      {
        text: 'Use "BlueMountain$Sunrise42!" - random combination',
        correct: true,
        feedback: 'Correct! This is a strong password.',
        explanation: 'This password combines uppercase, lowercase, numbers, and special characters in an unpredictable way, making it resistant to attacks.'
      }
    ],
    difficulty: 'beginner'
  },
  {
    id: 'scenario-2-3',
    moduleId: 2,
    lessonId: 5,
    title: 'USB Device Security',
    description: 'Respond to finding an unknown USB drive',
    situation: 'You find a USB drive in the parking lot labeled "Employee Salaries". You\'re curious about what\'s on it.',
    options: [
      {
        text: 'Plug it into your work computer to check contents',
        correct: false,
        feedback: 'This is a security risk!',
        explanation: 'Unknown USB devices can contain malware. This is a common attack vector. Never plug unknown devices into work computers.'
      },
      {
        text: 'Report it to IT security and let them handle it',
        correct: true,
        feedback: 'Correct! You followed proper security protocol.',
        explanation: 'Unknown devices should be reported to security. They can safely analyze it in an isolated environment.'
      },
      {
        text: 'Take it to a personal computer to check',
        correct: false,
        feedback: 'This could compromise your personal device.',
        explanation: 'Unknown devices can contain malware that affects any computer. Never plug them into any device without proper analysis.'
      }
    ],
    difficulty: 'beginner'
  }
];

export const module2Exercises: Exercise[] = [
  {
    id: 'exercise-2-1',
    moduleId: 2,
    title: 'Security Incident Response Plan Development',
    description: 'Develop a comprehensive security incident response plan for your organization.',
    instructions: [
      'Identify potential security threats specific to your organization',
      'Define incident response roles and responsibilities for each team member',
      'Create clear escalation procedures with specific criteria',
      'Document communication plans for different types of incidents',
      'Establish recovery procedures and backup systems',
      'Plan for post-incident review and lessons learned documentation'
    ],
    expectedOutcome: 'A detailed incident response plan that demonstrates understanding of security best practices and organizational preparedness.',
    tips: [
      'Include specific contact information for key personnel',
      'Define clear escalation criteria and decision points',
      'Plan for communication with affected parties and stakeholders',
      'Include regular testing and updates to the plan',
      'Involve IT, security, legal, and management teams'
    ],
    estimatedTime: 180,
    difficulty: 'intermediate'
  }
];

// ============================================
// MODULE 3: AI GOVERNANCE & ETHICS
// ============================================

export const module3Scenarios: InteractiveScenario[] = [
  {
    id: 'scenario-3-1',
    moduleId: 3,
    lessonId: 1,
    title: 'Algorithmic Bias Detection',
    description: 'Respond to discovered bias in an AI hiring system',
    situation: 'Your company is implementing an AI system for hiring decisions. Testing shows it rejects 80% of applications from certain demographics. The technical team says the algorithm is working as designed.',
    options: [
      {
        text: 'Deploy the system as-is since it\'s technically correct',
        correct: false,
        feedback: 'This perpetuates discrimination.',
        explanation: 'Algorithmic bias can violate human rights laws and ethical principles. The system must be retrained on unbiased data before deployment.'
      },
      {
        text: 'Pause deployment, investigate bias, and retrain the model',
        correct: true,
        feedback: 'Correct! You\'re addressing the ethical issue.',
        explanation: 'Identifying and correcting bias before deployment is essential for ethical AI. Retraining on diverse, representative data is the solution.'
      },
      {
        text: 'Deploy but monitor for complaints',
        correct: false,
        feedback: 'This allows discrimination to continue.',
        explanation: 'Proactive bias detection and correction is better than reactive complaint handling. Deploy only after bias is addressed.'
      }
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'scenario-3-2',
    moduleId: 3,
    lessonId: 2,
    title: 'AI Transparency and Explainability',
    description: 'Address customer concerns about AI decision-making',
    situation: 'Your company uses AI to make credit decisions. Customers are asking why their applications were denied. The AI model is complex and the company cannot easily explain specific decisions.',
    options: [
      {
        text: 'Tell customers the decision is final and cannot be explained',
        correct: false,
        feedback: 'This violates transparency principles.',
        explanation: 'Customers have a right to understand decisions affecting them. Lack of transparency erodes trust and may violate regulations.'
      },
      {
        text: 'Implement explainable AI and provide clear explanations',
        correct: true,
        feedback: 'Correct! You\'re prioritizing transparency.',
        explanation: 'Explainable AI helps customers understand decisions and builds trust. It\'s also increasingly required by regulations.'
      },
      {
        text: 'Use a simpler model that\'s easier to explain',
        correct: false,
        feedback: 'This may reduce accuracy.',
        explanation: 'While simpler models are more explainable, the better solution is implementing explainable AI techniques with complex models.'
      }
    ],
    difficulty: 'intermediate'
  }
];

export const module3Exercises: Exercise[] = [
  {
    id: 'exercise-3-1',
    moduleId: 3,
    title: 'AI Ethics Framework Development',
    description: 'Create a comprehensive ethics framework for AI systems in your organization.',
    instructions: [
      'Define core ethical principles (fairness, transparency, accountability, privacy)',
      'Identify potential risks and harms from AI systems',
      'Establish governance structure with clear roles and responsibilities',
      'Create review and approval processes for AI projects',
      'Define transparency and explainability standards',
      'Plan for ongoing monitoring and improvement of AI systems'
    ],
    expectedOutcome: 'A comprehensive AI ethics framework that demonstrates understanding of responsible AI development and deployment.',
    tips: [
      'Include diverse perspectives in framework development',
      'Address bias detection and mitigation strategies',
      'Define clear accountability structures and responsibilities',
      'Plan for regular framework updates as technology evolves',
      'Include specific examples and case studies'
    ],
    estimatedTime: 150,
    difficulty: 'advanced'
  }
];

// ============================================
// MODULE 4: DATA MANAGEMENT EXCELLENCE
// ============================================

export const module4Scenarios: InteractiveScenario[] = [
  {
    id: 'scenario-4-1',
    moduleId: 4,
    lessonId: 1,
    title: 'Data Quality Issue Resolution',
    description: 'Address data inconsistencies affecting analytics',
    situation: 'Your analytics team reports that customer data has inconsistencies: some records show "Toronto" and others show "TO" for the same city. This is affecting reporting accuracy.',
    options: [
      {
        text: 'Leave it as-is since the data is technically correct',
        correct: false,
        feedback: 'This impacts data quality and decision-making.',
        explanation: 'Data consistency is critical for accurate analysis. Standardizing formats improves data quality and reliability.'
      },
      {
        text: 'Implement data standardization and update all records',
        correct: true,
        feedback: 'Correct! You\'re improving data quality.',
        explanation: 'Standardizing data formats ensures consistency and improves the reliability of analytics and decision-making.'
      },
      {
        text: 'Create a note about the inconsistency',
        correct: false,
        feedback: 'This doesn\'t solve the underlying problem.',
        explanation: 'While documentation is important, actually fixing the data quality issue is the better solution.'
      }
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'scenario-4-2',
    moduleId: 4,
    lessonId: 3,
    title: 'Data Retention Decision',
    description: 'Decide on data retention for old customer records',
    situation: 'Your company has customer data from 10 years ago that is no longer needed for operations. The data is taking up storage space and creating security risks. However, some executives want to keep it for potential future analysis.',
    options: [
      {
        text: 'Keep all data indefinitely for potential future use',
        correct: false,
        feedback: 'This increases security risks and storage costs.',
        explanation: 'Keeping unnecessary data increases security risks and compliance burden. Follow retention policies and dispose of data appropriately.'
      },
      {
        text: 'Securely dispose of data according to retention policy',
        correct: true,
        feedback: 'Correct! You\'re following proper data governance.',
        explanation: 'Disposing of data according to retention policies reduces security risks and ensures compliance with privacy laws.'
      },
      {
        text: 'Archive it indefinitely without security controls',
        correct: false,
        feedback: 'This creates ongoing security risks.',
        explanation: 'Archived data still requires security controls and should be disposed of according to retention policies.'
      }
    ],
    difficulty: 'intermediate'
  }
];

export const module4Exercises: Exercise[] = [
  {
    id: 'exercise-4-1',
    moduleId: 4,
    title: 'Data Governance Policy Development',
    description: 'Develop a comprehensive data governance policy for your organization.',
    instructions: [
      'Define data governance roles and responsibilities',
      'Establish data classification standards',
      'Create data quality standards and metrics',
      'Define access control policies and procedures',
      'Establish retention and disposal procedures',
      'Plan for policy enforcement and monitoring'
    ],
    expectedOutcome: 'A detailed data governance policy that demonstrates understanding of data management best practices.',
    tips: [
      'Align with industry standards and regulations',
      'Include specific procedures for common scenarios',
      'Define clear ownership and accountability',
      'Plan for regular policy reviews and updates'
    ],
    estimatedTime: 120,
    difficulty: 'advanced'
  }
];

// ============================================
// REFLECTION PROMPTS FOR DEEPER LEARNING
// ============================================

export const reflectionPrompts = {
  module1: [
    'How do privacy laws in Ontario compare to other provinces or countries?',
    'What are the most challenging aspects of FIPPA/MFIPPA/PIPEDA compliance in your organization?',
    'How would you explain privacy rights to a non-technical stakeholder?',
    'What privacy risks are most relevant to your industry?',
    'How can organizations balance privacy protection with operational needs?'
  ],
  module2: [
    'What are the most common security threats in your workplace?',
    'How can you help colleagues improve their security practices?',
    'What security improvements would have the biggest impact in your organization?',
    'How do you balance security with usability in your daily work?',
    'What role does security culture play in organizational protection?'
  ],
  module3: [
    'What ethical concerns do you have about AI in your industry?',
    'How would you explain algorithmic bias to a non-technical audience?',
    'What governance structures are needed for responsible AI?',
    'How can organizations build trust in AI systems?',
    'What are the long-term implications of unethical AI deployment?'
  ],
  module4: [
    'What data management challenges does your organization face?',
    'How can better data governance improve decision-making?',
    'What data quality issues have you encountered?',
    'How would you prioritize data management improvements?',
    'What role does data quality play in organizational success?'
  ]
};

export default {
  module1CaseStudies,
  module1Scenarios,
  module1Exercises,
  module2Scenarios,
  module2Exercises,
  module3Scenarios,
  module3Exercises,
  module4Scenarios,
  module4Exercises,
  reflectionPrompts
};
