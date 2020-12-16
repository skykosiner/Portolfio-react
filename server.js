require("dotenv").config()
const express = require("express")
// Boddy parser to see body of the text input from the contact form
const bodyParser = require("body-parser")
// Use node mailer so can send email's
const nodemailer = require("nodemailer")
const app = express()
// Port server is on
const port = 3000
// Get one time password for gmail to send email
const PASS = process.env.GMAIL_PASSWORD

app.get("/", (req, res) => {})

app.get("/contact", (req, res) => {
  res.send("test")
})

app.use(bodyParser.urlencoded({ extended: false }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/contact", urlencodedParser, function (req, res) {
  res.sendFile("./thankContact.html", { root: __dirname })
  const main = async () => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ykosiner@gmail.com", // generated ethereal user
        pass: PASS, // generated ethereal password
      },
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Yoni Kosiner" <ykosiner@gmail.com>', // sender address
      to: "yoni@kosiner.co.uk", // list of receivers
      subject: `Contact from portfolio ${req.body.name}`, // Subject line
      text: `
Name: ${req.body.name}
Email: ${req.body.email}
Subject: ${req.body.subject}
Message: ${req.body.message}`,
    })

    console.log("Message sent: %s", info.messageId)
  }
  main()
})

app.get("/feedback", (req, res) => {
  res.send("test feedback")
})
app.post("/feedback", urlencodedParser, function (req, res) {
  res.sendFile("./thankFeedback.html", { root: __dirname })
  const main = async () => {
    const transporter = nodemailer.createTransport({
      // host: "https://outlook.office365.com/EWS/Exchange.asmx",
      // port: 443,
      // secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: "ykosiner@gmail.com", // generated ethereal user
        pass: PASS, // generated ethereal password
      },
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Yoni Kosiner" <ykosiner@gmail.com>', // sender address
      to: "yoni@kosiner.co.uk", // list of receivers
      subject: `Blog feedback`, // Subject line
      text: `
Feedback: ${req.body.feedback}`,
    })
    console.log("Message sent: %s", info.messageId)
  }
  main()
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
