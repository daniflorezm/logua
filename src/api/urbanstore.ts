import { BASE_DIR } from "../utils/constants";

export async function getUrbanStoreDataApi() {
  try {
    const url = `${BASE_DIR}/api/urbanstore/`;
    const headers = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
