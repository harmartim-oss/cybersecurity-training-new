export interface LessonStudyMaterial {
  id: string;
  lessonId: number;
  moduleId: number;
  title: string;
  description: string;
  icon: string;
  type: 'guide' | 'template' | 'checklist' | 'reference';
  content: LessonMaterialContent;
  tags: string[];
}

export interface LessonMaterialContent {
  sections: ContentSection[];
  summary?: string;
  keyPoints?: string[];
}

export interface ContentSection {
  title: string;
  content: string;
  subsections?: ContentSubsection[];
}

export interface ContentSubsection {
  title: string;
  content: string;
}

// MODULE 1: Ontario's Privacy Landscape
// Lesson 1: Introduction to Privacy Legislation
export const LESSON_1_1_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'privacy-laws-comparison-guide',
    lessonId: 1,
    moduleId: 1,
    title: 'Ontario Privacy Laws Comparison Guide',
    description: 'Quick reference guide comparing FIPPA, MFIPPA, and PIPEDA',
    icon: '📊',
    type: 'guide',
    tags: ['FIPPA', 'MFIPPA', 'PIPEDA', 'Comparison'],
    content: {
      summary: 'This guide provides a comprehensive comparison of the three main privacy laws in Ontario, helping you understand which law applies to your organization and what requirements each imposes.',
      keyPoints: [
        'FIPPA applies to provincial government institutions',
        'MFIPPA applies to municipal and local government bodies',
        'PIPEDA applies to private sector organizations',
        'All three laws share common principles: transparency, accuracy, and accountability',
        'Each law has specific requirements for data collection, use, and disclosure'
      ],
      sections: [
        {
          title: 'FIPPA - Freedom of Information and Protection of Privacy Act',
          content: 'FIPPA is Ontario\'s primary privacy law for provincial government institutions. It was enacted in 1987 and applies to ministries, agencies, boards, commissions, and other public bodies at the provincial level.',
          subsections: [
            {
              title: 'Scope of Application',
              content: 'FIPPA applies to provincial government institutions including ministries, agencies, boards, commissions, and other public bodies. It does not apply to municipal governments (which fall under MFIPPA) or private sector organizations (which fall under PIPEDA).'
            },
            {
              title: 'Key Requirements',
              content: 'Organizations must collect personal information only for lawful purposes, use information only for the purpose collected, limit disclosure to authorized parties, and provide individuals access to their personal information upon request.'
            },
            {
              title: 'Individual Rights',
              content: 'Individuals have the right to request access to personal information held by government institutions, request correction of inaccurate information, and file complaints with the Information and Privacy Commissioner.'
            }
          ]
        },
        {
          title: 'MFIPPA - Municipal Freedom of Information and Protection of Privacy Act',
          content: 'MFIPPA is Ontario\'s privacy law for municipal and local government bodies. It applies to municipalities, school boards, police services, and other local public bodies.',
          subsections: [
            {
              title: 'Scope of Application',
              content: 'MFIPPA applies to municipalities, school boards, police services, conservation authorities, and other local public bodies. It provides similar protections as FIPPA but is tailored for local government.'
            },
            {
              title: 'Key Requirements',
              content: 'Similar to FIPPA, organizations must collect information for lawful purposes, use information only as intended, limit disclosure, and provide access to individuals. Additional requirements apply to police records and certain sensitive information.'
            },
            {
              title: 'Individual Rights',
              content: 'Individuals can request access to personal information, request corrections, and file complaints with the Information and Privacy Commissioner. Specific procedures apply for different types of records.'
            }
          ]
        },
        {
          title: 'PIPEDA - Personal Information Protection and Electronic Documents Act',
          content: 'PIPEDA is Canada\'s federal privacy law for private sector organizations. It applies to private companies, non-profits, and other private sector entities that collect personal information.',
          subsections: [
            {
              title: 'Scope of Application',
              content: 'PIPEDA applies to private sector organizations that collect personal information in the course of commercial activities. It applies across Canada and provides a baseline for privacy protection in the private sector.'
            },
            {
              title: 'Key Requirements',
              content: 'Organizations must obtain consent before collecting personal information, be transparent about their practices, limit collection to necessary information, implement security measures, and provide individuals access to their information.'
            },
            {
              title: 'Individual Rights',
              content: 'Individuals have the right to request access to personal information, request correction of inaccurate information, and file complaints with the Privacy Commissioner of Canada.'
            }
          ]
        },
        {
          title: 'Comparison Table',
          content: 'Key differences between the three privacy laws:\n\nFIPPA: Provincial government | MFIPPA: Municipal government | PIPEDA: Private sector\n\nAll three laws require transparency, accuracy, and accountability in handling personal information.'
        }
      ]
    }
  },
  {
    id: 'privacy-compliance-checklist',
    lessonId: 1,
    moduleId: 1,
    title: 'Privacy Compliance Checklist',
    description: 'Essential checklist for ensuring privacy compliance in your organization',
    icon: '✅',
    type: 'checklist',
    tags: ['Compliance', 'Checklist', 'Privacy'],
    content: {
      summary: 'Use this checklist to ensure your organization is meeting basic privacy compliance requirements.',
      keyPoints: [
        'Identify which privacy law applies to your organization',
        'Develop privacy policies and procedures',
        'Implement data protection measures',
        'Establish access request procedures',
        'Train staff on privacy requirements',
        'Monitor and audit compliance'
      ],
      sections: [
        {
          title: 'Identify Applicable Privacy Laws',
          content: 'Determine which privacy law(s) apply to your organization',
          subsections: [
            { title: 'Organization Type', content: 'Identify whether your organization is a provincial government institution (FIPPA), municipal government body (MFIPPA), or private sector organization (PIPEDA).' },
            { title: 'Scope Assessment', content: 'Assess the scope of your organization\'s activities and determine all applicable privacy laws.' }
          ]
        },
        {
          title: 'Develop Privacy Policies',
          content: 'Create comprehensive privacy policies',
          subsections: [
            { title: 'Policy Development', content: 'Develop policies covering data collection, use, disclosure, retention, and security.' },
            { title: 'Communication', content: 'Communicate policies to all staff and ensure understanding.' }
          ]
        },
        {
          title: 'Implement Data Protection',
          content: 'Establish data protection measures',
          subsections: [
            { title: 'Technical Controls', content: 'Implement encryption, access controls, and other technical safeguards.' },
            { title: 'Administrative Controls', content: 'Establish procedures for secure data handling and staff training.' }
          ]
        },
        {
          title: 'Access Request Procedures',
          content: 'Establish procedures for handling access requests',
          subsections: [
            { title: 'Request Process', content: 'Develop procedures for receiving, processing, and responding to access requests.' },
            { title: 'Timelines', content: 'Establish timelines for responding to requests as required by applicable laws.' }
          ]
        },
        {
          title: 'Staff Training',
          content: 'Provide privacy training to all staff',
          subsections: [
            { title: 'Training Program', content: 'Develop comprehensive training covering applicable privacy laws and organizational policies.' },
            { title: 'Regular Updates', content: 'Provide regular training updates and specialized training for staff with access to sensitive information.' }
          ]
        },
        {
          title: 'Monitoring and Auditing',
          content: 'Monitor and audit privacy compliance',
          subsections: [
            { title: 'Compliance Monitoring', content: 'Regularly monitor compliance with privacy policies and legal requirements.' },
            { title: 'Audit Program', content: 'Conduct regular audits to identify compliance gaps and improvement opportunities.' }
          ]
        }
      ]
    }
  }
];

