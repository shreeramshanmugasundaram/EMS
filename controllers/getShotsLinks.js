import shotsLinkSchema from "../models/shotsLinkSchema.js";

const getShotsLinks = async (req, res) => {
  try {
    const links = await shotsLinkSchema.find();
    if (!links) {
      return res.status(401).send("requested data not found");
    }
    return res.status(201).send(links);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

export default getShotsLinks;
