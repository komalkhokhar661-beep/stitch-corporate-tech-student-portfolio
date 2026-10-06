import { dbService } from '../config/db.js';

export const getProjects = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const projects = await dbService.getProjects({ category, search });

    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await dbService.getProjectById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project with ID '${id}' not found`
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};
