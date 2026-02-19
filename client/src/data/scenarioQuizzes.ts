import { ScenarioQuiz } from '@/components/training/ScenarioQuiz';

// ============================================================================
// MODULE 1: ONTARIO PRIVACY LAW MASTERY - SCENARIO QUIZZES
// ============================================================================
export const module1ScenarioQuiz: ScenarioQuiz = {
  id: 'module1-scenario',
  title: 'Privacy Law Mastery: Real-World Scenarios',
  description: 'Test your understanding of FIPPA, MFIPPA, and PIPEDA through realistic privacy scenarios.',
  moduleId: 1,
  totalPoints: 100,
  passingScore: 70,
  scenarios: [
    {
      id: 'scenario1-1',
      title: 'Scenario 1: Access Request at City Hall',
      description: 'You work at a municipal government office. A resident submits a request for access to records about a development permit.',
      situation: 'The resident requests all documents related to their property development permit application from 2 years ago. Your office has 30 days to respond. You find responsive documents, but some contain personal information about the applicant\'s neighbors.',
      context: 'This is a municipal government situation, so MFIPPA applies.',
      choices: [
        {
          id: 'c1-1-a',
          text: 'Release all documents as requested since the resident is entitled to their own records',
          feedback: 'Incorrect. While the resident has a right to access their own information, you must withhold personal information about third parties (neighbors) under MFIPPA Section 14. You should release the documents with the neighbors\' personal information redacted.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario1-2'
        },
        {
          id: 'c1-1-b',
          text: 'Withhold all documents to protect everyone\'s privacy',
          feedback: 'Incorrect. You should release the documents that contain the resident\'s own information. Only withhold the personal information about third parties. This balances the resident\'s access rights with privacy protection.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario1-2'
        },
        {
          id: 'c1-1-c',
          text: 'Release the resident\'s information but redact personal information about third parties, and respond within 30 days',
          feedback: 'Correct! Under MFIPPA, you must provide access to the resident\'s own information while protecting third parties\' personal information through redaction. The 30-day response deadline is mandatory.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario1-2'
        },
        {
          id: 'c1-1-d',
          text: 'Ask the resident to wait 60 days while you investigate',
          feedback: 'Incorrect. MFIPPA requires a response within 30 days. You can request an extension, but only for an additional 30 days if the request is complex. You cannot unilaterally extend beyond the initial 30 days.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario1-2'
        }
      ]
    },
    {
      id: 'scenario1-2',
      title: 'Scenario 2: Data Breach Notification',
      description: 'A provincial government ministry discovers that a database containing personal information has been breached.',
      situation: 'Your ministry discovers that 5,000 employee records including names, addresses, and salary information have been accessed by unauthorized individuals. The breach was discovered 2 days after it occurred. You need to determine the appropriate response under FIPPA.',
      context: 'This is a provincial government situation, so FIPPA applies.',
      choices: [
        {
          id: 'c1-2-a',
          text: 'Keep the breach confidential to avoid public panic',
          feedback: 'Incorrect. FIPPA requires transparency about privacy breaches. You must notify affected individuals and may need to notify the Information and Privacy Commissioner. Concealing a breach violates privacy principles and legal obligations.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario1-3'
        },
        {
          id: 'c1-2-b',
          text: 'Immediately notify all affected individuals, investigate the breach, and report to the Information and Privacy Commissioner',
          feedback: 'Correct! FIPPA requires prompt notification of affected individuals about breaches. You must investigate to understand the scope and cause, and report to the IPC. This demonstrates accountability and transparency.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario1-3'
        },
        {
          id: 'c1-2-c',
          text: 'Wait 30 days to complete an investigation before notifying anyone',
          feedback: 'Incorrect. Notification should be prompt, not delayed. While investigation is important, you should notify affected individuals as soon as you confirm the breach, then provide updates as your investigation progresses.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario1-3'
        },
        {
          id: 'c1-2-d',
          text: 'Only notify individuals whose information was actually accessed',
          feedback: 'Partially correct but incomplete. You should notify individuals whose information was accessed, but you must also investigate to determine the full scope. If you cannot confirm who was affected, you may need to notify all potentially affected individuals.',
          isCorrect: false,
          points: 10,
          nextScenarioId: 'scenario1-3'
        }
      ]
    },
    {
      id: 'scenario1-3',
      title: 'Scenario 3: Private Sector Privacy Compliance',
      description: 'You work for a private healthcare company. A patient requests access to their medical records.',
      situation: 'A patient requests access to their complete medical file. Your company has been holding their records for 5 years. Some records contain information about consultations with a psychiatrist that the patient may not remember. You need to determine what to provide under PIPEDA.',
      context: 'This is a private sector healthcare situation, so PIPEDA applies.',
      choices: [
        {
          id: 'c1-3-a',
          text: 'Provide only recent records to avoid overwhelming the patient',
          feedback: 'Incorrect. Under PIPEDA, individuals have the right to access all their personal information held by the organization. You cannot withhold information based on what you think is best for them.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c1-3-b',
          text: 'Provide all records including sensitive psychiatric information as requested',
          feedback: 'Correct! Under PIPEDA, individuals have the right to access all their personal information. While you should provide the information in a clear format and may offer to discuss it, you cannot withhold information from the individual it concerns.',
          isCorrect: true,
          points: 25
        },
        {
          id: 'c1-3-c',
          text: 'Refuse access to psychiatric records to protect the patient\'s mental health',
          feedback: 'Incorrect. Under PIPEDA, you cannot withhold an individual\'s own information to protect them. The individual has the right to access all their personal information. However, you should provide it in a clear, understandable format.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c1-3-d',
          text: 'Provide records but redact information about other healthcare providers',
          feedback: 'Incorrect. You should provide the individual\'s own medical information. You only redact third-party personal information if it\'s mixed with the individual\'s information and cannot be separated.',
          isCorrect: false,
          points: 0
        }
      ]
    }
  ]
};

