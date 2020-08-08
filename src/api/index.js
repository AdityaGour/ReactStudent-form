import axios from 'axios';
import {API_URL} from '../constant/config';


const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 5000,
});

const Get = async (url, data) => {
  const response =  await fetch(url);
  return   response.json();
};

const Post = async (url, data) => {
  const response =  await fetch(url, {method:'POST',headers:{
    'Content-Type': 'application/json',
  },body:JSON.stringify(data)} );
    return   response.json();
};

const Put = async (url, data) => {
  return axiosInstance.put(url, data,{ headers:{
    'Access-Control-Allow-Origin': '*'
  }});
};

const GetWithHeader = async (url, token) => {
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err, 'err data');
    return err;
  }
};

const PostWithHeader =  (url, token, data) => {
  // try {
    const response =  axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
};

const PutWithHeader =  (url, token, data) => {
  return axiosInstance.put(url, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    },
  });
};

const uploadDocs = async (url, formData) => {
  return await axiosInstance.post(url, formData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Authorization': `Bearer ${token}`
    },
  });
};

const PatchWithHeader = async (url, token, data) => {
  return axiosInstance.patch(url, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const DeleteWithHeader = async (url, token) => {
  return axiosInstance.delete(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const ApiService = {
  Get,
  Post,
  Put,
  GetWithHeader,
  PostWithHeader,
  PutWithHeader,
  PatchWithHeader,
  DeleteWithHeader,
  uploadDocs,
};

export default ApiService;
