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
            scenario: "A city government department experiences a data breach affecting residents",
            questions: [
              {
                id: 1,
                question: "Which privacy law applies?",
                options: ["FIPPA", "MFIPPA", "PIPEDA"],
                correct: 1,
                explanation: "MFIPPA applies to municipalities"
              }
            ],
            learnings: ["Municipalities follow MFIPPA", "Breach notification is mandatory"]
          }
        ],
        practiceScenarios: [
          {
            id: 1,
            title: "Privacy Law Application",
            description: "Determine which privacy law applies",
            situation: "You need to advise organizations about privacy laws",
            tasks: [
              {
                id: 1,
                task: "A private bank asks about privacy law",
                correctApproach: "PIPEDA applies to private sector organizations",
                commonMistakes: ["Confusing PIPEDA with FIPPA"]
              }
            ],
            bestPractices: ["Always identify the sector first", "Understand specific requirements"]
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
