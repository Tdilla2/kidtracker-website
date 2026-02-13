import { FileText, Clipboard } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import invoicingImage from '@/assets/d99a20aa1981bbc972599862a632ac70c2fbc0a1.png';

export function InvoicingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Invoicing System</h1>
              <p className="text-gray-600">Create and manage invoices with automatic recurring charges</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1693045181254-08462917f681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwZG9jdW1lbnQlMjBwYXBlciUyMHRlbXBsYXRlfGVufDF8fHx8MTc3MDE1MTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Invoice billing"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Invoicing Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={invoicingImage}
            alt="Invoicing System Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Managing Invoices & Invoice Features */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Clipboard className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Managing Invoices</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Filter & Search</h3>
              <p className="text-gray-600">
                Filter by status (All, Pending, Paid, Overdue) and search by child or invoice number
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Payment Tracking</h3>
              <p className="text-gray-600">
                Mark invoices as paid and view complete payment history
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-900">Invoice Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Auto-generated invoice numbers</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Recurring charges from child profiles</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Custom line items for flexibility</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Due date tracking</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Payment date recording</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Status indicators (Pending, Paid, Overdue)</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">System auto-carries forward unpaid recurring charges</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}