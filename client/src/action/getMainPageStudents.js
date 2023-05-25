import * as api from "../api/index.js";

export const getMainPageStudents = async (setData) => {
  try {
    const data = await api
      .getMainPageStudents()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
    return data;
  } catch (error) {
    console.log(error);
  }
};
