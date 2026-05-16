import nodemailer from "nodemailer";

export const sendMessage = async (
  req,
  res
) => {
  try {

    const {
      name,
      email,
      message,
    } = req.body;


    // TRANSPORTER
    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS,
        },
      });


    // EMAIL OPTIONS
    const mailOptions = {
      from: email,

      to: process.env.EMAIL_USER,

      subject:
        `Portfolio Contact from ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
          ${message}
        </p>
      `,
    };


    // SEND EMAIL
    await transporter.sendMail(
      mailOptions
    );


    res.status(200).json({
      message:
        "Message sent successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};