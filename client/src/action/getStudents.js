import * as api from "../api/index.js";

export const getStudents = async (formData) => {
  try {
    await api
      .getStudents(formData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  } catch (error) {
    console.log(error);
  }
};
