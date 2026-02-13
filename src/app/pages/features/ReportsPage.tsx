import { BarChart3, FileDown } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import reportsImage from '@/assets/05cf6b35248b5308a0a611c2f25870a239f87298.png';

export function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <BarChart3 className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-600">Generate detailed reports for attendance and financials</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDA3OTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Data analytics dashboard"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Reports Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={reportsImage}
            alt="Reports & Analytics Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Report Features */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <FileDown className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Report Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Customizable Date Ranges</h3>
              <p className="text-gray-600">
                Select any date range to generate reports for specific time periods
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Advanced Filtering</h3>
              <p className="text-gray-600">
                Filter by child, classroom, or category for detailed analysis
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Visual Charts & Graphs</h3>
              <p className="text-gray-600">
                View data in visual formats for easier understanding and presentation
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Multiple Export Options</h3>
              <p className="text-gray-600">
                Export to PDF, CSV, Excel, and print-friendly formats
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}