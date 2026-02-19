import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Download, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StudyMaterial, ContentSection } from '@/data/studyMaterials';

interface StudyMaterialModalProps {
  material: StudyMaterial;
  isOpen: boolean;
  onClose: () => void;
}

export const StudyMaterialModal: React.FC<StudyMaterialModalProps> = ({ material, isOpen, onClose }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = material.content.sections;
  const currentSection = sections[currentSectionIndex];

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: material.title,
        text: material.description,
        url: window.location.href
      });
    } else {
      alert('Share functionality not supported on this device');
    }
  };

  const handleDownload = () => {
    // Create a text file with the content
    const content = generateTextContent(material);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${material.title.replace(/\s+/g, '_')}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{material.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{material.title}</h2>
                <p className="text-blue-100 text-sm">{material.description}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-3">
              {material.tags.map((tag) => (
                <span key={tag} className="bg-blue-500 bg-opacity-50 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-700 p-2 rounded transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {material.content.summary && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
              <p className="text-gray-700 font-medium">{material.content.summary}</p>
            </div>
          )}

          {material.content.keyPoints && material.content.keyPoints.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">📌</span> Key Points
              </h3>
              <ul className="space-y-2">
                {material.content.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section Navigation */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                {currentSectionIndex + 1}. {currentSection.title}
              </h3>
              <span className="text-sm text-gray-500">
                Section {currentSectionIndex + 1} of {sections.length}
              </span>
            </div>

            {/* Section Content */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-4">{currentSection.content}</p>

              {currentSection.subsections && currentSection.subsections.length > 0 && (
                <div className="space-y-4 mt-4">
                  {currentSection.subsections.map((subsection, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border-l-4 border-blue-400">
                      <h4 className="font-semibold text-gray-900 mb-2">{subsection.title}</h4>
                      <p className="text-gray-700 text-sm">{subsection.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section Progress */}
          <div className="flex gap-2 mt-6">
            {sections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSectionIndex(idx)}
                className={`h-2 flex-1 rounded transition-colors ${
                  idx === currentSectionIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={sections[idx].title}
              />
            ))}
          </div>
        </div>

        {/* Footer with Navigation */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              variant="outline"
              className="flex items-center gap-2"
              title="Download as text file"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
            <Button
              onClick={handlePrint}
              variant="outline"
              className="flex items-center gap-2"
              title="Print this material"
            >
              <Printer className="w-4 h-4" />
              Print
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="flex items-center gap-2"
              title="Share this material"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setCurrentSectionIndex(Math.max(0, currentSectionIndex - 1))}
              disabled={currentSectionIndex === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={() => setCurrentSectionIndex(Math.min(sections.length - 1, currentSectionIndex + 1))}
              disabled={currentSectionIndex === sections.length - 1}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

function generateTextContent(material: StudyMaterial): string {
  let content = `${material.title}\n`;
  content += `${'='.repeat(material.title.length)}\n\n`;
  content += `${material.description}\n\n`;

  if (material.content.summary) {
    content += `Summary:\n${material.content.summary}\n\n`;
  }

  if (material.content.keyPoints && material.content.keyPoints.length > 0) {
    content += `Key Points:\n`;
    material.content.keyPoints.forEach(point => {
      content += `• ${point}\n`;
    });
    content += '\n';
  }

  material.content.sections.forEach((section, idx) => {
    content += `${idx + 1}. ${section.title}\n`;
    content += `${'-'.repeat(section.title.length)}\n`;
    content += `${section.content}\n\n`;

    if (section.subsections) {
      section.subsections.forEach(subsection => {
        content += `  ${subsection.title}:\n`;
        content += `  ${subsection.content}\n\n`;
      });
    }
  });

  return content;
}
