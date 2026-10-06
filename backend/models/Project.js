import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    badge: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    meta: { type: String },
    visualType: { type: String },
    visualData: { type: mongoose.Schema.Types.Mixed },
    caseStudy: {
      overview: { type: String },
      objectives: [{ type: String }],
      technologies: [{ type: String }],
      keyDeliverables: [{ type: String }]
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
