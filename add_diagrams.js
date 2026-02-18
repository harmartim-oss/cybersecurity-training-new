const fs = require('fs');
const filePath = './client/src/pages/Lesson.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the position to insert diagrams
const insertPoint = content.indexOf('        {/* Visual Content - Infographics, Videos, Timelines */}');

if (insertPoint !== -1) {
  const before = content.substring(0, insertPoint);
  const after = content.substring(insertPoint);
  
  const diagramCode = `        {/* Interactive Diagrams - Module Specific */}
        {moduleId === 2 && lessonId === 1 && <CIATriadDiagram />}
        {moduleId === 1 && lessonId === 1 && <PrivacyLawFrameworkDiagram />}
        {moduleId === 2 && lessonId === 2 && <ThreatMatrixDiagram />}
        {moduleId === 4 && lessonId === 1 && <DataGovernanceLifecycleDiagram />}
        {moduleId === 3 && lessonId === 1 && <AIEthicsPrinciplesDiagram />}

        `;
  
  content = before + diagramCode + after;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Added diagram rendering to Lesson.tsx');
} else {
  console.log('Could not find insertion point');
}
