import { Quiz, MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion } from '@/components/training/QuizSystem';

// ============================================================================
// MODULE 1: ONTARIO PRIVACY LAW MASTERY - QUIZ
// ============================================================================

const module1Quiz: Quiz = {
  id: 'quiz-1',
  moduleId: 1,
  title: 'Ontario Privacy Law Mastery Quiz',
  description: 'Test your knowledge of FIPPA, MFIPPA, and PIPEDA',
  passingScore: 70,
  timeLimit: 30,
  certificateEligible: true,
  questions: [
    {
      id: 'q1-1',
      type: 'multiple-choice',
      question: 'Which law applies to Ontario provincial government institutions?',
      options: [
        'PIPEDA',
        'FIPPA',
        'MFIPPA',
        'GDPR'
      ],
      correctAnswerIndex: 1,
      difficulty: 'easy',
      points: 10,
      explanation: 'FIPPA (Freedom of Information and Protection of Privacy Act) applies to provincial government institutions.'
    } as MultipleChoiceQuestion,
    {
      id: 'q1-2',
      type: 'multiple-choice',
      question: 'What is the standard response time for FIPPA access requests?',
      options: [
        '15 days',
        '30 days',
        '60 days',
        '90 days'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'Organizations must respond to FIPPA access requests within 30 days.'
    } as MultipleChoiceQuestion,
    {
      id: 'q1-3',
      type: 'true-false',
      question: 'MFIPPA applies to all private sector organizations in Ontario.',
      correctAnswer: false,
      difficulty: 'easy',
      points: 10,
      explanation: 'MFIPPA applies to municipalities. PIPEDA applies to private sector organizations.'
    } as TrueFalseQuestion,
    {
      id: 'q1-4',
      type: 'multiple-choice',
      question: 'Which of the following is NOT a valid exemption under FIPPA?',
      options: [
        'Solicitor-client privilege',
        'Personal information about third parties',
        'Trade secrets',
        'Information about product quality'
      ],
      correctAnswerIndex: 3,
      difficulty: 'hard',
      points: 15,
      explanation: 'Information about product quality is not a standard FIPPA exemption. The other three are valid exemptions.'
    } as MultipleChoiceQuestion,
    {
      id: 'q1-5',
      type: 'short-answer',
      question: 'What does FIPPA stand for?',
      correctAnswers: [
        'Freedom of Information and Protection of Privacy Act',
        'freedom of information and protection of privacy act'
      ],
      caseSensitive: false,
      difficulty: 'easy',
      points: 10,
      explanation: 'FIPPA is the Freedom of Information and Protection of Privacy Act.'
    } as ShortAnswerQuestion,
    {
      id: 'q1-6',
      type: 'true-false',
      question: 'An organization can refuse an access request if the requester does not provide a reason.',
      correctAnswer: false,
      difficulty: 'medium',
      points: 10,
      explanation: 'Organizations cannot refuse requests based on lack of stated reason. They must respond to all valid requests.'
    } as TrueFalseQuestion,
    {
      id: 'q1-7',
      type: 'multiple-choice',
      question: 'Which organization would fall under MFIPPA?',
      options: [
        'Provincial health ministry',
        'City of Toronto',
        'Private hospital',
        'Federal government agency'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'MFIPPA applies to municipalities like the City of Toronto.'
    } as MultipleChoiceQuestion,
    {
      id: 'q1-8',
      type: 'multiple-choice',
      question: 'What is the primary purpose of privacy legislation?',
      options: [
        'To prevent all data collection',
        'To protect personal information and ensure transparency',
        'To eliminate government oversight',
        'To increase data collection'
      ],
      correctAnswerIndex: 1,
      difficulty: 'easy',
      points: 10,
      explanation: 'Privacy legislation protects personal information and ensures transparency in how it is used.'
    } as MultipleChoiceQuestion
  ]
};

// ============================================================================
// MODULE 2: CYBERSECURITY FUNDAMENTALS - QUIZ
// ============================================================================

const module2Quiz: Quiz = {
  id: 'quiz-2',
  moduleId: 2,
  title: 'Cybersecurity Fundamentals Quiz',
  description: 'Test your understanding of cybersecurity principles and threats',
  passingScore: 70,
  timeLimit: 30,
  certificateEligible: true,
  questions: [
    {
      id: 'q2-1',
      type: 'multiple-choice',
      question: 'What does the CIA Triad stand for?',
      options: [
        'Central Intelligence Agency Triad',
        'Confidentiality, Integrity, Availability',
        'Cybersecurity, Information, Access',
        'Compliance, Implementation, Audit'
      ],
      correctAnswerIndex: 1,
      difficulty: 'easy',
      points: 10,
      explanation: 'The CIA Triad represents Confidentiality, Integrity, and Availability - the three core principles of cybersecurity.'
    } as MultipleChoiceQuestion,
    {
      id: 'q2-2',
      type: 'true-false',
      question: 'Confidentiality means ensuring data has not been modified.',
      correctAnswer: false,
      difficulty: 'easy',
      points: 10,
      explanation: 'Confidentiality means restricting access to authorized users. Integrity means ensuring data has not been modified.'
    } as TrueFalseQuestion,
    {
      id: 'q2-3',
      type: 'multiple-choice',
      question: 'Which of the following is the BEST protection against phishing attacks?',
      options: [
        'Using a strong password',
        'User awareness training and email filtering',
        'Installing antivirus software',
        'Using a VPN'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 15,
      explanation: 'User awareness training combined with email filtering is the most effective defense against phishing.'
    } as MultipleChoiceQuestion,
    {
      id: 'q2-4',
      type: 'multiple-choice',
      question: 'What is a zero-day vulnerability?',
      options: [
        'A vulnerability that has been known for zero days',
        'A vulnerability with no security patches available',
        'A vulnerability that affects zero systems',
        'A vulnerability in legacy systems'
      ],
      correctAnswerIndex: 1,
      difficulty: 'hard',
      points: 15,
      explanation: 'A zero-day vulnerability is one for which no patch or fix has been released yet.'
    } as MultipleChoiceQuestion,
    {
      id: 'q2-5',
      type: 'short-answer',
      question: 'What does MFA stand for?',
      correctAnswers: [
        'Multi-Factor Authentication',
        'multi-factor authentication'
      ],
      caseSensitive: false,
      difficulty: 'easy',
      points: 10,
      explanation: 'MFA stands for Multi-Factor Authentication, which requires multiple verification methods.'
    } as ShortAnswerQuestion,
    {
      id: 'q2-6',
      type: 'true-false',
      question: 'Ransomware is a type of malware that encrypts files and demands payment for decryption.',
      correctAnswer: true,
      difficulty: 'easy',
      points: 10,
      explanation: 'Ransomware encrypts files and demands payment (ransom) for the decryption key.'
    } as TrueFalseQuestion,
    {
      id: 'q2-7',
      type: 'multiple-choice',
      question: 'Which security principle should be applied when granting user access?',
      options: [
        'Grant all users full access',
        'Principle of Least Privilege',
        'Grant access based on department',
        'Grant access based on seniority'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'The Principle of Least Privilege means users should only have access to what they need.'
    } as MultipleChoiceQuestion,
    {
      id: 'q2-8',
      type: 'multiple-choice',
      question: 'What is social engineering?',
      options: [
        'Using technology to hack systems',
        'Manipulating people to divulge confidential information',
        'Building social networks',
        'Engineering social media platforms'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'Social engineering is the manipulation of people to trick them into divulging confidential information.'
    } as MultipleChoiceQuestion
  ]
};

// ============================================================================
// MODULE 3: AI GOVERNANCE & ETHICS - QUIZ
// ============================================================================

const module3Quiz: Quiz = {
  id: 'quiz-3',
  moduleId: 3,
  title: 'AI Governance & Ethics Quiz',
  description: 'Test your knowledge of responsible AI and ethical considerations',
  passingScore: 70,
  timeLimit: 30,
  certificateEligible: true,
  questions: [
    {
      id: 'q3-1',
      type: 'multiple-choice',
      question: 'What is AI bias?',
      options: [
        'The preference of AI systems for certain data types',
        'Systematic errors in AI predictions that disadvantage certain groups',
        'The speed at which AI processes information',
        'The cost of implementing AI systems'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'AI bias refers to systematic errors that result in unfair outcomes for certain groups.'
    } as MultipleChoiceQuestion,
    {
      id: 'q3-2',
      type: 'true-false',
      question: 'Explainability in AI means the system can explain its decisions.',
      correctAnswer: true,
      difficulty: 'easy',
      points: 10,
      explanation: 'Explainability (or interpretability) is the ability to understand and explain AI decisions.'
    } as TrueFalseQuestion,
    {
      id: 'q3-3',
      type: 'multiple-choice',
      question: 'Which principle is most important in responsible AI development?',
      options: [
        'Maximizing profit',
        'Minimizing computational cost',
        'Ensuring fairness and transparency',
        'Achieving highest accuracy regardless of consequences'
      ],
      correctAnswerIndex: 2,
      difficulty: 'medium',
      points: 15,
      explanation: 'Responsible AI prioritizes fairness, transparency, and ethical considerations.'
    } as MultipleChoiceQuestion,
    {
      id: 'q3-4',
      type: 'short-answer',
      question: 'What does GDPR stand for?',
      correctAnswers: [
        'General Data Protection Regulation',
        'general data protection regulation'
      ],
      caseSensitive: false,
      difficulty: 'easy',
      points: 10,
      explanation: 'GDPR is the General Data Protection Regulation, a European privacy law.'
    } as ShortAnswerQuestion,
    {
      id: 'q3-5',
      type: 'true-false',
      question: 'Algorithmic accountability means AI systems should be accountable for their decisions.',
      correctAnswer: true,
      difficulty: 'medium',
      points: 10,
      explanation: 'Algorithmic accountability ensures organizations are responsible for AI system decisions and outcomes.'
    } as TrueFalseQuestion,
    {
      id: 'q3-6',
      type: 'multiple-choice',
      question: 'How can organizations mitigate AI bias?',
      options: [
        'Use more data',
        'Increase model complexity',
        'Diverse training data and regular auditing',
        'Run models faster'
      ],
      correctAnswerIndex: 2,
      difficulty: 'hard',
      points: 15,
      explanation: 'Mitigating bias requires diverse training data, regular audits, and continuous monitoring.'
    } as MultipleChoiceQuestion,
    {
      id: 'q3-7',
      type: 'multiple-choice',
      question: 'What is the primary goal of AI governance?',
      options: [
        'To prevent all AI development',
        'To ensure AI systems are developed and used responsibly',
        'To maximize AI adoption',
        'To reduce AI costs'
      ],
      correctAnswerIndex: 1,
      difficulty: 'easy',
      points: 10,
      explanation: 'AI governance ensures systems are developed and deployed responsibly and ethically.'
    } as MultipleChoiceQuestion,
    {
      id: 'q3-8',
      type: 'true-false',
      question: 'Privacy by design means privacy should be considered after AI system deployment.',
      correctAnswer: false,
      difficulty: 'medium',
      points: 10,
      explanation: 'Privacy by design means privacy should be built in from the start of development, not added later.'
    } as TrueFalseQuestion
  ]
};

// ============================================================================
// MODULE 4: DATA MANAGEMENT EXCELLENCE - QUIZ
// ============================================================================

const module4Quiz: Quiz = {
  id: 'quiz-4',
  moduleId: 4,
  title: 'Data Management Excellence Quiz',
  description: 'Test your knowledge of data governance and management best practices',
  passingScore: 70,
  timeLimit: 30,
  certificateEligible: true,
  questions: [
    {
      id: 'q4-1',
      type: 'multiple-choice',
      question: 'What is data governance?',
      options: [
        'The process of collecting data',
        'The framework for managing data assets and ensuring quality',
        'The storage of data in databases',
        'The analysis of data'
      ],
      correctAnswerIndex: 1,
      difficulty: 'easy',
      points: 10,
      explanation: 'Data governance is the framework for managing data assets, ensuring quality, and compliance.'
    } as MultipleChoiceQuestion,
    {
      id: 'q4-2',
      type: 'true-false',
      question: 'Data classification is the process of categorizing data by sensitivity and business value.',
      correctAnswer: true,
      difficulty: 'easy',
      points: 10,
      explanation: 'Data classification categorizes data by sensitivity level and business importance.'
    } as TrueFalseQuestion,
    {
      id: 'q4-3',
      type: 'multiple-choice',
      question: 'Which of the following is NOT a component of data governance?',
      options: [
        'Data quality management',
        'Data security policies',
        'Data inventory and cataloging',
        'Data deletion without retention'
      ],
      correctAnswerIndex: 3,
      difficulty: 'medium',
      points: 15,
      explanation: 'Data governance includes quality, security, and inventory management, but not arbitrary deletion.'
    } as MultipleChoiceQuestion,
    {
      id: 'q4-4',
      type: 'short-answer',
      question: 'What does CRUD stand for in data management?',
      correctAnswers: [
        'Create, Read, Update, Delete',
        'create, read, update, delete'
      ],
      caseSensitive: false,
      difficulty: 'medium',
      points: 10,
      explanation: 'CRUD represents the four basic operations on data: Create, Read, Update, Delete.'
    } as ShortAnswerQuestion,
    {
      id: 'q4-5',
      type: 'true-false',
      question: 'Data retention policies determine how long data should be kept.',
      correctAnswer: true,
      difficulty: 'easy',
      points: 10,
      explanation: 'Data retention policies specify how long different types of data should be retained.'
    } as TrueFalseQuestion,
    {
      id: 'q4-6',
      type: 'multiple-choice',
      question: 'What is the principle of least privilege in data access?',
      options: [
        'Give all users full access',
        'Users should only access data they need for their role',
        'Limit data access to executives',
        'Prevent all data access'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'Least privilege means users only have access to the minimum data necessary for their job.'
    } as MultipleChoiceQuestion,
    {
      id: 'q4-7',
      type: 'multiple-choice',
      question: 'Why is data quality important?',
      options: [
        'It reduces storage costs',
        'It ensures accurate analysis and decision-making',
        'It speeds up data processing',
        'It eliminates the need for backups'
      ],
      correctAnswerIndex: 1,
      difficulty: 'medium',
      points: 10,
      explanation: 'Data quality ensures accurate analysis, reporting, and informed decision-making.'
    } as MultipleChoiceQuestion,
    {
      id: 'q4-8',
      type: 'true-false',
      question: 'Data stewardship refers to the responsibility of individuals to manage data properly.',
      correctAnswer: true,
      difficulty: 'medium',
      points: 10,
      explanation: 'Data stewardship is the responsibility of people to manage data assets properly and ethically.'
    } as TrueFalseQuestion
  ]
};

// ============================================================================
// EXPORT ALL QUIZZES
// ============================================================================

export const allQuizzes: Quiz[] = [
  module1Quiz,
  module2Quiz,
  module3Quiz,
  module4Quiz
];

export function getQuizByModuleId(moduleId: number): Quiz | undefined {
  return allQuizzes.find(quiz => quiz.moduleId === moduleId);
}

export function getQuizById(quizId: string): Quiz | undefined {
  return allQuizzes.find(quiz => quiz.id === quizId);
}
