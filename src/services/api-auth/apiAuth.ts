import axios from "axios";

import { AuthPostDataTypes } from "../../components/auth-components/authorization-form/AuthorizationForm";

export const postAuthorizationData = async (params: AuthPostDataTypes) => {
  const authPostDataJson = JSON.stringify(params);
  console.log("ДАННЫЕ ПОСЛЕ ПАРСА", authPostDataJson);
  const response = await axios.post("https://45.135.165.89", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("ОТВЕТ СЕРВЕРА", response);

  return response.data;
};

// export const gogHead = {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "http://localhost:5173/",
//   },
// };
