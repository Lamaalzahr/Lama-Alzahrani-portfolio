document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("contactForm");

if (!form) return; 

form.addEventListener("submit", async (e) => {
e.preventDefault(); 

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
alert("يرجى تعبئة جميع الحقول!");
return;
}

try {
const response = await fetch("http://localhost:3000/send", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, email, message }),
});

if (response.ok) {
alert("✅ تم إرسال الرسالة بنجاح!");
form.reset();
} else {
alert("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
}
} catch (error) {
console.error(error);
alert("⚠️ تعذر الاتصال بالسيرفر.");
}
});
});
