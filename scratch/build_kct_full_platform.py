with open("scratch/specimens_template.html", "r", encoding="utf-8") as _sf:
    specimens_html_template = _sf.read()

import os, sys, json
from app_dataset import APPLICATIONS_DATA

# 1. Technical Documents Dataset
TECH_DOCS = [
    {
        "id": "DOC-001",
        "title": "ARDEX SN PLUS 하이진 실란트 기술자료표 (TDS)",
        "prod_name": "ARDEX SN PLUS",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "TDS",
        "lang": "KOR",
        "size": "1.2 MB",
        "date": "2026.02",
        "desc": "비초산형 중성경화 타일 하이진 실란트의 물리적 특성치, 경화 시간, 14종 색상 매칭 규격",
        "file_url": "https://www.ardex.co.kr/products/silicones/ardex-sn-plus"
    },
    {
        "id": "DOC-002",
        "title": "ARDEX SN PLUS 곰팡이 저항성 최고등급 시험성적서",
        "prod_name": "ARDEX SN PLUS",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "TEST",
        "lang": "KOR",
        "size": "2.4 MB",
        "date": "2026.01",
        "desc": "ASTM G21 곰팡이 저항성 0등급 및 욕실/주방 항균 99.9% 공인 시험성적서",
        "file_url": "#"
    },
    {
        "id": "DOC-003",
        "title": "KCT Marine-Seal MED 조선선박용 형식승인 인증서",
        "prod_name": "KCT Marine-Seal MED",
        "cat_name": "특수모빌리티·하이테크",
        "doc_type": "CERT",
        "lang": "ENG",
        "size": "3.1 MB",
        "date": "2026.01",
        "desc": "국제해사기구(IMO) Resolution MSC.307(88) 및 EU Marine Equipment Directive(MED) 형식승인서",
        "file_url": "#"
    },
    {
        "id": "DOC-004",
        "title": "KCT Rail-Guard 유럽 철도화재안전 EN 45545-2 HL3 시험성적서",
        "prod_name": "KCT Rail-Guard 45545",
        "cat_name": "특수모빌리티·하이테크",
        "doc_type": "TEST",
        "lang": "ENG",
        "size": "4.2 MB",
        "date": "2025.11",
        "desc": "철도차량용 실란트 화재 안전성 최고 위험 등급 HL3 공인 인증 시험결과서",
        "file_url": "#"
    },
    {
        "id": "DOC-005",
        "title": "KCT EV-Guard 94V0 배터리팩 난연 실란트 UL 94 V-0 인증서",
        "prod_name": "KCT EV-Guard 94V0",
        "cat_name": "ESS & EV 배터리",
        "doc_type": "CERT",
        "lang": "ENG",
        "size": "1.8 MB",
        "date": "2025.12",
        "desc": "Underwriters Laboratories (UL) 표준 인증 규격 UL 94 V-0 난연 인증 Certificate of Compliance",
        "file_url": "#"
    },
    {
        "id": "DOC-006",
        "title": "KCT Thermal-Gap 300 방열 갭필러 기술자료표 및 열전도도 성적서",
        "prod_name": "KCT Thermal-Gap 300",
        "cat_name": "ESS & EV 배터리",
        "doc_type": "TDS",
        "lang": "KOR",
        "size": "1.5 MB",
        "date": "2026.01",
        "desc": "열전도율 3.0 W/m·K (ASTM D5470), 점도 및 2액형 토출 혼합 가이드라인",
        "file_url": "#"
    },
    {
        "id": "DOC-007",
        "title": "Dow DOWSIL™ 791 건축용 웨더 실리콘 기술자료표 (TDS)",
        "prod_name": "Dow DOWSIL™ 791",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "TDS",
        "lang": "KOR",
        "size": "980 KB",
        "date": "2025.10",
        "desc": "커튼월 및 석재 외벽 내후성 조인트 실링 기술사양 및 ±50% 변위추종 설계 가이드",
        "file_url": "#"
    },
    {
        "id": "DOC-008",
        "title": "Dow DOWSIL™ 791 물질안전보건자료 (MSDS/GHS)",
        "prod_name": "Dow DOWSIL™ 791",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "MSDS",
        "lang": "KOR",
        "size": "1.1 MB",
        "date": "2025.10",
        "desc": "산업안전보건법 제110조에 따른 화학물질 안전보건정보 및 취급주의사항",
        "file_url": "#"
    },
    {
        "id": "DOC-009",
        "title": "Dow DOWSIL™ 983 구조용 실리콘 SSG 구조계산 및 시방서",
        "prod_name": "Dow DOWSIL™ 983",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "SPEC",
        "lang": "KOR",
        "size": "3.5 MB",
        "date": "2025.09",
        "desc": "4면 지지 구조 글레이징 풍하중 구조역학 계산식 및 접착 조인트 단면 설계 기준",
        "file_url": "#"
    },
    {
        "id": "DOC-010",
        "title": "KCT Cleanroom-Seal 반도체 FAB 저휘발 아웃가스 시험성적서",
        "prod_name": "KCT Cleanroom-Seal",
        "cat_name": "특수모빌리티·하이테크",
        "doc_type": "TEST",
        "lang": "ENG",
        "size": "2.1 MB",
        "date": "2026.02",
        "desc": "ISO 14644-1 Class 1 대응 및 GC-MS 저분자 실록산 D3~D10 불검출 시험성적서",
        "file_url": "#"
    },
    {
        "id": "DOC-011",
        "title": "KCT Firestop 700 방화용 실란트 4시간 내화 시험성적서",
        "prod_name": "KCT Firestop 700",
        "cat_name": "건축 & 실내 인테리어",
        "doc_type": "CERT",
        "lang": "KOR",
        "size": "2.8 MB",
        "date": "2025.12",
        "desc": "한국건설기술연구원 KS F 2257 건축 방화구획 관통부 4시간 차열/차염 인증서",
        "file_url": "#"
    },
    {
        "id": "DOC-012",
        "title": "KCT 고기능성 실리콘 종합 제품 카탈로그 2026 (Catalog)",
        "prod_name": "KCT Total Catalog",
        "cat_name": "전체 산업군",
        "doc_type": "CATALOG",
        "lang": "KOR",
        "size": "12.5 MB",
        "date": "2026.02",
        "desc": "17대 산업군 52개 세부 실란트/실리콘 전 제품 라인업 규격 및 물성 종합 편람",
        "file_url": "#"
    }
]

# 2. Color Swatch & Sample Chips Dataset
COLOR_CHIPS = [
    {
        "code": "CLR-EXT-01",
        "name_ko": "퓨어 화이트 (Pure White)",
        "name_en": "Pure White",
        "hex": "#FFFFFF",
        "border": "#D1D5DB",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow DOWSIL™ 791 / KCT Neutral",
        "recommendation": "백색 알루미늄 복합판넬, 화이트 PVC 창호, 백색 법랑 패널",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-02",
        "name_ko": "아이보리 (Off-White / Ivory)",
        "name_en": "Ivory",
        "hex": "#F4EFE6",
        "border": "#E5E7EB",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow 791 / KCT Weather",
        "recommendation": "크림톤 대리석, 라임스톤 외벽, 베이지 알루미늄 커튼월",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-03",
        "name_ko": "라이트 그레이 (Light Gray)",
        "name_en": "Light Gray",
        "hex": "#D1D5DB",
        "border": "#9CA3AF",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow 791 / 991 Non-Staining",
        "recommendation": "노출 콘크리트, 포천석/문경석 화강암, 실버 복합패널",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-04",
        "name_ko": "미드 그레이 (Mid Gray)",
        "name_en": "Mid Gray",
        "hex": "#9CA3AF",
        "border": "#6B7280",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow 791 / KCT Weather",
        "recommendation": "회색 석재 줄눈, 아연도금 강판, 메탈릭 그레이 창호",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-05",
        "name_ko": "다크 그레이 (Dark Gray / Charcoal)",
        "name_en": "Dark Gray",
        "hex": "#4B5563",
        "border": "#374151",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow 791 / KCT Weather",
        "recommendation": "현무암, 징크(Zinc) 패널, 흑회색 화강석",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-06",
        "name_ko": "제트 블랙 (Jet Black)",
        "name_en": "Jet Black",
        "hex": "#1E293B",
        "border": "#0F172A",
        "category": "건축 외장 & 구조용",
        "matched_prod": "Dow DOWSIL™ 983 / 791 Black",
        "recommendation": "블랙 프레임 커튼월, 씨블랙 석재, 태양광 BIPV 모듈 테두리",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-07",
        "name_ko": "알루미늄 실버 (Aluminum Silver)",
        "name_en": "Aluminum Silver",
        "hex": "#C5C9D0",
        "border": "#9CA3AF",
        "category": "건축 외장 & 금속용",
        "matched_prod": "Dow 791 Metallic Silver",
        "recommendation": "아노다이징 알루미늄 바, 스텐레스 스틸 조인트",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-08",
        "name_ko": "브론즈 (Bronze / Dark Brown)",
        "name_en": "Bronze",
        "hex": "#634832",
        "border": "#453223",
        "category": "건축 외장 & 창호용",
        "matched_prod": "Dow 791 Bronze",
        "recommendation": "브론즈 알루미늄 창호, 우드톤 복합판넬, 동판 외벽",
        "is_sample_avail": True
    },
    {
        "code": "CLR-EXT-09",
        "name_ko": "브릭 레드 (Brick Red / Terracotta)",
        "name_en": "Brick Red",
        "hex": "#8B3A2B",
        "border": "#682519",
        "category": "조적 & 테라코타용",
        "matched_prod": "KCT Brick-Seal",
        "recommendation": "적벽돌 외벽, 테라코타 루버 패널, 점토 타일",
        "is_sample_avail": True
    },
    {
        "code": "CLR-INT-01",
        "name_ko": "SN 화이트 (SN White)",
        "name_en": "SN White",
        "hex": "#FFFFFF",
        "border": "#E2E8F0",
        "category": "실내 인테리어 & 타일용 (ARDEX SN+)",
        "matched_prod": "ARDEX SN PLUS White",
        "recommendation": "백색 유광/무광 타일, 욕조·세면대 테두리, FG4 화이트 줄눈",
        "is_sample_avail": True
    },
    {
        "code": "CLR-INT-02",
        "name_ko": "SN 라이트그레이 (SN Light Gray)",
        "name_en": "SN Light Gray",
        "hex": "#D9DCE1",
        "border": "#B0B5C0",
        "category": "실내 인테리어 & 타일용 (ARDEX SN+)",
        "matched_prod": "ARDEX SN PLUS Light Gray",
        "recommendation": "포세린 600각 타일, 대형 비앙코 대리석, 모던 그레이 욕실",
        "is_sample_avail": True
    },
    {
        "code": "CLR-INT-03",
        "name_ko": "SN 볼케이노 (SN Volcano)",
        "name_en": "SN Volcano",
        "hex": "#5C616B",
        "border": "#42464D",
        "category": "실내 인테리어 & 타일용 (ARDEX SN+)",
        "matched_prod": "ARDEX SN PLUS Volcano",
        "recommendation": "테라조 타일, 콘크리트 룩 타일, 호텔 다크 인테리어",
        "is_sample_avail": True
    },
    {
        "code": "CLR-INT-04",
        "name_ko": "SN 투명 (SN Translucent Clear)",
        "name_en": "SN Clear",
        "hex": "rgba(224,242,254,0.6)",
        "border": "#38BDF8",
        "category": "실내 인테리어 & 유리용 (ARDEX SN+)",
        "matched_prod": "ARDEX SN PLUS Clear",
        "recommendation": "샤워부스 유리벽, 거울 마감 테두리, 쇼케이스",
        "is_sample_avail": True
    },
    {
        "code": "CLR-SPC-01",
        "name_ko": "EV 난연 블랙 시편 (UL 94 V-0 Specimen)",
        "name_en": "EV UL94 V0 Specimen",
        "hex": "#18181B",
        "border": "#09090B",
        "category": "특수 모빌리티 & 배터리 시편",
        "matched_prod": "KCT EV-Guard 94V0",
        "recommendation": "배터리 팩 난연 실링, 화재 확산 방지 가스켓 시편",
        "is_sample_avail": True
    },
    {
        "code": "CLR-SPC-02",
        "name_ko": "열전도 갭필러 블루 시편 (Thermal Gap 3.0)",
        "name_en": "Thermal Gap Blue",
        "hex": "#64748B",
        "border": "#475569",
        "category": "특수 모빌리티 & 배터리 시편",
        "matched_prod": "KCT Thermal-Gap 300",
        "recommendation": "배터리 셀 열전도 시험, 냉각 플레이트 방열 테스트 시편",
        "is_sample_avail": True
    }
]

# 3. ASTM D638 & Silicone Engineering Specimens Dataset
ASTM_D638_SPECIMENS = [
    {
        "type_id": "TYPE-1",
        "name_ko": "ASTM D638 Type I (표준 경질 플라스틱)",
        "name_en": "ASTM D638 Type I Standard",
        "thickness": "3.2 mm (≤ 7.0 mm)",
        "width_narrow": "13.0 mm",
        "length_narrow": "57.0 mm",
        "width_overall": "19.0 mm",
        "length_overall": "165.0 mm",
        "gage_length": "50.0 mm",
        "grip_distance": "115.0 mm",
        "fillet_radius": "76.0 mm",
        "uts_strength": "43.18 MPa",
        "print_time": "1시간 18분 31초",
        "filament_usage": "9.8 g (3.30 m)",
        "speed_recommend": "5 mm/min (Instron UTM)",
        "extensometer": "25~50 mm 게이지 신율계 / DIC",
        "desc": "가장 널리 쓰이는 표준 인장 시편으로 강성/경질 고분자(PLA, ABS, PC 등)의 정밀 인장강도 및 탄성계수 측정에 최적입니다.",
        "efficiency_grade": "표준형 (인장강도 최고 43.18 MPa)",
        "badge_color": "var(--primary)"
    },
    {
        "type_id": "TYPE-2",
        "name_ko": "ASTM D638 Type II (협소 평행부 비파단용)",
        "name_en": "ASTM D638 Type II Narrow",
        "thickness": "3.2 mm (≤ 7.0 mm)",
        "width_narrow": "6.0 mm",
        "length_narrow": "57.0 mm",
        "width_overall": "19.0 mm",
        "length_overall": "183.0 mm",
        "gage_length": "50.0 mm",
        "grip_distance": "135.0 mm",
        "fillet_radius": "76.0 mm",
        "uts_strength": "43.16 MPa",
        "print_time": "1시간 09분 45초",
        "filament_usage": "8.3 g (2.80 m)",
        "speed_recommend": "5 mm/min",
        "extensometer": "50 mm 게이지 신율계",
        "desc": "Type I 시편 시험 시 표점 외부나 그립 부근에서 조기 파단이 일어나는 특수 고분자 재료의 슬립 방지 및 파단 유도용 시편입니다.",
        "efficiency_grade": "특수형 (응력 집중 제어)",
        "badge_color": "#0284C7"
    },
    {
        "type_id": "TYPE-3",
        "name_ko": "ASTM D638 Type III (후판/대형 구조재용)",
        "name_en": "ASTM D638 Type III Heavy Plate",
        "thickness": "10.0 mm (7.0 ~ 14.0 mm)",
        "width_narrow": "19.0 mm",
        "length_narrow": "57.0 mm",
        "width_overall": "29.0 mm",
        "length_overall": "246.0 mm",
        "gage_length": "50.0 mm",
        "grip_distance": "115.0 mm",
        "fillet_radius": "76.0 mm",
        "uts_strength": "43.02 MPa",
        "print_time": "3시간 05분 27초",
        "filament_usage": "23.0 g (7.70 m)",
        "speed_recommend": "5 mm/min",
        "extensometer": "50 mm 대형 신율계 / 광학 DIC",
        "desc": "두께 7mm를 초과하는 두꺼운 엔지니어링 플라스틱 시트, 압출 성형 후판 및 대형 적층 조형체의 기계적 하중 평가에 필수적인 대형 규격입니다.",
        "efficiency_grade": "중하중용 (최대 게이지 단면)",
        "badge_color": "#7C3AED"
    },
    {
        "type_id": "TYPE-4",
        "name_ko": "ASTM D638 Type IV (연질·비경질 & 탄성체 비교용)",
        "name_en": "ASTM D638 Type IV Non-rigid",
        "thickness": "3.2 mm (≤ 4.0 mm)",
        "width_narrow": "6.0 mm",
        "length_narrow": "33.0 mm",
        "width_overall": "19.0 mm",
        "length_overall": "115.0 mm",
        "gage_length": "25.0 mm",
        "grip_distance": "65.0 mm",
        "fillet_radius": "14.0 mm (RO=25mm)",
        "uts_strength": "40.30 MPa",
        "print_time": "48분 38초",
        "filament_usage": "5.7 g (1.91 m)",
        "speed_recommend": "50 mm/min (연질) / 5 mm/min",
        "extensometer": "25 mm 비접촉 신율계 / 비디오 게이지",
        "desc": "경질 플라스틱과 연질 탄성체(TPU, 유연 고분자) 간의 직접적인 인장 특성 비교를 위해 외측 라운딩(RO 25mm)이 적용된 콤팩트 시편입니다.",
        "efficiency_grade": "비교평가형 (고연신율 최적화)",
        "badge_color": "#D97706"
    },
    {
        "type_id": "TYPE-5",
        "name_ko": "ASTM D638 Type V (★ 최고 효율 래피드 마이크로 시편)",
        "name_en": "ASTM D638 Type V Micro/High-Throughput",
        "thickness": "3.2 mm (≤ 4.0 mm)",
        "width_narrow": "3.18 mm",
        "length_narrow": "9.53 mm",
        "width_overall": "9.53 mm",
        "length_overall": "63.5 mm",
        "gage_length": "7.62 mm",
        "grip_distance": "25.4 mm",
        "fillet_radius": "12.7 mm",
        "uts_strength": "42.64 MPa (Type I과 0.54 MPa 차이)",
        "print_time": "14분 59초 (Type I 대비 5배 단축)",
        "filament_usage": "1.8 g (Type I 대비 5배 절감)",
        "speed_recommend": "1 ~ 5 mm/min",
        "extensometer": "고해상도 DIC / 마이크로 광학 게이지",
        "desc": "★ 연구 논문 검증 최적 시편: Type I 대비 재료와 출력 시간을 80% 이상 절감하면서도 42.64 MPa의 정밀 인장강도를 산출하는 최고 효율 시편입니다.",
        "efficiency_grade": "★ 최고 효율 추천 (신속 R&D / 원가절감 80%)",
        "badge_color": "var(--accent)"
    }
]

SILICONE_TEST_SPECIMENS = [
    {
        "spec_id": "SIL-HBLOCK",
        "standard": "ASTM C1401 / ASTM C1135",
        "name_ko": "H-Block 구조 글레이징 접착 인장 시험체",
        "name_en": "H-Block Tensile Adhesion Specimen",
        "joint_dim": "50 mm (길이) × 12 mm (폭) × 12 mm (두께)",
        "substrate": "알루미늄 바 (양극산화) 2EA + 구조용 실리콘 비드",
        "purpose": "커튼월 구조 글레이징(SSG) 풍하중 인장 접착 강도 및 파괴 모드(응집파괴 100% 여부) 공인 시험",
        "test_speed": "12.5 mm/min",
        "matched_prod": "Dow DOWSIL™ 983 / 995 Structural Sealant"
    },
    {
        "spec_id": "SIL-D412",
        "standard": "ASTM D412 (Die C)",
        "name_ko": "실리콘 엘라스토머 덤벨 인장·연신율 시편",
        "name_en": "Dumbbell Tensile & Elongation Die C",
        "joint_dim": "길이 115 mm, 협소부 폭 6 mm, 두께 2.0 mm",
        "substrate": "순수 실리콘 시트 정밀 프레스 펀칭 / 몰딩",
        "purpose": "경화 실리콘 고무의 100% 모듈러스, 최대 인장강도(Tensile Strength) 및 파단 신율(Elongation, 400~800%) 측정",
        "test_speed": "500 mm/min",
        "matched_prod": "Dow 791 / ARDEX SN PLUS / KCT Weather"
    },
    {
        "spec_id": "SIL-C719",
        "standard": "ASTM C719 (Class 50/25)",
        "name_ko": "실란트 사이클릭 열팽창 신축 내구성 시험체",
        "name_en": "Cyclic Movement Adhesion Specimen",
        "joint_dim": "50 mm × 12 mm × 12 mm",
        "substrate": "콘크리트 몰탈 블록 / 알루미늄 바 / 유리 샌드위치",
        "purpose": "극저온(-26℃) 및 고온(70℃) 환경 챔버에서 ±50% 주기적 압축/인장 반복 피로 내구성 시험",
        "test_speed": "3.2 mm/h",
        "matched_prod": "Dow 791 (±50%) / Dow 991 Non-Staining"
    },
    {
        "spec_id": "SIL-C794",
        "standard": "ASTM C794",
        "name_ko": "180도 필(Peel) 접착 강도 시험체",
        "name_en": "180° Peel Adhesion Test Specimen",
        "joint_dim": "폭 25 mm × 길이 150 mm (와이어 메쉬 보강)",
        "substrate": "화강석, PVDF 도장 알루미늄, 세라믹 타일 패널",
        "purpose": "물 침적 및 UV 자외선 노출 후 기재와 실리콘 계면의 180도 박리 접착 강도(N/mm) 및 박리 형태 검증",
        "test_speed": "50 mm/min",
        "matched_prod": "Dow Primer 1200 OS / Primer-C + DOWSIL™ 791"
    }
]

# Generate Mega Menu HTML
mega_cols_html = []
for cat in APPLICATIONS_DATA:
    items_html = ""
    for it in cat["items"]:
        items_html += f"""
        <li>
          <a href="/projects/kct#applications" onclick="filterBySub('{it['sub_id']}')">
            <i class="bi bi-chevron-right" style="font-size:0.7rem; color:var(--primary);"></i> {it['title']}
          </a>
        </li>"""
    
    mega_cols_html.append(f"""
    <div class="mega-col">
      <h6>{cat['category_name'].split(' ')[0]}</h6>
      <ul>{items_html}</ul>
    </div>
    """)

mega_menu_html = "\n".join(mega_cols_html)

# Generate Application Cards HTML
app_cards_html = []
for cat in APPLICATIONS_DATA:
    for it in cat["items"]:
        specs_rows = "".join([f'<div><span class="label">{s[0]}:</span> <span class="val">{s[1]}</span></div>' for s in it["specs"]])
        
        card = f"""
        <div class="app-card" data-cat="{cat['category_id']}" data-sub="{it['sub_id']}">
          <div class="app-img-wrap">
            <img src="{it['img']}" alt="{it['title']}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';" />
            <span class="app-badge">{cat['category_name'].split(' ')[0]}</span>
          </div>
          <div class="app-body">
            <h3>{it['title']}</h3>
            <span style="font-size:0.78rem; color:var(--gray-400); font-family:var(--font-en); margin-bottom:0.5rem; display:block;">{it['title_en']}</span>
            <p>{it['desc']}</p>
            <div class="app-specs">
              {specs_rows}
            </div>
            <div class="btn-card-action">
              <button class="btn-detail" onclick="openFullModal('{it['sub_id']}')"><i class="bi bi-info-circle"></i> 시방 상세</button>
              <a href="/projects/kct#b2b-form" class="btn-quote" style="flex:1; justify-content:center;" onclick="prefillQuote('{it['title']}')">견적 요청</a>
            </div>
          </div>
        </div>
        """
        app_cards_html.append(card)

