import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for consistent error extraction
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return Promise.reject(new Error(errorMessage));
  }
);

export const api = {
  // Profile & About Data
  getProfile: () => apiClient.get('/profile'),

  // Skills Data
  getSkills: () => apiClient.get('/profile/skills'),

  // Projects (Supports ?category=... and ?search=...)
  getProjects: (params = {}) => apiClient.get('/projects', { params }),

  // Single Project Details (for Modal)
  getProjectById: (id) => apiClient.get(`/projects/${id}`),

  // Submit Contact Form
  submitContact: (formData) => apiClient.post('/contact', formData),

  // API Health Check
  getHealth: () => apiClient.get('/health'),
};

export default api;
