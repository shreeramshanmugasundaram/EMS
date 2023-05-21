import * as api from "../api/index.js";

export const getMainPageStudents = async (setData) => {
  try {
    const data = await api
      .getMainPageStudents()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
