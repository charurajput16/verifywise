export const DataGovernance = [
  {
    id: 1,
    title: "Responsibilities along the AI value chain",
    questions: [
      {
        id: 1,
        question:
          "What risks have been identified associated with the chosen deployment and serving strategies? How have these risks been prioritized?",
        hint: "Give a break down of the risk mitigation strategies that you have detected in the due dilgience proess and how your contractual and organziational masures were implemented",
        priorityLevel: "medium priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 2,
        question:
          "What measures are in place to detect undesired behavior in our AI solution, including logging and responding to such behavior?",
        hint: "Describe your efforts around continuous monitoring for AI safety risks, with robust logging mechanisms that enable accountable implementation practices throughout the AI lifecycle.",
        priorityLevel: "medium priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 3,
        question:
          "How can any unforeseen effects be mitigated after deployment of the AI application?",
        hint: "Make sure that proactively conceptualize and start risk mitigation before depoyment, and after deploying the high risk ain system your organization and the AI provier monitor for new risks ",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 4,
        question:
          "What is the possible harmful effect of uncertainty and error margins for different groups? How is this being addressed?",
        hint: "Describe how your organization proactively conceptualize risk mitigation strategies before deployment and after deployment to collaborate with the AI provider to monitor for emerging risks.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 5,
        question:
          "What mechanisms are in place for reporting serious incidents and certain risks to both the relevant authorities and other stakeholders?",
        hint: "Describe the contractual commitments and incident management obligations of both the AI provider and your organization, detailing responsibilities for reporting incidents.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 6,
        question:
          "What risks have been identified associated with potentially decommissioning the AI system? How might these risks impact users, the organization, or other stakeholders?",
        hint: "Describe your decommissioning process for the high-risk AI system, considering issues with training data, model repositories, and the sensitivity of the use case, such as data types and availability.",
        priorityLevel: "medium priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 7,
        question:
          "What data sources are being used to develop the AI application? Describe the input and output data, and explain how this data is documented and managed.",
        hint: "Explain the origins of the training dataset, its attributes, data types, categories, IP rights, and volume. Include metadata and data collection processes, such as web scraping or surveys. Detail the IP rights of the datasets, demonstrating lawful use of training data.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 8,
        question:
          "Does the repository track and manage intellectual property rights and restrictions on the use of its content as required by deposit agreements, contracts, or licenses?",
        hint: "Describe your findings on data quality, completeness, and balance, using the provider's documentation as a starting point. Discuss issues such as missing data, outliers, and unbalanced classes.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
    ],
  },
  {
    id: 2,
    title: "Fundamental rights impact assessments for high-risk AI systems",
    questions: [
      {
        id: 1,
        question:
          "How has your organization ensured the representativeness, relevance, accuracy, traceability, and completeness of the data used in development? What challenges were encountered in this process?",
        hint: "Explain the origins of the training dataset, its attributes, data types, categories, IP rights, and volume. Include metadata and data collection processes, such as web scraping or surveys. Detail the IP rights of the datasets, demonstrating lawful use of training data.",
        priorityLevel: "medium priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 2,
        question:
          "Provide details of the confidential and sensitive data processed by the AI system. Does it handle personal data?",
        hint: "Detail the datasets processed, specifying the sensitive and personal data involved, how they are collected, and the purposes of processing.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 3,
        question:
          "What are the legal bases for processing personal and sensitive data. What measures are in place to ensure that the processing logic remains consistent with the original purpose for which consent was obtained, and that data is deleted after the stipulated period?",
        hint: "Detail the datasets processed, specifying the sensitive and personal data involved, how they are collected, and the purposes of processing.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 4,
        question:
          "Describe the measures in place to ensure that the AI system does not leak private or sensitive data, especially in the context of adversarial attacks.",
        hint: "Detail the AI provider's safety frameworks and add any organizational measures implemented to prevent data leaks.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 5,
        question:
          "How has legal compliance with respect to data protection (e.g., GDPR) been assessed and ensured? What protected attributes have been identified and how are they handled?",
        hint: "Summarize your privacy impact assessment to demonstrate legal compliance with GDPR and provide links to supporting documents.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 6,
        question:
          "Provide details of the measures in place to comply with data subject requests, including those related to access, objection, deletion, and other rights.",
        hint: "Describe the high-risk AI system’s mechanisms for handling data subject requests, such as access, objection, and deletion, ensuring compliance within a 30-day timeframe.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 7,
        question:
          "Has the organization determined how the privacy of those involved is protected? What specific measures are in place?",
        hint: "Describe the privacy risks and how they are mitigated through organizational and technical measures, complementing the AI provider's safeguards.",
        priorityLevel: "high priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
      {
        id: 8,
        question:
          "Can the user delete their data from the system? If so, how, and if not, why not?",
        hint: "Explain how the right to deletion is exercised by end users interacting with the AI system across your organization’s systems, the AI provider’s systems, and other lifecycle actors.",
        priorityLevel: "medium priority",
        answerType: "Long text",
        inputType: "Tiptap area",
        evidenceFile: "Not required",
      },
    ],
  },
];
