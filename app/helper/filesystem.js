const fs = require("fs");
const { applog } = require("./log");

const checkPath = (path, autoGenerate = false) => {
  const isFileExist = fs.existsSync(path);

  if (!isFileExist && autoGenerate) {
    applog.ERROR(`Path (${path}) not found`);
    try {
      fs.writeFileSync(path);
      applog.INFO("Path created successfully");
      return true;
    } catch (err) {
      applog.ERROR(err.message);
      return false;
    }
  } else if (!isFileExist) {
    return false;
  } else {
    return true;
  }
};

const readfile = (filepath, fileType) => {
  if (checkPath(filepath)) {
    switch (fileType) {
      case "JSON": {
        return JSON.parse(fs.readFileSync(filepath));
      }
      default:
        return fs.readFileSync(filepath);
    }
  } else {
    applog.ERROR(`File (${filepath}) not found`);
    throw new Error("File not found");
  }
};

const appendFile = (filepath, data) => {
  if (checkPath(filepath, true)) {
    fs.writeFileSync(filepath, data);
  } else {
    applog.ERROR("Couldn't append to file");
  }
};

module.exports = { appendFile, readfile };
