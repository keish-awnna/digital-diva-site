export const disclaimers = {
  general: "Digital Diva Academy By Vee™ is an educational platform. We provide general information and educational resources. We are not attorneys, a law firm, or a credit repair organization. We do not provide legal advice, legal representation, or financial advice.",
  legalEducation: "Our legal empowerment resources are for educational purposes only. Self-represented litigants should consult with a qualified attorney for specific legal advice regarding their individual situation.",
  creditEducation: "Our credit education services are focused on self-sufficiency and DIY knowledge. We do not provide credit repair services or communicate with credit bureaus on behalf of clients.",
  noGuarantee: "Past educational results do not guarantee future outcomes. Individual success depends on various factors including personal effort and specific case circumstances.",
} as const;

export type Disclaimers = typeof disclaimers;
