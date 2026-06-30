import { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://roofing.topdoglead.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read TopDog Roofing's Terms of Service covering payments, warranties, liability, licensing, and policies for our roof repair and replacement services.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    body: [
      "By accessing and using this website and our roofing services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    ],
  },
  {
    id: "services",
    title: "2. Services Description",
    body: [
      "TopDog Roofing provides roofing repair, replacement, inspection, and related services. All quotes and estimates are subject to on-site verification. Final costs may vary based on actual conditions discovered during project execution.",
      "We reserve the right to refuse service or cancel any project at our discretion.",
    ],
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    body: [
      "Payment terms, deposit requirements, and financing options will be outlined in your individual service agreement.",
      "Payments must be made by the agreed-upon due date. Late payments may incur additional charges as specified in your contract.",
    ],
  },
  {
    id: "warranty",
    title: "4. Warranty Disclaimer",
    body: [
      "TopDog Roofing warrants that workmanship on roofing projects meets industry standards. Specific warranty terms depend on materials used and will be detailed in your service contract.",
      "Material manufacturer warranties are the responsibility of the material supplier. We are not liable for defects in supplied materials beyond our control.",
    ],
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    body: [
      "TopDog Roofing maintains comprehensive liability and workers' compensation insurance. You agree to hold harmless TopDog Roofing from claims arising from your negligence or misuse of information provided.",
      "In no event shall TopDog Roofing be liable for indirect, incidental, or consequential damages arising from the use of our website or services.",
    ],
  },
  {
    id: "insurance",
    title: "6. Insurance & Licensing",
    body: [
      "TopDog Roofing is fully licensed and insured as required by state and local regulations. Proof of insurance is available upon request.",
      "Clients are responsible for providing their own homeowners insurance coverage for their property.",
    ],
  },
  {
    id: "intellectual",
    title: "7. Intellectual Property",
    body: [
      "All content on this website (text, graphics, logos) is owned by or licensed to TopDog Roofing. Unauthorized use is prohibited.",
    ],
  },
  {
    id: "user-conduct",
    title: "8. User Conduct",
    body: [
      "You agree not to use this website for unlawful purposes, harassment, or posting false/misleading information about our services.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the United States and applicable state laws where services are provided.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    body: [
      "We may update these terms at any time. Continued use of the website constitutes acceptance of updated terms.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    body: [
      "For questions about these Terms of Service, contact us:",
      "TopDog Roofing",
      "Email: support@topdoglead.com",
      "Phone: +1 866 964 4568",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white mt-24">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-sm max-w-none mb-12 text-gray-700 leading-relaxed">
          <p>
            Welcome to TopDog Roofing. Please read these Terms of Service carefully before
            using our website or engaging our roofing services. By accessing this site and
            our services, you agree to these terms.
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