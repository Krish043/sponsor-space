
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'test@gmail.com', // Your email
        pass: '12345678'  // Your email password or app-specific password
      }
    });

    const mailOptions = {
      from: email,
      to: 'krisjchetangangajaliya@gmail.com', // Your receiving email
      subject: `Contact Us Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
