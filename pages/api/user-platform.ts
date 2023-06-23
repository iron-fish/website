import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  console.log(req.headers["user-agent"]);

  res.send({});
};

export default handler;