// Lesson 2: FIPPA Deep Dive
export const LESSON_1_2_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'fippa-implementation-guide',
    lessonId: 2,
    moduleId: 1,
    title: 'FIPPA Implementation Guide',
    description: 'Detailed guide for implementing FIPPA compliance in government institutions',
    icon: '📖',
    type: 'guide',
    tags: ['FIPPA', 'Implementation', 'Government'],
    content: {
      summary: 'This comprehensive guide explains how to implement FIPPA compliance in provincial government institutions, covering legal requirements, best practices, and practical implementation steps.',
      keyPoints: [
        'Understand FIPPA\'s scope and application',
        'Implement information governance practices',
        'Establish access request procedures',
        'Protect personal information appropriately',
        'Respond to complaints and appeals',
        'Maintain compliance records'
      ],
      sections: [
        {
          title: 'Understanding FIPPA Scope',
          content: 'FIPPA applies to provincial government institutions and establishes rules for how they collect, use, and disclose personal information. Understanding the scope is essential for compliance.',
          subsections: [
            {
              title: 'Covered Institutions',
              content: 'FIPPA applies to ministries, agencies, boards, commissions, and other public bodies at the provincial level. Determine whether your institution is covered.'
            },
            {
              title: 'Personal Information Definition',
              content: 'Personal information includes any information about an identifiable individual. Understand what constitutes personal information under FIPPA.'
            }
          ]
        },
        {
          title: 'Information Governance',
          content: 'Establish information governance practices to ensure compliance with FIPPA requirements.',
          subsections: [
            {
              title: 'Data Inventory',
              content: 'Maintain an inventory of all personal information held by your institution, including location, sensitivity level, and retention schedule.'
            },
            {
              title: 'Retention Schedules',
              content: 'Develop retention schedules specifying how long personal information should be retained before disposal.'
            }
          ]
        },
        {
          title: 'Access Request Procedures',
          content: 'Establish procedures for responding to requests for access to personal information.',
          subsections: [
            {
              title: 'Request Process',
              content: 'Develop procedures for receiving, logging, processing, and responding to access requests within required timelines.'
            },
            {
              title: 'Exemptions',
              content: 'Understand and apply exemptions that allow institutions to withhold certain information from disclosure.'
            }
          ]
        },
        {
          title: 'Personal Information Protection',
          content: 'Implement measures to protect personal information from unauthorized access and disclosure.',
          subsections: [
            {
              title: 'Security Measures',
              content: 'Implement technical and administrative safeguards appropriate to the sensitivity of the information.'
            },
            {
              title: 'Access Controls',
              content: 'Limit access to personal information to staff with a need to know and implement monitoring of access.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'fippa-exemptions-reference',
    lessonId: 2,
    moduleId: 1,
    title: 'FIPPA Exemptions Reference',
    description: 'Quick reference guide to FIPPA exemptions and when they apply',
    icon: '📚',
    type: 'reference',
    tags: ['FIPPA', 'Exemptions', 'Reference'],
    content: {
      summary: 'This reference guide explains the exemptions available under FIPPA that allow institutions to withhold information from disclosure.',
      keyPoints: [
        'Exemptions allow withholding of certain information',
        'Some exemptions are mandatory, others discretionary',
        'Exemptions must be applied consistently',
        'Institutions must justify use of exemptions',
        'Individuals can appeal exemption decisions'
      ],
      sections: [
        {
          title: 'Mandatory Exemptions',
          content: 'Mandatory exemptions require institutions to withhold information when certain conditions are met.'
        },
        {
          title: 'Discretionary Exemptions',
          content: 'Discretionary exemptions allow institutions to choose whether to withhold information.'
        },
        {
          title: 'Applying Exemptions',
          content: 'Exemptions must be applied consistently and institutions must be prepared to justify their decisions.'
        }
      ]
    }
  }
];

// Lesson 3: MFIPPA for Municipal Governments
export const LESSON_1_3_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'mfippa-guide',
    lessonId: 3,
    moduleId: 1,
    title: 'MFIPPA Implementation Guide',
    description: 'Guide for implementing MFIPPA in municipal and local government bodies',
    icon: '🏛️',
    type: 'guide',
    tags: ['MFIPPA', 'Municipal', 'Local Government'],
    content: {
      summary: 'This guide explains how to implement MFIPPA compliance in municipal governments, school boards, and other local public bodies.',
      keyPoints: [
        'MFIPPA applies to municipalities and local government bodies',
        'Similar principles to FIPPA but tailored for local government',
        'Special rules apply to police records',
        'Municipalities must establish privacy policies',
        'Access requests must be handled within specific timelines'
      ],
      sections: [
        {
          title: 'MFIPPA Scope and Application',
          content: 'MFIPPA applies to municipalities, school boards, police services, conservation authorities, and other local public bodies.'
        },
        {
          title: 'Key Differences from FIPPA',
          content: 'While MFIPPA is similar to FIPPA, there are important differences in scope, exemptions, and procedures.'
        },
        {
          title: 'Police Records Under MFIPPA',
          content: 'Special rules apply to police records, including additional exemptions and procedures.'
        },
        {
          title: 'Implementation Steps',
          content: 'Steps for implementing MFIPPA compliance in your municipal organization.'
        }
      ]
    }
  }
];

// Lesson 4: PIPEDA for Private Sector
export const LESSON_1_4_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'pipeda-guide',
    lessonId: 4,
    moduleId: 1,
    title: 'PIPEDA Implementation Guide',
    description: 'Comprehensive guide for PIPEDA compliance in private sector organizations',
    icon: '🏢',
    type: 'guide',
    tags: ['PIPEDA', 'Private Sector', 'Compliance'],
    content: {
      summary: 'This guide explains how to implement PIPEDA compliance in private sector organizations, covering consent, transparency, and individual rights.',
      keyPoints: [
        'PIPEDA applies to private sector organizations',
        'Consent is required before collecting personal information',
        'Organizations must be transparent about their practices',
        'Individuals have rights to access and correct their information',
        'Organizations must implement appropriate security measures'
      ],
      sections: [
        {
          title: 'PIPEDA Principles',
          content: 'PIPEDA is based on 10 principles that guide how organizations should handle personal information.'
        },
        {
          title: 'Consent Requirements',
          content: 'Organizations must obtain meaningful consent before collecting personal information.'
        },
        {
          title: 'Transparency and Accountability',
          content: 'Organizations must be transparent about their information practices and maintain accountability.'
        },
        {
          title: 'Individual Rights',
          content: 'Individuals have the right to access, correct, and request deletion of their personal information.'
        },
        {
          title: 'Security Obligations',
          content: 'Organizations must implement appropriate security measures to protect personal information.'
        }
      ]
    }
  }
];

