import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setLocation('/dashboard');
    } else {
      setLocation('/auth');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <h1 className="text-xl font-bold text-gray-900">Ontario CyberSafe</h1>
          </div>
          <Button onClick={handleGetStarted}>
            {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cybersecurity Training for Ontario
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive training platform designed for small businesses and municipalities in Ontario. Master privacy legislation, cybersecurity fundamentals, AI governance, and data management.
            </p>
            <Button size="lg" onClick={handleGetStarted} className="text-lg px-8 py-6">
              {isAuthenticated ? 'Go to Dashboard' : 'Start Learning Today'}
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">34 Lessons</h3>
              <p className="text-sm text-gray-600">Comprehensive content across 4 modules</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Interactive</h3>
              <p className="text-sm text-gray-600">Quizzes, assessments, and gamification</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Certified</h3>
              <p className="text-sm text-gray-600">Professional certificates with unique IDs</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
              <p className="text-sm text-gray-600">Learn anywhere, anytime on any device</p>
            </Card>
          </div>

          {/* Modules Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Training Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-l-4 border-blue-600">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ontario's Privacy Landscape</h3>
                <p className="text-gray-600 mb-4">Master FIPPA, MFIPPA, and PIPEDA legislation with 8 comprehensive lessons covering Ontario-specific privacy requirements.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Privacy legislation fundamentals</li>
                  <li>✓ Compliance frameworks</li>
                  <li>✓ Data breach notification</li>
                </ul>
              </Card>
              <Card className="p-8 border-l-4 border-red-600">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity Fundamentals</h3>
                <p className="text-gray-600 mb-4">Essential security practices with 12 lessons covering threat landscape, password security, phishing, and incident response.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Threat awareness</li>
                  <li>✓ Security best practices</li>
                  <li>✓ Incident response</li>
                </ul>
              </Card>
              <Card className="p-8 border-l-4 border-purple-600">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Data Governance</h3>
                <p className="text-gray-600 mb-4">Ethical AI implementation with 6 lessons on AI ethics, data classification, bias prevention, and governance frameworks.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Ethical AI principles</li>
                  <li>✓ Algorithmic bias prevention</li>
                  <li>✓ Data governance</li>
                </ul>
              </Card>
              <Card className="p-8 border-l-4 border-green-600">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Management Excellence</h3>
                <p className="text-gray-600 mb-4">Best practices with 8 lessons on data lifecycle, quality, retention, backup, and compliance management.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Data lifecycle management</li>
                  <li>✓ Quality & integrity</li>
                  <li>✓ Compliance auditing</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Individual</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$99</p>
                <p className="text-sm text-gray-600 mb-6">One-time purchase</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ All 34 lessons</li>
                  <li>✓ Quizzes & assessments</li>
                  <li>✓ Certificate of completion</li>
                  <li>✓ Lifetime access</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
              <Card className="p-8 border-2 border-blue-600 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$499<span className="text-lg text-gray-600">/year</span></p>
                <p className="text-sm text-gray-600 mb-6">Up to 10 users</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Everything in Individual</li>
                  <li>✓ Team dashboard</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Admin controls</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <p className="text-sm text-gray-600 mb-6">Unlimited users</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Everything in Team</li>
                  <li>✓ Custom branding</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join Ontario businesses and municipalities in mastering cybersecurity and privacy compliance.
            </p>
            <Button size="lg" variant="secondary" onClick={handleGetStarted} className="text-lg px-8 py-6">
              {isAuthenticated ? 'Go to Dashboard' : 'Create Your Account'}
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Ontario CyberSafe Certification. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
