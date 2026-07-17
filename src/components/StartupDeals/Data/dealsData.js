import claudeImage from "../assets/claude.png";

/**
 * Deal catalog — deal information only.
 * Linked to startups via startupId (see startupsData.js).
 */
export const dealsData = [
  {
    id: "claude",
    startupId: "genzdealz",
    startupName: "Claude",
    title: "Claude AI Token Top-up",
    shortDescription:
      "Top up tokens to keep chatting with Claude — Haiku, Sonnet, and Opus plans via GenZDealZ.",
    fullDescription:
      "Access Anthropic's Claude through GenZDealZ and top up tokens to continue chatting. Choose from Starter (₹50), Standard (₹75), or Pro (₹100) plans with Haiku, Sonnet, and Opus token allocations. Free tier included (50K Haiku · 10K Sonnet · 1K Opus per user); purchased plans stack on top. Pay securely via Cashfree with UPI, cards, net banking, or wallets.",
    image: claudeImage,
    claimSteps: [
      "Step 1 — Open Claude Chat: Visit https://genzdealz.ai/claude in your browser.",
      "Step 2 — Click the Buy Button: In the top-right corner, click the Buy button. A plan selection modal will appear showing your current token balance.",
      "Step 3 — Select a Plan: Choose the plan that best fits your needs.",
      "Step 4 — Complete Payment: Click the Pay ₹50 → button. You will be redirected to the Cashfree secure payment page.",
      "Accepted payment methods: UPI (Google Pay, PhonePe, Paytm, any UPI app); Debit / Credit Card; Net Banking; Wallets.",
      "Step 5 — Payment Confirmation: Once payment is complete, a 'Paid Successfully' message will be displayed on your screen.",
      "Step 6 — Tokens Credited Automatically: After successful payment, tokens are credited to your account instantly. Your updated balance will appear in the top-right corner of the chat.",
    ],
    buttonText: "Claim Deal",
  },
];

export default dealsData;
