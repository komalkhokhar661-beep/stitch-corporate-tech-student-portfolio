import { dbService, isDbConnected } from '../config/db.js';

export const getProfile = async (req, res, next) => {
  try {
    const profileData = await dbService.getProfile();
    res.json({
      success: true,
      data: profileData
    });
  } catch (error) {
    next(error);
  }
};

export const getSkills = async (req, res, next) => {
  try {
    const skills = await dbService.getSkills();
    res.json({
      success: true,
      data: skills
    });
  } catch (error) {
    next(error);
  }
};

export const getHealth = async (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Pushpa Rani Portfolio API',
    database: isDbConnected() ? 'MongoDB' : 'Local File Persistence (backend/data/localStore.json)'
  });
};
