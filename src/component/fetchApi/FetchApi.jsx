import axios from "axios";

const sendRequest = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const createData = async (url, data) => {
  return sendRequest("post", url, data);
};

const editData = async (url, data) => {
  return sendRequest("put", url, data);
};

const deleteData = async url => {
  return sendRequest("delete", url);
};
