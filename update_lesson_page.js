const fs = require('fs');
const filePath = './client/src/pages/Lesson.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add import for LessonStudyMaterials
if (!content.includes('LessonStudyMaterials')) {
  const importLine = "import { StudyMaterialCards } from '@/components/training/StudyMaterialCards';";
  if (content.includes(importLine)) {
    const insertPoint = content.indexOf(importLine) + importLine.length;
    const newImport = `\nimport { LessonStudyMaterials } from '@/components/training/LessonStudyMaterials';`;
    content = content.substring(0, insertPoint) + newImport + content.substring(insertPoint);
  }
}

// Replace StudyMaterialCards with LessonStudyMaterials
content = content.replace(
  /<StudyMaterialCards moduleId={moduleId} className="mb-8" \/>/g,
  '<LessonStudyMaterials lessonId={lessonId} className="mb-8" />'
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated Lesson.tsx with LessonStudyMaterials');
