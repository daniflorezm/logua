//Puede acabarse borrando
export interface SectionItem {
  titulo: string;
  subitem?: string[];
}
export type Oferta = {
  oferta: string;
  seccion: string;
  created_at: string;
  imagen_1: string;
  imagen_2: string;
  precio: number;
  stock: number;
};
