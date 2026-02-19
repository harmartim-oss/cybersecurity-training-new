import { jsPDF } from 'jspdf';
import { StudyGuide } from '@/data/studyGuides';

export const generateStudyGuidePDF = (studyGuide: StudyGuide): Blob => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addWrappedText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      (pdf as any).setFont(undefined, 'bold');
    } else {
      (pdf as any).setFont(undefined, 'normal');
    }

    const lines = pdf.splitTextToSize(text, contentWidth) as string[];
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += fontSize / 2.5;
    });
  };

  // Helper function to add section spacing
  const addSpacing = (space: number = 5) => {
    yPosition += space;
  };

  // Title Page
  pdf.setFillColor(25, 118, 210); // Blue background
  pdf.rect(0, 0, pageWidth, pageHeight * 0.3, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  (pdf as any).setFont(undefined, 'bold');
  const titleLines = pdf.splitTextToSize(studyGuide.moduleName, contentWidth - 10) as string[];
  let titleY = 40;
  titleLines.forEach((line: string) => {
    pdf.text(line, margin + 5, titleY);
    titleY += 15;
  });

  // Subtitle
  pdf.setFontSize(12);
  (pdf as any).setFont(undefined, 'normal');
  pdf.text('Study Guide & Reference Material', margin + 5, titleY + 10);

  // Footer on title page
  pdf.setFontSize(10);
  pdf.setTextColor(100, 100, 100);
  pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, pageHeight - 15);
  pdf.text('Ontario CyberSafe Certification Platform', margin, pageHeight - 10);

  // Add new page for content
  pdf.addPage();
  yPosition = margin;

  // Table of Contents
  addWrappedText('Table of Contents', 16, true, [25, 118, 210]);
  addSpacing(8);

  studyGuide.sections.forEach((section, index) => {
    addWrappedText(`${index + 1}. ${section.title}`, 11, false, [0, 0, 0]);
    addSpacing(3);
  });

  addWrappedText('Key Terms', 11, false, [0, 0, 0]);
  addSpacing(3);
  addWrappedText('Practice Questions', 11, false, [0, 0, 0]);
  addSpacing(3);
  addWrappedText('Resources', 11, false, [0, 0, 0]);

  // Add new page for sections
  pdf.addPage();
  yPosition = margin;

  // Sections
  studyGuide.sections.forEach((section, sectionIndex) => {
    // Section title
    addWrappedText(`${sectionIndex + 1}. ${section.title}`, 14, true, [25, 118, 210]);
    addSpacing(5);

    // Section content
    addWrappedText(section.content, 10, false, [0, 0, 0]);
    addSpacing(5);

    // Subsections
    if (section.subsections) {
      section.subsections.forEach((subsection) => {
        addWrappedText(subsection.title, 12, true, [50, 50, 50]);
        addSpacing(3);
        addWrappedText(subsection.content, 10, false, [0, 0, 0]);
        addSpacing(5);
      });
    }

    addSpacing(8);
  });

  // Key Terms Page
  pdf.addPage();
  yPosition = margin;

  addWrappedText('Key Terms & Definitions', 16, true, [25, 118, 210]);
  addSpacing(8);

  studyGuide.keyTerms.forEach((term) => {
    addWrappedText(term.term, 11, true, [25, 118, 210]);
    addSpacing(2);
    addWrappedText(term.definition, 10, false, [0, 0, 0]);
    addSpacing(5);
  });

  // Practice Questions Page
  pdf.addPage();
  yPosition = margin;

  addWrappedText('Practice Questions', 16, true, [25, 118, 210]);
  addSpacing(8);

  studyGuide.practiceQuestions.forEach((question, qIndex) => {
    addWrappedText(`Question ${qIndex + 1}: ${question.question}`, 11, true, [0, 0, 0]);
    addSpacing(3);

    if (question.options) {
      question.options.forEach((option, optIndex) => {
        const optionLetter = String.fromCharCode(65 + optIndex); // A, B, C, D
        addWrappedText(`${optionLetter}. ${option}`, 10, false, [0, 0, 0]);
        addSpacing(2);
      });
    }

    addWrappedText(`Answer: ${question.answer}`, 10, true, [76, 175, 80]);
    addSpacing(2);
    addWrappedText(`Explanation: ${question.explanation}`, 9, false, [100, 100, 100]);
    addSpacing(8);
  });

  // Resources Page
  pdf.addPage();
  yPosition = margin;

  addWrappedText('Resources & References', 16, true, [25, 118, 210]);
  addSpacing(8);

  studyGuide.resources.forEach((resource) => {
    addWrappedText(resource.title, 11, true, [25, 118, 210]);
    addSpacing(2);
    addWrappedText(`Type: ${resource.type}`, 9, false, [100, 100, 100]);
    addSpacing(1);
    addWrappedText(resource.description, 10, false, [0, 0, 0]);
    addSpacing(6);
  });

  // Footer on last page
  pdf.setFontSize(9);
  pdf.setTextColor(150, 150, 150);
  pdf.text('© Ontario CyberSafe Certification Platform', margin, pageHeight - 10);
  pdf.setTextColor(0, 0, 0);

  // Return PDF as Blob
  return pdf.output('blob') as Blob;
};

export const downloadStudyGuide = (studyGuide: StudyGuide): void => {
  try {
    const pdfBlob = generateStudyGuidePDF(studyGuide);
    
    // Create a temporary URL for the blob
    const url = URL.createObjectURL(pdfBlob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = studyGuide.fileName || `${studyGuide.moduleName.replace(/\s+/g, '_')}_Study_Guide.pdf`;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('Error downloading study guide:', error);
    alert('Failed to download study guide. Please try again.');
  }
};
