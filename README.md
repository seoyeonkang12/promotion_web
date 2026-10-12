# 🎆 2026 Seoul Fireworks Festival

> **당신의 빛을 찾아서**
> 
> 한화 서울세계불꽃축제를 주제로 제작한 프로모션 웹사이트 리디자인 프로젝트입니다.  
> 불꽃축제의 화려한 분위기를 어두운 배경과 오렌지 포인트 컬러로 표현하고, 스크롤 애니메이션과 인터랙션을 활용해 몰입감 있는 웹 경험을 구현했습니다.

🔗 [서울불꽃축제 프로모션 사이트 바로가기](https://seoyeonkang12.github.io/promotion_web/)

<img width="1902" height="945" alt="image" src="https://github.com/user-attachments/assets/1125be4d-d39d-488f-b094-0c6bc7e0e086" />

## 📌 Project Overview

- **Project :** 개인 프로젝트
- **Date :** 2026.09-2026.09 (총 3일)
- **Target :** PC 화면 중심
- **Role :** 기획, UI 디자인, 퍼블리싱 및 인터랙션 구현

### Project Goal

불꽃축제의 시각적인 매력을 강조하고, 행사 정보와 프로그램을 직관적으로 전달하는 프로모션 웹사이트를 제작했습니다.  
섹션별 레이아웃과 인터랙션을 구성해 사용자가 축제 정보를 자연스럽게 탐색할 수 있도록 설계했습니다.

## 🛠️ Tech Stack

- **Markup :** HTML5
- **Styling :** SCSS
- **Interaction :** jQuery
- **Animation :** GSAP, ScrollTrigger
- **Slider :** Swiper

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

## ✨ Key Features

### 1. Full-page Section Navigation

- 마우스 휠 방향에 따라 이전·다음 섹션으로 이동하는 스크롤 기능 구현
- animate()를 활용한 부드러운 섹션 전환
- TOP 버튼 클릭 시 페이지 최상단으로 이동

### 2. Interactive Fireworks Teams

- 한국, 영국, 미국 팀 영역에 마우스를 올리면 활성화 상태 변경
- 팀별 배경 이미지 전환으로 시각적인 피드백 제공
- 팀 영역 클릭 시 해당 팀의 상세 정보를 팝업 슬라이드로 표시

### 3. Popup & Slider

- Swiper를 활용한 팀별 상세 정보 슬라이드 구현
- 선택한 팀과 팝업 슬라이드 연동
- 닫기 버튼 및 팝업 바깥 영역 클릭을 통한 닫기 기능
- 팝업이 열린 동안 배경 페이지의 스크롤 제한

### 4. Scroll-triggered Animation

- ScrollTrigger를 활용한 섹션별 애니메이션 실행 시점 제어
- opacity, x, y 속성을 활용한 콘텐츠 등장 효과
- stagger를 적용한 순차적인 텍스트 및 콘텐츠 애니메이션
- CTA 영역에 반복되는 그라데이션 텍스트 효과 적용

## 💻 Code Highlights

### 1. Mousewheel Section Navigation

마우스 휠의 방향에 따라 이전 또는 다음 섹션으로 이동하도록 구현했습니다.  
팝업이 열린 상태에서는 섹션 이동을 제한해 팝업과 페이지 스크롤의 간섭을 줄였습니다.

### 2. Dynamic Background Change

불꽃축제 팀 영역의 마우스 오버 이벤트를 감지하고, 선택한 요소의 인덱스에 따라 배경 이미지를 변경하도록 구현했습니다.

<img width="601" height="344" alt="image" src="https://github.com/user-attachments/assets/464346c1-25cc-4f6d-90b0-fc9d39b2238d" />

### 3. Swiper Popup Interaction

팀 영역을 클릭하면 팝업을 표시하고, slideToLoop()를 이용해 선택한 팀에 해당하는 슬라이드로 이동하도록 구현했습니다. 팝업 상태에 따라 클래스와 배경 페이지의 스크롤을 제어했습니다.

<img width="705" height="701" alt="image" src="https://github.com/user-attachments/assets/306d85ee-7170-41ab-9662-b5099d1fb096" />

### 4. Scroll-triggered Animation

GSAP의 from()과 to()를 활용해 요소의 투명도와 위치를 조절하고, ScrollTrigger로 특정 섹션이 화면에 진입할 때 애니메이션이 실행되도록 구성했습니다.

<img width="587" height="352" alt="image" src="https://github.com/user-attachments/assets/9f56e133-8902-47c7-b910-43cea5bf503a" />

### 5. Animated Gradient Text

CTA 영역의 제목에 그라데이션 위치를 반복적으로 변경하는 애니메이션을 적용해 시각적인 강조 효과를 구현했습니다.

## 🔍 Key Implementations

### Structure & Styling

- SCSS 변수와 믹스인을 활용해 공통 스타일을 관리했습니다.
- 중첩 선택자를 활용해 섹션별 스타일을 구분했습니다.
- Flexbox와 Grid, 고정 위치 지정 등을 활용해 콘텐츠 레이아웃을 구성했습니다.

### Interaction & Animation

- jQuery 이벤트를 활용해 마우스 오버, 클릭, 스크롤에 반응하는 인터랙션을 구현했습니다.
- Swiper와 팝업을 연동하고, 팝업 상태에 따라 페이지 스크롤을 제어했습니다.
- GSAP과 ScrollTrigger를 활용해 콘텐츠가 화면에 진입하는 시점에 맞춰 애니메이션을 실행했습니다.

### Improvements to Consider

- 반복되는 GSAP 애니메이션 코드를 공통 함수로 분리해 유지보수성을 개선할 수 있습니다.
- 중복된 SCSS 규칙을 정리하고 공통 스타일의 재사용성을 높일 수 있습니다.
- 고정 너비와 높이를 사용하는 레이아웃을 다양한 화면 크기에 맞게 보완할 수 있습니다.
- 섹션 이동 시 첫 번째·마지막 섹션 처리와 팝업 상태를 추가로 점검해 예외 상황에 대한 안정성을 높일 수 있습니다.

## 📂 Main Sections

### 1. Main Visual
- 불꽃 이미지와 어두운 배경을 활용한 메인 비주얼 구성
- 큰 타이포그래피를 활용해 시각적 주목도 강화
- 축제 장소 및 행사 일정 정보 제공

<img width="1902" height="945" alt="image" src="https://github.com/user-attachments/assets/7df2090d-022d-4157-9974-43d4db44fbb7" />

### 2. Festival Overview
- 축제의 기획 의도와 콘셉트를 소개하는 콘텐츠 구성
- 타이포그래피와 여백을 활용해 콘텐츠의 가독성 강화
- 스크롤 애니메이션을 활용한 시각적 흐름 연출

<img width="1903" height="946" alt="image" src="https://github.com/user-attachments/assets/67bca398-2f42-4def-94d8-cb798c9e7b9e" />

### 3. Fireworks Team
- 한국, 영국, 미국 불꽃연출팀 소개
- 팀별 불꽃쇼 콘셉트와 연출 특징을 전달하는 콘텐츠 구성
- 마우스 호버에 따른 활성 상태 및 배경 이미지 변경 인터랙션 구현

<img width="1899" height="947" alt="image" src="https://github.com/user-attachments/assets/9baea6ac-cd7b-4f04-b4d4-a98f1a7dc320" />

### 4. Event Program
- 사전행사, 공식행사, 불꽃쇼, 인파 해산, 클린 캠페인 등 행사 일정 안내
- 시간과 프로그램 정보를 구분해 쉽게 확인할 수 있도록 구성
- 이미지와 텍스트를 조합한 콘텐츠 레이아웃 구현

<img width="1900" height="946" alt="image" src="https://github.com/user-attachments/assets/1e9acc3e-04c4-4276-b112-2b2258d4f918" />

### 5. Night Guide
- 축제 관람 전 확인해야 할 주요 정보 제공
- 일찍 도착하기, 대중교통 이용하기, 따뜻하게 준비하기 등 관람 팁 안내
- 번호와 제목을 활용해 정보를 순서대로 전달하도록 구성

<img width="1899" height="946" alt="image" src="https://github.com/user-attachments/assets/2044fa91-e90e-425e-b76c-e26bec338a7f" />

### 6. Call to Action & Footer
- 축제 참여를 유도하는 CTA 콘텐츠 구성
- 공지사항, 예매, 행사장 안내 등 관련 메뉴 제공
- 축제 장소 및 관련 정보를 확인할 수 있는 푸터 구성

<img width="1900" height="947" alt="image" src="https://github.com/user-attachments/assets/f0a3db9a-378a-4f3c-be1f-dff6e6b6d3a7" />
<img width="1900" height="462" alt="image" src="https://github.com/user-attachments/assets/f0a677d7-b70e-4dce-b0d3-7e6b5e5e1248" />

### 7. Interactive UI
- GSAP을 활용한 텍스트 및 콘텐츠 등장 애니메이션
- jQuery를 활용한 마우스 이벤트와 UI 상태 제어
- Swiper를 활용한 슬라이드 팝업 구현

<img width="1905" height="946" alt="image" src="https://github.com/user-attachments/assets/d6c212b5-f6c4-45e2-8431-0a05dc05f44a" />

## 📝 Retrospective

이번 프로젝트를 통해 HTML과 SCSS를 활용한 화면 구성뿐 아니라 jQuery를 이용한 이벤트 처리, Swiper를 활용한 슬라이드 연동, GSAP과 ScrollTrigger를 활용한 애니메이션 구현을 경험했습니다.

특히 여러 인터랙션이 함께 동작하는 화면을 구성하면서 요소의 상태와 이벤트 실행 순서를 고려하는 것이 중요하다는 점을 배웠습니다. 앞으로는 반응형 레이아웃과 코드 재사용성을 개선하고, 유지보수하기 쉬운 구조를 구현하는 방향으로 발전시키고자 합니다.
