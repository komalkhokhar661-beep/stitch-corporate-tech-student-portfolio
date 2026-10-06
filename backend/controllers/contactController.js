import { dbService } from '../config/db.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const savedMessage = await dbService.saveContact({
      name,
      email,
      subject,
      message
    });

    console.log(`📩 [New Contact Submission] From: ${name} <${email}> | Subject: "${subject}"`);

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received, and Pushpa will respond shortly.',
      data: {
        id: savedMessage._id || savedMessage.id,
        name: savedMessage.name,
        email: savedMessage.email,
        subject: savedMessage.subject,
        createdAt: savedMessage.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await dbService.getContacts();
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};