// ============================================================================
// MODULE 2: CYBERSECURITY FUNDAMENTALS - SCENARIO QUIZZES
// ============================================================================
export const module2ScenarioQuiz: ScenarioQuiz = {
  id: 'module2-scenario',
  title: 'Cybersecurity Fundamentals: Threat Response',
  description: 'Test your ability to respond to cybersecurity threats and protect organizational assets.',
  moduleId: 2,
  totalPoints: 100,
  passingScore: 70,
  scenarios: [
    {
      id: 'scenario2-1',
      title: 'Scenario 1: Phishing Email Detection',
      description: 'You receive a suspicious email in your work inbox.',
      situation: 'An email arrives claiming to be from your bank asking you to verify your account by clicking a link and entering your credentials. The email has a generic greeting and urgent language. The sender address looks slightly different from your bank\'s usual address.',
      context: 'This is a common phishing attack attempting to steal your credentials.',
      choices: [
        {
          id: 'c2-1-a',
          text: 'Click the link and verify your account to prevent it from being locked',
          feedback: 'Incorrect! This is a classic phishing attack. Legitimate banks never ask you to verify credentials via email. Clicking the link would lead to a fake website that steals your credentials. Always go directly to the bank\'s official website.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario2-2'
        },
        {
          id: 'c2-1-b',
          text: 'Delete the email and report it as phishing to your IT department',
          feedback: 'Correct! You should delete suspicious emails and report them to IT. Legitimate organizations never ask for credentials via email. Reporting helps your IT team block similar attacks.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario2-2'
        },
        {
          id: 'c2-1-c',
          text: 'Forward the email to your friends to warn them',
          feedback: 'Incorrect. While warning others is good, forwarding phishing emails can spread the attack. Instead, report it to your IT department who can block it organization-wide.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario2-2'
        },
        {
          id: 'c2-1-d',
          text: 'Call the bank\'s official number to verify if the email is legitimate',
          feedback: 'Good thinking about verification, but not the best response. The most appropriate action is to delete the email and report it to IT. Calling the bank is unnecessary if you already suspect it\'s phishing.',
          isCorrect: false,
          points: 10,
          nextScenarioId: 'scenario2-2'
        }
      ]
    },
    {
      id: 'scenario2-2',
      title: 'Scenario 2: Ransomware Attack Response',
      description: 'Your organization discovers that files on multiple computers have been encrypted.',
      situation: 'Employees report that they cannot access their files. A ransom note appears on their screens demanding payment in cryptocurrency. The attack appears to have started on one computer and spread through the network. Your organization has backups but hasn\'t tested them recently.',
      context: 'This is a ransomware attack affecting the entire network.',
      choices: [
        {
          id: 'c2-2-a',
          text: 'Pay the ransom immediately to recover the files quickly',
          feedback: 'Incorrect. Paying ransom funds criminal activity and doesn\'t guarantee file recovery. Instead, isolate affected systems, contact law enforcement, and restore from backups if available.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario2-3'
        },
        {
          id: 'c2-2-b',
          text: 'Isolate affected systems, contact law enforcement, restore from clean backups, and investigate the infection vector',
          feedback: 'Correct! This is the proper incident response: isolate to prevent spread, involve law enforcement, restore from backups, and investigate how the attack occurred to prevent future incidents.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario2-3'
        },
        {
          id: 'c2-2-c',
          text: 'Continue working on unaffected computers and monitor the situation',
          feedback: 'Incorrect. Ransomware spreads through networks. You must isolate affected systems immediately to prevent further spread. Continuing to use the network could allow the attack to propagate.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario2-3'
        },
        {
          id: 'c2-2-d',
          text: 'Shut down all computers and wait for the ransom note to disappear',
          feedback: 'Incorrect. Shutting down computers doesn\'t remove the malware. You need to isolate systems, restore from backups, and investigate the attack.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario2-3'
        }
      ]
    },
    {
      id: 'scenario2-3',
      title: 'Scenario 3: Password Security Breach',
      description: 'You learn that an employee has been using the same password across multiple systems.',
      situation: 'During a security audit, you discover that an employee has been using the same 8-character password for their email, network login, and cloud storage for the past 3 years. The password contains only lowercase letters and numbers. You need to address this security vulnerability.',
      context: 'This represents a significant security risk if any system is compromised.',
      choices: [
        {
          id: 'c2-3-a',
          text: 'Do nothing since the employee hasn\'t been hacked yet',
          feedback: 'Incorrect. This is a serious security risk. If any system is compromised, all systems become vulnerable. You should require the employee to change to a strong, unique password immediately.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c2-3-b',
          text: 'Require the employee to change to a strong, unique password and implement multi-factor authentication',
          feedback: 'Correct! Strong, unique passwords combined with multi-factor authentication significantly reduce the risk of unauthorized access. This is the proper security response.',
          isCorrect: true,
          points: 25
        },
        {
          id: 'c2-3-c',
          text: 'Change the password for the employee without asking them',
          feedback: 'Incorrect. While you should require a password change, the employee should create their own new password. You should also educate them about password security best practices.',
          isCorrect: false,
          points: 10
        },
        {
          id: 'c2-3-d',
          text: 'Allow the employee to continue but monitor their account for suspicious activity',
          feedback: 'Incorrect. Monitoring is good, but you should not allow the security vulnerability to persist. Require immediate password changes and stronger security practices.',
          isCorrect: false,
          points: 0
        }
      ]
    }
  ]
};

