import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'kidtrackerapp_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-900 text-white rounded-xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
          <Cookie className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1 md:mt-0" />
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              We use cookies and similar technologies to enhance your experience on our site. By continuing to browse, you agree to our use of cookies. For more details, see our{' '}
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Accept Cookies
            </button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:static text-gray-400 hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
