import express from 'express';
import { getProfile, getSkills, getHealth } from '../controllers/profileController.js';

const router = express.Router();

router.get('/', getProfile);
router.get('/skills', getSkills);
router.get('/health', getHealth);

export default router;
