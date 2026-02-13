import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign, Home, Star, Building2, Check, Users, BarChart3,
  Shield, Clock, FileText, Palette, Headphones, Phone, GraduationCap,
  UserPlus, ClipboardList, CalendarDays, Share2, ChevronDown,
  ArrowRight, CheckCircle, Zap
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'For small daycares getting started',
      monthlyPrice: 199,
      annualPrice: 159,
      annualTotal: 1908,
      annualSavings: 480,
      icon: Home,
      color: 'blue',
      featured: false,
      cta: 'Start Free Trial',
      featuresTitle: "What's included",
      features: [
        { text: 'Up to 25 children', bold: '25 children' },
        { text: '2 admin user accounts', bold: '2' },
        { text: 'Unlimited parent accounts', bold: 'Unlimited' },
        { text: 'Basic reporting', bold: '' },
        { text: 'Email support', bold: '' },
      ],
    },
    {
      name: 'Professional',
      description: 'For growing childcare centers',
      monthlyPrice: 299,
      annualPrice: 239,
      annualTotal: 2868,
      annualSavings: 720,
      icon: Star,
      color: 'blue',
      featured: true,
      cta: 'Start Free Trial',
      featuresTitle: 'Everything in Starter, plus',
      features: [
        { text: 'Up to 75 children', bold: '75 children' },
        { text: '5 admin user accounts', bold: '5' },
        { text: 'Unlimited parent accounts', bold: 'Unlimited' },
        { text: 'Daily activity reports', bold: '' },
        { text: 'Advanced reporting & analytics', bold: '' },
        { text: 'QuickBooks integration', bold: '' },
        { text: 'Custom branding', bold: '' },
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large organizations & networks',
      monthlyPrice: 499,
      annualPrice: 399,
      annualTotal: 4788,
      annualSavings: 1200,
      icon: Building2,
      color: 'blue',
      featured: false,
      cta: 'Start Free Trial',
      featuresTitle: 'Everything in Professional, plus',
      features: [
        { text: 'Unlimited children', bold: 'Unlimited' },
        { text: 'Unlimited admin accounts', bold: 'Unlimited' },
        { text: 'All Professional features', bold: '' },
        { text: 'Dedicated account manager', bold: '' },
        { text: 'Priority phone & email support', bold: '' },
        { text: 'Custom onboarding & training', bold: '' },
      ],
    },
  ];

  const comparisonData = {
    capacity: [
      { feature: 'Children', starter: '25', pro: '75', enterprise: 'Unlimited' },
      { feature: 'Admin Users', starter: '2', pro: '5', enterprise: 'Unlimited' },
      { feature: 'Parent Accounts', starter: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
    ],
    reporting: [
      { feature: 'Basic Reporting', starter: true, pro: true, enterprise: true },
      { feature: 'Daily Activity Reports', starter: false, pro: true, enterprise: true },
      { feature: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
    ],
    integrations: [
      { feature: 'QuickBooks Integration', starter: false, pro: true, enterprise: true },
      { feature: 'Custom Branding', starter: false, pro: true, enterprise: true },
    ],
    support: [
      { feature: 'Email Support', starter: true, pro: true, enterprise: true },
      { feature: 'Priority Support', starter: false, pro: false, enterprise: true },
      { feature: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
      { feature: 'Custom Onboarding', starter: false, pro: false, enterprise: true },
    ],
  };

  const faqs = [
    {
      question: 'Can I switch plans at any time?',
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
    },
    {
      question: 'Is there a free trial available?',
      answer: "Absolutely! All plans come with a 14-day free trial. No credit card is required to start. You'll have full access to all features in your chosen plan during the trial period.",
    },
    {
      question: 'How does the QuickBooks integration work?',
      answer: 'Our QuickBooks integration automatically syncs billing, payments, and invoicing data between KidTrackerApp and your QuickBooks account. This eliminates double entry and keeps your financial records accurate and up-to-date.',
    },
    {
      question: "What happens if I exceed my plan's child limit?",
      answer: "We'll notify you when you're approaching your limit. If you need more capacity, you can easily upgrade to the next plan. We'll never cut off access to existing children's records.",
    },
    {
      question: 'Do parents need to pay for their accounts?',
      answer: 'No! Parent accounts are always free and unlimited on every plan. Parents can download the app and connect to your center at no additional cost.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const renderCheckOrCross = (value: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-gray-900 font-medium">{value}</span>;
    }
    return value ? (
      <Check className="mx-auto text-green-500" size={20} />
    ) : (
      <span className="text-gray-300">&mdash;</span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1576673196028-cd681592bd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF5Y2FyZSUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Kids playing at daycare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-blue-200">Simple, Transparent Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">The Right Plan for Your Daycare</h1>
            <p className="text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto text-gray-200">
              Choose the plan that fits your center. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-semibold text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-colors"
            style={{ background: 'var(--custom-primary)' }}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`font-semibold text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Annual</span>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Save 20%</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl shadow-sm p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.featured ? 'ring-2 shadow-md' : 'border border-gray-200'
                }`}
                style={plan.featured ? { ringColor: 'var(--custom-primary)', borderColor: 'var(--custom-primary)' } : undefined}
              >
                {plan.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-1 rounded-full"
                    style={{ background: 'var(--custom-primary)' }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-bold text-gray-900">$</span>
                  <span className="text-5xl font-extrabold text-gray-900">{price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-1">per month</p>
                <p className="text-xs text-gray-400 mb-6 h-4">
                  {isAnnual ? `Billed $${plan.annualTotal.toLocaleString()}/year (save $${plan.annualSavings.toLocaleString()})` : ''}
                </p>

                <div className="border-t border-gray-100 pt-6 mb-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{plan.featuresTitle}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-blue-600" size={12} />
                      </div>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://main.d2nbsjhv8lzch9.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.featured
                      ? 'text-white hover:opacity-90'
                      : 'border-2 hover:bg-blue-50'
                  }`}
                  style={
                    plan.featured
                      ? { background: 'var(--custom-primary)' }
                      : { borderColor: 'var(--custom-primary)', color: 'var(--custom-primary)' }
                  }
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Daycare Photo Banner */}
        <div className="grid md:grid-cols-3 gap-4 mb-20 max-w-5xl mx-auto">
          <div className="relative h-56 rounded-xl overflow-hidden shadow-sm group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576673196028-cd681592bd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF5Y2FyZSUyMGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=80&w=800"
              alt="Children playing at daycare"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">Track Activities</p>
              <p className="text-sm text-gray-200">Meals, naps & playtime</p>
            </div>
          </div>
          <div className="relative h-56 rounded-xl overflow-hidden shadow-sm group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcHklMjBraWRzfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=800"
              alt="Happy kids at daycare"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">Keep Parents Connected</p>
              <p className="text-sm text-gray-200">Real-time updates & photos</p>
            </div>
          </div>
          <div className="relative h-56 rounded-xl overflow-hidden shadow-sm group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=80&w=800"
              alt="Kids learning in classroom"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">Manage Classrooms</p>
              <p className="text-sm text-gray-200">Organized & efficient</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How KidTrackerApp Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get your daycare up and running in minutes, not days. Here's how simple it is.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { step: 1, icon: UserPlus, title: 'Create Your Account', desc: 'Sign up and set up your daycare profile with your center\'s details and branding.', bg: 'bg-blue-100', iconColor: 'text-blue-600' },
              { step: 2, icon: Users, title: 'Enroll Children', desc: 'Add children\'s profiles with contact info, medical details, and emergency contacts.', bg: 'bg-indigo-100', iconColor: 'text-indigo-600' },
              { step: 3, icon: CalendarDays, title: 'Track Daily Activities', desc: 'Log check-ins, meals, naps, activities, and milestones throughout the day.', bg: 'bg-green-100', iconColor: 'text-green-600' },
              { step: 4, icon: Share2, title: 'Share with Parents', desc: 'Parents get real-time updates, photos, and daily reports right on their phone.', bg: 'bg-amber-100', iconColor: 'text-amber-600' },
            ].map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="text-center relative">
                  <div className="relative inline-flex mb-5">
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center`}>
                      <StepIcon className={item.iconColor} size={28} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center border-3 border-gray-50"
                      style={{ background: 'var(--custom-primary)' }}
                    >
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 max-w-[200px] mx-auto">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Detail Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:-translate-y-1 transition-transform">
              <div className="h-36 bg-blue-50 rounded-lg mb-5 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
                  <rect width="320" height="140" fill="none"/>
                  <rect x="110" y="15" width="100" height="110" rx="14" fill="#fff" stroke="#bfdbfe" strokeWidth="1.5"/>
                  <rect x="118" y="30" width="84" height="72" rx="4" fill="#eff6ff"/>
                  <circle cx="160" cy="52" r="14" fill="#93c5fd"/>
                  <text x="160" y="57" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">E</text>
                  <text x="160" y="78" textAnchor="middle" fontSize="8" fontWeight="600" fill="#1e3a5f" fontFamily="sans-serif">Emma Johnson</text>
                  <rect x="138" y="84" width="44" height="14" rx="7" fill="#bbf7d0"/>
                  <text x="160" y="94" textAnchor="middle" fontSize="8" fill="#15803d" fontFamily="sans-serif">Check In</text>
                  <circle cx="54" cy="70" r="22" fill="#dbeafe"/>
                  <circle cx="54" cy="63" r="10" fill="#93c5fd"/>
                  <path d="M38 88c0-7 7-12 16-12s16 5 16 12" fill="#93c5fd"/>
                  <circle cx="266" cy="70" r="22" fill="#bbf7d0"/>
                  <path d="M256 70l6 6 14-14" stroke="#15803d" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-blue-600" size={18} />
                <h4 className="font-bold text-gray-900">Real-Time Check-In & Check-Out</h4>
              </div>
              <p className="text-sm text-gray-500">
                Securely track attendance with digital sign-in. Parents and authorized pickups are verified instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:-translate-y-1 transition-transform">
              <div className="h-36 bg-indigo-50 rounded-lg mb-5 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
                  <rect width="320" height="140" fill="none"/>
                  <rect x="90" y="10" width="140" height="120" rx="10" fill="#fff" stroke="#c7d2fe" strokeWidth="1.5"/>
                  <rect x="100" y="18" width="120" height="18" rx="4" fill="#e0e7ff"/>
                  <text x="160" y="31" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4338ca" fontFamily="sans-serif">Daily Report - Today</text>
                  <circle cx="110" cy="50" r="5" fill="#fef3c7"/>
                  <rect x="120" y="46" width="60" height="8" rx="4" fill="#f1f5f9"/>
                  <text x="122" y="53" fontSize="6" fill="#475569" fontFamily="sans-serif">Breakfast 8:30am</text>
                  <circle cx="110" cy="66" r="5" fill="#dbeafe"/>
                  <rect x="120" y="62" width="60" height="8" rx="4" fill="#f1f5f9"/>
                  <text x="122" y="69" fontSize="6" fill="#475569" fontFamily="sans-serif">Music class 10am</text>
                  <circle cx="110" cy="82" r="5" fill="#d1fae5"/>
                  <rect x="120" y="78" width="60" height="8" rx="4" fill="#f1f5f9"/>
                  <text x="122" y="85" fontSize="6" fill="#475569" fontFamily="sans-serif">Nap 12:30-2pm</text>
                  <circle cx="110" cy="98" r="5" fill="#fce7f3"/>
                  <rect x="120" y="94" width="60" height="8" rx="4" fill="#f1f5f9"/>
                  <text x="122" y="101" fontSize="6" fill="#475569" fontFamily="sans-serif">Playtime 3pm</text>
                  <rect x="100" y="110" width="120" height="14" rx="4" fill="#d1fae5"/>
                  <text x="160" y="120" textAnchor="middle" fontSize="7" fill="#15803d" fontFamily="sans-serif">Mood: Happy &amp; Active</text>
                  <rect x="240" y="30" width="52" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
                  <rect x="248" y="72" width="8" height="18" rx="3" fill="#c7d2fe"/>
                  <rect x="260" y="58" width="8" height="32" rx="3" fill="#a5b4fc"/>
                  <rect x="272" y="45" width="8" height="45" rx="3" fill="#818cf8"/>
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-blue-600" size={18} />
                <h4 className="font-bold text-gray-900">Automated Daily Reports</h4>
              </div>
              <p className="text-sm text-gray-500">
                Every meal, nap, and activity is logged into a daily report parents receive automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 hover:-translate-y-1 transition-transform">
              <div className="h-36 bg-green-50 rounded-lg mb-5 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 320 140" fill="none" className="w-full h-full">
                  <rect width="320" height="140" fill="none"/>
                  <path d="M160 16l50 16v36c0 28-22 46-50 56-28-10-50-28-50-56V32z" fill="#d1fae5" stroke="#16a34a" strokeWidth="1.5"/>
                  <path d="M160 28l38 12v28c0 22-17 36-38 44-21-8-38-22-38-44V40z" fill="#fff"/>
                  <rect x="150" y="55" width="20" height="16" rx="3" fill="#16a34a"/>
                  <path d="M154 55v-6a6 6 0 0 1 12 0v6" stroke="#16a34a" strokeWidth="2" fill="none"/>
                  <circle cx="160" cy="63" r="2" fill="#fff"/>
                  <rect x="32" y="32" width="48" height="22" rx="11" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="44" cy="43" r="5" fill="#bbf7d0"/>
                  <text x="44" y="46" textAnchor="middle" fontSize="7" fill="#16a34a">&#10003;</text>
                  <text x="60" y="46" fontSize="6" fill="#475569" fontFamily="sans-serif">AES-256</text>
                  <rect x="32" y="62" width="48" height="22" rx="11" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="44" cy="73" r="5" fill="#bbf7d0"/>
                  <text x="44" y="76" textAnchor="middle" fontSize="7" fill="#16a34a">&#10003;</text>
                  <text x="60" y="76" fontSize="6" fill="#475569" fontFamily="sans-serif">HIPAA</text>
                  <rect x="240" y="32" width="48" height="22" rx="11" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="252" cy="43" r="5" fill="#bbf7d0"/>
                  <text x="252" y="46" textAnchor="middle" fontSize="7" fill="#16a34a">&#10003;</text>
                  <text x="268" y="46" fontSize="6" fill="#475569" fontFamily="sans-serif">SOC 2</text>
                  <rect x="240" y="62" width="48" height="22" rx="11" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
                  <circle cx="252" cy="73" r="5" fill="#bbf7d0"/>
                  <text x="252" y="76" textAnchor="middle" fontSize="7" fill="#16a34a">&#10003;</text>
                  <text x="268" y="76" fontSize="6" fill="#475569" fontFamily="sans-serif">2FA</text>
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="text-blue-600" size={18} />
                <h4 className="font-bold text-gray-900">Safe & Secure</h4>
              </div>
              <p className="text-sm text-gray-500">
                All data is encrypted and stored securely. Full compliance with childcare data regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Compare All Features</h2>
            <p className="text-gray-600">See exactly what you get with each plan</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Starter</th>
                    <th className="text-center py-4 px-4 font-bold" style={{ color: 'var(--custom-primary)' }}>Professional</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Capacity */}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-bold text-sm uppercase tracking-wider text-gray-500">Capacity</td>
                  </tr>
                  {comparisonData.capacity.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-6 text-sm text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-sm">{renderCheckOrCross(row.starter)}</td>
                      <td className="py-3 px-4 text-center text-sm">{renderCheckOrCross(row.pro)}</td>
                      <td className="py-3 px-4 text-center text-sm">{renderCheckOrCross(row.enterprise)}</td>
                    </tr>
                  ))}

                  {/* Reporting */}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-bold text-sm uppercase tracking-wider text-gray-500">Reporting</td>
                  </tr>
                  {comparisonData.reporting.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-6 text-sm text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.starter)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.pro)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.enterprise)}</td>
                    </tr>
                  ))}

                  {/* Integrations */}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-bold text-sm uppercase tracking-wider text-gray-500">Integrations</td>
                  </tr>
                  {comparisonData.integrations.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-6 text-sm text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.starter)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.pro)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.enterprise)}</td>
                    </tr>
                  ))}

                  {/* Support */}
                  <tr className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-6 font-bold text-sm uppercase tracking-wider text-gray-500">Support</td>
                  </tr>
                  {comparisonData.support.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-3 px-6 text-sm text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.starter)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.pro)}</td>
                      <td className="py-3 px-4 text-center">{renderCheckOrCross(row.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {faq.question}
                  <ChevronDown
                    className={`flex-shrink-0 ml-4 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Full-Width Daycare Photo */}
        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-20 max-w-5xl mx-auto">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF5Y2FyZSUyMGNoaWxkcmVufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Children enjoying activities at daycare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-8 md:px-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Everything your daycare needs in one place</h3>
              <p className="text-gray-200 text-sm md:text-base">From attendance tracking to parent communication, KidTrackerApp simplifies your entire operation so you can focus on what matters most — the children.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-xl p-10 md:p-14 text-center text-white mb-8" style={{ background: `linear-gradient(135deg, var(--custom-primary), var(--custom-primary-dark))` }}>
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your daycare management?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start your free 14-day trial today. No credit card required.
          </p>
          <a
            href="https://main.d2nbsjhv8lzch9.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            style={{ color: 'var(--custom-primary)' }}
          >
            Get Started Free
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}