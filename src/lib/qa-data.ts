export interface QAItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
}

export const qaData: QAItem[] = [
  {
    id: 1,
    category: "Leasing",
    question: "What documents do I need to apply for a rental?",
    answer: "To apply for a rental property, you'll need: Valid government-issued ID, proof of income (last 3 pay stubs or offer letter), rental history, and references. We also require a completed rental application form and application fee.",
    keywords: ["documents", "apply", "rental", "application"]
  },
  {
    id: 2,
    category: "Leasing",
    question: "How long does the application process take?",
    answer: "The typical application process takes 24-48 business hours. This includes background checks, credit checks, and verification of employment and rental history.",
    keywords: ["how long", "application", "process", "time"]
  },
  {
    id: 3,
    category: "Maintenance",
    question: "How do I submit a maintenance request or work order?",
    answer: "There are three ways to submit a maintenance request:\n1. Log into your resident portal and submit the request online\n2. Call our maintenance hotline at 1-800-CAROUSEL\n3. Email maintenance@carousel.com with details of the issue\n\nFor emergency maintenance issues, always call the 24/7 hotline.",
    keywords: ["maintenance", "request", "work order", "repair", "fix", "broken"]
  },
  {
    id: 4,
    category: "Payments",
    question: "What payment methods do you accept for rent?",
    answer: "We accept various payment methods including: Online payments through the resident portal (ACH transfer), credit/debit cards, and electronic checks. Cash payments are not accepted.",
    keywords: ["payment", "rent", "pay", "methods"]
  },
  {
    id: 5,
    category: "Property Management",
    question: "What services do you offer to property owners?",
    answer: "We offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, property marketing, financial reporting, and 24/7 emergency response.",
    keywords: ["services", "property", "management", "owners"]
  },
  {
    id: 6,
    category: "Leasing",
    question: "What is the typical lease term?",
    answer: "Our standard lease term is 12 months, but we may offer 6-month or month-to-month options depending on the property and circumstances.",
    keywords: ["lease", "term", "length", "duration"]
  },
  {
    id: 7,
    category: "Maintenance",
    question: "What qualifies as an emergency maintenance issue?",
    answer: "Emergency maintenance issues include: No heat in winter, no AC in summer, water leaks, electrical problems, gas leaks, or any situation that poses an immediate safety risk.",
    keywords: ["emergency", "maintenance", "urgent", "immediate"]
  },
  {
    id: 8,
    category: "Maintenance",
    question: "How long does it take to complete a maintenance request?",
    answer: "Standard maintenance requests are typically addressed within 24-48 hours. Emergency issues are handled immediately. After submitting your request, you'll receive an email confirmation with an estimated completion time.",
    keywords: ["maintenance", "time", "complete", "finish", "duration"]
  },
  {
    id: 9,
    category: "Payments",
    question: "When is rent due?",
    answer: "Rent is due on the 1st of each month. A grace period extends to the 5th, after which late fees may apply.",
    keywords: ["rent", "due", "date", "when", "payment"]
  }
];