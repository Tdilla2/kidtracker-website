import { LayoutDashboard, CheckCircle } from 'lucide-react';

export function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Overview</h1>
          <p className="text-xl text-gray-600">
            Welcome to KID-TRACKER™, your complete daycare management solution!
          </p>
        </div>

        {/* Dashboard Overview Section */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
              <LayoutDashboard className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Key Statistics</h3>
              <p className="text-gray-600">
                View all your important metrics at a glance - from attendance numbers to financial summaries.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Today Attendance</h3>
              <p className="text-gray-600">
                See real-time attendance overview showing who is checked in and who is absent today.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Quick Actions</h3>
              <p className="text-gray-600">
                Access frequently used features quickly with dedicated action buttons on your dashboard.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Financial Summaries</h3>
              <p className="text-gray-600">
                Review your daycare financial health with monthly revenue, expenses, and pending payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}