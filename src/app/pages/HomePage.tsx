import { LayoutDashboard } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MDE1MDQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kids in daycare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">KID-TRACKER™</h1>
            <p className="text-xl md:text-2xl drop-shadow-md">Your Complete Daycare Management Solution</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Overview</h1>
          <p className="text-xl text-gray-600">
            Welcome to KID-TRACKER™, your complete daycare management solution!
          </p>
        </div>

        {/* Dashboard Overview Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cover bg-center relative overflow-hidden rounded-lg p-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzAxNjY3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/90 to-blue-900/95"></div>
              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-3 text-white">Key Statistics</h3>
                <p className="text-blue-50">
                  View all your important metrics at a glance - from attendance numbers to financial summaries.
                </p>
              </div>
            </div>

            <div className="bg-cover bg-center relative overflow-hidden rounded-lg p-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576673196028-cd681592bd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRlbmRhbmNlJTIwY2hlY2staW4lMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzAxNjY3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/90 to-blue-900/95"></div>
              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-3 text-white">Today Attendance</h3>
                <p className="text-blue-50">
                  See real-time attendance overview showing who is checked in and who is absent today.
                </p>
              </div>
            </div>

            <div className="bg-cover bg-center relative overflow-hidden rounded-lg p-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1720036237584-7fd0f37db499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWljayUyMGFjdGlvbiUyMGJ1dHRvbnMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMTY2NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/90 to-blue-900/95"></div>
              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-3 text-white">Quick Actions</h3>
                <p className="text-blue-50">
                  Access frequently used features quickly with dedicated action buttons on your dashboard.
                </p>
              </div>
            </div>

            <div className="bg-cover bg-center relative overflow-hidden rounded-lg p-6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1758691736483-5f600b509962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzdW1tYXJ5JTIwcmV2ZW51ZXxlbnwxfHx8fDE3NzAxNjY3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 via-blue-800/90 to-blue-900/95"></div>
              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-3 text-white">Financial Summaries</h3>
                <p className="text-blue-50">
                  Review your daycare financial health with monthly revenue, expenses, and pending payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}