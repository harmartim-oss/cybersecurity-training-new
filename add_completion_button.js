const fs = require('fs');
const filePath = './client/src/pages/Lesson.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Find the navigation buttons section and add completion button
const navigationSection = content.indexOf('        {/* Navigation Buttons */}');
if (navigationSection !== -1) {
  // Find the closing div of navigation buttons
  const nextButtonIndex = content.indexOf('onClick={() => goToNextLesson()}', navigationSection);
  const closeNavIndex = content.indexOf('</div>', nextButtonIndex);
  
  if (closeNavIndex !== -1) {
    // Check if last lesson - add completion button
    const insertPoint = closeNavIndex;
    const completionButton = `
        {isLastLesson && (
          <Button
            onClick={() => setLocation(\`/module/\${moduleId}/completion\`)}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            Complete Module & Take Quiz
          </Button>
        )}
        `;
    
    content = content.substring(0, insertPoint) + completionButton + content.substring(insertPoint);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Added completion button to Lesson page');
  }
}
