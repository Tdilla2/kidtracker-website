import { Users, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import childManagementImage from '@/assets/78cd627ca77d916a9b7d31c1e0749d997cc453b4.png';

export function ChildrenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Managing Children</h1>
              <p className="text-gray-600">Add and manage children enrolled in your daycare</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1680762662839-46b6d050b2c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBkYXljYXJlfGVufDF8fHx8MTc3MDE0ODMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Children playing at daycare"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Child Management Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={childManagementImage}
            alt="Child Management Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Viewing Child Details */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Eye className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Viewing Child Details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Profile Information</h3>
              <p className="text-gray-600">
                Includes photo, basic info, and medical notes for quick reference
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Classroom Assignment</h3>
              <p className="text-gray-600">
                See which classroom the child is assigned to and their teacher
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Recurring Charges</h3>
              <p className="text-gray-600">
                View all recurring charges associated with this child for invoicing
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Emergency Contacts</h3>
              <p className="text-gray-600">
                Check emergency contacts and authorized pickup persons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}