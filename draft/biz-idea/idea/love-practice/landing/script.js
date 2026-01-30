// MBTI Demo Data
const mbtiData = {
    INFJ: {
        name: 'INFJ',
        speed: '매우 느림',
        responses: {
            '응 ㅋㅋ 진짜 좋다': {
                ai: '...그렇구나.',
                trustDelta: -5,
                feedback: 'INFJ는 "ㅋㅋ" 같은 가벼운 톤을 신뢰하지 않습니다. 진지하지 않은 사람으로 느껴질 수 있어요.',
                category: 'negative',
                suggestions: [
                    { style: '적극적', text: '정말 그래. 이런 날은 산책하면서 생각 정리하기 좋은 것 같아.' },
                    { style: '중립적', text: '맞아. 날씨 좋은 날엔 기분도 좋아지는 것 같아.' },
                    { style: '소극적', text: '응, 날씨 좋네.' }
                ]
            },
            '그러게. 산책하기 딱 좋은 날씨야.': {
                ai: '산책 좋아하는구나. 보통 어디로 가?',
                trustDelta: 3,
                feedback: '무난한 응답이에요. INFJ는 구체적인 대화를 통해 상대를 파악하려 합니다.',
                category: 'neutral',
                suggestions: [
                    { style: '적극적', text: '너도 산책 좋아해? 같이 걸으면서 얘기하면 좋을 것 같은데.' },
                    { style: '중립적', text: '응, 가끔 공원이나 한강 가. 너는?' },
                    { style: '소극적', text: '보통 집 근처를 걸어.' }
                ]
            },
            '오늘 같은 날 너는 보통 뭐 해?': {
                ai: '음... 책 읽거나 조용한 카페에서 시간 보내는 걸 좋아해. 너도 그런 거 좋아해?',
                trustDelta: 7,
                feedback: '좋아요! INFJ는 자신에게 관심을 보이고 깊이 있는 대화를 원하는 사람을 좋아합니다.',
                category: 'positive',
                suggestions: [
                    { style: '적극적', text: '나도 그런 분위기 좋아해. 다음에 같이 조용한 곳 가볼래?' },
                    { style: '중립적', text: '좋은 카페 있으면 추천해줘. 나도 그런 곳 찾고 있었어.' },
                    { style: '소극적', text: '응, 나도 조용한 곳 좋아해.' }
                ]
            }
        }
    }
};

// State
let currentTrustScore = 50;
let messageCount = 0;
let waitlistCount = 247;

// Utility Functions
function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
}

function scrollToWaitlist() {
    document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
}

function updateTrustScore(delta) {
    currentTrustScore = Math.max(0, Math.min(100, currentTrustScore + delta));
    
    const trustValueEl = document.getElementById('trust-score');
    const trustFillEl = document.getElementById('trust-fill');
    
    trustValueEl.textContent = currentTrustScore;
    trustFillEl.style.width = currentTrustScore + '%';
    
    // Animate score change
    trustValueEl.style.transform = 'scale(1.2)';
    setTimeout(() => {
        trustValueEl.style.transform = 'scale(1)';
    }, 300);
}

