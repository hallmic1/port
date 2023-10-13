import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST as string,
  port: parseInt(process.env.EMAIL_PORT as string),
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_ADDRESS as string,
    pass: process.env.EMAIL_SECRET as string,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: process.env.EMAIL_ADDRESS as string,
  configPath: "./mailing.config.json",
});

export default sendMail;
