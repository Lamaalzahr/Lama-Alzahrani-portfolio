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
