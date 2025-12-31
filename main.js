const form = document.querySelector('#contact form');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const data = {
name: form.name.value,
email: form.email.value,
message: form.message.value
};

try {
const response = await fetch(form.action, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data)
});

if (response.ok) {
alert('تم إرسال رسالتك بنجاح!');
form.reset();
} else {
alert('حدث خطأ، يرجى المحاولة مرة أخرى.');
}
} catch (error) {
alert('حدث خطأ في الاتصال بالخادم.');
}
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-items');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
menu.classList.toggle('show');       
overlay.classList.toggle('hidden');  
document.body.classList.toggle('body-blur'); 
});

overlay.addEventListener('click', () => {
menu.classList.remove('show');
overlay.classList.add('hidden');
document.body.classList.remove('body-blur');
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault(); 

const targetId = link.getAttribute('href').substring(1);
const targetSection = document.getElementById(targetId);

if (targetSection) {
window.scrollTo({
top: targetSection.offsetTop - 100, 
behavior: 'smooth'
});
}

if (!menu.classList.contains('translate-x-full')) {
menu.classList.add('translate-x-full');
overlay.classList.add('hidden');
document.body.classList.remove('body-blur');
}
});
});

const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
let current = sections[0].id;

sections.forEach(section => {
if (window.scrollY >= section.offsetTop - 150) {
current = section.id;
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}
});
}

window.addEventListener('scroll', setActiveLink);

