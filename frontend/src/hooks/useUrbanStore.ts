import { getOfertaLoguaApi } from "../api/oferta";
export function useUrbanStore() {
  const getOfertaLogua = async () => {
    try {
      const response = await getOfertaLoguaApi();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { getOfertaLogua };
}
