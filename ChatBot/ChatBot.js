const chatBox = document.getElementById('chatBox');

window.onload = () => {
addMessage('bot', 'مرحباً 👋 أنا المساعد الذكي، كيف أقدر أساعدك اليوم؟');
};

function sendMessage(){
const input = document.getElementById('userInput');
const text = input.value.trim();
if(!text) return;

addMessage('user', text);
input.value = '';
getBotReply(text);
}

function addMessage(sender, text){
const msg = document.createElement('div');
msg.className = sender === 'user' ? 'message user-message' : 'message bot-message';
msg.innerHTML = `<span>${text}</span>`;
chatBox.appendChild(msg);
chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input){
const msg = input.replace(/[؟?]/g, '').toLowerCase();
let reply = "جميل سؤالك! لكن ما عندي إجابة عليه الآن 😊";

if (msg.includes('خدمات')) reply = "نقدم خدمات تطوير مواقع وتطبيقات ويب حديثة باستخدام أحدث التقنيات 💻";
else if (msg.includes('تواصل')) reply = "تقدر تتواصل معنا عبر البريد الإلكتروني Lamatalzahrani@outlook.com أو نموذج الاتصال في الموقع 📩";
else if (msg.includes('موقعكم') || msg.includes('وين')) reply = "نحن في السعودية 🇸🇦، ونعمل مع عملاء من كل مكان!";
else if (msg.includes(' مين المطورة')) reply = "تم تطوير هذا البوت بواسطة لمى الزهراني";
else if (msg.includes('السلام عليكم') || msg.includes('سلام')) reply = "وعليكم السلام! 👋 كيف أقدر أساعدك اليوم؟";
else if (
msg.includes('اللغات') ||
msg.includes('المهارات') ||
msg.includes('تعرفين') ||
msg.includes('وش تستخدمين')
)reply = "أتقن استخدام التقنيات التالية: 💻<br>• HTML<br>• CSS<br>• JavaScript<br>• Bootstrap<br>• DOM<br>• Tailwind CSS";

else if (msg.includes('Chat Bot') || msg.includes('chat bot') || msg.includes('شات بوت') || msg.includes('التقنيات'))
reply = "تم تطوير هذا المشروع باستخدام HTML, CSS, و JavaScript مع إطار Tailwind CSS 💻";

else if (msg.includes('العمل') || msg.includes('التدريب')) reply = " حصلت على تدريب تعاوني في وزارة البئية والمياه والزراعة من تاريخ 02/2025 حتى 07/2025";
else if (msg.includes('المشاريع') || msg.includes('الاعمال')) reply = "نفذت مشاريع متنوعة تشمل مواقع شخصية وتطبيقات ويب تفاعلية باستخدام HTML, CSS, JS, و Tailwind CSS, Dom, Bootstrap, React.js";
else if (msg.includes('الدورات') || msg.includes('شهادات'))
reply = "لقاء طور تطبيقاتك بدون الاعتماد على الخوادم - أكاديمية طويق<br>لقاء صناعة اختبار البرمجيات - أكاديمية طويق<br>دورات منصة سطر HTML / CSS / JavaScript / DOM / Bootstrap / Tailwindcss";
else if (msg.includes('هدفك') || msg.includes('اهدافك')) reply = "طموحي أطور من مهاراتي في تطوير الويب وأشارك في بناء حلول رقمية مميزة تساعد المستخدمين ";

addMessage('bot', reply);
}

const hamburger = document.querySelector('.dropdown-hamburger');
const menu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', function(event) {
  event.stopPropagation(); 
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
  menu.style.display = 'none';
});

function selectQuestion(question) {
addMessage('user', question);
getBotReply(question);
menu.style.display = 'none'; 
}
