import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || "An error occurred";
    return Promise.reject({ message, status: error.response?.status });
  }
);

export const noticeService = {
  getAll: (params) => api.get("/notices", { params }),
  getById: (id) => api.get(`/notices/${id}`),
};

export const newsService = {
  getAll: (params) => api.get("/news", { params }),
  getById: (id) => api.get(`/news/${id}`),
};

export const eventService = {
  getAll: (params) => api.get("/events", { params }),
  getById: (id) => api.get(`/events/${id}`),
};

export const galleryService = {
  getAlbums: (params) => api.get("/gallery/albums", { params }),
  getPhotos: (albumId, params) => api.get(`/gallery/albums/${albumId}/photos`, { params }),
};

export const teacherService = {
  getAll: (params) => api.get("/teachers", { params }),
  getById: (id) => api.get(`/teachers/${id}`),
};

export const contactService = {
  submit: (data) => api.post("/contact", data),
};

export const admissionService = {
  getInfo: () => api.get("/admission"),
  submitForm: (data) => api.post("/admission/apply", data),
};

export const downloadService = {
  getAll: (params) => api.get("/downloads", { params }),
  getFiles: (category) => api.get("/downloads", { params: { category } }),
};

export default api;
