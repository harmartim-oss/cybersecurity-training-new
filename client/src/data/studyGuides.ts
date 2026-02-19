export interface StudyGuide {
  moduleId: number;
  moduleName: string;
  fileName: string;
  sections: StudySection[];
  keyTerms: KeyTerm[];
  practiceQuestions: PracticeQuestion[];
  resources: Resource[];
}

export interface StudySection {
  title: string;
  content: string;
  subsections?: SubSection[];
}

export interface SubSection {
  title: string;
  content: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface PracticeQuestion {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface Resource {
  title: string;
  description: string;
  type: string;
}

export const STUDY_GUIDES: StudyGuide[] = [
  {
    moduleId: 1,
    moduleName: 'Ontario Privacy Laws Mastery',
    fileName: 'Ontario_Privacy_Laws_Study_Guide.pdf',
    sections: [
      {
        title: 'Introduction to Ontario Privacy Legislation',
        content: 'Ontario has a comprehensive framework of privacy laws designed to protect personal information and ensure compliance with federal and provincial regulations. This study guide covers the three primary privacy laws applicable in Ontario: FIPPA, MFIPPA, and PIPEDA.',
        subsections: [
          {
            title: 'Overview of Ontario Privacy Framework',
            content: 'The Ontario privacy framework consists of three main legislative instruments. The Freedom of Information and Protection of Privacy Act (FIPPA) applies to provincial government institutions. The Municipal Freedom of Information and Protection of Privacy Act (MFIPPA) applies to municipal governments and local public bodies. The Personal Information Protection and Electronic Documents Act (PIPEDA) is federal legislation that applies to private sector organizations across Canada.'
          },
          {
            title: 'Scope and Application',
            content: 'Understanding which law applies to your organization is critical. FIPPA applies to Ontario government ministries, agencies, and designated public institutions. MFIPPA covers municipalities, school boards, public utilities, and other local public bodies. PIPEDA applies to private sector organizations that collect, use, or disclose personal information in the course of commercial activities.'
          }
        ]
      },
      {
        title: 'FIPPA - Freedom of Information and Protection of Privacy Act',
        content: 'FIPPA is Ontario\'s primary privacy law for the public sector. It provides individuals with the right to access their personal information held by government institutions and requires organizations to protect that information.',
        subsections: [
          {
            title: 'Key Principles of FIPPA',
            content: 'FIPPA is built on several core principles: (1) Individuals have the right to access their personal information held by government institutions; (2) Government institutions must collect, use, and disclose personal information only for purposes authorized by law; (3) Personal information must be protected through appropriate safeguards; (4) Individuals have the right to request correction of inaccurate information; (5) Government institutions must be transparent about their information practices.'
          },
          {
            title: 'Access to Information Rights',
            content: 'Individuals can request access to records held by government institutions. Institutions must respond within 30 days. Some information may be exempt from disclosure, including information that could harm personal privacy, business interests, or law enforcement. The institution must provide reasons for any exemptions claimed.'
          },
          {
            title: 'Privacy Protection Requirements',
            content: 'Government institutions must implement appropriate safeguards to protect personal information from unauthorized access, use, disclosure, or destruction. This includes physical security measures, access controls, encryption, and staff training. Institutions must also have policies and procedures for handling personal information securely.'
          }
        ]
      },
      {
        title: 'MFIPPA - Municipal Freedom of Information and Protection of Privacy Act',
        content: 'MFIPPA is the municipal equivalent of FIPPA. It applies to municipalities, school boards, police services, and other local public bodies.',
        subsections: [
          {
            title: 'Scope of MFIPPA',
            content: 'MFIPPA applies to all municipalities in Ontario, school boards, public utilities, conservation authorities, and other local public bodies. It provides similar rights to FIPPA but is tailored to municipal contexts. Individuals can request access to records held by these organizations.'
          },
          {
            title: 'Access and Privacy Procedures',
            content: 'Municipalities must designate an access and privacy officer to handle requests. Requests must be responded to within 30 days. Municipalities must maintain records of all access requests and provide annual statistics to the Information and Privacy Commissioner.'
          }
        ]
      },
      {
        title: 'PIPEDA - Personal Information Protection and Electronic Documents Act',
        content: 'PIPEDA is federal legislation that applies to private sector organizations. It establishes rules for how private organizations collect, use, and disclose personal information.',
        subsections: [
          {
            title: 'PIPEDA Principles',
            content: 'PIPEDA is based on 10 principles: (1) Accountability - organizations are responsible for personal information; (2) Identifying purposes - organizations must identify purposes before collecting information; (3) Consent - individuals must consent to collection, use, or disclosure; (4) Limiting collection - only collect information needed for identified purposes; (5) Limiting use - use information only for identified purposes; (6) Accuracy - keep information accurate and complete; (7) Safeguards - protect information with appropriate security; (8) Openness - be transparent about practices; (9) Individual access - allow individuals to access their information; (10) Challenging compliance - allow individuals to challenge compliance.'
          },
          {
            title: 'Consent Requirements',
            content: 'Organizations must obtain meaningful consent before collecting, using, or disclosing personal information. Consent can be express (explicit permission) or implied (reasonable expectation based on context). Organizations must provide clear information about purposes and obtain consent before proceeding.'
          }
        ]
      },
      {
        title: 'Data Breach Notification Requirements',
        content: 'Ontario has specific requirements for notifying individuals when personal information is compromised.',
        subsections: [
          {
            title: 'Breach Notification Obligations',
            content: 'Organizations must notify affected individuals without unreasonable delay when there is a reasonable belief that personal information has been accessed or used without authorization. Notification must include details about the breach, information affected, and steps individuals should take to protect themselves.'
          },
          {
            title: 'Reporting to Authorities',
            content: 'Organizations must also report significant breaches to the Information and Privacy Commissioner. The Commissioner may investigate and take enforcement action if required.'
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: 'Personal Information',
        definition: 'Any information about an identifiable individual, including name, address, phone number, email, financial information, and health records.'
      },
      {
        term: 'FIPPA',
        definition: 'Freedom of Information and Protection of Privacy Act - Ontario\'s primary privacy law for the public sector.'
      },
      {
        term: 'MFIPPA',
        definition: 'Municipal Freedom of Information and Protection of Privacy Act - privacy law for municipalities and local public bodies.'
      },
      {
        term: 'PIPEDA',
        definition: 'Personal Information Protection and Electronic Documents Act - federal privacy law for private sector organizations.'
      },
      {
        term: 'Consent',
        definition: 'Voluntary agreement to collection, use, or disclosure of personal information.'
      },
      {
        term: 'Data Breach',
        definition: 'Unauthorized access, use, or disclosure of personal information.'
      },
      {
        term: 'Safeguards',
        definition: 'Security measures implemented to protect personal information from unauthorized access or disclosure.'
      },
      {
        term: 'Access Request',
        definition: 'Formal request by an individual to access their personal information held by an organization.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Which Ontario privacy law applies to provincial government institutions?',
        options: ['FIPPA', 'MFIPPA', 'PIPEDA', 'None of the above'],
        answer: 'FIPPA',
        explanation: 'FIPPA (Freedom of Information and Protection of Privacy Act) is Ontario\'s primary privacy law for the public sector, including provincial government institutions.'
      },
      {
        question: 'What is the maximum time frame for responding to an access request under FIPPA?',
        options: ['15 days', '30 days', '60 days', '90 days'],
        answer: '30 days',
        explanation: 'Government institutions must respond to access requests within 30 days under FIPPA, though this can be extended in certain circumstances.'
      },
      {
        question: 'Which principle of PIPEDA requires organizations to keep personal information accurate and complete?',
        options: ['Accountability', 'Accuracy', 'Safeguards', 'Openness'],
        answer: 'Accuracy',
        explanation: 'The Accuracy principle requires organizations to keep personal information accurate, complete, and up-to-date.'
      },
      {
        question: 'What must organizations do when a data breach occurs?',
        options: ['Nothing if it\'s minor', 'Notify affected individuals without unreasonable delay', 'Only report to police', 'Wait for complaints'],
        answer: 'Notify affected individuals without unreasonable delay',
        explanation: 'Organizations must notify affected individuals without unreasonable delay when personal information is breached, and may need to report to the Information and Privacy Commissioner.'
      }
    ],
    resources: [
      {
        title: 'Information and Privacy Commissioner of Ontario',
        description: 'Official resource for privacy laws and guidelines',
        type: 'Government Website'
      },
      {
        title: 'FIPPA Guidelines and Interpretation Documents',
        description: 'Detailed guidance on FIPPA compliance',
        type: 'Legal Document'
      },
      {
        title: 'Privacy Impact Assessment Template',
        description: 'Tool for assessing privacy risks in projects',
        type: 'Template'
      }
    ]
  },
  {
    moduleId: 2,
    moduleName: 'Cybersecurity Fundamentals',
    fileName: 'Cybersecurity_Fundamentals_Study_Guide.pdf',
    sections: [
      {
        title: 'Introduction to Cybersecurity',
        content: 'Cybersecurity is the practice of protecting systems, networks, and information from digital attacks. This study guide covers fundamental cybersecurity concepts, common threats, and best practices for protecting your organization.',
        subsections: [
          {
            title: 'The CIA Triad',
            content: 'The CIA Triad is the foundation of cybersecurity. Confidentiality ensures that information is accessible only to authorized individuals. Integrity ensures that information is accurate, complete, and has not been altered without authorization. Availability ensures that systems and information are accessible when needed by authorized users.'
          }
        ]
      },
      {
        title: 'Common Cybersecurity Threats',
        content: 'Understanding common threats is essential for developing effective defenses.',
        subsections: [
          {
            title: 'Phishing and Social Engineering',
            content: 'Phishing is a social engineering attack where attackers send fraudulent emails or messages to trick users into revealing sensitive information or clicking malicious links. Phishing emails often impersonate trusted organizations and create a sense of urgency. Defenses include user training, email filtering, and multi-factor authentication.'
          },
          {
            title: 'Ransomware',
            content: 'Ransomware is malicious software that encrypts an organization\'s files and demands payment for decryption. Ransomware often spreads through phishing emails, compromised websites, or vulnerable systems. Prevention includes regular backups, software updates, and user training.'
          },
          {
            title: 'Malware and Viruses',
            content: 'Malware is software designed to harm systems or steal information. Viruses are self-replicating malware that spread through infected files. Defenses include antivirus software, firewalls, and regular security updates.'
          },
          {
            title: 'Zero-Day Vulnerabilities',
            content: 'Zero-day vulnerabilities are security flaws unknown to the software vendor. Attackers can exploit these before patches are available. Organizations should maintain regular security updates and implement defense-in-depth strategies.'
          }
        ]
      },
      {
        title: 'Password Security and Authentication',
        content: 'Strong authentication is critical for protecting systems and data.',
        subsections: [
          {
            title: 'Password Best Practices',
            content: 'Passwords should be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters. Avoid using personal information, dictionary words, or common patterns. Change passwords regularly and never share them. Use unique passwords for each system.'
          },
          {
            title: 'Multi-Factor Authentication',
            content: 'Multi-factor authentication (MFA) requires two or more forms of identification. This might include something you know (password), something you have (phone or security key), or something you are (biometric). MFA significantly reduces the risk of unauthorized access.'
          }
        ]
      },
      {
        title: 'Network Security',
        content: 'Network security protects systems and data from unauthorized access.',
        subsections: [
          {
            title: 'Firewalls',
            content: 'Firewalls monitor and control incoming and outgoing network traffic. They can be hardware-based (protecting entire networks) or software-based (protecting individual computers). Firewalls should be configured to allow only necessary traffic.'
          },
          {
            title: 'Virtual Private Networks (VPNs)',
            content: 'VPNs encrypt network traffic and hide IP addresses, providing secure remote access. They are essential for protecting data when using public Wi-Fi networks.'
          }
        ]
      },
      {
        title: 'Incident Response and Recovery',
        content: 'Organizations must be prepared to respond to security incidents.',
        subsections: [
          {
            title: 'Incident Response Plan',
            content: 'An incident response plan outlines steps to take when a security incident occurs. It should include detection procedures, containment strategies, eradication steps, recovery procedures, and post-incident analysis.'
          },
          {
            title: 'Backup and Disaster Recovery',
            content: 'Regular backups are essential for recovering from ransomware attacks and other disasters. Backups should be stored separately from primary systems and tested regularly.'
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: 'Confidentiality',
        definition: 'Ensuring that information is accessible only to authorized individuals.'
      },
      {
        term: 'Integrity',
        definition: 'Ensuring that information is accurate, complete, and has not been altered without authorization.'
      },
      {
        term: 'Availability',
        definition: 'Ensuring that systems and information are accessible when needed by authorized users.'
      },
      {
        term: 'Phishing',
        definition: 'Social engineering attack using fraudulent emails to trick users into revealing sensitive information.'
      },
      {
        term: 'Ransomware',
        definition: 'Malicious software that encrypts files and demands payment for decryption.'
      },
      {
        term: 'Malware',
        definition: 'Software designed to harm systems or steal information.'
      },
      {
        term: 'Firewall',
        definition: 'Network security device that monitors and controls incoming and outgoing traffic.'
      },
      {
        term: 'Multi-Factor Authentication',
        definition: 'Security method requiring two or more forms of identification.'
      }
    ],
    practiceQuestions: [
      {
        question: 'What does the CIA Triad stand for?',
        options: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Information Access', 'Cybersecurity Information Alliance'],
        answer: 'Confidentiality, Integrity, Availability',
        explanation: 'The CIA Triad is the foundation of cybersecurity, representing the three core principles of information security.'
      },
      {
        question: 'Which type of attack uses fraudulent emails to trick users?',
        options: ['Ransomware', 'Phishing', 'DDoS', 'Malware'],
        answer: 'Phishing',
        explanation: 'Phishing is a social engineering attack that uses fraudulent emails or messages to deceive users.'
      },
      {
        question: 'What is the minimum recommended password length?',
        options: ['8 characters', '10 characters', '12 characters', '16 characters'],
        answer: '12 characters',
        explanation: 'Security experts recommend passwords of at least 12 characters to provide adequate protection.'
      },
      {
        question: 'What is a zero-day vulnerability?',
        options: ['A vulnerability that occurs every day', 'A vulnerability unknown to the vendor', 'A vulnerability that lasts one day', 'A vulnerability in old software'],
        answer: 'A vulnerability unknown to the vendor',
        explanation: 'A zero-day vulnerability is a security flaw unknown to the software vendor, allowing attackers to exploit it before patches are available.'
      }
    ],
    resources: [
      {
        title: 'NIST Cybersecurity Framework',
        description: 'Comprehensive framework for managing cybersecurity risk',
        type: 'Government Framework'
      },
      {
        title: 'CIS Critical Security Controls',
        description: 'Prioritized set of actions to protect systems',
        type: 'Best Practices'
      },
      {
        title: 'Incident Response Checklist',
        description: 'Step-by-step guide for responding to security incidents',
        type: 'Checklist'
      }
    ]
  },
  {
    moduleId: 3,
    moduleName: 'AI Governance & Ethics',
    fileName: 'AI_Governance_Ethics_Study_Guide.pdf',
    sections: [
      {
        title: 'Introduction to AI Ethics',
        content: 'As artificial intelligence becomes increasingly prevalent in business and government, ethical considerations are essential. This study guide covers AI governance frameworks, ethical principles, and best practices for responsible AI deployment.',
        subsections: [
          {
            title: 'Why AI Ethics Matters',
            content: 'AI systems can perpetuate biases, violate privacy, make unfair decisions, and cause harm if not properly governed. Organizations must implement ethical frameworks to ensure AI systems are fair, transparent, and accountable.'
          }
        ]
      },
      {
        title: 'Core AI Ethics Principles',
        content: 'Six core principles guide responsible AI development and deployment.',
        subsections: [
          {
            title: 'Fairness',
            content: 'AI systems should treat all individuals fairly and avoid discriminating based on protected characteristics like race, gender, or age. Organizations must audit AI systems for bias and implement mitigation strategies.'
          },
          {
            title: 'Transparency',
            content: 'AI systems should be explainable and understandable to users and stakeholders. Organizations should document how AI systems make decisions and communicate limitations to users.'
          },
          {
            title: 'Accountability',
            content: 'Organizations must take responsibility for AI system outcomes. This includes establishing governance structures, documenting decisions, and providing remedies when AI systems cause harm.'
          },
          {
            title: 'Privacy',
            content: 'AI systems should protect personal information and respect privacy rights. Organizations must implement data minimization, consent mechanisms, and security safeguards.'
          },
          {
            title: 'Security',
            content: 'AI systems should be protected from attacks and misuse. Organizations must implement security controls and monitor for adversarial attacks.'
          },
          {
            title: 'Explainability',
            content: 'AI systems should provide explanations for their decisions. Users should understand why an AI system made a particular decision, especially in high-stakes contexts like hiring or lending.'
          }
        ]
      },
      {
        title: 'AI Governance Frameworks',
        content: 'Organizations should implement governance frameworks to ensure responsible AI.',
        subsections: [
          {
            title: 'Governance Structure',
            content: 'Organizations should establish an AI governance committee with representation from technical, legal, ethics, and business teams. This committee should oversee AI projects, review for risks, and ensure compliance with policies.'
          },
          {
            title: 'Impact Assessment',
            content: 'Before deploying AI systems, organizations should conduct impact assessments to identify potential harms and mitigation strategies. This includes bias audits, privacy assessments, and security reviews.'
          },
          {
            title: 'Monitoring and Auditing',
            content: 'Organizations should continuously monitor AI systems for performance degradation, bias drift, and security issues. Regular audits should assess compliance with ethical principles and governance policies.'
          }
        ]
      },
      {
        title: 'Addressing AI Bias',
        content: 'Bias in AI systems can lead to unfair outcomes and discrimination.',
        subsections: [
          {
            title: 'Sources of Bias',
            content: 'Bias can come from training data (historical bias), algorithm design (algorithmic bias), or user interaction (feedback bias). Organizations must identify and address these sources.'
          },
          {
            title: 'Bias Mitigation Strategies',
            content: 'Strategies include diverse training data, fairness constraints in algorithms, regular audits, and human oversight. Organizations should test AI systems across different demographic groups to identify disparities.'
          }
        ]
      },
      {
        title: 'Regulatory Landscape',
        content: 'Governments worldwide are developing AI regulations.',
        subsections: [
          {
            title: 'Emerging Regulations',
            content: 'The European Union\'s AI Act, Canada\'s proposed AI regulations, and other frameworks are establishing requirements for AI transparency, accountability, and safety. Organizations must stay informed about applicable regulations.'
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: 'AI Ethics',
        definition: 'The principles and practices for developing and deploying AI systems responsibly.'
      },
      {
        term: 'Fairness',
        definition: 'Ensuring AI systems treat all individuals fairly and avoid discrimination.'
      },
      {
        term: 'Transparency',
        definition: 'Making AI systems understandable and explainable to users and stakeholders.'
      },
      {
        term: 'Accountability',
        definition: 'Taking responsibility for AI system outcomes and providing remedies for harm.'
      },
      {
        term: 'Bias',
        definition: 'Systematic errors in AI systems that lead to unfair outcomes for certain groups.'
      },
      {
        term: 'Explainability',
        definition: 'The ability to understand and explain AI system decisions.'
      },
      {
        term: 'Impact Assessment',
        definition: 'Evaluation of potential harms and benefits of AI systems before deployment.'
      }
    ],
    practiceQuestions: [
      {
        question: 'Which principle ensures AI systems treat all individuals fairly?',
        options: ['Transparency', 'Fairness', 'Accountability', 'Security'],
        answer: 'Fairness',
        explanation: 'Fairness ensures that AI systems do not discriminate and treat all individuals equitably.'
      },
      {
        question: 'What is the primary purpose of an AI impact assessment?',
        options: ['To increase AI performance', 'To identify potential harms and mitigation strategies', 'To reduce AI costs', 'To speed up AI deployment'],
        answer: 'To identify potential harms and mitigation strategies',
        explanation: 'Impact assessments help organizations identify risks and develop strategies to mitigate potential harms from AI systems.'
      },
      {
        question: 'What can cause bias in AI systems?',
        options: ['Only training data', 'Only algorithm design', 'Training data, algorithm design, and user feedback', 'None of the above'],
        answer: 'Training data, algorithm design, and user feedback',
        explanation: 'Bias can originate from multiple sources including biased training data, algorithmic design choices, and feedback loops.'
      }
    ],
    resources: [
      {
        title: 'Government of Canada AI Ethics Framework',
        description: 'Official Canadian framework for responsible AI',
        type: 'Government Framework'
      },
      {
        title: 'IEEE Ethically Aligned Design',
        description: 'Comprehensive guidelines for AI ethics',
        type: 'Industry Standards'
      },
      {
        title: 'AI Bias Audit Checklist',
        description: 'Tool for identifying and addressing AI bias',
        type: 'Checklist'
      }
    ]
  },
  {
    moduleId: 4,
    moduleName: 'Data Management Excellence',
    fileName: 'Data_Management_Excellence_Study_Guide.pdf',
    sections: [
      {
        title: 'Introduction to Data Management',
        content: 'Effective data management is critical for organizational success. This study guide covers data governance, classification, storage, access control, and lifecycle management.',
        subsections: [
          {
            title: 'Why Data Management Matters',
            content: 'Poor data management leads to security breaches, compliance violations, inefficient operations, and poor decision-making. Organizations that implement strong data management practices gain competitive advantages through better insights and reduced risks.'
          }
        ]
      },
      {
        title: 'Data Governance Framework',
        content: 'Data governance establishes policies, procedures, and accountability for data management.',
        subsections: [
          {
            title: 'Governance Structure',
            content: 'Organizations should establish a data governance committee with representatives from IT, business, legal, and compliance teams. This committee should define data policies, resolve conflicts, and oversee data management practices.'
          },
          {
            title: 'Data Policies',
            content: 'Data policies should address data classification, retention, access control, security, and privacy. Policies should be documented, communicated to staff, and regularly reviewed.'
          }
        ]
      },
      {
        title: 'Data Classification and Inventory',
        content: 'Organizations must understand what data they have and how to protect it.',
        subsections: [
          {
            title: 'Data Classification Levels',
            content: 'Data should be classified based on sensitivity: Public (no restrictions), Internal (limited distribution), Confidential (restricted access), and Restricted (highly sensitive). Classification determines handling requirements.'
          },
          {
            title: 'Data Inventory',
            content: 'Organizations should maintain an inventory of all data assets, including location, owner, classification level, and sensitivity. This enables better governance and compliance.'
          }
        ]
      },
      {
        title: 'Data Security and Privacy',
        content: 'Data must be protected from unauthorized access and disclosure.',
        subsections: [
          {
            title: 'Encryption',
            content: 'Data should be encrypted both in transit (using TLS/SSL) and at rest (using encryption algorithms). Encryption keys should be securely managed and rotated regularly.'
          },
          {
            title: 'Access Control',
            content: 'Access to data should be restricted based on business need. Organizations should implement role-based access control (RBAC) and regularly audit access permissions.'
          },
          {
            title: 'Data Minimization',
            content: 'Organizations should collect only the personal information necessary for identified purposes. Unnecessary data should be deleted or anonymized.'
          }
        ]
      },
      {
        title: 'Data Lifecycle Management',
        content: 'Data should be managed throughout its lifecycle.',
        subsections: [
          {
            title: 'Collection',
            content: 'Data should be collected only for identified purposes with appropriate consent. Collection methods should be secure and documented.'
          },
          {
            title: 'Storage and Retention',
            content: 'Data should be stored securely and retained only as long as necessary. Retention schedules should be documented and enforced.'
          },
          {
            title: 'Disposal',
            content: 'Data should be securely destroyed when no longer needed. Disposal methods should ensure data cannot be recovered.'
          }
        ]
      },
      {
        title: 'Data Quality and Integrity',
        content: 'Data must be accurate, complete, and reliable.',
        subsections: [
          {
            title: 'Data Quality Standards',
            content: 'Organizations should establish standards for data accuracy, completeness, consistency, and timeliness. Data quality should be monitored and issues addressed promptly.'
          },
          {
            title: 'Data Validation',
            content: 'Data should be validated when entered and regularly audited for accuracy. Validation rules should be documented and enforced.'
          }
        ]
      }
    ],
    keyTerms: [
      {
        term: 'Data Governance',
        definition: 'Framework of policies, procedures, and accountability for data management.'
      },
      {
        term: 'Data Classification',
        definition: 'Categorizing data based on sensitivity and protection requirements.'
      },
      {
        term: 'Data Inventory',
        definition: 'Complete list of data assets including location, owner, and classification.'
      },
      {
        term: 'Encryption',
        definition: 'Converting data into code to prevent unauthorized access.'
      },
      {
        term: 'Access Control',
        definition: 'Restricting access to data based on business need and user role.'
      },
      {
        term: 'Data Retention',
        definition: 'Period for which data is kept before disposal.'
      },
      {
        term: 'Data Quality',
        definition: 'Accuracy, completeness, and reliability of data.'
      }
    ],
    practiceQuestions: [
      {
        question: 'What are the four levels of data classification?',
        options: ['High, Medium, Low, None', 'Public, Internal, Confidential, Restricted', 'Secret, Private, Shared, Open', 'Critical, Important, Standard, Optional'],
        answer: 'Public, Internal, Confidential, Restricted',
        explanation: 'The standard data classification levels are Public, Internal, Confidential, and Restricted, each with different protection requirements.'
      },
      {
        question: 'What should organizations do with data no longer needed?',
        options: ['Keep it indefinitely', 'Securely destroy it', 'Share it with others', 'Sell it to third parties'],
        answer: 'Securely destroy it',
        explanation: 'Organizations should securely dispose of data when it is no longer needed to protect privacy and reduce security risks.'
      },
      {
        question: 'What is the purpose of data minimization?',
        options: ['To reduce storage costs', 'To collect only necessary personal information', 'To improve data quality', 'To speed up processing'],
        answer: 'To collect only necessary personal information',
        explanation: 'Data minimization ensures organizations collect only the personal information necessary for identified purposes, reducing privacy risks.'
      }
    ],
    resources: [
      {
        title: 'DAMA-DMBOK Data Management Body of Knowledge',
        description: 'Comprehensive framework for data management practices',
        type: 'Industry Framework'
      },
      {
        title: 'Data Governance Toolkit',
        description: 'Templates and tools for implementing data governance',
        type: 'Toolkit'
      },
      {
        title: 'Data Classification Matrix',
        description: 'Guide for classifying organizational data',
        type: 'Template'
      }
    ]
  }
];

export const getStudyGuide = (moduleId: number): StudyGuide | undefined => {
  return STUDY_GUIDES.find(guide => guide.moduleId === moduleId);
};
