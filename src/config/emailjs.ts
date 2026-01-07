import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS dashboard
const SERVICE_ID = 'YOUR_SERVICE_ID'; // You'll create this in EmailJS
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // You'll create this in EmailJS

export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};

export const sendEmail = async (templateParams: { [key: string]: any }) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
