import { execSync } from 'child_process';
import fs from 'fs';

console.log('=== 알고리즘 20개 대용량 메가 레슨 D1 세딩 시작 ===');

try {
  console.log('[1/2] 기존 algorithm 데이터 정리...');
  execSync(`npx wrangler d1 execute davhave-content --local --command="DELETE FROM posts WHERE category='algorithm';"`, { stdio: 'inherit' });
  execSync(`npx wrangler d1 execute davhave-content --remote --command="DELETE FROM posts WHERE category='algorithm';"`, { stdio: 'inherit' });
} catch (e) {
  console.error('Delete error:', e.message);
}

const parts = [
  'scratch/seed_algorithm_mega_p1.sql',
  'scratch/seed_algorithm_mega_p2.sql',
  'scratch/seed_algorithm_mega_p3.sql',
  'scratch/seed_algorithm_mega_p4.sql',
  'scratch/seed_algorithm_mega_p5.sql'
];

for (let i = 0; i < parts.length; i++) {
  const p = parts[i];
  console.log(`[2/2] Part ${i + 1} 적용 중: ${p}...`);
  execSync(`npx wrangler d1 execute davhave-content --local --file=./${p}`, { stdio: 'inherit' });
  execSync(`npx wrangler d1 execute davhave-content --remote --file=./${p}`, { stdio: 'inherit' });
}

console.log('=== 알고리즘 20개 레슨 D1 세딩 성공 완료! ===');
