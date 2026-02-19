const fs = require('fs');
const filePath = './client/src/pages/Lesson.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add import for StudyMaterialCards
if (!content.includes('StudyMaterialCards')) {
  const importLine = "import { StudyGuideDownload } from '@/components/training/StudyGuideDownload';";
  const insertPoint = content.indexOf(importLine) + importLine.length;
  const newImport = `\nimport { StudyMaterialCards } from '@/components/training/StudyMaterialCards';`;
  content = content.substring(0, insertPoint) + newImport + content.substring(insertPoint);
}

// Find the Study Guide Download section and add Study Materials after it
const studyGuideSection = `{/* Study Guide Download */}
        <StudyGuideDownload moduleId={moduleId} className="mb-8" />`;
if (content.includes(studyGuideSection)) {
  const insertPoint = content.indexOf(studyGuideSection) + studyGuideSection.length;
  const studyMaterialsSection = `

        {/* Study Materials Cards */}
        <StudyMaterialCards moduleId={moduleId} className="mb-8" />`;
  content = content.substring(0, insertPoint) + studyMaterialsSection + content.substring(insertPoint);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added StudyMaterialCards to Lesson.tsx');
