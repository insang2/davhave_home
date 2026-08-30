import json, os

# 17대 적용분야 및 52개 세부 항목 정의 (실내 인테리어 & 타일 하이진 실란트 ARDEX SN+ 급 신규 수록)
APPLICATIONS_DATA = [
    {
        "category_id": "specialty-silicone",
        "category_name": "특수 모빌리티 & 하이테크 실란트 (Specialty & High-Tech)",
        "category_desc": "조선해양(MED인증), 고속철도(EN45545), 수소연료전지, 반도체 클린룸, 극저온 콜드체인, BIPV 등 글로벌 최상위 기술 규격을 충족하는 고부가가치 특수 실란트 라인업.",
        "items": [
            {
                "sub_id": "spec-marine",
                "title": "조선·해양 선박용 실란트",
                "title_en": "Marine & Offshore Sealant (MED/IMO)",
                "img": "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80",
                "desc": "염분 해수, 강자외선, 선체 비틀림 진동을 견디며 선박 데크 코킹 및 수밀 해치를 밀봉하는 국제선박용품(MED/IMO) 형식승인 실란트.",
                "specs": [["인증 규격", "MED / IMO 해사기구 난연 및 수밀 형식승인"], ["주요 제품", "Dow DOWSIL™ Marine / Marine Polyurethane"], ["적용 부위", "선박 티크 데크 줄눈, 수밀 해치 커버, 선체 글레이징"]]
            },
            {
                "sub_id": "spec-railway",
                "title": "철도 & 고속차량용 실란트",
                "title_en": "Railway & Rolling Stock Sealant (EN 45545-2)",
                "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
                "desc": "KTX/SRT 고속철도 및 지하철 전동차의 창문 직접 접합(Direct Glazing) 및 유럽 철도 화재안전 규격을 충족하는 고탄성 난연 실란트.",
                "specs": [["화재안전 등급", "EN 45545-2 HL3 (최고 위험등급 인증)"], ["주요 제품", "High Modulus Rail Silicone / MS Polymer"], ["적용 부위", "고속철 전면 유리 접합, 승강문 기밀 씰, 지붕 공조부"]]
            },
            {
                "sub_id": "spec-cleanroom",
                "title": "반도체 FAB & 제약 클린룸 실란트",
                "title_en": "Cleanroom & Pharma Outgas-Free Sealant",
                "img": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                "desc": "가소제 및 저분자 실록산 방출이 전혀 없어 초미세 웨이퍼 오염을 막고, VHP(과산화수소 훈증 소독)에 내성을 지닌 초저VOC 무기 실란트.",
                "specs": [["청정도 대응", "ISO 14644-1 Class 1, Zero-Outgassing"], ["주요 제품", "Ultra-pure Cleanroom Neutral Silicone"], ["적용 부위", "반도체 FAB 패널 조인트, 제약/바이오 무균실 벽체 줄눈"]]
            },
            {
                "sub_id": "spec-hydrogen",
                "title": "수소 모빌리티 & 연료전지 실란트",
                "title_en": "Hydrogen Fuel Cell & Stack Gasket",
                "img": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
                "desc": "가장 미세한 수소(H2) 기체의 극미세 누출을 완벽 차단하고 강산성 전해질 환경을 견디는 연료전지 스택 분리판 전용 액상 실리콘 가스켓.",
                "specs": [["기밀 성능", "수소 투과 계수 최소화, 내열·내산성"], ["주요 제품", "Liquid Silicone Rubber (LSR) for Bipolar Plate"], ["적용 부위", "FCEV 수소차 스택 분리판 가스켓, 수소 배관 씰링"]]
            },
            {
                "sub_id": "spec-bipv",
                "title": "BIPV(건물일체형태양광) & 스마트 글래스 실란트",
                "title_en": "BIPV & Smart Electrochromic Glazing Sealant",
                "img": "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
                "desc": "건물일체형 태양광(BIPV) 파사드 및 스마트 틴팅 글래스(PDLC/EC)의 전극 부식을 막고 30년 이상의 옥외 절연 기밀을 유지하는 특수 실란트.",
                "specs": [["절연 내력", "> 20 kV/mm, 전극 부식 방지 중성 배합"], ["주요 제품", "Solar BIPV Edge Sealant & Potting"], ["적용 부위", "BIPV 모듈 테두리, 스마트 글래스 전극 엣지 실링"]]
            },
            {
                "sub_id": "spec-cold-storage",
                "title": "극저온 콜드체인 & 냉동물류창고 실란트",
                "title_en": "Deep Freeze & Cold Storage Joint Sealant",
                "img": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
                "desc": "영하 -40℃ ~ -60℃의 급속 냉동 물류 환경에서도 경화 균열 없이 100% 탄성을 유지하여 냉기 유출과 결로를 차단하는 저온 전용 실란트.",
                "specs": [["사용 온도 범위", "-60℃ ~ 150℃ (극저온 탄성 유지)"], ["주요 제품", "Low-temperature Elastic Silicone Sealant"], ["적용 부위", "냉동/냉장창고 샌드위치 패널 조인트, 급속동결실 바닥"]]
            },
            {
                "sub_id": "spec-timber",
                "title": "친환경 목조 건축 & CLT 패널 실란트",
                "title_en": "Mass Timber & CLT Construction Sealant",
                "img": "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
                "desc": "목재의 습도 팽창·수축을 유연하게 추종하며 목재 표면에 오일 오염을 남기지 않고 수증기 통기성(Breathable)을 제공하는 친환경 실란트.",
                "specs": [["통기성/비오염", "수증기 투과성 우수, 목재 비오염 무변색"], ["주요 제품", "Breathable Hybrid Polymer / Timber Sealant"], ["적용 부위", "대단면 CLT 목조 빌딩 접합부, 중목구조 기둥/보 줄눈"]]
            },
            {
                "sub_id": "spec-aerospace-defense",
                "title": "방산·항공우주 초저휘발 실란트",
                "title_en": "Aerospace & Defense Space-Grade Low Outgassing",
                "img": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                "desc": "우주 진공 환경에서 휘발성 응축 물질이 방출되지 않아 광학 센서 오염을 방지하는 NASA 규격 우주항공·방위산업 전용 초순도 실란트.",
                "specs": [["NASA 규격", "ASTM E595 (CVCM < 0.1%, TML < 1.0%)"], ["주요 제품", "Space-Grade Ultra-Low Outgassing RTV Silicone"], ["적용 부위", "인공위성 광학 페이로드 마운팅, 군용 레이더 돔 실링"]]
            }
        ]
    },
    {
        "category_id": "ess-ev",
        "category_name": "ESS & EV 배터리 (Battery & Energy Storage)",
        "category_desc": "전기차(EV) 및 대용량 에너지저장장치(ESS)의 열폭주(Thermal Runaway) 방지, UL 94 V-0 난연 기밀 실링, 고열전도 방열 및 구조 접착 토탈 솔루션.",
        "items": [
            {
                "sub_id": "ev-ul94-sealant",
                "title": "EV 배터리 팩용 UL 94 V-0 난연 실란트",
                "title_en": "UL-94 V0 Flame Retardant Battery Pack Sealant",
                "img": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
                "desc": "화재 시 10초 이내 자기소화 및 보호 차르(Char) 층을 형성하여 열폭주 전파를 차단하고 IP67/IP68 방수를 완벽 보장하는 1액형/2액형 난연 RTV 실리콘.",
                "specs": [["난연 등급", "UL 94 V-0 인증 (화염 방울 없음)"], ["주요 제품", "Dow DOWSIL™ / KCT EV-Guard 94V0"], ["적용 부위", "배터리 팩 상하부 커버 하우징 실링, 부스바 절연"]]
            },
            {
                "sub_id": "ev-thermal-gapfiller",
                "title": "배터리 열관리용 방열 갭필러 & 방열 겔",
                "title_en": "Thermal Conductive Gap Filler & Gel",
                "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                "desc": "배터리 셀과 냉각 플레이트(Chiller Plate) 사이의 공극을 완벽 충진하여 초고속 열전도를 실현하고 셀 수명을 연장하는 액상 방열 갭필러.",
                "specs": [["열전도율", "1.5 ~ 4.0 W/m·K (고열전도 세라믹 필러)"], ["주요 제품", "2-Part Silicone Thermal Gap Filler"], ["적용 부위", "셀-냉각판 사이 인터페이스, BMS 보드 방열"]]
            },
            {
                "sub_id": "ev-ctp-adhesive",
                "title": "셀-투-팩(CTP) 구조용 접착제",
                "title_en": "Cell-to-Pack (CTP) Structural Adhesive",
                "img": "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
                "desc": "배터리 셀과 트레이를 모듈 없이 직접 영구 결합하여 에너지 밀도를 극대화하고 주행 진동 충격을 흡수하는 고강도 탄성 접착제.",
                "specs": [["인장 전단 강도", "> 8.0 MPa, 우수한 피로 내구성"], ["주요 제품", "High Modulus Structural Silicone / Epoxy"], ["적용 부위", "원통형/각형 셀 하우징 고정, CTP/CTC 팩 접착"]]
            },
            {
                "sub_id": "ev-silicone-foam",
                "title": "난연 실리콘 폼 & 스펀지 가스켓",
                "title_en": "Flame Retardant Silicone Foam & Gasket",
                "img": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                "desc": "배터리 셀 충·방전 팽창(Swelling)을 완벽 흡수하고 셀 간 화염 전이를 물리적으로 격리하는 초경량 난연 실리콘 폼.",
                "specs": [["압축 복원률", "< 5% Compression Set (영구 탄성 유지)"], ["주요 제품", "Low-density Silicone Foam Sheet"], ["적용 부위", "셀 간 단열 쿠션 패드, 배터리 팩 엔클로저 가스켓"]]
            },
            {
                "sub_id": "ess-immersion-coolant",
                "title": "대용량 ESS용 침지식 실리콘 쿨런트 & 씰",
                "title_en": "Immersion Silicone Coolant & Seal for ESS",
                "img": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80",
                "desc": "대용량 컨테이너형 ESS 랙의 액침 냉각(Immersion Cooling)에 최적화된 초저점도 무독성 절연 실리콘 유체 및 내화학 침지 씰링.",
                "specs": [["절연 파괴 전압", "> 40 kV/2.5mm, 불연성"], ["주요 제품", "Dielectric Immersion Coolant & FVMQ Seal"], ["적용 부위", "ESS 배터리 랙 직접 침지 냉각, 냉매 배관 씰링"]]
            },
            {
                "sub_id": "ev-thermal-barrier",
                "title": "배터리 모듈 내화 단열시트 & 절연 테이프",
                "title_en": "Battery Thermal Barrier Sheet & PI Tape",
                "img": "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
                "desc": "1,000℃ 이상의 화염 제트 분사에도 관통되지 않는 세라믹/실리콘 복합 단열시트 및 고전압 배터리 절연 테이프.",
                "specs": [["내열 온도", "최대 1,200℃ 순간 화염 저항"], ["주요 제품", "Ceramic-Silicone Barrier Sheet, PI Tape"], ["적용 부위", "배터리 팩 상부 방화 시트, 모듈 층간 방화벽"]]
            }
        ]
    },
    {
        "category_id": "electronics",
        "category_name": "전자 (Electronics)",
        "category_desc": "우수한 전기 절연성, 내열·내한성, 방열 및 충격 흡수 물성으로 항공우주, 5G 통신, 반도체 및 첨단 IT 기기의 신뢰성을 극대화합니다.",
        "items": [
            {
                "sub_id": "elec-aerospace",
                "title": "항공/우주용 실리콘",
                "title_en": "Silicone for Aerospace",
                "img": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                "desc": "극한의 고온·저온 및 방사선, 진공 환경을 견디는 항공우주 및 위성 부품 전용 특수 실링·포팅재.",
                "specs": [["핵심 특성", "극저온/초고온 안정성 (-100℃ ~ 300℃)"], ["주요 제품", "Dow / KCC 특수 항공 실리콘"], ["적용 부위", "인공위성 전자 모듈, 항공기 엔진 실링, 센서 포팅"]]
            },
            {
                "sub_id": "elec-telecom",
                "title": "통신장비용 실리콘",
                "title_en": "Silicones for Telecommunication",
                "img": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
                "desc": "5G/6G 기지국 및 중계기의 고발열 해소, 수분 차단 및 전자기파 간섭(EMI) 차폐 실링 솔루션.",
                "specs": [["핵심 특성", "고방열 열전도율 (Thermal Conductivity)"], ["주요 제품", "방열 겔(Gel), 방열 그리스, RTV 실란트"], ["적용 부위", "5G 안테나 모듈, 통신 중계기 케이스 방수 실링"]]
            },
            {
                "sub_id": "elec-auto-elec",
                "title": "자동차 전장용 실리콘",
                "title_en": "Automotive Electronics Silicone",
                "img": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
                "desc": "전기차 배터리 팩, 인버터, 자율주행 센서(LiDAR/Radar)의 내진동 접착 및 방열 포팅.",
                "specs": [["핵심 특성", "난연 UL 94 V-0 인증, 절연 내력 우수"], ["주요 제품", "Dow DOWSIL™ 2액형 방열 포팅재"], ["적용 부위", "EV 배터리 모듈 실링, ECU 케이스 접착"]]
            },
            {
                "sub_id": "elec-appliances",
                "title": "가전제품용 실리콘",
                "title_en": "Home Appliances Silicone",
                "img": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
                "desc": "세탁기, 냉장고, 식기세척기, 오븐 등 백색 가전의 고내열 가스켓 및 방수 실링 접착제.",
                "specs": [["핵심 특성", "FDA 식품접촉 안전 등급, 무독성 무취"], ["주요 제품", "LSR 사출 실리콘, RTV 가스켓"], ["적용 부위", "스팀오븐 도어 실링, 세탁기 드럼 댐퍼, 냉장고 도어"]]
            },
            {
                "sub_id": "elec-semiconductor",
                "title": "반도체용 실리콘",
                "title_en": "Silicones for Semiconductor",
                "img": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
                "desc": "초미세 반도체 패키징, 다이 캐리어, 웨이퍼 이송용 초순도 실리콘 엘라스토머 및 겔.",
                "specs": [["핵심 특성", "초저이온 불순물, 아웃가스(Outgassing) 최소화"], ["주요 제품", "Semiconductor Die Carrier, SiC 부품 코팅"], ["적용 부위", "웨이퍼 이송 캐리어, 반도체 칩 보호 코팅"]]
            },
            {
                "sub_id": "elec-led",
                "title": "LED용 실리콘",
                "title_en": "Silicones for LED Encapsulant",
                "img": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
                "desc": "고출력 LED 및 자동차 조명용 고투명 봉지재(Encapsulant) 및 고반사 화이트 실리콘.",
                "specs": [["핵심 특성", "고굴절률 (Refractive Index > 1.5), 내황변성"], ["주요 제품", "LED 봉지재, White Reflector 실리콘"], ["적용 부위", "헤드램프 LED 패키지, 마이크로 LED 디스플레이"]]
            }
        ]
    },
    {
        "category_id": "automotive",
        "category_name": "자동차 (Automotive)",
        "category_desc": "엔진룸부터 차체, 전장, 인테리어까지 혹독한 주행 환경과 오일·연료 저항성을 갖춘 자동차 전용 실리콘.",
        "items": [
            {
                "sub_id": "auto-elec-devices",
                "title": "자동차 전자 기기용 실리콘",
                "title_en": "Silicones for Automotive Devices",
                "img": "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
                "desc": "차량용 네비게이션, 인포테인먼트 디스플레이 OCR 광학 접착 및 카메라 모듈 실링.",
                "specs": [["핵심 특성", "고투명 광학 접착(LOCA), 충격 흡수"], ["주요 제품", "Optical Clear Silicone Gel"], ["적용 부위", "CID 디스플레이 접합, ADAS 전방 카메라 실링"]]
            },
            {
                "sub_id": "auto-elastomer",
                "title": "자동차용 실리콘 엘라스토머",
                "title_en": "Automotive Silicone Elastomers",
                "img": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
                "desc": "터보차저 호스, 점화 플러그 부트, 와이어링 하네스 커넥터 실링용 고인열 실리콘 고무.",
                "specs": [["핵심 특성", "엔진오일/냉각수 저항성, 고탄성 복원율"], ["주요 제품", "FVMQ(불소실리콘), HTV 고무"], ["적용 부위", "인터쿨러 호스, 커넥터 방수 씰, O-링"]]
            },
            {
                "sub_id": "auto-hardcoat",
                "title": "자동차용 하드코팅",
                "title_en": "Automotive Hardcoat",
                "img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
                "desc": "폴리카보네이트(PC) 헤드램프 렌즈 및 글레이징의 스크래치 방지, 자외선 내후성 실록산 하드코팅.",
                "specs": [["핵심 특성", "내스크래치성 연필경도 > 4H, UV 차단"], ["주요 제품", "Thermal-cure Siloxane Hardcoat"], ["적용 부위", "자동차 헤드램프 커버, PC 윈도우 글레이징"]]
            },
            {
                "sub_id": "auto-urethane-additive",
                "title": "자동차용 우레탄 첨가제",
                "title_en": "Urethane Additives for Automotive",
                "img": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
                "desc": "차량용 시트 쿠션, 헤드레스트, 흡차음재의 균일한 셀 구조 형성을 돕는 실리콘 계면활성제.",
                "specs": [["핵심 특성", "저VOC / 저냄새 친환경 폼 안정제"], ["주요 제품", "Silicone Surfactant for PU Foam"], ["적용 부위", "자동차 시트 폼, 핸들 성형, 소음 흡음재"]]
            }
        ]
    },
    {
        "category_id": "beauty",
        "category_name": "뷰티 & 퍼스널 케어 (Beauty & Personal Care)",
        "category_desc": "피부에 끈적임 없는 실키한 감촉, 지속력, 광택 및 발림성을 제공하는 화장품 특화 실리콘 원료.",
        "items": [
            {
                "sub_id": "beauty-color",
                "title": "컬러 코스메틱",
                "title_en": "Color Cosmetics",
                "img": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
                "desc": "파운데이션, 립스틱, 마스카라의 롱래스팅(지속력), 피지 저항성 및 뭉침 방지 레진 블렌드.",
                "specs": [["핵심 특성", "피막 형성능, 우수한 내수성 및 색소 분산력"], ["주요 제품", "Silicone Resin Blend, Alkyl Silicone"], ["적용 부위", "쿠션 팩트, 립스틱, 아이라이너"]]
            },
            {
                "sub_id": "beauty-hair",
                "title": "헤어 케어",
                "title_en": "Hair Care",
                "img": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
                "desc": "샴푸, 린스, 헤어 에센스의 모발 부드러움, 열 보호, 윤기 및 정전기 방지 아미노 실리콘 에멀전.",
                "specs": [["핵심 특성", "손상모 케어, 뛰어난 컨디셔닝 효과"], ["주요 제품", "Amino Silicone Fluid, Gum Blend"], ["적용 부위", "헤어 세럼, 트리트먼트, 염색약"]]
            },
            {
                "sub_id": "beauty-skin",
                "title": "스킨 케어",
                "title_en": "Skin Care",
                "img": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
                "desc": "수분크림, 로션, 세럼의 실크처럼 매끄러운 발림성과 벨벳 피니시를 선사하는 엘라스토머 겔.",
                "specs": [["핵심 특성", "매트한 마무리감, 모공 블러 효과"], ["주요 제품", "Silicone Elastomer Gel, Powder"], ["적용 부위", "수분 프라이머, 안티에이징 크림, BB크림"]]
            },
            {
                "sub_id": "beauty-sun",
                "title": "선 케어",
                "title_en": "Sun Care",
                "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                "desc": "자외선 차단제의 백탁 현상 방지, 유기/무기 자외선 차단 필터 균일 분산 및 워터프루프 유지.",
                "specs": [["핵심 특성", "땀/물에 강한 방수막, 백탁 억제"], ["주요 제품", "Acrylate Silicone, W/Si 유화제"], ["적용 부위", "선크림, 선스틱, 워터프루프 선스프레이"]]
            }
        ]
    },
    {
        "category_id": "building",
        "category_name": "건축 & 실내 인테리어 (Building & Interior)",
        "category_desc": "한국건설트레이딩(KCT)의 주력 핵심 분야로 초고층 커튼월, 창호, 방화, 방균, 프리미엄 실내 인테리어 타일 실란트(ARDEX SN+급) 등 13개 전문 건축 시공 솔루션을 공급합니다.",
        "items": [
            {
                "sub_id": "bldg-interior-hygiene",
                "title": "실내 인테리어 & 타일 바이오 실란트",
                "title_en": "Premium Interior & Tile Hygiene Silicone (ARDEX SN+ Grade)",
                "img": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
                "desc": "위생이 중요한 욕실, 주방, 거실 타일 및 천연 대리석 코너 조인트용 비초산형 프리미엄 하이진 실란트. 자극적인 냄새가 없고 변색/황변이 없으며 14가지 타일 줄눈 매칭 색상 지원.",
                "specs": [["경화 방식 / 특성", "비초산형 중성경화, 무취, 곰팡이 저항성 최고 등급"], ["주요 제품", "ARDEX SN PLUS / KCT Interior Hygiene Bio"], ["적용 부위", "욕실 코너 줄눈, 타일-타일 조인트, 욕조·싱크대·세면대 실링, 이질재 접합부"]]
            },
            {
                "sub_id": "bldg-general",
                "title": "범용, 유리글레이징",
                "title_en": "General Glass Glazing",
                "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
                "desc": "유리와 알루미늄/스틸 프레임 간의 표준 글레이징 접착 및 기밀 수밀 유지 실란트.",
                "specs": [["핵심 특성", "무초산 중성경화, 우수한 접착력"], ["주요 제품", "Dow DOWSIL™ 789 / KCT Neutral"], ["적용 부위", "상가 유리, 파티션, 창호 유리 테두리"]]
            },
            {
                "sub_id": "bldg-ig",
                "title": "복층유리용",
                "title_en": "Insulating Glass Secondary Seal",
                "img": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
                "desc": "아르곤 단열 가스 누출을 막고 유리의 구조적 일체성을 보장하는 고탄성 2차 실란트.",
                "specs": [["핵심 특성", "가스 투과도 최저, EN 1279 인증"], ["주요 제품", "Dow DOWSIL™ 3362 / 3363"], ["적용 부위", "로이 복층유리, 3중 복층유리 에지 실링"]]
            },
            {
                "sub_id": "bldg-structural",
                "title": "구조 글레이징용 (SSG)",
                "title_en": "Structural Glazing Sealant",
                "img": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
                "desc": "프레임 없이 유리와 메탈을 영구 접착하여 외풍압과 지진 하중을 견디는 초고강도 실리콘.",
                "specs": [["핵심 특성", "인장강도 2.4 MPa, ASTM C1184"], ["주요 제품", "Dow DOWSIL™ 983 / 895"], ["적용 부위", "초고층 빌딩 4면 지지 커튼월 시스템"]]
            },
            {
                "sub_id": "bldg-window",
                "title": "창호용",
                "title_en": "Window Perimeter Sealant",
                "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                "desc": "알루미늄/PVC 창호와 콘크리트 골조 사이의 빗물 누수를 차단하고 신축을 흡수하는 창호 전용 실란트.",
                "specs": [["핵심 특성", "변위추종 ±35%, 우수한 내후성"], ["주요 제품", "Dow 791 / KCT Window Perimeter"], ["적용 부위", "아파트/빌딩 외벽 창호 주위 조인트"]]
            },
            {
                "sub_id": "bldg-weather",
                "title": "웨더용 (내후성)",
                "title_en": "Weatherproofing Silicone",
                "img": "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80",
                "desc": "석재, 알루미늄 복합패널 외벽의 오염(Staining)을 방지하고 자외선을 영구 견디는 외장 실란트.",
                "specs": [["핵심 특성", "비오염성 (Non-staining), ±50% 변위"], ["주요 제품", "Dow DOWSIL™ 991 / 791"], ["적용 부위", "석재 외벽 줄눈, 복합판넬 익스팬션 조인트"]]
            },
            {
                "sub_id": "bldg-sanitary",
                "title": "욕실용, 방균",
                "title_en": "Sanitary & Anti-fungal",
                "img": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
                "desc": "강력한 항균 배합으로 물때와 곰팡이 번식을 원천 차단하는 위생 실리콘.",
                "specs": [["핵심 특성", "곰팡이 저항성 최고 0등급 (ASTM G21)"], ["주요 제품", "KCT Bio Sanitary Silicone"], ["적용 부위", "욕조 테두리, 세면대, 싱크대, 클린룸"]]
            },
            {
                "sub_id": "bldg-fire",
                "title": "방화용",
                "title_en": "Firestop Silicone",
                "img": "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
                "desc": "화재 발생 시 최대 4시간 내화 차단 성능으로 화염과 유독가스를 차단하는 건축법 필수 자재.",
                "specs": [["핵심 특성", "KS F 2257 2~4시간 내화 인증"], ["주요 제품", "KCT Firestop 700"], ["적용 부위", "방화벽 파이프 관통부, 엘리베이터 방화구획"]]
            },
            {
                "sub_id": "bldg-civil",
                "title": "토목용",
                "title_en": "Civil Engineering Joint",
                "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
                "desc": "콘크리트 고속도로, 공항 활주로, 교량 신축이음부의 자가수평(Self-leveling) 토목 실란트.",
                "specs": [["핵심 특성", "중차량 하중 저항, 염화칼슘 내약품성"], ["주요 제품", "KCT Highway SL Joint"], ["적용 부위", "고속도로 슬래브 줄눈, 교량 접속부"]]
            },
            {
                "sub_id": "bldg-ind-adh",
                "title": "산업용(접착제 外)",
                "title_en": "Industrial Structural Adhesive",
                "img": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                "desc": "건축용 금속 브라켓, 승강기 패널, 복합재 부착을 위한 고강도 탄성 접착제.",
                "specs": [["핵심 특성", "진동 흡수 및 고전단 접착력"], ["주요 제품", "KCT Industrial MS / Silicone"], ["적용 부위", "엘리베이터 카 벽체 접착, 금속 외장재 조립"]]
            },
            {
                "sub_id": "bldg-water-repellent",
                "title": "발수제",
                "title_en": "Silicone Water Repellent",
                "img": "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
                "desc": "적벽돌, 콘크리트, 석재 외벽 내부로 빗물 침투를 막고 통기성을 유지하는 실리콘 침투성 발수제.",
                "specs": [["핵심 특성", "무색 투명, 백화 방지, 통기성 유지"], ["주요 제품", "KCT Silane/Siloxane Water Repellent"], ["적용 부위", "벽돌 조적조 외벽, 노출 콘크리트 외벽"]]
            },
            {
                "sub_id": "bldg-gasket",
                "title": "가스켓",
                "title_en": "Silicone Gasket",
                "img": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
                "desc": "커튼월 및 고급 알루미늄 창호의 영구 기밀을 유지하는 고내후성 압출 실리콘 가스켓.",
                "specs": [["핵심 특성", "영구 압축줄음률(Compression Set) 최소화"], ["주요 제품", "Extruded Silicone Gasket Profile"], ["적용 부위", "커튼월 프레임 완충재, 시스템 창호 수밀 씰"]]
            },
            {
                "sub_id": "bldg-roof-coating",
                "title": "실리콘 방수 코팅",
                "title_en": "Silicone Waterproof Coating",
                "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
                "desc": "기존 우레탄 방수 대비 수명이 2배 이상 긴 옥상 및 외벽 100% 무이음 실리콘 도막 방수제.",
                "specs": [["핵심 특성", "자외선 분해 없음, 고반사 쿨루프 효과"], ["주요 제품", "KCT Silicone Liquid Roof Coating"], ["적용 부위", "공장 지붕, 빌딩 옥상, 노후 방수면 리모델링"]]
            }
        ]
    },
    {
        "category_id": "industrial-other",
        "category_name": "산업 & 기타 특수 분야 (Industrial & Specialty)",
        "category_desc": "소비재, 헬스케어, 재생에너지, 오일/가스, 섬유, 농업, 송배전, 타이어 등 글로벌 산업 전반의 고기능성 실리콘 솔루션.",
        "items": [
            {
                "sub_id": "ind-consumer",
                "title": "소비재 (Consumer Goods)",
                "title_en": "Silicone for Consumer Goods",
                "img": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
                "desc": "유아용 젖꼭지, 주방 조리도구, 친환경 식품 밀폐용기 가스켓용 무독성 액상 실리콘(LSR).",
                "specs": [["핵심 특성", "BPA Free, FDA / LFGB 유럽 식품용기 인증"], ["주요 제품", "LSR Injection Grade"], ["적용 부위", "유아용품, 친환경 조리도구, 식품 패키징"]]
            },
            {
                "sub_id": "ind-healthcare",
                "title": "헬스케어 (Healthcare)",
                "title_en": "Medical & Healthcare Silicone",
                "img": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                "desc": "의료용 튜브, 인공호흡기 마스크, 피부 부착용 소프트 실리콘 접착제(PSA).",
                "specs": [["핵심 특성", "생체 적합성 ISO 10993, 무자극 피부접착"], ["주요 제품", "Medical Grade Silicone"], ["적용 부위", "카테터, 산소마스크, 창상피복재 드레싱"]]
            },
            {
                "sub_id": "ind-oilgas",
                "title": "오일 및 가스 (Oil & Gas)",
                "title_en": "Oil & Gas Solutions",
                "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
                "desc": "해양 플랜트 및 정유시설의 가혹한 탄화수소 환경을 견디는 소포제 및 내유성 실리콘 씰.",
                "specs": [["핵심 특성", "고온 고압 내약품성, 황화수소 저항"], ["주요 제품", "Fluorosilicone & Silicone Defoamer"], ["적용 부위", "원유 추출 설비 소포, 밸브 내화학 가스켓"]]
            },
            {
                "sub_id": "ind-textile",
                "title": "섬유 및 가죽 (Textile & Leather)",
                "title_en": "Textile & Leather Softener",
                "img": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
                "desc": "원단 및 천연/합성 피혁에 부드러운 감촉, 발수성, 신축성 및 내구성을 부여하는 가공제.",
                "specs": [["핵심 특성", "극세사 터치감, 세탁 내구성 유지"], ["주요 제품", "Hydrophilic Silicone Softener"], ["적용 부위", "기능성 아웃도어 의류, 고급 가죽 시트"]]
            },
            {
                "sub_id": "ind-agriculture",
                "title": "농업용 (Agriculture)",
                "title_en": "Agricultural Adjuvant",
                "img": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
                "desc": "농약 및 엽면시비 영양제의 잎 표면 흡수를 10배 이상 촉진하는 초확산(Super-spreading) 실리콘 전착제.",
                "specs": [["핵심 특성", "표면장력 초저하 (< 22 mN/m), 기공 침투"], ["주요 제품", "Organosilicone Surfactant"], ["적용 부위", "작물 보호제 전착제, 스마트팜 영양액"]]
            },
            {
                "sub_id": "ind-renewable",
                "title": "재생에너지 (Renewable Energy)",
                "title_en": "Solar & Renewable Energy",
                "img": "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
                "desc": "태양광 PV 모듈 알루미늄 프레임 실링, 정션박스 포팅 및 풍력 발전기 터빈 블레이드 보호 코팅.",
                "specs": [["핵심 특성", "25년 옥외 수명 보증, PID 억제"], ["주요 제품", "PV Module Frame Sealant"], ["적용 부위", "태양광 모듈 테두리, 풍력 발전기 씰"]]
            },
            {
                "sub_id": "ind-furniture",
                "title": "가구·침구 및 카펫 (Furniture & Bedding)",
                "title_en": "Furniture, Bedding & Carpet",
                "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
                "desc": "메모리폼 매트리스, 소파 폼 및 발수 카펫 섬유 코팅용 친환경 실리콘 첨가제.",
                "specs": [["핵심 특성", "고탄성 반발력 조절, 오염 방지"], ["주요 제품", "PU Foam Stabilizer, Stain Release"], ["적용 부위", "매트리스 폼, 방오 카펫 코팅"]]
            },
            {
                "sub_id": "ind-power",
                "title": "송전 및 배전 (Electrical Transmission)",
                "title_en": "Electrical Transmission & Insulators",
                "img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
                "desc": "초고압 송전선 폴리머 애자(Insulator), 케이블 접속재용 내트래킹 실리콘 고무.",
                "specs": [["핵심 특성", "발수성 유지(HC Class 1), 내염해 아크 저항"], ["주요 제품", "High Voltage HTV / LSR"], ["적용 부위", "초고압 송전 애자, 변전소 케이블 조인트"]]
            },
            {
                "sub_id": "ind-production",
                "title": "산업용 생산 (Industrial Production)",
                "title_en": "Industrial Production & Release",
                "img": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                "desc": "플라스틱/다이캐스팅 성형용 실리콘 이형제, 정밀 기계 윤활유 및 소포제.",
                "specs": [["핵심 특성", "고온 안정성, 우수한 이형성 및 윤활력"], ["주요 제품", "Silicone Release Agent, Grease"], ["적용 부위", "금형 이형, 산업용 기계 윤활"]]
            },
            {
                "sub_id": "ind-tapes",
                "title": "테이프 & 라벨 (Tapes & Labels)",
                "title_en": "Pressure Sensitive Adhesives & Release",
                "img": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
                "desc": "점착 테이프(PSA) 및 라벨 이형지(Release Liner) 코팅용 실리콘 솔루션.",
                "specs": [["핵심 특성", "고온 점착력 유지, 정밀 박리력 제어"], ["주요 제품", "Silicone PSA, Solventless Release Coating"], ["적용 부위", "내열 마스킹 테이프, 라벨 이형 라이너"]]
            },
            {
                "sub_id": "ind-tire",
                "title": "타이어 및 고무 (Tire & Rubber)",
                "title_en": "Silane Coupling Agents for Tire",
                "img": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
                "desc": "친환경 에코 타이어의 연비와 젖은 노면 제동력을 획기적으로 향상시키는 실란 커플링제.",
                "specs": [["핵심 특성", "실리카-고무 결합력 증대, 회전저항 감소"], ["주요 제품", "Sulfur Silane Coupling Agent"], ["적용 부위", "고성능 친환경 타이어 트레드 고무"]]
            }
        ]
    }
]

print(f"Total categories: {len(APPLICATIONS_DATA)}")
total_items = sum(len(cat['items']) for cat in APPLICATIONS_DATA)
print(f"Total sub-application items: {total_items}")
