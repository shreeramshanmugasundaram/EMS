import resultPageImgSchema from "../models/resultPageImgSchema.js";

const getResultStudents = async (req, res) => {
  try {
    const { year } = req.body;
    if (!year) {
      return res
        .status(400)
        .send({ message: "Please fill all the required Details" });
    }
    const resultStudents = await resultPageImgSchema.find({ year: year });
    if (!resultStudents) {
      return res.status(401).send("requested data not found");
    }
    return res.status(201).send(resultStudents);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

export default getResultStudents;
