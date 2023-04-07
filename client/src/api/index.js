import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

export const getStundents = (formData) => API.post("/students", formData);
export const contact = (formData) => API.post("/contact", formData);

export const getemails = () => API.get("/emails");
export const email = (formData) => API.post("/email", formData);
export const auth = (formData) => API.post("/auth", formData);

// shreeram