// MODULE 2: Cybersecurity Fundamentals
// Lesson 1: CIA Triad and Core Concepts
export const LESSON_2_1_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'cia-triad-guide',
    lessonId: 5,
    moduleId: 2,
    title: 'CIA Triad Fundamentals Guide',
    description: 'Understanding Confidentiality, Integrity, and Availability in cybersecurity',
    icon: '🔐',
    type: 'guide',
    tags: ['CIA Triad', 'Security', 'Fundamentals'],
    content: {
      summary: 'This guide explains the CIA Triad, the foundational security model that guides cybersecurity practices.',
      keyPoints: [
        'Confidentiality: Protecting information from unauthorized access',
        'Integrity: Ensuring information is accurate and unmodified',
        'Availability: Ensuring information is accessible when needed',
        'All three elements are equally important',
        'Security measures must address all three elements'
      ],
      sections: [
        {
          title: 'Confidentiality',
          content: 'Confidentiality ensures that information is protected from unauthorized access. Only authorized individuals should be able to view sensitive information.',
          subsections: [
            {
              title: 'Protecting Confidentiality',
              content: 'Use encryption, access controls, and authentication to protect confidential information.'
            }
          ]
        },
        {
          title: 'Integrity',
          content: 'Integrity ensures that information is accurate, complete, and unmodified. Information should not be altered without authorization.',
          subsections: [
            {
              title: 'Maintaining Integrity',
              content: 'Use checksums, digital signatures, and access controls to maintain data integrity.'
            }
          ]
        },
        {
          title: 'Availability',
          content: 'Availability ensures that information and systems are accessible when needed by authorized users.',
          subsections: [
            {
              title: 'Ensuring Availability',
              content: 'Implement redundancy, backups, and disaster recovery to ensure availability.'
            }
          ]
        }
      ]
    }
  }
];

