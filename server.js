const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
host: "smtp.office365.com",
port: 587,
secure: false,
auth: {
user: 'Lamatalzahrani@outlook.com', 
pass: 'AA269-JBNSM-XW5WR-7B23Y-H43SF0' 
}
});


app.post('/send', async (req, res) => {
const { name, email, message } = req.body;

const mailOptions = {
from: 'Lamatalzahrani@outlook.com', 
to: 'Lamatalzahrani@outlook.com',   
subject: `رسالة جديدة من ${name}`,
text: `من: ${name}\nالإيميل: ${email}\n\nالرسالة:\n${message}`
};

try {
await transporter.sendMail(mailOptions);
res.status(200).send('تم الإرسال بنجاح');
} catch (error) {
console.error(error);
res.status(500).send('خطأ أثناء الإرسال');
}
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
                            