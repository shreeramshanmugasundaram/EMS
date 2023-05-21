import axios from "axios";

const API = axios.create({ baseURL: "" });

export const getResultStundents = (formData) =>
  API.post("/getresutlstudents", formData);
export const contact = (formData) => API.post("/contact", formData);
export const getMainPageStudents = () => API.get("/getmainpagestudents");
export const getResultYears = () => API.get("/getresultyears");
export const getShots = () => API.get("/getshots");