// Lesson 2: Common Threats and Vulnerabilities
export const LESSON_2_2_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'threats-vulnerabilities-guide',
    lessonId: 6,
    moduleId: 2,
    title: 'Common Threats and Vulnerabilities Guide',
    description: 'Understanding common cybersecurity threats and how to protect against them',
    icon: '⚠️',
    type: 'guide',
    tags: ['Threats', 'Vulnerabilities', 'Security'],
    content: {
      summary: 'This guide explains common cybersecurity threats including malware, phishing, ransomware, and social engineering.',
      keyPoints: [
        'Malware includes viruses, worms, trojans, and spyware',
        'Phishing attacks use deception to steal information',
        'Ransomware encrypts data and demands payment',
        'Social engineering exploits human psychology',
        'Defense requires multiple layers of protection'
      ],
      sections: [
        {
          title: 'Malware',
          content: 'Malware is malicious software designed to harm systems or steal information. Types include viruses, worms, trojans, and spyware.'
        },
        {
          title: 'Phishing',
          content: 'Phishing attacks use deceptive emails or websites to trick users into revealing sensitive information or downloading malware.'
        },
        {
          title: 'Ransomware',
          content: 'Ransomware encrypts data and demands payment for decryption. It can cause significant business disruption.'
        },
        {
          title: 'Social Engineering',
          content: 'Social engineering exploits human psychology to trick people into revealing information or bypassing security measures.'
        }
      ]
    }
  }
];

