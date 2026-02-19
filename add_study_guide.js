const fs = require('fs');
const filePath = './client/src/pages/Lesson.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add import for StudyGuideDownload
const importLine = "import { getVisualLessonContent } from '@/data/visualLessonData';";
if (!content.includes('StudyGuideDownload')) {
  const insertPoint = content.indexOf(importLine) + importLine.length;
  const newImport = `\nimport { StudyGuideDownload } from '@/components/training/StudyGuideDownload';`;
  content = content.substring(0, insertPoint) + newImport + content.substring(insertPoint);
}

// Find the end of the lesson content section and add study guide before navigation buttons
const navigationSection = `{/* Navigation Buttons */}`;
if (content.includes(navigationSection)) {
  const insertPoint = content.indexOf(navigationSection);
  const studyGuideSection = `{/* Study Guide Download */}
        <StudyGuideDownload moduleId={moduleId} className="mb-8" />

        `;
  content = content.substring(0, insertPoint) + studyGuideSection + content.substring(insertPoint);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added StudyGuideDownload to Lesson.tsx');
