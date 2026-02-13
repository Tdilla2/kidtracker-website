import { Blocks, RefreshCw, DollarSign, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import quickbooksImage from '@/assets/c589d9efd137482e142090bb0e29bf9e986a66f0.png';

export function QuickBooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Blocks className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">QuickBooks Integration</h1>
              <p className="text-gray-600">Seamlessly sync your financial data with QuickBooks</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1553484771-0a615f264d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwc29mdHdhcmUlMjBjb21wdXRlcnxlbnwxfHx8fDE3NzAxNDgzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Accounting software"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* QuickBooks Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={quickbooksImage}
            alt="QuickBooks Integration Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Sync Overview */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <RefreshCw className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Automatic Data Sync</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Invoice Export</h3>
              <p className="text-gray-600">
                Automatically export all invoices to QuickBooks with complete line-item details and customer information
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Payment Tracking</h3>
              <p className="text-gray-600">
                Sync payment records instantly to keep your QuickBooks accounts receivable up to date
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Expense Management</h3>
              <p className="text-gray-600">
                Export daycare expenses directly to QuickBooks for accurate profit and loss reporting
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Customer Sync</h3>
              <p className="text-gray-600">
                Parent and child information automatically creates and updates customer records in QuickBooks
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <DollarSign className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Streamlined Accounting</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Eliminate manual data entry and reduce accounting errors</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Real-time financial data for accurate business insights</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Save hours each month on bookkeeping tasks</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Maintain consistent financial records across both platforms</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Simplified tax preparation with organized financial data</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}