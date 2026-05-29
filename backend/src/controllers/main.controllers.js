import model from "../model/main.model.js";
import {SendEmail} from "../config/email.js";

export const postMessage = async(req,res)=>{
  try {
    console.log("Received message:", req.body); // Debugging line
    const {fullName,email,message,contact} = req.body
    const newMessage = new model({
      fullName,email,message,contact
    })
    await newMessage.save()

      // ✅ Send Msg via Email
    await SendEmail({
      fullName,
      email,
      message,
      contact,
    });
    res.status(201).json({message:"Message sent successfully"})
  } catch (error) {
    res.status(500).json({message:"Error sending message"})
  }
}
