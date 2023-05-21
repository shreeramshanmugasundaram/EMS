import resultPageImgSchema from "../models/resultPageImgSchema.js";

const getResultYears = async (req, res) => {
  try {
    const yearsnonsort = await resultPageImgSchema.distinct("year");
    const years = yearsnonsort.reverse();
    console.log(years);
    if (!years) {
      return res.status(401).send("requested data not found");
    }
    return res.status(201).send(years);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

export default getResultYears;
