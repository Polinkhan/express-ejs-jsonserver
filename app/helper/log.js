const fs = require("fs");

const insertLog = (type, msg) => {
  const message = type + " - [" + new Date().toLocaleString() + "] - " + msg + "\n";
  fs.appendFileSync(process.env.LOG_PATH, message);
};

const applog = {
  INFO: (msg) => insertLog("INFO", msg),
  ERROR: (msg) => insertLog("ERROR", msg),
};

module.exports = { applog };