// Lesson 3: Defense Mechanisms and Best Practices
export const LESSON_2_3_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'defense-mechanisms-guide',
    lessonId: 7,
    moduleId: 2,
    title: 'Defense Mechanisms and Best Practices',
    description: 'Implementing effective cybersecurity defense mechanisms',
    icon: '🛡️',
    type: 'guide',
    tags: ['Defense', 'Best Practices', 'Security'],
    content: {
      summary: 'This guide explains defense mechanisms and best practices for protecting against cybersecurity threats.',
      keyPoints: [
        'Firewalls control network traffic',
        'Intrusion detection systems monitor for attacks',
        'Antivirus software detects and removes malware',
        'Regular updates patch vulnerabilities',
        'Employee training reduces human error'
      ],
      sections: [
        {
          title: 'Firewalls',
          content: 'Firewalls control network traffic and prevent unauthorized access to systems.'
        },
        {
          title: 'Intrusion Detection',
          content: 'Intrusion detection systems monitor network traffic for signs of attacks.'
        },
        {
          title: 'Antivirus and Anti-Malware',
          content: 'These tools detect and remove malicious software from systems.'
        },
        {
          title: 'Software Updates',
          content: 'Regular updates patch known vulnerabilities and improve security.'
        },
        {
          title: 'Employee Training',
          content: 'Training helps employees recognize and respond to security threats.'
        }
      ]
    }
  }
];

// Lesson 4: Incident Response and Recovery
export const LESSON_2_4_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'incident-response-guide',
    lessonId: 8,
    moduleId: 2,
    title: 'Incident Response and Recovery Guide',
    description: 'Responding to and recovering from cybersecurity incidents',
    icon: '🚨',
    type: 'guide',
    tags: ['Incident Response', 'Recovery', 'Emergency'],
    content: {
      summary: 'This guide explains how to respond to cybersecurity incidents and recover from attacks.',
      keyPoints: [
        'Immediate response is critical',
        'Contain damage to prevent spread',
        'Investigate to understand the attack',
        'Recover systems and restore operations',
        'Learn from incidents to prevent recurrence'
      ],
      sections: [
        {
          title: 'Immediate Response',
          content: 'Take immediate action to contain the incident and prevent further damage.'
        },
        {
          title: 'Investigation',
          content: 'Investigate the incident to understand how it occurred and what systems were affected.'
        },
        {
          title: 'Recovery',
          content: 'Recover systems and restore normal operations.'
        },
        {
          title: 'Post-Incident Analysis',
          content: 'Analyze the incident to identify lessons learned and prevent recurrence.'
        }
      ]
    }
  }
];