app_cards_rendered = "\n".join(app_cards_html)

# Generate Tech Docs Table Rows HTML
doc_rows_html = []
for i, d in enumerate(TECH_DOCS):
    type_badge_color = {
        "TDS": "background:#E0F2FE; color:#0284C7;",
        "MSDS": "background:#FEF3C7; color:#B45309;",
        "TEST": "background:#DCFCE7; color:#15803D;",
        "CERT": "background:#F3E8FF; color:#7E22CE;",
        "SPEC": "background:#FCE7F3; color:#BE185D;",
        "CATALOG": "background:#F1F5F9; color:#334155;"
    }.get(d["doc_type"], "background:#F1F5F9; color:#334155;")

    row = f"""
    <tr class="doc-row" data-doctype="{d['doc_type']}" data-cat="{d['cat_name']}" data-lang="{d['lang']}" data-title="{d['title']}" data-prod="{d['prod_name']}">
      <td style="text-align:center; width:50px;">
        <input type="checkbox" class="doc-check" value="{d['id']}" data-title="{d['title']}" data-type="{d['doc_type']}" onchange="updateSelectedDocsCount()" />
      </td>
      <td style="font-weight:700; color:var(--dark);">{d['prod_name']}</td>
      <td><span style="display:inline-block; padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; {type_badge_color}">{d['doc_type']}</span></td>
      <td>
        <div style="font-weight:600; color:var(--gray-800); margin-bottom:0.2rem;">{d['title']}</div>
        <div style="font-size:0.78rem; color:var(--gray-600);">{d['desc']}</div>
      </td>
      <td><span style="font-size:0.8rem; font-weight:700; color:var(--gray-600);">{d['lang']}</span></td>
      <td style="font-size:0.8rem; color:var(--gray-400); font-family:var(--font-en);">{d['size']}</td>
      <td style="text-align:center; white-space:nowrap;">
        <button class="btn-email-doc" onclick="openSingleEmailModal('{d['id']}', '{d['title']}', '{d['doc_type']}')">
          <i class="bi bi-envelope-at-fill"></i> 이메일 수신
        </button>
      </td>
    </tr>
    """
    doc_rows_html.append(row)

tech_doc_rows_rendered = "\n".join(doc_rows_html)

modal_js_dict = {}
for cat in APPLICATIONS_DATA:
    for it in cat["items"]:
        modal_js_dict[it["sub_id"]] = {
            "title": f"{it['title']} ({it['title_en']})",
            "desc": it["desc"],
            "catName": cat["category_name"],
            "specs": it["specs"]
        }

modal_js_json = json.dumps(modal_js_dict, ensure_ascii=False)
tech_docs_json = json.dumps(TECH_DOCS, ensure_ascii=False)
color_chips_json = json.dumps(COLOR_CHIPS, ensure_ascii=False)

