import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Download,
  Share2,
  Image as ImageIcon,
  Video,
  BarChart3,
  FileText,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';

// ============================================================================
// VIDEO PLAYER COMPONENT
// ============================================================================
interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description?: string;
  duration: string;
  thumbnail?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  description,
  duration,
  thumbnail
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Card className="my-6 border-2 border-blue-200 overflow-hidden">
      <div className="bg-black relative">
        {/* Video Container */}
        <div className={`relative bg-black ${isFullscreen ? 'fixed inset-0 z-50' : 'w-full aspect-video'}`}>
          {/* Placeholder for video */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center">
              <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Video Player</p>
              <p className="text-gray-500 text-xs mt-2">{videoUrl}</p>
            </div>
          </div>

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center group">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <span className="text-white text-sm">{duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="text-white hover:text-blue-400 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-700 mb-4">{description}</p>
        )}
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// INFOGRAPHIC COMPONENT
// ============================================================================
interface InfographicProps {
  title: string;
  description?: string;
  imageUrl: string;
  altText: string;
  caption?: string;
}

export const Infographic: React.FC<InfographicProps> = ({
  title,
  description,
  imageUrl,
  altText,
  caption
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <>
      <Card className="my-6 border-2 border-purple-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-purple-600" />
            {title}
          </h3>
          {description && (
            <p className="text-gray-700">{description}</p>
          )}
        </div>

        <div className="p-6 bg-white">
          <div
            className="relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setIsEnlarged(true)}
          >
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          {caption && (
            <p className="text-sm text-gray-600 mt-4 text-center italic">{caption}</p>
          )}
        </div>
      </Card>

      {/* Enlarged Modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsEnlarged(false)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{title}</h3>
              <button
                onClick={() => setIsEnlarged(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img src={imageUrl} alt={altText} className="w-full h-auto" />
              {caption && (
                <p className="text-sm text-gray-600 mt-4 text-center italic">{caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ============================================================================
// IMAGE GALLERY COMPONENT
// ============================================================================
interface GalleryImage {
  url: string;
  title: string;
  description?: string;
}

interface ImageGalleryProps {
  title: string;
  images: GalleryImage[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <Card className="my-6 border-2 border-teal-200 overflow-hidden">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-teal-600" />
          {title}
        </h3>
      </div>

      <div className="p-6 bg-white">
        {/* Main Image */}
        <div
          className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-pointer"
          onClick={() => setIsEnlarged(true)}
        >
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="w-full h-96 object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Image Info */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-900 mb-2">{currentImage.title}</h4>
          {currentImage.description && (
            <p className="text-gray-700">{currentImage.description}</p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="p-2 bg-teal-100 hover:bg-teal-200 text-teal-600 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-teal-600 w-8'
                    : 'bg-teal-300 hover:bg-teal-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 bg-teal-100 hover:bg-teal-200 text-teal-600 rounded-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          {currentIndex + 1} of {images.length}
        </p>
      </div>

      {/* Enlarged Modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsEnlarged(false)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{currentImage.title}</h3>
              <button
                onClick={() => setIsEnlarged(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img src={currentImage.url} alt={currentImage.title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

// ============================================================================
// INTERACTIVE DIAGRAM COMPONENT
// ============================================================================
interface DiagramNode {
  id: string;
  label: string;
  description?: string;
  color?: string;
}

interface DiagramProps {
  title: string;
  nodes: DiagramNode[];
  connections?: Array<{ from: string; to: string }>;
}

export const InteractiveDiagram: React.FC<DiagramProps> = ({
  title,
  nodes,
  connections = []
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <Card className="my-6 border-2 border-indigo-200 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-indigo-600" />
          {title}
        </h3>
      </div>

      <div className="p-6 bg-white">
        <div className="bg-gray-50 rounded-lg p-8 min-h-96 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 ${
                  selectedNode === node.id
                    ? 'border-indigo-600 bg-indigo-50 shadow-lg'
                    : 'border-gray-300 bg-white hover:border-indigo-400'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${node.color || 'bg-indigo-100'}`}>
                  <span className="text-xl font-bold text-white">
                    {node.label.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{node.label}</h4>
                {selectedNode === node.id && node.description && (
                  <p className="text-sm text-gray-700">{node.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// DOWNLOADABLE RESOURCE COMPONENT
// ============================================================================
interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'image' | 'spreadsheet';
  size: string;
  url: string;
}

interface ResourcesProps {
  title: string;
  resources: Resource[];
}

export const DownloadableResources: React.FC<ResourcesProps> = ({
  title,
  resources
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'doc':
        return '📝';
      case 'image':
        return '🖼️';
      case 'spreadsheet':
        return '📊';
      default:
        return '📦';
    }
  };

  return (
    <Card className="my-6 border-2 border-green-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Download className="w-6 h-6 text-green-600" />
          {title}
        </h3>
      </div>

      <div className="p-6 bg-white space-y-3">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all"
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="text-3xl">{getIcon(resource.type)}</span>
              <div>
                <h4 className="font-bold text-gray-900">{resource.title}</h4>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">{resource.size}</span>
              <Button
                onClick={() => window.open(resource.url, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default {
  VideoPlayer,
  Infographic,
  ImageGallery,
  InteractiveDiagram,
  DownloadableResources
};
