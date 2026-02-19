import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getLessonStudyMaterials, LessonStudyMaterial } from '@/data/lessonStudyMaterials';
import { X, ChevronRight, ChevronLeft, Download, Printer, BookOpen, FileText, CheckSquare, Lightbulb } from 'lucide-react';

interface LessonStudyMaterialsProps {
  lessonId: number;
  className?: string;
}

export const LessonStudyMaterials: React.FC<LessonStudyMaterialsProps> = ({ lessonId, className = '' }) => {
  const materials = getLessonStudyMaterials(lessonId);
  const [selectedMaterial, setSelectedMaterial] = useState<LessonStudyMaterial | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  if (materials.length === 0) {
    return null;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="w-5 h-5" />;
      case 'template':
        return <FileText className="w-5 h-5" />;
      case 'checklist':
        return <CheckSquare className="w-5 h-5" />;
      case 'reference':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide':
        return 'bg-blue-50 border-blue-300 text-blue-700';
      case 'template':
        return 'bg-purple-50 border-purple-300 text-purple-700';
      case 'checklist':
        return 'bg-green-50 border-green-300 text-green-700';
      case 'reference':
        return 'bg-orange-50 border-orange-300 text-orange-700';
      default:
        return 'bg-gray-50 border-gray-300 text-gray-700';
    }
  };

  const handleDownload = (material: LessonStudyMaterial) => {
    const content = generateTextContent(material);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${material.title.replace(/\s+/g, '_')}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  if (selectedMaterial) {
    const sections = selectedMaterial.content.sections;
    const currentSection = sections[currentSectionIndex];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-white">
          {/* Header */}
          <div className={`${getTypeColor(selectedMaterial.type)} border-b-2 p-6 flex items-start justify-between`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{selectedMaterial.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMaterial.title}</h2>
                  <p className="text-gray-600 text-sm">{selectedMaterial.description}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {selectedMaterial.tags.map((tag) => (
                  <span key={tag} className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 border border-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedMaterial(null);
                setCurrentSectionIndex(0);
              }}
              className="text-gray-600 hover:text-gray-900 p-2 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {selectedMaterial.content.summary && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
                <p className="text-gray-700 font-medium">{selectedMaterial.content.summary}</p>
              </div>
            )}

            {selectedMaterial.content.keyPoints && selectedMaterial.content.keyPoints.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">📌</span> Key Points
                </h3>
                <ul className="space-y-2">
                  {selectedMaterial.content.keyPoints.map((point, idx) => (
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
                <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">{currentSection.content}</p>

                {currentSection.subsections && currentSection.subsections.length > 0 && (
                  <div className="space-y-4 mt-4">
                    {currentSection.subsections.map((subsection, idx) => (
                      <div key={idx} className="bg-white p-4 rounded border-l-4 border-blue-400">
                        <h4 className="font-semibold text-gray-900 mb-2">{subsection.title}</h4>
                        <p className="text-gray-700 text-sm whitespace-pre-wrap">{subsection.content}</p>
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
                onClick={() => handleDownload(selectedMaterial)}
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
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="text-2xl">📚</span> Study Materials
        </h2>
        <p className="text-gray-600 text-sm">
          Click on any material below to view comprehensive guides, templates, and checklists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {materials.map((material) => (
          <Card
            key={material.id}
            className={`${getTypeColor(material.type)} border-2 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            onClick={() => {
              setSelectedMaterial(material);
              setCurrentSectionIndex(0);
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-white rounded-lg">
                  {getTypeIcon(material.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">{material.description}</p>
                </div>
              </div>
            </div>

            {/* Type Badge */}
            <div className="mb-2">
              <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-white bg-opacity-60 text-gray-700">
                {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {material.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs bg-white bg-opacity-40 px-2 py-0.5 rounded text-gray-700">
                  {tag}
                </span>
              ))}
              {material.tags.length > 2 && (
                <span className="text-xs bg-white bg-opacity-40 px-2 py-0.5 rounded text-gray-700">
                  +{material.tags.length - 2}
                </span>
              )}
            </div>

            {/* Action Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMaterial(material);
                setCurrentSectionIndex(0);
              }}
              className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              View Material →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

function generateTextContent(material: LessonStudyMaterial): string {
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
