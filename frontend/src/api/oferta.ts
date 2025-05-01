import { BASE_DIR } from "../utils/constants";
export async function getOfertaLoguaApi() {
  try {
    const url = `${BASE_DIR}/api/oferta/`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
