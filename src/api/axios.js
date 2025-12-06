import axios from "axios";

// Axios instance with baseURL and interceptors
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Optional: unify error shape
    const message = error?.response?.data?.message || error.message || "Unknown error";
    return Promise.reject({
      message,
      status: error?.response?.status,
      data: error?.response?.data,
    });
  }
);

export default api;
