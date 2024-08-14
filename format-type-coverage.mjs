import fs from 'fs';
import path from 'path';

try {
  const output = fs.readFileSync(0, 'utf-8').split('\n');
  const rootDir = process.cwd();

  const fileIssues = {};
  let coveragePercentage = null;

  output.forEach((line) => {
    if (line.startsWith('')) {
      coveragePercentage = line.trim();
    } else if (line.includes(':')) {
      const [filePath, ...rest] = line.split(':');
      const relativePath = path.relative(rootDir, filePath);
      const issue = rest.join(':').trim();

      if (!fileIssues[relativePath]) {
        fileIssues[relativePath] = [];
      }
      fileIssues[relativePath].push(issue);
    }
  });

  console.log('Type Coverage Report:\n');

  if (coveragePercentage) {
    console.log(`Overall Coverage: ${coveragePercentage}\n`);
  }

  if (Object.keys(fileIssues).length === 0) {
    console.log('No type coverage issues found.');
  } else {
    console.log('Type Coverage Issues:\n');
    Object.entries(fileIssues).forEach(([file, issues]) => {
      console.log(`File: ${file}`);
      issues.forEach((issue) => console.log(`  - ${issue}`));
      console.log('');
    });
  }
} catch (error) {
  console.error('Error processing type coverage:', error);
  process.exit(1);
}
