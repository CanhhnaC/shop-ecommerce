import { handleError, handleResponse } from "./apiUtils";
import { API_URL } from "../../constants";
import Axios from "axios";

export function getProducts(options) {
  return Axios.get(API_URL + options)
    .then(handleResponse)
    .catch(handleError);
}
