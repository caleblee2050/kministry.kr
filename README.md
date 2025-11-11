# 킨미니스트리 (KEEN Ministry) 홈페이지

카렌의 친구로 함께 걷는 킨미니스트리의 공식 홈페이지입니다.

## 프로젝트 개요

**KEEN (Karen Equipped Embracing Nations)** 킨미니스트리는 듣고 동행하는 관계 중심의 카렌 난민 선교를 수행하는 비영리단체입니다.

### 주요 특징

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 최적화)
- ✨ 부드러운 애니메이션 및 인터랙션
- 🎨 감성적이면서도 전문적인 디자인
- 💝 후원을 이끌어낼 수 있는 스토리텔링
- ⚡ 빠른 로딩 속도 및 최적화

## 파일 구조

```
kministry.kr/
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── script.js       # JavaScript 파일
└── README.md       # 이 파일
```

## 페이지 구성

### 1. Hero Section
- 임팩트 있는 첫 화면
- 명확한 CTA(Call-to-Action) 버튼

### 2. 소개 (About)
- 킨미니스트리의 시작 스토리
- 비전, 미션, 핵심가치

### 3. 카렌족 소개
- 카렌족에 대한 설명
- 주요 통계 및 현황

### 4. 사역 (Ministry)
- 4가지 주요 사역 소개
  - 방과후 교육
  - 이중언어 예배
  - 심리정서 돌봄
  - 리더십 양성
- 카렌월드와이드교회 정보

### 5. 팀 (Team)
- 5명의 선교사 소개
- Joshua, Caleb, Sam, Seth, Palang

### 6. 후원 (Support)
- 4가지 참여 방법
  - 재정 후원
  - 재능 기부
  - 기회 연결
  - 기도 동역
- 월 500만 원 예산 내역 시각화
- 후원 계좌 정보

### 7. 연락 (Contact)
- 연락처 정보
- 문의 폼

## 사용 방법

### 1. 로컬에서 실행

웹 브라우저로 `index.html` 파일을 직접 열어서 확인할 수 있습니다.

```bash
# 파일 탐색기에서 index.html을 더블클릭하거나
# 또는 간단한 웹 서버 실행 (Python이 설치되어 있다면)
python -m http.server 8000
# 그 후 브라우저에서 http://localhost:8000 접속
```

### 2. 웹 호스팅

GitHub Pages, Netlify, Vercel 등의 정적 사이트 호스팅 서비스를 이용하여 무료로 배포할 수 있습니다.

#### GitHub Pages 배포 예시:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repository-url]
git push -u origin main
```

## 커스터마이징 가이드

### 1. 색상 변경
`styles.css` 파일의 `:root` 섹션에서 색상 변수를 수정하세요:

```css
:root {
    --primary-color: #d97757;      /* 주요 색상 */
    --secondary-color: #5a9a8b;    /* 보조 색상 */
    --accent-color: #f4a261;       /* 강조 색상 */
}
```

### 2. 내용 수정
`index.html` 파일에서 텍스트 내용을 직접 수정할 수 있습니다.

### 3. 후원 계좌 정보 업데이트
`index.html` 파일의 후원 섹션에서 계좌 정보를 실제 정보로 변경하세요:

```html
<p class="account-number">국민은행 123456-78-910111</p>
<p class="account-name">예금주: 킨미니스트리</p>
```

### 4. 연락처 정보 업데이트
`index.html` 파일의 연락 섹션에서 실제 연락처로 변경하세요:

```html
<p>keen@ministry.kr</p>
<p>010-1234-5678</p>
```

### 5. 팀 사진 추가
현재는 placeholder를 사용하고 있습니다. 실제 사진을 추가하려면:

1. `images` 폴더를 만들고 사진을 저장
2. `index.html`에서 해당 부분 수정:

```html
<div class="member-photo">
    <img src="images/joshua.jpg" alt="Joshua">
</div>
```

3. `styles.css`의 `.photo-placeholder` 스타일 제거 또는 수정

### 6. Hero 배경 이미지 변경
`styles.css`의 `.hero` 섹션에서 배경 이미지를 변경할 수 있습니다:

```css
.hero {
    background-image: url('images/hero-background.jpg');
}
```

## 폼 제출 기능 추가

현재 문의 폼은 클라이언트 측에서만 동작합니다. 실제 이메일 전송 기능을 추가하려면:

### 옵션 1: EmailJS 사용 (무료)
1. https://www.emailjs.com/ 가입
2. 템플릿 설정
3. `script.js`의 폼 제출 부분에 EmailJS 코드 추가

### 옵션 2: Google Forms 연동
1. Google Forms 생성
2. 폼 action을 Google Forms URL로 변경

### 옵션 3: 백엔드 서버 구축
Node.js, PHP 등을 사용하여 자체 백엔드 구축

## 향후 개선 사항

- [ ] 실제 팀 사진 추가
- [ ] 사역 활동 갤러리 추가
- [ ] 블로그/소식 섹션 추가
- [ ] 다국어 지원 (한국어/영어/카렌어)
- [ ] 온라인 후원 결제 시스템 연동
- [ ] 사역 보고서 다운로드 기능
- [ ] 뉴스레터 구독 기능
- [ ] SEO 최적화
- [ ] 소셜 미디어 연동

## 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Google Fonts (Noto Sans KR, Noto Serif KR)

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저

## 라이선스

이 프로젝트는 킨미니스트리의 소유이며, 사역 목적으로 자유롭게 사용할 수 있습니다.

## 문의

홈페이지 관련 문의사항은 아래로 연락주세요:
- 이메일: keen@ministry.kr
- 전화: 010-1234-5678

---

**킨미니스트리 KEEN Ministry**
*Karen Equipped Embracing Nations*
듣고 동행하는 관계 중심의 카렌 난민 선교
