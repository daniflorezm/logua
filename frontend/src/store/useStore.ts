import { create } from "zustand";
import { Oferta } from "../types/types";

interface LoguaOferta {
  producto: Oferta[];
  setProducto: (producto: Oferta[]) => void;
}

export const useStore = create<LoguaOferta>()((set) => ({
  producto: [
    {
      oferta: "",
      seccion: "",
      created_at: "",
      imagen_1:
        "http://127.0.0.1:8000/uploads/ofertas/camiseta-colombia-uno.jpeg",
      imagen_2: "",
      precio: 0,
      stock: 0,
    },
  ],
  setProducto: (producto) => set({ producto }),
}));
