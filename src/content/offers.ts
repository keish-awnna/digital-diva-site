import { Offer } from "@/types";

export const offers: Offer[] = [
  {
    id: "legal-foundations",
    name: "Legal Empowerment Foundations",
    category: "legal",
    price: "$197",
    shortDescription:
      "Master the basics of representing yourself in court with confidence.",
    deliverables: [
      "Court Procedure Guide",
      "Document Checklist",
      "Video Workshop",
    ],
    ctaLabel: "Enroll Now",
    featured: true,
  },
  {
    id: "credit-blueprint",
    name: "Credit Restoration Blueprint",
    category: "credit",
    price: "$147",
    shortDescription:
      "A step-by-step DIY guide to understanding and improving your credit report.",
    deliverables: [
      "Report Analysis Tool",
      "Dispute Templates",
      "Financial Tracking Sheet",
    ],
    ctaLabel: "Start Today",
  },
];
