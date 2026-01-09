import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { modules } from '@/data/lessonContent';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Download, Share2, CheckCircle2 } from 'lucide-react';

interface Certificate {
  id: string;
  moduleId: number;
  moduleName: string;
  userName: string;
  completionDate: string;
  score: number;
}

export default function CertificatePage() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    // Load certificates from localStorage
    const saved = localStorage.getItem('ocs_certificates');
    if (saved) {
      setCertificates(JSON.parse(saved));
    }
  }, []);

  const generateCertificateId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'OCS-';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    result += '-';
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleDownloadCertificate = (cert: Certificate) => {
    // Create a simple text representation for download
    const content = `
ONTARIO CYBERSAFE CERTIFICATION (OCS)
Certificate of Completion

This certifies that

${cert.userName}

has successfully completed the module:

${cert.moduleName}

Certificate ID: ${cert.id}
Completion Date: ${new Date(cert.completionDate).toLocaleDateString()}
Score: ${cert.score}%

This certificate is valid for 3 years from the date of completion.

---
Issued by Ontario CyberSafe Certification Platform
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `OCS_Certificate_${cert.id}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrintCertificate = (cert: Certificate) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>OCS Certificate - ${cert.id}</title>
            <style>
              body {
                font-family: 'Georgia', serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: #f5f5f5;
                margin: 0;
              }
              .certificate {
                width: 800px;
                height: 600px;
                background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
                border: 3px solid #003DA5;
                padding: 40px;
                box-sizing: border-box;
                box-shadow: 0 10px 40px rgba(0, 61, 165, 0.2);
                position: relative;
              }
              .certificate::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #003DA5, #00A8A8, #FFB81C);
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
              .logo {
                font-size: 32px;
                margin-bottom: 10px;
              }
              .title {
                font-size: 28px;
                font-weight: bold;
                color: #003DA5;
                margin: 0;
              }
              .subtitle {
                font-size: 14px;
                color: #666;
                margin: 5px 0 0 0;
              }
              .content {
                text-align: center;
                margin: 40px 0;
              }
              .certifies {
                font-size: 16px;
                color: #333;
                margin-bottom: 20px;
              }
              .name {
                font-size: 24px;
                font-weight: bold;
                color: #003DA5;
                margin: 20px 0;
                text-transform: uppercase;
              }
              .module {
                font-size: 14px;
                color: #333;
                margin: 20px 0;
              }
              .module-name {
                font-size: 18px;
                font-weight: bold;
                color: #00A8A8;
              }
              .footer {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                font-size: 12px;
                color: #666;
              }
              .cert-id {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #999;
              }
            </style>
          </head>
          <body>
            <div class="certificate">
              <div class="header">
                <div class="logo">🛡️</div>
                <h1 class="title">Certificate of Completion</h1>
                <p class="subtitle">Ontario CyberSafe Certification Platform</p>
              </div>
              <div class="content">
                <p class="certifies">This certifies that</p>
                <div class="name">${cert.userName}</div>
                <p class="module">has successfully completed the module</p>
                <div class="module-name">${cert.moduleName}</div>
                <p class="module">with a score of ${cert.score}%</p>
              </div>
              <div class="footer">
                <div>Date: ${new Date(cert.completionDate).toLocaleDateString()}</div>
                <div>Valid for 3 years</div>
              </div>
              <div class="cert-id">Certificate ID: ${cert.id}</div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (selectedCert) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Button variant="outline" onClick={() => setSelectedCert(null)}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Certificate Details</h1>
            <div className="w-10"></div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Certificate Preview */}
          <div className="mb-8 bg-gradient-to-br from-white to-blue-50 border-4 border-blue-600 rounded-lg p-12 text-center shadow-2xl">
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-4xl font-bold text-blue-600 mb-2">Certificate of Completion</h2>
            <p className="text-gray-600 mb-8">Ontario CyberSafe Certification Platform</p>

            <p className="text-lg text-gray-700 mb-4">This certifies that</p>
            <h3 className="text-3xl font-bold text-blue-600 mb-4 uppercase">{selectedCert.userName}</h3>

            <p className="text-lg text-gray-700 mb-2">has successfully completed the module</p>
            <p className="text-2xl font-bold text-teal-600 mb-6">{selectedCert.moduleName}</p>

            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-gray-300">
              <div>
                <p className="text-sm text-gray-600">Score</p>
                <p className="text-2xl font-bold text-blue-600">{selectedCert.score}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(selectedCert.completionDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Valid For</p>
                <p className="text-lg font-semibold text-gray-900">3 Years</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">Certificate ID: {selectedCert.id}</p>
            <p className="text-xs text-gray-500">This certificate is valid for 3 years from the date of completion.</p>
          </div>

          {/* Action Buttons */}
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handlePrintCertificate(selectedCert)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Print Certificate
              </Button>
              <Button
                onClick={() => handleDownloadCertificate(selectedCert)}
                variant="outline"
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Download as Text
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                disabled
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share (Coming Soon)
              </Button>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="outline" onClick={() => setLocation('/dashboard')}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-xl font-bold text-gray-900">My Certificates</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {certificates.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-6xl mb-4">📜</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Certificates Yet</h2>
            <p className="text-gray-600 mb-6">
              Complete modules and pass their quizzes (80% or higher) to earn certificates.
            </p>
            <Button onClick={() => setLocation('/dashboard')} className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Learning
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {certificates.map(cert => (
              <Card key={cert.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-900">{cert.moduleName}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Completed on {new Date(cert.completionDate).toLocaleDateString()}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-700">
                        <span className="font-semibold">Score:</span> {cert.score}%
                      </span>
                      <span className="text-gray-700">
                        <span className="font-semibold">ID:</span> {cert.id}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedCert(cert)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View Certificate
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
