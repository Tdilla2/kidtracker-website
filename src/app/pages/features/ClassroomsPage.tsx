import { Building2, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import classroomsImage from '@/assets/08e5177e2c99cc4eb68f0f7bc6c6872993d17e48.png';

export function ClassroomsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Building2 className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Classrooms Management</h1>
              <p className="text-gray-600">Organize children into classrooms with assigned teachers</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1631885661099-343c346e7643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWFybmluZyUyMHNwYWNlfGVufDF8fHx8MTc3MDE0ODMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Classroom learning space"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Classrooms Management Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={classroomsImage}
            alt="Classrooms Management Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Assigning Children */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Assigning Children</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Children are assigned through 'Classrooms'</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Edit child profile and select classroom from dropdown</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">View classroom roster in Classrooms tab</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Monitoring Capacity */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Monitoring Capacity</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Capacity Indicators</h3>
              <p className="text-gray-600">
                Each classroom shows current/max capacity with visual indicators
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Color Coding</h3>
              <p className="text-gray-600">
                Color-coded capacity indicators make it easy to spot full classrooms
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Age Ranges</h3>
              <p className="text-gray-600">
                Age range clearly displayed for proper placement of children
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}