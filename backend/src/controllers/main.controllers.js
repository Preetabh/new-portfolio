import model from "../model/main.model.js";
import { SendEmail } from "../config/email.js";

export const postMessage = async (req, res) => {
  try {
    console.log("Hit api");

    console.log("Request Body:", req.body); // Log the request body for debugging
    const { fullName, email, message, contact } = req.body;

    const newMessage = new model({
      fullName,
      email,
      message,
      contact,
    });

    await newMessage.save();

    await SendEmail({
      fullName,
      email,
      message,
      contact,
    });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
};
