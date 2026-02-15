import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTop } from './components/BackToTop';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { GettingStartedPage } from './pages/GettingStartedPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ChildrenPage } from './pages/features/ChildrenPage';
import { AttendancePage } from './pages/features/AttendancePage';
import { ActivitiesPage } from './pages/features/ActivitiesPage';
import { ClassroomsPage } from './pages/features/ClassroomsPage';
import { FinancialPage } from './pages/features/FinancialPage';
import { InvoicingPage } from './pages/features/InvoicingPage';
import { ReportsPage } from './pages/features/ReportsPage';
import { MealMenuPage } from './pages/features/MealMenuPage';
import { CompanyPage } from './pages/features/CompanyPage';
import { UsersPage } from './pages/features/UsersPage';
import { ParentPortalPage } from './pages/features/ParentPortalPage';
import { QuickBooksPage } from './pages/features/QuickBooksPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(to bottom right, var(--custom-primary-bg-light), white, var(--custom-primary-bg-light))' }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/features/children" element={<ChildrenPage />} />
            <Route path="/features/attendance" element={<AttendancePage />} />
            <Route path="/features/activities" element={<ActivitiesPage />} />
            <Route path="/features/classrooms" element={<ClassroomsPage />} />
            <Route path="/features/financial" element={<FinancialPage />} />
            <Route path="/features/invoicing" element={<InvoicingPage />} />
            <Route path="/features/reports" element={<ReportsPage />} />
            <Route path="/features/meal-menu" element={<MealMenuPage />} />
            <Route path="/features/company" element={<CompanyPage />} />
            <Route path="/features/users" element={<UsersPage />} />
            <Route path="/features/parent-portal" element={<ParentPortalPage />} />
            <Route path="/features/quickbooks" element={<QuickBooksPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <CookieConsent />
      </div>
    </Router>
  );
}