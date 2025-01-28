import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";
import { API_KEY } from "../../constants/api.mjs";

export const createAPIRequestHeader = (method, formData) => {
  const userData = getFromStorage("user");
  const { accessToken } = userData;

  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return options;
};