// ============================================================================
// MODULE 3: AI GOVERNANCE & ETHICS - SCENARIO QUIZZES
// ============================================================================
export const module3ScenarioQuiz: ScenarioQuiz = {
  id: 'module3-scenario',
  title: 'AI Governance & Ethics: Ethical Decision Making',
  description: 'Test your understanding of ethical AI development and governance through realistic scenarios.',
  moduleId: 3,
  totalPoints: 100,
  passingScore: 70,
  scenarios: [
    {
      id: 'scenario3-1',
      title: 'Scenario 1: Biased AI Hiring System',
      description: 'Your organization is implementing an AI system to screen job applications.',
      situation: 'The AI system was trained on 10 years of historical hiring data. During testing, you discover that the system rejects qualified female candidates at twice the rate of male candidates. The system appears to have learned bias from historical hiring patterns.',
      context: 'This is an example of algorithmic bias that violates fairness principles.',
      choices: [
        {
          id: 'c3-1-a',
          text: 'Deploy the system since it reflects historical hiring practices',
          feedback: 'Incorrect. Just because historical data contains bias doesn\'t mean you should perpetuate it. This would violate fairness principles and potentially violate employment discrimination laws. You must address the bias before deployment.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario3-2'
        },
        {
          id: 'c3-1-b',
          text: 'Stop deployment, investigate the bias, retrain with balanced data, and implement fairness monitoring',
          feedback: 'Correct! This is the ethical approach. You must identify the source of bias, retrain with more balanced data, and implement ongoing monitoring to ensure fairness.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario3-2'
        },
        {
          id: 'c3-1-c',
          text: 'Deploy the system but manually review all rejections of female candidates',
          feedback: 'Incorrect. While manual review is helpful, it doesn\'t solve the underlying bias problem. You should fix the AI system itself rather than trying to work around it.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario3-2'
        },
        {
          id: 'c3-1-d',
          text: 'Adjust the system to reject more male candidates to balance the bias',
          feedback: 'Incorrect. Creating reverse bias is not the solution. The goal is to eliminate bias, not reverse it. You should retrain the system to be fair to all candidates.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario3-2'
        }
      ]
    },
    {
      id: 'scenario3-2',
      title: 'Scenario 2: Lack of AI Transparency',
      description: 'Your organization uses an AI system to make loan approval decisions.',
      situation: 'A customer is denied a loan by the AI system. When they ask why, you cannot provide a clear explanation because the AI uses a complex neural network that is difficult to interpret. The customer suspects discrimination but you cannot explain the decision.',
      context: 'This violates the transparency and accountability principles of AI ethics.',
      choices: [
        {
          id: 'c3-2-a',
          text: 'Tell the customer the decision is final and cannot be explained',
          feedback: 'Incorrect. This violates transparency and accountability principles. Customers have a right to understand decisions that affect them. You should provide explanations or use more interpretable AI models.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario3-3'
        },
        {
          id: 'c3-2-b',
          text: 'Provide a general explanation and offer a manual review process',
          feedback: 'Partially correct. While manual review is helpful, you should also work to make the AI system itself more transparent. Use explainability techniques or consider more interpretable models.',
          isCorrect: false,
          points: 10,
          nextScenarioId: 'scenario3-3'
        },
        {
          id: 'c3-2-c',
          text: 'Implement explainability techniques, provide clear explanations to customers, and offer appeals process',
          feedback: 'Correct! You should make AI decisions explainable to users, provide clear reasons for decisions, and offer a way to appeal or request manual review. This supports transparency and accountability.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario3-3'
        },
        {
          id: 'c3-2-d',
          text: 'Replace the AI system with a simpler one that makes random decisions',
          feedback: 'Incorrect. While simpler systems may be more transparent, random decisions are not fair or ethical. The solution is to make the current system more transparent, not to abandon it.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario3-3'
        }
      ]
    },
    {
      id: 'scenario3-3',
      title: 'Scenario 3: AI Privacy Concerns',
      description: 'Your organization wants to use customer data to train an AI recommendation system.',
      situation: 'You want to train an AI system on customer purchase history to provide personalized recommendations. The data includes sensitive information like health-related purchases. Customers have not explicitly consented to this use of their data.',
      context: 'This raises privacy concerns and requires proper consent and data protection.',
      choices: [
        {
          id: 'c3-3-a',
          text: 'Use the data without explicit consent since it\'s already collected',
          feedback: 'Incorrect. Just because you have data doesn\'t mean you can use it for any purpose. You need explicit consent for new uses, especially for sensitive data like health information.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c3-3-b',
          text: 'Obtain explicit consent, anonymize sensitive data, implement strong security, and allow opt-out',
          feedback: 'Correct! You should get explicit consent for new data uses, protect sensitive information through anonymization, secure the data, and allow customers to opt out. This respects privacy principles.',
          isCorrect: true,
          points: 25
        },
        {
          id: 'c3-3-c',
          text: 'Use the data but anonymize it so privacy is protected',
          feedback: 'Partially correct. Anonymization helps, but you should still get explicit consent for new uses of data. Anonymization alone doesn\'t justify using data without consent.',
          isCorrect: false,
          points: 10
        },
        {
          id: 'c3-3-d',
          text: 'Use the data but promise to delete it after training the AI',
          feedback: 'Incorrect. Deleting data after use doesn\'t address the privacy concern. You should get consent before using the data in the first place.',
          isCorrect: false,
          points: 0
        }
      ]
    }
  ]
};

