// Visual lesson content data with multimedia elements, infographics, and interactive components
// This data enhances the base lesson content with rich visual elements

export interface VisualLessonContent {
  moduleId: number;
  lessonId: number;
  infographics: InfographicData[];
  videos: VideoData[];
  timelines: TimelineData[];
  processFlows: ProcessFlowData[];
  comparisonTables: ComparisonTableData[];
  statistics: StatisticData[];
  resources: ResourceData[];
}

export interface InfographicData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  caption: string;
}

export interface VideoData {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  thumbnail: string;
}

export interface TimelineData {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessFlowData {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonTableData {
  id: string;
  label: string;
  correct: string;
  incorrect: string;
}

export interface StatisticData {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface ResourceData {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'image' | 'spreadsheet';
  size: string;
  url: string;
}

// ============================================================================
// MODULE 1: ONTARIO PRIVACY LAW MASTERY - VISUAL CONTENT
// ============================================================================

export const module1VisualContent: VisualLessonContent[] = [
  {
    moduleId: 1,
    lessonId: 1,
    infographics: [
      {
        id: 'inf1-1-1',
        title: 'Ontario Privacy Laws Comparison',
        description: 'Visual comparison of FIPPA, MFIPPA, and PIPEDA scope and applicability',
        imageUrl: 'https://via.placeholder.com/800x600?text=Privacy+Laws+Comparison',
        altText: 'Comparison of Ontario privacy laws',
        caption: 'FIPPA applies to provincial government, MFIPPA to municipalities, and PIPEDA to private sector'
      }
    ],
    videos: [
      {
        id: 'vid1-1-1',
        title: 'Introduction to Ontario Privacy Laws',
        description: 'Overview of the three major privacy laws governing Ontario',
        videoUrl: 'https://example.com/videos/privacy-laws-intro.mp4',
        duration: '8:45',
        thumbnail: 'https://via.placeholder.com/320x180?text=Privacy+Laws'
      }
    ],
    timelines: [
      {
        id: 'tl1-1-1',
        year: '1987',
        title: 'FIPPA Enacted',
        description: 'Freedom of Information and Protection of Privacy Act established for provincial government',
        icon: '📜'
      },
      {
        id: 'tl1-1-2',
        year: '1990',
        title: 'MFIPPA Enacted',
        description: 'Municipal Freedom of Information and Protection of Privacy Act established',
        icon: '🏛️'
      },
      {
        id: 'tl1-1-3',
        year: '2000',
        title: 'PIPEDA Enacted',
        description: 'Personal Information Protection and Electronic Documents Act established nationally',
        icon: '🏢'
      }
    ],
    processFlows: [],
    comparisonTables: [
      {
        id: 'cmp1-1-1',
        label: 'Scope',
        correct: 'Clearly identify which law applies based on organization type',
        incorrect: 'Assuming all organizations follow the same privacy law'
      },
      {
        id: 'cmp1-1-2',
        label: 'Access Requests',
        correct: 'Respond within 30 days with proper documentation',
        incorrect: 'Delaying response or providing incomplete information'
      }
    ],
    statistics: [
      {
        id: 'stat1-1-1',
        label: 'Provincial Institutions',
        value: '1000+',
        icon: '🏛️'
      },
      {
        id: 'stat1-1-2',
        label: 'Municipalities',
        value: '444',
        icon: '🏘️'
      },
      {
        id: 'stat1-1-3',
        label: 'Private Sector Orgs',
        value: '2M+',
        icon: '🏢'
      }
    ],
    resources: [
      {
        id: 'res1-1-1',
        title: 'FIPPA Guide',
        description: 'Comprehensive guide to FIPPA requirements and procedures',
        type: 'pdf',
        size: '2.4 MB',
        url: 'https://example.com/resources/fippa-guide.pdf'
      },
      {
        id: 'res1-1-2',
        title: 'Privacy Checklist',
        description: 'Quick reference checklist for privacy compliance',
        type: 'doc',
        size: '156 KB',
        url: 'https://example.com/resources/privacy-checklist.docx'
      }
    ]
  },
  {
    moduleId: 1,
    lessonId: 2,
    infographics: [
      {
        id: 'inf1-2-1',
        title: 'FIPPA Access Request Process',
        description: 'Step-by-step process for handling FIPPA access requests',
        imageUrl: 'https://via.placeholder.com/800x600?text=FIPPA+Process',
        altText: 'FIPPA access request process flow',
        caption: 'Organizations must respond to access requests within 30 days'
      }
    ],
    videos: [
      {
        id: 'vid1-2-1',
        title: 'FIPPA Deep Dive',
        description: 'Detailed exploration of FIPPA requirements and exemptions',
        videoUrl: 'https://example.com/videos/fippa-deep-dive.mp4',
        duration: '12:30',
        thumbnail: 'https://via.placeholder.com/320x180?text=FIPPA'
      }
    ],
    timelines: [
      {
        id: 'tl1-2-1',
        year: 'Day 1',
        title: 'Access Request Received',
        description: 'Organization receives formal access request from individual',
        icon: '📬'
      },
      {
        id: 'tl1-2-2',
        year: 'Day 15',
        title: 'Initial Review',
        description: 'Organization reviews request and identifies responsive records',
        icon: '🔍'
      },
      {
        id: 'tl1-2-3',
        year: 'Day 30',
        title: 'Response Deadline',
        description: 'Organization must respond with records or valid exemption notice',
        icon: '✅'
      }
    ],
    processFlows: [
      {
        id: 'pf1-2-1',
        number: 1,
        title: 'Receive Request',
        description: 'Accept and log the access request with date and requester information',
        icon: '📝'
      },
      {
        id: 'pf1-2-2',
        number: 2,
        title: 'Search Records',
        description: 'Conduct thorough search across all systems for responsive records',
        icon: '🔎'
      },
      {
        id: 'pf1-2-3',
        number: 3,
        title: 'Review Exemptions',
        description: 'Determine if any exemptions apply to the responsive records',
        icon: '⚖️'
      },
      {
        id: 'pf1-2-4',
        number: 4,
        title: 'Prepare Response',
        description: 'Compile records and prepare response letter with decisions',
        icon: '📄'
      }
    ],
    comparisonTables: [
      {
        id: 'cmp1-2-1',
        label: 'Personal Information',
        correct: 'Withhold personal information about third parties',
        incorrect: 'Releasing all information without considering privacy'
      },
      {
        id: 'cmp1-2-2',
        label: 'Legal Privilege',
        correct: 'Withhold solicitor-client privileged communications',
        incorrect: 'Releasing legal advice and communications'
      }
    ],
    statistics: [
      {
        id: 'stat1-2-1',
        label: 'Average Response Time',
        value: '25 days',
        icon: '⏱️'
      },
      {
        id: 'stat1-2-2',
        label: 'Exemption Rate',
        value: '15-20%',
        icon: '📊'
      },
      {
        id: 'stat1-2-3',
        label: 'Appeals',
        value: '5-10%',
        icon: '⚖️'
      }
    ],
    resources: [
      {
        id: 'res1-2-1',
        title: 'FIPPA Exemptions Guide',
        description: 'Detailed guide to all FIPPA exemptions with examples',
        type: 'pdf',
        size: '3.2 MB',
        url: 'https://example.com/resources/fippa-exemptions.pdf'
      }
    ]
  }
];

// ============================================================================
// MODULE 2: CYBERSECURITY FUNDAMENTALS - VISUAL CONTENT
// ============================================================================

export const module2VisualContent: VisualLessonContent[] = [
  {
    moduleId: 2,
    lessonId: 1,
    infographics: [
      {
        id: 'inf2-1-1',
        title: 'CIA Triad Explained',
        description: 'Visual representation of Confidentiality, Integrity, and Availability',
        imageUrl: 'https://via.placeholder.com/800x600?text=CIA+Triad',
        altText: 'CIA Triad security model',
        caption: 'The CIA Triad is the foundation of cybersecurity principles'
      }
    ],
    videos: [
      {
        id: 'vid2-1-1',
        title: 'Cybersecurity Fundamentals',
        description: 'Introduction to core cybersecurity concepts and principles',
        videoUrl: 'https://example.com/videos/cybersecurity-basics.mp4',
        duration: '10:15',
        thumbnail: 'https://via.placeholder.com/320x180?text=Cybersecurity'
      }
    ],
    timelines: [
      {
        id: 'tl2-1-1',
        year: '1970s',
        title: 'Early Cybersecurity',
        description: 'First computer security concerns emerge with mainframe systems',
        icon: '💻'
      },
      {
        id: 'tl2-1-2',
        year: '1990s',
        title: 'Internet Era',
        description: 'Widespread internet adoption increases security threats',
        icon: '🌐'
      },
      {
        id: 'tl2-1-3',
        year: '2020s',
        title: 'Modern Threats',
        description: 'Sophisticated attacks including ransomware and AI-powered threats',
        icon: '🚨'
      }
    ],
    processFlows: [
      {
        id: 'pf2-1-1',
        number: 1,
        title: 'Identify Assets',
        description: 'Catalog all systems, data, and resources that need protection',
        icon: '📋'
      },
      {
        id: 'pf2-1-2',
        number: 2,
        title: 'Assess Threats',
        description: 'Identify potential threats and vulnerabilities to assets',
        icon: '⚠️'
      },
      {
        id: 'pf2-1-3',
        number: 3,
        title: 'Implement Controls',
        description: 'Deploy security measures to protect against identified threats',
        icon: '🛡️'
      },
      {
        id: 'pf2-1-4',
        number: 4,
        title: 'Monitor & Respond',
        description: 'Continuously monitor for incidents and respond appropriately',
        icon: '👁️'
      }
    ],
    comparisonTables: [
      {
        id: 'cmp2-1-1',
        label: 'Confidentiality',
        correct: 'Restrict access to authorized users only',
        incorrect: 'Sharing passwords or leaving systems unattended'
      },
      {
        id: 'cmp2-1-2',
        label: 'Integrity',
        correct: 'Verify data has not been modified',
        incorrect: 'Accepting data without validation'
      },
      {
        id: 'cmp2-1-3',
        label: 'Availability',
        correct: 'Ensure systems are accessible when needed',
        incorrect: 'Ignoring system maintenance and backups'
      }
    ],
    statistics: [
      {
        id: 'stat2-1-1',
        label: 'Cyber Attacks Daily',
        value: '2,200+',
        icon: '🚨'
      },
      {
        id: 'stat2-1-2',
        label: 'Data Breaches',
        value: '1,000+/year',
        icon: '📊'
      },
      {
        id: 'stat2-1-3',
        label: 'Cost per Breach',
        value: '$4.5M',
        icon: '💰'
      }
    ],
    resources: [
      {
        id: 'res2-1-1',
        title: 'Security Framework',
        description: 'NIST Cybersecurity Framework overview and implementation guide',
        type: 'pdf',
        size: '1.8 MB',
        url: 'https://example.com/resources/nist-framework.pdf'
      }
    ]
  }
];

// ============================================================================
// MODULE 3: AI GOVERNANCE & ETHICS - VISUAL CONTENT
// ============================================================================

export const module3VisualContent: VisualLessonContent[] = [
  {
    moduleId: 3,
    lessonId: 1,
    infographics: [
      {
        id: 'inf3-1-1',
        title: 'AI Ethics Framework',
        description: 'Core principles of responsible AI development and deployment',
        imageUrl: 'https://via.placeholder.com/800x600?text=AI+Ethics',
        altText: 'AI ethics framework diagram',
        caption: 'Ethical AI requires attention to fairness, transparency, and accountability'
      }
    ],
    videos: [
      {
        id: 'vid3-1-1',
        title: 'AI Ethics Fundamentals',
        description: 'Introduction to ethical considerations in AI systems',
        videoUrl: 'https://example.com/videos/ai-ethics.mp4',
        duration: '11:20',
        thumbnail: 'https://via.placeholder.com/320x180?text=AI+Ethics'
      }
    ],
    timelines: [
      {
        id: 'tl3-1-1',
        year: '1950s',
        title: 'AI Birth',
        description: 'Artificial Intelligence concept introduced',
        icon: '🤖'
      },
      {
        id: 'tl3-1-2',
        year: '2010s',
        title: 'AI Boom',
        description: 'Deep learning and neural networks revolutionize AI',
        icon: '📈'
      },
      {
        id: 'tl3-1-3',
        year: '2020s',
        title: 'Ethics Focus',
        description: 'Increased focus on responsible and ethical AI',
        icon: '⚖️'
      }
    ],
    processFlows: [
      {
        id: 'pf3-1-1',
        number: 1,
        title: 'Define Purpose',
        description: 'Clearly define the intended use and business objectives',
        icon: '🎯'
      },
      {
        id: 'pf3-1-2',
        number: 2,
        title: 'Assess Impact',
        description: 'Evaluate potential ethical and societal impacts',
        icon: '📊'
      },
      {
        id: 'pf3-1-3',
        number: 3,
        title: 'Implement Safeguards',
        description: 'Build in fairness checks, transparency, and human oversight',
        icon: '🛡️'
      },
      {
        id: 'pf3-1-4',
        number: 4,
        title: 'Monitor & Audit',
        description: 'Continuously monitor for bias and ethical issues',
        icon: '🔍'
      }
    ],
    comparisonTables: [
      {
        id: 'cmp3-1-1',
        label: 'Fairness',
        correct: 'Test for bias across demographic groups',
        incorrect: 'Assuming the AI is fair without testing'
      },
      {
        id: 'cmp3-1-2',
        label: 'Transparency',
        correct: 'Explain how AI makes decisions',
        incorrect: 'Treating AI as a black box'
      }
    ],
    statistics: [
      {
        id: 'stat3-1-1',
        label: 'AI Bias Incidents',
        value: '100+',
        icon: '⚠️'
      },
      {
        id: 'stat3-1-2',
        label: 'Organizations with AI Ethics',
        value: '45%',
        icon: '📊'
      },
      {
        id: 'stat3-1-3',
        label: 'Regulatory Frameworks',
        value: '15+',
        icon: '⚖️'
      }
    ],
    resources: [
      {
        id: 'res3-1-1',
        title: 'AI Ethics Checklist',
        description: 'Comprehensive checklist for ethical AI implementation',
        type: 'doc',
        size: '245 KB',
        url: 'https://example.com/resources/ai-ethics-checklist.docx'
      }
    ]
  }
];

// ============================================================================
// MODULE 4: DATA MANAGEMENT EXCELLENCE - VISUAL CONTENT
// ============================================================================

export const module4VisualContent: VisualLessonContent[] = [
  {
    moduleId: 4,
    lessonId: 1,
    infographics: [
      {
        id: 'inf4-1-1',
        title: 'Data Governance Framework',
        description: 'Complete data governance structure and components',
        imageUrl: 'https://via.placeholder.com/800x600?text=Data+Governance',
        altText: 'Data governance framework diagram',
        caption: 'Effective data governance requires clear roles, policies, and processes'
      }
    ],
    videos: [
      {
        id: 'vid4-1-1',
        title: 'Data Governance Essentials',
        description: 'Introduction to data governance principles and best practices',
        videoUrl: 'https://example.com/videos/data-governance.mp4',
        duration: '9:45',
        thumbnail: 'https://via.placeholder.com/320x180?text=Data+Governance'
      }
    ],
    timelines: [
      {
        id: 'tl4-1-1',
        year: '2000s',
        title: 'Data Explosion',
        description: 'Organizations begin managing large volumes of data',
        icon: '📈'
      },
      {
        id: 'tl4-1-2',
        year: '2010s',
        title: 'Big Data Era',
        description: 'Big data and analytics become critical business functions',
        icon: '🔬'
      },
      {
        id: 'tl4-1-3',
        year: '2020s',
        title: 'Data Ethics',
        description: 'Focus on responsible data management and privacy',
        icon: '🛡️'
      }
    ],
    processFlows: [
      {
        id: 'pf4-1-1',
        number: 1,
        title: 'Inventory Data',
        description: 'Catalog all data assets across the organization',
        icon: '📋'
      },
      {
        id: 'pf4-1-2',
        number: 2,
        title: 'Classify Data',
        description: 'Categorize data by sensitivity and business value',
        icon: '🏷️'
      },
      {
        id: 'pf4-1-3',
        number: 3,
        title: 'Define Policies',
        description: 'Establish policies for data handling and protection',
        icon: '📜'
      },
      {
        id: 'pf4-1-4',
        number: 4,
        title: 'Enforce & Monitor',
        description: 'Implement and monitor compliance with policies',
        icon: '✅'
      }
    ],
    comparisonTables: [
      {
        id: 'cmp4-1-1',
        label: 'Data Quality',
        correct: 'Validate and cleanse data regularly',
        incorrect: 'Ignoring data quality issues'
      },
      {
        id: 'cmp4-1-2',
        label: 'Access Control',
        correct: 'Implement principle of least privilege',
        incorrect: 'Giving everyone access to all data'
      }
    ],
    statistics: [
      {
        id: 'stat4-1-1',
        label: 'Data Breaches',
        value: '1,000+/year',
        icon: '🚨'
      },
      {
        id: 'stat4-1-2',
        label: 'Organizations with Governance',
        value: '60%',
        icon: '📊'
      },
      {
        id: 'stat4-1-3',
        label: 'Data Compliance Cost',
        value: '$2.4M avg',
        icon: '💰'
      }
    ],
    resources: [
      {
        id: 'res4-1-1',
        title: 'Data Classification Guide',
        description: 'Guide to classifying data by sensitivity and business value',
        type: 'pdf',
        size: '1.5 MB',
        url: 'https://example.com/resources/data-classification.pdf'
      },
      {
        id: 'res4-1-2',
        title: 'Data Governance Template',
        description: 'Ready-to-use data governance policy template',
        type: 'doc',
        size: '512 KB',
        url: 'https://example.com/resources/governance-template.docx'
      }
    ]
  }
];

// ============================================================================
// EXPORT ALL VISUAL CONTENT
// ============================================================================

export const allVisualContent: VisualLessonContent[] = [
  ...module1VisualContent,
  ...module2VisualContent,
  ...module3VisualContent,
  ...module4VisualContent
];

// Helper function to get visual content for a specific lesson
export function getVisualLessonContent(moduleId: number, lessonId: number): VisualLessonContent | undefined {
  return allVisualContent.find(
    content => content.moduleId === moduleId && content.lessonId === lessonId
  );
}
