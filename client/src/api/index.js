import axios from "axios";

const API = axios.create({ baseURL: "" });

export const getStundents = (formData) => API.post("/students", formData);
export const contact = (formData) => API.post("/contact", formData);

// shreeram
