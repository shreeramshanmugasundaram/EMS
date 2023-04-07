import year23 from "../data/2023.js";

const getStudents = async (req, res) => {
  try {
    const { year } = req.body;
    if (!year) {
      return res
        .status(400)
        .send({ message: "Please fill all the required Details" });
    }
    let responseData = null;
    switch (year) {
      case 2023:
        responseData = year23;
        break;
      case 2022:
        responseData = year23;
        break;
      default:
        responseData = [];
        break;
    }
    return res.status(201).send({ list: responseData });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

export default getStudents;
