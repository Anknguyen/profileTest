// contactRoutes
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST endpoint to handle form submission
router.post('/api/contact', (req, res) => {
    const formData = req.body;
    console.log('Form data:', formData);

    // Email options
    const mailOptions = {
        from: formData.email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${formData.name}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

module.exports = router;