import Contact from "../../models/contact";
const database = require("../../utils/connectDB")

export default async function handler (req, res) {
    try {
        if (req.method === 'POST') {
            await database.connect();
            await Contact.create(JSON.parse(req.body));
            return res.status(200).json({
                message:"Message sent successfully!"
            })
          } else {
            // Handle any other HTTP method
            console.log("other req than post")
          }
        
    } catch (e) {
        console.log(e)
        return res.status(500).json(
            { message: "Server error, please try again!" },
        )
    }
  }
