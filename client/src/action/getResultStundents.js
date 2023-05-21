import * as api from "../api/index.js";

export const getResultStundents = async (formData, setData) => {
  try {
    await api
      .getResultStundents(formData)
      .then((response) => {
        return setData(response.data);
      })
      .catch((error) => {});
  } catch (error) {
    console.log(error);
  }
};
