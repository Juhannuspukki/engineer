const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const fetch = require("node-fetch");

const main = async () => {
  // Create key
  const secret = uuidv4();

  // Post key to Discord
  const url = process.env.DISCORD_LINK;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "FTL Tools", content: secret }),
  });

  // Write the key to config file
  let content = fs.readFileSync("./next.config.js", "utf8");
  content = content.replace("SECRET_KEY", secret);
  fs.writeFileSync("./next.config.js", content);

  return response;
};

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
