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
- **주요 기술 :** HTML5, SCSS, jQuery, GSAP

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

<!-- 팀별 배경 전환 GIF 또는 스크린샷 삽입 -->

### 3. 팝업 및 슬라이더 연동

- Swiper를 활용한 팀별 상세 정보 슬라이드 구현
- 선택한 팀과 팝업 슬라이드 연동
- 닫기 버튼 및 팝업 바깥 영역 클릭을 통한 닫기 기능
- 팝업이 열린 동안 배경 페이지의 스크롤 제한

<!-- 팝업 및 슬라이드 GIF 또는 스크린샷 삽입 -->

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

마우스 오버한 팀의 인덱스에 따라 활성 클래스와 배경 이미지를 전환하도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `hover()` 이벤트를 활용한 마우스 오버 처리
- `addClass()`와 `removeClass()`를 활용한 활성 상태 전환
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

선택한 팀에 해당하는 상세 정보가 표시되도록 팝업과 Swiper 슬라이드를 연동했습니다.

**💡 셀프 코드 리뷰**

- `slideToLoop()`를 활용한 선택 팀과 슬라이드 연결
- `addClass()`와 `removeClass()`를 활용한 팝업 열기·닫기 상태 관리
- body의 popup_open 클래스를 활용한 배경 스크롤 제어

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

GSAP과 ScrollTrigger를 활용해 스크롤 위치에 따라 텍스트와 콘텐츠가 순차적으로 나타나도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `gsap.from()`과 `gsap.to()`를 활용한 시작·종료 상태 설정
- `opacity`, `x`, `y` 속성을 활용한 요소 등장 효과
- `stagger`를 활용한 순차적인 애니메이션 적용
- `ScrollTrigger`를 활용한 스크롤 위치 기반 애니메이션 실행

~~~javascript
gsap.from([mainp1, mainp2, mainp3, mainp4, span1, span2], {
  opacity: 0,
  duration: 0.5,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.main_visual',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});

gsap.to(starP, {
  opacity: 1,
  duration: 1.3,
  x: 20,
  scrollTrigger: {
    trigger: '.view_left',
    start: 'top center',
    toggleActions: 'restart none restart none',
  }
});
~~~

### 5. 그라데이션 텍스트 애니메이션

GSAP으로 텍스트의 그라데이션 위치를 애니메이션 처리해 CTA 영역의 시각적 강조 효과를 구현했습니다.

**💡 셀프 코드 리뷰**

- linear-gradient()를 활용한 텍스트 그라데이션 구성
- background-clip: text와 투명한 텍스트 색상을 활용한 그라데이션 표현
- GSAP의 backgroundPosition 애니메이션을 활용한 그라데이션 이동

~~~css
.title {
  font-family: "Special Gothic Expanded One", sans-serif;
  background-image: linear-gradient(to right, $white 0%, $white 35%, $point-color 65%, $point-color 100%);
  background-size: 200% 100%;
  background-clip: text;
  color: transparent;
  font-size: 50px;
  margin-bottom: 30px;
  p {
    font-size: 20px;
  }
} //title
~~~
~~~javascript
gsap.to(underTitle, {
  backgroundPosition: '100% 50%',
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});
~~~

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
