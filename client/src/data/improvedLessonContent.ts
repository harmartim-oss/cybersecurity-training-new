import { ContentSection } from '@/components/training/ProfessionalContentDisplay';

export interface ImprovedLesson {
  moduleId: number;
  lessonId: number;
  title: string;
  sections: ContentSection[];
}

export const improvedLessonContent: ImprovedLesson[] = [
  // MODULE 1: Ontario Privacy Laws
  {
    moduleId: 1,
    lessonId: 1,
    title: "Introduction to Privacy Legislation",
    sections: [
      { type: 'heading', content: 'Introduction to Privacy Legislation' },
      { type: 'paragraph', content: 'Privacy legislation in Ontario forms the foundation of data protection and information governance. This lesson introduces the three primary privacy laws that govern organizations in Ontario, each designed to protect personal information while enabling legitimate business operations.' },
      
      { type: 'highlight', content: 'Privacy is a fundamental right recognized by the Canadian Charter of Rights and Freedoms. Organizations handling personal information must balance privacy protection with operational efficiency.' },
      
      { type: 'heading', content: 'The Three Pillars of Ontario Privacy Law' },
      { type: 'list', content: [
        'FIPPA (Freedom of Information and Protection of Privacy Act) - Provincial government institutions',
        'MFIPPA (Municipal Freedom of Information and Protection of Privacy Act) - Municipal and local government',
        'PIPEDA (Personal Information Protection and Electronic Documents Act) - Private sector organizations'
      ]},
      
      { type: 'definition', content: 'Personal information is any information about an identifiable individual, including name, address, phone number, email, financial information, medical records, and online identifiers.' },
      
      { type: 'heading', content: 'Why Privacy Compliance Matters' },
      { type: 'paragraph', content: 'Organizations that fail to comply with privacy legislation face significant consequences including regulatory fines, reputational damage, loss of customer trust, and legal liability. Privacy breaches can result in notification requirements, investigation costs, and potential lawsuits.' },
      
      { type: 'warning', content: 'Privacy breaches must be reported to affected individuals and regulators within specific timeframes. Failure to report can result in additional penalties and loss of public trust.' },
      
      { type: 'heading', content: 'Key Principles Across All Privacy Laws' },
      { type: 'list', content: [
        'Transparency: Organizations must be clear about how they collect, use, and share personal information',
        'Accuracy: Personal information must be accurate, complete, and up-to-date',
        'Security: Appropriate safeguards must protect personal information from unauthorized access',
        'Accountability: Organizations must demonstrate compliance with privacy obligations',
        'Individual Rights: People have rights to access, correct, and request deletion of their information'
      ]},
      
      { type: 'tip', content: 'Start building a privacy culture in your organization by training employees about privacy obligations, implementing privacy policies, and conducting regular privacy assessments.' },
    ]
  },
  
  {
    moduleId: 1,
    lessonId: 2,
    title: "FIPPA Deep Dive",
    sections: [
      { type: 'heading', content: 'FIPPA: Freedom of Information and Protection of Privacy Act' },
      { type: 'paragraph', content: 'The Freedom of Information and Protection of Privacy Act (FIPPA), enacted in 1987, is Ontario\'s primary privacy law governing provincial government institutions. It provides citizens with the right to access government records while protecting personal privacy.' },
      
      { type: 'definition', content: 'FIPPA applies to all ministries, agencies, boards, commissions, and other bodies that are part of the Ontario government or receive government funding and are designated as institutions under the Act.' },
      
      { type: 'heading', content: 'Scope and Application' },
      { type: 'list', content: [
        'Applies to provincial government institutions only, not municipalities or private sector',
        'Covers all personal information held by government, regardless of format (paper, digital, audio)',
        'Includes information about employees, clients, service users, and the public',
        'Applies to information created or received by government institutions'
      ]},
      
      { type: 'heading', content: 'Core Principles of FIPPA' },
      
      { type: 'highlight', content: 'Openness and Transparency: Government institutions must be open about their information practices and provide individuals with access to records about themselves.' },
      
      { type: 'paragraph', content: 'FIPPA establishes a presumption that government records are public unless they fall within specific exemptions. This principle ensures government accountability and public trust.' },
      
      { type: 'heading', content: 'Individual Rights Under FIPPA' },
      { type: 'list', content: [
        'Right to Access: Request access to personal information held by government institutions',
        'Right to Correction: Request correction of inaccurate personal information',
        'Right to Complaint: File complaints with the Information and Privacy Commissioner',
        'Right to Notification: Be notified if personal information is breached',
        'Right to Refuse: Decline to provide information not legally required'
      ]},
      
      { type: 'heading', content: 'Personal Information Under FIPPA' },
      { type: 'paragraph', content: 'FIPPA defines personal information broadly to include any information about an identifiable individual. This includes obvious identifiers like name and address, as well as less obvious information like financial records, health information, and online identifiers.' },
      
      { type: 'warning', content: 'Sensitive personal information such as medical records, financial information, and information about criminal history receives heightened protection under FIPPA and cannot be disclosed without strong justification.' },
      
      { type: 'heading', content: 'Exemptions to Access' },
      { type: 'list', content: [
        'Solicitor-client privilege: Legal advice and communications',
        'Cabinet confidences: Discussions within government cabinet',
        'Law enforcement: Information that could compromise investigations',
        'Personal privacy: Information about other individuals',
        'Business information: Trade secrets and confidential business information'
      ]},
      
      { type: 'tip', content: 'When responding to FIPPA requests, carefully review each exemption to ensure you only withhold information that legitimately qualifies. Overly broad use of exemptions can result in complaints to the Information and Privacy Commissioner.' },
    ]
  },
  
  {
    moduleId: 1,
    lessonId: 3,
    title: "MFIPPA and Municipal Privacy",
    sections: [
      { type: 'heading', content: 'MFIPPA: Municipal Freedom of Information and Protection of Privacy Act' },
      { type: 'paragraph', content: 'The Municipal Freedom of Information and Protection of Privacy Act (MFIPPA) is Ontario\'s privacy law for municipal and local government institutions. Enacted in 1989, it mirrors many FIPPA principles while addressing the specific needs of local government.' },
      
      { type: 'definition', content: 'MFIPPA applies to municipalities, regional governments, school boards, public utilities, and other local public bodies designated under the Act.' },
      
      { type: 'heading', content: 'Key Differences from FIPPA' },
      { type: 'list', content: [
        'Applies to local government institutions rather than provincial government',
        'Includes school boards, police services, and public utilities',
        'Similar privacy principles but tailored to municipal operations',
        'Covers information held by local government bodies and their employees'
      ]},
      
      { type: 'heading', content: 'Municipal Privacy Obligations' },
      { type: 'paragraph', content: 'Municipalities must implement privacy practices that protect personal information while enabling transparent government operations. This includes collecting only necessary information, implementing security measures, and responding to access requests.' },
      
      { type: 'highlight', content: 'Municipalities must appoint a Freedom of Information and Protection of Privacy Coordinator to handle access requests and privacy complaints.' },
      
      { type: 'heading', content: 'Common Municipal Privacy Challenges' },
      { type: 'list', content: [
        'Managing personal information across multiple departments and services',
        'Protecting privacy while maintaining public transparency',
        'Responding to access requests within legal timeframes',
        'Securing information held in legacy systems',
        'Balancing public safety with individual privacy rights'
      ]},
      
      { type: 'tip', content: 'Implement a municipal privacy management system that centralizes information about where personal data is stored, who has access, and how it\'s protected. This makes it easier to respond to access requests and identify privacy risks.' },
    ]
  },
  
  {
    moduleId: 1,
    lessonId: 4,
    title: "PIPEDA and Private Sector Privacy",
    sections: [
      { type: 'heading', content: 'PIPEDA: Personal Information Protection and Electronic Documents Act' },
      { type: 'paragraph', content: 'The Personal Information Protection and Electronic Documents Act (PIPEDA) is Canada\'s primary privacy law for private sector organizations. It establishes rules for how private companies collect, use, and disclose personal information.' },
      
      { type: 'definition', content: 'PIPEDA applies to private sector organizations that collect, use, or disclose personal information in the course of commercial activities, with limited exceptions for sole proprietorships and certain small organizations.' },
      
      { type: 'heading', content: 'Scope of PIPEDA' },
      { type: 'list', content: [
        'Applies to all private sector organizations conducting commercial activities in Canada',
        'Covers personal information collected from customers, employees, and business partners',
        'Applies regardless of where the organization is located if it collects Canadian personal information',
        'Includes both for-profit and non-profit organizations'
      ]},
      
      { type: 'heading', content: 'PIPEDA\'s Ten Principles' },
      { type: 'list', content: [
        'Accountability: Organizations are responsible for personal information under their control',
        'Identifying Purposes: Purposes for collection must be identified before collection',
        'Consent: Meaningful consent must be obtained for collection, use, and disclosure',
        'Limiting Collection: Collection must be limited to necessary information',
        'Limiting Use: Information can only be used for identified purposes',
        'Accuracy: Information must be accurate and up-to-date',
        'Safeguarding: Appropriate security measures must protect information',
        'Openness: Organizations must be transparent about privacy practices',
        'Individual Access: People can access their personal information',
        'Challenging Compliance: Individuals can challenge privacy practices'
      ]},
      
      { type: 'warning', content: 'Organizations that collect personal information must obtain meaningful consent. Consent obtained through fine print or pre-checked boxes may not meet PIPEDA requirements and could result in regulatory action.' },
      
      { type: 'heading', content: 'Privacy Management Best Practices' },
      { type: 'list', content: [
        'Develop comprehensive privacy policies that explain information practices',
        'Implement privacy by design in all systems and processes',
        'Conduct privacy impact assessments before new initiatives',
        'Train employees about privacy obligations',
        'Establish procedures for handling privacy complaints and breaches',
        'Maintain documentation of privacy compliance efforts'
      ]},
      
      { type: 'tip', content: 'Create a privacy notice that clearly explains what information you collect, how you use it, who you share it with, and how long you keep it. Make this notice easily accessible to customers and employees.' },
    ]
  },

  // MODULE 2: Cybersecurity Fundamentals
  {
    moduleId: 2,
    lessonId: 1,
    title: "Cybersecurity Fundamentals",
    sections: [
      { type: 'heading', content: 'Cybersecurity Fundamentals' },
      { type: 'paragraph', content: 'Cybersecurity is the practice of protecting computer systems, networks, and information from unauthorized access, theft, and damage. In today\'s digital world, cybersecurity is essential for protecting organizational assets, customer data, and business continuity.' },
      
      { type: 'definition', content: 'Cybersecurity encompasses all measures, practices, and technologies used to protect digital systems, networks, and information from cyber threats including malware, ransomware, phishing, and unauthorized access.' },
      
      { type: 'heading', content: 'The CIA Triad: Core Security Principles' },
      { type: 'list', content: [
        'Confidentiality: Ensuring that information is accessible only to authorized individuals',
        'Integrity: Ensuring that information is accurate, complete, and has not been modified',
        'Availability: Ensuring that information and systems are accessible when needed'
      ]},
      
      { type: 'highlight', content: 'The CIA Triad forms the foundation of cybersecurity strategy. All security controls should support at least one of these three principles.' },
      
      { type: 'heading', content: 'Common Cyber Threats' },
      { type: 'list', content: [
        'Malware: Malicious software designed to damage or exploit systems',
        'Ransomware: Malware that encrypts data and demands payment for decryption',
        'Phishing: Fraudulent emails designed to trick users into revealing sensitive information',
        'Social Engineering: Manipulation tactics to trick people into divulging confidential information',
        'DDoS Attacks: Overwhelming systems with traffic to make them unavailable',
        'Zero-Day Exploits: Attacks using previously unknown vulnerabilities'
      ]},
      
      { type: 'warning', content: 'Cyber attacks are becoming increasingly sophisticated and frequent. Organizations must implement multi-layered security controls and maintain constant vigilance against emerging threats.' },
      
      { type: 'heading', content: 'Cybersecurity Best Practices' },
      { type: 'list', content: [
        'Use strong, unique passwords for all accounts',
        'Enable multi-factor authentication on critical systems',
        'Keep software and systems updated with security patches',
        'Implement firewalls and intrusion detection systems',
        'Conduct regular security awareness training',
        'Perform regular backups of critical data',
        'Develop and test incident response plans'
      ]},
      
      { type: 'tip', content: 'Create a security-conscious culture in your organization where employees understand their role in protecting information and feel comfortable reporting suspicious activity without fear of punishment.' },
    ]
  },

  {
    moduleId: 2,
    lessonId: 2,
    title: "Threat Identification and Response",
    sections: [
      { type: 'heading', content: 'Threat Identification and Response' },
      { type: 'paragraph', content: 'Identifying and responding to cyber threats quickly is critical for minimizing damage and maintaining business continuity. This lesson covers how to recognize common threats and implement effective response procedures.' },
      
      { type: 'heading', content: 'Recognizing Common Threats' },
      
      { type: 'highlight', content: 'Phishing emails often appear to come from trusted sources and use urgency or fear to trick recipients into clicking malicious links or revealing information.' },
      
      { type: 'list', content: [
        'Check sender email address carefully - phishing emails often use addresses similar to legitimate ones',
        'Look for spelling and grammar errors - legitimate companies proofread communications',
        'Hover over links to see the actual URL before clicking',
        'Be suspicious of urgent requests for passwords or sensitive information',
        'Verify unexpected requests by contacting the organization through official channels'
      ]},
      
      { type: 'heading', content: 'Malware Detection Signs' },
      { type: 'list', content: [
        'System running slowly or freezing unexpectedly',
        'Unusual error messages or pop-ups',
        'Unauthorized changes to files or settings',
        'Unexpected network activity or high bandwidth usage',
        'Antivirus warnings or security alerts',
        'Inability to access files or systems'
      ]},
      
      { type: 'heading', content: 'Incident Response Steps' },
      { type: 'list', content: [
        'Isolate: Disconnect affected systems from the network immediately',
        'Contain: Prevent the threat from spreading to other systems',
        'Investigate: Determine the scope and nature of the incident',
        'Eradicate: Remove the threat from all affected systems',
        'Recover: Restore systems and data from clean backups',
        'Review: Analyze what happened and improve defenses'
      ]},
      
      { type: 'warning', content: 'Never attempt to remove malware yourself without proper training. Improper removal attempts can cause further damage. Contact IT security professionals for assistance.' },
      
      { type: 'tip', content: 'Maintain regular backups of critical data stored separately from production systems. In case of ransomware or data loss, backups enable recovery without paying ransoms or losing business-critical information.' },
    ]
  },

  // MODULE 3: AI Governance & Ethics
  {
    moduleId: 3,
    lessonId: 1,
    title: "AI Ethics and Governance",
    sections: [
      { type: 'heading', content: 'AI Ethics and Governance' },
      { type: 'paragraph', content: 'As artificial intelligence becomes increasingly prevalent in business and government, organizations must establish ethical frameworks and governance structures to ensure AI systems are developed and deployed responsibly.' },
      
      { type: 'definition', content: 'AI governance refers to the policies, processes, and structures that organizations implement to ensure AI systems are developed, deployed, and managed in accordance with ethical principles, legal requirements, and organizational values.' },
      
      { type: 'heading', content: 'Core AI Ethics Principles' },
      { type: 'list', content: [
        'Fairness: AI systems should not discriminate against individuals or groups',
        'Transparency: Organizations should be clear about how AI systems work and make decisions',
        'Accountability: Organizations should take responsibility for AI system outcomes',
        'Privacy: AI systems should protect personal information and respect privacy rights',
        'Security: AI systems should be protected from unauthorized access and manipulation',
        'Explainability: AI decisions should be understandable to affected individuals'
      ]},
      
      { type: 'highlight', content: 'Biased AI systems can perpetuate discrimination and cause harm to vulnerable populations. Organizations must actively work to identify and eliminate bias in AI systems.' },
      
      { type: 'heading', content: 'Common AI Risks' },
      { type: 'list', content: [
        'Bias and Discrimination: AI trained on biased data may make discriminatory decisions',
        'Privacy Violations: AI systems may collect or use personal information inappropriately',
        'Lack of Transparency: Users may not understand how AI systems make decisions',
        'Security Vulnerabilities: AI systems may be manipulated or attacked',
        'Accountability Gaps: Unclear responsibility for AI system outcomes',
        'Unintended Consequences: AI systems may have unexpected negative effects'
      ]},
      
      { type: 'warning', content: 'AI systems used in high-stakes decisions (hiring, lending, criminal justice) require additional scrutiny to ensure fairness and prevent discrimination. Regular audits and bias testing are essential.' },
      
      { type: 'heading', content: 'Implementing AI Governance' },
      { type: 'list', content: [
        'Establish AI ethics committee to review AI initiatives',
        'Develop AI governance policies and procedures',
        'Conduct impact assessments before deploying AI systems',
        'Implement bias testing and fairness audits',
        'Maintain transparency about AI use',
        'Provide appeal mechanisms for AI decisions',
        'Train employees about AI ethics and responsible use'
      ]},
      
      { type: 'tip', content: 'Create documentation explaining how each AI system works, what data it uses, how it makes decisions, and what safeguards are in place. This supports transparency and helps identify potential issues.' },
    ]
  },

  // MODULE 4: Data Management Excellence
  {
    moduleId: 4,
    lessonId: 1,
    title: "Data Governance Framework",
    sections: [
      { type: 'heading', content: 'Data Governance Framework' },
      { type: 'paragraph', content: 'Data governance is the set of processes, policies, and controls that organizations implement to ensure data is managed as a valuable asset. Effective data governance enables better decision-making, reduces risks, and improves operational efficiency.' },
      
      { type: 'definition', content: 'Data governance encompasses the policies, procedures, and technologies that organizations use to manage data throughout its lifecycle, from collection through retention and deletion.' },
      
      { type: 'heading', content: 'Data Lifecycle Management' },
      { type: 'list', content: [
        'Collection: Gathering data from authorized sources with appropriate consent',
        'Classification: Categorizing data by sensitivity, type, and regulatory requirements',
        'Storage: Securing data in appropriate systems with access controls',
        'Use: Applying data for authorized business purposes',
        'Sharing: Disclosing data to authorized recipients with appropriate safeguards',
        'Retention: Maintaining data for required periods',
        'Deletion: Securely destroying data when no longer needed'
      ]},
      
      { type: 'highlight', content: 'Data classification is critical for effective governance. Organizations must classify data by sensitivity level to apply appropriate security controls and retention periods.' },
      
      { type: 'heading', content: 'Data Quality Principles' },
      { type: 'list', content: [
        'Accuracy: Data must be correct and reflect reality',
        'Completeness: Data must include all necessary information',
        'Consistency: Data must be uniform across systems',
        'Timeliness: Data must be current and available when needed',
        'Validity: Data must conform to defined formats and standards'
      ]},
      
      { type: 'warning', content: 'Poor data quality leads to bad decisions, regulatory violations, and operational inefficiencies. Invest in data quality improvement initiatives to ensure reliable information.' },
      
      { type: 'heading', content: 'Governance Best Practices' },
      { type: 'list', content: [
        'Establish clear data ownership and accountability',
        'Develop comprehensive data policies and procedures',
        'Implement data quality standards and monitoring',
        'Create data catalogs documenting all data assets',
        'Establish access controls based on business need',
        'Conduct regular data audits and assessments',
        'Train employees about data governance responsibilities'
      ]},
      
      { type: 'tip', content: 'Create a data governance committee with representatives from IT, business units, legal, and compliance to ensure diverse perspectives and organizational alignment on data management priorities.' },
    ]
  }
];

export function getImprovedLessonContent(moduleId: number, lessonId: number): ImprovedLesson | undefined {
  return improvedLessonContent.find(
    lesson => lesson.moduleId === moduleId && lesson.lessonId === lessonId
  );
}
