const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const fetch = require("node-fetch");

const main = async () => {
  const secret = uuidv4();

  const url = process.env.DISCORD_LINK;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "FTL Tools", content: secret }),
  });

  let content = fs.readFileSync("./next.config.js", "utf8");
  content = content.replace("SECRET_KEY", secret);
  fs.writeFileSync("./next.config.js", content);

  return response;
};

main().catch((error) => {
  console.error("Error:", error);
});
