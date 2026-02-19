const fs = require('fs');
const filePath = './client/src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Add import for ModuleCompletion
if (!content.includes('ModuleCompletion')) {
  const importPoint = content.indexOf("import LessonPage from '@/pages/Lesson';");
  if (importPoint !== -1) {
    const insertPoint = content.indexOf('\n', importPoint) + 1;
    content = content.substring(0, insertPoint) + "import ModuleCompletion from '@/pages/ModuleCompletion';\n" + content.substring(insertPoint);
  }
}

// Add route for module completion
if (!content.includes('/module/:moduleId/completion')) {
  const routePoint = content.indexOf('<Route path="/lesson/:moduleId/:lessonId" component={LessonPage} />');
  if (routePoint !== -1) {
    const insertPoint = content.indexOf('\n', routePoint) + 1;
    content = content.substring(0, insertPoint) + '        <Route path="/module/:moduleId/completion" component={ModuleCompletion} />\n' + content.substring(insertPoint);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added ModuleCompletion route to App.tsx');
