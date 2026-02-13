import { Calendar, History, BarChart2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import attendanceImage from '@/assets/2209dfd62a96b0a2d9a230b8297a99e095f1ea27.png';

export function AttendancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Calendar className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Attendance Tracking</h1>
              <p className="text-gray-600">Track daily check-ins and check-outs for all children</p>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1670852714979-f73d21652a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRlbmRhbmNlJTIwY2hlY2staW4lMjB0YWJsZXR8ZW58MXx8fHwxNzcwMTQ4MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital attendance tracking"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Attendance Interface Screenshot */}
        <div className="mb-8">
          <img 
            src={attendanceImage}
            alt="Attendance Tracking Interface"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Viewing Attendance History */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <History className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Viewing Attendance History</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Calendar Selection</h3>
              <p className="text-gray-600">
                Use the calendar to select any date to view historical attendance records
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Status Filters</h3>
              <p className="text-gray-600">
                Filter by status (All, Present, Absent) to quickly find specific records
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Time Tracking</h3>
              <p className="text-gray-600">
                View check-in and check-out times for accurate attendance tracking
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-900">Export Data</h3>
              <p className="text-gray-600">
                Export attendance data for reporting and record-keeping purposes
              </p>
            </div>
          </div>
        </div>

        {/* Today's Attendance Overview */}
        <div className="bg-blue-600 rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <BarChart2 className="text-white mr-3" size={28} />
            <h2 className="text-3xl font-bold text-white">Today's Attendance Overview</h2>
          </div>

          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Dashboard shows real-time attendance statistics</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">See total present/absent counts at a glance</p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">View children currently checked in throughout the day</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}