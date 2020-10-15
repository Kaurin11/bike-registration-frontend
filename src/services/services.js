import Axios from "axios";

export const baseRequest = "http://localhost:8080/api/v1";
export const allBikeRequest = `${baseRequest}/bike`;

export const getAllBike = () => Axios.get(allBikeRequest);
export const getOneBike = (id) => Axios.get(`${allBikeRequest}/${id}`);

export const setBike = (payload) =>
  Axios.post("http://localhost:8080/api/v1/bike", payload);

export const deleteBike = (id) => Axios.delete(`${allBikeRequest}/${id}`);
