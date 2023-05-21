import mainPageImgSchema from "../models/mainPageImgSchema.js";

const getMainPageStudents = async (req, res) => {
  try {
    const students = await mainPageImgSchema.find();
    if (!students) {
      return res.status(400).send([]);
    }
    return res.status(200).send(students);
  } catch (error) {
    return res.status(500).send([]);
  }
};

export default getMainPageStudents;
