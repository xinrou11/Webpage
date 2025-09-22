// Navbar shrink on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  if (window.scrollY > 40) {
    nav.classList.add('shrink');
    navLinks.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
    navLinks.classList.remove('shrink');
  }
});
// Hamburger menu toggle for responsive nav
window.addEventListener('DOMContentLoaded', function() {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }
});

// Simple AI bot logic for all pages
function sendMessage() {
  const userInput = document.getElementById('user-input');
  const chatLog = document.getElementById('chat-log');
  if (!userInput || !chatLog) return;
  const msg = userInput.value.trim();
  if (!msg) return;
  appendMessage('You', msg);
  userInput.value = '';
  setTimeout(() => {
    appendMessage('AI Bot', getAIResponse(msg));
  }, 600);
}
function appendMessage(sender, text) {
  const chatLog = document.getElementById('chat-log');
  if (!chatLog) return;
  const div = document.createElement('div');
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
  // Save chat to sessionStorage
  saveChatToSession();
}
function saveChatToSession() {
  const chatLog = document.getElementById('chat-log');
  if (!chatLog) return;
  sessionStorage.setItem('droneChat', chatLog.innerHTML);
}
function loadChatFromSession() {
  const chatLog = document.getElementById('chat-log');
  if (!chatLog) return;
  const saved = sessionStorage.getItem('droneChat');
  if (saved) chatLog.innerHTML = saved;
}
function getAIResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('service')) {
    return 'We offer drone repair, maintenance, upgrades, and AI-based performance analysis. Our expert team ensures your drones are always in top condition.';
  }
  if (msg.includes('product')) {
    return 'Our products include advanced drones for various industries, customizable accessories, and AI-powered diagnostic tools. Let us know your needs!';
  }
  if (msg.includes('about') || msg.includes('company')) {
    return 'DroneServ is a leader in drone maintenance, repair, and AI-powered diagnostics. Our mission is to keep your drones flying safely and efficiently with the latest technology and expert service.';
  }
  if (msg.includes('contact') || msg.includes('email') || msg.includes('phone')) {
    return 'You can contact us at info@droneserv.com or call +1-800-DRONE-SV. Visit our Contact page for more details or to send us a message.';
  }
  if (msg.includes('location') || msg.includes('address')) {
    return 'Our main office is at 731 E 6th St, Erie, PA 16503, USA. We also have a location in Singapore.';
  }
  if (msg.includes('hello') || msg.includes('hi')) {
    return 'Hello! How can I assist you with our drone services, products, or support?';
  }
  if (msg.includes('help') || msg.includes('support')) {
    return 'I can help you with information about our drones, services, products, and how to contact us. Just ask!';
  }
  return 'I am an AI bot for DroneServ. Ask me about our company, drones, services, products, or how to get in touch!';
}
window.addEventListener('DOMContentLoaded', function() {
  loadChatFromSession();
  const userInput = document.getElementById('user-input');
  if (userInput) {
    userInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendMessage();
    });
  }
});
// Contact form handler (for contact.html)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formResponse').textContent = 'Thank you for contacting us!';
    form.reset();
  });
}
