import { withIronSession } from "next-iron-session";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { accessCode } = req.body;

      if (accessCode === serverRuntimeConfig.accessKey) {
        req.session.set("user", { accessCode });
        await req.session.save();
        return res.status(201).send("");
      }

      return res.status(403).send("");
    }

    return res.status(404).send("");
  },
  {
    cookieName: "FTL",
    cookieOptions: {
      // @ts-ignore
      maxAge: 64800,
      secure: process.env.NODE_ENV === "production",
    },
    // @ts-ignore
    password: process.env.COOKIE,
  }
);
