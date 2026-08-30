import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('=== Remote D1 데이터베이스 전체 풀 복구 세딩 프로세스 시작 ===');

const sqlFiles = [
  // Python 46 lessons (p1 ~ p12)
  'scratch/seed_python_master_p1.sql',
  'scratch/seed_python_master_p2.sql',
  'scratch/seed_python_master_p3.sql',
  'scratch/seed_python_master_p4.sql',
  'scratch/seed_python_master_p5.sql',
  'scratch/seed_python_master_p6.sql',
  'scratch/seed_python_master_p7.sql',
  'scratch/seed_python_master_p8.sql',
  'scratch/seed_python_master_p9.sql',
  'scratch/seed_python_master_p10.sql',
  'scratch/seed_python_master_p11.sql',
  'scratch/seed_python_master_p12.sql',

  // Data Structure 25 lessons (p1 ~ p7)
  'scratch/seed_ds_master_p1.sql',
  'scratch/seed_ds_master_p2.sql',
  'scratch/seed_ds_master_p3.sql',
  'scratch/seed_ds_master_p4.sql',
  'scratch/seed_ds_master_p5.sql',
  'scratch/seed_ds_master_p6.sql',
  'scratch/seed_ds_master_p7.sql',

  // Database 20 lessons (p1 ~ p5)
  'scratch/seed_database_super_p1.sql',
  'scratch/seed_database_super_p2.sql',
  'scratch/seed_database_super_p3.sql',
  'scratch/seed_database_super_p4.sql',
  'scratch/seed_database_super_p5.sql',

  // Mobile 21 lessons (p1 ~ p5)
  'scratch/seed_mobile_ultra_p1.sql',
  'scratch/seed_mobile_ultra_p2.sql',
  'scratch/seed_mobile_ultra_p3.sql',
  'scratch/seed_mobile_ultra_p4.sql',
  'scratch/seed_mobile_ultra_p5.sql',

  // AI 20 lessons (p1 ~ p5)
  'scratch/seed_ai_mega_p1.sql',
  'scratch/seed_ai_mega_p2.sql',
  'scratch/seed_ai_mega_p3.sql',
  'scratch/seed_ai_mega_p4.sql',
  'scratch/seed_ai_mega_p5.sql',

  // Java 16 lessons (p1 ~ p4)
  'scratch/seed_java_prof_p1.sql',
  'scratch/seed_java_prof_p2.sql',
  'scratch/seed_java_prof_p3.sql',
  'scratch/seed_java_prof_p4.sql',

  // C-Basics 17 lessons (p1 ~ p3)
  'scratch/seed_c_basics_part1.sql',
  'scratch/seed_c_basics_part2.sql',
  'scratch/seed_c_basics_part3.sql',

  // HTML5 Web 14 lessons (part1 ~ part2)
  'scratch/seed_html5_web_part1.sql',
  'scratch/seed_html5_web_part2.sql',

  // Arduino 12 lessons (ext1 ~ ext3)
  'scratch/seed_arduino_ext1.sql',
  'scratch/seed_arduino_ext2.sql',
  'scratch/seed_arduino_ext3.sql',

  // Algorithm Fixes
  'scratch/fix_algorithm_titles.sql'
];

for (let i = 0; i < sqlFiles.length; i++) {
  const file = sqlFiles[i];
  if (fs.existsSync(file)) {
    console.log(`[${i + 1}/${sqlFiles.length}] Remote D1 세딩: ${file}...`);
    try {
      execSync(`npx wrangler d1 execute davhave-content --remote --file=./${file}`, { stdio: 'ignore' });
    } catch (e) {
      console.error(`[오류] ${file} 적용 중 예외:`, e.message);
    }
  } else {
    console.warn(`[경고] 파일 없음: ${file}`);
  }
}

console.log('=== Remote D1 일괄 복구 세딩 완벽 완료! ===');
