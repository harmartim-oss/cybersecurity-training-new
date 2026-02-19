const fs = require('fs');
const filePath = './client/src/pages/Dashboard.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace achievements section with badges section
const oldAchievements = `        {/* Achievements Section */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((achievement) => {
              const earned = progress.achievements.includes(achievement.id);
              return (
                <div
                  key={achievement.id}
                  className={\`p-4 rounded-lg text-center transition-all \${
                    earned
                      ? 'bg-yellow-50 border-2 border-yellow-300'
                      : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                  }\`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className="font-semibold text-gray-900 text-sm">{achievement.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </Card>`;

const newBadges = `        {/* Achievement Level */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Achievement Level</p>
              <p className="text-3xl font-bold text-purple-600">{getAchievementLevel(calculateTotalPoints(progress.badges))}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Total Points</p>
              <p className="text-3xl font-bold text-blue-600">{calculateTotalPoints(progress.badges)}</p>
            </div>
          </div>
        </Card>

        {/* Badges Section */}
        <Card className="p-8">
          <BadgeCollection
            badges={progress.badges}
            onBadgeClick={setSelectedBadge}
          />
        </Card>

        {/* Badge Modal */}
        <BadgeModal badge={selectedBadge} onClose={() => setSelectedBadge(null)} />`;

content = content.replace(oldAchievements, newBadges);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Replaced achievements section with badges');