// MODULE 3: AI Governance & Ethics
// Lesson 1: AI Ethics Principles
export const LESSON_3_1_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'ai-ethics-guide',
    lessonId: 9,
    moduleId: 3,
    title: 'AI Ethics Principles Guide',
    description: 'Understanding and implementing AI ethics principles',
    icon: '🤖',
    type: 'guide',
    tags: ['AI Ethics', 'Principles', 'Governance'],
    content: {
      summary: 'This guide explains key AI ethics principles including fairness, transparency, accountability, and privacy.',
      keyPoints: [
        'Fairness: AI systems should treat all individuals fairly',
        'Transparency: AI decisions should be explainable',
        'Accountability: Organizations should be responsible for AI systems',
        'Privacy: Personal data should be protected',
        'Security: AI systems should be secure from attacks'
      ],
      sections: [
        {
          title: 'Fairness',
          content: 'AI systems should treat all individuals fairly and avoid discrimination based on protected characteristics.'
        },
        {
          title: 'Transparency',
          content: 'AI systems should be transparent and their decisions should be explainable to users.'
        },
        {
          title: 'Accountability',
          content: 'Organizations should be accountable for the decisions made by AI systems.'
        },
        {
          title: 'Privacy',
          content: 'AI systems should protect personal data and respect individual privacy.'
        },
        {
          title: 'Security',
          content: 'AI systems should be secure from attacks and unauthorized access.'
        }
      ]
    }
  }
];

// Lesson 2: Bias Detection and Mitigation
export const LESSON_3_2_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'bias-detection-guide',
    lessonId: 10,
    moduleId: 3,
    title: 'Bias Detection and Mitigation Guide',
    description: 'Identifying and mitigating bias in AI systems',
    icon: '⚖️',
    type: 'guide',
    tags: ['Bias', 'AI', 'Fairness'],
    content: {
      summary: 'This guide explains how to detect and mitigate bias in AI systems.',
      keyPoints: [
        'Bias can occur in training data, algorithms, or deployment',
        'Bias can lead to unfair treatment of individuals',
        'Testing can identify bias in AI systems',
        'Mitigation strategies can reduce bias',
        'Ongoing monitoring is essential'
      ],
      sections: [
        {
          title: 'Sources of Bias',
          content: 'Bias can come from training data, algorithm design, or deployment practices.'
        },
        {
          title: 'Detecting Bias',
          content: 'Use testing and analysis to identify bias in AI systems.'
        },
        {
          title: 'Mitigating Bias',
          content: 'Implement strategies to reduce bias including diverse training data and fairness constraints.'
        },
        {
          title: 'Monitoring',
          content: 'Continuously monitor AI systems for bias and performance issues.'
        }
      ]
    }
  }
];

// Lesson 3: Governance Frameworks
export const LESSON_3_3_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'ai-governance-guide',
    lessonId: 11,
    moduleId: 3,
    title: 'AI Governance Frameworks Guide',
    description: 'Establishing governance frameworks for AI systems',
    icon: '📋',
    type: 'guide',
    tags: ['Governance', 'AI', 'Framework'],
    content: {
      summary: 'This guide explains how to establish governance frameworks for AI systems.',
      keyPoints: [
        'Governance provides oversight and control',
        'Clear policies and procedures are essential',
        'Impact assessments identify risks',
        'Human oversight ensures accountability',
        'Regular monitoring ensures compliance'
      ],
      sections: [
        {
          title: 'Governance Structure',
          content: 'Establish a governance committee with representatives from technical, legal, and business teams.'
        },
        {
          title: 'Policies and Procedures',
          content: 'Develop policies covering AI development, deployment, and monitoring.'
        },
        {
          title: 'Impact Assessment',
          content: 'Conduct impact assessments before deploying AI systems.'
        },
        {
          title: 'Human Oversight',
          content: 'Maintain human oversight of AI systems, especially in high-stakes decisions.'
        },
        {
          title: 'Monitoring and Audit',
          content: 'Monitor AI systems regularly and conduct audits to ensure compliance.'
        }
      ]
    }
  }
];

