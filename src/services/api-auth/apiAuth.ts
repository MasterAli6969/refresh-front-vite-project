import axios from "axios";

import { AuthPostDataTypes } from "../../components/auth-components/authorization-form/authorizationForm.interface";

export const postAuthorizationData = async (params: AuthPostDataTypes) => {
  const authPostDataJson = JSON.stringify(params);
  console.log("ДАННЫЕ ПОСЛЕ ПАРСА", authPostDataJson);
  const response = await axios.post(
    "http://45.135.165.89:8082/",
    authPostDataJson
  );
  return response.data;
};