// ============================================================================
// MODULE 4: DATA MANAGEMENT EXCELLENCE - SCENARIO QUIZZES
// ============================================================================
export const module4ScenarioQuiz: ScenarioQuiz = {
  id: 'module4-scenario',
  title: 'Data Management Excellence: Governance & Quality',
  description: 'Test your data governance and management skills through realistic organizational scenarios.',
  moduleId: 4,
  totalPoints: 100,
  passingScore: 70,
  scenarios: [
    {
      id: 'scenario4-1',
      title: 'Scenario 1: Data Quality Issues',
      description: 'Your organization discovers significant data quality problems in customer records.',
      situation: 'A data audit reveals that 15% of customer records have duplicate entries, 8% have incomplete addresses, and 5% have conflicting information across systems. This is affecting customer communications and billing accuracy.',
      context: 'Poor data quality impacts business operations and customer satisfaction.',
      choices: [
        {
          id: 'c4-1-a',
          text: 'Ignore the issues since they affect only a small percentage of records',
          feedback: 'Incorrect. Even small percentages of bad data can have significant business impacts. With thousands of customers, 15% duplication is substantial. You should implement data quality improvement initiatives.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-2'
        },
        {
          id: 'c4-1-b',
          text: 'Implement data quality standards, cleanse existing data, and establish validation rules',
          feedback: 'Correct! You should establish quality standards, clean up existing data, and implement validation to prevent future issues. This is proper data governance.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario4-2'
        },
        {
          id: 'c4-1-c',
          text: 'Delete all records with quality issues to ensure remaining data is clean',
          feedback: 'Incorrect. Deleting customer records is not a solution and could harm business relationships. Instead, you should cleanse and correct the data.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-2'
        },
        {
          id: 'c4-1-d',
          text: 'Ask customers to resubmit their information to verify accuracy',
          feedback: 'Incorrect. While customer verification can help, it\'s not efficient for 15% of records. You should implement automated data quality tools and processes.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-2'
        }
      ]
    },
    {
      id: 'scenario4-2',
      title: 'Scenario 2: Data Access Control',
      description: 'An employee from the marketing department requests access to customer financial data.',
      situation: 'A marketing analyst requests access to customer financial transaction data to improve targeting. They claim they need this data to understand customer spending patterns. However, their job description doesn\'t require access to financial data.',
      context: 'This violates the principle of least privilege in data governance.',
      choices: [
        {
          id: 'c4-2-a',
          text: 'Grant access since the employee is requesting it',
          feedback: 'Incorrect. You should follow the principle of least privilege: only grant access to data necessary for job functions. Marketing doesn\'t need raw financial data. Provide aggregated insights instead.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-3'
        },
        {
          id: 'c4-2-b',
          text: 'Deny access and provide aggregated spending insights instead',
          feedback: 'Correct! Follow the principle of least privilege. The employee doesn\'t need raw financial data. Provide aggregated, anonymized insights that meet their business needs without exposing sensitive data.',
          isCorrect: true,
          points: 25,
          nextScenarioId: 'scenario4-3'
        },
        {
          id: 'c4-2-c',
          text: 'Grant access but monitor their activity closely',
          feedback: 'Incorrect. Monitoring doesn\'t prevent unauthorized access. The better approach is to deny unnecessary access and provide appropriate alternatives.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-3'
        },
        {
          id: 'c4-2-d',
          text: 'Grant access but require them to sign a confidentiality agreement',
          feedback: 'Incorrect. A confidentiality agreement doesn\'t address the access control issue. You should deny unnecessary access rather than relying on agreements to prevent misuse.',
          isCorrect: false,
          points: 0,
          nextScenarioId: 'scenario4-3'
        }
      ]
    },
    {
      id: 'scenario4-3',
      title: 'Scenario 3: Data Retention Policy',
      description: 'Your organization is reviewing its data retention policies.',
      situation: 'You discover that customer support records are being kept indefinitely, even after customers have closed their accounts and requested data deletion. Some records are 10+ years old. Storage costs are increasing, and you\'re concerned about privacy and compliance.',
      context: 'Data retention policies should balance business needs with privacy and legal requirements.',
      choices: [
        {
          id: 'c4-3-a',
          text: 'Keep all data indefinitely for potential legal disputes',
          feedback: 'Incorrect. Keeping data indefinitely increases privacy risks and storage costs. You should establish retention periods based on legal requirements and business needs, then securely delete data when no longer needed.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c4-3-b',
          text: 'Establish retention periods based on legal requirements and business needs, then securely delete old data',
          feedback: 'Correct! Establish clear retention policies, keep data only as long as necessary, and securely dispose of data when retention periods expire. This balances business needs with privacy.',
          isCorrect: true,
          points: 25
        },
        {
          id: 'c4-3-c',
          text: 'Delete all data immediately to minimize privacy risks',
          feedback: 'Incorrect. Deleting all data immediately could violate legal requirements and harm business operations. You should establish appropriate retention periods based on legal and business requirements.',
          isCorrect: false,
          points: 0
        },
        {
          id: 'c4-3-d',
          text: 'Move old data to archive storage but never delete it',
          feedback: 'Incorrect. Archiving is a temporary solution, but you should eventually delete data when retention periods expire. Keeping data indefinitely increases privacy and security risks.',
          isCorrect: false,
          points: 0
        }
      ]
    }
  ]
};

// ============================================================================
// SCENARIO QUIZ REGISTRY
// ============================================================================
export const scenarioQuizzes: { [key: number]: ScenarioQuiz } = {
  1: module1ScenarioQuiz,
  2: module2ScenarioQuiz,
  3: module3ScenarioQuiz,
  4: module4ScenarioQuiz
};

export function getScenarioQuiz(moduleId: number): ScenarioQuiz | undefined {
  return scenarioQuizzes[moduleId];
}
