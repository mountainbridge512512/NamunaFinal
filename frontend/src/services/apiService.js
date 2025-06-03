import api from '../api/axios'; // Adjust the path if your folder structure is different


// API call for submitting contact form data
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form', error);
    throw error;
  }
};

// API call for submitting WorkWithUs form data
export const submitWorkWithUsForm = async (formData) => {
  try {
    const response = await api.post('/application', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting WorkWithUs form', error);
    throw error;
  }
};
// New: API call for Admin Signup
export const adminSignup = async (formData) => {
  try {
    const response = await api.post('/admin/signup', formData);
    return response.data;
  } catch (error) {
    console.error('Error during admin signup', error);
    throw error;
  }
};

// New: API call for Admin Login
export const adminLogin = async (formData) => {
  try {
    const response = await api.post('/admin/login', formData);
    return response.data;
  } catch (error) {
    console.error('Error during admin login', error);
    throw error;
  }
};
