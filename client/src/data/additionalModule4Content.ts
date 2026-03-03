import { AdditionalLessonContent, CaseStudy, PracticalExample, RegulatoryUpdate, BestPractice } from './additionalModule1Content';

export const additionalModule4Content: AdditionalLessonContent[] = [
  // Module 4, Lesson 1: Data Governance Fundamentals
  {
    moduleId: 4,
    lessonId: 1,
    caseStudies: [
      {
        title: "Healthcare Data Management Crisis",
        organization: "Large Healthcare System",
        scenario: "A healthcare system had data scattered across multiple systems with no centralized governance, leading to data quality issues, duplicate records, and inability to provide coordinated patient care.",
        challenge: "The lack of data governance resulted in poor patient outcomes, regulatory violations, and operational inefficiency. The organization struggled to comply with healthcare data regulations.",
        solution: "The organization implemented comprehensive data governance including data quality standards, master data management, and centralized data stewardship.",
        outcome: "Data governance improvements led to better patient outcomes, improved regulatory compliance, and increased operational efficiency.",
        lessonsLearned: [
          "Data governance is essential for data quality and regulatory compliance",
          "Centralized data stewardship improves data consistency and reliability",
          "Data governance requires organizational commitment and cross-functional collaboration",
          "Effective data governance enables better decision-making and business outcomes"
        ]
      },
      {
        title: "Financial Services Data Proliferation",
        organization: "Financial Institution",
        scenario: "A financial institution had customer data stored in hundreds of different systems with no centralized inventory or governance, creating security and compliance risks.",
        challenge: "The organization couldn't account for all customer data, couldn't ensure consistent security controls, and struggled to respond to data subject access requests.",
        solution: "The organization implemented a data inventory system, established data governance policies, and implemented centralized access controls.",
        outcome: "Better data security, improved regulatory compliance, and faster response to data subject requests.",
        lessonsLearned: [
          "Data inventory is essential for understanding organizational data assets",
          "Centralized governance improves security and compliance",
          "Data governance enables faster response to regulatory requests",
          "Organizations must continuously monitor and manage data proliferation"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Creating a Data Inventory",
        description: "A data inventory documents all data assets an organization holds, including data location, ownership, and sensitivity level.",
        steps: [
          "Identify all systems and databases storing organizational data",
          "Document data types stored in each system (customer, financial, operational, etc.)",
          "Identify data owners responsible for each data type",
          "Classify data by sensitivity level (public, internal, confidential, restricted)",
          "Document data retention requirements for each data type",
          "Identify data sharing and integration points",
          "Document data quality and accuracy standards",
          "Maintain and update the data inventory regularly"
        ],
        commonMistakes: [
          "Creating a data inventory but not maintaining it",
          "Failing to include all data systems in the inventory",
          "Not classifying data by sensitivity level",
          "Not involving data owners in inventory creation"
        ],
        tips: [
          "Use automated tools to discover data systems and data flows",
          "Involve representatives from all departments in inventory creation",
          "Start with high-priority data and expand over time",
          "Establish procedures for updating inventory as systems change"
        ]
      },
      {
        title: "Establishing Data Quality Standards",
        description: "Data quality standards ensure data is accurate, complete, and consistent. This example shows how to establish standards.",
        steps: [
          "Define data quality dimensions (accuracy, completeness, consistency, timeliness)",
          "Establish quality standards for each data type",
          "Implement data quality checks and monitoring",
          "Identify data quality issues and root causes",
          "Develop procedures for correcting data quality issues",
          "Establish accountability for data quality",
          "Communicate data quality standards to data users",
          "Monitor and report on data quality metrics"
        ],
        commonMistakes: [
          "Setting unrealistic data quality standards",
          "Failing to implement monitoring procedures",
          "Not addressing root causes of data quality issues",
          "Not communicating standards to data users"
        ],
        tips: [
          "Involve data users in defining quality standards",
          "Start with critical data and expand over time",
          "Use automated tools for data quality monitoring",
          "Establish clear accountability for data quality"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Enhanced Data Governance Requirements",
        date: "2024",
        summary: "Regulators increased requirements for organizations to implement comprehensive data governance, including data inventories and quality standards.",
        impact: "Organizations must implement data governance programs and maintain documentation of data assets and governance practices.",
        action: "Implement a data governance program including data inventory, quality standards, and stewardship procedures."
      }
    ],
    bestPractices: [
      {
        title: "Building a Data Governance Program",
        description: "A comprehensive data governance program establishes policies, procedures, and organizational structures for managing organizational data.",
        implementation: [
          "Executive sponsorship: Ensure leadership commitment to data governance",
          "Governance structure: Establish data governance committee and roles",
          "Policies and procedures: Develop data governance policies and procedures",
          "Data inventory: Create and maintain data inventory",
          "Data quality: Establish data quality standards and monitoring",
          "Data stewardship: Assign data stewards for different data types",
          "Metadata management: Implement metadata management procedures",
          "Training and awareness: Provide data governance training to employees",
          "Monitoring and reporting: Monitor governance effectiveness and report on metrics"
        ],
        benefits: [
          "Improves data quality and reliability",
          "Enables regulatory compliance",
          "Improves decision-making through better data",
          "Reduces data-related risks and costs",
          "Facilitates data sharing and integration"
        ],
        resources: [
          "DAMA International Data Management Body of Knowledge",
          "Data governance frameworks and standards",
          "Data governance tools and platforms",
          "Industry-specific data governance guidance"
        ]
      }
    ]
  },

  // Module 4, Lesson 2: Data Classification and Protection
  {
    moduleId: 4,
    lessonId: 2,
    caseStudies: [
      {
        title: "Unclassified Sensitive Data Exposure",
        organization: "Technology Company",
        scenario: "A technology company stored sensitive customer data without proper classification, resulting in the data being stored with inadequate security controls.",
        challenge: "When a breach occurred, the company discovered sensitive data had been exposed due to inadequate security controls based on improper classification.",
        solution: "The company implemented data classification procedures, applied appropriate security controls based on classification, and conducted a comprehensive data audit.",
        outcome: "Improved data security and regulatory compliance through proper classification and protection.",
        lessonsLearned: [
          "Data classification is essential for applying appropriate security controls",
          "Unclassified data often receives inadequate protection",
          "Data classification must be based on sensitivity and regulatory requirements",
          "Regular audits ensure data remains properly classified"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Implementing Data Classification",
        description: "Data classification assigns sensitivity levels to data based on potential impact if disclosed. This example shows how to implement classification.",
        steps: [
          "Define classification levels appropriate for your organization (public, internal, confidential, restricted)",
          "Establish criteria for assigning each classification level",
          "Train employees on data classification procedures",
          "Classify all existing data according to classification criteria",
          "Implement procedures for classifying new data",
          "Apply security controls appropriate for each classification level",
          "Monitor data classification and reclassify as needed",
          "Report on data classification metrics"
        ],
        commonMistakes: [
          "Using too many classification levels (more than 4-5)",
          "Failing to define clear criteria for classification",
          "Not training employees on classification procedures",
          "Applying same security controls regardless of classification"
        ],
        tips: [
          "Start with simple classification scheme (3-4 levels) and refine over time",
          "Involve data owners in defining classification criteria",
          "Use automated tools to assist with data classification",
          "Regularly review classification to ensure accuracy"
        ]
      },
      {
        title: "Applying Data Protection Controls",
        description: "Data protection controls should be proportionate to data sensitivity. This example shows how to apply appropriate controls.",
        steps: [
          "Identify protection requirements for each classification level",
          "Implement encryption for sensitive data (in transit and at rest)",
          "Implement access controls based on job function and need-to-know",
          "Implement data loss prevention tools to prevent unauthorized disclosure",
          "Implement audit logging to track data access",
          "Implement data retention and deletion procedures",
          "Implement backup and recovery procedures",
          "Monitor effectiveness of protection controls"
        ],
        commonMistakes: [
          "Applying same controls to all data regardless of sensitivity",
          "Implementing controls that are too restrictive and hinder business operations",
          "Not monitoring effectiveness of protection controls",
          "Failing to update controls as threats evolve"
        ],
        tips: [
          "Balance security with usability and business needs",
          "Use risk assessment to determine appropriate controls",
          "Implement controls in layers (defense in depth)",
          "Regularly test effectiveness of protection controls"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Encryption Requirements for Sensitive Data",
        date: "2023",
        summary: "Regulators increased requirements for encryption of sensitive data, including data in transit and at rest.",
        impact: "Organizations must implement encryption for sensitive data to comply with regulatory requirements.",
        action: "Audit your data systems to ensure sensitive data is encrypted in transit and at rest."
      }
    ],
    bestPractices: [
      {
        title: "Data Protection by Design",
        description: "Data protection should be built into systems and processes from the beginning, rather than added later.",
        implementation: [
          "Classify data by sensitivity level",
          "Design systems with appropriate security controls based on data sensitivity",
          "Implement encryption for sensitive data",
          "Implement access controls based on role and need-to-know",
          "Implement audit logging and monitoring",
          "Implement data retention and deletion procedures",
          "Conduct regular security assessments",
          "Update protection measures as threats evolve"
        ],
        benefits: [
          "Reduces data breach risk",
          "Improves regulatory compliance",
          "Reduces cost of retrofitting security controls",
          "Builds customer trust and confidence",
          "Improves organizational reputation"
        ],
        resources: [
          "NIST Data Protection Guidelines",
          "Encryption standards and best practices",
          "Access control frameworks",
          "Industry-specific data protection requirements"
        ]
      }
    ]
  },

  // Module 4, Lesson 3: Data Retention and Lifecycle Management
  {
    moduleId: 4,
    lessonId: 3,
    caseStudies: [
      {
        title: "Data Retention Compliance Violation",
        organization: "Legal Services Firm",
        scenario: "A law firm retained client data beyond required retention periods, creating privacy and security risks.",
        challenge: "Regulators discovered the firm was retaining client data longer than necessary, violating privacy regulations and creating unnecessary data breach risks.",
        solution: "The firm implemented data retention policies, conducted a data purge to delete unnecessary data, and established automated deletion procedures.",
        outcome: "Improved compliance with retention requirements and reduced data security risks.",
        lessonsLearned: [
          "Data retention policies must align with legal and business requirements",
          "Retaining data longer than necessary creates unnecessary risks",
          "Automated deletion procedures ensure compliance with retention policies",
          "Regular audits verify compliance with retention requirements"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Developing Data Retention Policies",
        description: "Data retention policies specify how long different types of data should be retained. This example shows how to develop policies.",
        steps: [
          "Identify legal and regulatory retention requirements for each data type",
          "Identify business retention requirements for each data type",
          "Determine retention periods based on legal, regulatory, and business requirements",
          "Document retention policies for each data type",
          "Implement procedures for applying retention policies",
          "Implement automated deletion procedures where possible",
          "Conduct regular audits to verify compliance with retention policies",
          "Update retention policies as requirements change"
        ],
        commonMistakes: [
          "Retaining data longer than required (data hoarding)",
          "Not documenting retention requirements and policies",
          "Failing to implement automated deletion procedures",
          "Not conducting audits to verify compliance"
        ],
        tips: [
          "Consult with legal counsel on retention requirements",
          "Document business justification for retention periods",
          "Implement automated deletion procedures to ensure compliance",
          "Conduct regular audits of data retention compliance"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Right to Deletion Requirements",
        date: "2023",
        summary: "GDPR and other regulations established rights for individuals to request deletion of their personal data.",
        impact: "Organizations must implement procedures to honor deletion requests and establish retention limits for personal data.",
        action: "Implement procedures for handling deletion requests and establish retention limits for personal data."
      }
    ],
    bestPractices: [
      {
        title: "Data Lifecycle Management",
        description: "Data lifecycle management manages data from creation through deletion, ensuring data is retained appropriately and deleted when no longer needed.",
        implementation: [
          "Data creation: Classify data and establish retention requirements at creation",
          "Data use: Ensure data is used only for authorized purposes",
          "Data storage: Store data securely based on sensitivity and retention requirements",
          "Data archival: Archive data when no longer needed for active use",
          "Data deletion: Delete data when retention period expires",
          "Audit and monitoring: Monitor data lifecycle compliance",
          "Documentation: Document data lifecycle procedures"
        ],
        benefits: [
          "Reduces data security risks by limiting data retention",
          "Improves regulatory compliance with retention requirements",
          "Reduces storage costs through timely deletion",
          "Improves data quality by removing obsolete data",
          "Facilitates data subject access requests"
        ],
        resources: [
          "Data lifecycle management frameworks",
          "Retention schedule templates",
          "Data archival and deletion tools",
          "Industry-specific retention requirements"
        ]
      }
    ]
  },

  // Module 4, Lesson 4: Data Analytics and Insights
  {
    moduleId: 4,
    lessonId: 4,
    caseStudies: [
      {
        title: "Predictive Analytics for Business Improvement",
        organization: "Retail Company",
        scenario: "A retail company used data analytics to predict customer behavior and optimize inventory management.",
        challenge: "The company had to implement analytics while protecting customer privacy and ensuring data quality.",
        solution: "The company implemented privacy-preserving analytics, established data quality standards, and implemented governance for analytics projects.",
        outcome: "Improved business performance through better inventory management and customer insights while maintaining privacy and compliance.",
        lessonsLearned: [
          "Data analytics can provide valuable business insights",
          "Privacy and compliance must be considered in analytics projects",
          "Data quality is essential for accurate analytics",
          "Analytics governance ensures responsible use of data"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Implementing Analytics Governance",
        description: "Analytics governance establishes policies and procedures for responsible use of data analytics.",
        steps: [
          "Define analytics objectives and business value",
          "Assess privacy and compliance implications of analytics",
          "Ensure data quality for analytics",
          "Implement access controls for analytics systems",
          "Establish procedures for validating analytics results",
          "Implement monitoring for analytics system performance",
          "Document analytics methodologies and assumptions",
          "Communicate analytics results responsibly"
        ],
        commonMistakes: [
          "Using poor quality data for analytics",
          "Not assessing privacy implications of analytics",
          "Failing to validate analytics results",
          "Not documenting analytics methodologies"
        ],
        tips: [
          "Involve data quality experts in analytics projects",
          "Conduct privacy impact assessments for analytics",
          "Validate analytics results before using for decisions",
          "Document assumptions and limitations of analytics"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Algorithmic Accountability in Analytics",
        date: "2023",
        summary: "Regulators increased requirements for transparency and accountability in data analytics, particularly for analytics used in high-stakes decisions.",
        impact: "Organizations must be able to explain analytics results and demonstrate fairness in analytics-based decisions.",
        action: "Review your analytics systems for transparency and fairness. Implement procedures for explaining analytics-based decisions."
      }
    ],
    bestPractices: [
      {
        title: "Responsible Data Analytics",
        description: "Responsible data analytics balances business value with privacy, fairness, and transparency.",
        implementation: [
          "Define clear analytics objectives aligned with business strategy",
          "Ensure data quality and representativeness",
          "Assess privacy and fairness implications",
          "Use appropriate analytical methods",
          "Validate results and test for bias",
          "Document methodologies and assumptions",
          "Implement transparency in analytics processes",
          "Establish accountability for analytics results",
          "Monitor for unintended consequences"
        ],
        benefits: [
          "Improves decision-making through reliable analytics",
          "Reduces risk of analytics-based discrimination",
          "Builds trust in analytics systems",
          "Facilitates regulatory compliance",
          "Enhances organizational reputation"
        ],
        resources: [
          "Data analytics frameworks and best practices",
          "Fairness in machine learning resources",
          "Analytics governance frameworks",
          "Industry-specific analytics guidance"
        ]
      }
    ]
  }
];

export function getAdditionalModule4Content(lessonId: number): AdditionalLessonContent | undefined {
  return additionalModule4Content.find(content => content.lessonId === lessonId);
}
