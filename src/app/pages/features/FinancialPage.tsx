import { DollarSign, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import financialsImage from '@/assets/acdab9c26e20ff2e394a7738af44229ad79aaf46.png';

export function FinancialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <DollarSign className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Financial Management</h1>
              <p className="text-gray-600">Monitor revenue, expenses, and financial health</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBudW1iZXJzJTIwc3ByZWFkc2hlZXR8ZW58MXx8fHwxNzcwMTUxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Financial management"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Financial Management Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={financialsImage}
            alt="Financial Management Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Tracking Revenue */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Tracking Revenue</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Revenue by Month</h3>
              <p className="text-gray-600">
                Visual chart showing monthly revenue trends over time
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Revenue by Child</h3>
              <p className="text-gray-600">
                Breakdown of revenue generated per child for detailed analysis
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Payment Status</h3>
              <p className="text-gray-600">
                Overview of paid vs pending payments for cash flow management
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Export Reports</h3>
              <p className="text-gray-600">
                Export financial reports for accounting and tax purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}