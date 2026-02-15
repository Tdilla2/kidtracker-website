import { Shield, Lock, Eye, UserCheck, Server, Bell } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy matters. Here's how we protect your data.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: February 14, 2026</p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              GDI Digital Solutions ("we," "our," or "us") operates KidTrackerApp™. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our daycare management platform. We are committed to protecting the privacy and security of all users, including daycare providers, staff, and parents.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, phone number, and organization details when you register for an account.</li>
                <li><strong>Child Information:</strong> Names, dates of birth, emergency contacts, allergies, medical notes, and other information necessary for childcare management.</li>
                <li><strong>Attendance & Activity Data:</strong> Check-in/check-out times, daily activities, meal records, and other operational data entered into the platform.</li>
                <li><strong>Financial Information:</strong> Billing details and payment information processed through our secure payment systems.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including log data, device information, and browser type.</li>
                <li><strong>Communications:</strong> Messages sent through our contact form or support channels.</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve the KidTrackerApp™ platform</li>
                <li>Process transactions and manage billing</li>
                <li>Communicate with you about your account, updates, and support requests</li>
                <li>Ensure the safety and well-being of children in care</li>
                <li>Generate reports and analytics for daycare operations</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>
          </section>

          {/* We Do Not Sell Your Data */}
          <section className="bg-blue-600 rounded-xl p-8 shadow-md text-white">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 mr-3" />
              <h2 className="text-2xl font-bold">We Do Not Sell Your Data</h2>
            </div>
            <p className="leading-relaxed text-lg">
              We will <strong>never</strong> sell, rent, trade, or otherwise share your personal information or the personal information of any child with third parties for marketing or advertising purposes. Your data is used solely to provide and improve our services. Period.
            </p>
          </section>

          {/* Data Security & Encryption */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security & Encryption</h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                We take the security of your data seriously. All data is protected using industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using TLS (Transport Layer Security), ensuring your information cannot be intercepted during transmission.</li>
                <li><strong>Encryption at Rest:</strong> All data stored on our servers is encrypted at rest using AES-256 encryption, one of the strongest encryption standards available.</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication measures are in place to ensure only authorized users can access sensitive information.</li>
                <li><strong>Regular Security Audits:</strong> We regularly review and update our security practices to protect against emerging threats.</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Server className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Third Parties</h2>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>We may share your information only in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our platform (e.g., cloud hosting, payment processing), bound by strict confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
                <li><strong>Safety:</strong> When necessary to protect the safety, rights, or property of our users, children, or the public.</li>
                <li><strong>With Your Consent:</strong> When you have given explicit permission to share specific information.</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. When data is no longer needed, it is securely deleted or anonymized. You may request deletion of your account and associated data at any time by contacting us.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format.</li>
                <li><strong>Opt-Out:</strong> Opt out of non-essential communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:support@gdidigitalsolutions.com" className="text-blue-600 hover:underline">
                  support@gdidigitalsolutions.com
                </a>.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              KidTrackerApp™ is designed for use by daycare providers and parents. Information about children is collected solely for the purpose of childcare management and is entered by authorized adults (daycare staff and parents). We do not knowingly collect information directly from children. All child-related data is subject to the same encryption and security protections described in this policy.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Changes to This Policy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p className="font-semibold">GDI Digital Solutions</p>
              <p>
                Email:{' '}
                <a href="mailto:info@gdidigitalsolutions.com" className="text-blue-600 hover:underline">
                  info@gdidigitalsolutions.com
                </a>
              </p>
              <p>
                Support:{' '}
                <a href="mailto:support@gdidigitalsolutions.com" className="text-blue-600 hover:underline">
                  support@gdidigitalsolutions.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
