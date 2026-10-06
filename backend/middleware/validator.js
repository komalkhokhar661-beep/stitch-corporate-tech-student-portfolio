export const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Full name is required');
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (name.trim().length > 100) {
    errors.push('Name cannot exceed 100 characters');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    errors.push('Email address is required');
  } else if (!emailRegex.test(email.trim())) {
    errors.push('Please provide a valid email address');
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    errors.push('Subject or inquiry category is required');
  } else if (subject.trim().length > 150) {
    errors.push('Subject cannot exceed 150 characters');
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.push('Message content is required');
  } else if (message.trim().length < 10) {
    errors.push('Message should be at least 10 characters long to provide sufficient detail');
  } else if (message.trim().length > 3000) {
    errors.push('Message cannot exceed 3000 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors: errors
    });
  }

  // Sanitize trimmed strings
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
};
