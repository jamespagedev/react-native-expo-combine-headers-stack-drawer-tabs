import axios from "axios";
import { AxiosOptions, getAxiosOptions } from "@app/utils";

/* ToDo: get this working
export const backendServerUri =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_DEV_INVENTORY_API
    : process.env.REACT_APP_NODE_ENV === "test"
    ? process.env.REACT_APP_QA_INVENTORY_API
    : process.env.REACT_APP_PROD_INVENTORY_API
*/

const backendServerUri = "http://localhost:6000/api/";

const config = {
  baseUrl: backendServerUri,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
};

const requestInstance = axios.create(config);

export const axiosGetRequest = ([endpoint, data]: any) =>
  getAxiosOptions(false).then((options: AxiosOptions) => {
    options.params = data;
    return requestInstance.get(endpoint, options);
  });

export const axiosGetRequestGuest = ([endpoint, data]: any) =>
  getAxiosOptions(true).then((options: AxiosOptions) => {
    options.params = data;
    return requestInstance.get(endpoint, options);
  });

export const axiosPostRequest = ([endpoint, data]: any) =>
  getAxiosOptions(false).then((options: AxiosOptions) => {
    options.params = {};
    return requestInstance.post(endpoint, options);
  });

export const axiosDeleteRequest = ([endpoint, data]: any) =>
  getAxiosOptions(false).then((options: AxiosOptions) => {
    options.data = data;
    options.params = {};
    return requestInstance.delete(endpoint, options);
  });

export const axiosPutRequest = ([endpoint, data]: any) =>
  getAxiosOptions(false).then((options: AxiosOptions) => {
    return requestInstance.put(endpoint, data, options);
  });

export const axiosLoginRequest = async ([endpoint, params]: any) => {
  const options = await getAxiosOptions(true);
  return await requestInstance.post(endpoint, params, options);
};

requestInstance.interceptors.request.use(async (request: any) => {
  return request;
});
