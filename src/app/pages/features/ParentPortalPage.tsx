import { Eye, Smartphone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ParentPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Eye className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Parent Portal</h1>
              <p className="text-gray-600">Parents have dedicated portal access to view their child's information</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581820885466-9c80e319b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NzAxNDgzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Parent using mobile app"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Parent Portal Features */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Eye className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Parent Portal Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Mobile App Access Code</h3>
              <p className="text-gray-600">
                View unique mobile app access code with convenient copy button
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Children Profiles</h3>
              <p className="text-gray-600">
                See all linked children with photos and basic information
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Attendance History</h3>
              <p className="text-gray-600">
                Track attendance history by month with check-in/check-out times
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Daily Activities</h3>
              <p className="text-gray-600">
                View bathroom times, naps, mood, and teacher notes for each day
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Activity Photos</h3>
              <p className="text-gray-600">
                Browse activity photos from the last 30 days with captions
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Invoices & Payments</h3>
              <p className="text-gray-600">
                Review invoices and payment status for financial transparency
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Classroom Assignment</h3>
              <p className="text-gray-600">
                Check which classroom and teacher is assigned to their child
              </p>
            </div>
          </div>
        </div>

        {/* Mobile App Access */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Smartphone className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Mobile App Access</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Parents receive unique 8-character code when account is created</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Code displayed prominently in parent portal dashboard</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Copy code with one click to share with parents</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Use code to log into mobile app for on-the-go access</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}