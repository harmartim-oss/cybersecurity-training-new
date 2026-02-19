import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StudyMaterial, getStudyMaterialsByModule } from '@/data/studyMaterials';
import { StudyMaterialModal } from './StudyMaterialModal';
import { ArrowRight, BookOpen, FileText, CheckSquare, Lightbulb } from 'lucide-react';

interface StudyMaterialCardsProps {
  moduleId: number;
  className?: string;
}

export const StudyMaterialCards: React.FC<StudyMaterialCardsProps> = ({ moduleId, className = '' }) => {
  const materials = getStudyMaterialsByModule(moduleId);
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (materials.length === 0) {
    return null;
  }

  const handleOpenMaterial = (material: StudyMaterial) => {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  };

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
        return 'from-blue-50 to-blue-100 border-blue-300';
      case 'template':
        return 'from-purple-50 to-purple-100 border-purple-300';
      case 'checklist':
        return 'from-green-50 to-green-100 border-green-300';
      case 'reference':
        return 'from-orange-50 to-orange-100 border-orange-300';
      default:
        return 'from-gray-50 to-gray-100 border-gray-300';
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case 'guide':
        return 'text-blue-700';
      case 'template':
        return 'text-purple-700';
      case 'checklist':
        return 'text-green-700';
      case 'reference':
        return 'text-orange-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="text-2xl">📚</span> Study Materials
        </h2>
        <p className="text-gray-600">
          Access comprehensive study guides, templates, and checklists to enhance your learning experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materials.map((material) => (
          <Card
            key={material.id}
            className={`bg-gradient-to-br ${getTypeColor(material.type)} border-2 p-5 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            onClick={() => handleOpenMaterial(material)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3 flex-1">
                <div className={`p-2 bg-white rounded-lg ${getTypeTextColor(material.type)}`}>
                  {getTypeIcon(material.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{material.description}</p>
                </div>
              </div>
            </div>

            {/* Type Badge */}
            <div className="mb-3">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeTextColor(material.type)} bg-white bg-opacity-60`}>
                {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {material.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded text-gray-700">
                  {tag}
                </span>
              ))}
              {material.tags.length > 3 && (
                <span className="text-xs bg-white bg-opacity-50 px-2 py-1 rounded text-gray-700">
                  +{material.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Content Preview */}
            {material.content.keyPoints && material.content.keyPoints.length > 0 && (
              <div className="mb-4 p-3 bg-white bg-opacity-40 rounded">
                <p className="text-xs font-semibold text-gray-700 mb-2">Key Points:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  {material.content.keyPoints.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                  {material.content.keyPoints.length > 2 && (
                    <li className="text-gray-600 italic">+{material.content.keyPoints.length - 2} more points</li>
                  )}
                </ul>
              </div>
            )}

            {/* Action Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenMaterial(material);
              }}
              className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              View Material
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>

      {/* Learning Tips */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 p-5">
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> How to Use These Materials
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="font-bold text-orange-600">1.</span>
            <span><strong>Guides:</strong> Read comprehensive guides to understand concepts deeply and learn best practices.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-orange-600">2.</span>
            <span><strong>Templates:</strong> Use templates as starting points for your own implementations and projects.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-orange-600">3.</span>
            <span><strong>Checklists:</strong> Follow checklists to ensure you don't miss important steps in processes.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-orange-600">4.</span>
            <span><strong>Download & Print:</strong> Download materials for offline access or print them for reference.</span>
          </li>
        </ul>
      </Card>

      {/* Modal */}
      {selectedMaterial && (
        <StudyMaterialModal
          material={selectedMaterial}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
