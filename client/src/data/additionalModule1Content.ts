import { ContentSection } from '@/components/training/ProfessionalContentDisplay';

export interface AdditionalLessonContent {
  moduleId: number;
  lessonId: number;
  caseStudies: CaseStudy[];
  practicalExamples: PracticalExample[];
  regulatoryUpdates: RegulatoryUpdate[];
  bestPractices: BestPractice[];
}

export interface CaseStudy {
  title: string;
  organization: string;
  scenario: string;
  challenge: string;
  solution: string;
  outcome: string;
  lessonsLearned: string[];
}

export interface PracticalExample {
  title: string;
  description: string;
  steps: string[];
  commonMistakes: string[];
  tips: string[];
}

export interface RegulatoryUpdate {
  title: string;
  date: string;
  summary: string;
  impact: string;
  action: string;
}

export interface BestPractice {
  title: string;
  description: string;
  implementation: string[];
  benefits: string[];
  resources: string[];
}

export const additionalModule1Content: AdditionalLessonContent[] = [
  // Module 1, Lesson 1: Introduction to Privacy Legislation
  {
    moduleId: 1,
    lessonId: 1,
    caseStudies: [
      {
        title: "City of Toronto Privacy Breach",
        organization: "City of Toronto",
        scenario: "A contractor working on the city's website accidentally exposed personal information of over 30,000 residents including names, addresses, and phone numbers in a publicly accessible database.",
        challenge: "The city had to respond to a major privacy breach, notify affected individuals, investigate the cause, and implement corrective measures while managing public relations and regulatory scrutiny.",
        solution: "The city immediately took the database offline, launched a forensic investigation, notified all affected individuals within the required timeframe, offered credit monitoring services, and implemented enhanced security controls including regular security audits and employee training.",
        outcome: "While the city faced criticism initially, their transparent communication and swift response helped restore public trust. They implemented comprehensive privacy governance improvements and became a model for other municipalities.",
        lessonsLearned: [
          "Contractors handling personal information must be subject to the same privacy controls as employees",
          "Regular security audits and vulnerability assessments are essential for early detection",
          "Transparent communication with affected individuals is critical for maintaining trust",
          "Privacy incidents should trigger comprehensive governance reviews, not just technical fixes"
        ]
      },
      {
        title: "Healthcare Provider FIPPA Violation",
        organization: "Ontario Healthcare Provider",
        scenario: "A healthcare provider stored patient records in an unencrypted shared folder accessible to all staff members, violating FIPPA's security requirements.",
        challenge: "The Information and Privacy Commissioner received complaints from patients about unauthorized access to their medical records. The provider faced investigation, potential fines, and loss of patient trust.",
        solution: "The provider implemented encryption for all patient data, established role-based access controls, conducted privacy training for all staff, and created a privacy governance framework with regular audits.",
        outcome: "The provider avoided significant fines by demonstrating commitment to privacy compliance and implementing comprehensive corrective measures. Patient trust was gradually restored through transparent communication.",
        lessonsLearned: [
          "Encryption and access controls are non-negotiable for sensitive personal information",
          "Privacy training must be mandatory and regularly updated for all staff",
          "Privacy governance should be embedded in organizational culture, not just IT systems",
          "Regular compliance audits help identify and address vulnerabilities proactively"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Determining Which Privacy Law Applies",
        description: "Understanding which privacy law governs your organization is the first step in compliance. This example walks through the decision process.",
        steps: [
          "Identify your organization type: Is it a government institution, municipality, or private sector organization?",
          "For government institutions: Does it operate at the provincial level (FIPPA) or municipal level (MFIPPA)?",
          "For private sector: Does it collect personal information in the course of commercial activities?",
          "Document your determination and communicate it to all staff who handle personal information",
          "Review this determination annually as your organization evolves"
        ],
        commonMistakes: [
          "Assuming a private company is not subject to PIPEDA because it's small",
          "Treating FIPPA and MFIPPA as identical when they have important differences",
          "Failing to recognize when a government contractor must comply with FIPPA",
          "Not updating privacy law determinations when organizational structure changes"
        ],
        tips: [
          "Create a simple flowchart for your organization showing which privacy law applies",
          "Consult with legal counsel if you're uncertain about your privacy law obligations",
          "Document your determination in your privacy policy so employees understand the requirements",
          "Review the Information and Privacy Commissioner's website for clarification on specific situations"
        ]
      },
      {
        title: "Creating a Privacy Notice",
        description: "Privacy notices inform individuals about how their personal information is collected, used, and protected. This example shows how to create an effective privacy notice.",
        steps: [
          "Identify all purposes for collecting personal information",
          "Document how long you retain personal information for each purpose",
          "List all organizations you share personal information with",
          "Explain the security measures protecting personal information",
          "Describe individuals' rights to access, correct, and request deletion",
          "Provide contact information for privacy inquiries and complaints",
          "Write in clear, plain language avoiding legal jargon",
          "Make the privacy notice easily accessible (website, printed form, etc.)"
        ],
        commonMistakes: [
          "Using overly complex legal language that individuals can't understand",
          "Burying privacy notices in fine print or hard-to-find locations",
          "Failing to update privacy notices when practices change",
          "Not explaining how individuals can exercise their privacy rights"
        ],
        tips: [
          "Use a template from the Information and Privacy Commissioner as a starting point",
          "Have non-legal staff review your privacy notice for clarity",
          "Provide privacy notices in multiple languages if serving diverse populations",
          "Include examples of how personal information is used to make it more concrete"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Ontario's Digital Government Strategy",
        date: "2024",
        summary: "Ontario announced enhanced privacy protections for digital government services, including mandatory privacy impact assessments for all new digital initiatives and enhanced data security requirements.",
        impact: "Government institutions must implement privacy by design in all digital projects, conduct regular privacy audits, and report on privacy compliance metrics.",
        action: "Review your digital initiatives to ensure compliance with privacy by design principles. Implement privacy impact assessment processes for new projects."
      },
      {
        title: "Information and Privacy Commissioner Guidance on Artificial Intelligence",
        date: "2023",
        summary: "The IPC released guidance on how FIPPA and MFIPPA apply to government use of artificial intelligence, emphasizing transparency and accountability in AI decision-making.",
        impact: "Government institutions using AI must ensure AI systems are transparent, accountable, and don't discriminate against individuals. Regular audits of AI systems are required.",
        action: "If your organization uses AI systems, conduct an audit to ensure compliance with IPC guidance on AI transparency and accountability."
      }
    ],
    bestPractices: [
      {
        title: "Implementing Privacy by Design",
        description: "Privacy by design means building privacy protections into systems and processes from the beginning, rather than adding them later. This approach is more effective and cost-efficient.",
        implementation: [
          "Conduct privacy impact assessments before launching new initiatives",
          "Collect only the personal information necessary for identified purposes",
          "Implement data minimization principles to reduce privacy risks",
          "Use encryption and access controls to protect personal information",
          "Establish retention schedules to delete information when no longer needed",
          "Train employees about privacy obligations and best practices",
          "Conduct regular privacy audits to identify and address vulnerabilities"
        ],
        benefits: [
          "Reduces privacy breaches and associated costs",
          "Builds public trust and confidence in your organization",
          "Simplifies compliance with privacy legislation",
          "Improves operational efficiency by eliminating unnecessary data collection",
          "Enhances organizational reputation and brand value"
        ],
        resources: [
          "Information and Privacy Commissioner's Privacy by Design Framework",
          "International Association of Privacy Professionals (IAPP) Resources",
          "Ontario government's Digital Government Strategy",
          "FIPPA and MFIPPA legislation and regulations"
        ]
      },
      {
        title: "Building a Privacy Culture",
        description: "Privacy compliance requires more than policies and procedures—it requires a culture where privacy is valued and everyone understands their role in protecting personal information.",
        implementation: [
          "Leadership commitment: Ensure executives prioritize privacy and allocate resources",
          "Privacy training: Provide mandatory privacy training for all employees",
          "Clear policies: Develop clear, accessible privacy policies and procedures",
          "Accountability: Hold employees accountable for privacy compliance",
          "Incident response: Establish procedures for reporting and responding to privacy incidents",
          "Continuous improvement: Regularly review and update privacy practices based on lessons learned",
          "Communication: Regularly communicate privacy importance and best practices"
        ],
        benefits: [
          "Reduces privacy incidents through employee awareness and vigilance",
          "Creates organizational resilience against privacy risks",
          "Improves employee understanding of privacy obligations",
          "Enhances organizational reputation as a privacy-conscious entity",
          "Facilitates regulatory compliance and reduces audit findings"
        ],
        resources: [
          "Privacy Commissioner's guidance on organizational privacy culture",
          "IAPP Privacy Culture Toolkit",
          "Industry-specific privacy best practice guides",
          "Privacy training platforms and resources"
        ]
      }
    ]
  },

  // Module 1, Lesson 2: FIPPA Deep Dive
  {
    moduleId: 1,
    lessonId: 2,
    caseStudies: [
      {
        title: "Ministry Access Request Compliance",
        organization: "Ontario Ministry of Health",
        scenario: "A citizen requested access to their personal health information held by the Ministry of Health under FIPPA, including correspondence with ministry officials about a health program.",
        challenge: "The ministry had to locate all relevant records, review them for exemptions, and respond within the statutory 30-day timeframe while ensuring no unauthorized information was disclosed.",
        solution: "The ministry implemented a comprehensive records management system, trained staff on FIPPA access request procedures, and established a dedicated team to handle requests efficiently.",
        outcome: "The ministry successfully responded to the access request within the required timeframe, providing the requested information while appropriately withholding information protected by exemptions.",
        lessonsLearned: [
          "Robust records management systems are essential for responding to access requests",
          "Staff training on FIPPA exemptions ensures appropriate application of protections",
          "Dedicated resources for access requests improve compliance and response quality",
          "Regular audits of access request processes identify and address bottlenecks"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Applying FIPPA Exemptions Correctly",
        description: "FIPPA exemptions protect certain information from disclosure. This example shows how to apply exemptions correctly.",
        steps: [
          "Identify the type of information in the record (e.g., personal information, legal advice, cabinet confidences)",
          "Determine which exemptions might apply to this information",
          "Review each exemption carefully to ensure it truly applies",
          "Document your reasoning for applying or not applying each exemption",
          "Redact only the information that qualifies for exemption",
          "Provide the rest of the information to the requester",
          "Explain your exemption decisions in the response letter"
        ],
        commonMistakes: [
          "Over-applying exemptions to protect information that should be disclosed",
          "Failing to apply exemptions to information that qualifies for protection",
          "Not documenting reasoning for exemption decisions",
          "Redacting information that doesn't qualify for exemption"
        ],
        tips: [
          "Use the Information and Privacy Commissioner's exemption guidance as reference",
          "When in doubt, consult with legal counsel about exemption application",
          "Err on the side of disclosure unless exemption clearly applies",
          "Document all exemption decisions for audit and appeal purposes"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "FIPPA Amendment: Enhanced Breach Notification Requirements",
        date: "2023",
        summary: "Ontario amended FIPPA to require faster notification of privacy breaches to affected individuals and the Information and Privacy Commissioner.",
        impact: "Government institutions must notify individuals of breaches without unreasonable delay and notify the IPC of significant breaches.",
        action: "Review your breach notification procedures to ensure compliance with updated requirements. Establish clear timelines for breach notification."
      }
    ],
    bestPractices: [
      {
        title: "Managing FIPPA Access Requests Efficiently",
        description: "Efficient access request management ensures compliance with statutory deadlines and maintains public trust.",
        implementation: [
          "Establish a centralized access request intake process",
          "Implement tracking systems to monitor request status and deadlines",
          "Train staff on FIPPA exemptions and access request procedures",
          "Establish timelines for different stages of request processing",
          "Create templates for common access request responses",
          "Maintain records of all access requests and responses",
          "Conduct regular audits of access request processes"
        ],
        benefits: [
          "Ensures compliance with statutory 30-day response deadline",
          "Improves transparency and public trust",
          "Reduces legal challenges to access decisions",
          "Identifies systemic issues with records management",
          "Demonstrates commitment to FIPPA compliance"
        ],
        resources: [
          "Information and Privacy Commissioner's Access Request Guidelines",
          "FIPPA legislation and regulations",
          "Government of Ontario's FIPPA guidance documents",
          "Access request management software and tools"
        ]
      }
    ]
  },

  // Module 1, Lesson 3: MFIPPA and Municipal Privacy
  {
    moduleId: 1,
    lessonId: 3,
    caseStudies: [
      {
        title: "School Board Privacy Incident",
        organization: "Ontario School Board",
        scenario: "A school board stored student personal information (names, addresses, phone numbers, health information) in an unsecured shared folder accessible to all staff.",
        challenge: "When the breach was discovered, the school board had to notify thousands of families, investigate the extent of unauthorized access, and implement corrective measures.",
        solution: "The school board immediately secured the information, conducted a forensic investigation, notified all affected families, implemented encryption and access controls, and provided privacy training to all staff.",
        outcome: "While facing initial criticism, the school board's swift response and transparency helped maintain community trust. They became a model for privacy protection in schools.",
        lessonsLearned: [
          "Student information requires enhanced protection due to its sensitive nature",
          "Access controls must be implemented based on job function, not blanket access",
          "Regular security audits are essential for identifying vulnerabilities",
          "Transparent communication with families is critical in school settings"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Establishing Municipal Privacy Governance",
        description: "Municipalities must establish comprehensive privacy governance structures to comply with MFIPPA and protect resident information.",
        steps: [
          "Appoint a Privacy Officer or designate privacy responsibilities",
          "Develop a comprehensive privacy policy covering all municipal departments",
          "Establish procedures for handling access requests",
          "Create privacy training programs for all staff",
          "Implement privacy impact assessment procedures",
          "Establish breach notification procedures",
          "Create a privacy complaint process",
          "Conduct regular privacy audits across all departments"
        ],
        commonMistakes: [
          "Treating privacy as an IT issue rather than an organizational responsibility",
          "Failing to involve all departments in privacy governance",
          "Not providing adequate resources for privacy compliance",
          "Ignoring privacy concerns until a breach occurs"
        ],
        tips: [
          "Involve representatives from all departments in privacy governance planning",
          "Allocate adequate budget and resources for privacy compliance",
          "Make privacy training mandatory for all staff",
          "Establish clear accountability for privacy compliance"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "MFIPPA Guidance on Digital Records Management",
        date: "2024",
        summary: "The Information and Privacy Commissioner released guidance on how MFIPPA applies to digital records, including emails, cloud storage, and social media.",
        impact: "Municipalities must ensure digital records are managed according to MFIPPA requirements, including retention, access controls, and security.",
        action: "Review your digital records management practices to ensure compliance with MFIPPA requirements for digital information."
      }
    ],
    bestPractices: [
      {
        title: "Privacy Governance in Multi-Department Organizations",
        description: "Municipalities with multiple departments must establish coordinated privacy governance to ensure consistent compliance across the organization.",
        implementation: [
          "Establish a privacy committee with representatives from all departments",
          "Develop department-specific privacy policies aligned with municipal standards",
          "Implement centralized access request processing",
          "Create shared privacy training programs",
          "Establish regular privacy audits across departments",
          "Create incident reporting and response procedures",
          "Maintain centralized records of privacy incidents and resolutions"
        ],
        benefits: [
          "Ensures consistent privacy compliance across all departments",
          "Identifies systemic privacy issues and opportunities for improvement",
          "Reduces duplication of privacy efforts across departments",
          "Improves efficiency of access request handling",
          "Strengthens organizational privacy culture"
        ],
        resources: [
          "Information and Privacy Commissioner's Municipal Privacy Guidance",
          "MFIPPA legislation and regulations",
          "Municipal government associations' privacy resources",
          "Privacy governance frameworks and templates"
        ]
      }
    ]
  },

  // Module 1, Lesson 4: PIPEDA and Private Sector Privacy
  {
    moduleId: 1,
    lessonId: 4,
    caseStudies: [
      {
        title: "E-commerce Company Privacy Breach",
        organization: "Canadian E-commerce Retailer",
        scenario: "An e-commerce company experienced a data breach affecting customer payment information, including credit card numbers and personal details of over 100,000 customers.",
        challenge: "The company had to notify affected customers, investigate the breach, implement security improvements, and manage regulatory inquiries from multiple privacy commissioners.",
        solution: "The company immediately engaged cybersecurity experts, notified all affected customers with details of the breach and steps to protect themselves, offered credit monitoring services, and implemented comprehensive security improvements including encryption and regular security audits.",
        outcome: "While the breach damaged the company's reputation initially, their transparent response and comprehensive remediation efforts helped restore customer trust over time. They became more competitive through enhanced privacy practices.",
        lessonsLearned: [
          "Payment information requires the highest level of security protection",
          "Transparent notification of breaches is essential for maintaining customer trust",
          "Security improvements must be comprehensive, not just addressing the immediate breach",
          "Privacy compliance is a competitive advantage in the marketplace"
        ]
      },
      {
        title: "Healthcare Technology Company PIPEDA Compliance",
        organization: "Canadian Healthcare Software Provider",
        scenario: "A healthcare software company collected patient data from healthcare providers to improve their services, but failed to obtain proper consent from patients.",
        challenge: "Patients filed complaints with the Privacy Commissioner, alleging the company violated PIPEDA by collecting and using their personal information without consent.",
        solution: "The company implemented a comprehensive consent management system, obtained retroactive consent where possible, deleted information from patients who didn't consent, and implemented privacy training for all staff.",
        outcome: "The company resolved the Privacy Commissioner complaint and implemented robust consent management processes, becoming a model for healthcare privacy compliance.",
        lessonsLearned: [
          "Meaningful consent is essential before collecting personal information",
          "Consent must be specific to each use of personal information",
          "Organizations must respect individuals' decisions not to consent",
          "Privacy compliance is essential for healthcare organizations handling sensitive information"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Implementing PIPEDA Consent Management",
        description: "PIPEDA requires meaningful consent before collecting personal information. This example shows how to implement effective consent management.",
        steps: [
          "Identify all purposes for collecting personal information",
          "Create clear, separate consent requests for each purpose",
          "Use plain language that individuals can understand",
          "Avoid pre-checked boxes or other coercive consent practices",
          "Provide individuals with easy ways to withdraw consent",
          "Maintain records of all consent decisions",
          "Respect individuals' decisions not to consent",
          "Update consent practices when purposes change"
        ],
        commonMistakes: [
          "Using vague consent language that doesn't clearly explain purposes",
          "Using pre-checked boxes or other coercive consent practices",
          "Collecting information beyond what individuals consented to",
          "Failing to provide easy ways to withdraw consent",
          "Not updating consent practices when business purposes change"
        ],
        tips: [
          "Review Privacy Commissioner guidance on meaningful consent",
          "Have legal counsel review your consent practices",
          "Test your consent process with actual customers to ensure clarity",
          "Implement consent management systems to track and manage consent decisions"
        ]
      },
      {
        title: "Responding to Privacy Complaints",
        description: "When individuals file privacy complaints with the Privacy Commissioner, organizations must respond appropriately to resolve the issue.",
        steps: [
          "Designate a privacy contact person to receive complaints",
          "Acknowledge receipt of the complaint promptly",
          "Investigate the complaint thoroughly and objectively",
          "Document all findings and actions taken",
          "Communicate results to the individual",
          "Implement corrective measures if warranted",
          "Prevent similar issues from occurring in the future",
          "Cooperate fully with Privacy Commissioner investigations"
        ],
        commonMistakes: [
          "Dismissing complaints without investigation",
          "Being defensive or argumentative in responding to complaints",
          "Failing to implement corrective measures",
          "Not documenting investigation and resolution",
          "Retaliating against individuals who file complaints"
        ],
        tips: [
          "Treat complaints as opportunities to improve privacy practices",
          "Involve legal counsel in responding to formal complaints",
          "Be transparent and honest in your investigation and response",
          "Implement systemic improvements to prevent similar complaints"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "PIPEDA Amendment: Enhanced Breach Notification",
        date: "2023",
        summary: "Canada amended PIPEDA to require faster notification of privacy breaches to affected individuals and the Privacy Commissioner.",
        impact: "Private sector organizations must notify individuals of breaches without unreasonable delay and notify the Privacy Commissioner of significant breaches.",
        action: "Review your breach notification procedures to ensure compliance with updated requirements. Establish clear timelines for breach notification."
      },
      {
        title: "Privacy Commissioner Guidance on Cross-Border Data Transfers",
        date: "2023",
        summary: "The Privacy Commissioner released guidance on how PIPEDA applies to organizations that transfer personal information outside Canada.",
        impact: "Organizations must ensure adequate privacy protections for information transferred outside Canada and maintain accountability for third parties handling Canadian personal information.",
        action: "If your organization transfers personal information outside Canada, review your data transfer agreements to ensure compliance with PIPEDA requirements."
      }
    ],
    bestPractices: [
      {
        title: "Building Privacy into Business Processes",
        description: "Privacy should be integrated into all business processes, not just handled by the privacy team. This requires organizational commitment and employee engagement.",
        implementation: [
          "Establish privacy requirements for all business processes",
          "Conduct privacy impact assessments for new initiatives",
          "Implement privacy training for all employees",
          "Create privacy champions in each department",
          "Establish privacy metrics and reporting",
          "Conduct regular privacy audits",
          "Maintain privacy governance oversight",
          "Communicate privacy importance regularly"
        ],
        benefits: [
          "Reduces privacy risks across the organization",
          "Improves customer trust and loyalty",
          "Enhances organizational reputation",
          "Reduces regulatory fines and legal liability",
          "Improves operational efficiency through better data management"
        ],
        resources: [
          "Privacy Commissioner's PIPEDA guidance",
          "PIPEDA legislation and regulations",
          "International Association of Privacy Professionals (IAPP) Resources",
          "Privacy management frameworks and templates"
        ]
      }
    ]
  }
];

export function getAdditionalModule1Content(lessonId: number): AdditionalLessonContent | undefined {
  return additionalModule1Content.find(content => content.lessonId === lessonId);
}
