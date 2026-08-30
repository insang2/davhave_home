import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('=== DAVHAVE 전체 카테고리 풀 데이터베이스 일괄 원복 프로세스 시작 ===');

const scriptsToRun = [
  'scratch/build_python_master_full_46.js',        // Python 46 lessons
  'scratch/build_data_structure_master_25.js',      // Data Structure 25 lessons
  'scratch/build_database_super_2500_20.js',        // Database 20 lessons
  'scratch/build_mobile_ultra_all_21.js',           // Mobile 21 lessons
  'scratch/build_ai_mega_enhanced_lessons.js',      // AI 20 lessons
  'scratch/build_c_basics_lessons.js',              // C Basics 17 lessons
  'scratch/build_java_professor_lessons.js',        // Java 16 lessons
  'scratch/build_html5_web_lessons.js',             // HTML5 Web 14 lessons
  'scratch/build_arduino_enhanced_lessons.js',      // Arduino 12 lessons
  'scratch/build_algorithm_lessons.js'              // Algorithm 12 lessons
];

for (const script of scriptsToRun) {
  console.log(`[실행 중] ${script}...`);
  try {
    execSync(`node ${script}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`[오류 발생] ${script}:`, e.message);
  }
}

console.log('=== 모든 마스터 빌드 스크립트 실행 완료! ===');
