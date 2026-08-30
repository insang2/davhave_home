import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { marked } from 'marked';

console.log('=== 미달 및 에러 레슨 47개 무결점 2500자+ 대용량 자동 교정 프로세스 시작 ===');

// Fix database/ch04 and arduino/ch10 and data-structure/python short lessons
// Re-generate database super script and re-run
execSync('node scratch/build_database_super_2500_20.js', { stdio: 'inherit' });
execSync('node scratch/build_data_structure_master_25.js', { stdio: 'inherit' });

console.log('=== D1 재세딩 실행 ===');
const fixes = [
  'scratch/seed_database_super_p1.sql',
  'scratch/seed_database_super_p2.sql',
  'scratch/seed_database_super_p3.sql',
  'scratch/seed_database_super_p4.sql',
  'scratch/seed_database_super_p5.sql',
  'scratch/seed_ds_master_p1.sql',
  'scratch/seed_ds_master_p2.sql',
  'scratch/seed_ds_master_p3.sql',
  'scratch/seed_ds_master_p4.sql',
  'scratch/seed_ds_master_p5.sql',
  'scratch/seed_ds_master_p6.sql',
  'scratch/seed_ds_master_p7.sql',
  'scratch/seed_arduino_ext1.sql',
  'scratch/seed_arduino_ext2.sql',
  'scratch/seed_arduino_ext3.sql'
];

for (const file of fixes) {
  if (fs.existsSync(file)) {
    console.log(`[Re-Seeding] ${file}...`);
    try {
      execSync(`npx wrangler d1 execute davhave-content --remote --file=./${file}`, { stdio: 'ignore' });
    } catch (e) {
      console.error(`Error seeding ${file}:`, e.message);
    }
  }
}

console.log('=== 모든 교정 세딩 완료 ===');
