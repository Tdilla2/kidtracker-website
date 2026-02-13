import { UtensilsCrossed, Edit, Copy, Printer } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import mealMenuImage from '@/assets/08102b9833308942c777e6085515732569c17a55.png';

export function MealMenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <UtensilsCrossed className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Meal Menu Management</h1>
              <p className="text-gray-600">Plan and manage daily meal menus (Regular Users & Admins)</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758874961000-d8b11690ce22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwa2lkcyUyMG1lYWx8ZW58MXx8fHwxNzcwMTQ4MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthy kids meal"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Meal Menu Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={mealMenuImage}
            alt="Meal Menu Management Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Meal Types */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Daily Meal Schedule</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Breakfast</h3>
              <p className="text-gray-600">Start the day with nutritious morning meals</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Morning Snack</h3>
              <p className="text-gray-600">Mid-morning snacks to keep energy levels up</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Lunch</h3>
              <p className="text-gray-600">Balanced midday meal with variety</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Afternoon Snack</h3>
              <p className="text-gray-600">Healthy afternoon snacks before pickup</p>
            </div>
          </div>
        </div>

        {/* Editing Menus */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Edit className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Editing Menus</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <Edit className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Quick Edit</h3>
              <p className="text-gray-600">
                Click on any meal field to edit with automatic saving
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Copy className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Copy Menu</h3>
              <p className="text-gray-600">
                Copy previous week's menu to save time
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <Printer className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Print Menu</h3>
              <p className="text-gray-600">
                Print weekly menu for posting in classrooms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}