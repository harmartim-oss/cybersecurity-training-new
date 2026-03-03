import { jsPDF } from 'jspdf';
import { LessonResource } from '@/data/lessonResources';

export type DocumentFormat = 'pdf' | 'txt' | 'docx';

interface DocumentOptions {
  format: DocumentFormat;
  title: string;
  author?: string;
  includeTimestamp?: boolean;
}

/**
 * Generate a text representation of lesson resources
 */
export function generatePlainText(resource: LessonResource): string {
  let text = '';
  
  // Header
  text += `${resource.title}\n`;
  text += `${'='.repeat(resource.title.length)}\n\n`;
  
  if (resource.description) {
    text += `Description: ${resource.description}\n\n`;
  }
  
  // Sections
  resource.sections.forEach((section, index) => {
    text += `${index + 1}. ${section.title}\n`;
    text += `${'-'.repeat(section.title.length + 3)}\n`;
    
    if (section.content) {
      text += `${section.content}\n\n`;
    }
    
    if (section.items && section.items.length > 0) {
      section.items.forEach(item => {
        text += `• ${item}\n`;
      });
      text += '\n';
    }
  });
  
  // Footer
  text += `\nGenerated: ${new Date().toLocaleString()}\n`;
  text += 'Ontario CyberSafe Certification Platform\n';
  
  return text;
}

/**
 * Generate a PDF document from lesson resources
 */
export function generatePDF(resource: LessonResource, options: Partial<DocumentOptions> = {}): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;
  
  // Set fonts
  const titleFontSize = 18;
  const headingFontSize = 14;
  const bodyFontSize = 10;
  const lineHeight = 5;
  
  // Title
  doc.setFontSize(titleFontSize);
  doc.setFont('helvetica', 'bold');
  const titleLines = doc.splitTextToSize(resource.title, contentWidth);
  titleLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += lineHeight + 2;
  });
  
  yPosition += 5;
  
  // Description
  if (resource.description) {
    doc.setFontSize(bodyFontSize);
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(resource.description, contentWidth);
    descLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
    yPosition += 5;
  }
  
  // Sections
  resource.sections.forEach((section, sectionIndex) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = margin;
    }
    
    // Section heading
    doc.setFontSize(headingFontSize);
    doc.setFont('helvetica', 'bold');
    const sectionTitle = `${sectionIndex + 1}. ${section.title}`;
    const sectionLines = doc.splitTextToSize(sectionTitle, contentWidth);
    sectionLines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight + 1;
    });
    
    yPosition += 2;
    
    // Section content
    if (section.content) {
      doc.setFontSize(bodyFontSize);
      doc.setFont('helvetica', 'normal');
      const contentLines = doc.splitTextToSize(section.content, contentWidth);
      contentLines.forEach((line: string) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 3;
    }
    
    // Section items
    if (section.items && section.items.length > 0) {
      doc.setFontSize(bodyFontSize);
      doc.setFont('helvetica', 'normal');
      section.items.forEach(item => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = margin;
        }
        const itemLines = doc.splitTextToSize(`• ${item}`, contentWidth - 5);
        itemLines.forEach((line: string, lineIndex: number) => {
          if (lineIndex === 0) {
            doc.text(line, margin + 5, yPosition);
          } else {
            doc.text(line, margin + 8, yPosition);
          }
          yPosition += lineHeight;
        });
      });
      yPosition += 3;
    }
  });
  
  // Footer on last page
  if (yPosition < pageHeight - 15) {
    yPosition = pageHeight - 15;
  }
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(128, 128, 128);
  doc.text(`Generated: ${new Date().toLocaleString()}`, margin, yPosition);
  doc.text('Ontario CyberSafe Certification Platform', margin, yPosition + 5);
  
  return doc;
}

/**
 * Download a resource document in the specified format
 */
export function downloadResourceDocument(
  resource: LessonResource,
  format: DocumentFormat = 'pdf'
): void {
  const filename = resource.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  try {
    if (format === 'pdf') {
      const doc = generatePDF(resource);
      doc.save(`${filename}.pdf`);
    } else if (format === 'txt') {
      const text = generatePlainText(resource);
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else if (format === 'docx') {
      // For DOCX, we'll generate as text and let user know to convert
      const text = generatePlainText(resource);
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      // Note: DOCX format requires additional library (docx or similar)
      // For now, we provide text format as alternative
    }
  } catch (error) {
    console.error('Error downloading resource document:', error);
    throw new Error('Failed to download resource document');
  }
}

/**
 * Get the MIME type for a document format
 */
export function getDocumentMimeType(format: DocumentFormat): string {
  switch (format) {
    case 'pdf':
      return 'application/pdf';
    case 'txt':
      return 'text/plain';
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    default:
      return 'application/octet-stream';
  }
}

/**
 * Get the file extension for a document format
 */
export function getDocumentExtension(format: DocumentFormat): string {
  switch (format) {
    case 'pdf':
      return '.pdf';
    case 'txt':
      return '.txt';
    case 'docx':
      return '.docx';
    default:
      return '';
  }
}
