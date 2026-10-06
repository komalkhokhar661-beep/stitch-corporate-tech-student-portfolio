import express from 'express';
import rateLimit from 'express-rate-limit';
import { submitContact, getContacts } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validator.js';

const router = express.Router();

// Rate limiter to prevent spam: max 10 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many contact requests submitted from this IP. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

router.post('/', contactLimiter, validateContactInput, submitContact);
router.get('/', getContacts);

export default router;
