import * as api from "../api/index.js";

export const getShots = async (setData) => {
  try {
    await api
      .getShots()
      .then((response) => {
        return setData(response.data);
      })
      .catch((error) => {});
  } catch (error) {
    console.log(error);
  }
};