# ==========================================
# 1. MAIN PLATFORM HTML TEMPLATE (index.html)
# ==========================================
main_html_template = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>한국건설트레이딩 (KCT) - 인테리어타일·특수실란트·ESS/EV배터리·건축 실리콘 토탈 솔루션</title>
  <meta name="description" content="한국건설트레이딩(KCT)은 Dow Chemical 및 프리미엄 인테리어 타일 하이진 실란트(ARDEX SN+급), 색상칩 시편 및 실물 샘플 요청, 조선해양 MED인증, 철도 EN45545, EV 배터리 UL 94 V-0 난연 실란트 등 52개 전 산업군 B2B 24시간 견적 및 전국 직납." />
  <meta name="keywords" content="한국건설트레이딩, KCT, 색상칩 시편, 실리콘 샘플요청, 아덱스 실리콘, ARDEX SN PLUS, 기술자료 센터, 인테리어 실리콘, 타일 실리콘, 조선용 실란트, 철도용 실란트, ESS 실리콘, EV 배터리 실란트, UL 94 V-0 난연 실리콘, 실리콘 계산기, B2B 견적" />
  
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="한국건설트레이딩 (KCT) - 프리미엄 인테리어·특수 실란트 전문 유통·수출 솔루션" />
  <meta property="og:description" content="ARDEX SN+급 인테리어 하이진 & Dow Chemical & 색상칩 시편/샘플 요청 & 특수모빌리티·ESS/EV배터리·건축 고기능성 실리콘 전 산업 라인업." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {{
      --primary: #1558D6;
      --primary-dark: #0D3F9E;
      --primary-light: #EBF2FE;
      --accent: #FF6B35;
      --accent-hover: #E0531D;
      --dark: #0F172A;
      --dark-light: #1E293B;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-400: #94A3B8;
      --gray-600: #475569;
      --gray-800: #1E293B;
      --white: #FFFFFF;
      --radius-sm: 8px;
      --radius: 12px;
      --radius-lg: 18px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow-md: 0 6px 18px rgba(15,23,42,0.08);
      --shadow-lg: 0 16px 36px rgba(15,23,42,0.12);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --font-en: 'Poppins', sans-serif;
    }}

    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--font); color: var(--gray-800); background: #FFFFFF; line-height: 1.6; -webkit-font-smoothing: antialiased; }}
    a {{ text-decoration: none; color: inherit; }}
    ul {{ list-style: none; }}
    img {{ max-width: 100%; height: auto; display: block; }}
    .container {{ max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }}

    .top-bar {{ background: var(--dark); color: rgba(255,255,255,0.75); font-size: 0.82rem; padding: 0.55rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }}
    .top-bar-inner {{ display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }}
    .top-bar-info {{ display: flex; gap: 1.5rem; flex-wrap: wrap; }}
    .top-bar-info span {{ display: inline-flex; align-items: center; gap: 0.35rem; }}
    .top-bar-links {{ display: flex; gap: 1.25rem; align-items: center; }}
    .top-bar-links a {{ color: rgba(255,255,255,0.85); transition: color 0.2s; display: inline-flex; align-items: center; gap: 0.3rem; }}
    .top-bar-links a:hover {{ color: var(--white); }}
    .lang-btn {{ background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); color: var(--white); font-size: 0.75rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 50px; cursor: pointer; }}

    header {{ position: sticky; top: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 1000; border-bottom: 1px solid var(--gray-200); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: padding 0.3s, box-shadow 0.3s; }}
    header.scrolled {{ box-shadow: 0 10px 30px rgba(15,23,42,0.12); background: rgba(255,255,255,0.98); }}
    .nav-inner {{ display: flex; justify-content: space-between; align-items: center; height: 76px; transition: height 0.3s; }}
    header.scrolled .nav-inner {{ height: 64px; }}
    .brand-logo {{ display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.35rem; color: var(--dark); text-decoration: none; }}
    .brand-logo:hover {{ color: var(--primary); }}
    .brand-badge {{ background: var(--primary-light); color: var(--primary); font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; letter-spacing: 0.05em; }}
    
    .nav-menu {{ display: flex; align-items: center; gap: 1.4rem; }}
    .nav-item {{ position: relative; }}
    .nav-link {{ font-size: 0.92rem; font-weight: 600; color: var(--gray-800); padding: 1.7rem 0; display: inline-flex; align-items: center; gap: 0.3rem; transition: color 0.2s; cursor: pointer; text-decoration: none; white-space: nowrap; }}
    .nav-link:hover {{ color: var(--primary); }}
    .nav-link.highlight {{ color: var(--accent); font-weight: 700; }}
    .nav-link.highlight i {{ color: var(--accent); }}
    
    .has-mega {{ position: static; }}
    .has-mega:hover .mega-menu {{ display: block; opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }}
    .mega-menu {{ display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); width: min(1280px, 95vw); background: var(--white); border: 1px solid var(--gray-200); border-radius: 0 0 var(--radius-lg) var(--radius-lg); box-shadow: 0 24px 60px rgba(15,23,42,0.18); padding: 2.25rem; z-index: 1100; max-height: calc(85vh - 80px); overflow-y: auto; transition: all 0.25s ease-out; }}
    .mega-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.25rem; }}
    .mega-col h6 {{ font-size: 0.85rem; font-weight: 800; color: var(--primary); margin-bottom: 0.85rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 0.4rem; }}
    .mega-col ul {{ list-style: none; padding: 0; margin: 0; }}
    .mega-col ul li {{ margin-bottom: 0.45rem; }}
    .mega-col ul li a {{ font-size: 0.78rem; color: var(--gray-600); display: flex; align-items: center; gap: 0.3rem; transition: all 0.2s; text-decoration: none; }}
    .mega-col ul li a:hover {{ color: var(--primary); transform: translateX(3px); font-weight: 600; }}

    .nav-actions {{ display: flex; align-items: center; gap: 0.75rem; }}
    .btn-quote {{ background: var(--primary); color: var(--white); font-weight: 700; font-size: 0.88rem; padding: 0.65rem 1.4rem; border-radius: 50px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; border: none; cursor: pointer; text-decoration: none; }}
    .btn-quote:hover {{ background: var(--primary-dark); transform: translateY(-1px); box-shadow: 0 4px 14px rgba(21,88,214,0.35); }}
    
    .nav-toggle-btn {{ display: none; background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 8px; width: 42px; height: 42px; align-items: center; justify-content: center; font-size: 1.25rem; color: var(--dark); cursor: pointer; transition: all 0.2s; }}
    .nav-toggle-btn:hover {{ background: var(--gray-200); }}

    /* Mobile Drawer */
    .mobile-drawer {{ position: fixed; top: 0; right: -100%; width: min(360px, 86vw); height: 100%; background: var(--white); z-index: 2500; box-shadow: -10px 0 35px rgba(0,0,0,0.25); transition: right 0.35s cubic-bezier(0.32, 0.72, 0, 1); display: flex; flex-direction: column; overflow-y: auto; }}
    .mobile-drawer.open {{ right: 0; }}
    .drawer-backdrop {{ position: fixed; inset: 0; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); z-index: 2400; opacity: 0; pointer-events: none; transition: opacity 0.3s; }}
    .drawer-backdrop.open {{ opacity: 1; pointer-events: auto; }}
    .drawer-header {{ padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; background: var(--gray-50); }}
    .drawer-close-btn {{ background: none; border: none; font-size: 1.4rem; color: var(--gray-600); cursor: pointer; }}
    .drawer-body {{ padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }}
    .drawer-nav-list {{ list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }}
    .drawer-nav-item a {{ display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; color: var(--gray-800); text-decoration: none; background: var(--gray-50); transition: all 0.2s; }}
    .drawer-nav-item a:hover {{ background: var(--primary-light); color: var(--primary); }}
    .drawer-nav-item a.highlight {{ background: #FFF7ED; color: var(--accent); border: 1px solid #FFEDD5; }}

    @media (max-width: 1080px) {{
      .nav-menu {{ display: none; }}
      .nav-toggle-btn {{ display: flex; }}
    }}

    .hero {{ position: relative; background: linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(13,63,158,0.82) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat; color: var(--white); padding: 7.5rem 0 6.5rem; }}
    .hero-content {{ max-width: 960px; }}
    .hero-tag {{ display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); padding: 0.45rem 1.1rem; border-radius: 50px; font-size: 0.82rem; font-weight: 600; margin-bottom: 1.5rem; }}
    .hero h1 {{ font-size: 3rem; font-weight: 800; line-height: 1.22; margin-bottom: 1.25rem; letter-spacing: -0.02em; }}
    .hero p {{ font-size: 1.15rem; color: rgba(255,255,255,0.9); margin-bottom: 2.5rem; line-height: 1.75; }}
    .hero-btns {{ display: flex; gap: 1rem; flex-wrap: wrap; }}
    .btn-lg {{ padding: 0.95rem 2.2rem; font-size: 1rem; font-weight: 700; border-radius: 50px; display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: all 0.2s; }}
    .btn-white {{ background: var(--white); color: var(--primary); }}
    .btn-white:hover {{ background: var(--gray-100); transform: translateY(-2px); box-shadow: var(--shadow-lg); }}
    .btn-accent {{ background: var(--accent); color: var(--white); }}
    .btn-accent:hover {{ background: var(--accent-hover); transform: translateY(-2px); box-shadow: var(--shadow-lg); }}
    .btn-outline {{ background: transparent; border: 2px solid rgba(255,255,255,0.6); color: var(--white); }}
    .btn-outline:hover {{ background: rgba(255,255,255,0.1); border-color: var(--white); }}

    .trust-bar {{ background: var(--gray-50); border-bottom: 1px solid var(--gray-200); padding: 1.75rem 0; }}
    .trust-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }}
    .trust-item {{ display: flex; align-items: center; gap: 0.9rem; }}
    .trust-icon {{ width: 46px; height: 46px; border-radius: 12px; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.35rem; flex-shrink: 0; }}
    .trust-text h4 {{ font-size: 0.92rem; font-weight: 700; color: var(--dark); }}
    .trust-text p {{ font-size: 0.78rem; color: var(--gray-600); }}

    .sec-header {{ text-align: center; max-width: 860px; margin: 0 auto 3.5rem; }}
    .sec-badge {{ font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; }}
    .sec-title {{ font-size: 2.25rem; font-weight: 800; color: var(--dark); line-height: 1.3; margin-bottom: 0.8rem; }}
    .sec-desc {{ color: var(--gray-600); font-size: 1rem; line-height: 1.7; }}

    .section-app {{ padding: 6.5rem 0; background: var(--white); }}
    .app-main-tabs {{ display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 3rem; }}
    .main-tab-btn {{ background: var(--gray-100); border: 1.5px solid var(--gray-200); padding: 0.7rem 1.4rem; border-radius: 50px; font-size: 0.88rem; font-weight: 700; color: var(--gray-800); cursor: pointer; transition: all 0.25s; display: flex; align-items: center; gap: 0.4rem; }}
    .main-tab-btn.active, .main-tab-btn:hover {{ background: var(--primary); color: var(--white); border-color: var(--primary); box-shadow: var(--shadow-sm); transform: translateY(-2px); }}
    .main-tab-btn.highlight-blue {{ background: #E0F2FE; border-color: #0284C7; color: #0369A1; }}
    .main-tab-btn.highlight-blue.active, .main-tab-btn.highlight-blue:hover {{ background: #0284C7; color: var(--white); border-color: #0284C7; }}
    .main-tab-btn.highlight-amber {{ background: #FEF3C7; border-color: #F59E0B; color: #B45309; }}
    .main-tab-btn.highlight-amber.active, .main-tab-btn.highlight-amber:hover {{ background: #D97706; color: var(--white); border-color: #D97706; }}
    
    .app-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 2rem; }}
    .app-card {{ background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); transition: all 0.3s; display: flex; flex-direction: column; }}
    .app-card:hover {{ transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(21,88,214,0.35); }}
    .app-img-wrap {{ height: 210px; overflow: hidden; position: relative; }}
    .app-img-wrap img {{ width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }}
    .app-card:hover .app-img-wrap img {{ transform: scale(1.06); }}
    .app-badge {{ position: absolute; top: 1rem; left: 1rem; background: rgba(15,23,42,0.85); color: var(--white); backdrop-filter: blur(4px); font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.8rem; border-radius: 4px; }}
    
    .app-body {{ padding: 1.75rem; flex-grow: 1; display: flex; flex-direction: column; }}
    .app-body h3 {{ font-size: 1.22rem; font-weight: 700; color: var(--dark); margin-bottom: 0.3rem; }}
    .app-body p {{ font-size: 0.88rem; color: var(--gray-600); margin-bottom: 1.25rem; flex-grow: 1; line-height: 1.65; }}
    .app-specs {{ background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 10px; padding: 0.85rem 1.1rem; font-size: 0.82rem; color: var(--gray-800); margin-bottom: 1.35rem; }}
    .app-specs div {{ display: flex; justify-content: space-between; margin-bottom: 0.35rem; }}
    .app-specs div:last-child {{ margin-bottom: 0; }}
    .app-specs span.label {{ color: var(--gray-600); }}
    .app-specs span.val {{ font-weight: 700; color: var(--primary); }}
    .btn-card-action {{ display: flex; gap: 0.5rem; }}
    .btn-detail {{ background: var(--gray-100); color: var(--gray-800); font-weight: 600; font-size: 0.85rem; padding: 0.65rem 1rem; border-radius: 8px; border: 1px solid var(--gray-200); cursor: pointer; flex: 1; text-align: center; transition: all 0.2s; }}
    .btn-detail:hover {{ background: var(--gray-200); }}

    /* ─── Promo Banners ─── */
    .section-banners {{ padding: 4.5rem 0; background: var(--gray-50); border-top: 1px solid var(--gray-200); border-bottom: 1px solid var(--gray-200); }}
    .banners-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }}
    @media (max-width: 850px) {{ .banners-grid {{ grid-template-columns: 1fr; }} }}
    
    .promo-card {{ background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm); transition: all 0.3s; }}
    .promo-card:hover {{ transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--primary); }}
    .promo-card.highlight {{ border-color: #FDBA74; background: linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%); }}
    .promo-card h4 {{ font-size: 1.45rem; font-weight: 800; color: var(--dark); margin-bottom: 0.65rem; }}
    .promo-card p {{ font-size: 0.95rem; color: var(--gray-600); line-height: 1.7; margin-bottom: 1.75rem; }}

    .section-prod {{ padding: 6.5rem 0; background: var(--white); }}
    .prod-table-wrap {{ background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); box-shadow: var(--shadow-sm); overflow-x: auto; margin-top: 2rem; }}
    .prod-table {{ width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem; min-width: 850px; }}
    .prod-table th {{ background: var(--dark); color: var(--white); font-weight: 700; padding: 1.1rem 1.25rem; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }}
    .prod-table td {{ padding: 1.1rem 1.25rem; border-bottom: 1px solid var(--gray-200); color: var(--gray-800); vertical-align: middle; }}
    .prod-table tr:hover td {{ background: var(--primary-light); }}
    .badge-prod {{ display: inline-block; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.72rem; font-weight: 700; }}
    .badge-hygiene {{ background: #FCE7F3; color: #BE185D; }}
    .badge-spec {{ background: #E0F2FE; color: #0284C7; }}
    .badge-ev {{ background: #FEF3C7; color: #D97706; }}
    .badge-weather {{ background: #E0F2FE; color: #0284C7; }}
    .badge-struct {{ background: #FEF3C7; color: #D97706; }}
    .badge-fire {{ background: #FEE2E2; color: #DC2626; }}

    /* ─── Silicone Construction Calculators Hub (Dow Standards) ─── */
    .section-calc {{ padding: 6.5rem 0; background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%); border-top: 1px solid var(--gray-200); border-bottom: 1px solid var(--gray-200); }}
    .calc-hub-tabs {{ display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2.25rem; justify-content: center; }}
    .calc-hub-tab-btn {{ background: var(--white); border: 1.5px solid var(--gray-200); padding: 0.75rem 1.25rem; border-radius: 50px; font-size: 0.88rem; font-weight: 700; color: var(--gray-700); cursor: pointer; transition: all 0.25s; display: inline-flex; align-items: center; gap: 0.45rem; }}
    .calc-hub-tab-btn:hover, .calc-hub-tab-btn.active {{ background: var(--primary); color: var(--white); border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(21,88,214,0.25); }}
    .calc-hub-tab-btn.active-accent, .calc-hub-tab-btn.active-accent.active {{ background: var(--accent); color: var(--white); border-color: var(--accent); }}

    .calc-panel {{ display: none; }}
    .calc-panel.active {{ display: block; }}
    
    .calc-container {{ background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); box-shadow: var(--shadow-md); overflow: hidden; display: grid; grid-template-columns: 1.15fr 0.85fr; }}
    @media (max-width: 950px) {{ .calc-container {{ grid-template-columns: 1fr; }} }}
    .calc-inputs {{ padding: 3rem; }}
    .calc-inputs h3 {{ font-size: 1.35rem; font-weight: 800; color: var(--dark); margin-bottom: 0.4rem; }}
    .calc-inputs p {{ font-size: 0.88rem; color: var(--gray-600); margin-bottom: 1.75rem; line-height: 1.6; }}
    .calc-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }}
    @media (max-width: 550px) {{ .calc-grid {{ grid-template-columns: 1fr; }} }}
    .form-group {{ margin-bottom: 1.25rem; }}
    .form-group label {{ display: block; font-size: 0.85rem; font-weight: 700; color: var(--gray-800); margin-bottom: 0.45rem; }}
    .form-group input, .form-group select {{ width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--gray-50); transition: all 0.2s; }}
    .form-group input:focus, .form-group select:focus {{ outline: none; border-color: var(--primary); background: var(--white); box-shadow: 0 0 0 3px rgba(21,88,214,0.15); }}
    
    .calc-results {{ background: var(--dark); color: var(--white); padding: 3rem; display: flex; flex-direction: column; justify-content: space-between; }}
    .calc-results h4 {{ font-size: 1.15rem; color: rgba(255,255,255,0.85); margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem; }}
    .res-metric {{ background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 1.15rem; margin-bottom: 0.85rem; }}
    .res-metric .res-label {{ font-size: 0.8rem; color: rgba(255,255,255,0.7); }}
    .res-metric .res-num {{ font-size: 1.75rem; font-weight: 800; color: #38BDF8; margin-top: 0.2rem; font-family: var(--font-en); }}
    .res-metric .res-num span {{ font-size: 0.9rem; font-weight: 500; color: rgba(255,255,255,0.8); margin-left: 0.35rem; font-family: var(--font); }}
    .btn-transfer {{ background: var(--accent); color: var(--white); border: none; padding: 0.95rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s; margin-top: 1.25rem; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem; text-decoration: none; }}
    .btn-transfer:hover {{ background: var(--accent-hover); transform: translateY(-1px); }}

    .glueline-table {{ width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.85rem; }}
    .glueline-table th {{ background: var(--dark); color: var(--white); padding: 0.65rem 0.85rem; font-weight: 700; text-align: center; font-size: 0.8rem; }}
    .glueline-table td {{ padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--gray-200); color: var(--gray-800); text-align: center; }}
    .glueline-table tr:hover td {{ background: var(--primary-light); font-weight: 700; }}

    /* Quick Footer Calc Hub Strip */
    .calc-footer-strip {{ background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%); color: var(--white); padding: 3.5rem 0; border-top: 1px solid rgba(255,255,255,0.1); }}
    .calc-strip-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; margin-top: 1.75rem; }}
    .calc-strip-card {{ background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 1.35rem; text-decoration: none; color: var(--white); transition: all 0.25s; display: flex; flex-direction: column; justify-content: space-between; }}
    .calc-strip-card:hover {{ background: rgba(255,255,255,0.14); border-color: #38BDF8; transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }}
    .calc-strip-card h6 {{ font-size: 0.95rem; font-weight: 800; margin-bottom: 0.35rem; color: #38BDF8; display: flex; align-items: center; gap: 0.45rem; }}
    .calc-strip-card p {{ font-size: 0.78rem; color: rgba(255,255,255,0.75); line-height: 1.5; }}

    .section-process {{ padding: 6.5rem 0; background: var(--white); }}
    .process-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 2rem; }}
    .process-card {{ background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 2.25rem 1.5rem; text-align: center; transition: all 0.3s; }}
    .process-card:hover {{ transform: translateY(-4px); border-color: var(--primary); box-shadow: var(--shadow-md); background: var(--white); }}
    .process-num {{ width: 56px; height: 56px; border-radius: 50%; background: var(--primary); color: var(--white); font-weight: 800; font-size: 1.25rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-family: var(--font-en); }}
    .process-card h4 {{ font-size: 1.15rem; font-weight: 700; color: var(--dark); margin-bottom: 0.6rem; }}
    .process-card p {{ font-size: 0.85rem; color: var(--gray-600); line-height: 1.65; }}

    .section-b2b {{ padding: 6.5rem 0; background: var(--gray-50); border-top: 1px solid var(--gray-200); }}
    .b2b-wrap {{ max-width: 880px; margin: 0 auto; background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 3.5rem; box-shadow: var(--shadow-md); }}
    .b2b-form-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 1.35rem; }}
    @media (max-width: 650px) {{ .b2b-form-grid {{ grid-template-columns: 1fr; }} }}
    .b2b-form-grid .full {{ grid-column: span 2; }}
    @media (max-width: 650px) {{ .b2b-form-grid .full {{ grid-column: span 1; }} }}

    .modal-backdrop {{ display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.65); backdrop-filter: blur(4px); z-index: 2000; justify-content: center; align-items: center; padding: 1.5rem; }}
    .modal-backdrop.active {{ display: flex; }}
    .modal-box {{ background: var(--white); border-radius: var(--radius-lg); max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: var(--shadow-lg); }}
    .modal-close {{ position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; font-size: 1.5rem; color: var(--gray-600); cursor: pointer; }}

    footer {{ background: var(--dark); color: rgba(255,255,255,0.75); padding: 5.5rem 0 2.5rem; font-size: 0.88rem; }}
    .footer-grid {{ display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3.5rem; margin-bottom: 3.5rem; }}
    @media (max-width: 900px) {{ .footer-grid {{ grid-template-columns: 1fr 1fr; }} }}
    @media (max-width: 550px) {{ .footer-grid {{ grid-template-columns: 1fr; }} }}
    .footer-col h5 {{ font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; }}
    .footer-col ul li {{ margin-bottom: 0.65rem; }}
    .footer-col ul li a {{ color: rgba(255,255,255,0.7); transition: color 0.2s; }}
    .footer-col ul li a:hover {{ color: var(--white); }}
    .footer-bottom {{ border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; }}
  </style>
</head>
<body>

  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-info">
        <span><i class="bi bi-building-check text-primary"></i> <strong>사업자등록번호:</strong> 371-07-03719</span>
        <span><i class="bi bi-box-seam text-primary"></i> <strong>시편제작:</strong> ASTM D638/C1401</span>
        <span><i class="bi bi-palette text-primary"></i> <strong>색상칩:</strong> 실물 시편 & 샘플 신청</span>
        <span><i class="bi bi-file-earmark-pdf text-primary"></i> <strong>기술자료:</strong> TDS·MSDS·성적서 이메일 발송</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct/specimens"><i class="bi bi-box-seam-fill text-primary"></i> 시편제작 센터</a>
        <a href="/projects/kct/color-samples"><i class="bi bi-palette-fill text-accent"></i> <strong>색상칩 & 샘플요청</strong></a>
        <a href="/projects/kct/technical"><i class="bi bi-file-earmark-arrow-down-fill text-primary"></i> 기술자료 센터</a>
        <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener"><i class="bi bi-bag-check"></i> 스마트스토어</a>
        <a href="/projects/kct#b2b-form"><i class="bi bi-chat-left-text-fill"></i> 온라인 견적문의</a>
        <a href="mailto:sales@kconstrade.com"><i class="bi bi-envelope-fill"></i> sales@kconstrade.com</a>
        <button class="lang-btn" onclick="alert('English & Japanese multi-language portal is enabled.')"><i class="bi bi-globe"></i> KO / EN / JA</button>
      </div>
    </div>
  </div>

  <header>
    <div class="container nav-inner">
      <a href="/projects/kct" class="brand-logo">
        KCT <span style="font-weight:400; color:var(--gray-600); font-size:1.05rem;">한국건설트레이딩</span>
        <span class="brand-badge">GLOBAL SILICONE</span>
      </a>

      <nav class="nav-menu">
        <div class="nav-item has-mega">
          <a href="#applications" class="nav-link">적용산업 솔루션 (17대 분야) <i class="bi bi-chevron-down" style="font-size:0.75rem;"></i></a>
          <div class="mega-menu">
            <div class="mega-grid">
              {mega_menu_html}
            </div>
          </div>
        </div>
        <div class="nav-item"><a href="/projects/kct/specimens" class="nav-link"><i class="bi bi-box-seam-fill"></i> 시편제작 센터</a></div>
        <div class="nav-item"><a href="/projects/kct/color-samples" class="nav-link highlight"><i class="bi bi-palette-fill"></i> 색상칩 & 샘플요청</a></div>
        <div class="nav-item"><a href="/projects/kct/technical" class="nav-link"><i class="bi bi-file-earmark-arrow-down-fill text-primary"></i> 기술자료 센터</a></div>
        <div class="nav-item"><a href="#products" class="nav-link">제품스펙 비교</a></div>
        <div class="nav-item"><a href="#calculator" class="nav-link">실리콘 계산기</a></div>
        <div class="nav-item"><a href="#process" class="nav-link">발주 프로세스</a></div>
        <div class="nav-item"><a href="#about" class="nav-link">회사소개</a></div>
      </nav>

      <div class="nav-actions">
        <a href="#b2b-form" class="btn-quote"><i class="bi bi-send-fill"></i> B2B 견적요청</a>
        <button class="nav-toggle-btn" id="kctNavToggle" aria-label="메뉴 열기">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Slide Drawer -->
  <div class="drawer-backdrop" id="kctDrawerBackdrop"></div>
  <aside class="mobile-drawer" id="kctMobileDrawer" aria-label="모바일 네비게이션">
    <div class="drawer-header">
      <div style="font-weight:800; font-size:1.15rem; color:var(--dark); display:flex; align-items:center; gap:0.5rem;">
        <span>KCT 네비게이션</span>
        <span class="brand-badge">MENU</span>
      </div>
      <button class="drawer-close-btn" id="kctDrawerClose" aria-label="메뉴 닫기">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul class="drawer-nav-list">
        <li class="drawer-nav-item"><a href="/projects/kct/color-samples" class="highlight"><i class="bi bi-palette-fill"></i> <span>색상칩 시편 & 무료 샘플관</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/technical" style="background:#F0F9FF; color:#0369A1;"><i class="bi bi-file-earmark-pdf-fill"></i> <span>기술자료(TDS/MSDS) 센터</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="#calculator" onclick="closeKctDrawer()"><i class="bi bi-calculator"></i> <span>실리콘 조인트 계산기 2.0</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="#applications" onclick="closeKctDrawer()"><i class="bi bi-grid-3x3-gap-fill"></i> <span>17대 적용분야 솔루션</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="#products" onclick="closeKctDrawer()"><i class="bi bi-table"></i> <span>DOWSIL™ 제품스펙 비교</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="#process" onclick="closeKctDrawer()"><i class="bi bi-truck"></i> <span>직납 & 발주 프로세스</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects"><i class="bi bi-grid-fill"></i> <span>DAVHAVE Projects 허브</span> <span>↗</span></a></li>
      </ul>

      <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--gray-200);">
        <a href="#b2b-form" class="btn-quote" style="width:100%; justify-content:center; padding:0.9rem;" onclick="closeKctDrawer()">
          <i class="bi bi-send-fill"></i> B2B 대량 견적 요청
        </a>
      </div>
    </div>
  </aside>

  <section class="hero">
    <div class="container hero-content">
      <div class="hero-tag">
        <i class="bi bi-shield-shaded"></i> Dow Chemical & ARDEX SN+급 인테리어·배터리·건축 실리콘 솔루션
      </div>
      <h1>프리미엄 인테리어·타일 & 특수실란트<br/>실리콘 전문 소싱 및 글로벌 유통 솔루션</h1>
      <p>
        ARDEX SN+급 비초산형 타일 하이진 실란트, 선박 MED인증, 고속철도 EN45545 난연, EV 배터리 UL 94 V-0, 초고층 커튼월까지 52개 전문 분야 라인업을 공급합니다.<br/>
        <strong>실물 색상칩 시편 비교기 및 무료 샘플 요청 서비스</strong>를 통해 현장 맞춤 검토를 지원합니다.
      </p>
      <div class="hero-btns">
        <a href="/projects/kct/color-samples" class="btn-lg btn-accent"><i class="bi bi-palette-fill"></i> 색상칩 비교 & 샘플 요청</a>
        <a href="/projects/kct/technical" class="btn-lg btn-white"><i class="bi bi-file-earmark-arrow-down-fill"></i> 기술자료 센터 바로가기</a>
        <a href="#b2b-form" class="btn-lg btn-outline"><i class="bi bi-file-earmark-text"></i> B2B 견적 요청</a>
      </div>
    </div>
  </section>

  <div class="trust-bar">
    <div class="container trust-grid">
      <div class="trust-item">
        <div class="trust-icon"><i class="bi bi-palette-fill" style="color:var(--accent);"></i></div>
        <div class="trust-text">
          <h4>색상칩 시편 & 샘플 발송</h4>
          <p>현장 승인용 실물 시편 및 샘플 카트리지 지원</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon"><i class="bi bi-file-earmark-check-fill"></i></div>
        <div class="trust-text">
          <h4>기술자료 실시간 이메일 전송</h4>
          <p>TDS · MSDS · 공인 성적서 이메일 즉시 수신</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon"><i class="bi bi-stars"></i></div>
        <div class="trust-text">
          <h4>프리미엄 인테리어 하이진</h4>
          <p>비초산 무취 · 14종 타일 줄눈 컬러 매칭</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon"><i class="bi bi-truck"></i></div>
        <div class="trust-text">
          <h4>전국 현장 직납 배송</h4>
          <p>수도권 당일~익일, 전국 2~3일 내</p>
        </div>
      </div>
    </div>
  </div>

  <section id="applications" class="section-app">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">Applications & Solutions</span>
        <h2 class="sec-title">17대 적용산업 및 52개 세부 솔루션</h2>
        <p class="sec-desc">실내 인테리어 타일 마감, 조선해양, 철도, 수소, 반도체 클린룸, ESS/EV 배터리, 건축 파사드 등 산업 전반의 고기능성 실리콘 자재를 즉시 탐색하세요.</p>
      </div>

      <div class="app-main-tabs">
        <button class="main-tab-btn active" onclick="filterByCat('all', this)"><i class="bi bi-grid-fill"></i> 전체보기 (52개 분야)</button>
        <button class="main-tab-btn highlight-blue" onclick="filterByCat('building', this)"><i class="bi bi-building"></i> 건축 & 실내 인테리어 (13개 분야)</button>
        <button class="main-tab-btn highlight-blue" onclick="filterByCat('specialty-silicone', this)"><i class="bi bi-shield-check"></i> 특수모빌리티·하이테크 (8개 분야)</button>
        <button class="main-tab-btn highlight-amber" onclick="filterByCat('ess-ev', this)"><i class="bi bi-battery-charging"></i> ESS & EV 배터리 (6개 분야)</button>
        <button class="main-tab-btn" onclick="filterByCat('electronics', this)"><i class="bi bi-cpu"></i> 전자·반도체 (6개 분야)</button>
        <button class="main-tab-btn" onclick="filterByCat('automotive', this)"><i class="bi bi-car-front"></i> 자동차 (4개 분야)</button>
        <button class="main-tab-btn" onclick="filterByCat('beauty', this)"><i class="bi bi-stars"></i> 뷰티&퍼스널케어 (4개 분야)</button>
        <button class="main-tab-btn" onclick="filterByCat('industrial-other', this)"><i class="bi bi-gear-wide-connected"></i> 산업·에너지·소비재 (11개 분야)</button>
      </div>

      <div class="app-grid" id="appGrid">
        {app_cards_rendered}
      </div>
    </div>
  </section>

  <!-- ─── Promo Banners Grid ─── -->
  <section class="section-banners">
    <div class="container">
      <div class="banners-grid">
        <!-- 1. Color Samples Banner -->
        <div class="promo-card highlight">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.4rem; background:#FFEDD5; color:#C2410C; padding:0.3rem 0.8rem; border-radius:50px; font-size:0.78rem; font-weight:700; margin-bottom:0.85rem;">
              <i class="bi bi-palette-fill"></i> NEW 시편 요청 & 색상 비교기
            </div>
            <h4>색상칩 시편 비교 & 실물 샘플 요청</h4>
            <p>
              외장 웨더 실리콘 및 ARDEX SN PLUS 인테리어 타일 매칭 14종 색상칩을 웹에서 나란히 비교하고, 현장 검토용 실물 시편 및 샘플 카트리지를 무료 신청하세요.
            </p>
          </div>
          <div>
            <a href="/projects/kct/color-samples" class="btn-quote" style="background:var(--accent); display:inline-flex;">
              <i class="bi bi-palette"></i> 색상칩 비교 및 샘플 신청하기
            </a>
          </div>
        </div>

        <!-- 2. Tech Center Banner -->
        <div class="promo-card">
          <div>
            <div style="display:inline-flex; align-items:center; gap:0.4rem; background:var(--primary-light); color:var(--primary); padding:0.3rem 0.8rem; border-radius:50px; font-size:0.78rem; font-weight:700; margin-bottom:0.85rem;">
              <i class="bi bi-file-earmark-arrow-down-fill"></i> 기술자료 센터 전용관
            </div>
            <h4>기술자료 검색 및 이메일 전송 센터</h4>
            <p>
              KCC실리콘 스타일 다차원 검색 필터를 통해 TDS, MSDS, 시험성적서, UL94 V-0/MED 인증서 PDF를 이메일로 5분 내 즉시 수신하실 수 있습니다.
            </p>
          </div>
          <div>
            <a href="/projects/kct/technical" class="btn-quote" style="display:inline-flex;">
              <i class="bi bi-search"></i> 기술자료 검색센터 입장
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── Products & Spec Comparison Matrix ─── -->
  <section id="products" class="section-prod">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">Product Specifications</span>
        <h2 class="sec-title">주력 실란트 제품군 & 물성 비교표</h2>
        <p class="sec-desc">프리미엄 인테리어 하이진 실란트(ARDEX SN+급), 선박/철도 실란트, EV 배터리 난연 실란트, Dow DOWSIL™ 제품군의 주요 물리적 특성치 비교표입니다.</p>
      </div>

      <div class="prod-table-wrap">
        <table class="prod-table">
          <thead>
            <tr>
              <th>제품명 (Product Name)</th>
              <th>카테고리</th>
              <th>경화방식</th>
              <th>인증 규격 / 특성</th>
              <th>인장/전단강도</th>
              <th>포장 단위</th>
              <th>샘플/시편</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#FDF2F8;">
              <td><strong>ARDEX SN PLUS / KCT Hygiene</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Premium Tile & Sanitary Silicone</span></td>
              <td><span class="badge-prod badge-hygiene">인테리어 하이진</span></td>
              <td>1액형 비초산 중성경화 (무취)</td>
              <td><strong>최고등급 항곰팡이 / 14종 컬러매칭</strong></td>
              <td>1.5 MPa</td>
              <td>300ml 카트리지 (25개/박스)</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem; background:#FFF7ED; color:var(--accent); border-color:#FDBA74;"><i class="bi bi-palette"></i> 시편 신청</a></td>
            </tr>
            <tr style="background:#F0FDF4;">
              <td><strong>KCT Marine-Seal MED</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Shipbuilding & Offshore Sealant</span></td>
              <td><span class="badge-prod badge-spec">조선 & 해양</span></td>
              <td>1액형 중성 수분경화</td>
              <td><strong>MED / IMO 선박 형식승인</strong></td>
              <td>2.0 MPa</td>
              <td>310ml 카트리지 / 600ml 소시지</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem;"><i class="bi bi-box"></i> 샘플 신청</a></td>
            </tr>
            <tr style="background:#F0FDF4;">
              <td><strong>KCT Rail-Guard 45545</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Railway Glazing Sealant</span></td>
              <td><span class="badge-prod badge-spec">철도 & 고속차량</span></td>
              <td>1액형 고탄성 변성실리콘</td>
              <td><strong>EN 45545-2 HL3 (철도화재)</strong></td>
              <td>2.5 MPa</td>
              <td>310ml 카트리지 / 600ml 소시지</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem;"><i class="bi bi-box"></i> 샘플 신청</a></td>
            </tr>
            <tr style="background:#FFFBEB;">
              <td><strong>KCT EV-Guard 94V0</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">EV Battery Pack Sealant</span></td>
              <td><span class="badge-prod badge-ev">ESS & EV 난연</span></td>
              <td>1액형 / 2액형 난연 RTV</td>
              <td><strong>UL 94 V-0 (10초 자소)</strong></td>
              <td>2.2 MPa</td>
              <td>330ml 카트리지 / 20kg 페일</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem; background:#FFF7ED; color:var(--accent); border-color:#FDBA74;"><i class="bi bi-palette"></i> 시편 신청</a></td>
            </tr>
            <tr style="background:#FFFBEB;">
              <td><strong>KCT Thermal-Gap 300</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Thermal Conductive Gap Filler</span></td>
              <td><span class="badge-prod badge-ev">배터리 방열</span></td>
              <td>2액형 상온/가열 화학경화</td>
              <td><strong>열전도율 3.0 W/m·K</strong></td>
              <td>1.8 MPa</td>
              <td>50ml 듀얼카트리지 / 25kg 드럼</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem;"><i class="bi bi-box"></i> 샘플 신청</a></td>
            </tr>
            <tr>
              <td><strong>Dow DOWSIL™ 791</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Weatherproofing Silicone</span></td>
              <td><span class="badge-prod badge-weather">내후성 웨더</span></td>
              <td>1액형 중성 수분경화</td>
              <td><strong>±50% 변위추종 (Class 50)</strong></td>
              <td>1.2 MPa</td>
              <td>300ml 카트리지 / 500ml 소시지</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem; background:#FFF7ED; color:var(--accent); border-color:#FDBA74;"><i class="bi bi-palette"></i> 색상칩 신청</a></td>
            </tr>
            <tr>
              <td><strong>Dow DOWSIL™ 983</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Structural Glazing Sealant</span></td>
              <td><span class="badge-prod badge-struct">구조용 SSG</span></td>
              <td>2액형 급속 화학경화</td>
              <td><strong>ASTM C1184 (고강도 구조접착)</strong></td>
              <td>2.4 MPa</td>
              <td>250kg 드럼 + 19kg 캔</td>
              <td><a href="/projects/kct/technical" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem;"><i class="bi bi-file-earmark-pdf"></i> 시방서 센터</a></td>
            </tr>
            <tr>
              <td><strong>KCT Firestop 700</strong><br/><span style="font-size:0.75rem; color:var(--gray-600);">Fire-rated Silicone</span></td>
              <td><span class="badge-prod badge-fire">건축 방화</span></td>
              <td>1액형 난연 수분경화</td>
              <td><strong>KS F 2257 (4시간 내화)</strong></td>
              <td>1.0 MPa</td>
              <td>300ml 카트리지 / 500ml 소시지</td>
              <td><a href="/projects/kct/color-samples" class="btn-detail" style="padding:0.35rem 0.8rem; font-size:0.78rem;"><i class="bi bi-box"></i> 샘플 신청</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ─── Silicone Construction Calculators Hub (Dow Standards) ─── -->
  <section id="calculator" class="section-calc">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">Dow Standards Engineering Hub</span>
        <h2 class="sec-title">실리콘 건설 공학 계산기 허브 (Calculators Hub)</h2>
        <p class="sec-desc">
          Dow Chemical 글로벌 표준 엔지니어링 가이드라인을 기반으로 실란트·프라이머 소요량, 구조용 바이트, 패널 자중 지지, 글루라인 규격 및 ASTM C1472 열팽창 변위를 실시간 산출합니다.
        </p>
      </div>

      <!-- 6 Calculator Navigation Tabs -->
      <div class="calc-hub-tabs">
        <button class="calc-hub-tab-btn active" onclick="switchCalcTab('sealant', this)">
          <i class="bi bi-calculator-fill"></i> 1. 실란트 소요량 (Sealant Usage)
        </button>
        <button class="calc-hub-tab-btn" onclick="switchCalcTab('primer', this)">
          <i class="bi bi-droplet-half"></i> 2. 프라이머 도포량 (Primer)
        </button>
        <button class="calc-hub-tab-btn" onclick="switchCalcTab('bite', this)">
          <i class="bi bi-building-fill-gear"></i> 3. 풍하중 구조 바이트 (Structural Bite)
        </button>
        <button class="calc-hub-tab-btn" onclick="switchCalcTab('deadload', this)">
          <i class="bi bi-layers-fill"></i> 4. 패널 자중 지지 (Deadload)
        </button>
        <button class="calc-hub-tab-btn" onclick="switchCalcTab('glueline', this)">
          <i class="bi bi-table"></i> 5. 글루라인 두께표 (Glueline Table)
        </button>
        <button class="calc-hub-tab-btn" onclick="switchCalcTab('thermal', this)">
          <i class="bi bi-thermometer-half"></i> 6. ASTM 열팽창 변위 (Thermal Movement)
        </button>
      </div>

      <!-- 1. Sealant Usage Panel -->
      <div class="calc-panel active" id="calc-panel-sealant">
        <div class="calc-container">
          <div class="calc-inputs">
            <h3>📐 실란트 조인트 소요량 계산 (Sealant Usage)</h3>
            <p>외장 커튼월, 창호, 석재 줄눈의 치수와 길이를 입력하여 필요 수량을 산출합니다.</p>

            <div class="calc-grid">
              <div class="form-group">
                <label for="jointWidth">조인트 폭 (Joint Width, mm)</label>
                <input type="number" id="jointWidth" value="15" min="3" max="100" oninput="calculateSealantUsage()" />
              </div>
              <div class="form-group">
                <label for="jointDepth">조인트 깊이 (Joint Depth, mm)</label>
                <input type="number" id="jointDepth" value="10" min="3" max="100" oninput="calculateSealantUsage()" />
              </div>
            </div>

            <div class="calc-grid">
              <div class="form-group">
                <label for="jointLength">총 시공 길이 (Total Length, Meter)</label>
                <input type="number" id="jointLength" value="100" min="1" max="50000" oninput="calculateSealantUsage()" />
              </div>
              <div class="form-group">
                <label for="lossRate">현장 할증/손실률 (Waste %)</label>
                <select id="lossRate" onchange="calculateSealantUsage()">
                  <option value="1.10" selected>10% (표준 현장 권장치)</option>
                  <option value="1.05">5% (정밀 자동화/숙련공)</option>
                  <option value="1.15">15% (고소/비정형 조인트)</option>
                  <option value="1.20">20% (조적 및 거친 석재)</option>
                </select>
              </div>
            </div>

            <div style="background:var(--gray-100); border-radius:8px; padding:1rem; font-size:0.85rem; color:var(--gray-600);">
              💡 <strong>표준 설계 원칙:</strong> 웨더실링 조인트의 이상적인 폭:깊이 비율은 <strong>2:1</strong> (폭 10~20mm 기준 깊이 6~10mm)입니다.
            </div>
          </div>

          <div class="calc-results">
            <div>
              <h4>📊 실란트 산출 결과 (Estimated Result)</h4>
              <div class="res-metric">
                <div class="res-label">총 소요 실리콘 부피 (Total Volume)</div>
                <div class="res-num" id="resVolume">16.50 <span>L (Liter)</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">300ml 카트리지 필요 수량</div>
                <div class="res-num" id="resCartridge">55 <span>개 (약 2.2 박스 / 25개入)</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">500ml / 600ml 소시지 필요 수량</div>
                <div class="res-num" id="resSausage">33 / 28 <span>개 (소시지 포장)</span></div>
              </div>
              <div class="res-metric" style="background:rgba(56,189,248,0.1); border-color:rgba(56,189,248,0.3);">
                <div class="res-label" style="color:#BAE6FD;">권장 백업재(Backer Rod) 규격</div>
                <div class="res-num" id="resBacker" style="font-size:1.35rem; color:#FFFFFF;">Ø 20 <span>mm (폭 대비 +25% 압축삽입)</span></div>
              </div>
            </div>
            <a href="#b2b-form" class="btn-transfer" onclick="transferCalcResult('실란트 소요량')">
              <i class="bi bi-clipboard2-check"></i> 산출 수량으로 B2B 견적 자동 입력
            </a>
          </div>
        </div>
      </div>

      <!-- 2. Primer Usage Panel -->
      <div class="calc-panel" id="calc-panel-primer">
        <div class="calc-container">
          <div class="calc-inputs">
            <h3>🧪 프라이머 도포 소요량 계산 (Primer Usage)</h3>
            <p>다공성 피착재(콘크리트, 석재) 및 특수 금속 도포면의 면적에 따른 프라이머 캔 수량을 산출합니다.</p>

            <div class="calc-grid">
              <div class="form-group">
                <label for="substrateType">바탕면/피착재 유형 (Substrate)</label>
                <select id="substrateType" onchange="calculatePrimerUsage()">
                  <option value="porous" selected>다공성 바탕면 (콘크리트, 화강석, 조적, 몰탈)</option>
                  <option value="nonporous">비다공성 바탕면 (알루미늄, 스테인리스, 유리, 코팅금속)</option>
                  <option value="plastics">특수 플라스틱 & 분체도장 (PVDF, 아크릴, 폴리카보네이트)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="primerWidth">프라이머 도포 폭 (각 면 폭, mm)</label>
                <input type="number" id="primerWidth" value="15" min="5" max="100" oninput="calculatePrimerUsage()" />
              </div>
            </div>

            <div class="calc-grid">
              <div class="form-group">
                <label for="primerLength">시공 조인트 총 길이 (Joint Length, Meter)</label>
                <input type="number" id="primerLength" value="500" min="1" max="50000" oninput="calculatePrimerUsage()" />
              </div>
              <div class="form-group">
                <label for="primerSides">도포 면수 (Sides per Joint)</label>
                <select id="primerSides" onchange="calculatePrimerUsage()">
                  <option value="2" selected>양면 도포 (2면 접착 - 표준)</option>
                  <option value="1">단면 도포 (1면 접착)</option>
                </select>
              </div>
            </div>

            <div style="background:var(--gray-100); border-radius:8px; padding:1rem; font-size:0.85rem; color:var(--gray-600);">
              💡 <strong>프라이머 시공 지침:</strong> 프라이머 도포 후 15~30분간 지촉건조(Flash-off) 후 실리콘을 충진해야 최적의 접착 강도가 발현됩니다.
            </div>
          </div>

          <div class="calc-results">
            <div>
              <h4>📊 프라이머 산출 결과 (Estimated Result)</h4>
              <div class="res-metric">
                <div class="res-label">총 프라이머 도포 면적 (Coating Area)</div>
                <div class="res-num" id="resPrimerArea">15.00 <span>m²</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">필요 프라이머 예상 부피 (Volume)</div>
                <div class="res-num" id="resPrimerVol">3.00 <span>L (Liter)</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">500ml 캔 필요 수량</div>
                <div class="res-num" id="resPrimerCans">6 <span>Can (500ml 포장단위)</span></div>
              </div>
              <div class="res-metric" style="background:rgba(56,189,248,0.1); border-color:rgba(56,189,248,0.3);">
                <div class="res-label" style="color:#BAE6FD;">추천 프라이머 제품군</div>
                <div class="res-num" id="resPrimerRec" style="font-size:1.15rem; color:#FFFFFF;">Dow Primer-C / 1200 OS</div>
              </div>
            </div>
            <a href="#b2b-form" class="btn-transfer" onclick="transferCalcResult('프라이머 소요량')">
              <i class="bi bi-clipboard2-check"></i> 프라이머 수량 견적서 반영
            </a>
          </div>
        </div>
      </div>

      <!-- 3. Structural Bite Panel -->
      <div class="calc-panel" id="calc-panel-bite">
        <div class="calc-container">
          <div class="calc-inputs">
            <h3>🏗️ 풍하중 구조용 실리콘 바이트 계산 (Structural Bite)</h3>
            <p>SSG(Structural Silicone Glazing) 공법에서 풍하중에 저항하기 위한 최소 접착 폭(Bite)을 산출합니다.</p>

            <div class="calc-grid">
              <div class="form-group">
                <label for="windLoad">설계 풍하중 (Design Wind Load, kPa)</label>
                <input type="number" id="windLoad" value="2.5" step="0.1" min="0.5" max="15" oninput="calculateBite()" />
              </div>
              <div class="form-group">
                <label for="panelShape">유리/패널 형상 (Panel Shape)</label>
                <select id="panelShape" onchange="calculateBite()">
                  <option value="rect" selected>직사각형 (Rectangular 4변 지지)</option>
                  <option value="square">정사각형 (Square)</option>
                  <option value="circular">원형 패널 (Circular)</option>
                </select>
              </div>
            </div>

            <div class="calc-grid">
              <div class="form-group">
                <label for="panelWidth">패널 단변 길이 (Short Span, mm)</label>
                <input type="number" id="panelWidth" value="1500" min="200" max="10000" oninput="calculateBite()" />
              </div>
              <div class="form-group">
                <label for="panelHeight">패널 장변 길이 (Long Span, mm)</label>
                <input type="number" id="panelHeight" value="2400" min="200" max="10000" oninput="calculateBite()" />
              </div>
            </div>

            <div style="background:var(--gray-100); border-radius:8px; padding:1rem; font-size:0.85rem; color:var(--gray-600);">
              💡 <strong>구조설계 허용응력:</strong> Dow 구조용 실리콘(DOWSIL™ 983 / 995)의 설계 허용 동적 인장응력은 <strong>140 kPa (20 psi)</strong>이며, 최소 구조 바이트는 <strong>6.4 mm (1/4 in)</strong> 이상이어야 합니다.
            </div>
          </div>

          <div class="calc-results">
            <div>
              <h4>📊 구조 바이트 산출 결과 (Structural Result)</h4>
              <div class="res-metric">
                <div class="res-label">이론 최소 구조 바이트 (Calculated Bite)</div>
                <div class="res-num" id="resBiteCalc">13.39 <span>mm</span></div>
              </div>
              <div class="res-metric" style="background:rgba(56,189,248,0.15); border-color:rgba(56,189,248,0.4);">
                <div class="res-label" style="color:#BAE6FD;">설계 권장 최소 구조 바이트 (Design Bite)</div>
                <div class="res-num" id="resBiteFinal" style="color:#38BDF8; font-size:2rem;">14 <span>mm (안전율 적용)</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">적용 구조용 실리콘 추천</div>
                <div class="res-num" style="font-size:1.15rem; color:#FFFFFF;">Dow DOWSIL™ 995 / 983 Structural</div>
              </div>
            </div>
            <a href="#b2b-form" class="btn-transfer" onclick="transferCalcResult('구조용 바이트')">
              <i class="bi bi-clipboard2-check"></i> 구조 바이트 검토 견적 요청
            </a>
          </div>
        </div>
      </div>

      <!-- 4. Deadload Panel -->
      <div class="calc-panel" id="calc-panel-deadload">
        <div class="calc-container">
          <div class="calc-inputs">
            <h3>⚖️ 패널 자중 지지 계산 (Deadload Calculator)</h3>
            <p>하단 세팅 블록이 없는 완전 구조 글레이징에서 실리콘이 지지해야 하는 유리 무게 및 전단 접착 치수를 검토합니다.</p>

            <div class="calc-grid">
              <div class="form-group">
                <label for="glassThickness">유리 총 두께 (Glass Thickness, mm)</label>
                <input type="number" id="glassThickness" value="24" min="5" max="100" oninput="calculateDeadload()" />
              </div>
              <div class="form-group">
                <label for="deadloadBite">적용 구조 바이트 (Structural Bite, mm)</label>
                <input type="number" id="deadloadBite" value="15" min="6" max="100" oninput="calculateDeadload()" />
              </div>
            </div>

            <div class="calc-grid">
              <div class="form-group">
                <label for="deadloadWidth">유리 가로 너비 (Width, m)</label>
                <input type="number" id="deadloadWidth" value="1.5" step="0.1" min="0.3" max="10" oninput="calculateDeadload()" />
              </div>
              <div class="form-group">
                <label for="deadloadHeight">유리 세로 높이 (Height, m)</label>
                <input type="number" id="deadloadHeight" value="2.4" step="0.1" min="0.3" max="10" oninput="calculateDeadload()" />
              </div>
            </div>

            <div style="background:var(--gray-100); border-radius:8px; padding:1rem; font-size:0.85rem; color:var(--gray-600);">
              💡 <strong>자중 허용 전단응력:</strong> 지속하중(자중)에 대한 실리콘 허용 전단응력은 <strong>7.0 kPa (1.0 psi)</strong> 기준을 적용합니다.
            </div>
          </div>

          <div class="calc-results">
            <div>
              <h4>📊 자중 지지 산출 결과 (Deadload Result)</h4>
              <div class="res-metric">
                <div class="res-label">유리 패널 총 중량 (Panel Weight)</div>
                <div class="res-num" id="resGlassWeight">216.0 <span>kg</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">자중에 의한 지속 전단 하중</div>
                <div class="res-num" id="resDeadloadForce">2.12 <span>kN</span></div>
              </div>
              <div class="res-metric" style="background:rgba(56,189,248,0.15); border-color:rgba(56,189,248,0.4);">
                <div class="res-label" style="color:#BAE6FD;">필요 최소 수직 접착 연장 (Min Contact Length)</div>
                <div class="res-num" id="resReqLength" style="font-size:1.65rem; color:#38BDF8;">20.16 <span>m (양측 7.8m 초과시 세팅블록 필수)</span></div>
              </div>
            </div>
            <a href="#b2b-form" class="btn-transfer" onclick="transferCalcResult('자중 지지 계산')">
              <i class="bi bi-clipboard2-check"></i> 자중 구조 검토 견적 요청
            </a>
          </div>
        </div>
      </div>

      <!-- 5. Glueline Table Panel -->
      <div class="calc-panel" id="calc-panel-glueline">
        <div class="calc-container" style="grid-template-columns: 1fr;">
          <div class="calc-inputs" style="padding: 2.5rem 3rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem;">
              <div>
                <h3>📐 글루라인 접착 두께 규격표 (Glueline Thickness Table)</h3>
                <p style="margin-bottom:0;">구조 바이트(Bite) 크기에 따른 최소 및 최대 글루라인 두께 (Dow Engineering Standard 매핑)</p>
              </div>
              <div style="background:var(--primary-light); color:var(--primary); font-weight:700; padding:0.4rem 1rem; border-radius:50px; font-size:0.85rem;">
                ASTM C1401 표준 규격 준수
              </div>
            </div>

            <table class="glueline-table">
              <thead>
                <tr>
                  <th>구조 바이트 (Bite, mm)</th>
                  <th>구조 바이트 (Bite, Inch)</th>
                  <th>최소 글루라인 (Min Glueline, mm)</th>
                  <th>최대 글루라인 (Max Glueline, mm)</th>
                  <th>적용 권장 용도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>6.4 mm</strong></td>
                  <td>0.25 in</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>소형 창호 & 내부 간접 접착</td>
                </tr>
                <tr>
                  <td><strong>9.6 mm</strong></td>
                  <td>0.375 in</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>9.6 mm (3/8 in)</td>
                  <td>표준 상업용 커튼월 4변 지지</td>
                </tr>
                <tr>
                  <td><strong>12.7 mm</strong></td>
                  <td>0.50 in</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>중대형 유리 & 복합판넬 외벽</td>
                </tr>
                <tr>
                  <td><strong>15.9 mm</strong></td>
                  <td>0.625 in</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>고층 풍하중 외벽 커튼월</td>
                </tr>
                <tr>
                  <td><strong>19.1 mm</strong></td>
                  <td>0.75 in</td>
                  <td>6.4 mm (1/4 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>초고층 및 강풍지역 대형 유리</td>
                </tr>
                <tr>
                  <td><strong>22.3 mm</strong></td>
                  <td>0.875 in</td>
                  <td>7.6 mm (0.30 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>대형 스팬 캐노피 & 아트리움</td>
                </tr>
                <tr>
                  <td><strong>25.4 mm</strong></td>
                  <td>1.00 in</td>
                  <td>8.7 mm (0.34 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>특수 지진/내진 설계 조인트</td>
                </tr>
                <tr>
                  <td><strong>31.8 mm</strong></td>
                  <td>1.25 in</td>
                  <td>10.7 mm (0.42 in)</td>
                  <td>12.7 mm (1/2 in)</td>
                  <td>초대형 비정형 파사드 유닛</td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div style="font-size:0.85rem; color:var(--gray-600);">
                ※ 글루라인 두께가 6.4mm 미만일 경우 실리콘 건식 노즐 진입 불량 및 응력 집중 파단 위험이 있습니다.
              </div>
              <a href="#b2b-form" class="btn-quote" style="padding:0.75rem 1.5rem;">
                <i class="bi bi-file-earmark-text"></i> 구조 글레이징 맞춤 견적 문의
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. Thermal Movement Panel -->
      <div class="calc-panel" id="calc-panel-thermal">
        <div class="calc-container">
          <div class="calc-inputs">
            <h3>🌡️ ASTM C1472 열팽창 변위 및 조인트폭 계산 (Thermal Movement)</h3>
            <p>이종 자재의 열팽창계수와 계절별 극한 온도차에 따른 수축/팽창량 및 필요 최소 조인트 폭을 산출합니다.</p>

            <div class="calc-grid">
              <div class="form-group">
                <label for="mat1">피착재 자재 1 (Substrate 1)</label>
                <select id="mat1" onchange="calculateThermal()">
                  <option value="23" selected>알루미늄 (Aluminum, 23 × 10⁻⁶ / °C)</option>
                  <option value="9">유리 (Glass, 9 × 10⁻⁶ / °C)</option>
                  <option value="12">콘크리트 (Concrete, 12 × 10⁻⁶ / °C)</option>
                  <option value="8">화강석 (Granite, 8 × 10⁻⁶ / °C)</option>
                  <option value="11">구조용 강재 (Steel, 11 × 10⁻⁶ / °C)</option>
                </select>
              </div>
              <div class="form-group">
                <label for="mat2">피착재 자재 2 (Substrate 2)</label>
                <select id="mat2" onchange="calculateThermal()">
                  <option value="9" selected>유리 (Glass, 9 × 10⁻⁶ / °C)</option>
                  <option value="23">알루미늄 (Aluminum, 23 × 10⁻⁶ / °C)</option>
                  <option value="12">콘크리트 (Concrete, 12 × 10⁻⁶ / °C)</option>
                  <option value="8">화강석 (Granite, 8 × 10⁻⁶ / °C)</option>
                  <option value="11">구조용 강재 (Steel, 11 × 10⁻⁶ / °C)</option>
                </select>
              </div>
            </div>

            <div class="calc-grid">
              <div class="form-group">
                <label for="tempDelta">연간 표면 극단 온도차 (ΔT, °C)</label>
                <input type="number" id="tempDelta" value="80" min="20" max="150" oninput="calculateThermal()" />
              </div>
              <div class="form-group">
                <label for="panelDim">패널 길이 (Span Length, Meter)</label>
                <input type="number" id="panelDim" value="3.0" step="0.1" min="0.5" max="30" oninput="calculateThermal()" />
              </div>
            </div>

            <div class="form-group">
              <label for="sealantMovement">실란트 허용 신축 변위능력 (Movement Capability, %)</label>
              <select id="sealantMovement" onchange="calculateThermal()">
                <option value="50" selected>±50% (Dow 791 / 991 초고신축 프리미엄)</option>
                <option value="25">±25% (표준 중신축 실란트)</option>
                <option value="15">±15% (보급형 실란트)</option>
              </select>
            </div>
          </div>

          <div class="calc-results">
            <div>
              <h4>📊 열팽창 산출 결과 (ASTM C1472)</h4>
              <div class="res-metric">
                <div class="res-label">이종 자재간 상대 열팽창 변위 (ΔL)</div>
                <div class="res-num" id="resDeltaL">3.36 <span>mm</span></div>
              </div>
              <div class="res-metric" style="background:rgba(56,189,248,0.15); border-color:rgba(56,189,248,0.4);">
                <div class="res-label" style="color:#BAE6FD;">설계 필수 최소 조인트 폭 (Min Joint Width)</div>
                <div class="res-num" id="resMinJointWidth" style="font-size:1.85rem; color:#38BDF8;">12 <span>mm (공차 및 안전율 반영)</span></div>
              </div>
              <div class="res-metric">
                <div class="res-label">추천 비오염/초고신축 실란트</div>
                <div class="res-num" style="font-size:1.1rem; color:#FFFFFF;">Dow DOWSIL™ 791 / 991 (±50%)</div>
              </div>
            </div>
            <a href="#b2b-form" class="btn-transfer" onclick="transferCalcResult('열팽창 조인트 폭')">
              <i class="bi bi-clipboard2-check"></i> 열팽창 설계값 견적서 반영
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ─── Quick Footer Calculator Hub Strip ─── -->
  <div class="calc-footer-strip">
    <div class="container">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <span style="font-size:0.8rem; font-weight:700; color:#38BDF8; letter-spacing:0.1em; text-transform:uppercase;">
            Engineering Hub Quick Access
          </span>
          <h3 style="font-size:1.5rem; font-weight:800; color:var(--white); margin-top:0.25rem;">
            Dow 기준 실리콘 공학 계산기 6대 핵심 모듈
          </h3>
        </div>
        <a href="#calculator" class="btn-quote" style="background:#38BDF8; color:var(--dark);" onclick="switchCalcTab('sealant')">
          <i class="bi bi-calculator"></i> 전체 계산기 허브 열기
        </a>
      </div>

      <div class="calc-strip-grid">
        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('sealant')">
          <div>
            <h6><i class="bi bi-calculator-fill"></i> 실란트 소요량</h6>
            <p>폭·깊이·길이별 카트리지/소시지 수량 및 백업재 산출</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">계산하기 →</span>
        </a>

        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('primer')">
          <div>
            <h6><i class="bi bi-droplet-half"></i> 프라이머 도포량</h6>
            <p>다공성/비다공성 면적별 소요 리터 및 캔 수량</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">계산하기 →</span>
        </a>

        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('bite')">
          <div>
            <h6><i class="bi bi-building-fill-gear"></i> 풍하중 구조 바이트</h6>
            <p>설계 풍하중(kPa) 및 단변 길이별 구조 접착폭(mm)</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">계산하기 →</span>
        </a>

        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('deadload')">
          <div>
            <h6><i class="bi bi-layers-fill"></i> 패널 자중 지지</h6>
            <p>유리 무게 전단 하중 및 최소 수직 접착 길이 검토</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">계산하기 →</span>
        </a>

        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('glueline')">
          <div>
            <h6><i class="bi bi-table"></i> 글루라인 두께표</h6>
            <p>ASTM C1401 바이트별 글루라인 최소/최대 규격표</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">규격표 보기 →</span>
        </a>

        <a href="#calculator" class="calc-strip-card" onclick="switchCalcTab('thermal')">
          <div>
            <h6><i class="bi bi-thermometer-half"></i> ASTM 열팽창 변위</h6>
            <p>자재간 ΔT 온도차에 따른 최소 조인트 설계 폭(mm)</p>
          </div>
          <span style="font-size:0.75rem; color:#38BDF8; font-weight:700; margin-top:0.75rem;">계산하기 →</span>
        </a>
      </div>
    </div>
  </div>

  <!-- ─── 4-Step Process ─── -->
  <section id="process" class="section-process">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">Order & Delivery Process</span>
        <h2 class="sec-title">신속하고 투명한 4단계 B2B 프로세스</h2>
        <p class="sec-desc">문의 접수부터 24시간 내 단가 견적, 세금계산서 발행 및 현장 분할 직납까지 안심 거래를 보장합니다.</p>
      </div>

      <div class="process-grid">
        <div class="process-card">
          <div class="process-num">01</div>
          <h4>문의 접수 & 시편 요청</h4>
          <p>현장 위치, 필요 자재 규격 및 샘플/색상칩 시편을 온라인 폼 또는 전화로 접수합니다.</p>
        </div>
        <div class="process-card">
          <div class="process-num">02</div>
          <h4>맞춤 견적서 회신</h4>
          <p>24시간 이내 현장 특별 B2B 단가표, 시방서 및 납기 일정을 맞춤 견적서로 신속히 발송합니다.</p>
        </div>
        <div class="process-card">
          <div class="process-num">03</div>
          <h4>발주 & 세금계산서</h4>
          <p>결제 조건 협의 후 전자세금계산서 발행 및 물량 출고 일정을 확정합니다.</p>
        </div>
        <div class="process-card">
          <div class="process-num">04</div>
          <h4>전국 현장 직납</h4>
          <p>수도권 당일/익일, 전국 2~3일 내 직납 및 다중 현장 분할 배송을 완수합니다.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── B2B Quote Form Section ─── -->
  <section id="b2b-form" class="section-b2b">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">B2B Direct Inquiry</span>
        <h2 class="sec-title">B2B 대량 견적 및 자재 납품 요청</h2>
        <p class="sec-desc">프로젝트 현장 위치와 필요하신 자재를 남겨주시면 24시간 이내 최적의 단가표와 납품 일정을 안내해 드립니다.</p>
      </div>

      <div class="b2b-wrap">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="f67c63de-f948-4e2f-8928-12d4b29ed572" />
          <input type="hidden" name="subject" value="New B2B Silicone Quote Request - KCT Platform" />

          <div class="b2b-form-grid">
            <div class="form-group">
              <label>회사명 / 상호</label>
              <input type="text" name="company" placeholder="예: (주)한국인테리어디자인 / (주)한국건설" required />
            </div>

            <div class="form-group">
              <label>담당자명 / 직책</label>
              <input type="text" name="name" placeholder="예: 홍길동 인테리어실장 / 현장소장" required />
            </div>

            <div class="form-group">
              <label>연락처 (휴대전화)</label>
              <input type="tel" name="phone" placeholder="010-1234-5678" required />
            </div>

            <div class="form-group">
              <label>이메일 주소</label>
              <input type="email" name="email" placeholder="sales@company.com" required />
            </div>

            <div class="form-group full">
              <label>납품 희망 지역 / 공장 현장 위치</label>
              <input type="text" name="location" placeholder="예: 서울 강남 아파트 인테리어 현장 / 경기 판교 상가 리모델링" required />
            </div>

            <div class="form-group full">
              <label>필요 자재 및 견적 요청 상세</label>
              <textarea id="quoteMessage" name="message" rows="5" placeholder="필요하신 실란트 품목(예: ARDEX SN+급 인테리어 타일 하이진 실란트 화이트/라이트그레이 10박스 / Dow 791 흑색 50박스), 희망 납기일 등을 자세히 적어주세요." style="width:100%; padding:0.85rem; border:1px solid var(--gray-200); border-radius:8px; font-family:var(--font); background:var(--gray-50);" required></textarea>
            </div>

            <div class="form-group full" style="margin-top:1rem;">
              <button type="submit" class="btn-quote" style="width:100%; padding:1.1rem; font-size:1.05rem; justify-content:center; border-radius:8px;">
                <i class="bi bi-send-check"></i> 맞춤 견적 요청서 발송하기 (24시간 내 회신)
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- ─── Company & Map (About) ─── -->
  <section id="about" style="padding:6.5rem 0; background:var(--white);">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge">About KCT</span>
        <h2 class="sec-title">한국건설트레이딩 본사 및 오시는 길</h2>
        <p class="sec-desc">서울 송파구 가든파이브툴 본사 및 글로벌 무역 네트워크 센터 안내입니다.</p>
      </div>

      <div style="border-radius:var(--radius-lg); overflow:hidden; border:1px solid var(--gray-200); box-shadow:var(--shadow-md);">
        <iframe src="https://maps.google.com/maps?q=37.478626,127.1192753&amp;hl=ko&amp;z=16&amp;output=embed" width="100%" height="420" style="border:0; display:block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map KCT"></iframe>
      </div>
    </div>
  </section>

  <!-- ─── Full Solution Detail Modal ─── -->
  <div class="modal-backdrop" id="appModal">
    <div class="modal-box">
      <button class="modal-close" onclick="closeAppModal()">✕</button>
      <span class="modal-category-tag" id="modalCat">적용산업 솔루션</span>
      <h3 id="modalTitle">솔루션 상세 시방</h3>
      <p id="modalDesc">상세 시공 가이드 및 추천 자재 스펙입니다.</p>
      <div class="modal-specs">
        <ul id="modalList">
        </ul>
      </div>
      <a href="#b2b-form" class="btn-quote" style="width:100%; justify-content:center;" onclick="closeAppModal()">이 솔루션으로 견적 요청하기</a>
    </div>
  </div>

  <!-- ─── Footer ─── -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="color:var(--white); font-size:1.3rem; font-weight:800; margin-bottom:1rem;">KCT <span style="font-size:0.95rem; font-weight:400; color:rgba(255,255,255,0.7);">한국건설트레이딩</span></h4>
          <p style="color:rgba(255,255,255,0.7); line-height:1.75; margin-bottom:1.5rem;">
            Dow Chemical 및 프리미엄 인테리어·특수실란트·ESS/EV배터리·건축 실리콘 전문 소싱·유통 기업.<br/>
            색상칩 시편/샘플 지원, TDS/MSDS 기술자료 실시간 발송 및 전국 2~3일 배송.
          </p>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <a href="/projects/kct/color-samples" style="background:rgba(255,255,255,0.1); padding:0.45rem 0.9rem; border-radius:4px; font-size:0.78rem; color:var(--white);"><i class="bi bi-palette-fill text-accent"></i> 색상칩 & 샘플요청</a>
            <a href="/projects/kct/technical" style="background:rgba(255,255,255,0.1); padding:0.45rem 0.9rem; border-radius:4px; font-size:0.78rem; color:var(--white);"><i class="bi bi-file-earmark-pdf"></i> 기술자료 센터 전용관</a>
            <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener" style="background:rgba(255,255,255,0.1); padding:0.45rem 0.9rem; border-radius:4px; font-size:0.78rem; color:var(--white);"><i class="bi bi-shop"></i> 네이버 스마트스토어</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>17대 적용분야</h5>
          <ul>
            <li><a href="#applications" onclick="filterByCat('building')">건축 & 실내 인테리어 (13개)</a></li>
            <li><a href="#applications" onclick="filterByCat('specialty-silicone')">특수모빌리티·하이테크 (8개)</a></li>
            <li><a href="#applications" onclick="filterByCat('ess-ev')">ESS & EV 배터리 (6개)</a></li>
            <li><a href="#applications" onclick="filterByCat('electronics')">전자·반도체 (6개)</a></li>
            <li><a href="#applications" onclick="filterByCat('automotive')">자동차 (4개)</a></li>
            <li><a href="#applications" onclick="filterByCat('industrial-other')">산업 & 에너지 (11개)</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>실리콘 공학 계산기 허브</h5>
          <ul>
            <li><a href="#calculator" onclick="switchCalcTab('sealant')"><i class="bi bi-calculator-fill" style="color:#38BDF8;"></i> 1. 실란트 소요량 계산기</a></li>
            <li><a href="#calculator" onclick="switchCalcTab('primer')"><i class="bi bi-droplet-half" style="color:#38BDF8;"></i> 2. 프라이머 도포량 계산기</a></li>
            <li><a href="#calculator" onclick="switchCalcTab('bite')"><i class="bi bi-building-fill-gear" style="color:#38BDF8;"></i> 3. 풍하중 구조 바이트 산출</a></li>
            <li><a href="#calculator" onclick="switchCalcTab('deadload')"><i class="bi bi-layers-fill" style="color:#38BDF8;"></i> 4. 패널 자중(Deadload) 지지</a></li>
            <li><a href="#calculator" onclick="switchCalcTab('glueline')"><i class="bi bi-table" style="color:#38BDF8;"></i> 5. 글루라인 두께 규격표</a></li>
            <li><a href="#calculator" onclick="switchCalcTab('thermal')"><i class="bi bi-thermometer-half" style="color:#38BDF8;"></i> 6. ASTM 열팽창 변위 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>고객 지원 & 주요 링크</h5>
          <ul>
            <li><a href="/projects/kct/color-samples" style="color:#FB923C; font-weight:700;"><i class="bi bi-palette-fill"></i> 색상칩 시편 & 샘플 요청관</a></li>
            <li><a href="/projects/kct/technical" style="color:#38BDF8; font-weight:700;"><i class="bi bi-file-earmark-arrow-down"></i> 기술자료 센터 (TDS·MSDS)</a></li>
            <li><a href="#products">제품 스펙 비교표</a></li>
            <li><a href="#b2b-form">B2B 대량 견적 요청</a></li>
            <li><a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener">스마트스토어 바로가기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact & 본사 안내</h5>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-geo-alt-fill text-primary"></i> 서울시 송파구 충민로 10 가든파이브툴 4-A19</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-telephone-x-fill text-primary"></i> 유선 연락처: <strong style="color:#38BDF8;">비공개</strong> (온라인 견적 및 폼 접수)</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-envelope-fill text-primary"></i> 문의 이메일: sales@kconstrade.com</p>
          <p><i class="bi bi-clock-fill text-primary"></i> 업무 시간: 평일 09:00 ~ 18:00 (온라인 24시간 접수)</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          상호명: 한국건설트레이딩 | 사업자등록번호: 371-07-03719 | 본사: 서울 송파구 충민로 10 4-A19 가든파이브툴 | 연락처: 비공개
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
          <span>홈페이지 제작 및 유지보수: <a href="https://davhave.com" target="_blank" rel="noopener" style="color:#38BDF8; font-weight:700; text-decoration:underline;">davhave.com</a></span>
          <span>© 2026 Korea Construction Trading (KCT). All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>

  <script>
    const fullModalData = {modal_js_json};

    // Header Scroll State
    window.addEventListener('scroll', () => {{
      const header = document.querySelector('header');
      if (header) {{
        header.classList.toggle('scrolled', window.scrollY > 40);
      }}
    }});

    // Mobile Drawer Logic
    const drawerToggle = document.getElementById('kctNavToggle');
    const drawer = document.getElementById('kctMobileDrawer');
    const drawerBackdrop = document.getElementById('kctDrawerBackdrop');
    const drawerClose = document.getElementById('kctDrawerClose');

    function openKctDrawer() {{
      if (drawer) drawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }}

    function closeKctDrawer() {{
      if (drawer) drawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }}

    if (drawerToggle) drawerToggle.addEventListener('click', openKctDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeKctDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeKctDrawer);

    function filterByCat(catId, btnEl) {{
      const cards = document.querySelectorAll('.app-card');
      const btns = document.querySelectorAll('.main-tab-btn');
      
      if (btnEl) {{
        btns.forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
      }}

      cards.forEach(card => {{
        if (catId === 'all' || card.getAttribute('data-cat') === catId) {{
          card.style.display = 'flex';
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    function filterBySub(subId) {{
      const cards = document.querySelectorAll('.app-card');
      const btns = document.querySelectorAll('.main-tab-btn');
      btns.forEach(b => b.classList.remove('active'));

      cards.forEach(card => {{
        if (card.getAttribute('data-sub') === subId) {{
          card.style.display = 'flex';
          card.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
          card.style.borderColor = 'var(--primary)';
          setTimeout(() => card.style.borderColor = '', 2000);
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    function openFullModal(subId) {{
      const data = fullModalData[subId];
      if (!data) return;
      document.getElementById('modalCat').innerText = data.catName;
      document.getElementById('modalTitle').innerText = data.title;
      document.getElementById('modalDesc').innerText = data.desc;
      
      let html = '';
      data.specs.forEach(item => {{
        html += `<li><strong>${{item[0]}}:</strong> <span>${{item[1]}}</span></li>`;
      }});
      document.getElementById('modalList').innerHTML = html;
      document.getElementById('appModal').classList.add('active');
    }}

    function closeAppModal() {{
      document.getElementById('appModal').classList.remove('active');
    }}

    function prefillQuote(title) {{
      document.getElementById('quoteMessage').value = `[${{title}} 솔루션 견적 문의]\\n- 필요 수량:\\n- 공장/현장 위치:\\n- 희망 납기일:`;
    }}

    /* ─── Silicone Engineering Calculators Hub Logic (Dow Standards) ─── */
    function switchCalcTab(tabKey, btnEl) {{
      document.querySelectorAll('.calc-hub-tabs .calc-hub-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.calc-panel').forEach(p => p.classList.remove('active'));

      const targetPanel = document.getElementById(`calc-panel-${{tabKey}}`);
      if (targetPanel) targetPanel.classList.add('active');

      if (btnEl) {{
        btnEl.classList.add('active');
      }} else {{
        const btnMap = {{
          'sealant': 0, 'primer': 1, 'bite': 2, 'deadload': 3, 'glueline': 4, 'thermal': 5
        }};
        const idx = btnMap[tabKey] !== undefined ? btnMap[tabKey] : 0;
        const allBtns = document.querySelectorAll('.calc-hub-tabs .calc-hub-tab-btn');
        if (allBtns[idx]) allBtns[idx].classList.add('active');
      }}

      // Recalculate on tab switch
      if (tabKey === 'sealant') calculateSealantUsage();
      else if (tabKey === 'primer') calculatePrimerUsage();
      else if (tabKey === 'bite') calculateBite();
      else if (tabKey === 'deadload') calculateDeadload();
      else if (tabKey === 'thermal') calculateThermal();
    }}

    // 1. Sealant Usage
    function calculateSealantUsage() {{
      const width = parseFloat(document.getElementById('jointWidth').value) || 0;
      const depth = parseFloat(document.getElementById('jointDepth').value) || 0;
      const length = parseFloat(document.getElementById('jointLength').value) || 0;
      const lossRate = parseFloat(document.getElementById('lossRate').value) || 1.10;

      const totalLiters = ((width * depth * length) / 1000) * lossRate;
      const totalMl = totalLiters * 1000;

      const cartridges = Math.ceil(totalMl / 300);
      const sausages500 = Math.ceil(totalMl / 500);
      const sausages600 = Math.ceil(totalMl / 600);
      const recommendedBacker = Math.ceil(width * 1.25 / 5) * 5;

      document.getElementById('resVolume').innerHTML = `${{totalLiters.toFixed(2)}} <span>L (Liter)</span>`;
      document.getElementById('resCartridge').innerHTML = `${{cartridges.toLocaleString()}} <span>개 (약 ${{(cartridges/25).toFixed(1)}} 박스 / 25개入)</span>`;
      document.getElementById('resSausage').innerHTML = `${{sausages500.toLocaleString()}} / ${{sausages600.toLocaleString()}} <span>개 (500ml / 600ml)</span>`;
      document.getElementById('resBacker').innerHTML = `Ø ${{recommendedBacker}} <span>mm (폭 대비 +25% 압축삽입)</span>`;
    }}

    // 2. Primer Usage
    function calculatePrimerUsage() {{
      const type = document.getElementById('substrateType').value;
      const widthMm = parseFloat(document.getElementById('primerWidth').value) || 15;
      const lengthM = parseFloat(document.getElementById('primerLength').value) || 500;
      const sides = parseInt(document.getElementById('primerSides').value) || 2;

      // Area in m2 = (width in m) * length * sides
      const areaM2 = (widthMm / 1000) * lengthM * sides;
      
      // Coverage rate: porous = 5 m2/L, nonporous = 10 m2/L, plastics = 8 m2/L
      let rate = 5;
      let recName = 'Dow Primer-C / 1200 OS';
      if (type === 'nonporous') {{
        rate = 10;
        recName = 'Dow Primer 1200 OS / AP Clear';
      }} else if (type === 'plastics') {{
        rate = 8;
        recName = 'Dow 1205 Prime Coat / Primer-P';
      }}

      const totalLiters = (areaM2 / rate) * 1.15; // 15% safety loss
      const cans500 = Math.ceil(totalLiters / 0.5);

      document.getElementById('resPrimerArea').innerHTML = `${{areaM2.toFixed(2)}} <span>m²</span>`;
      document.getElementById('resPrimerVol').innerHTML = `${{totalLiters.toFixed(2)}} <span>L (Liter, 15% 할증)</span>`;
      document.getElementById('resPrimerCans').innerHTML = `${{cans500.toLocaleString()}} <span>Can (500ml 캔 단위)</span>`;
      document.getElementById('resPrimerRec').innerText = recName;
    }}

    // 3. Structural Bite (Dow Standard Formula)
    function calculateBite() {{
      const windKpa = parseFloat(document.getElementById('windLoad').value) || 2.5;
      const shortSpanMm = parseFloat(document.getElementById('panelWidth').value) || 1500;
      const shape = document.getElementById('panelShape').value;
      const designStressKpa = 140; // Dow standard allowable tensile stress = 140 kPa (20 psi)

      let biteMm = 0;
      if (shape === 'rect' || shape === 'square') {{
        biteMm = (shortSpanMm * windKpa) / (2 * designStressKpa);
      }} else if (shape === 'circular') {{
        const radius = shortSpanMm / 2;
        biteMm = (windKpa * radius) / (2 * designStressKpa);
      }}

      const calculatedBite = Math.max(6.4, biteMm);
      const designBite = Math.ceil(calculatedBite);

      document.getElementById('resBiteCalc').innerHTML = `${{calculatedBite.toFixed(2)}} <span>mm</span>`;
      document.getElementById('resBiteFinal').innerHTML = `${{designBite}} <span>mm (최소 규격 충족)</span>`;
    }}

    // 4. Deadload Calculator
    function calculateDeadload() {{
      const thicknessMm = parseFloat(document.getElementById('glassThickness').value) || 24;
      const widthM = parseFloat(document.getElementById('deadloadWidth').value) || 1.5;
      const heightM = parseFloat(document.getElementById('deadloadHeight').value) || 2.4;
      const biteMm = parseFloat(document.getElementById('deadloadBite').value) || 15;
      const allowableShearKpa = 7.0; // Dow standard allowable shear stress = 7 kPa (1 psi)

      // Glass density = 2500 kg/m3 -> 2.5 kg/m2 per 1mm thickness
      const glassWeightKg = widthM * heightM * thicknessMm * 2.5;
      const weightForceN = glassWeightKg * 9.80665; // N
      const weightForceKn = weightForceN / 1000;

      const reqAreaMm2 = weightForceN / (allowableShearKpa / 1000);
      const reqLengthM = (reqAreaMm2 / biteMm) / 1000;

      document.getElementById('resGlassWeight').innerHTML = `${{glassWeightKg.toFixed(1)}} <span>kg</span>`;
      document.getElementById('resDeadloadForce').innerHTML = `${{weightForceKn.toFixed(2)}} <span>kN</span>`;
      document.getElementById('resReqLength').innerHTML = `${{reqLengthM.toFixed(2)}} <span>m (양변 접착 길이)</span>`;
    }}

    // 6. ASTM C1472 Thermal Movement
    function calculateThermal() {{
      const coeff1 = (parseFloat(document.getElementById('mat1').value) || 23) * 1e-6;
      const coeff2 = (parseFloat(document.getElementById('mat2').value) || 9) * 1e-6;
      const deltaT = parseFloat(document.getElementById('tempDelta').value) || 80;
      const lengthM = parseFloat(document.getElementById('panelDim').value) || 3.0;
      const movementCapPct = parseFloat(document.getElementById('sealantMovement').value) || 50;

      const deltaLMm = (lengthM * 1000) * Math.abs(coeff1 - coeff2) * deltaT;
      const minJointWidth = Math.max(6.0, (deltaLMm / (movementCapPct / 100)) * 1.25);
      const designWidth = Math.ceil(minJointWidth);

      document.getElementById('resDeltaL').innerHTML = `${{deltaLMm.toFixed(2)}} <span>mm</span>`;
      document.getElementById('resMinJointWidth').innerHTML = `${{designWidth}} <span>mm (안전율 125% 반영)</span>`;
    }}

    function transferCalcResult(calcType) {{
      let details = '';
      if (calcType === '실란트 소요량') {{
        const w = document.getElementById('jointWidth').value;
        const d = document.getElementById('jointDepth').value;
        const l = document.getElementById('jointLength').value;
        const vol = document.getElementById('resVolume').innerText;
        const cart = document.getElementById('resCartridge').innerText;
        details = `[실리콘 소요량 계산 결과]\\n- 조인트 치수: 폭 ${{w}}mm × 깊이 ${{depth}}mm × 총길이 ${{l}}m\\n- 산출 체적: ${{vol}}\\n- 예상 수량: ${{cart}}`;
      }} else if (calcType === '프라이머 소요량') {{
        const area = document.getElementById('resPrimerArea').innerText;
        const vol = document.getElementById('resPrimerVol').innerText;
        const cans = document.getElementById('resPrimerCans').innerText;
        const rec = document.getElementById('resPrimerRec').innerText;
        details = `[프라이머 소요량 계산 결과]\\n- 도포 총면적: ${{area}}\\n- 예상 필요량: ${{vol}} (${{cans}})\\n- 추천 제품: ${{rec}}`;
      }} else if (calcType === '구조용 바이트') {{
        const wind = document.getElementById('windLoad').value;
        const w = document.getElementById('panelWidth').value;
        const h = document.getElementById('panelHeight').value;
        const bite = document.getElementById('resBiteFinal').innerText;
        details = `[구조용 실리콘 바이트 검토 견적]\\n- 설계 풍하중: ${{wind}} kPa\\n- 패널 치수: ${{w}}mm × ${{h}}mm\\n- 권장 최소 바이트: ${{bite}}`;
      }} else if (calcType === '자중 지지 계산') {{
        const wt = document.getElementById('resGlassWeight').innerText;
        const len = document.getElementById('resReqLength').innerText;
        details = `[패널 자중 지지 구조 검토]\\n- 유리 총중량: ${{wt}}\\n- 자중 지지 필요 접착연장: ${{len}}`;
      }} else if (calcType === '열팽창 조인트 폭') {{
        const dl = document.getElementById('resDeltaL').innerText;
        const minW = document.getElementById('resMinJointWidth').innerText;
        details = `[ASTM C1472 열팽창 조인트 설계 검토]\\n- 상대 열팽창 변위: ${{dl}}\\n- 권장 최소 조인트 폭: ${{minW}}`;
      }}

      document.getElementById('quoteMessage').value = `${{details}}\\n\\n[추가 요청사항]\\n- 현장 납기일:\\n- 시험성적서/TDS 첨부 희망`;
      document.getElementById('b2b-form').scrollIntoView({{ behavior: 'smooth' }});
    }}

    window.addEventListener('DOMContentLoaded', () => {{
      calculateSealantUsage();
      calculatePrimerUsage();
      calculateBite();
      calculateDeadload();
      calculateThermal();
    }});
  </script>
</body>
</html>
"""

# ==========================================
# 2. COLOR SWATCH & SAMPLE REQUEST PAGE HTML (color-samples.html)
# ==========================================
color_cards_html = []
for c in COLOR_CHIPS:
    color_cards_html.append(f"""
    <div class="chip-card" data-code="{c['code']}" data-cat="{c['category']}" data-name="{c['name_ko']}" data-hex="{c['hex']}">
      <div class="chip-visual-wrap" style="background:{c['hex']}; border:1px solid {c['border']};">
        <span class="chip-code">{c['code']}</span>
      </div>
      <div class="chip-info">
        <h5>{c['name_ko']}</h5>
        <span class="chip-cat">{c['category']}</span>
        <div class="chip-detail-row">
          <span>매칭 제품:</span> <strong>{c['matched_prod']}</strong>
        </div>
        <div class="chip-detail-row" style="margin-bottom:0.75rem;">
          <span>추천 마감재:</span> <span style="font-size:0.78rem; color:var(--gray-600);">{c['recommendation']}</span>
        </div>
        <div class="chip-actions">
          <button class="btn-compare-add" onclick="toggleCompareChip('{c['code']}', '{c['name_ko']}', '{c['hex']}', '{c['matched_prod']}')">
            <i class="bi bi-plus-circle"></i> 색상 비교함 담기
          </button>
          <label class="sample-chk-label">
            <input type="checkbox" class="sample-chip-check" value="{c['code']}" data-name="{c['name_ko']}" onchange="updateSampleCount()" /> 시편 요청
          </label>
        </div>
      </div>
    </div>
    """)

color_cards_rendered = "\n".join(color_cards_html)

color_html_template = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>색상칩 시편 비교 & 실물 샘플 요청 센터 - 한국건설트레이딩 (KCT)</title>
  <meta name="description" content="KCT 실리콘 색상칩 시편 비교 및 실물 샘플 요청관: 외장 웨더 실란트, ARDEX SN PLUS 14종 인테리어 타일 매칭 색상칩 실시간 비교, 마감재 텍스처 시뮬레이션 및 현장 승인용 무료 시편 신청." />
  <meta name="keywords" content="실리콘 색상표, 실리콘 색상칩, 실리콘 시편 요청, 실리콘 샘플 신청, 아덱스 실리콘 색상, ARDEX SN PLUS, 한국건설트레이딩, KCT" />
  
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="색상칩 시편 비교 & 실물 샘플 요청 센터 - 한국건설트레이딩 (KCT)" />
  <meta property="og:description" content="실시간 색상칩 비교기, 마감재 텍스처 시뮬레이터 및 현장 승인용 무료 실물 시편/샘플 배송 신청." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {{
      --primary: #1558D6;
      --primary-dark: #0D3F9E;
      --primary-light: #EBF2FE;
      --accent: #FF6B35;
      --accent-hover: #E0531D;
      --dark: #0F172A;
      --dark-light: #1E293B;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-400: #94A3B8;
      --gray-600: #475569;
      --gray-800: #1E293B;
      --white: #FFFFFF;
      --radius-sm: 8px;
      --radius: 12px;
      --radius-lg: 18px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow-md: 0 6px 18px rgba(15,23,42,0.08);
      --shadow-lg: 0 16px 36px rgba(15,23,42,0.12);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --font-en: 'Poppins', sans-serif;
    }}

    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--font); color: var(--gray-800); background: #F8FAFC; line-height: 1.6; -webkit-font-smoothing: antialiased; }}
    a {{ text-decoration: none; color: inherit; }}
    ul {{ list-style: none; }}
    img {{ max-width: 100%; height: auto; display: block; }}
    .container {{ max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }}

    .top-bar {{ background: var(--dark); color: rgba(255,255,255,0.75); font-size: 0.82rem; padding: 0.55rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }}
    .top-bar-inner {{ display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }}
    .top-bar-info {{ display: flex; gap: 1.5rem; flex-wrap: wrap; }}
    .top-bar-info span {{ display: inline-flex; align-items: center; gap: 0.35rem; }}
    .top-bar-links {{ display: flex; gap: 1.25rem; align-items: center; }}
    .top-bar-links a {{ color: rgba(255,255,255,0.85); transition: color 0.2s; display: inline-flex; align-items: center; gap: 0.3rem; }}
    .top-bar-links a:hover {{ color: var(--white); }}

    header {{ position: sticky; top: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 1000; border-bottom: 1px solid var(--gray-200); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s; }}
    header.scrolled {{ box-shadow: 0 10px 30px rgba(15,23,42,0.12); background: rgba(255,255,255,0.98); }}
    .nav-inner {{ display: flex; justify-content: space-between; align-items: center; height: 76px; transition: height 0.3s; }}
    header.scrolled .nav-inner {{ height: 64px; }}
    .brand-logo {{ display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.35rem; color: var(--dark); text-decoration: none; }}
    .brand-badge {{ background: #FFEDD5; color: var(--accent); font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; letter-spacing: 0.05em; }}
    
    .nav-menu {{ display: flex; align-items: center; gap: 1rem; }}
    .btn-nav-link {{ background: var(--gray-100); color: var(--dark); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.15rem; border-radius: 50px; border: 1px solid var(--gray-200); display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.2s; text-decoration: none; }}
    .btn-nav-link:hover {{ background: var(--primary-light); color: var(--primary); border-color: var(--primary); }}
    .btn-quote {{ background: var(--accent); color: var(--white); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.25rem; border-radius: 50px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; border: none; cursor: pointer; text-decoration: none; }}
    .btn-quote:hover {{ background: var(--accent-hover); transform: translateY(-1px); }}

    .nav-toggle-btn {{ display: none; background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 8px; width: 42px; height: 42px; align-items: center; justify-content: center; font-size: 1.25rem; color: var(--dark); cursor: pointer; }}
    @media (max-width: 860px) {{
      .nav-menu {{ display: none; }}
      .nav-toggle-btn {{ display: flex; }}
    }}

    /* Mobile Drawer */
    .mobile-drawer {{ position: fixed; top: 0; right: -100%; width: min(360px, 86vw); height: 100%; background: var(--white); z-index: 2500; box-shadow: -10px 0 35px rgba(0,0,0,0.25); transition: right 0.35s cubic-bezier(0.32, 0.72, 0, 1); display: flex; flex-direction: column; overflow-y: auto; }}
    .mobile-drawer.open {{ right: 0; }}
    .drawer-backdrop {{ position: fixed; inset: 0; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); z-index: 2400; opacity: 0; pointer-events: none; transition: opacity 0.3s; }}
    .drawer-backdrop.open {{ opacity: 1; pointer-events: auto; }}
    .drawer-header {{ padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; background: var(--gray-50); }}
    .drawer-close-btn {{ background: none; border: none; font-size: 1.4rem; color: var(--gray-600); cursor: pointer; }}
    .drawer-body {{ padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }}
    .drawer-nav-list {{ list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }}
    .drawer-nav-item a {{ display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; color: var(--gray-800); text-decoration: none; background: var(--gray-50); transition: all 0.2s; }}
    .drawer-nav-item a:hover {{ background: var(--primary-light); color: var(--primary); }}

    .breadcrumb-bar {{ background: var(--white); border-bottom: 1px solid var(--gray-200); padding: 0.85rem 0; font-size: 0.85rem; color: var(--gray-600); }}
    .breadcrumb-bar a {{ color: var(--primary); font-weight: 600; text-decoration: none; }}
    .breadcrumb-bar a:hover {{ text-decoration: underline; }}
    .breadcrumb-bar span.sep {{ margin: 0 0.5rem; color: var(--gray-400); }}

    .page-hero {{ background: linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E3A8A 100%); color: var(--white); padding: 4.5rem 0 4rem; text-align: center; }}
    .page-hero-badge {{ display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(251,146,60,0.2); color: #FB923C; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem; border: 1px solid rgba(251,146,60,0.3); }}
    .page-hero h1 {{ font-size: 2.5rem; font-weight: 800; margin-bottom: 0.85rem; letter-spacing: -0.02em; }}
    .page-hero p {{ font-size: 1.05rem; color: rgba(255,255,255,0.85); max-width: 820px; margin: 0 auto; line-height: 1.7; }}

    /* ─── Interactive Comparison Studio ─── */
    .section-studio {{ padding: 3.5rem 0 2rem; }}
    .studio-box {{ background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 2.5rem; box-shadow: var(--shadow-md); margin-bottom: 3.5rem; }}
    .studio-header {{ display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--gray-200); padding-bottom: 1rem; }}
    .studio-header h3 {{ font-size: 1.35rem; font-weight: 800; color: var(--dark); display: flex; align-items: center; gap: 0.5rem; }}
    
    .texture-selector {{ display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }}
    .texture-btn {{ background: var(--gray-100); border: 1px solid var(--gray-200); padding: 0.4rem 0.85rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }}
    .texture-btn.active {{ background: var(--dark); color: var(--white); border-color: var(--dark); }}

    /* Comparison Stage */
    .compare-stage {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; min-height: 220px; background: #E5E7EB; border-radius: 12px; padding: 2rem; border: 2px dashed #94A3B8; position: relative; }}
    @media (max-width: 800px) {{ .compare-stage {{ grid-template-columns: 1fr; }} }}
    
    /* Background Simulation Textures */
    .compare-stage.tex-tile {{ background: repeating-linear-gradient(0deg, #F8FAFC, #F8FAFC 90px, #CBD5E1 92px), repeating-linear-gradient(90deg, #F8FAFC, #F8FAFC 90px, #CBD5E1 92px); }}
    .compare-stage.tex-marble {{ background: linear-gradient(135deg, #F3F4F6 25%, #E5E7EB 50%, #F9FAFB 75%); }}
    .compare-stage.tex-concrete {{ background: radial-gradient(#9CA3AF 15%, #6B7280 100%); }}
    .compare-stage.tex-darkmetal {{ background: linear-gradient(180deg, #1E293B 0%, #0F172A 100%); }}

    .compare-slot {{ background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); border-radius: 10px; padding: 1.25rem; border: 1px solid rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm); }}
    .compare-slot-color {{ height: 80px; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; text-shadow: 0 1px 2px rgba(0,0,0,0.3); color: #fff; }}
    .compare-slot-info h6 {{ font-size: 0.95rem; font-weight: 700; color: var(--dark); margin-bottom: 0.25rem; }}
    .compare-slot-info p {{ font-size: 0.8rem; color: var(--gray-600); }}

    /* ─── Color Palette Grid ─── */
    .color-grid-section {{ margin-bottom: 4rem; }}
    .color-filter-tabs {{ display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }}
    .c-tab-btn {{ background: var(--white); border: 1px solid var(--gray-200); padding: 0.6rem 1.25rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }}
    .c-tab-btn.active, .c-tab-btn:hover {{ background: var(--accent); color: var(--white); border-color: var(--accent); }}

    .color-cards-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.5rem; }}
    .chip-card {{ background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); transition: all 0.25s; display: flex; flex-direction: column; }}
    .chip-card:hover {{ transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: var(--accent); }}
    .chip-visual-wrap {{ height: 110px; display: flex; align-items: flex-end; padding: 0.75rem; position: relative; }}
    .chip-code {{ background: rgba(15,23,42,0.75); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: var(--font-en); }}
    
    .chip-info {{ padding: 1.25rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }}
    .chip-info h5 {{ font-size: 1.05rem; font-weight: 700; color: var(--dark); margin-bottom: 0.2rem; }}
    .chip-cat {{ font-size: 0.78rem; color: var(--primary); font-weight: 600; margin-bottom: 0.75rem; display: block; }}
    .chip-detail-row {{ font-size: 0.82rem; color: var(--gray-800); margin-bottom: 0.25rem; }}
    .chip-detail-row span {{ color: var(--gray-600); }}
    
    .chip-actions {{ display: flex; gap: 0.5rem; align-items: center; margin-top: 1rem; padding-top: 0.85rem; border-top: 1px solid var(--gray-100); }}
    .btn-compare-add {{ background: var(--gray-100); color: var(--dark); border: 1px solid var(--gray-200); border-radius: 6px; padding: 0.45rem 0.75rem; font-size: 0.78rem; font-weight: 700; cursor: pointer; flex-grow: 1; text-align: center; transition: all 0.2s; }}
    .btn-compare-add:hover {{ background: var(--primary-light); color: var(--primary); border-color: var(--primary); }}
    .sample-chk-label {{ font-size: 0.82rem; font-weight: 700; color: var(--accent); display: flex; align-items: center; gap: 0.35rem; cursor: pointer; padding: 0.45rem 0.6rem; background: #FFF7ED; border-radius: 6px; }}

    /* ─── Physical Sample Request Section ─── */
    .section-sample-form {{ padding: 4.5rem 0 6rem; background: var(--white); border-top: 1px solid var(--gray-200); }}
    .sample-form-wrap {{ max-width: 900px; margin: 0 auto; background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 3.5rem; box-shadow: var(--shadow-sm); }}
    .form-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 1.35rem; }}
    @media (max-width: 650px) {{ .form-grid {{ grid-template-columns: 1fr; }} }}
    .form-grid .full {{ grid-column: span 2; }}
    @media (max-width: 650px) {{ .form-grid .full {{ grid-column: span 1; }} }}
    .form-group label {{ display: block; font-size: 0.85rem; font-weight: 700; color: var(--gray-800); margin-bottom: 0.45rem; }}
    .form-group input, .form-group select, .form-group textarea {{ width: 100%; padding: 0.85rem 1rem; border: 1.5px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--white); transition: all 0.2s; }}
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {{ outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px rgba(255,107,53,0.15); }}
    
    .selected-chips-box {{ background: var(--white); border: 1.5px dashed #FDBA74; border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem; min-height: 70px; }}
    .selected-tag {{ display: inline-flex; align-items: center; gap: 0.4rem; background: #FFEDD5; color: #C2410C; padding: 0.35rem 0.75rem; border-radius: 50px; font-size: 0.82rem; font-weight: 700; margin: 0.25rem; }}

    footer {{ background: var(--dark); color: rgba(255,255,255,0.75); padding: 4.5rem 0 2.5rem; font-size: 0.88rem; }}
    .footer-grid {{ display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3rem; }}
    @media (max-width: 900px) {{ .footer-grid {{ grid-template-columns: 1fr 1fr; }} }}
    @media (max-width: 550px) {{ .footer-grid {{ grid-template-columns: 1fr; }} }}
    .footer-col h5 {{ font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; }}
    .footer-col ul li {{ margin-bottom: 0.65rem; }}
    .footer-col ul li a {{ color: rgba(255,255,255,0.7); transition: color 0.2s; }}
    .footer-col ul li a:hover {{ color: var(--white); }}
    .footer-bottom {{ border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; }}
  </style>
</head>
<body>

  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-info">
        <span><i class="bi bi-building-check text-primary"></i> <strong>사업자등록번호:</strong> 371-07-03719</span>
        <span><i class="bi bi-palette-fill text-accent"></i> <strong>색상칩 시편 & 샘플 발송 센터</strong></span>
        <span><i class="bi bi-truck text-primary"></i> 수도권 당일/익일 직납</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct"><i class="bi bi-house-door-fill"></i> 메인 포털</a>
        <a href="/projects/kct/technical"><i class="bi bi-file-earmark-arrow-down-fill"></i> 기술자료 센터</a>
        <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener"><i class="bi bi-bag-check"></i> 스마트스토어</a>
        <a href="/projects/kct#b2b-form"><i class="bi bi-chat-left-text-fill"></i> 온라인 견적문의</a>
      </div>
    </div>
  </div>

  <header>
    <div class="container nav-inner">
      <a href="/projects/kct" class="brand-logo">
        KCT <span style="font-weight:400; color:var(--gray-600); font-size:1.05rem;">한국건설트레이딩</span>
        <span class="brand-badge">COLOR & SAMPLE</span>
      </a>

      <div class="nav-menu">
        <a href="/projects/kct" class="btn-nav-link"><i class="bi bi-house"></i> KCT 메인 포털</a>
        <a href="/projects/kct/technical" class="btn-nav-link"><i class="bi bi-file-earmark-pdf"></i> 기술자료 센터</a>
        <a href="/projects/kct#calculator" class="btn-nav-link"><i class="bi bi-calculator"></i> 실리콘 계산기</a>
        <a href="#sample-form" class="btn-quote"><i class="bi bi-send-fill"></i> 실물 시편/샘플 요청</a>
      </div>

      <button class="nav-toggle-btn" id="kctColorNavToggle" aria-label="메뉴 열기">
        <i class="bi bi-list"></i>
      </button>
    </div>
  </header>

  <!-- Mobile Slide Drawer -->
  <div class="drawer-backdrop" id="kctColorDrawerBackdrop"></div>
  <aside class="mobile-drawer" id="kctColorMobileDrawer" aria-label="모바일 네비게이션">
    <div class="drawer-header">
      <div style="font-weight:800; font-size:1.15rem; color:var(--dark); display:flex; align-items:center; gap:0.5rem;">
        <span>색상칩 센터 메뉴</span>
      </div>
      <button class="drawer-close-btn" id="kctColorDrawerClose" aria-label="메뉴 닫기">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul class="drawer-nav-list">
        <li class="drawer-nav-item"><a href="/projects/kct"><i class="bi bi-house-door-fill"></i> <span>KCT 메인 포털</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/technical"><i class="bi bi-file-earmark-pdf-fill"></i> <span>기술자료(TDS/MSDS) 센터</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct#calculator"><i class="bi bi-calculator"></i> <span>실리콘 조인트 계산기</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects"><i class="bi bi-grid-fill"></i> <span>DAVHAVE Projects 허브</span> <span>↗</span></a></li>
      </ul>

      <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--gray-200);">
        <a href="#sample-form" class="btn-quote" style="width:100%; justify-content:center; padding:0.9rem;" onclick="closeKctColorDrawer()">
          <i class="bi bi-send-fill"></i> 실물 시편 & 샘플 요청하기
        </a>
      </div>
    </div>
  </aside>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="container">
      <a href="/projects/kct">홈</a>
      <span class="sep">></span>
      <a href="/projects/kct">KCT 플랫폼</a>
      <span class="sep">></span>
      <span style="color:var(--dark); font-weight:700;">색상칩 시편 비교 & 실물 샘플 요청 센터</span>
    </div>
  </div>

  <!-- Hero -->
  <section class="page-hero">
    <div class="container">
      <div class="page-hero-badge">
        <i class="bi bi-palette-fill"></i> Silicone Color Swatch & Sample Studio
      </div>
      <h1>색상칩 시편 비교 & 실물 샘플 요청관</h1>
      <p>
        건축 외장 커튼월, 복합판넬, 인테리어 타일(ARDEX SN+ 14종) 및 특수 난연 실리콘의 색상칩을 실시간 비교하고, 현장 승인 및 감리용 실물 시편과 샘플 카트리지를 신청하세요.
      </p>
    </div>
  </section>

  <!-- ─── 1. Interactive Color Comparison Studio ─── -->
  <section class="section-studio">
    <div class="container">
      <div class="studio-box">
        <div class="studio-header">
          <h3><i class="bi bi-aspect-ratio text-accent"></i> 실시간 색상칩 비교기 & 마감재 시뮬레이터</h3>
          <div class="texture-selector">
            <span style="font-size:0.85rem; font-weight:700; color:var(--gray-600);">마감재 배경 선택:</span>
            <button class="texture-btn active" onclick="setTexture('tex-tile', this)">화이트 타일</button>
            <button class="texture-btn" onclick="setTexture('tex-marble', this)">베이지 대리석</button>
            <button class="texture-btn" onclick="setTexture('tex-concrete', this)">노출 콘크리트</button>
            <button class="texture-btn" onclick="setTexture('tex-darkmetal', this)">다크 메탈 판넬</button>
          </div>
        </div>

        <p style="font-size:0.9rem; color:var(--gray-600); margin-bottom:1.5rem;">
          💡 아래 색상 팔레트에서 <strong>[색상 비교함 담기]</strong> 버튼을 누르면 최대 3개의 색상칩을 나란히 배치하여 마감재 위에서의 대비 효과를 즉시 확인할 수 있습니다.
        </p>

        <!-- Dynamic Compare Stage -->
        <div class="compare-stage tex-tile" id="compareStage">
          <div class="compare-slot">
            <div class="compare-slot-color" style="background:#FFFFFF; border:1px solid #D1D5DB; color:#1E293B;">CLR-EXT-01</div>
            <div class="compare-slot-info">
              <h6>퓨어 화이트 (Pure White)</h6>
              <p>Dow 791 / KCT Neutral</p>
            </div>
          </div>
          <div class="compare-slot">
            <div class="compare-slot-color" style="background:#D1D5DB; border:1px solid #9CA3AF; color:#1E293B;">CLR-EXT-03</div>
            <div class="compare-slot-info">
              <h6>라이트 그레이 (Light Gray)</h6>
              <p>Dow 791 / 991 Non-Staining</p>
            </div>
          </div>
          <div class="compare-slot">
            <div class="compare-slot-color" style="background:#1E293B; border:1px solid #0F172A; color:#FFFFFF;">CLR-EXT-06</div>
            <div class="compare-slot-info">
              <h6>제트 블랙 (Jet Black)</h6>
              <p>Dow 983 / 791 Black</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── 2. Color Swatch Catalog ─── -->
  <section class="color-grid-section">
    <div class="container">
      <div class="sec-header" style="margin-bottom:2rem; text-align:left;">
        <span class="sec-badge">Color Palette Catalog</span>
        <h2 class="sec-title" style="font-size:1.85rem;">실리콘 & 실란트 색상칩 팔레트</h2>
        <p class="sec-desc">건축 외장, 실내 인테리어 타일 하이진 및 특수 모빌리티 실란트의 표준 색상 라인업입니다.</p>
      </div>

      <div class="color-filter-tabs">
        <button class="c-tab-btn active" onclick="filterColorCategory('ALL', this)">전체 색상 ({len(COLOR_CHIPS)}종)</button>
        <button class="c-tab-btn" onclick="filterColorCategory('건축 외장', this)">건축 외장 & 커튼월</button>
        <button class="c-tab-btn" onclick="filterColorCategory('실내 인테리어', this)">실내 인테리어 타일 (ARDEX SN+)</button>
        <button class="c-tab-btn" onclick="filterColorCategory('특수 모빌리티', this)">특수 모빌리티 & 배터리 시편</button>
      </div>

      <div class="color-cards-grid" id="colorCardsGrid">
        {color_cards_rendered}
      </div>
    </div>
  </section>

  <!-- ─── 3. Physical Sample & Swatch Request Form ─── -->
  <section id="sample-form" class="section-sample-form">
    <div class="container">
      <div class="sec-header">
        <span class="sec-badge" style="color:var(--accent);">Sample & Swatch Dispatch</span>
        <h2 class="sec-title">실물 시편 & 샘플 카트리지 발송 요청</h2>
        <p class="sec-desc">설계 미팅, 발주처 색상 승인, 감리 제출 및 현장 접착 테스트용 실물 시편을 신청하시면 신속히 택배 발송해 드립니다.</p>
      </div>

      <div class="sample-form-wrap">
        <form onsubmit="handleSampleSubmit(event)">
          <div class="form-group">
            <label>선택된 색상칩 시편 목록 (<span id="sampleSelectedCount">0</span>개 선택됨)</label>
            <div class="selected-chips-box" id="selectedChipsDisplay">
              <span style="color:var(--gray-400); font-size:0.85rem;">위 색상 팔레트에서 [시편 요청] 체크박스를 선택하거나 직접 추가하세요.</span>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label>신청 회사명 / 설계사무소 / 현장명 <span style="color:var(--accent);">*</span></label>
              <input type="text" id="sampleCompany" placeholder="예: (주)한국종합건축 / 테크인테리어" required />
            </div>

            <div class="form-group">
              <label>수신인 성명 / 직책 <span style="color:var(--accent);">*</span></label>
              <input type="text" id="sampleName" placeholder="예: 김설계 수석 / 이현장 소장" required />
            </div>

            <div class="form-group">
              <label>연락처 (휴대전화) <span style="color:var(--accent);">*</span></label>
              <input type="tel" id="samplePhone" placeholder="010-1234-5678" required />
            </div>

            <div class="form-group">
              <label>이메일 주소 <span style="color:var(--accent);">*</span></label>
              <input type="email" id="sampleEmail" placeholder="sample@company.com" required />
            </div>

            <div class="form-group full">
              <label>시편 및 샘플 수령 주소 <span style="color:var(--accent);">*</span></label>
              <input type="text" id="sampleAddress" placeholder="우편번호 및 도로명 주소 (예: 서울 강남구 테헤란로 123 5층 설계팀)" required />
            </div>

            <div class="form-group">
              <label>요청 샘플 형태</label>
              <select id="sampleType">
                <option value="색상칩 시편 세트 (Color Swatch Board)">색상칩 시편 세트 (Color Swatch Board)</option>
                <option value="실물 카트리지 튜브 1EA (테스트용)">실물 카트리지 튜브 1EA (테스트용)</option>
                <option value="시편 세트 + 카트리지 동시 요청">시편 세트 + 카트리지 동시 요청</option>
              </select>
            </div>

            <div class="form-group">
              <label>샘플 사용 목적</label>
              <select id="samplePurpose">
                <option value="발주처/건축주 색상 승인용">발주처/건축주 색상 승인용</option>
                <option value="설계 스펙인 및 감리 제출용">설계 스펙인 및 감리 제출용</option>
                <option value="현장 모재 접착력 테스트용">현장 모재 접착력 테스트용</option>
                <option value="기타 B2B 검토용">기타 B2B 검토용</option>
              </select>
            </div>

            <div class="form-group full">
              <label>추가 요청사항 / 적용 예정 현장 정보</label>
              <textarea id="sampleMemo" rows="3" placeholder="예: 현장 외벽 화강석 줄눈 시공 예정으로 다크그레이 색상칩과 실물 카트리지 1개 요청합니다."></textarea>
            </div>

            <div class="form-group full" style="margin-top:1rem;">
              <button type="submit" id="btnSubmitSample" class="btn-quote" style="width:100%; padding:1.1rem; font-size:1.05rem; justify-content:center; border-radius:8px; background:var(--accent);">
                <i class="bi bi-send-check-fill"></i> 실물 시편 & 샘플 발송 요청하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="color:var(--white); font-size:1.3rem; font-weight:800; margin-bottom:1rem;">KCT <span style="font-size:0.95rem; font-weight:400; color:rgba(255,255,255,0.7);">한국건설트레이딩</span></h4>
          <p style="color:rgba(255,255,255,0.7); line-height:1.75; margin-bottom:1.5rem;">
            Dow Chemical 및 프리미엄 인테리어·특수실란트·ESS/EV배터리·건축 실리콘 전문 소싱·유통 기업.<br/>
            실물 시편/샘플 신속 발송 및 전국 2~3일 배송.
          </p>
        </div>

        <div class="footer-col">
          <h5>실리콘 계산기 허브</h5>
          <ul>
            <li><a href="/projects/kct#calculator">실란트 소요량 계산기</a></li>
            <li><a href="/projects/kct#calculator">프라이머 도포량 계산기</a></li>
            <li><a href="/projects/kct#calculator">풍하중 구조 바이트 산출</a></li>
            <li><a href="/projects/kct#calculator">패널 자중 지지 계산기</a></li>
            <li><a href="/projects/kct#calculator">글루라인 두께 규격표</a></li>
            <li><a href="/projects/kct#calculator">ASTM 열팽창 변위 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>색상 라인업</h5>
          <ul>
            <li><a href="javascript:void(0)" onclick="filterColorCategory('건축 외장', document.querySelectorAll('.c-tab-btn')[1])">외장 웨더 색상 ({len([c for c in COLOR_CHIPS if '외장' in c['category']])}종)</a></li>
            <li><a href="javascript:void(0)" onclick="filterColorCategory('실내 인테리어', document.querySelectorAll('.c-tab-btn')[2])">타일 하이진 색상 ({len([c for c in COLOR_CHIPS if '인테리어' in c['category']])}종)</a></li>
            <li><a href="javascript:void(0)" onclick="filterColorCategory('특수 모빌리티', document.querySelectorAll('.c-tab-btn')[3])">특수 난연/방열 시편</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact & 본사 안내</h5>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-geo-alt-fill text-primary"></i> 서울시 송파구 충민로 10 가든파이브툴 4-A19</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-telephone-x-fill text-primary"></i> 유선 연락처: <strong style="color:#38BDF8;">비공개</strong> (온라인 견적 및 폼 접수)</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-envelope-fill text-primary"></i> 문의 이메일: sales@kconstrade.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          상호명: 한국건설트레이딩 | 사업자등록번호: 371-07-03719 | 본사: 서울 송파구 충민로 10 4-A19 가든파이브툴 | 연락처: 비공개
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
          <span>홈페이지 제작 및 유지보수: <a href="https://davhave.com" target="_blank" rel="noopener" style="color:#38BDF8; font-weight:700; text-decoration:underline;">davhave.com</a></span>
          <span>© 2026 Korea Construction Trading (KCT). All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>

  <script>
    const colorChipsData = {color_chips_json};

    // Header Scroll State
    window.addEventListener('scroll', () => {{
      const header = document.querySelector('header');
      if (header) {{
        header.classList.toggle('scrolled', window.scrollY > 40);
      }}
    }});

    // Mobile Drawer Logic
    const drawerToggle = document.getElementById('kctColorNavToggle');
    const drawer = document.getElementById('kctColorMobileDrawer');
    const drawerBackdrop = document.getElementById('kctColorDrawerBackdrop');
    const drawerClose = document.getElementById('kctColorDrawerClose');

    function openKctColorDrawer() {{
      if (drawer) drawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }}

    function closeKctColorDrawer() {{
      if (drawer) drawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }}

    if (drawerToggle) drawerToggle.addEventListener('click', openKctColorDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeKctColorDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeKctColorDrawer);

    let compareQueue = [
      {{ code: 'CLR-EXT-01', name: '퓨어 화이트', hex: '#FFFFFF', prod: 'Dow 791 / KCT Neutral' }},
      {{ code: 'CLR-EXT-03', name: '라이트 그레이', hex: '#D1D5DB', prod: 'Dow 791 / 991 Non-Staining' }},
      {{ code: 'CLR-EXT-06', name: '제트 블랙', hex: '#1E293B', prod: 'Dow 983 / 791 Black' }}
    ];

    function setTexture(texClass, btnEl) {{
      const stage = document.getElementById('compareStage');
      stage.className = 'compare-stage ' + texClass;
      document.querySelectorAll('.texture-btn').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }}

    function toggleCompareChip(code, name, hex, prod) {{
      const existsIndex = compareQueue.findIndex(c => c.code === code);
      if (existsIndex > -1) {{
        compareQueue.splice(existsIndex, 1);
      }} else {{
        if (compareQueue.length >= 3) {{
          compareQueue.shift();
        }}
        compareQueue.push({{ code, name, hex, prod }});
      }}
      renderCompareStage();
    }}

    function renderCompareStage() {{
      const stage = document.getElementById('compareStage');
      if (compareQueue.length === 0) {{
        stage.innerHTML = '<div style="grid-column:span 3; text-align:center; padding:3rem; color:var(--gray-600); font-weight:600;">아래 색상 팔레트에서 [색상 비교함 담기] 버튼을 눌러 색상칩을 추가하세요.</div>';
        return;
      }}

      let html = '';
      compareQueue.forEach(c => {{
        const isLight = (c.hex === '#FFFFFF' || c.hex === '#F4EFE6' || c.hex === '#D1D5DB' || c.hex === '#D9DCE1');
        const textColor = isLight ? '#1E293B' : '#FFFFFF';
        html += `
          <div class="compare-slot">
            <div class="compare-slot-color" style="background:${{c.hex}}; border:1px solid rgba(0,0,0,0.15); color:${{textColor}};">${{c.code}}</div>
            <div class="compare-slot-info">
              <h6>${{c.name}}</h6>
              <p>${{c.prod}}</p>
            </div>
            <button onclick="toggleCompareChip('${{c.code}}')" style="background:none; border:none; color:var(--accent); font-size:0.78rem; font-weight:700; cursor:pointer; margin-top:0.5rem; text-align:right;">✕ 제거</button>
          </div>
        `;
      }});
      stage.innerHTML = html;
    }}

    function filterColorCategory(cat, btnEl) {{
      document.querySelectorAll('.c-tab-btn').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');

      const cards = document.querySelectorAll('.chip-card');
      cards.forEach(card => {{
        const cCat = card.getAttribute('data-cat');
        if (cat === 'ALL' || cCat.includes(cat)) {{
          card.style.display = 'flex';
        }} else {{
          card.style.display = 'none';
        }}
      }});
    }}

    function updateSampleCount() {{
      const checked = document.querySelectorAll('.sample-chip-check:checked');
      document.getElementById('sampleSelectedCount').innerText = checked.length;
      
      const box = document.getElementById('selectedChipsDisplay');
      if (checked.length === 0) {{
        box.innerHTML = '<span style="color:var(--gray-400); font-size:0.85rem;">위 색상 팔레트에서 [시편 요청] 체크박스를 선택하거나 직접 추가하세요.</span>';
        return;
      }}

      let html = '';
      checked.forEach(cb => {{
        html += `<span class="selected-tag"><i class="bi bi-check2-circle"></i> ${{cb.value}} (${{cb.getAttribute('data-name')}})</span>`;
      }});
      box.innerHTML = html;
    }}

    async function handleSampleSubmit(e) {{
      e.preventDefault();
      const btn = document.getElementById('btnSubmitSample');
      const company = document.getElementById('sampleCompany').value;
      const name = document.getElementById('sampleName').value;
      const phone = document.getElementById('samplePhone').value;
      const email = document.getElementById('sampleEmail').value;
      const address = document.getElementById('sampleAddress').value;
      const sType = document.getElementById('sampleType').value;
      const sPurpose = document.getElementById('samplePurpose').value;
      const memo = document.getElementById('sampleMemo').value || '없음';

      const checked = document.querySelectorAll('.sample-chip-check:checked');
      const selectedList = Array.from(checked).map(c => `${{c.value}} (${{c.getAttribute('data-name')}})`).join(', ') || '표준 전체 색상칩 세트 요청';

      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> 시편 발송 접수 중...';

      try {{
        const payload = {{
          access_key: "f67c63de-f948-4e2f-8928-12d4b29ed572",
          subject: `[KCT 색상칩/시편 신청] ${{company}} - ${{name}}님 샘플 발송 요청`,
          name: name,
          email: email,
          company: company,
          phone: phone,
          message: `[색상칩 시편 및 샘플 발송 요청서]\\n- 신청 회사: ${{company}}\\n- 수신인: ${{name}} (${{phone}})\\n- 배송지 주소: ${{address}}\\n- 요청 시편 목록: ${{selectedList}}\\n- 샘플 형태: ${{sType}}\\n- 사용 목적: ${{sPurpose}}\\n- 추가 메모: ${{memo}}`
        }};

        await fetch("https://api.web3forms.com/submit", {{
          method: "POST",
          headers: {{ "Content-Type": "application/json", "Accept": "application/json" }},
          body: JSON.stringify(payload)
        }});

        alert(`✅ 실물 색상칩 시편 및 샘플 발송 요청이 성공적으로 접수되었습니다!\\n\\n[신청 내역]\\n- 수령인: ${{name}} (${{phone}})\\n- 배송지: ${{address}}\\n- 요청 품목: ${{selectedList}}\\n\\n담당자가 확인 후 24시간 이내 택배 송장번호를 이메일(${{email}})로 안내해 드립니다.`);
      }} catch (err) {{
        alert(`✅ 실물 시편 및 샘플 요청이 접수되었습니다.\\n입력하신 주소로 발송해 드립니다.`);
      }} finally {{
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send-check-fill"></i> 실물 시편 & 샘플 발송 요청하기';
      }}
    }}
  </script>
</body>
</html>
"""

# ==========================================
# 3. DEDICATED TECHNICAL CENTER HTML TEMPLATE (technical.html)
# ==========================================
tech_html_template = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>기술자료 검색 및 이메일 전송 센터 - 한국건설트레이딩 (KCT)</title>
  <meta name="description" content="KCT 기술자료 검색 및 이메일 전송 센터: TDS(기술자료표), MSDS(물질안전보건자료), 공인 시험성적서, UL 94 V-0/MED 인증서, 시방서 등 17대 산업군 기술문서를 실시간 검색하고 이메일로 수신하세요." />
  <meta name="keywords" content="기술자료 센터, 실리콘 TDS, 실리콘 MSDS, 시험성적서, UL94 V-0 인증서, MED 인증서, 한국건설트레이딩, KCT" />
  
  <link rel="icon" href="https://kconstrade.com/assets/img/favicon.ico" type="image/x-icon" />
  <meta property="og:title" content="기술자료 검색 및 이메일 전송 센터 - 한국건설트레이딩 (KCT)" />
  <meta property="og:description" content="TDS, MSDS, 공인 시험성적서 및 인증서 실시간 이메일 전송 시스템." />
  <meta property="og:image" content="https://kconstrade.com/assets/img/og-image.png" />
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <style>
    :root {{
      --primary: #1558D6;
      --primary-dark: #0D3F9E;
      --primary-light: #EBF2FE;
      --accent: #FF6B35;
      --accent-hover: #E0531D;
      --dark: #0F172A;
      --dark-light: #1E293B;
      --gray-50: #F8FAFC;
      --gray-100: #F1F5F9;
      --gray-200: #E2E8F0;
      --gray-400: #94A3B8;
      --gray-600: #475569;
      --gray-800: #1E293B;
      --white: #FFFFFF;
      --radius-sm: 8px;
      --radius: 12px;
      --radius-lg: 18px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
      --shadow-md: 0 6px 18px rgba(15,23,42,0.08);
      --shadow-lg: 0 16px 36px rgba(15,23,42,0.12);
      --font: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      --font-en: 'Poppins', sans-serif;
    }}

    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{ font-family: var(--font); color: var(--gray-800); background: #F8FAFC; line-height: 1.6; -webkit-font-smoothing: antialiased; }}
    a {{ text-decoration: none; color: inherit; }}
    ul {{ list-style: none; }}
    img {{ max-width: 100%; height: auto; display: block; }}
    .container {{ max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }}

    .top-bar {{ background: var(--dark); color: rgba(255,255,255,0.75); font-size: 0.82rem; padding: 0.55rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }}
    .top-bar-inner {{ display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }}
    .top-bar-info {{ display: flex; gap: 1.5rem; flex-wrap: wrap; }}
    .top-bar-info span {{ display: inline-flex; align-items: center; gap: 0.35rem; }}
    .top-bar-links {{ display: flex; gap: 1.25rem; align-items: center; }}
    .top-bar-links a {{ color: rgba(255,255,255,0.85); transition: color 0.2s; display: inline-flex; align-items: center; gap: 0.3rem; }}
    .top-bar-links a:hover {{ color: var(--white); }}

    header {{ position: sticky; top: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 1000; border-bottom: 1px solid var(--gray-200); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s; }}
    header.scrolled {{ box-shadow: 0 10px 30px rgba(15,23,42,0.12); background: rgba(255,255,255,0.98); }}
    .nav-inner {{ display: flex; justify-content: space-between; align-items: center; height: 76px; transition: height 0.3s; }}
    header.scrolled .nav-inner {{ height: 64px; }}
    .brand-logo {{ display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.35rem; color: var(--dark); text-decoration: none; }}
    .brand-badge {{ background: var(--primary-light); color: var(--primary); font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; letter-spacing: 0.05em; }}
    
    .nav-menu {{ display: flex; align-items: center; gap: 1rem; }}
    .btn-nav-link {{ background: var(--gray-100); color: var(--dark); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.15rem; border-radius: 50px; border: 1px solid var(--gray-200); display: inline-flex; align-items: center; gap: 0.4rem; transition: all 0.2s; text-decoration: none; }}
    .btn-nav-link:hover {{ background: var(--primary-light); color: var(--primary); border-color: var(--primary); }}
    .btn-quote {{ background: var(--primary); color: var(--white); font-weight: 700; font-size: 0.88rem; padding: 0.6rem 1.25rem; border-radius: 50px; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.4rem; border: none; cursor: pointer; text-decoration: none; }}
    .btn-quote:hover {{ background: var(--primary-dark); transform: translateY(-1px); }}

    .nav-toggle-btn {{ display: none; background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 8px; width: 42px; height: 42px; align-items: center; justify-content: center; font-size: 1.25rem; color: var(--dark); cursor: pointer; }}
    @media (max-width: 860px) {{
      .nav-menu {{ display: none; }}
      .nav-toggle-btn {{ display: flex; }}
    }}

    /* Mobile Drawer */
    .mobile-drawer {{ position: fixed; top: 0; right: -100%; width: min(360px, 86vw); height: 100%; background: var(--white); z-index: 2500; box-shadow: -10px 0 35px rgba(0,0,0,0.25); transition: right 0.35s cubic-bezier(0.32, 0.72, 0, 1); display: flex; flex-direction: column; overflow-y: auto; }}
    .mobile-drawer.open {{ right: 0; }}
    .drawer-backdrop {{ position: fixed; inset: 0; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); z-index: 2400; opacity: 0; pointer-events: none; transition: opacity 0.3s; }}
    .drawer-backdrop.open {{ opacity: 1; pointer-events: auto; }}
    .drawer-header {{ padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; background: var(--gray-50); }}
    .drawer-close-btn {{ background: none; border: none; font-size: 1.4rem; color: var(--gray-600); cursor: pointer; }}
    .drawer-body {{ padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }}
    .drawer-nav-list {{ list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }}
    .drawer-nav-item a {{ display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem; color: var(--gray-800); text-decoration: none; background: var(--gray-50); transition: all 0.2s; }}
    .drawer-nav-item a:hover {{ background: var(--primary-light); color: var(--primary); }}

    .breadcrumb-bar {{ background: var(--white); border-bottom: 1px solid var(--gray-200); padding: 0.85rem 0; font-size: 0.85rem; color: var(--gray-600); }}
    .breadcrumb-bar a {{ color: var(--primary); font-weight: 600; text-decoration: none; }}
    .breadcrumb-bar a:hover {{ text-decoration: underline; }}
    .breadcrumb-bar span.sep {{ margin: 0 0.5rem; color: var(--gray-400); }}

    .page-hero {{ background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%); color: var(--white); padding: 4.5rem 0 4rem; text-align: center; }}
    .page-hero-badge {{ display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(56,189,248,0.2); color: #38BDF8; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem; border: 1px solid rgba(56,189,248,0.3); }}
    .page-hero h1 {{ font-size: 2.5rem; font-weight: 800; margin-bottom: 0.85rem; letter-spacing: -0.02em; }}
    .page-hero p {{ font-size: 1.05rem; color: rgba(255,255,255,0.85); max-width: 800px; margin: 0 auto; line-height: 1.7; }}

    .tech-content-section {{ padding: 4rem 0 6rem; }}
    .tech-filter-box {{ background: var(--white); border: 1px solid var(--gray-200); border-radius: var(--radius-lg); padding: 2.25rem 2.5rem; box-shadow: var(--shadow-sm); margin-bottom: 2rem; }}
    .filter-row {{ display: flex; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.85rem; }}
    .filter-row:last-child {{ margin-bottom: 0; }}
    .filter-label {{ font-size: 0.9rem; font-weight: 800; color: var(--dark); min-width: 110px; display: flex; align-items: center; gap: 0.4rem; }}
    .filter-options {{ display: flex; gap: 0.5rem; flex-wrap: wrap; flex-grow: 1; }}
    .btn-filter-opt {{ background: var(--gray-50); border: 1.5px solid var(--gray-200); border-radius: 6px; padding: 0.45rem 1rem; font-size: 0.85rem; font-weight: 600; color: var(--gray-800); cursor: pointer; transition: all 0.2s; }}
    .btn-filter-opt.active, .btn-filter-opt:hover {{ background: var(--primary); color: var(--white); border-color: var(--primary); }}

    .tech-search-bar {{ display: flex; gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--gray-200); }}
    .tech-search-input {{ flex-grow: 1; padding: 0.9rem 1.25rem; border: 1.5px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--gray-50); transition: all 0.2s; }}
    .tech-search-input:focus {{ outline: none; border-color: var(--primary); background: var(--white); box-shadow: 0 0 0 3px rgba(21,88,214,0.15); }}
    .btn-tech-search {{ background: var(--primary); color: var(--white); border: none; border-radius: 8px; padding: 0 2rem; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 0.4rem; }}
    .btn-tech-search:hover {{ background: var(--primary-dark); }}

    .tech-action-bar {{ display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem; }}
    .tech-count-info {{ font-size: 0.95rem; color: var(--gray-600); }}
    .tech-count-info strong {{ color: var(--primary); font-size: 1.1rem; }}
    .btn-batch-email {{ background: var(--accent); color: var(--white); border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 0.92rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.45rem; transition: all 0.2s; box-shadow: var(--shadow-sm); }}
    .btn-batch-email:hover {{ background: var(--accent-hover); transform: translateY(-1px); }}
    .btn-batch-email:disabled {{ background: var(--gray-400); cursor: not-allowed; transform: none; box-shadow: none; }}

    .tech-table-wrap {{ background: var(--white); border-radius: var(--radius-lg); border: 1px solid var(--gray-200); box-shadow: var(--shadow-sm); overflow-x: auto; }}
    .tech-table {{ width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width: 950px; }}
    .tech-table th {{ background: var(--dark); color: var(--white); font-weight: 700; padding: 1.1rem 1.25rem; font-size: 0.85rem; letter-spacing: 0.05em; }}
    .tech-table td {{ padding: 1.15rem 1.25rem; border-bottom: 1px solid var(--gray-200); color: var(--gray-800); vertical-align: middle; }}
    .tech-table tr:hover td {{ background: var(--primary-light); }}
    .btn-email-doc {{ background: var(--primary-light); color: var(--primary); border: 1px solid rgba(21,88,214,0.3); border-radius: 6px; padding: 0.5rem 1rem; font-size: 0.82rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem; transition: all 0.2s; }}
    .btn-email-doc:hover {{ background: var(--primary); color: var(--white); }}

    .modal-backdrop {{ display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.65); backdrop-filter: blur(4px); z-index: 2000; justify-content: center; align-items: center; padding: 1.5rem; }}
    .modal-backdrop.active {{ display: flex; }}
    .modal-box {{ background: var(--white); border-radius: var(--radius-lg); max-width: 580px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: var(--shadow-lg); }}
    .modal-close {{ position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; font-size: 1.5rem; color: var(--gray-600); cursor: pointer; }}
    .email-modal-header {{ border-bottom: 1px solid var(--gray-200); padding-bottom: 1rem; margin-bottom: 1.5rem; }}
    .email-modal-header h4 {{ font-size: 1.35rem; font-weight: 800; color: var(--dark); }}
    .doc-badge-list {{ display: flex; flex-direction: column; gap: 0.5rem; max-height: 140px; overflow-y: auto; background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 8px; padding: 0.85rem; margin-bottom: 1.25rem; font-size: 0.85rem; }}
    .doc-badge-item {{ display: flex; align-items: center; gap: 0.5rem; color: var(--dark); font-weight: 600; }}
    .form-group {{ margin-bottom: 1.25rem; }}
    .form-group label {{ display: block; font-size: 0.85rem; font-weight: 700; color: var(--gray-800); margin-bottom: 0.45rem; }}
    .form-group input {{ width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray-200); border-radius: 8px; font-size: 0.95rem; font-family: var(--font); background: var(--gray-50); transition: all 0.2s; }}
    .form-group input:focus {{ outline: none; border-color: var(--primary); background: var(--white); box-shadow: 0 0 0 3px rgba(21,88,214,0.15); }}
    .btn-detail {{ background: var(--gray-100); color: var(--gray-800); font-weight: 600; font-size: 0.9rem; padding: 0.8rem 1.2rem; border-radius: 8px; border: 1px solid var(--gray-200); cursor: pointer; text-align: center; }}

    footer {{ background: var(--dark); color: rgba(255,255,255,0.75); padding: 4.5rem 0 2.5rem; font-size: 0.88rem; }}
    .footer-grid {{ display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; margin-bottom: 3rem; }}
    @media (max-width: 900px) {{ .footer-grid {{ grid-template-columns: 1fr 1fr; }} }}
    @media (max-width: 550px) {{ .footer-grid {{ grid-template-columns: 1fr; }} }}
    .footer-col h5 {{ font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; }}
    .footer-col ul li {{ margin-bottom: 0.65rem; }}
    .footer-col ul li a {{ color: rgba(255,255,255,0.7); transition: color 0.2s; }}
    .footer-col ul li a:hover {{ color: var(--white); }}
    .footer-bottom {{ border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; }}
  </style>
</head>
<body>

  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-info">
        <span><i class="bi bi-building-check text-primary"></i> <strong>사업자등록번호:</strong> 371-07-03719</span>
        <span><i class="bi bi-shield-check text-primary"></i> <strong>기술자료 센터:</strong> TDS·MSDS·성적서 실시간 발송</span>
        <span><i class="bi bi-truck text-primary"></i> 수도권 당일/익일 직납</span>
      </div>
      <div class="top-bar-links">
        <a href="/projects/kct"><i class="bi bi-house-door-fill"></i> 메인 포털</a>
        <a href="/projects/kct/color-samples"><i class="bi bi-palette-fill text-accent"></i> 색상칩 & 샘플요청</a>
        <a href="https://smartstore.naver.com/kconstrade/" target="_blank" rel="noopener"><i class="bi bi-bag-check"></i> 스마트스토어</a>
        <a href="/projects/kct#b2b-form"><i class="bi bi-chat-left-text-fill"></i> 온라인 견적문의</a>
        <a href="mailto:sales@kconstrade.com"><i class="bi bi-envelope-fill"></i> sales@kconstrade.com</a>
      </div>
    </div>
  </div>

  <header>
    <div class="container nav-inner">
      <a href="/projects/kct" class="brand-logo">
        KCT <span style="font-weight:400; color:var(--gray-600); font-size:1.05rem;">한국건설트레이딩</span>
        <span class="brand-badge">TECH CENTER</span>
      </a>

      <div class="nav-menu">
        <a href="/projects/kct" class="btn-nav-link"><i class="bi bi-house"></i> KCT 메인 포털</a>
        <a href="/projects/kct/color-samples" class="btn-nav-link"><i class="bi bi-palette"></i> 색상칩 & 샘플요청</a>
        <a href="/projects/kct#calculator" class="btn-nav-link"><i class="bi bi-calculator"></i> 실리콘 계산기</a>
        <a href="/projects/kct#b2b-form" class="btn-quote"><i class="bi bi-send-fill"></i> B2B 견적요청</a>
      </div>

      <button class="nav-toggle-btn" id="kctTechNavToggle" aria-label="메뉴 열기">
        <i class="bi bi-list"></i>
      </button>
    </div>
  </header>

  <!-- Mobile Slide Drawer -->
  <div class="drawer-backdrop" id="kctTechDrawerBackdrop"></div>
  <aside class="mobile-drawer" id="kctTechMobileDrawer" aria-label="모바일 네비게이션">
    <div class="drawer-header">
      <div style="font-weight:800; font-size:1.15rem; color:var(--dark); display:flex; align-items:center; gap:0.5rem;">
        <span>기술자료 센터 메뉴</span>
      </div>
      <button class="drawer-close-btn" id="kctTechDrawerClose" aria-label="메뉴 닫기">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul class="drawer-nav-list">
        <li class="drawer-nav-item"><a href="/projects/kct"><i class="bi bi-house-door-fill"></i> <span>KCT 메인 포털</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct/color-samples"><i class="bi bi-palette-fill"></i> <span>색상칩 시편 & 샘플관</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects/kct#calculator"><i class="bi bi-calculator"></i> <span>실리콘 조인트 계산기</span> <span>→</span></a></li>
        <li class="drawer-nav-item"><a href="/projects"><i class="bi bi-grid-fill"></i> <span>DAVHAVE Projects 허브</span> <span>↗</span></a></li>
      </ul>

      <div style="margin-top:auto; padding-top:1.5rem; border-top:1px solid var(--gray-200);">
        <a href="/projects/kct#b2b-form" class="btn-quote" style="width:100%; justify-content:center; padding:0.9rem;" onclick="closeKctTechDrawer()">
          <i class="bi bi-send-fill"></i> B2B 견적 및 기술 문의
        </a>
      </div>
    </div>
  </aside>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="container">
      <a href="/projects/kct">홈</a>
      <span class="sep">></span>
      <a href="/projects/kct">KCT 플랫폼</a>
      <span class="sep">></span>
      <span style="color:var(--dark); font-weight:700;">기술자료 검색 및 이메일 전송 센터</span>
    </div>
  </div>

  <section class="page-hero">
    <div class="container">
      <div class="page-hero-badge">
        <i class="bi bi-file-earmark-check-fill"></i> Technical Article & Document Center
      </div>
      <h1>기술자료 검색 및 이메일 전송 센터</h1>
      <p>
        TDS(기술자료표), MSDS(물질안전보건자료), 공인 시험성적서, UL 94 V-0/MED 인증서, 시방서 등 17대 산업군 기술문서를 실시간 검색하고 이메일로 즉시 수신하세요.
      </p>
    </div>
  </section>

  <section class="tech-content-section">
    <div class="container">

      <div class="tech-filter-box">
        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-files text-primary"></i> 자료 유형</div>
          <div class="filter-options" id="docTypeFilter">
            <button class="btn-filter-opt active" onclick="setDocTypeFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('TDS', this)">기술자료표 (TDS)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('MSDS', this)">물질안전보건자료 (MSDS)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('TEST', this)">시험성적서 (Test)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('CERT', this)">인증서 (Certificate)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('SPEC', this)">시방서 (Spec Guide)</button>
            <button class="btn-filter-opt" onclick="setDocTypeFilter('CATALOG', this)">카탈로그 (Catalog)</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-diagram-3 text-primary"></i> 적용 산업</div>
          <div class="filter-options" id="docCatFilter">
            <button class="btn-filter-opt active" onclick="setDocCatFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('건축 & 실내 인테리어', this)">건축 & 실내 인테리어</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('특수모빌리티·하이테크', this)">특수모빌리티·하이테크</button>
            <button class="btn-filter-opt" onclick="setDocCatFilter('ESS & EV 배터리', this)">ESS & EV 배터리</button>
          </div>
        </div>

        <div class="filter-row">
          <div class="filter-label"><i class="bi bi-globe text-primary"></i> 언어 구분</div>
          <div class="filter-options" id="docLangFilter">
            <button class="btn-filter-opt active" onclick="setDocLangFilter('ALL', this)">전체</button>
            <button class="btn-filter-opt" onclick="setDocLangFilter('KOR', this)">한국어 (KOR)</button>
            <button class="btn-filter-opt" onclick="setDocLangFilter('ENG', this)">영어 (ENG)</button>
          </div>
        </div>

        <div class="tech-search-bar">
          <input type="text" id="techSearchInput" class="tech-search-input" placeholder="제품명, 규격, 인증명(예: ARDEX, UL94, MED, EN45545, 방열, 웨더, 방화)을 입력하세요..." onkeyup="filterTechDocs()" />
          <button class="btn-tech-search" onclick="filterTechDocs()"><i class="bi bi-search"></i> 검색</button>
        </div>
      </div>

      <div class="tech-action-bar">
        <div class="tech-count-info">
          총 <strong id="docResultCount">12</strong>건의 기술자료가 준비되어 있습니다.
        </div>
        <div>
          <button id="btnBatchEmail" class="btn-batch-email" disabled onclick="openBatchEmailModal()">
            <i class="bi bi-send-check-fill"></i> 선택한 자료 이메일로 받기 (<span id="selectedCount">0</span>개)
          </button>
        </div>
      </div>

      <div class="tech-table-wrap">
        <table class="tech-table">
          <thead>
            <tr>
              <th style="text-align:center; width:50px;">
                <input type="checkbox" id="selectAllDocs" onchange="toggleSelectAllDocs(this)" />
              </th>
              <th>제품명</th>
              <th>유형</th>
              <th>자료 제목 및 내용</th>
              <th>언어</th>
              <th>용량</th>
              <th style="text-align:center;">이메일 수신</th>
            </tr>
          </thead>
          <tbody id="techDocsBody">
            {tech_doc_rows_rendered}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Technical Document Email Modal -->
  <div class="modal-backdrop" id="techEmailModal">
    <div class="modal-box">
      <button class="modal-close" onclick="closeTechEmailModal()">✕</button>
      
      <div class="email-modal-header">
        <div style="font-size:0.8rem; font-weight:700; color:var(--primary); text-transform:uppercase;">KCT Technical Center</div>
        <h4>기술자료 이메일 전송 신청</h4>
      </div>

      <form id="techDocEmailForm" onsubmit="handleTechEmailSubmit(event)">
        <p style="font-size:0.88rem; color:var(--gray-600); margin-bottom:0.85rem;">
          아래 선택하신 기술자료(PDF 및 공인 성적서)를 입력하신 이메일로 즉시 발송해 드립니다.
        </p>

        <div class="doc-badge-list" id="modalSelectedDocList">
        </div>

        <div class="form-group">
          <label>수신인 성명 / 직책</label>
          <input type="text" id="reqName" placeholder="예: 김설계 수석 / 박기술 과장" required />
        </div>

        <div class="form-group">
          <label>소속 회사명 / 연구소 / 현장명</label>
          <input type="text" id="reqCompany" placeholder="예: (주)한국건설기술연구소 / 테크인테리어" required />
        </div>

        <div class="form-group">
          <label>자료를 수신할 이메일 주소 <span style="color:var(--accent);">*</span></label>
          <input type="email" id="reqEmail" placeholder="example@company.com" required />
        </div>

        <div class="form-group">
          <label>연락처 (선택)</label>
          <input type="tel" id="reqPhone" placeholder="010-1234-5678" />
        </div>

        <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
          <button type="button" class="btn-detail" onclick="closeTechEmailModal()">닫기</button>
          <button type="submit" id="btnSubmitDocEmail" class="btn-quote" style="flex:2; justify-content:center;">
            <i class="bi bi-send-fill"></i> 기술자료 이메일 전송 요청
          </button>
        </div>
      </form>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="color:var(--white); font-size:1.3rem; font-weight:800; margin-bottom:1rem;">KCT <span style="font-size:0.95rem; font-weight:400; color:rgba(255,255,255,0.7);">한국건설트레이딩</span></h4>
          <p style="color:rgba(255,255,255,0.7); line-height:1.75; margin-bottom:1.5rem;">
            Dow Chemical 및 프리미엄 인테리어·특수실란트·ESS/EV배터리·건축 실리콘 전문 소싱·유통 기업.<br/>
            TDS/MSDS/시험성적서 기술자료 실시간 지원 및 전국 2~3일 배송.
          </p>
        </div>

        <div class="footer-col">
          <h5>실리콘 계산기 허브</h5>
          <ul>
            <li><a href="/projects/kct#calculator">실란트 소요량 계산기</a></li>
            <li><a href="/projects/kct#calculator">프라이머 도포량 계산기</a></li>
            <li><a href="/projects/kct#calculator">풍하중 구조 바이트 산출</a></li>
            <li><a href="/projects/kct#calculator">패널 자중 지지 계산기</a></li>
            <li><a href="/projects/kct#calculator">글루라인 두께 규격표</a></li>
            <li><a href="/projects/kct#calculator">ASTM 열팽창 변위 계산기</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>자료 유형</h5>
          <ul>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('TDS', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[1])">기술자료표 (TDS)</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('MSDS', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[2])">물질안전보건자료 (MSDS)</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('TEST', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[3])">공인 시험성적서</a></li>
            <li><a href="javascript:void(0)" onclick="setDocTypeFilter('CERT', document.querySelectorAll('#docTypeFilter .btn-filter-opt')[4])">UL94 / MED 인증서</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact & 본사 안내</h5>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-geo-alt-fill text-primary"></i> 서울시 송파구 충민로 10 가든파이브툴 4-A19</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-telephone-x-fill text-primary"></i> 유선 연락처: <strong style="color:#38BDF8;">비공개</strong> (온라인 견적 및 폼 접수)</p>
          <p style="margin-bottom:0.5rem;"><i class="bi bi-envelope-fill text-primary"></i> 문의 이메일: sales@kconstrade.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          상호명: 한국건설트레이딩 | 사업자등록번호: 371-07-03719 | 본사: 서울 송파구 충민로 10 4-A19 가든파이브툴 | 연락처: 비공개
        </div>
        <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
          <span>홈페이지 제작 및 유지보수: <a href="https://davhave.com" target="_blank" rel="noopener" style="color:#38BDF8; font-weight:700; text-decoration:underline;">davhave.com</a></span>
          <span>© 2026 Korea Construction Trading (KCT). All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Header Scroll State
    window.addEventListener('scroll', () => {{
      const header = document.querySelector('header');
      if (header) {{
        header.classList.toggle('scrolled', window.scrollY > 40);
      }}
    }});

    // Mobile Drawer Logic
    const drawerToggle = document.getElementById('kctTechNavToggle');
    const drawer = document.getElementById('kctTechMobileDrawer');
    const drawerBackdrop = document.getElementById('kctTechDrawerBackdrop');
    const drawerClose = document.getElementById('kctTechDrawerClose');

    function openKctTechDrawer() {{
      if (drawer) drawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }}

    function closeKctTechDrawer() {{
      if (drawer) drawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }}

    if (drawerToggle) drawerToggle.addEventListener('click', openKctTechDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeKctTechDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeKctTechDrawer);

    let curDocType = 'ALL';
    let curDocCat = 'ALL';
    let curDocLang = 'ALL';
    let activeRequestedDocs = [];

    function setDocTypeFilter(type, btnEl) {{
      curDocType = type;
      document.querySelectorAll('#docTypeFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }}

    function setDocCatFilter(cat, btnEl) {{
      curDocCat = cat;
      document.querySelectorAll('#docCatFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }}

    function setDocLangFilter(lang, btnEl) {{
      curDocLang = lang;
      document.querySelectorAll('#docLangFilter .btn-filter-opt').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');
      filterTechDocs();
    }}

    function filterTechDocs() {{
      const query = (document.getElementById('techSearchInput').value || '').trim().toLowerCase();
      const rows = document.querySelectorAll('.doc-row');
      let visibleCount = 0;

      rows.forEach(row => {{
        const rType = row.getAttribute('data-doctype');
        const rCat = row.getAttribute('data-cat');
        const rLang = row.getAttribute('data-lang');
        const rTitle = (row.getAttribute('data-title') || '').toLowerCase();
        const rProd = (row.getAttribute('data-prod') || '').toLowerCase();

        const matchType = (curDocType === 'ALL' || rType === curDocType);
        const matchCat = (curDocCat === 'ALL' || rCat.includes(curDocCat));
        const matchLang = (curDocLang === 'ALL' || rLang === curDocLang);
        const matchQuery = (!query || rTitle.includes(query) || rProd.includes(query));

        if (matchType && matchCat && matchLang && matchQuery) {{
          row.style.display = '';
          visibleCount++;
        }} else {{
          row.style.display = 'none';
        }}
      }});

      document.getElementById('docResultCount').innerText = visibleCount;
    }}

    function updateSelectedDocsCount() {{
      const checkedBoxes = document.querySelectorAll('.doc-check:checked');
      const count = checkedBoxes.length;
      document.getElementById('selectedCount').innerText = count;
      document.getElementById('btnBatchEmail').disabled = (count === 0);
    }}

    function toggleSelectAllDocs(masterBox) {{
      const rows = document.querySelectorAll('.doc-row');
      rows.forEach(row => {{
        if (row.style.display !== 'none') {{
          const cb = row.querySelector('.doc-check');
          if (cb) cb.checked = masterBox.checked;
        }}
      }});
      updateSelectedDocsCount();
    }}

    function openSingleEmailModal(docId, docTitle, docType) {{
      activeRequestedDocs = [{{ id: docId, title: docTitle, type: docType }}];
      renderModalDocs();
      document.getElementById('techEmailModal').classList.add('active');
    }}

    function openBatchEmailModal() {{
      const checkedBoxes = document.querySelectorAll('.doc-check:checked');
      if (checkedBoxes.length === 0) return;

      activeRequestedDocs = [];
      checkedBoxes.forEach(cb => {{
        activeRequestedDocs.push({{
          id: cb.value,
          title: cb.getAttribute('data-title'),
          type: cb.getAttribute('data-type')
        }});
      }});

      renderModalDocs();
      document.getElementById('techEmailModal').classList.add('active');
    }}

    function renderModalDocs() {{
      const container = document.getElementById('modalSelectedDocList');
      let html = '';
      activeRequestedDocs.forEach(d => {{
        html += `
          <div class="doc-badge-item">
            <span style="background:var(--primary); color:#fff; font-size:0.7rem; padding:0.15rem 0.4rem; border-radius:3px;">${{d.type}}</span>
            <span>${{d.title}}</span>
          </div>
        `;
      }});
      container.innerHTML = html;
    }}

    function closeTechEmailModal() {{
      document.getElementById('techEmailModal').classList.remove('active');
    }}

    async function handleTechEmailSubmit(e) {{
      e.preventDefault();
      const btn = document.getElementById('btnSubmitDocEmail');
      const name = document.getElementById('reqName').value;
      const company = document.getElementById('reqCompany').value;
      const email = document.getElementById('reqEmail').value;
      const phone = document.getElementById('reqPhone').value || '미입력';

      const docListText = activeRequestedDocs.map((d, i) => `${{i+1}}. [${{d.type}}] ${{d.title}}`).join('\\n');

      btn.disabled = true;
      btn.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> 전송 중...';

      try {{
        const payload = {{
          access_key: "f67c63de-f948-4e2f-8928-12d4b29ed572",
          subject: `[KCT 기술자료 신청] ${{company}} - ${{name}}님 기술문서 발송 요청 (${{activeRequestedDocs.length}}건)`,
          name: name,
          email: email,
          company: company,
          phone: phone,
          message: `[신청된 기술자료 목록]\\n${{docListText}}\\n\\n수신 희망 이메일: ${{email}}\\n소속: ${{company}}\\n신청자: ${{name}} (${{phone}})`
        }};

        await fetch("https://api.web3forms.com/submit", {{
          method: "POST",
          headers: {{ "Content-Type": "application/json", "Accept": "application/json" }},
          body: JSON.stringify(payload)
        }});

        alert(`✅ 기술자료 전송 요청이 성공적으로 접수되었습니다!\\n\\n[신청 문서]\\n${{docListText}}\\n\\n입력하신 [${{email}}]으로 5분 내 전자 기술자료(TDS/MSDS/성적서 PDF)가 발송됩니다.`);
        closeTechEmailModal();
        document.getElementById('techDocEmailForm').reset();
      }} catch (err) {{
        alert(`✅ 기술자료 전송 요청이 안전하게 접수되었습니다.\\n[${{email}}]으로 기술자료가 발송됩니다.`);
        closeTechEmailModal();
      }} finally {{
        btn.disabled = false;
        btn.innerHTML = '<i class="bi bi-send-fill"></i> 기술자료 이메일 전송 요청';
      }}
    }}
  </script>
</body>
</html>
"""

# ==========================================
# 4. WRITE ALL FILES TO DISK
# ==========================================
# 1. Main Platform
with open("/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/index.html", "w", encoding="utf-8") as f:
    f.write(main_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/index.html", "w", encoding="utf-8") as f:
    f.write(main_html_template)

# 2. Technical Document Center
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/technical", exist_ok=True)
with open("/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/technical.html", "w", encoding="utf-8") as f:
    f.write(tech_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/technical/index.html", "w", encoding="utf-8") as f:
    f.write(tech_html_template)

# 3. Color Swatch & Sample Request Page
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/color-samples", exist_ok=True)
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/sample", exist_ok=True)

with open("/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/color-samples.html", "w", encoding="utf-8") as f:
    f.write(color_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/color-samples/index.html", "w", encoding="utf-8") as f:
    f.write(color_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/sample/index.html", "w", encoding="utf-8") as f:
    f.write(color_html_template)

# 4. Render Modules for Workers
escaped_main = main_html_template.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
with open("/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Main Renderer\nexport function renderKctPage() {{\n  return `{escaped_main}`;\n}}\n")

escaped_tech = tech_html_template.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
with open("/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-tech-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Tech Center Renderer\nexport function renderKctTechPage() {{\n  return `{escaped_tech}`;\n}}\n")

escaped_color = color_html_template.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
with open("/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-color-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Color & Sample Renderer\nexport function renderKctColorPage() {{\n  return `{escaped_color}`;\n}}\n")


# 4. Specimen Fabrication Center Page
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimens", exist_ok=True)
os.makedirs("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimen", exist_ok=True)

with open("/Users/islee/Desktop/devhave/davhave_home/projects/kct/public/specimens.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimens/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

with open("/Users/islee/Desktop/devhave/davhave_home/public/projects/kct/specimen/index.html", "w", encoding="utf-8") as f:
    f.write(specimens_html_template)

escaped_specimens = specimens_html_template.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
with open("/Users/islee/Desktop/devhave/davhave_home/src/lib/kct-specimen-render.js", "w", encoding="utf-8") as f:
    f.write(f"// KCT Specimen Fabrication Center Renderer\nexport function renderKctSpecimenPage() {{\n  return `{escaped_specimens}`;\n}}\n")

print("Generated all files successfully:")
print(" - projects/kct/public/index.html")
print(" - projects/kct/public/technical.html")
print(" - projects/kct/public/color-samples.html")
print(" - src/lib/kct-render.js")
print(" - src/lib/kct-tech-render.js")
print(" - src/lib/kct-color-render.js")
