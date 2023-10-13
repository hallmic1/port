import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail from "../../../../emails";
import FormSubmission from "../../../../emails/FormSubmission";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body.user
  if(!user) {
    res.status(400).json({error: "Missing user information"})
    return;
  }
  if(!user.name || !user.email || !user.phone || !user.message) {
    res.status(400).json({error: "Missing user information"})
    return;
  }
  if (req.method === 'POST') {
    sendEmail(user).then(() => {
      res.status(200).json({success: true})
    }).catch((err) => {
      res.status(500).json({error: err})
    })
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}


async function sendEmail(user: {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
}) {
  await sendMail({
    subject: "New Contact Form Submission",
    to: user.email,
    component: <FormSubmission user={user} />
  }).then((res) => {
    console.log(res)
  })
}