// Lesson 4: Responsible AI Deployment
export const LESSON_3_4_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'responsible-ai-guide',
    lessonId: 12,
    moduleId: 3,
    title: 'Responsible AI Deployment Guide',
    description: 'Best practices for deploying AI systems responsibly',
    icon: '✅',
    type: 'guide',
    tags: ['Responsible AI', 'Deployment', 'Best Practices'],
    content: {
      summary: 'This guide explains best practices for deploying AI systems responsibly.',
      keyPoints: [
        'Plan deployment carefully',
        'Test thoroughly before deployment',
        'Monitor performance after deployment',
        'Respond quickly to problems',
        'Maintain transparency with users'
      ],
      sections: [
        {
          title: 'Pre-Deployment Planning',
          content: 'Plan deployment carefully, considering risks, resources, and timelines.'
        },
        {
          title: 'Testing',
          content: 'Conduct thorough testing including bias testing and performance validation.'
        },
        {
          title: 'Deployment',
          content: 'Deploy gradually, starting with limited scope and expanding based on results.'
        },
        {
          title: 'Monitoring',
          content: 'Monitor system performance and user feedback after deployment.'
        },
        {
          title: 'Response Procedures',
          content: 'Establish procedures for responding to problems and user concerns.'
        }
      ]
    }
  }
];

// MODULE 4: Data Management Excellence
// Lesson 1: Data Governance Fundamentals
export const LESSON_4_1_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'data-governance-fundamentals',
    lessonId: 13,
    moduleId: 4,
    title: 'Data Governance Fundamentals',
    description: 'Understanding data governance principles and practices',
    icon: '📊',
    type: 'guide',
    tags: ['Data Governance', 'Fundamentals', 'Management'],
    content: {
      summary: 'This guide explains data governance principles and how to establish effective data governance.',
      keyPoints: [
        'Data governance provides structure and oversight',
        'Clear policies ensure consistent practices',
        'Data classification helps prioritize protection',
        'Roles and responsibilities must be defined',
        'Regular monitoring ensures compliance'
      ],
      sections: [
        {
          title: 'Data Governance Principles',
          content: 'Data governance is based on principles of accountability, transparency, and consistency.'
        },
        {
          title: 'Governance Structure',
          content: 'Establish a governance committee and define roles and responsibilities.'
        },
        {
          title: 'Policies and Procedures',
          content: 'Develop policies covering data collection, use, retention, and disposal.'
        },
        {
          title: 'Data Classification',
          content: 'Classify data based on sensitivity and protection requirements.'
        },
        {
          title: 'Monitoring and Compliance',
          content: 'Monitor data governance compliance and audit practices regularly.'
        }
      ]
    }
  }
];

// Lesson 2: Data Quality and Management
export const LESSON_4_2_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'data-quality-guide',
    lessonId: 14,
    moduleId: 4,
    title: 'Data Quality and Management Guide',
    description: 'Ensuring data quality and effective data management',
    icon: '✨',
    type: 'guide',
    tags: ['Data Quality', 'Management', 'Best Practices'],
    content: {
      summary: 'This guide explains how to ensure data quality and manage data effectively.',
      keyPoints: [
        'Data quality is essential for good decisions',
        'Quality standards should be defined',
        'Data profiling identifies quality issues',
        'Cleansing improves data quality',
        'Ongoing monitoring maintains quality'
      ],
      sections: [
        {
          title: 'Data Quality Dimensions',
          content: 'Data quality includes accuracy, completeness, consistency, and timeliness.'
        },
        {
          title: 'Quality Standards',
          content: 'Define quality standards and metrics for your organization.'
        },
        {
          title: 'Data Profiling',
          content: 'Use data profiling to identify quality issues and anomalies.'
        },
        {
          title: 'Data Cleansing',
          content: 'Implement processes to correct and improve data quality.'
        },
        {
          title: 'Quality Monitoring',
          content: 'Monitor data quality continuously and report on metrics.'
        }
      ]
    }
  }
];

