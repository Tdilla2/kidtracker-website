import { UserCog, Shield, Smartphone, Key } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import userManagementImage from '@/assets/20a584f2b120ec6016f5309130e051d93109ce28.png';

export function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <UserCog className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">User Management</h1>
              <p className="text-gray-600">Create and manage staff and parent accounts (Admin only)</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1729551610680-c6ea05b08937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWFuYWdlbWVudCUyMHN0YWZmfGVufDF8fHx8MTc3MDE0ODMyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team management"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* User Management Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={userManagementImage}
            alt="User Management Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* User Roles */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">User Roles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Admin</h3>
              <p className="text-gray-600 mb-3">Full system access including:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• User management</li>
                <li>• Company settings</li>
                <li>• All features access</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">User (Staff)</h3>
              <p className="text-gray-600 mb-3">Access to:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Attendance tracking</li>
                <li>• Invoicing</li>
                <li>• Meal menu</li>
                <li>• Daily activities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Parent</h3>
              <p className="text-gray-600 mb-3">View-only portal for:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Their children only</li>
                <li>• Activities & photos</li>
                <li>• Invoices</li>
                <li>• Attendance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parent Account Features */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Smartphone className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Parent Account Features</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">System generates unique 8-character mobile app code automatically</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Link parents to children via child profiles</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Parents see code in their portal with convenient copy button</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Mobile app code is for mobile app access only</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Parents log in with username/password (web) or mobile code (mobile app)</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Managing Users */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Key className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Managing Users</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Edit User Information</h3>
              <p className="text-gray-600">
                Update user details, roles, and contact information as needed
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Reset Passwords</h3>
              <p className="text-gray-600">
                Securely reset user passwords when requested
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Deactivate Accounts</h3>
              <p className="text-gray-600">
                Disable user accounts when staff leaves or children unenroll
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">View Last Login</h3>
              <p className="text-gray-600">
                Track user activity with last login timestamps
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Copy Mobile Codes</h3>
              <p className="text-gray-600">
                Easily copy parent mobile app codes to share with parents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}