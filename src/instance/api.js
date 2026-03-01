import axios from "axios";

// Create instance
const axiosInstance = axios.create({
  baseURL: "https://api.jayantx.me/api",
  timeout: 10000,
  withCredentials:true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response Interceptor (Global Error Handling)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Redirecting...");
      // Optional: redirect to login
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;