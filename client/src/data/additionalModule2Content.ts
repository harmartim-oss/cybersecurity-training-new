import { AdditionalLessonContent, CaseStudy, PracticalExample, RegulatoryUpdate, BestPractice } from './additionalModule1Content';

export const additionalModule2Content: AdditionalLessonContent[] = [
  // Module 2, Lesson 1: Cybersecurity Fundamentals
  {
    moduleId: 2,
    lessonId: 1,
    caseStudies: [
      {
        title: "Colonial Pipeline Ransomware Attack",
        organization: "Colonial Pipeline Company",
        scenario: "Colonial Pipeline, a major U.S. fuel supplier, was hit by a ransomware attack that encrypted their operational technology systems, forcing them to shut down operations.",
        challenge: "The attack disrupted fuel supply across the eastern United States, affecting millions of people and creating a national security crisis. The company had to restore systems while managing public pressure and law enforcement investigations.",
        solution: "Colonial Pipeline paid a ransom to recover their systems, implemented comprehensive cybersecurity improvements including network segmentation, enhanced monitoring, and employee training.",
        outcome: "The incident highlighted critical infrastructure vulnerabilities and led to increased government focus on cybersecurity for essential services. Colonial Pipeline implemented significant security improvements.",
        lessonsLearned: [
          "Critical infrastructure requires enhanced security measures beyond standard practices",
          "Network segmentation can limit the spread of ransomware attacks",
          "Incident response planning is essential for rapid recovery",
          "Employee training on phishing and social engineering is critical for prevention"
        ]
      },
      {
        title: "Target Data Breach",
        organization: "Target Corporation",
        scenario: "Hackers infiltrated Target's network through a third-party HVAC contractor, gaining access to customer payment card data affecting millions of shoppers.",
        challenge: "Target had to notify millions of customers, manage regulatory investigations, implement security improvements, and restore customer trust.",
        solution: "Target implemented chip-and-PIN technology, enhanced network segmentation, improved third-party security requirements, and invested heavily in security infrastructure.",
        outcome: "While the breach cost Target hundreds of millions in settlements and improvements, it became a catalyst for the industry to adopt chip technology and improve payment security.",
        lessonsLearned: [
          "Third-party vendors can be entry points for attacks and require strong security requirements",
          "Network segmentation limits the spread of breaches to sensitive systems",
          "Prompt notification and transparency help maintain customer trust",
          "Investing in security improvements can prevent future incidents and provide competitive advantage"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Implementing the CIA Triad in Your Organization",
        description: "The CIA Triad (Confidentiality, Integrity, Availability) is the foundation of cybersecurity. This example shows how to implement each principle.",
        steps: [
          "Confidentiality: Identify sensitive information and implement encryption, access controls, and monitoring",
          "Integrity: Implement controls to prevent unauthorized modification of data, including backups and change management",
          "Availability: Implement redundancy, disaster recovery, and business continuity planning to ensure systems remain available",
          "Document your implementation of each principle",
          "Train employees on their role in maintaining CIA Triad principles",
          "Conduct regular audits to verify CIA Triad implementation",
          "Update implementation as threats and business needs evolve"
        ],
        commonMistakes: [
          "Focusing only on confidentiality while neglecting integrity and availability",
          "Implementing controls that are too restrictive and hinder business operations",
          "Failing to balance security with usability",
          "Not updating security controls as threats evolve"
        ],
        tips: [
          "Start with a risk assessment to identify which CIA principles are most critical for your organization",
          "Involve business leaders in security decisions to ensure controls support business objectives",
          "Use security frameworks like NIST Cybersecurity Framework to guide implementation",
          "Conduct regular security assessments to verify effectiveness of controls"
        ]
      },
      {
        title: "Conducting a Cybersecurity Risk Assessment",
        description: "Risk assessments identify vulnerabilities and threats that could impact your organization. This example shows how to conduct an effective assessment.",
        steps: [
          "Identify critical assets (systems, data, infrastructure) that support business operations",
          "Identify potential threats to each asset (malware, hackers, natural disasters, insider threats)",
          "Identify vulnerabilities that could allow threats to impact assets",
          "Assess the likelihood of each threat occurring",
          "Assess the potential impact if the threat occurs",
          "Calculate risk (likelihood × impact) for each threat",
          "Prioritize risks based on calculated risk levels",
          "Develop mitigation strategies for high-risk items",
          "Document findings and share with leadership"
        ],
        commonMistakes: [
          "Focusing only on external threats while ignoring insider threats",
          "Underestimating the likelihood of threats occurring",
          "Failing to consider business impact of security incidents",
          "Not updating risk assessments as business and threat landscape changes"
        ],
        tips: [
          "Involve representatives from IT, business, and security in the assessment",
          "Use industry frameworks like NIST or ISO 27001 to guide your assessment",
          "Conduct assessments regularly (at least annually) to identify new risks",
          "Use assessment results to prioritize security investments"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "NIST Cybersecurity Framework 2.0 Release",
        date: "2024",
        summary: "NIST released version 2.0 of its Cybersecurity Framework, adding new guidance on supply chain security, AI security, and emerging threats.",
        impact: "Organizations should update their cybersecurity programs to align with NIST CSF 2.0 recommendations, particularly for supply chain and AI security.",
        action: "Review NIST CSF 2.0 and assess your organization's alignment with the updated framework. Develop plans to address any gaps."
      }
    ],
    bestPractices: [
      {
        title: "Establishing a Security-First Culture",
        description: "Cybersecurity is most effective when it's embedded in organizational culture, where security is everyone's responsibility.",
        implementation: [
          "Leadership commitment: Ensure executives prioritize cybersecurity and allocate resources",
          "Security training: Provide mandatory security training for all employees",
          "Clear policies: Develop clear, accessible security policies and procedures",
          "Accountability: Hold employees accountable for security compliance",
          "Incident response: Establish procedures for reporting and responding to security incidents",
          "Continuous improvement: Regularly review and update security practices",
          "Communication: Regularly communicate security importance and best practices"
        ],
        benefits: [
          "Reduces security incidents through employee awareness and vigilance",
          "Creates organizational resilience against cyber threats",
          "Improves employee understanding of security obligations",
          "Enhances organizational reputation as a security-conscious entity",
          "Facilitates regulatory compliance and reduces audit findings"
        ],
        resources: [
          "NIST Cybersecurity Framework",
          "SANS Security Awareness Training",
          "Cybersecurity and Infrastructure Security Agency (CISA) Resources",
          "Industry-specific security best practice guides"
        ]
      }
    ]
  },

  // Module 2, Lesson 2: Threat Landscape and Attack Vectors
  {
    moduleId: 2,
    lessonId: 2,
    caseStudies: [
      {
        title: "SolarWinds Supply Chain Attack",
        organization: "SolarWinds and Affected Customers",
        scenario: "Attackers compromised SolarWinds' software build system and inserted malicious code into legitimate software updates, affecting thousands of organizations including government agencies.",
        challenge: "Organizations using SolarWinds software unknowingly installed malware, giving attackers access to their networks. The attack affected critical government and private sector organizations.",
        solution: "SolarWinds released patched versions of the software, affected organizations implemented network monitoring to detect suspicious activity, and government agencies coordinated response efforts.",
        outcome: "The incident highlighted supply chain vulnerabilities and led to increased focus on software security and vendor management. Organizations implemented enhanced vendor security requirements.",
        lessonsLearned: [
          "Supply chain security is critical—vendors can be entry points for attacks",
          "Software updates should be tested before deployment to production systems",
          "Network monitoring is essential for detecting compromised systems",
          "Organizations must have incident response plans for supply chain attacks"
        ]
      },
      {
        title: "Phishing Campaign Against Financial Institution",
        organization: "Financial Services Company",
        scenario: "Attackers sent sophisticated phishing emails impersonating the company's CEO, requesting urgent wire transfers to a fraudulent account.",
        challenge: "Several employees fell for the phishing emails and initiated unauthorized wire transfers. The company had to recover the funds, investigate the incident, and implement controls.",
        solution: "The company implemented email authentication (SPF, DKIM, DMARC), enhanced employee training on phishing, implemented multi-factor authentication, and established approval procedures for large transfers.",
        outcome: "The company recovered most of the funds and implemented comprehensive controls to prevent similar incidents. Employee awareness of phishing threats increased significantly.",
        lessonsLearned: [
          "Phishing is one of the most effective attack methods because it exploits human psychology",
          "Email authentication technologies can prevent spoofing of legitimate addresses",
          "Multi-factor authentication adds an additional layer of protection against compromised credentials",
          "Regular security training helps employees recognize and report phishing attempts"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Recognizing and Reporting Phishing Emails",
        description: "Phishing emails are designed to trick employees into revealing sensitive information or installing malware. This example shows how to recognize phishing attempts.",
        steps: [
          "Check the sender's email address—does it match the legitimate domain?",
          "Look for urgency or threats—legitimate companies rarely demand immediate action",
          "Check for requests for sensitive information—legitimate companies never request passwords via email",
          "Look for suspicious links—hover over links to see the actual URL before clicking",
          "Check for attachments from unexpected sources",
          "Look for poor grammar or spelling—many phishing emails contain errors",
          "If suspicious, contact the supposed sender through a known contact method",
          "Report suspicious emails to your IT security team"
        ],
        commonMistakes: [
          "Clicking links in suspicious emails",
          "Opening attachments from unknown senders",
          "Providing sensitive information in response to email requests",
          "Not reporting suspicious emails to IT security"
        ],
        tips: [
          "When in doubt, contact the sender through a known method to verify the request",
          "Use email security tools that flag suspicious emails",
          "Implement multi-factor authentication to protect against compromised credentials",
          "Participate in security training to improve phishing recognition skills"
        ]
      },
      {
        title: "Implementing Multi-Factor Authentication",
        description: "Multi-factor authentication (MFA) requires multiple forms of verification to access systems, significantly improving security.",
        steps: [
          "Identify critical systems that require MFA (email, VPN, financial systems, etc.)",
          "Choose MFA methods appropriate for your organization (SMS, authenticator apps, hardware tokens, biometrics)",
          "Implement MFA gradually, starting with highest-risk systems",
          "Provide training to employees on using MFA",
          "Establish procedures for account recovery if MFA devices are lost",
          "Monitor MFA usage to identify issues",
          "Update MFA methods as technology evolves"
        ],
        commonMistakes: [
          "Implementing MFA only for administrative accounts",
          "Using SMS-based MFA exclusively (vulnerable to SIM swapping)",
          "Not providing backup authentication methods",
          "Not training employees on MFA procedures"
        ],
        tips: [
          "Use authenticator apps or hardware tokens instead of SMS when possible",
          "Implement MFA for all critical systems, not just administrative accounts",
          "Provide backup authentication methods for account recovery",
          "Regularly review MFA logs to identify suspicious activity"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Increased Focus on Ransomware Prevention",
        date: "2024",
        summary: "Government agencies and industry groups released enhanced guidance on ransomware prevention, including requirements for backup systems and incident response planning.",
        impact: "Organizations should implement comprehensive ransomware prevention measures including backups, segmentation, and incident response plans.",
        action: "Review your ransomware prevention measures and ensure you have offline backups and tested incident response procedures."
      }
    ],
    bestPractices: [
      {
        title: "Implementing Defense in Depth",
        description: "Defense in depth uses multiple layers of security controls to protect against various threats. If one layer is compromised, others provide additional protection.",
        implementation: [
          "Network security: Firewalls, intrusion detection, network segmentation",
          "Endpoint security: Antivirus, anti-malware, endpoint detection and response",
          "Access controls: Authentication, authorization, multi-factor authentication",
          "Data protection: Encryption, data loss prevention, backup and recovery",
          "Monitoring and detection: Security information and event management (SIEM), threat detection",
          "Incident response: Plans, procedures, and trained personnel",
          "Employee training: Security awareness and phishing training"
        ],
        benefits: [
          "Reduces impact of security incidents by limiting attacker movement",
          "Provides multiple opportunities to detect and stop attacks",
          "Improves resilience against evolving threats",
          "Demonstrates commitment to security to customers and regulators"
        ],
        resources: [
          "NIST Cybersecurity Framework",
          "CIS Critical Security Controls",
          "SANS Top 25 Most Dangerous Software Weaknesses",
          "Industry-specific security best practice guides"
        ]
      }
    ]
  },

  // Module 2, Lesson 3: Security Controls and Implementation
  {
    moduleId: 2,
    lessonId: 3,
    caseStudies: [
      {
        title: "Equifax Data Breach",
        organization: "Equifax",
        scenario: "Equifax failed to patch a known vulnerability in their systems, allowing attackers to access personal information of over 147 million people.",
        challenge: "The breach exposed sensitive personal information including Social Security numbers, dates of birth, and addresses. Equifax faced massive regulatory fines and lawsuits.",
        solution: "Equifax implemented comprehensive security improvements including vulnerability management, security monitoring, and incident response procedures.",
        outcome: "The breach cost Equifax over $700 million in settlements and damaged their reputation. It highlighted the importance of timely security patching.",
        lessonsLearned: [
          "Vulnerability management and timely patching are critical security controls",
          "Known vulnerabilities are frequently exploited because many organizations fail to patch",
          "Security breaches have significant financial and reputational consequences",
          "Organizations must prioritize security investments to protect customer data"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Developing a Patch Management Process",
        description: "Timely patching of systems is one of the most effective security controls. This example shows how to develop an effective patch management process.",
        steps: [
          "Identify all systems and software that require patching",
          "Subscribe to vendor security advisories to stay informed of patches",
          "Evaluate patches for criticality and impact on your organization",
          "Test patches in a non-production environment before deployment",
          "Develop a deployment schedule based on patch criticality",
          "Deploy patches to production systems according to schedule",
          "Verify patches were successfully applied",
          "Document all patching activities",
          "Monitor for issues after patching"
        ],
        commonMistakes: [
          "Delaying patches for critical vulnerabilities",
          "Deploying patches without testing",
          "Not having a rollback plan if patches cause issues",
          "Not monitoring systems after patching"
        ],
        tips: [
          "Prioritize critical and high-severity patches for rapid deployment",
          "Use automated patch management tools to improve efficiency",
          "Maintain a test environment that mirrors production systems",
          "Document patch deployment procedures for consistency"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Enhanced Vulnerability Disclosure Requirements",
        date: "2023",
        summary: "Regulators increased requirements for organizations to disclose vulnerabilities and their remediation efforts.",
        impact: "Organizations must maintain detailed records of vulnerabilities and remediation efforts for regulatory reporting.",
        action: "Implement vulnerability tracking and reporting procedures to meet regulatory requirements."
      }
    ],
    bestPractices: [
      {
        title: "Vulnerability Management Program",
        description: "A comprehensive vulnerability management program identifies, evaluates, and remediates security vulnerabilities before attackers can exploit them.",
        implementation: [
          "Asset inventory: Maintain current inventory of all systems and software",
          "Vulnerability scanning: Regularly scan systems for known vulnerabilities",
          "Vulnerability assessment: Evaluate severity and business impact of vulnerabilities",
          "Prioritization: Prioritize remediation based on severity and exploitability",
          "Remediation: Patch or mitigate vulnerabilities according to priority",
          "Verification: Verify that vulnerabilities have been successfully remediated",
          "Reporting: Track and report on vulnerability management metrics"
        ],
        benefits: [
          "Reduces the window of opportunity for attackers to exploit known vulnerabilities",
          "Identifies vulnerabilities before they're exploited",
          "Improves security posture and reduces breach risk",
          "Demonstrates commitment to security to customers and regulators"
        ],
        resources: [
          "NIST Vulnerability Management Guidance",
          "CIS Critical Security Controls",
          "Vulnerability scanning tools and services",
          "Industry-specific vulnerability databases"
        ]
      }
    ]
  },

  // Module 2, Lesson 4: Incident Response and Recovery
  {
    moduleId: 2,
    lessonId: 4,
    caseStudies: [
      {
        title: "Microsoft Exchange Server Attacks",
        organization: "Microsoft and Affected Organizations",
        scenario: "Attackers exploited zero-day vulnerabilities in Microsoft Exchange Server to gain access to thousands of organizations' email systems.",
        challenge: "Organizations had to detect compromised systems, remove attacker access, and remediate vulnerabilities while maintaining email services.",
        solution: "Microsoft released emergency patches, organizations implemented detection tools to identify compromised systems, and coordinated incident response efforts.",
        outcome: "The incident highlighted the importance of rapid incident response and the value of security monitoring for detecting compromises.",
        lessonsLearned: [
          "Zero-day vulnerabilities require rapid response and coordination",
          "Security monitoring is essential for detecting compromises",
          "Incident response procedures must be tested and ready for activation",
          "Communication with customers and regulators is critical during incidents"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Developing an Incident Response Plan",
        description: "An incident response plan outlines procedures for detecting, responding to, and recovering from security incidents.",
        steps: [
          "Establish an incident response team with clear roles and responsibilities",
          "Define incident severity levels and escalation procedures",
          "Document detection procedures for identifying security incidents",
          "Document containment procedures to limit incident impact",
          "Document eradication procedures to remove attacker access",
          "Document recovery procedures to restore systems to normal operation",
          "Document communication procedures for notifying stakeholders",
          "Establish procedures for post-incident review and improvement",
          "Test the plan regularly through tabletop exercises and simulations"
        ],
        commonMistakes: [
          "Developing a plan but never testing it",
          "Not having clear roles and responsibilities",
          "Failing to communicate with stakeholders during incidents",
          "Not conducting post-incident reviews to improve future response"
        ],
        tips: [
          "Involve representatives from IT, security, legal, and communications in plan development",
          "Establish clear communication channels and contact lists",
          "Conduct regular tabletop exercises to test the plan",
          "Update the plan based on lessons learned from exercises and actual incidents"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Incident Notification Requirements",
        date: "2023",
        summary: "Regulators updated requirements for notifying individuals and authorities of security breaches, with shorter notification timelines.",
        impact: "Organizations must notify individuals of breaches without unreasonable delay and notify regulators of significant breaches.",
        action: "Review your incident notification procedures to ensure compliance with updated requirements."
      }
    ],
    bestPractices: [
      {
        title: "Building Resilience Through Backup and Recovery",
        description: "Backups and recovery procedures are essential for recovering from ransomware attacks and other incidents that compromise data.",
        implementation: [
          "Identify critical data and systems requiring backup",
          "Implement regular backup procedures (daily, weekly, monthly)",
          "Store backups in multiple locations including offline storage",
          "Test backup restoration procedures regularly",
          "Implement immutable backups that attackers cannot delete",
          "Establish recovery time objectives (RTO) for critical systems",
          "Establish recovery point objectives (RPO) for critical data",
          "Document backup and recovery procedures"
        ],
        benefits: [
          "Enables rapid recovery from ransomware attacks and data loss",
          "Reduces business disruption from security incidents",
          "Provides protection against data corruption and accidental deletion",
          "Demonstrates business continuity capability to customers and regulators"
        ],
        resources: [
          "NIST Backup and Recovery Guidance",
          "Backup and disaster recovery best practices",
          "Backup and recovery tools and services",
          "Business continuity planning resources"
        ]
      }
    ]
  }
];

export function getAdditionalModule2Content(lessonId: number): AdditionalLessonContent | undefined {
  return additionalModule2Content.find(content => content.lessonId === lessonId);
}
