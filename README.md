# 🎆 2026 서울세계불꽃축제

> **당신의 빛을 찾아서**
> 
> 한화 서울세계불꽃축제를 주제로 제작한 프로모션 웹사이트 리디자인 프로젝트입니다.  
> 어두운 배경과 오렌지 포인트 컬러를 활용해 불꽃축제의 분위기를 표현하고, 섹션별 인터랙션과 스크롤 애니메이션을 통해 몰입감 있는 웹 경험을 구현했습니다.

🔗 [서울불꽃축제 프로모션 사이트 바로가기](https://seoyeonkang12.github.io/promotion_web/)

<img width="1902" height="945" alt="image" src="https://github.com/user-attachments/assets/7df2090d-022d-4157-9974-43d4db44fbb7" />

## 📌 프로젝트 개요

- **프로젝트 유형 :** 개인 프로젝트
- **개발 기간 :** 2026.09-2026.09 (총 3일)
- **담당 역할 :** 기획, UI 디자인, 퍼블리싱 및 인터랙션 구현
- **작업 환경 :** PC 중심
- **주요 기술 :** HTML5, CSS3, jQuery, GSAP

## 🛠️ 기술 스택

- **Markup :** HTML5
- **Styling :** SCSS
- **Interaction :** jQuery
- **Animation :** GSAP, ScrollTrigger
- **Slider :** Swiper

## 🎯 프로젝트 목표

- 어두운 배경과 오렌지 컬러를 활용한 축제 분위기 표현
- 섹션 이동과 팀별 인터랙션을 통한 사용자 경험 강화
- GSAP과 Swiper를 활용한 동적인 콘텐츠 구현

## ✨ 주요 기능

### 1. 섹션별 화면 이동

- 마우스 휠 방향에 따른 이전·다음 섹션 이동
- `animate()`를 활용한 부드러운 섹션 전환
- TOP 버튼 클릭 시 페이지 최상단으로 이동
- 팝업 활성화 상태에 따른 섹션 이동 제어

<!-- 섹션 이동 GIF 또는 스크린샷 삽입 -->

### 2. 불꽃축제 팀별 인터랙션

- 한국, 영국, 미국 팀 영역에 마우스를 올리면 활성 상태 변경
- 선택한 팀에 따라 배경 이미지 전환
- 팀 영역 클릭 시 해당 팀의 상세 정보 팝업 표시

### 3. 팝업 및 슬라이더 연동

- Swiper를 활용한 팀별 상세 정보 슬라이드 구현
- 선택한 팀과 팝업 슬라이드 연동
- 닫기 버튼 및 팝업 바깥 영역 클릭을 통한 닫기 기능
- 팝업이 열린 동안 배경 페이지의 스크롤 제한

## 💻 핵심 코드 구현

### 1. 마우스 휠 기반 섹션 이동

마우스 휠 방향에 따라 이전 또는 다음 섹션으로 이동하도록 구현했습니다.  
팝업이 열린 상태에서는 섹션 이동을 제한해 인터랙션 간 충돌을 방지했습니다.

**💡 셀프 코드 리뷰**

- 마우스 휠 이벤트를 활용한 이동 방향 감지
- `animate()`를 활용한 섹션 전환
- 팝업 상태에 따른 이벤트 제어를 통한 동작 충돌 방지

~~~javascript
$('section').mousewheel(function(event, delta){
  if($('.fireworks_popup').hasClass('on_pop')) {
   return;
  }

  if(delta > 0) { 
    point = $(this).prev().offset().top;
  } else if(delta < 0) {
    point = $(this).next().offset().top;
  }

  $('html, body').stop().animate({scrollTop: point}, 500);
}); //mousewheel_event
~~~

### 2. 팀 선택에 따른 배경 이미지 변경

불꽃축제 팀 영역의 마우스 오버 이벤트를 감지하고, 선택한 요소의 인덱스에 따라 배경 이미지를 변경하도록 구현했습니다.

**💡 셀프 코드 리뷰**

- hover() 이벤트를 활용한 마우스 오버 처리
- addClass()와 removeClass()를 활용한 활성 상태 전환
- 선택한 팀에 따른 배경 이미지 변경

~~~javascript
$('.fireworks .txt>div').hover(function() {
  $('.fireworks .txt>div').removeClass('on');
  $(this).addClass('on');
  
  const index = $(this).index();

  if(index === 0) {
    $('.fireworks_bg').css('background-image', 'url("./images/bg_03.png")'
    );
  } else if (index === 1) {
    $('.fireworks_bg').css('background-image', 'url("./images/bg_03-2.png")'
    );
  } else if (index === 2){
    $('.fireworks_bg').css('background-image', 'url("./images/bg_03-3.png")'
    );
  }
}); //fireworks
~~~

### 3. Swiper 팝업 연동

선택한 팀에 맞는 상세 정보가 표시되도록 팝업과 Swiper 슬라이드를 연동했습니다.

**💡 셀프 코드 리뷰**

- `slideToLoop()`를 활용한 선택 팀과 슬라이드 연결
- 팝업 활성화 클래스에 따른 열기 · 닫기 상태 관리
- 팝업 표시 중 배경 스크롤 제어

~~~javascript
$('.fireworks .txt>div').click(function() {
  let index = $(this).index();

  $('.swiper').addClass('on_pop');
  $('body').addClass('popup_open');
  swiper.slideToLoop(index, 500);
});

$('.swiper .close').click(function(){
  $('.swiper').removeClass('on_pop');
  $('body').removeClass('popup_open');
}); 

$('.swiper').click(function(e){
  if($(e.target).closest('.swiper-slide > div').length) {return;}

  if($(e.target).closest('.swiper-button-next, .swiper-button-prev').length) {return;}

  if($(e.target).closest('.close').length) {return;}

  $('.swiper').removeClass('on_pop');
  $('body').removeClass('popup_open');
}); //fireworks_popup
~~~

### 4. 스크롤 기반 애니메이션

GSAP과 ScrollTrigger를 활용해 스크롤 위치에 따라 텍스트와 콘텐츠가 나타나는 애니메이션을 구현했습니다.

**💡 셀프 코드 리뷰**

- gsap.from()과 gsap.fromTo()를 활용한 시작·종료 상태 설정
- opacity, x, y 속성을 활용한 요소 등장 효과
- stagger를 활용한 순차적인 애니메이션 적용
- ScrollTrigger를 활용한 스크롤 위치 기반 애니메이션 실행

~~~javascript


### 5. Animated Gradient Text

CTA 영역의 제목에 그라데이션 위치를 반복적으로 변경하는 애니메이션을 적용해 시각적인 강조 효과를 구현했습니다.

## 🔍 주요 구현 내용

### 구조 및 스타일링

- SCSS 변수와 믹스인을 활용해 공통 스타일을 관리했습니다.
- 중첩 선택자를 활용해 섹션별 스타일을 구분했습니다.
- Flexbox와 Grid, 고정 위치 지정 등을 활용해 콘텐츠 레이아웃을 구성했습니다.

### 인터랙션 및 애니메이션

- jQuery 이벤트를 활용해 마우스 오버, 클릭, 스크롤에 반응하는 인터랙션을 구현했습니다.
- Swiper와 팝업을 연동하고, 팝업 상태에 따라 페이지 스크롤을 제어했습니다.
- GSAP과 ScrollTrigger를 활용해 콘텐츠가 화면에 진입하는 시점에 맞춰 애니메이션을 실행했습니다.

### 개선 방향

- 반복되는 GSAP 애니메이션 코드를 공통 함수로 분리해 유지보수성을 개선할 수 있습니다.
- 중복된 SCSS 규칙을 정리하고 공통 스타일의 재사용성을 높일 수 있습니다.
- 고정 너비와 높이를 사용하는 레이아웃을 다양한 화면 크기에 맞게 보완할 수 있습니다.
- 섹션 이동 시 첫 번째·마지막 섹션 처리와 팝업 상태를 추가로 점검해 예외 상황에 대한 안정성을 높일 수 있습니다.

## 📂 주요 화면 구성

### 1. 메인 비주얼
- 불꽃 이미지와 어두운 배경을 활용한 메인 비주얼 구성
- 큰 타이포그래피를 활용해 시각적 주목도 강화
- 축제 장소 및 행사 일정 정보 제공

<img width="1902" height="945" alt="image" src="https://github.com/user-attachments/assets/7df2090d-022d-4157-9974-43d4db44fbb7" />

### 2. 축제 소개
- 축제의 기획 의도와 콘셉트를 소개하는 콘텐츠 구성
- 타이포그래피와 여백을 활용해 콘텐츠의 가독성 강화
- 스크롤 애니메이션을 활용한 시각적 흐름 연출

<img width="1903" height="946" alt="image" src="https://github.com/user-attachments/assets/67bca398-2f42-4def-94d8-cb798c9e7b9e" />

### 3. 불꽃연출팀 소개
- 한국, 영국, 미국 불꽃연출팀 소개
- 팀별 불꽃쇼 콘셉트와 연출 특징을 전달하는 콘텐츠 구성
- 마우스 호버에 따른 활성 상태 및 배경 이미지 변경 인터랙션 구현

<img width="1899" height="947" alt="image" src="https://github.com/user-attachments/assets/9baea6ac-cd7b-4f04-b4d4-a98f1a7dc320" />

### 4. 행사 프로그램
- 사전행사, 공식행사, 불꽃쇼, 인파 해산, 클린 캠페인 등 행사 일정 안내
- 시간과 프로그램 정보를 구분해 쉽게 확인할 수 있도록 구성
- 이미지와 텍스트를 조합한 콘텐츠 레이아웃 구현

<img width="1900" height="946" alt="image" src="https://github.com/user-attachments/assets/1e9acc3e-04c4-4276-b112-2b2258d4f918" />

### 5. 관람 가이드
- 축제 관람 전 확인해야 할 주요 정보 제공
- 일찍 도착하기, 대중교통 이용하기, 따뜻하게 준비하기 등 관람 팁 안내
- 번호와 제목을 활용해 정보를 순서대로 전달하도록 구성

<img width="1899" height="946" alt="image" src="https://github.com/user-attachments/assets/2044fa91-e90e-425e-b76c-e26bec338a7f" />

### 6. 참여 유도 및 푸터
- 축제 참여를 유도하는 CTA 콘텐츠 구성
- 공지사항, 예매, 행사장 안내 등 관련 메뉴 제공
- 축제 장소 및 관련 정보를 확인할 수 있는 푸터 구성

<img width="1900" height="947" alt="image" src="https://github.com/user-attachments/assets/f0a3db9a-378a-4f3c-be1f-dff6e6b6d3a7" />
<img width="1900" height="462" alt="image" src="https://github.com/user-attachments/assets/f0a677d7-b70e-4dce-b0d3-7e6b5e5e1248" />

### 7. 인터랙티브 UI
- GSAP을 활용한 텍스트 및 콘텐츠 등장 애니메이션
- jQuery를 활용한 마우스 이벤트와 UI 상태 제어
- Swiper를 활용한 슬라이드 팝업 구현

<img width="1905" height="946" alt="image" src="https://github.com/user-attachments/assets/d6c212b5-f6c4-45e2-8431-0a05dc05f44a" />

## 📂 프로젝트 폴더 구조

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

## 📝 프로젝트 회고

이번 프로젝트를 통해 HTML과 SCSS를 활용한 화면 구성뿐 아니라 jQuery를 이용한 이벤트 처리, Swiper를 활용한 슬라이드 연동, GSAP과 ScrollTrigger를 활용한 애니메이션 구현을 경험했습니다.

특히 여러 인터랙션이 함께 동작하는 화면을 구성하면서 요소의 상태와 이벤트 실행 순서를 고려하는 것이 중요하다는 점을 배웠습니다. 앞으로는 반응형 레이아웃과 코드 재사용성을 개선하고, 유지보수하기 쉬운 구조를 구현하는 방향으로 발전시키고자 합니다.
