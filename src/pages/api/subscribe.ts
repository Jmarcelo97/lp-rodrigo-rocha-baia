// CREATE A NEXT API ROUTE TO SUBSCRIBE IN ACTIVE CAMPAIGN
import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../services/api";

export default function SubscribeUser(req: NextApiRequest, res: NextApiResponse) {

    // GET THE NAME AND EMAIL FROM THE REQUEST BODY
    const { name, email } = req.body;

    // IF THE EMAIL IS NOT PROVIDED, RETURN AN ERROR
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    // IF THE NAME IS NOT PROVIDED, RETURN AN ERROR
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    // TRY TO ADD THE EMAIL TO ACTIVE CAMPAIGN
    try {
        const data = {
            contact: {
                email,
                firstName: name
            }
        };
        api.post("/contacts", data).then(() => {
            // RETURN A SUCCESS MESSAGE
            return res.status(201).json({
                message: "Successfully subscribed"
            });
        }).catch((error) => {
            // RETURN A GENERIC ERROR IF SOMETHING WENT WRONG
            return res.status(500).json({ error: "Something went wrong" });
        });
    } catch (error) {

        // RETURN A GENERIC ERROR IF SOMETHING WENT WRONG
        return res.status(500).json({ error: "Something went wrong" });
    }
};
