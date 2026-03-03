import { AdditionalLessonContent, CaseStudy, PracticalExample, RegulatoryUpdate, BestPractice } from './additionalModule1Content';

export const additionalModule3Content: AdditionalLessonContent[] = [
  // Module 3, Lesson 1: AI Governance Fundamentals
  {
    moduleId: 3,
    lessonId: 1,
    caseStudies: [
      {
        title: "Amazon Recruiting AI Bias",
        organization: "Amazon",
        scenario: "Amazon developed an AI system to screen job applications, but discovered the system was biased against women because it was trained on historical hiring data that reflected gender bias.",
        challenge: "The biased AI system was rejecting qualified female candidates, perpetuating historical discrimination patterns. Amazon had to acknowledge the issue, discontinue the system, and address the underlying bias.",
        solution: "Amazon discontinued the recruiting AI, acknowledged the bias issue, and committed to developing more transparent and fair AI systems with diverse training data.",
        outcome: "The incident highlighted the importance of testing AI systems for bias and the risks of perpetuating discrimination through automated systems.",
        lessonsLearned: [
          "Historical data can perpetuate bias if not carefully examined and corrected",
          "AI systems must be tested for fairness and bias before deployment",
          "Diverse teams are essential for identifying and addressing AI bias",
          "Transparency about AI limitations and biases is critical for maintaining trust"
        ]
      },
      {
        title: "Facial Recognition Misidentification",
        organization: "Law Enforcement Agencies",
        scenario: "Facial recognition systems used by law enforcement agencies misidentified individuals, leading to wrongful arrests of innocent people.",
        challenge: "The misidentifications highlighted the risks of relying on AI systems for critical decisions without human oversight. Innocent people were arrested based on faulty AI predictions.",
        solution: "Law enforcement agencies implemented policies requiring human review of facial recognition results before taking action, and improved the accuracy of facial recognition systems.",
        outcome: "The incidents led to increased scrutiny of AI use in law enforcement and calls for stronger regulations on AI systems used for high-stakes decisions.",
        lessonsLearned: [
          "AI systems can make mistakes and require human oversight for critical decisions",
          "Facial recognition systems have higher error rates for people of color",
          "Transparency about AI limitations is essential for maintaining public trust",
          "Regulations may be necessary to ensure responsible AI use in high-stakes applications"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Assessing AI System Fairness",
        description: "Fairness assessment involves evaluating whether AI systems treat different groups equitably. This example shows how to assess AI fairness.",
        steps: [
          "Identify potential sources of bias in training data (historical bias, representation bias, measurement bias)",
          "Analyze training data for demographic disparities and underrepresentation",
          "Define fairness metrics appropriate for your use case (demographic parity, equalized odds, calibration)",
          "Test AI system performance across different demographic groups",
          "Identify disparities in system performance across groups",
          "Investigate root causes of performance disparities",
          "Implement corrective measures (data augmentation, algorithmic adjustments, human oversight)",
          "Continuously monitor system performance for fairness"
        ],
        commonMistakes: [
          "Assuming AI systems are objective and unbiased",
          "Failing to test for bias across demographic groups",
          "Using biased training data without correction",
          "Not monitoring system performance after deployment"
        ],
        tips: [
          "Involve diverse teams in AI development to identify potential biases",
          "Use fairness testing tools and frameworks",
          "Document assumptions and limitations of AI systems",
          "Establish processes for addressing bias when identified"
        ]
      },
      {
        title: "Implementing AI Governance Framework",
        description: "An AI governance framework establishes policies, procedures, and oversight mechanisms for responsible AI development and deployment.",
        steps: [
          "Define AI governance principles (fairness, transparency, accountability, privacy)",
          "Establish roles and responsibilities for AI governance",
          "Create policies for AI development, testing, and deployment",
          "Implement review processes for AI systems before deployment",
          "Establish monitoring procedures for AI system performance",
          "Create incident response procedures for AI system failures",
          "Establish communication procedures for AI system limitations",
          "Conduct regular audits of AI governance implementation"
        ],
        commonMistakes: [
          "Treating AI governance as an IT issue rather than organizational responsibility",
          "Failing to involve diverse stakeholders in governance decisions",
          "Not allocating adequate resources for AI governance",
          "Ignoring AI governance until problems occur"
        ],
        tips: [
          "Involve representatives from business, technical, legal, and ethics teams",
          "Start with a pilot governance framework and refine based on experience",
          "Use industry frameworks like IEEE Ethically Aligned Design as reference",
          "Communicate governance framework to all stakeholders"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "EU AI Act Implementation",
        date: "2024",
        summary: "The European Union implemented the AI Act, establishing requirements for AI systems based on risk levels, including transparency, documentation, and human oversight.",
        impact: "Organizations operating in or serving the EU must comply with AI Act requirements, including risk assessment and documentation for high-risk AI systems.",
        action: "Review your AI systems to assess compliance with EU AI Act requirements. Implement necessary governance and documentation procedures."
      },
      {
        title: "Executive Order on AI Safety",
        date: "2023",
        summary: "The U.S. Executive Order on AI established requirements for AI safety, including testing for bias and security vulnerabilities.",
        impact: "U.S. government agencies and contractors must implement AI safety measures, including testing and documentation.",
        action: "If your organization works with U.S. government, review AI safety requirements and implement necessary procedures."
      }
    ],
    bestPractices: [
      {
        title: "Building Responsible AI Development Practices",
        description: "Responsible AI development requires integrating ethics, fairness, and transparency throughout the AI development lifecycle.",
        implementation: [
          "Problem definition: Clearly define the problem AI will solve and identify potential harms",
          "Data collection: Collect diverse, representative data and document data sources and limitations",
          "Model development: Use fairness-aware algorithms and test for bias",
          "Testing and validation: Conduct comprehensive testing including bias testing and adversarial testing",
          "Documentation: Document model assumptions, limitations, and performance across groups",
          "Deployment: Implement monitoring and human oversight mechanisms",
          "Monitoring: Continuously monitor system performance and user feedback",
          "Maintenance: Update systems when performance degrades or bias is identified"
        ],
        benefits: [
          "Reduces risk of AI systems causing harm or discrimination",
          "Improves user trust and acceptance of AI systems",
          "Facilitates regulatory compliance",
          "Enhances organizational reputation and brand value",
          "Improves long-term AI system performance and reliability"
        ],
        resources: [
          "IEEE Ethically Aligned Design Framework",
          "NIST AI Risk Management Framework",
          "Partnership on AI Responsible AI Resources",
          "Industry-specific AI ethics guidelines"
        ]
      }
    ]
  },

  // Module 3, Lesson 2: AI Ethics and Responsible AI
  {
    moduleId: 3,
    lessonId: 2,
    caseStudies: [
      {
        title: "Algorithmic Hiring Discrimination",
        organization: "Multiple Technology Companies",
        scenario: "Several technology companies discovered their AI hiring systems were discriminating against women and minorities due to biased training data.",
        challenge: "The companies had to acknowledge discrimination, implement corrective measures, and rebuild trust with affected communities.",
        solution: "Companies implemented diverse hiring practices, retrained AI systems with balanced data, and added human review to hiring decisions.",
        outcome: "The incidents led to increased focus on AI fairness in hiring and regulatory scrutiny of AI use in employment decisions.",
        lessonsLearned: [
          "AI systems can perpetuate and amplify existing discrimination",
          "Diverse teams are essential for identifying and addressing ethical issues",
          "Transparency about AI limitations is critical for maintaining trust",
          "Human oversight is necessary for high-stakes AI decisions"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Conducting an AI Ethics Review",
        description: "An AI ethics review evaluates potential ethical issues with AI systems before deployment. This example shows how to conduct a review.",
        steps: [
          "Identify stakeholders who may be affected by the AI system",
          "Assess potential harms the AI system could cause (discrimination, privacy violations, autonomy reduction)",
          "Evaluate fairness of the AI system across different groups",
          "Assess transparency and explainability of AI decisions",
          "Evaluate accountability mechanisms for AI system failures",
          "Assess privacy protections for data used by the AI system",
          "Document findings and recommendations",
          "Implement corrective measures before deployment"
        ],
        commonMistakes: [
          "Conducting ethics reviews only after problems occur",
          "Failing to involve diverse perspectives in ethics reviews",
          "Not implementing recommendations from ethics reviews",
          "Treating ethics as a compliance checkbox rather than ongoing responsibility"
        ],
        tips: [
          "Involve representatives from affected communities in ethics reviews",
          "Use ethics frameworks like IEEE Ethically Aligned Design as reference",
          "Document ethics review process and findings",
          "Establish procedures for ongoing ethics monitoring after deployment"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Algorithmic Accountability Requirements",
        date: "2023",
        summary: "Regulators increased requirements for organizations to explain and justify algorithmic decisions, particularly in employment and lending.",
        impact: "Organizations using AI in employment, lending, and other high-stakes decisions must be able to explain AI decisions and demonstrate fairness.",
        action: "Review your AI systems for explainability and accountability. Implement procedures for explaining AI decisions to affected individuals."
      }
    ],
    bestPractices: [
      {
        title: "Transparency and Explainability in AI",
        description: "Transparency and explainability help users understand how AI systems work and build trust in AI decisions.",
        implementation: [
          "Document AI system purpose, capabilities, and limitations",
          "Explain how AI systems make decisions in plain language",
          "Provide users with information about data used by AI systems",
          "Implement explainability techniques to help users understand AI decisions",
          "Establish processes for users to challenge AI decisions",
          "Communicate AI system limitations and potential biases",
          "Maintain transparency about AI system performance and failures"
        ],
        benefits: [
          "Builds user trust and acceptance of AI systems",
          "Facilitates regulatory compliance and audits",
          "Helps identify and address AI system failures",
          "Improves user satisfaction and adoption of AI systems",
          "Enhances organizational reputation and brand value"
        ],
        resources: [
          "NIST AI Risk Management Framework",
          "Explainable AI (XAI) techniques and tools",
          "Industry guidance on AI transparency",
          "User communication best practices for AI systems"
        ]
      }
    ]
  },

  // Module 3, Lesson 3: Data Privacy in AI Systems
  {
    moduleId: 3,
    lessonId: 3,
    caseStudies: [
      {
        title: "Clearview AI Privacy Violations",
        organization: "Clearview AI",
        scenario: "Clearview AI scraped billions of photos from social media and other websites without consent to build a facial recognition database used by law enforcement.",
        challenge: "Privacy advocates and regulators challenged Clearview's practices, arguing they violated privacy rights and regulations.",
        solution: "Clearview AI faced lawsuits and regulatory investigations, and implemented policies restricting access to its database.",
        outcome: "The incident highlighted privacy risks of AI systems and led to increased regulatory scrutiny of facial recognition technology.",
        lessonsLearned: [
          "AI systems must respect privacy rights and obtain appropriate consent",
          "Large-scale data collection without consent raises serious privacy concerns",
          "Regulatory scrutiny of AI systems is increasing, particularly for privacy-sensitive applications",
          "Organizations must consider privacy implications of AI systems from the beginning"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Implementing Privacy-Preserving AI Techniques",
        description: "Privacy-preserving techniques allow AI systems to learn from data while protecting individual privacy. This example shows how to implement these techniques.",
        steps: [
          "Identify sensitive data used by AI systems",
          "Evaluate privacy-preserving techniques (differential privacy, federated learning, data anonymization)",
          "Implement appropriate techniques based on privacy requirements",
          "Test privacy-preserving techniques to ensure they maintain AI system performance",
          "Document privacy protections implemented",
          "Conduct regular privacy audits",
          "Communicate privacy protections to users"
        ],
        commonMistakes: [
          "Assuming anonymization provides complete privacy protection",
          "Implementing privacy techniques that significantly degrade AI system performance",
          "Not testing privacy techniques before deployment",
          "Failing to communicate privacy protections to users"
        ],
        tips: [
          "Use established privacy-preserving techniques rather than developing custom approaches",
          "Balance privacy protection with AI system performance requirements",
          "Conduct privacy impact assessments before implementing AI systems",
          "Involve privacy experts in AI system development"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "GDPR Guidance on AI and Personal Data",
        date: "2023",
        summary: "European data protection authorities released guidance on how GDPR applies to AI systems, including requirements for data minimization and user rights.",
        impact: "Organizations using AI systems must comply with GDPR requirements, including limiting data collection and respecting user rights.",
        action: "Review your AI systems for GDPR compliance. Implement procedures for respecting user rights and limiting data collection."
      }
    ],
    bestPractices: [
      {
        title: "Privacy by Design in AI Systems",
        description: "Privacy by design means building privacy protections into AI systems from the beginning, rather than adding them later.",
        implementation: [
          "Minimize data collection to only what's necessary for AI system purposes",
          "Implement data retention limits and deletion procedures",
          "Use privacy-preserving techniques in AI development",
          "Implement access controls for data used by AI systems",
          "Encrypt sensitive data used by AI systems",
          "Implement user controls for personal data used by AI systems",
          "Conduct privacy impact assessments for AI systems",
          "Maintain transparency about data use in AI systems"
        ],
        benefits: [
          "Reduces privacy risks and regulatory violations",
          "Builds user trust and confidence in AI systems",
          "Simplifies compliance with privacy regulations",
          "Improves organizational reputation and brand value"
        ],
        resources: [
          "GDPR and privacy regulation guidance",
          "Privacy-preserving AI techniques and tools",
          "Privacy impact assessment frameworks",
          "Industry guidance on privacy in AI"
        ]
      }
    ]
  },

  // Module 3, Lesson 4: Emerging AI Challenges and Future Directions
  {
    moduleId: 3,
    lessonId: 4,
    caseStudies: [
      {
        title: "Deepfake Misinformation",
        organization: "Media and Society",
        scenario: "Deepfake technology was used to create fake videos of political leaders and celebrities, spreading misinformation and damaging reputations.",
        challenge: "Deepfakes raised concerns about misinformation, election interference, and the difficulty of distinguishing real from fake content.",
        solution: "Technology companies implemented deepfake detection tools, media organizations implemented verification procedures, and policymakers developed regulations.",
        outcome: "The incident highlighted the need for AI literacy, media verification practices, and regulations on AI-generated content.",
        lessonsLearned: [
          "AI-generated content can be used to spread misinformation and cause harm",
          "Society needs improved AI literacy to identify and evaluate AI-generated content",
          "Verification and authentication mechanisms are essential for combating deepfakes",
          "Regulations may be necessary to address AI-generated misinformation"
        ]
      }
    ],
    practicalExamples: [
      {
        title: "Preparing for AI Risks and Challenges",
        description: "Organizations should prepare for emerging AI risks including deepfakes, adversarial attacks, and AI-generated misinformation.",
        steps: [
          "Identify potential AI risks relevant to your organization",
          "Assess organizational vulnerability to each risk",
          "Develop mitigation strategies for high-risk items",
          "Implement detection and response procedures",
          "Conduct regular training on AI risks and mitigation",
          "Monitor emerging AI risks and technologies",
          "Update risk mitigation strategies as AI evolves"
        ],
        commonMistakes: [
          "Ignoring emerging AI risks until they cause problems",
          "Assuming AI risks only affect technology companies",
          "Not allocating resources for AI risk mitigation",
          "Failing to update risk mitigation as AI evolves"
        ],
        tips: [
          "Stay informed about emerging AI technologies and risks",
          "Participate in industry groups focused on AI safety and governance",
          "Conduct regular risk assessments for AI-related threats",
          "Develop incident response procedures for AI-related incidents"
        ]
      }
    ],
    regulatoryUpdates: [
      {
        title: "Increased Regulatory Focus on AI Safety",
        date: "2024",
        summary: "Regulators worldwide are increasing focus on AI safety, including requirements for testing, documentation, and human oversight.",
        impact: "Organizations must implement comprehensive AI safety measures and be prepared for increasing regulatory requirements.",
        action: "Review your AI systems for safety and compliance with emerging regulatory requirements. Implement necessary governance and testing procedures."
      }
    ],
    bestPractices: [
      {
        title: "Continuous Learning and Adaptation for AI Governance",
        description: "AI governance must evolve as AI technology and regulatory landscape change. Organizations must commit to continuous learning and improvement.",
        implementation: [
          "Stay informed about emerging AI technologies and risks",
          "Monitor regulatory developments and compliance requirements",
          "Participate in industry groups and standards development",
          "Conduct regular audits of AI governance effectiveness",
          "Update governance procedures based on lessons learned",
          "Invest in employee training on AI governance and ethics",
          "Establish mechanisms for incorporating stakeholder feedback",
          "Maintain transparency about AI governance practices"
        ],
        benefits: [
          "Ensures AI governance remains relevant as AI evolves",
          "Reduces risk of regulatory violations",
          "Improves organizational reputation as responsible AI user",
          "Builds employee and stakeholder trust in AI systems",
          "Positions organization as leader in responsible AI"
        ],
        resources: [
          "AI governance frameworks and standards",
          "Industry groups focused on AI safety and governance",
          "Regulatory guidance and compliance resources",
          "AI ethics and governance training programs"
        ]
      }
    ]
  }
];

export function getAdditionalModule3Content(lessonId: number): AdditionalLessonContent | undefined {
  return additionalModule3Content.find(content => content.lessonId === lessonId);
}
