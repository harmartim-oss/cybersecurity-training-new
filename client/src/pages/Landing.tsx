import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { trackButtonClick, trackSectionView, trackConversion } from '@/lib/analytics';

export default function Landing() {
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  useAnalytics('landing_page', 'Ontario CyberSafe - Home');

  // Track section views on mount
  useEffect(() => {
    trackSectionView('landing_page_loaded');
  }, []);

  const handleGetStarted = () => {
    trackButtonClick('get_started', 'hero_section');
    trackConversion('cta_click', 1);
    if (isAuthenticated) {
      setLocation('/dashboard');
    } else {
      setLocation('/auth');
    }
  };

  const handleWatchDemo = () => {
    trackButtonClick('explore_features', 'hero_section');
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (section: string) => {
    trackButtonClick(`nav_${section}`, 'header_navigation');
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePricingClick = (tier: string) => {
    trackButtonClick(`pricing_${tier}`, 'pricing_section');
    trackConversion(`pricing_tier_${tier}`, 1);
    handleGetStarted();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-teal-600 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">🛡️ Ontario CyberSafe</div>
          <div className="flex gap-4">
            <button 
              onClick={() => handleNavClick('features')}
              className="text-white hover:opacity-80 transition"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('modules')}
              className="text-white hover:opacity-80 transition"
            >
              Modules
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-white hover:opacity-80 transition"
            >
              Pricing
            </button>
            <Button 
              onClick={handleGetStarted}
              className="bg-yellow-400 text-blue-700 hover:bg-yellow-300"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Master Cybersecurity & Privacy Compliance</h1>
          <p className="text-xl mb-8 opacity-95">
            Comprehensive training platform for Ontario businesses and municipalities. Learn FIPPA, MFIPPA, PIPEDA, and cybersecurity fundamentals.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={handleGetStarted}
              className="bg-yellow-400 text-blue-700 hover:bg-yellow-300 px-8 py-3 text-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              onClick={handleWatchDemo}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">34</h3>
            <p className="text-sm opacity-90">Comprehensive Lessons</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">4</h3>
            <p className="text-sm opacity-90">Expert Modules</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">60</h3>
            <p className="text-sm opacity-90">Quiz Questions</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm opacity-90">Mobile Responsive</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Expert Content</h3>
              <p className="text-gray-600">34 lessons covering Ontario privacy legislation, cybersecurity fundamentals, AI governance, and data management.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Interactive Learning</h3>
              <p className="text-gray-600">Engaging lessons with learning objectives, knowledge checks, and reflection prompts for effective retention.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Progress Tracking</h3>
              <p className="text-gray-600">Real-time progress monitoring with detailed analytics for learners and administrators.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Gamification</h3>
              <p className="text-gray-600">Achievement system with badges, points tracking, and leaderboards to boost engagement.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Certification</h3>
              <p className="text-gray-600">Professional certificates with unique IDs and verification system for employer validation.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition border-t-4 border-teal-600">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption, GDPR/PIPEDA compliance, and comprehensive audit logging.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Training Modules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-blue-700 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Module 1: Ontario Privacy Law Mastery</h3>
              <p className="text-sm text-gray-500 mb-3">8 Lessons</p>
              <p className="text-gray-600">Master FIPPA, MFIPPA, and PIPEDA regulations. Learn compliance requirements and best practices for Ontario organizations.</p>
            </Card>
            <Card className="p-6 border-l-4 border-teal-600 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Module 2: Cybersecurity Fundamentals</h3>
              <p className="text-sm text-gray-500 mb-3">12 Lessons</p>
              <p className="text-gray-600">Essential cybersecurity concepts including threat identification, risk assessment, and incident response.</p>
            </Card>
            <Card className="p-6 border-l-4 border-yellow-500 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Module 3: AI Governance & Ethics</h3>
              <p className="text-sm text-gray-500 mb-3">6 Lessons</p>
              <p className="text-gray-600">Navigate AI governance frameworks, ethical considerations, and responsible AI implementation.</p>
            </Card>
            <Card className="p-6 border-l-4 border-blue-700 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Module 4: Data Management Excellence</h3>
              <p className="text-sm text-gray-500 mb-3">8 Lessons</p>
              <p className="text-gray-600">Master data classification, storage security, retention policies, and data lifecycle management.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Ontario CyberSafe?</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-teal-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-blue-700">Ontario-Specific Content</h4>
                  <p className="text-gray-600">Tailored for Ontario businesses with focus on FIPPA, MFIPPA, and PIPEDA compliance.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-blue-700">Expert Instructors</h4>
                  <p className="text-gray-600">Content developed by cybersecurity and privacy compliance experts.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-blue-700">Flexible Learning</h4>
                  <p className="text-gray-600">Learn at your own pace on any device, anytime, anywhere.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-blue-700">Professional Certification</h4>
                  <p className="text-gray-600">Earn recognized certificates with unique IDs for employer verification.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-700 to-teal-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🎓 Comprehensive Training</h3>
            <p className="text-lg opacity-95">
              From privacy law fundamentals to advanced cybersecurity practices, our platform covers everything you need to protect your organization and ensure compliance with Ontario regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Individual</h3>
              <div className="text-3xl font-bold text-teal-600 mb-1">$99</div>
              <p className="text-gray-600 mb-6">One-time payment</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>All 4 modules access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>34 lessons included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>60 quiz questions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Certificate generation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Lifetime access</span>
                </li>
              </ul>
              <Button onClick={() => handlePricingClick('individual')} className="w-full bg-blue-700 hover:bg-blue-800">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 border-2 border-teal-600 shadow-lg hover:shadow-xl transition transform scale-105">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Team</h3>
              <div className="text-3xl font-bold text-teal-600 mb-1">$499</div>
              <p className="text-gray-600 mb-6">Per year</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Up to 10 team members</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>All Individual features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Admin dashboard</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Progress tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Compliance reports</span>
                </li>
              </ul>
              <Button onClick={() => handlePricingClick('team')} className="w-full bg-teal-600 hover:bg-teal-700">
                Start Free Trial
              </Button>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-teal-600 mb-1">Custom</div>
              <p className="text-gray-600 mb-6">Contact for pricing</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Unlimited team members</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>All Team features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Custom training paths</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>API access</span>
                </li>
              </ul>
              <Button onClick={() => handlePricingClick('enterprise')} className="w-full bg-blue-700 hover:bg-blue-800">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Organization?</h2>
        <p className="text-xl mb-8 opacity-95">
          Join hundreds of Ontario businesses and municipalities protecting their data and ensuring compliance.
        </p>
        <Button 
          onClick={handleGetStarted}
          className="bg-yellow-400 text-blue-700 hover:bg-yellow-300 px-8 py-3 text-lg"
        >
          Start Your Journey Today
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#modules" className="hover:text-white">Modules</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ontario CyberSafe Certification. All rights reserved. | Protecting Ontario's Digital Future</p>
        </div>
      </footer>
    </div>
  );
}
