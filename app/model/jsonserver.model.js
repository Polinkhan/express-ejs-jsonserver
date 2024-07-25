const fetch = require("node-fetch");

const UPLOAD_URL = "http://localhost:8080/db/uploads/";

const addMetaData = (data) => {
  return {
    ...data,
    created_at: new Date().getTime(),
    updated_at: null,
  };
};

const updateMetaData = (data) => {
  console.log(data);
  return {
    ...data,
    updated_at: new Date().getTime(),
  };
};

const Uploads = {
  get: async (id) => {
    const url = id ? UPLOAD_URL + id : UPLOAD_URL;

    // response
    const response = await fetch(url);
    return await response.json();
  },

  post: async (data) => {
    const option = {
      method: "POST",
      body: JSON.stringify(addMetaData(data)),
      headers: { "Content-Type": "application/json" },
    };

    // response
    const response = await fetch(UPLOAD_URL, option);
    return await response.json();
  },

  put: async (data, id) => {
    const prevData = await (await fetch(UPLOAD_URL + id)).json();

    console.log({ prevData });

    const option = {
      method: "PUT",
      body: JSON.stringify(updateMetaData({ ...prevData, ...data })),
      headers: { "Content-Type": "application/json" },
    };

    if (!id) throw new Error("please pass 'id' as argument");

    // response
    const response = await fetch(UPLOAD_URL + id, option);
    return await response.json();
  },

  delete: async (id) => {
    const option = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    if (!id) throw new Error("please pass 'id' as argument");

    // response
    const response = await fetch(UPLOAD_URL + id, option);
    return await response.json();
  },
};

module.exports = { Uploads };
