export interface StudyMaterial {
  id: string;
  moduleId: number;
  title: string;
  description: string;
  icon: string;
  type: 'guide' | 'template' | 'checklist' | 'reference';
  content: StudyMaterialContent;
  tags: string[];
}

export interface StudyMaterialContent {
  sections: ContentSection[];
  summary?: string;
  keyPoints?: string[];
  downloadable?: boolean;
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

export const STUDY_MATERIALS: StudyMaterial[] = [
  // Module 1: Ontario Privacy Laws
  {
    id: 'privacy-compliance-guide',
    moduleId: 1,
    title: 'Privacy Compliance Guide',
    description: 'Complete guide to implementing privacy compliance in your organization',
    icon: '📋',
    type: 'guide',
    tags: ['FIPPA', 'MFIPPA', 'PIPEDA', 'Compliance'],
    content: {
      summary: 'This comprehensive guide walks you through implementing privacy compliance across your organization, covering legal requirements, best practices, and practical implementation steps.',
      keyPoints: [
        'Understand applicable privacy laws (FIPPA, MFIPPA, PIPEDA)',
        'Develop privacy policies and procedures',
        'Implement data protection measures',
        'Establish access control procedures',
        'Create incident response plans',
        'Train staff on privacy requirements'
      ],
      sections: [
        {
          title: 'Step 1: Assess Your Privacy Obligations',
          content: 'Begin by determining which privacy laws apply to your organization. Public sector organizations fall under FIPPA or MFIPPA, while private sector organizations must comply with PIPEDA. Understanding your legal obligations is the foundation for effective privacy compliance.',
          subsections: [
            {
              title: 'Identifying Your Organization Type',
              content: 'Determine whether your organization is a provincial government institution (FIPPA), municipal government body (MFIPPA), or private sector organization (PIPEDA). This classification determines which privacy law applies and what compliance requirements you must meet.'
            },
            {
              title: 'Reviewing Current Practices',
              content: 'Conduct an audit of your current data handling practices. Document how personal information is collected, used, stored, and disclosed. Identify gaps between current practices and legal requirements.'
            }
          ]
        },
        {
          title: 'Step 2: Develop Privacy Policies',
          content: 'Create clear, comprehensive privacy policies that document your organization\'s privacy practices. Policies should address data collection, use, disclosure, retention, and security.',
          subsections: [
            {
              title: 'Policy Development Process',
              content: 'Involve representatives from IT, legal, HR, and business units in policy development. Ensure policies are clear, accessible, and regularly reviewed. Communicate policies to all staff members.'
            },
            {
              title: 'Key Policy Components',
              content: 'Include sections on data collection purposes, consent procedures, data retention schedules, security measures, individual access rights, and breach notification procedures.'
            }
          ]
        },
        {
          title: 'Step 3: Implement Data Protection Measures',
          content: 'Establish technical and administrative safeguards to protect personal information from unauthorized access, use, or disclosure.',
          subsections: [
            {
              title: 'Technical Safeguards',
              content: 'Implement encryption for data in transit and at rest, access controls, firewalls, intrusion detection systems, and regular security updates. Use strong authentication mechanisms including multi-factor authentication.'
            },
            {
              title: 'Administrative Safeguards',
              content: 'Establish procedures for secure data handling, staff training, access logging, incident response, and regular security audits. Ensure all staff understand their privacy responsibilities.'
            }
          ]
        },
        {
          title: 'Step 4: Establish Access Control Procedures',
          content: 'Implement role-based access control to ensure employees can access only the personal information necessary for their job functions.',
          subsections: [
            {
              title: 'Access Control Implementation',
              content: 'Define roles and associated access permissions. Implement technical controls to enforce access restrictions. Regularly audit access permissions and revoke access when employees change roles or leave the organization.'
            }
          ]
        },
        {
          title: 'Step 5: Create Incident Response Plans',
          content: 'Develop procedures for responding to privacy breaches and other security incidents.',
          subsections: [
            {
              title: 'Incident Response Procedures',
              content: 'Establish clear procedures for detecting, investigating, and responding to privacy breaches. Include notification procedures for affected individuals and regulatory authorities. Document all incidents for analysis and improvement.'
            }
          ]
        },
        {
          title: 'Step 6: Train Your Staff',
          content: 'Ensure all staff members understand privacy requirements and their responsibilities in protecting personal information.',
          subsections: [
            {
              title: 'Training Program Development',
              content: 'Develop comprehensive privacy training covering applicable laws, organizational policies, data handling procedures, and security practices. Provide regular training updates and specialized training for staff with access to sensitive information.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'privacy-assessment-template',
    moduleId: 1,
    title: 'Privacy Impact Assessment Template',
    description: 'Template for conducting privacy impact assessments on new projects and initiatives',
    icon: '📝',
    type: 'template',
    tags: ['Assessment', 'Template', 'Risk Analysis'],
    content: {
      summary: 'Use this template to systematically assess privacy risks associated with new projects, initiatives, or system changes.',
      keyPoints: [
        'Identify personal information involved',
        'Assess collection, use, and disclosure practices',
        'Evaluate security measures',
        'Identify privacy risks',
        'Recommend mitigation strategies',
        'Document findings and recommendations'
      ],
      sections: [
        {
          title: 'Project Information',
          content: 'Document basic information about the project or initiative being assessed, including project name, description, start date, and responsible department.'
        },
        {
          title: 'Personal Information Inventory',
          content: 'List all types of personal information that will be collected, used, or disclosed. Include information classification levels and the business purpose for each type of information.'
        },
        {
          title: 'Data Flow Analysis',
          content: 'Document how personal information flows through the system or process. Identify collection points, storage locations, processing activities, and disclosure recipients.'
        },
        {
          title: 'Security Assessment',
          content: 'Evaluate the security measures protecting personal information. Assess technical controls, administrative procedures, and physical security. Identify any gaps or weaknesses.'
        },
        {
          title: 'Privacy Risk Analysis',
          content: 'Identify potential privacy risks including unauthorized access, data breaches, unauthorized use or disclosure, and data quality issues. Assess the likelihood and impact of each risk.'
        },
        {
          title: 'Mitigation Recommendations',
          content: 'Recommend specific measures to mitigate identified privacy risks. Prioritize recommendations based on risk level and implementation feasibility.'
        },
        {
          title: 'Approval and Sign-Off',
          content: 'Document approval by privacy officer and project stakeholders. Include date of assessment and planned review date.'
        }
      ]
    }
  },
  {
    id: 'breach-notification-checklist',
    moduleId: 1,
    title: 'Data Breach Notification Checklist',
    description: 'Step-by-step checklist for responding to and reporting data breaches',
    icon: '✅',
    type: 'checklist',
    tags: ['Breach Response', 'Incident Management', 'Compliance'],
    content: {
      summary: 'Follow this checklist when a data breach occurs to ensure proper notification and compliance with legal requirements.',
      keyPoints: [
        'Immediate response and containment',
        'Investigation and assessment',
        'Notification to affected individuals',
        'Regulatory reporting',
        'Documentation and follow-up'
      ],
      sections: [
        {
          title: 'Immediate Response (Within 24 Hours)',
          content: 'Take immediate action to contain the breach and prevent further unauthorized access.',
          subsections: [
            { title: 'Isolate Affected Systems', content: 'Disconnect affected systems from the network to prevent further unauthorized access.' },
            { title: 'Preserve Evidence', content: 'Preserve all evidence related to the breach for investigation and potential legal proceedings.' },
            { title: 'Notify Key Personnel', content: 'Notify IT security, legal, and privacy teams. Activate incident response team.' },
            { title: 'Assess Scope', content: 'Conduct preliminary assessment to determine what information was compromised and how many individuals are affected.' }
          ]
        },
        {
          title: 'Investigation Phase (Within 72 Hours)',
          content: 'Conduct thorough investigation to understand the breach and its impact.',
          subsections: [
            { title: 'Determine Root Cause', content: 'Investigate how the breach occurred and identify vulnerabilities that were exploited.' },
            { title: 'Assess Impact', content: 'Determine what personal information was compromised and how many individuals are affected.' },
            { title: 'Evaluate Risk', content: 'Assess the risk of misuse of the compromised information.' },
            { title: 'Document Findings', content: 'Document all investigation findings for regulatory reporting.' }
          ]
        },
        {
          title: 'Notification to Individuals',
          content: 'Notify affected individuals about the breach without unreasonable delay.',
          subsections: [
            { title: 'Prepare Notification', content: 'Draft notification letter including details about the breach, information compromised, and steps individuals should take.' },
            { title: 'Notify Individuals', content: 'Send notifications to all affected individuals through appropriate channels (email, mail, phone).' },
            { title: 'Provide Support', content: 'Offer credit monitoring or other support services to affected individuals.' }
          ]
        },
        {
          title: 'Regulatory Reporting',
          content: 'Report the breach to relevant regulatory authorities as required by law.',
          subsections: [
            { title: 'Report to Privacy Commissioner', content: 'Report significant breaches to the Information and Privacy Commissioner of Ontario.' },
            { title: 'Report to Other Authorities', content: 'Report to other regulatory bodies if required by applicable laws.' },
            { title: 'Provide Documentation', content: 'Provide complete documentation of the breach, investigation, and remedial actions.' }
          ]
        },
        {
          title: 'Follow-Up and Prevention',
          content: 'Implement measures to prevent similar breaches in the future.',
          subsections: [
            { title: 'Remediate Vulnerabilities', content: 'Address the vulnerabilities that led to the breach.' },
            { title: 'Enhance Security', content: 'Implement additional security measures to prevent future breaches.' },
            { title: 'Update Policies', content: 'Update policies and procedures based on lessons learned.' },
            { title: 'Conduct Training', content: 'Provide additional training to staff on security and privacy practices.' }
          ]
        }
      ]
    }
  },

  // Module 2: Cybersecurity Fundamentals
  {
    id: 'security-best-practices-guide',
    moduleId: 2,
    title: 'Security Best Practices Guide',
    description: 'Comprehensive guide to implementing cybersecurity best practices',
    icon: '🔐',
    type: 'guide',
    tags: ['Security', 'Best Practices', 'Implementation'],
    content: {
      summary: 'Learn how to implement essential cybersecurity best practices to protect your organization from common threats.',
      keyPoints: [
        'Strong password management',
        'Multi-factor authentication',
        'Regular software updates',
        'Employee training and awareness',
        'Backup and disaster recovery',
        'Incident response planning'
      ],
      sections: [
        {
          title: 'Password Security Best Practices',
          content: 'Strong passwords are your first line of defense against unauthorized access. Implement password policies that require strong, unique passwords for all accounts.',
          subsections: [
            {
              title: 'Password Requirements',
              content: 'Require passwords of at least 12 characters including uppercase letters, lowercase letters, numbers, and special characters. Avoid dictionary words and personal information.'
            },
            {
              title: 'Password Management',
              content: 'Use password managers to securely store and manage passwords. Change passwords regularly and never share passwords with others.'
            }
          ]
        },
        {
          title: 'Multi-Factor Authentication',
          content: 'Multi-factor authentication (MFA) significantly reduces the risk of unauthorized access by requiring multiple forms of identification.',
          subsections: [
            {
              title: 'MFA Implementation',
              content: 'Implement MFA for all critical systems and user accounts. Require MFA for remote access and privileged accounts.'
            },
            {
              title: 'MFA Methods',
              content: 'Use multiple MFA methods including authenticator apps, hardware security keys, and SMS codes. Prioritize hardware security keys for highest security.'
            }
          ]
        },
        {
          title: 'Software Updates and Patching',
          content: 'Keep all software and systems updated with the latest security patches to protect against known vulnerabilities.',
          subsections: [
            {
              title: 'Update Strategy',
              content: 'Establish a regular patching schedule. Apply critical security patches immediately. Test patches in a controlled environment before deploying to production.'
            },
            {
              title: 'Vulnerability Management',
              content: 'Regularly scan systems for vulnerabilities. Prioritize remediation of critical vulnerabilities. Maintain an inventory of all systems and software.'
            }
          ]
        },
        {
          title: 'Employee Training and Awareness',
          content: 'Employees are often the weakest link in security. Provide regular training to help employees recognize and respond to security threats.',
          subsections: [
            {
              title: 'Security Awareness Training',
              content: 'Provide annual security awareness training covering phishing, social engineering, password security, and incident reporting. Include specialized training for staff with access to sensitive information.'
            },
            {
              title: 'Phishing Simulations',
              content: 'Conduct regular phishing simulations to test employee awareness. Provide additional training to employees who fall for simulated phishing attacks.'
            }
          ]
        },
        {
          title: 'Backup and Disaster Recovery',
          content: 'Regular backups are essential for recovering from ransomware attacks and other disasters.',
          subsections: [
            {
              title: 'Backup Strategy',
              content: 'Implement regular backups of all critical data. Store backups in a separate location from primary systems. Test backup restoration regularly.'
            },
            {
              title: 'Disaster Recovery Planning',
              content: 'Develop a comprehensive disaster recovery plan. Test the plan regularly to ensure it works. Update the plan as systems and processes change.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'incident-response-template',
    moduleId: 2,
    title: 'Incident Response Plan Template',
    description: 'Template for developing a comprehensive incident response plan',
    icon: '📋',
    type: 'template',
    tags: ['Incident Response', 'Planning', 'Emergency'],
    content: {
      summary: 'Use this template to develop a comprehensive incident response plan for your organization.',
      keyPoints: [
        'Incident response team structure',
        'Detection and reporting procedures',
        'Investigation and containment',
        'Recovery and restoration',
        'Communication procedures',
        'Post-incident analysis'
      ],
      sections: [
        {
          title: 'Incident Response Team',
          content: 'Define the incident response team structure including roles and responsibilities. Include representatives from IT, security, management, legal, and communications.'
        },
        {
          title: 'Detection and Reporting',
          content: 'Establish procedures for detecting security incidents and reporting them to the incident response team. Include multiple reporting channels and escalation procedures.'
        },
        {
          title: 'Investigation and Containment',
          content: 'Document procedures for investigating incidents and containing damage. Include evidence preservation and documentation requirements.'
        },
        {
          title: 'Recovery and Restoration',
          content: 'Outline procedures for recovering systems and restoring normal operations. Include system restoration procedures and verification steps.'
        },
        {
          title: 'Communication Procedures',
          content: 'Define communication procedures for internal stakeholders, customers, and external parties. Include notification timelines and communication channels.'
        },
        {
          title: 'Post-Incident Analysis',
          content: 'Document procedures for conducting post-incident analysis. Include lessons learned and recommendations for preventing similar incidents.'
        }
      ]
    }
  },
  {
    id: 'threat-assessment-checklist',
    moduleId: 2,
    title: 'Threat Assessment Checklist',
    description: 'Checklist for assessing security threats and vulnerabilities',
    icon: '✅',
    type: 'checklist',
    tags: ['Threat Assessment', 'Vulnerability', 'Security'],
    content: {
      summary: 'Use this checklist to systematically assess security threats and vulnerabilities in your organization.',
      keyPoints: [
        'Asset inventory',
        'Threat identification',
        'Vulnerability assessment',
        'Risk analysis',
        'Mitigation planning'
      ],
      sections: [
        {
          title: 'Asset Inventory',
          content: 'Document all IT assets including hardware, software, and data.',
          subsections: [
            { title: 'Hardware Inventory', content: 'List all servers, workstations, network devices, and mobile devices.' },
            { title: 'Software Inventory', content: 'Document all applications and operating systems with version numbers.' },
            { title: 'Data Inventory', content: 'Identify all critical data and its storage locations.' }
          ]
        },
        {
          title: 'Threat Identification',
          content: 'Identify potential threats to your assets.',
          subsections: [
            { title: 'External Threats', content: 'Identify external threats including hackers, malware, and ransomware.' },
            { title: 'Internal Threats', content: 'Identify internal threats including malicious insiders and accidental data loss.' },
            { title: 'Environmental Threats', content: 'Identify environmental threats including natural disasters and power failures.' }
          ]
        },
        {
          title: 'Vulnerability Assessment',
          content: 'Assess vulnerabilities in your systems and processes.',
          subsections: [
            { title: 'Technical Vulnerabilities', content: 'Scan systems for known vulnerabilities and misconfigurations.' },
            { title: 'Process Vulnerabilities', content: 'Review processes for security gaps and weaknesses.' },
            { title: 'Human Vulnerabilities', content: 'Assess employee security awareness and training needs.' }
          ]
        },
        {
          title: 'Risk Analysis',
          content: 'Analyze the risk posed by identified threats and vulnerabilities.',
          subsections: [
            { title: 'Risk Assessment', content: 'Assess the likelihood and impact of each threat.' },
            { title: 'Risk Prioritization', content: 'Prioritize risks based on likelihood and impact.' }
          ]
        },
        {
          title: 'Mitigation Planning',
          content: 'Develop plans to mitigate identified risks.',
          subsections: [
            { title: 'Risk Mitigation', content: 'Develop specific mitigation strategies for high-risk threats.' },
            { title: 'Implementation Planning', content: 'Plan implementation of mitigation strategies with timelines and resource requirements.' }
          ]
        }
      ]
    }
  },

  // Module 3: AI Governance & Ethics
  {
    id: 'ai-ethics-implementation-guide',
    moduleId: 3,
    title: 'AI Ethics Implementation Guide',
    description: 'Guide for implementing AI ethics principles in your organization',
    icon: '🤖',
    type: 'guide',
    tags: ['AI Ethics', 'Governance', 'Implementation'],
    content: {
      summary: 'Learn how to implement AI ethics principles to ensure responsible AI development and deployment.',
      keyPoints: [
        'Establish AI governance structure',
        'Conduct impact assessments',
        'Implement bias detection and mitigation',
        'Ensure transparency and explainability',
        'Maintain human oversight',
        'Monitor and audit AI systems'
      ],
      sections: [
        {
          title: 'Establish AI Governance Structure',
          content: 'Create an AI governance committee with representation from technical, legal, ethics, and business teams to oversee AI projects and ensure ethical compliance.',
          subsections: [
            {
              title: 'Committee Composition',
              content: 'Include members from IT, data science, legal, compliance, ethics, and business units. Establish clear roles and responsibilities.'
            },
            {
              title: 'Decision-Making Process',
              content: 'Define processes for reviewing AI projects, identifying risks, and making recommendations for ethical compliance.'
            }
          ]
        },
        {
          title: 'Conduct AI Impact Assessments',
          content: 'Before deploying AI systems, conduct comprehensive impact assessments to identify potential harms and mitigation strategies.',
          subsections: [
            {
              title: 'Assessment Components',
              content: 'Assess fairness, transparency, accountability, privacy, security, and explainability. Identify potential harms and affected groups.'
            },
            {
              title: 'Risk Mitigation',
              content: 'Develop mitigation strategies for identified risks. Document findings and recommendations.'
            }
          ]
        },
        {
          title: 'Implement Bias Detection and Mitigation',
          content: 'Actively work to identify and mitigate bias in AI systems.',
          subsections: [
            {
              title: 'Bias Testing',
              content: 'Test AI systems across different demographic groups to identify performance disparities. Use fairness metrics to quantify bias.'
            },
            {
              title: 'Bias Mitigation',
              content: 'Implement mitigation strategies including diverse training data, fairness constraints, and algorithmic adjustments.'
            }
          ]
        },
        {
          title: 'Ensure Transparency and Explainability',
          content: 'Make AI systems transparent and explainable to users and stakeholders.',
          subsections: [
            {
              title: 'Documentation',
              content: 'Document how AI systems work, what data they use, and how they make decisions. Communicate limitations to users.'
            },
            {
              title: 'Explainability Tools',
              content: 'Use explainability tools to help users understand AI decisions. Provide explanations in plain language.'
            }
          ]
        },
        {
          title: 'Maintain Human Oversight',
          content: 'Ensure humans maintain appropriate oversight and control over AI systems, especially in high-stakes decisions.',
          subsections: [
            {
              title: 'Human-in-the-Loop',
              content: 'Implement human review processes for important AI decisions. Allow humans to override AI recommendations.'
            },
            {
              title: 'Escalation Procedures',
              content: 'Establish procedures for escalating AI decisions to human decision-makers when appropriate.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'ai-impact-assessment-template',
    moduleId: 3,
    title: 'AI Impact Assessment Template',
    description: 'Template for conducting AI impact assessments',
    icon: '📝',
    type: 'template',
    tags: ['Assessment', 'AI', 'Risk Analysis'],
    content: {
      summary: 'Use this template to systematically assess the potential impacts of AI systems before deployment.',
      keyPoints: [
        'System description and purpose',
        'Fairness assessment',
        'Transparency and explainability',
        'Privacy and security',
        'Accountability mechanisms',
        'Risk mitigation strategies'
      ],
      sections: [
        {
          title: 'System Description',
          content: 'Describe the AI system including its purpose, inputs, outputs, and decision-making process.'
        },
        {
          title: 'Fairness Assessment',
          content: 'Assess whether the AI system treats all individuals fairly and avoid discriminating based on protected characteristics.'
        },
        {
          title: 'Transparency Assessment',
          content: 'Assess whether the AI system is transparent and explainable to users and stakeholders.'
        },
        {
          title: 'Privacy and Security Assessment',
          content: 'Assess privacy and security measures protecting data used by the AI system.'
        },
        {
          title: 'Accountability Assessment',
          content: 'Assess accountability mechanisms including audit trails, documentation, and human oversight.'
        },
        {
          title: 'Risk Mitigation Plan',
          content: 'Develop specific mitigation strategies for identified risks and impacts.'
        }
      ]
    }
  },
  {
    id: 'ai-governance-checklist',
    moduleId: 3,
    title: 'AI Governance Checklist',
    description: 'Checklist for establishing AI governance in your organization',
    icon: '✅',
    type: 'checklist',
    tags: ['Governance', 'AI', 'Compliance'],
    content: {
      summary: 'Use this checklist to establish comprehensive AI governance in your organization.',
      keyPoints: [
        'Governance structure',
        'Policies and procedures',
        'Impact assessments',
        'Bias monitoring',
        'Transparency and documentation',
        'Human oversight'
      ],
      sections: [
        {
          title: 'Governance Structure',
          content: 'Establish AI governance committee',
          subsections: [
            { title: 'Committee Formation', content: 'Establish AI governance committee with cross-functional representation.' },
            { title: 'Charter Development', content: 'Develop committee charter defining roles, responsibilities, and decision-making processes.' }
          ]
        },
        {
          title: 'Policies and Procedures',
          content: 'Develop AI policies and procedures',
          subsections: [
            { title: 'AI Policy Development', content: 'Develop comprehensive AI policies covering ethics, governance, and compliance.' },
            { title: 'Procedure Documentation', content: 'Document procedures for AI project review, approval, and monitoring.' }
          ]
        },
        {
          title: 'Impact Assessment Process',
          content: 'Implement AI impact assessment process',
          subsections: [
            { title: 'Assessment Template', content: 'Develop AI impact assessment template.' },
            { title: 'Review Process', content: 'Establish process for conducting and reviewing impact assessments.' }
          ]
        },
        {
          title: 'Bias Monitoring',
          content: 'Implement bias monitoring and mitigation',
          subsections: [
            { title: 'Bias Testing', content: 'Establish procedures for testing AI systems for bias.' },
            { title: 'Mitigation Strategies', content: 'Develop mitigation strategies for identified bias.' }
          ]
        },
        {
          title: 'Transparency and Documentation',
          content: 'Ensure transparency and documentation',
          subsections: [
            { title: 'System Documentation', content: 'Document how AI systems work and how they make decisions.' },
            { title: 'User Communication', content: 'Communicate AI system capabilities and limitations to users.' }
          ]
        },
        {
          title: 'Human Oversight',
          content: 'Maintain human oversight of AI systems',
          subsections: [
            { title: 'Review Procedures', content: 'Establish procedures for human review of AI decisions.' },
            { title: 'Override Mechanisms', content: 'Implement mechanisms for humans to override AI recommendations.' }
          ]
        }
      ]
    }
  },

  // Module 4: Data Management Excellence
  {
    id: 'data-governance-guide',
    moduleId: 4,
    title: 'Data Governance Implementation Guide',
    description: 'Comprehensive guide to implementing data governance',
    icon: '📊',
    type: 'guide',
    tags: ['Data Governance', 'Management', 'Implementation'],
    content: {
      summary: 'Learn how to implement effective data governance to ensure data quality, security, and compliance.',
      keyPoints: [
        'Establish governance structure',
        'Define data policies',
        'Implement data classification',
        'Ensure data quality',
        'Manage data lifecycle',
        'Monitor and audit'
      ],
      sections: [
        {
          title: 'Establish Data Governance Structure',
          content: 'Create a data governance committee with representation from business, IT, legal, and compliance teams.',
          subsections: [
            {
              title: 'Committee Roles',
              content: 'Define roles including Chief Data Officer, data stewards, and data custodians. Establish clear responsibilities.'
            },
            {
              title: 'Governance Framework',
              content: 'Develop a governance framework defining policies, procedures, and decision-making processes.'
            }
          ]
        },
        {
          title: 'Define Data Policies',
          content: 'Develop comprehensive data policies covering data collection, use, retention, and disposal.',
          subsections: [
            {
              title: 'Policy Development',
              content: 'Develop policies addressing data classification, retention, access control, security, and privacy.'
            },
            {
              title: 'Policy Communication',
              content: 'Communicate policies to all staff and ensure understanding and compliance.'
            }
          ]
        },
        {
          title: 'Implement Data Classification',
          content: 'Classify data based on sensitivity and protection requirements.',
          subsections: [
            {
              title: 'Classification Levels',
              content: 'Define classification levels (Public, Internal, Confidential, Restricted) and associated protection requirements.'
            },
            {
              title: 'Classification Process',
              content: 'Establish process for classifying data and maintaining classification inventory.'
            }
          ]
        },
        {
          title: 'Ensure Data Quality',
          content: 'Implement processes to ensure data accuracy, completeness, and consistency.',
          subsections: [
            {
              title: 'Quality Standards',
              content: 'Define data quality standards and metrics. Monitor data quality regularly.'
            },
            {
              title: 'Quality Improvement',
              content: 'Implement processes for identifying and correcting data quality issues.'
            }
          ]
        },
        {
          title: 'Manage Data Lifecycle',
          content: 'Manage data throughout its lifecycle from collection to disposal.',
          subsections: [
            {
              title: 'Lifecycle Stages',
              content: 'Define stages including collection, storage, use, retention, and disposal. Establish procedures for each stage.'
            },
            {
              title: 'Retention Schedules',
              content: 'Develop retention schedules specifying how long data should be retained before disposal.'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'data-classification-template',
    moduleId: 4,
    title: 'Data Classification Matrix',
    description: 'Template for classifying organizational data',
    icon: '📋',
    type: 'template',
    tags: ['Classification', 'Data Management', 'Security'],
    content: {
      summary: 'Use this template to classify your organizational data based on sensitivity and protection requirements.',
      keyPoints: [
        'Public data - no restrictions',
        'Internal data - limited distribution',
        'Confidential data - restricted access',
        'Restricted data - highly sensitive'
      ],
      sections: [
        {
          title: 'Public Data',
          content: 'Data that can be freely shared with the public without restriction. Examples include published reports, marketing materials, and general information.'
        },
        {
          title: 'Internal Data',
          content: 'Data for internal use only. Examples include internal communications, policies, and procedures. Should not be shared outside the organization.'
        },
        {
          title: 'Confidential Data',
          content: 'Sensitive business data requiring restricted access. Examples include financial information, strategic plans, and customer data. Access should be limited to authorized personnel.'
        },
        {
          title: 'Restricted Data',
          content: 'Highly sensitive data requiring maximum protection. Examples include personal information, health records, and legal documents. Access should be strictly controlled and monitored.'
        }
      ]
    }
  },
  {
    id: 'data-management-checklist',
    moduleId: 4,
    title: 'Data Management Checklist',
    description: 'Comprehensive checklist for data management practices',
    icon: '✅',
    type: 'checklist',
    tags: ['Data Management', 'Compliance', 'Quality'],
    content: {
      summary: 'Use this checklist to ensure comprehensive data management practices in your organization.',
      keyPoints: [
        'Data inventory',
        'Classification and labeling',
        'Access control',
        'Security measures',
        'Quality assurance',
        'Retention and disposal'
      ],
      sections: [
        {
          title: 'Data Inventory',
          content: 'Maintain comprehensive inventory of all data assets',
          subsections: [
            { title: 'Inventory Documentation', content: 'Document all data assets including location, owner, and sensitivity level.' },
            { title: 'Regular Updates', content: 'Update inventory regularly as new data is created or old data is disposed.' }
          ]
        },
        {
          title: 'Classification and Labeling',
          content: 'Classify and label all data appropriately',
          subsections: [
            { title: 'Classification', content: 'Classify data according to sensitivity levels.' },
            { title: 'Labeling', content: 'Label data with classification level and handling requirements.' }
          ]
        },
        {
          title: 'Access Control',
          content: 'Implement appropriate access controls',
          subsections: [
            { title: 'Access Restrictions', content: 'Restrict access based on business need and role.' },
            { title: 'Access Monitoring', content: 'Monitor and audit access to sensitive data.' }
          ]
        },
        {
          title: 'Security Measures',
          content: 'Implement security measures to protect data',
          subsections: [
            { title: 'Encryption', content: 'Encrypt data in transit and at rest.' },
            { title: 'Backups', content: 'Maintain regular backups of critical data.' }
          ]
        },
        {
          title: 'Quality Assurance',
          content: 'Ensure data quality and accuracy',
          subsections: [
            { title: 'Quality Monitoring', content: 'Monitor data quality regularly.' },
            { title: 'Quality Improvement', content: 'Implement processes for correcting data quality issues.' }
          ]
        },
        {
          title: 'Retention and Disposal',
          content: 'Manage data retention and disposal',
          subsections: [
            { title: 'Retention Schedules', content: 'Follow retention schedules for all data.' },
            { title: 'Secure Disposal', content: 'Securely dispose of data when no longer needed.' }
          ]
        }
      ]
    }
  }
];

export const getStudyMaterialsByModule = (moduleId: number): StudyMaterial[] => {
  return STUDY_MATERIALS.filter(material => material.moduleId === moduleId);
};

export const getStudyMaterial = (id: string): StudyMaterial | undefined => {
  return STUDY_MATERIALS.find(material => material.id === id);
};
