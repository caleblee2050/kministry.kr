// ===========================
// 네비게이션 메뉴 토글
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 메뉴 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// 스크롤 시 네비게이션 스타일 변경
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        navbar.style.padding = '1rem 0';
    }

    lastScroll = currentScroll;
});

// ===========================
// 스무스 스크롤
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // 네비게이션 높이만큼 오프셋
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// 스크롤 애니메이션 (Intersection Observer)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소들
const animatedElements = document.querySelectorAll(
    '.vision-card, .ministry-card, .support-card, .team-member, .stat-item, .budget-item'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// 예산 바 애니메이션
// ===========================
const budgetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const budgetFills = entry.target.querySelectorAll('.budget-fill');
            budgetFills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 200);
            });
            budgetObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const budgetSection = document.querySelector('.budget-breakdown');
if (budgetSection) {
    budgetObserver.observe(budgetSection);
}

// ===========================
// 폼 제출 처리
// ===========================
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 폼 데이터 수집
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // 실제 구현 시 여기에 서버로 데이터 전송 로직 추가
        console.log('Form submitted:', data);

        // 성공 메시지 표시
        alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');

        // 폼 초기화
        contactForm.reset();
    });
}

// ===========================
// 카운터 애니메이션 (통계 숫자)
// ===========================
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps 기준
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));

            if (!isNaN(number)) {
                statNumber.textContent = '0';
                animateCounter(statNumber, number);
            }

            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statObserver.observe(item);
});

// ===========================
// 페이지 로드 애니메이션
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// 반응형 메뉴 외부 클릭 시 닫기
// ===========================
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===========================
// 스크롤 인디케이터 클릭
// ===========================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===========================
// 후원 카드 클릭 시 해당 섹션으로 스크롤
// ===========================
document.querySelectorAll('.support-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===========================
// 활성 섹션 네비게이션 하이라이트
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// 이미지 레이지 로딩 (향후 이미지 추가 시 사용)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// 후원 금액 계산기 (선택적 기능)
// ===========================
const createDonationCalculator = () => {
    const calculator = document.createElement('div');
    calculator.className = 'donation-calculator';
    calculator.innerHTML = `
        <h4>후원 시뮬레이터</h4>
        <p>정기 후원 금액을 선택해보세요</p>
        <div class="calculator-options">
            <button class="calc-btn" data-amount="10000">1만원</button>
            <button class="calc-btn" data-amount="30000">3만원</button>
            <button class="calc-btn" data-amount="50000">5만원</button>
            <button class="calc-btn" data-amount="100000">10만원</button>
        </div>
        <div class="calculator-result">
            <p>선택 금액: <span id="selected-amount">0</span>원</p>
            <p>1년 후원 시: <span id="yearly-amount">0</span>원</p>
        </div>
    `;

    // 계산기를 후원 섹션에 추가 (선택적)
    // const donationBox = document.querySelector('.donation-box');
    // if (donationBox) {
    //     donationBox.appendChild(calculator);
    // }
};

// ===========================
// 콘솔 환영 메시지
// ===========================
console.log('%c킨미니스트리에 오신 것을 환영합니다!', 'color: #d97757; font-size: 20px; font-weight: bold;');
console.log('%c카렌의 친구로 함께 걸어가 주세요.', 'color: #5a9a8b; font-size: 14px;');
