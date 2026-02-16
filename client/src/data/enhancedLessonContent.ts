/**
 * Enhanced Lesson Content with Interactive Elements
 * Includes knowledge checks, case studies, and practice scenarios
 */

export interface KnowledgeCheck {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  hint?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  scenario: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  learnings: string[];
}

export interface PracticeScenario {
  id: number;
  title: string;
  description: string;
  situation: string;
  tasks: {
    id: number;
    task: string;
    correctApproach: string;
    commonMistakes: string[];
  }[];
  bestPractices: string[];
}

export interface EnhancedLesson {
  id: number;
  title: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  learningObjectives: string[];
  keyPoints: string[];
  knowledgeChecks: KnowledgeCheck[];
  caseStudies?: CaseStudy[];
  practiceScenarios?: PracticeScenario[];
  estimatedCompletionTime: number;
}

export interface EnhancedModule {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: EnhancedLesson[];
  totalDuration: number;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  certificationValue: string;
  industryRelevance: string[];
}

// Enhanced Module 1: Ontario Privacy Law Mastery
export const enhancedModules: EnhancedModule[] = [
  {
    id: 1,
    title: "Ontario Privacy Law Mastery",
    description: "Master FIPPA, MFIPPA, and PIPEDA with interactive scenarios",
    icon: "⚖️",
    color: "blue",
    skillLevel: "intermediate",
    totalDuration: 480,
    certificationValue: "4 CPD hours",
    industryRelevance: ["Government", "Healthcare", "Finance", "Education"],
    lessons: [
      {
        id: 1,
        title: "Introduction to Privacy Legislation",
        duration: "15 min",
        difficulty: "beginner",
        estimatedCompletionTime: 15,
        content: `# Introduction to Privacy Legislation

Privacy legislation in Ontario forms the foundation of data protection.

## Overview of Ontario Privacy Laws

Ontario has three major privacy statutes:
1. FIPPA - Freedom of Information and Protection of Privacy Act
2. MFIPPA - Municipal Freedom of Information and Protection of Privacy Act
3. PIPEDA - Personal Information Protection and Electronic Documents Act`,
        learningObjectives: [
          "Understand the three main privacy laws in Ontario",
          "Identify which law applies to different organizations",
          "Recognize the importance of privacy compliance"
        ],
        keyPoints: [
          "FIPPA applies to provincial government institutions",
          "MFIPPA applies to municipalities and local government",
          "PIPEDA applies to private sector organizations"
        ],
        knowledgeChecks: [
          {
            id: 1,
            question: "Which privacy law applies to provincial government institutions?",
            options: ["FIPPA", "MFIPPA", "PIPEDA", "All of the above"],
            correct: 0,
            explanation: "FIPPA applies to provincial government institutions",
            hint: "Think about the level of government"
          }
        ],
        caseStudies: [
          {
            id: 1,
            title: "City of Toronto Data Breach",
            scenario: "A city government department experiences a data breach affecting residents. 50,000 resident records including addresses, phone numbers, and service history are exposed. The municipality must determine notification requirements and remedial actions.",
            questions: [
              {
                id: 1,
                question: "Which privacy law applies?",
                options: ["FIPPA", "MFIPPA", "PIPEDA"],
                correct: 1,
                explanation: "MFIPPA applies to municipalities. They must follow specific notification and investigation procedures."
              },
              {
                id: 2,
                question: "What is the municipality's primary obligation?",
                options: [
                  "Immediately shut down all systems",
                  "Notify affected individuals and investigate the breach",
                  "Wait for the Privacy Commissioner to contact them",
                  "Publish the breach details publicly"
                ],
                correct: 1,
                explanation: "Municipalities must promptly notify affected individuals and conduct a thorough investigation to determine the scope and cause of the breach."
              }
            ],
            learnings: [
              "Municipalities follow MFIPPA requirements",
              "Breach notification is mandatory and time-sensitive",
              "Investigation and documentation are essential",
              "Remedial measures must be implemented to prevent recurrence"
            ]
          },
          {
            id: 2,
            title: "Healthcare Privacy Access Request",
            scenario: "A patient requests access to their complete medical records from a hospital. The hospital must determine what information can be released and what exemptions might apply.",
            questions: [
              {
                id: 1,
                question: "What is the hospital's obligation regarding access requests?",
                options: [
                  "Provide all information without restrictions",
                  "Deny the request to protect privacy",
                  "Provide information unless a valid exemption applies",
                  "Refer the patient to the Privacy Commissioner"
                ],
                correct: 2,
                explanation: "Privacy laws require organizations to provide access unless a valid exemption applies (e.g., information about third parties, legal privilege)."
              }
            ],
            learnings: [
              "Individuals have a right to access their personal information",
              "Organizations must respond within specified timeframes",
              "Some information may be withheld under valid exemptions",
              "Proper documentation of decisions is required"
            ]
          }
        ],
        practiceScenarios: [
          {
            id: 1,
            title: "Privacy Law Application",
            description: "Determine which privacy law applies to different organizations",
            situation: "You are a privacy consultant advising multiple organizations about their obligations",
            tasks: [
              {
                id: 1,
                task: "A private bank asks about privacy law",
                correctApproach: "PIPEDA applies to private sector organizations. They must obtain consent for information collection and provide access upon request.",
                commonMistakes: ["Confusing PIPEDA with FIPPA", "Assuming all financial institutions follow the same rules"]
              },
              {
                id: 2,
                task: "A provincial government ministry asks about their obligations",
                correctApproach: "FIPPA applies to provincial government institutions. They must be open about information practices and provide access to personal information.",
                commonMistakes: ["Confusing FIPPA with MFIPPA", "Not understanding exemptions"]
              },
              {
                id: 3,
                task: "A municipal library asks about privacy requirements",
                correctApproach: "MFIPPA applies to municipalities. The library must follow municipal privacy policies and respond to access requests.",
                commonMistakes: ["Treating municipal institutions like provincial ones", "Not understanding local privacy requirements"]
              }
            ],
            bestPractices: [
              "Always identify the sector first (government, municipal, private)",
              "Understand specific requirements of each law",
              "Document all privacy-related decisions",
              "Stay updated on privacy law changes and interpretations",
              "Engage privacy professionals for complex situations"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity principles and defense strategies",
    icon: "🔐",
    color: "teal",
    skillLevel: "beginner",
    totalDuration: 360,
    certificationValue: "3 CPD hours",
    industryRelevance: ["All Sectors", "IT", "Finance", "Healthcare"],
    lessons: [
      {
        id: 1,
        title: "Cybersecurity Basics",
        duration: "15 min",
        difficulty: "beginner",
        estimatedCompletionTime: 15,
        content: `# Cybersecurity Basics

Cybersecurity is the practice of protecting systems and data from attacks.

## The CIA Triad

1. Confidentiality - Data accessible only to authorized individuals
2. Integrity - Data accuracy and hasn't been modified
3. Availability - Systems and data are accessible when needed`,
        learningObjectives: [
          "Understand the CIA Triad",
          "Identify common cybersecurity threats",
          "Apply basic security principles"
        ],
        keyPoints: [
          "The CIA Triad is fundamental to security",
          "Threats are constantly evolving",
          "Everyone has a role in cybersecurity"
        ],
        knowledgeChecks: [
          {
            id: 1,
            question: "What does the 'C' in CIA Triad stand for?",
            options: ["Compliance", "Confidentiality", "Certification"],
            correct: 1,
            explanation: "Confidentiality ensures data is accessible only to authorized individuals",
            hint: "Think about keeping information secret"
          }
        ],
        caseStudies: [],
        practiceScenarios: []
      }
    ]
  },
  {
    id: 3,
    title: "AI Governance & Ethics",
    description: "Responsible AI development and ethical considerations",
    icon: "🤖",
    color: "purple",
    skillLevel: "intermediate",
    totalDuration: 240,
    certificationValue: "2 CPD hours",
    industryRelevance: ["Technology", "Finance", "Healthcare"],
    lessons: [
      {
        id: 1,
        title: "AI Ethics Fundamentals",
        duration: "15 min",
        difficulty: "intermediate",
        estimatedCompletionTime: 15,
        content: `# AI Ethics Fundamentals

Artificial Intelligence requires ethical considerations.

## Key Ethical Principles

1. Fairness - AI systems should treat all individuals fairly
2. Transparency - AI decision-making should be explainable
3. Accountability - Organizations must be responsible
4. Privacy - AI systems must protect personal data`,
        learningObjectives: [
          "Understand key AI ethics principles",
          "Identify ethical risks in AI systems",
          "Recognize bias in AI systems"
        ],
        keyPoints: [
          "AI ethics is essential for responsible development",
          "Bias can be introduced at any stage",
          "Ethical AI builds trust with users"
        ],
        knowledgeChecks: [
          {
            id: 1,
            question: "What is algorithmic bias?",
            options: [
              "Bias in training data",
              "Bias in algorithm design",
              "Both data and design bias",
              "Bias that cannot be detected"
            ],
            correct: 2,
            explanation: "Algorithmic bias comes from both data and design",
            hint: "Think about all places bias could be introduced"
          }
        ],
        caseStudies: [],
        practiceScenarios: []
      }
    ]
  },
  {
    id: 4,
    title: "Data Management Excellence",
    description: "Data governance, quality, and lifecycle management",
    icon: "📊",
    color: "green",
    skillLevel: "intermediate",
    totalDuration: 300,
    certificationValue: "2.5 CPD hours",
    industryRelevance: ["All Sectors", "Analytics", "Finance"],
    lessons: [
      {
        id: 1,
        title: "Data Governance Essentials",
        duration: "15 min",
        difficulty: "intermediate",
        estimatedCompletionTime: 15,
        content: `# Data Governance Essentials

Data governance is the framework for managing data assets.

## Core Components

1. Data Quality - Ensuring data is accurate and complete
2. Data Security - Protecting data from unauthorized access
3. Data Privacy - Respecting individual privacy rights
4. Data Lifecycle - Managing data from creation to deletion`,
        learningObjectives: [
          "Understand data governance frameworks",
          "Implement data quality measures",
          "Manage data lifecycle effectively"
        ],
        keyPoints: [
          "Data governance ensures quality and security",
          "Clear policies are essential",
          "Regular audits help maintain compliance"
        ],
        knowledgeChecks: [
          {
            id: 1,
            question: "What is a data steward?",
            options: [
              "Someone who stores data",
              "Someone responsible for managing data assets",
              "Someone who analyzes data",
              "Someone who deletes old data"
            ],
            correct: 1,
            explanation: "A data steward manages and protects data assets",
            hint: "Think about who should be responsible for data"
          }
        ],
        caseStudies: [],
        practiceScenarios: []
      }
    ]
  }
];

export const modules = enhancedModules;


// Extended case studies and practice scenarios for Module 2
export const module2CaseStudies: CaseStudy[] = [
  {
    id: 101,
    title: "Ransomware Attack on Small Business",
    scenario: "A small accounting firm is hit with ransomware. All client files are encrypted, and attackers demand $50,000. The firm has no recent backups.",
    questions: [
      {
        id: 1,
        question: "What is the most critical mistake this firm made?",
        options: [
          "Using outdated accounting software",
          "Not maintaining regular, offline backups",
          "Not using strong passwords",
          "Not having cyber insurance"
        ],
        correct: 1,
        explanation: "Regular, offline backups are essential for ransomware recovery. This firm could have restored data without paying the ransom."
      },
      {
        id: 2,
        question: "What should the firm do immediately after discovering the attack?",
        options: [
          "Pay the ransom to recover data quickly",
          "Isolate affected systems and contact law enforcement",
          "Continue working to minimize disruption",
          "Attempt to remove the ransomware themselves"
        ],
        correct: 1,
        explanation: "Isolating systems prevents spread of ransomware. Contacting law enforcement helps track cybercriminals."
      }
    ],
    learnings: [
      "Ransomware is a critical threat to all organizations",
      "Offline backups are essential for recovery",
      "Prompt incident response minimizes damage",
      "Paying ransom funds criminal activity"
    ]
  },
  {
    id: 102,
    title: "Phishing Email Campaign",
    scenario: "An employee receives an email appearing to be from IT asking them to verify credentials by clicking a link. The employee complies, and attackers gain network access.",
    questions: [
      {
        id: 1,
        question: "What security principle was violated?",
        options: ["Confidentiality", "Integrity", "Availability", "All of the above"],
        correct: 0,
        explanation: "Confidentiality was violated when the attacker gained unauthorized access using stolen credentials."
      }
    ],
    learnings: [
      "Phishing is a common social engineering attack",
      "Employee training is critical for security awareness",
      "Verify requests through official channels",
      "Multi-factor authentication can prevent credential-based attacks"
    ]
  }
];

export const module2PracticeScenarios: PracticeScenario[] = [
  {
    id: 201,
    title: "Threat Identification",
    description: "Identify cybersecurity threats and their impact on the CIA Triad",
    situation: "You are a security analyst reviewing potential threats to your organization",
    tasks: [
      {
        id: 1,
        task: "A disgruntled employee has access to customer data",
        correctApproach: "This is a confidentiality threat. Implement access controls, monitor data access, and have clear offboarding procedures.",
        commonMistakes: ["Assuming employees won't misuse access", "Not monitoring data access", "Slow offboarding"]
      },
      {
        id: 2,
        task: "The company website is frequently down due to DDoS attacks",
        correctApproach: "This is an availability threat. Implement DDoS protection, use CDNs, and have incident response procedures.",
        commonMistakes: ["Not having redundancy", "Ignoring early warning signs", "Slow response times"]
      }
    ],
    bestPractices: [
      "Regularly assess threats relevant to your organization",
      "Prioritize threats by likelihood and impact",
      "Implement controls for high-priority threats",
      "Monitor effectiveness of security controls",
      "Update threat assessments regularly"
    ]
  }
];

// Extended case studies and practice scenarios for Module 3
export const module3CaseStudies: CaseStudy[] = [
  {
    id: 301,
    title: "Biased AI Hiring System",
    scenario: "A corporation implements an AI system to screen job applications. After 6 months, the system is rejecting 80% of applications from women and minorities, while accepting 70% from men. The AI was trained on historical hiring data.",
    questions: [
      {
        id: 1,
        question: "What is the root cause of this bias?",
        options: [
          "The AI system is intentionally discriminatory",
          "The training data reflected historical discrimination in hiring",
          "The AI algorithm is fundamentally flawed",
          "The system was not properly tested"
        ],
        correct: 1,
        explanation: "AI systems learn patterns from training data. If historical data contains bias, the AI will perpetuate and amplify that bias."
      }
    ],
    learnings: [
      "AI systems can perpetuate historical biases",
      "Training data quality is critical for fair AI",
      "Bias in AI can have serious legal and ethical consequences",
      "Continuous monitoring for bias is essential"
    ]
  }
];

export const module3PracticeScenarios: PracticeScenario[] = [
  {
    id: 301,
    title: "AI Ethics Assessment",
    description: "Evaluate an AI system for ethical concerns and governance issues",
    situation: "You are an AI ethics officer reviewing an AI system used in your organization",
    tasks: [
      {
        id: 1,
        task: "Assess an AI system for potential bias",
        correctApproach: "Review training data for representation, test system outputs across demographic groups, and implement bias monitoring.",
        commonMistakes: ["Only testing with majority groups", "Not documenting bias findings", "Ignoring stakeholder concerns"]
      }
    ],
    bestPractices: [
      "Consider fairness, transparency, accountability, and human oversight",
      "Engage diverse perspectives in assessment",
      "Focus on high-impact decisions made by AI",
      "Document all findings and remediation steps",
      "Establish ongoing monitoring procedures"
    ]
  }
];

// Extended case studies and practice scenarios for Module 4
export const module4CaseStudies: CaseStudy[] = [
  {
    id: 401,
    title: "Data Proliferation Crisis",
    scenario: "A financial services company discovers they have customer data stored in 47 different systems. Many copies are outdated, some contain duplicates, and nobody knows what data is where. They cannot comply with data deletion requests.",
    questions: [
      {
        id: 1,
        question: "What is the primary governance failure?",
        options: [
          "Lack of data security",
          "Absence of data inventory and classification",
          "Insufficient backup procedures",
          "Poor disaster recovery planning"
        ],
        correct: 1,
        explanation: "Without knowing what data exists and where it is stored, organizations cannot manage, protect, or comply with regulations."
      }
    ],
    learnings: [
      "Data inventory is the foundation of data governance",
      "Uncontrolled data proliferation creates compliance risks",
      "Organizations must know where sensitive data is located",
      "Data minimization reduces governance burden"
    ]
  }
];

export const module4PracticeScenarios: PracticeScenario[] = [
  {
    id: 401,
    title: "Data Governance Implementation",
    description: "Develop a data governance framework for an organization",
    situation: "You are a data governance officer implementing a framework for your organization",
    tasks: [
      {
        id: 1,
        task: "Create a data inventory and classification scheme",
        correctApproach: "Identify all data sources, classify by sensitivity and business value, assign data owners, and document in a central registry.",
        commonMistakes: ["Incomplete inventory", "Unclear classification criteria", "No data ownership", "Not updating regularly"]
      }
    ],
    bestPractices: [
      "Start with high-value and sensitive data",
      "Engage business units in classification decisions",
      "Make policies practical and enforceable",
      "Plan for regular reviews and updates",
      "Establish clear roles and responsibilities",
      "Implement monitoring and compliance procedures"
    ]
  }
];
