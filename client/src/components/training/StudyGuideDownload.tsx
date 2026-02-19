import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, FileText, BookOpen } from 'lucide-react';
import { StudyGuide, getStudyGuide } from '@/data/studyGuides';
import { downloadStudyGuide } from '@/lib/pdfGenerator';

interface StudyGuideDownloadProps {
  moduleId: number;
  className?: string;
}

export const StudyGuideDownload: React.FC<StudyGuideDownloadProps> = ({ moduleId, className = '' }) => {
  const studyGuide = getStudyGuide(moduleId);

  if (!studyGuide) {
    return null;
  }

  const handleDownload = () => {
    downloadStudyGuide(studyGuide);
  };

  return (
    <Card className={`p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Study Guide Available</h3>
            <p className="text-sm text-gray-600 mb-3">
              Download comprehensive study materials including key concepts, definitions, practice questions, and resources for offline learning.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
              <span className="bg-white px-2 py-1 rounded">📋 Key Terms</span>
              <span className="bg-white px-2 py-1 rounded">❓ Practice Questions</span>
              <span className="bg-white px-2 py-1 rounded">📚 Resources</span>
              <span className="bg-white px-2 py-1 rounded">✏️ Comprehensive Notes</span>
            </div>
          </div>
        </div>
        <Button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>
    </Card>
  );
};

export const StudyGuideSection: React.FC<{ moduleId: number }> = ({ moduleId }) => {
  const studyGuide = getStudyGuide(moduleId);

  if (!studyGuide) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          Study Materials
        </h2>
        <p className="text-gray-600 mb-4">
          Access comprehensive study guides for this module. Our study materials include detailed explanations, key terms, practice questions, and resources to help you master the content.
        </p>
      </div>

      <StudyGuideDownload moduleId={moduleId} />

      {/* Preview of Contents */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included in This Study Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-2">📖 Comprehensive Content</h4>
            <p className="text-sm text-gray-600">{studyGuide.sections.length} detailed sections covering all key topics and concepts.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-gray-900 mb-2">📚 Key Terms</h4>
            <p className="text-sm text-gray-600">{studyGuide.keyTerms.length} essential terms with clear definitions for quick reference.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-gray-900 mb-2">❓ Practice Questions</h4>
            <p className="text-sm text-gray-600">{studyGuide.practiceQuestions.length} practice questions with answers and explanations.</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-2">🔗 Resources</h4>
            <p className="text-sm text-gray-600">{studyGuide.resources.length} curated resources for further learning and reference.</p>
          </div>
        </div>
      </Card>

      {/* Study Tips */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Study Tips</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-lg">✓</span>
            <span><strong>Review Key Terms:</strong> Start by familiarizing yourself with the key terms and definitions. These form the foundation of understanding.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">✓</span>
            <span><strong>Read Sections Actively:</strong> As you read each section, take notes and highlight important concepts. Try to summarize in your own words.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">✓</span>
            <span><strong>Practice Questions:</strong> Test your understanding with practice questions. Review explanations for any questions you get wrong.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">✓</span>
            <span><strong>Use Resources:</strong> Explore the recommended resources for deeper understanding and real-world applications.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg">✓</span>
            <span><strong>Spaced Repetition:</strong> Review the material multiple times over several days to improve retention.</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
