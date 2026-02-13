import { Building, Info, Clock, Image, Shield } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Building className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Company Information</h1>
              <p className="text-gray-600">Manage your daycare center's information and settings (Admin only)</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1707823945934-bd0e46f4a612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDE0MDUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business office"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Company Information Sections */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Company Settings</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Info className="text-blue-600 mr-2" size={24} />
                <h3 className="font-semibold text-lg text-gray-900">Business Information</h3>
              </div>
              <p className="text-gray-600">
                Company name, address, phone, email, and contact details
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Clock className="text-blue-600 mr-2" size={24} />
                <h3 className="font-semibold text-lg text-gray-900">Operating Hours</h3>
              </div>
              <p className="text-gray-600">
                Set your daycare's hours of operation for each day
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="text-blue-600 mr-2" size={24} />
                <h3 className="font-semibold text-lg text-gray-900">License Information</h3>
              </div>
              <p className="text-gray-600">
                Daycare license number and expiration date
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Image className="text-blue-600 mr-2" size={24} />
                <h3 className="font-semibold text-lg text-gray-900">Company Logo</h3>
              </div>
              <p className="text-gray-600">
                Upload and manage your company logo for branding
              </p>
            </div>
          </div>
        </div>

        {/* Logo Management */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Image className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Logo Management</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Upload company logo for branding across the system</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Logo appears in header across all screens</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Recommended size: 200x200px for optimal display</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}