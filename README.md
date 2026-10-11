# 🎆 Seoul Fireworks Festival — Promotion Website

> 한화 서울세계불꽃축제의 분위기와 정보를 시각적으로 전달하기 위해 제작한 프로모션 사이트 리디자인 프로젝트입니다.

🔗 [서울불꽃축제 프로모션 사이트 바로가기](https://seoyeonkang12.github.io/promotion_web/)

<img width="1899" height="927" alt="image" src="https://github.com/user-attachments/assets/9ee9464e-bd1d-4d05-aa89-ba4c6d5406f9" />


## 📌 Project Overview

불꽃축제의 화려한 분위기를 시각적으로 표현하고, 방문자가 축제와 관련된 정보를 직관적으로 확인할 수 있도록 프로모션 사이트를 리디자인했습니다.

어두운 배경과 불꽃 이미지를 활용해 축제의 분위기를 강조하고, 타이포그래피와 다양한 인터랙션을 적용해 콘텐츠에 집중할 수 있도록 구성했습니다.

- **Project :** 개인 프로젝트
- **Date :** 2026.09-2026.09 (총 3일)
- **Target :** PC 화면 중심
- **Role :** 기획, UI 디자인, 퍼블리싱 및 인터랙션 구현

## 🛠️ Tech Stack

- **HTML5 :** 웹페이지 구조 및 콘텐츠 구성
- **SCSS :** 스타일 작성 및 관리
- **jQuery :** DOM 제어 및 이벤트 처리
- **GSAP :** 스크롤 기반 애니메이션 구현
- **Swiper :** 슬라이드 및 팝업 인터랙션 구현

## ✨ Key Features

### 1. Main Visual
- 불꽃 이미지와 어두운 배경을 활용한 메인 비주얼 구성
- 큰 타이포그래피를 활용해 시각적 주목도 강화
- 축제 장소 및 행사 일정 정보 제공

<img width="1899" height="927" alt="image" src="https://github.com/user-attachments/assets/9ee9464e-bd1d-4d05-aa89-ba4c6d5406f9" />

### 2. Festival Overview
- 축제의 기획 의도와 콘셉트를 소개하는 콘텐츠 구성
- 타이포그래피와 여백을 활용해 콘텐츠의 가독성 강화
- 스크롤 애니메이션을 활용한 시각적 흐름 연출

<img width="1897" height="923" alt="image" src="https://github.com/user-attachments/assets/043dbe42-af4d-452d-a94e-0d1f3e27c964" />

### 3. Fireworks Team
- 한국, 영국, 미국 불꽃연출팀 소개
- 팀별 불꽃쇼 콘셉트와 연출 특징을 전달하는 콘텐츠 구성
- 마우스 호버에 따른 활성 상태 및 배경 이미지 변경 인터랙션 구현

<img width="1893" height="923" alt="image" src="https://github.com/user-attachments/assets/d891c0b8-826e-44c2-80fd-8aed5f0d38fd" />

### 4. Event Program
- 사전행사, 공식행사, 불꽃쇼, 인파 해산, 클린 캠페인 등 행사 일정 안내
- 시간과 프로그램 정보를 구분해 쉽게 확인할 수 있도록 구성
- 이미지와 텍스트를 조합한 콘텐츠 레이아웃 구현

<img width="1893" height="921" alt="image" src="https://github.com/user-attachments/assets/ed4803ee-d580-4a07-b48d-8faa9e27ca84" />

### 5. Night Guide
- 축제 관람 전 확인해야 할 주요 정보 제공
- 일찍 도착하기, 대중교통 이용하기, 따뜻하게 준비하기 등 관람 팁 안내
- 번호와 제목을 활용해 정보를 순서대로 전달하도록 구성

<img width="1887" height="922" alt="image" src="https://github.com/user-attachments/assets/65b0b823-31be-490a-8c3f-9dacc7526579" />

### 6. Call to Action & Footer
- 축제 참여를 유도하는 CTA 콘텐츠 구성
- 공지사항, 예매, 행사장 안내 등 관련 메뉴 제공
- 축제 장소 및 관련 정보를 확인할 수 있는 푸터 구성

<img width="1889" height="923" alt="image" src="https://github.com/user-attachments/assets/0a394959-9cf4-41af-b478-af1e5cf25fef" />
<img width="1889" height="499" alt="image" src="https://github.com/user-attachments/assets/dc1f2a0a-7b9f-4029-acd1-6ae0517a9e69" />

### 7. Interactive UI
- GSAP을 활용한 텍스트 및 콘텐츠 등장 애니메이션
- jQuery를 활용한 마우스 이벤트와 UI 상태 제어
- Swiper를 활용한 슬라이드 팝업 구현

<img width="1904" height="923" alt="image" src="https://github.com/user-attachments/assets/05ec7019-6d4f-4143-b0c0-b118082eef91" />

## 📂 Project Structure

```text
promotion_web/
├── css/
│   ├── main.css
│   ├── main.css.map
│   ├── main.scss
│   ├── main.js
│   └── mainGsap.js
├── images/
└── index.html
```

※ 실제 프로젝트의 폴더 및 파일 위치를 기준으로 작성했습니다.

## 💡 Challenges & Solutions

### 1. GSAP Scroll Animation

스크롤에 따라 콘텐츠가 자연스럽게 나타나도록 GSAP 애니메이션을 적용했습니다. 요소별 시작 위치와 지속 시간, 순차적인 등장 효과를 조정하며 콘텐츠의 흐름을 구성했습니다.

### 2. Hover Interaction

마우스 호버 시 선택된 콘텐츠와 배경 이미지가 함께 변경되도록 구현했습니다. 활성 클래스와 이미지 변경 로직을 연결해 사용자 동작에 반응하는 화면을 구성했습니다.

### 3. Popup Slider

Swiper를 활용해 슬라이드 팝업을 구성하고, 팝업 열기·닫기 동작을 구현했습니다. 슬라이드 조작과 팝업 외부 영역 클릭에 따른 닫기 동작을 구분해 사용자 인터랙션을 구성했습니다.

## 📚 What I Learned

- SCSS를 활용한 스타일 관리와 웹페이지 레이아웃 구성
- jQuery를 활용한 이벤트 처리와 DOM 제어
- GSAP을 활용한 스크롤 애니메이션 및 요소별 등장 효과 구현
- Swiper를 활용한 슬라이드 구성과 팝업 인터랙션 구현
- 시각적 디자인과 사용자 인터랙션을 함께 고려한 프로모션 사이트 제작
