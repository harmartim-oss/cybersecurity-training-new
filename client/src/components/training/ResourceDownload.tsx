import React, { useState } from 'react';
import { Download, FileText, File, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LessonResource, getLessonResources } from '@/data/lessonResources';
import { downloadResourceDocument, DocumentFormat } from '@/lib/resourceDocumentGenerator';

interface ResourceDownloadProps {
  lessonId: number | string;
  className?: string;
}

export const ResourceDownload: React.FC<ResourceDownloadProps> = ({ lessonId, className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<DocumentFormat>('pdf');
  const [showFormatMenu, setShowFormatMenu] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Convert lessonId to string if it's a number (for lesson key lookup)
  // Lesson keys are formatted as "module-lesson" (e.g., "1-1", "1-2", etc.)
  const lessonIdStr = typeof lessonId === 'number' ? `1-${lessonId}` : lessonId;
  const resource = getLessonResources(lessonIdStr);

  if (!resource) {
    return null;
  }

  const handleDownload = async (format: DocumentFormat) => {
    try {
      setIsLoading(true);
      downloadResourceDocument(resource, format);
      setDownloadSuccess(true);
      setShowFormatMenu(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download resource. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const formatOptions = [
    { value: 'pdf' as DocumentFormat, label: 'PDF', icon: FileText },
    { value: 'txt' as DocumentFormat, label: 'Text', icon: File },
  ];

  return (
    <div className={`${className}`}>
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">Download Resources</h3>
          <p className="text-sm text-gray-600">
            Download comprehensive study materials for this lesson
          </p>
        </div>

        <div className="relative">
          <Button
            onClick={() => setShowFormatMenu(!showFormatMenu)}
            disabled={isLoading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            Download {selectedFormat.toUpperCase()}
          </Button>

          {showFormatMenu && !isLoading && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {formatOptions.map(option => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedFormat(option.value);
                      handleDownload(option.value);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                  >
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {downloadSuccess && (
        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <p className="text-sm text-green-700">
            ✓ Resource downloaded successfully!
          </p>
        </div>
      )}

      {/* Resource Preview */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>✓ Comprehensive study guide</li>
          <li>✓ Key concepts and definitions</li>
          <li>✓ Best practices and templates</li>
          <li>✓ Checklists and reference materials</li>
          <li>✓ Useful resources and links</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceDownload;
