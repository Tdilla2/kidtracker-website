import { Mail, Lightbulb, CheckCircle, HelpCircle, MessageCircle } from 'lucide-react';

export function SupportPage() {
  const tips = [
    'Regularly back up your data',
    'Update child information when changes occur',
    'Record attendance daily for accurate tracking',
    'Create invoices at the beginning of each month',
    'Review financial reports monthly',
    'Keep emergency contacts up to date',
    'Upload activity photos to engage parents',
    'Use teacher notes to communicate with parents',
    'Assign children to appropriate classrooms',
    'Monitor classroom capacity limits',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <HelpCircle className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Support</h1>
              <p className="text-gray-600">We're here to help you succeed with KID-TRACKER™</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <MessageCircle className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Contact Support</h2>
          </div>

          <p className="text-white mb-6">
            For technical support or questions, our team is ready to assist you:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">General Inquiries</h3>
                  <a href="mailto:info@gdidigitalsolutions.com" className="text-blue-600 hover:underline">info@gdidigitalsolutions.com</a>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Send us an email and we'll respond within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Email Support</h3>
                  <a href="mailto:support@gdidigitalsolutions.com" className="text-blue-600 hover:underline">support@gdidigitalsolutions.com</a>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                For technical support or account issues
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Business Hours:</strong> Monday - Friday, 9AM - 6PM | Weekend: By Appointment
            </p>
          </div>
        </div>

        {/* Tips & Best Practices */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Tips & Best Practices</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}