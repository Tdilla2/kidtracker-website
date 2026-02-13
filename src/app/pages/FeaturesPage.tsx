import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  Camera,
  Building2,
  DollarSign,
  FileText,
  BarChart3,
  UtensilsCrossed,
  Building,
  UserCog,
  Eye,
  ArrowRight,
  Blocks,
} from 'lucide-react';

export function FeaturesPage() {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Managing Children',
      description: 'Add and manage children enrolled in your daycare with comprehensive profiles including photos, parent information, emergency contacts, and recurring charges.',
      path: '/features/children',
      color: 'bg-blue-100 text-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwcGxheWluZyUyMGRheWNhcmV8ZW58MXx8fHwxNzcwMTUwNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Attendance Tracking',
      description: 'Track daily check-ins and check-outs for all children. View real-time attendance statistics and export attendance data for any date range.',
      path: '/features/attendance',
      color: 'bg-green-100 text-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwYXR0ZW5kYW5jZSUyMGNoZWNrLWlufGVufDF8fHx8MTc3MDE1MDc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Daily Activities & Photos',
      description: 'Document bathroom times, nap schedules, moods, and behaviors. Upload daily photos with captions that parents can view in their portal.',
      path: '/features/activities',
      color: 'bg-purple-100 text-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1616409114494-c12264850449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRhaWx5JTIwYWN0aXZpdGllcyUyMHBob3Rvc3xlbnwxfHx8fDE3NzAxNTA4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Classrooms Management',
      description: 'Organize children into classrooms with assigned teachers, age ranges, and capacity limits. Monitor classroom occupancy at a glance.',
      path: '/features/classrooms',
      color: 'bg-orange-100 text-orange-600',
      backgroundImage: 'https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb20lMjB0ZWFjaGVycyUyMGNoaWxkcmVufGVufDF8fHx8MTc3MDE1MDg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Financial Management',
      description: 'Monitor total revenue, expenses, net income, and pending payments. Track month-over-month trends and revenue by child.',
      path: '/features/financial',
      color: 'bg-emerald-100 text-emerald-600',
      backgroundImage: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBudW1iZXJzJTIwc3ByZWFkc2hlZXR8ZW58MXx8fHwxNzcwMTUxNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Invoicing System',
      description: 'Create single or multi-child invoices with automatic recurring charges. Track invoice status, due dates, and payment history.',
      path: '/features/invoicing',
      color: 'bg-indigo-100 text-indigo-600',
      backgroundImage: 'https://images.unsplash.com/photo-1764231467852-b609a742e082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwZG9jdW1lbnQlMjBwYXltZW50fGVufDF8fHx8MTc3MDE1MDg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Reports & Analytics',
      description: 'Generate detailed attendance and financial reports. Customize date ranges, filter data, and export to PDF, CSV, or Excel.',
      path: '/features/reports',
      color: 'bg-pink-100 text-pink-600',
      backgroundImage: 'https://images.unsplash.com/photo-1758876202919-4d2fbedcf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjByZXBvcnRzJTIwY2hhcnRzJTIwZGF0YXxlbnwxfHx8fDE3NzAxNTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: 'Meal Menu Management',
      description: 'Plan weekly menus for breakfast, lunch, and snacks. Copy previous week menu and print for posting.',
      path: '/features/meal-menu',
      color: 'bg-amber-100 text-amber-600',
      backgroundImage: 'https://images.unsplash.com/photo-1758874961000-d8b11690ce22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMGZvb2QlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzAxNTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Company Information',
      description: 'Manage your daycare business information, operating hours, license details, and upload your company logo for branding.',
      path: '/features/company',
      color: 'bg-teal-100 text-teal-600',
      backgroundImage: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3NzAxNTA4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <UserCog className="w-12 h-12" />,
      title: 'User Management',
      description: 'Create and manage staff and parent accounts with role-based access. Auto-generate mobile app codes for parent accounts.',
      path: '/features/users',
      color: 'bg-blue-100 text-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1741835698579-072263b676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWFuYWdlbWVudCUyMHN0YWZmJTIwbWVldGluZ3xlbnwxfHx8fDE3NzAxNTA4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Parent Portal',
      description: 'Parents can view their children\'s attendance, daily activities, photos, invoices, and classroom assignments from dedicated portal.',
      path: '/features/parent-portal',
      color: 'bg-cyan-100 text-cyan-600',
      backgroundImage: 'https://images.unsplash.com/photo-1581820885466-9c80e319b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NzAxNDgzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: <Blocks className="w-12 h-12" />,
      title: 'QuickBooks Integration',
      description: 'Seamlessly sync your financial data with QuickBooks for streamlined accounting. Automatically export invoices, payments, and expenses.',
      path: '/features/quickbooks',
      color: 'bg-blue-100 text-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1645102270210-e47d263db8c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwc29mdHdhcmUlMjBsYXB0b3AlMjBvZmZpY2V8ZW58MXx8fHwxNzcwMTUwODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">All Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the complete set of tools designed to streamline your daycare operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="bg-cover bg-center relative overflow-hidden rounded-xl shadow-sm p-8 hover:shadow-lg transition-all group"
              style={{
                backgroundImage: `url(${feature.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/85 to-blue-900/90"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-50 mb-4">{feature.description}</p>
                <div className="flex items-center text-white font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}