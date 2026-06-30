import { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://roofing.topdoglead.com";

export const metadata: Metadata = {
  title: "Privacy Policy ",
  description: "Learn how TopDog Roofing collects, uses, shares, and protects your personal information when you request quotes, schedule inspections, or use our roofing services.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "information-collect",
    title: "1. Information We Collect",
    body: [
      "We collect information you provide directly to us, such as when you request a quote, schedule an inspection, or contact us for service inquiries. This includes your name, phone number, email address, home address, and roofing project details.",
      "We automatically collect certain information about your device and how you interact with our site, including IP address, browser type, pages visited, and referral sources through cookies and similar tracking technologies.",
      "We may collect photos or video documentation of your roof during inspections or estimates.",
    ],
  },
  {
    id: "use-information",
    title: "2. How We Use Your Information",
    body: [
      "To provide and improve our roofing services, respond to inquiries, schedule appointments, and send service-related communications.",
      "To comply with applicable laws, regulations, and industry standards for roofing contractors.",
      "To send promotional materials and updates about our services (you can opt out anytime).",
      "To prevent fraud, protect liability, and resolve disputes.",
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    body: [
      "We do not sell or share your personal information with unrelated third parties.",
      "We may share information with service providers (insurance companies, payment processors) who assist us under confidentiality agreements.",
      "We may disclose information when required by law or to protect our legal rights.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    body: [
      "Our website uses cookies and similar technologies to improve functionality and track site performance. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    id: "security",
    title: "5. Data Security",
    body: [
      "We implement reasonable physical, technical, and administrative safeguards to protect your information. However, no system is completely secure.",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: [
      "We retain your information as long as necessary to provide services, comply with legal obligations, and resolve disputes.",
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, or delete your personal information. Contact us to exercise these rights.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact Us",
    body: [
      "If you have questions about this Privacy Policy, contact us:",
      "TopDog Roofing",
      "Email: support@topdoglead.com",
      "Phone: +1 866 964 4568",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white mt-24">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-sm max-w-none mb-12 text-gray-700 leading-relaxed">
          <p>
            TopDog Roofing ("we," "us," or "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, share, and protect information
            when you visit <strong>roofing.topdoglead.com</strong> or use our roofing services.
          </p>
        </div>

        {/* TABLE OF CONTENTS */}
        <nav className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-3">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* CONTENT */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.id} id={s.id}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline font-medium text-sm">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}