function addChatMessage(role, content) {
    const chatEl = document.getElementById('demo-chat');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${role}`;
    messageDiv.innerHTML = `<div class="message-bubble">${content}</div>`;
    chatEl.appendChild(messageDiv);
    
    // Scroll to bottom
    chatEl.scrollTop = chatEl.scrollHeight;
}

function showFeedback(data) {
    const feedbackEl = document.getElementById('demo-feedback');
    const headerEl = document.getElementById('feedback-header');
    const bodyEl = document.getElementById('feedback-body');
    const suggestionsEl = document.getElementById('suggestion-buttons');
    
    // Set header
    const emoji = data.trustDelta > 0 ? '✅' : data.trustDelta < 0 ? '⚠️' : '💭';
    const scoreText = data.trustDelta > 0 ? `+${data.trustDelta}` : data.trustDelta;
    headerEl.textContent = `${emoji} 호감도 ${scoreText} (현재: ${currentTrustScore}/100)`;
    headerEl.className = `feedback-header ${data.category}`;
    
    // Set body
    bodyEl.textContent = data.feedback;
    
    // Set suggestions
    suggestionsEl.innerHTML = '';
    data.suggestions.forEach((suggestion, index) => {
        const btn = document.createElement('button');
        btn.textContent = `${index + 1}. ${suggestion.style}: "${suggestion.text}"`;
        btn.onclick = () => {
            sendDemoMessage(suggestion.text);
            feedbackEl.style.display = 'none';
        };
        suggestionsEl.appendChild(btn);
    });
    
    feedbackEl.style.display = 'block';
}

function sendDemoMessage(message) {
    if (messageCount >= 3) {
        alert('데모는 3개 메시지까지만 체험 가능합니다! 전체 버전을 사용하려면 대기자 리스트에 등록하세요 😊');
        scrollToWaitlist();
        return;
    }
    
    // Hide quick replies after first message
    if (messageCount === 0) {
        document.getElementById('quick-replies').style.display = 'none';
    }
    
    // Add user message
    addChatMessage('user', message);
    messageCount++;
    
    // Get response data
    const responseData = mbtiData.INFJ.responses[message];
    
    if (!responseData) {
        // Generic response for custom messages
        setTimeout(() => {
            addChatMessage('ai', '그렇구나...');
            updateTrustScore(-2);
            showFeedback({
                trustDelta: -2,
                category: 'neutral',
                feedback: '데모에서는 미리 준비된 답변만 분석할 수 있어요. 실제 서비스에서는 어떤 메시지든 분석 가능합니다!',
                suggestions: [
                    { style: '적극적', text: '오늘 같은 날 너는 보통 뭐 해?' },
                    { style: '중립적', text: '그러게. 산책하기 딱 좋은 날씨야.' },
                    { style: '소극적', text: '응, 날씨 좋네.' }
                ]
            });
        }, 800);
        return;
    }
    
    // Simulate AI thinking
    setTimeout(() => {
        // Add AI response
        addChatMessage('ai', responseData.ai);
        
        // Update trust score
        updateTrustScore(responseData.trustDelta);
        
        // Show feedback
        showFeedback(responseData);
        
        // Clear input
        document.getElementById('demo-input').value = '';
    }, 800);
}

function sendDemoMessageFromInput() {
    const input = document.getElementById('demo-input');
    const message = input.value.trim();
    
    if (message) {
        sendDemoMessage(message);
    }
}

function handleDemoKeyPress(event) {
    if (event.key === 'Enter') {
        sendDemoMessageFromInput();
    }
}

function submitWaitlist() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('이메일을 입력해주세요!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요!');
        return;
    }
    
    // Simulate API call
    console.log('Waitlist signup:', email);
    
    // Update count
    waitlistCount++;
    document.getElementById('waitlist-count').textContent = waitlistCount;
    document.getElementById('waitlist-count-footer').textContent = waitlistCount;
    
    // Show success message
    document.querySelector('.waitlist-form').style.display = 'none';
    document.querySelector('.waitlist-note').style.display = 'none';
    document.getElementById('waitlist-success').style.display = 'block';
    
    // Save to localStorage (for demo purposes)
    const waitlist = JSON.parse(localStorage.getItem('lovePracticeWaitlist') || '[]');
    waitlist.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('lovePracticeWaitlist', JSON.stringify(waitlist));
    
    // Optional: Send to Google Sheets or your backend
    // sendToGoogleSheets(email);
}

// Optional: Google Sheets Integration
function sendToGoogleSheets(email) {
    // Replace with your Google Sheets Web App URL
    const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL';
    
    fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            timestamp: new Date().toISOString(),
            source: 'landing_page'
        })
    }).catch(err => console.log('Sheet error:', err));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Load saved waitlist count from localStorage
    const savedWaitlist = JSON.parse(localStorage.getItem('lovePracticeWaitlist') || '[]');
    if (savedWaitlist.length > 0) {
        waitlistCount = 247 + savedWaitlist.length;
        document.getElementById('waitlist-count').textContent = waitlistCount;
        document.getElementById('waitlist-count-footer').textContent = waitlistCount;
    }
    
    // Add subtle animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.problem-card, .solution-card, .feature-card, .pricing-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Export functions for inline onclick handlers
window.scrollToDemo = scrollToDemo;
window.scrollToWaitlist = scrollToWaitlist;
window.sendDemoMessage = sendDemoMessage;
window.sendDemoMessageFromInput = sendDemoMessageFromInput;
window.handleDemoKeyPress = handleDemoKeyPress;
window.submitWaitlist = submitWaitlist;
