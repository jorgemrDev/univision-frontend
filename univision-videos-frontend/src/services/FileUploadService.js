// import http from "../http-common";
import axios from "axios";
import { API_URL } from "../utils/constants";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post(API_URL + "/uploadfiles", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export default {
  upload,
};
