import { Camera, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import activitiesImage from '@/assets/a67e15d67e6c2a13be051297e813cd36689080ac.png';

export function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Camera className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Daily Activities & Photos</h1>
              <p className="text-gray-600">Track and document children's daily activities</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1612539466809-8be5e4e01256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYWN0aXZpdGllcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDE0ODMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kids learning and activities"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Daily Activities Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={activitiesImage}
            alt="Daily Activities Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Managing Photos */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Managing Photos</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Photos display in a grid layout for easy viewing</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Hover to see captions and dates</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Click trash icon to delete photos</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Parents see photos in their portal automatically</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}