// Lesson 3: Data Security and Privacy
export const LESSON_4_3_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'data-security-privacy-guide',
    lessonId: 15,
    moduleId: 4,
    title: 'Data Security and Privacy Guide',
    description: 'Protecting data security and privacy',
    icon: '🔒',
    type: 'guide',
    tags: ['Security', 'Privacy', 'Data Protection'],
    content: {
      summary: 'This guide explains how to protect data security and privacy.',
      keyPoints: [
        'Encryption protects data in transit and at rest',
        'Access controls limit who can access data',
        'Monitoring detects unauthorized access',
        'Backups protect against data loss',
        'Privacy policies guide data handling'
      ],
      sections: [
        {
          title: 'Encryption',
          content: 'Use encryption to protect data in transit and at rest.'
        },
        {
          title: 'Access Control',
          content: 'Implement role-based access control to limit data access.'
        },
        {
          title: 'Monitoring and Auditing',
          content: 'Monitor and audit access to sensitive data.'
        },
        {
          title: 'Backup and Recovery',
          content: 'Maintain regular backups and test recovery procedures.'
        },
        {
          title: 'Privacy Protection',
          content: 'Implement privacy policies and procedures to protect personal data.'
        }
      ]
    }
  }
];

// Lesson 4: Data Lifecycle Management
export const LESSON_4_4_MATERIALS: LessonStudyMaterial[] = [
  {
    id: 'data-lifecycle-guide',
    lessonId: 16,
    moduleId: 4,
    title: 'Data Lifecycle Management Guide',
    description: 'Managing data through its complete lifecycle',
    icon: '🔄',
    type: 'guide',
    tags: ['Lifecycle', 'Data Management', 'Retention'],
    content: {
      summary: 'This guide explains how to manage data through its complete lifecycle.',
      keyPoints: [
        'Lifecycle includes creation, use, retention, and disposal',
        'Retention schedules specify how long to keep data',
        'Archiving preserves historical data',
        'Secure disposal prevents unauthorized access',
        'Policies ensure consistent practices'
      ],
      sections: [
        {
          title: 'Data Creation',
          content: 'Establish procedures for creating and capturing data.'
        },
        {
          title: 'Data Use',
          content: 'Define how data should be used and by whom.'
        },
        {
          title: 'Data Retention',
          content: 'Develop retention schedules specifying how long to keep data.'
        },
        {
          title: 'Data Archiving',
          content: 'Archive historical data for long-term preservation.'
        },
        {
          title: 'Data Disposal',
          content: 'Securely dispose of data when no longer needed.'
        }
      ]
    }
  }
];

// Master list of all lesson materials
export const ALL_LESSON_MATERIALS: LessonStudyMaterial[] = [
  ...LESSON_1_1_MATERIALS,
  ...LESSON_1_2_MATERIALS,
  ...LESSON_1_3_MATERIALS,
  ...LESSON_1_4_MATERIALS,
  ...LESSON_2_1_MATERIALS,
  ...LESSON_2_2_MATERIALS,
  ...LESSON_2_3_MATERIALS,
  ...LESSON_2_4_MATERIALS,
  ...LESSON_3_1_MATERIALS,
  ...LESSON_3_2_MATERIALS,
  ...LESSON_3_3_MATERIALS,
  ...LESSON_3_4_MATERIALS,
  ...LESSON_4_1_MATERIALS,
  ...LESSON_4_2_MATERIALS,
  ...LESSON_4_3_MATERIALS,
  ...LESSON_4_4_MATERIALS,
];

export const getLessonStudyMaterials = (lessonId: number): LessonStudyMaterial[] => {
  return ALL_LESSON_MATERIALS.filter(material => material.lessonId === lessonId);
};

export const getStudyMaterialById = (id: string): LessonStudyMaterial | undefined => {
  return ALL_LESSON_MATERIALS.find(material => material.id === id);
};
