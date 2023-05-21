import * as api from "../api/index.js";

export const getResultYears = async (setData) => {
  try {
    await api
      .getResultYears()
      .then((response) => {
        return setData(response.data);
      })
      .catch((error) => {});
  } catch (error) {
    console.log(error);
  }
};
