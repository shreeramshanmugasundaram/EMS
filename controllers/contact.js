import contactSchema from "../models/contactSchema.js";
import { mailer } from "./mailer.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .send({ message: "Please fill all the required Details" });
    }
    const contact = await contactSchema.create({
      name,
      email,
      message,
    });
    await mailer({
      name,
      email,
      message,
      type: "contact",
      subject: "New Contact",
    });
    return res.status(201).send({
      message: "Contact Saved Successfully, Our Team will contact you shortly",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};
