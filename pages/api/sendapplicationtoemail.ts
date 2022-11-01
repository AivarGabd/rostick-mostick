import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    const data = req.body

    console.log(data)

  const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'aivargabdrahmanov235687213@gmail.com',
            pass: 'wvxp ychn wecm vrlt',
        },
        logger: true
    })

    let mailOptions = {
        from: '"aivar" <aivargabdrahmanov235687213@gmail.com>',
        to: "igor.company.neft@gmail.com",
        subject: "Новая заявка",
        html: `
            <div>Почта клиента: <b>${data.email}</b></div>
            <div>Телефон клиента: ${data.phoneNumber}</div>
            <div>
                <div><h4>Вопрос:</h4></div>
                <div>${data.comment}</div>
            </div>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.status(201).json(JSON.stringify(true));
        }
    });
  



}