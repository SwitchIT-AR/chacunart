export interface MenuItem {
  orden: string;
  menu: string;
  submenu: string;
  pictureBlack: string;
  pictureColour: string;
}

export type MenuGroup = Record<string, MenuItem[]>;;

export interface Collection {
  name: string;
  key: string;
}

export type ArtSheet = MenuGroup[];
export type CollectionSheet = Collection[];

export interface Obra {
  numero: string; // siempre 4 dígitos como "0001"
  año: number;
  nombre: string | null;
  medidas: string | null;
  peso: string | null;
  descripcion: string | null;
  precioUsd: string | null;
  estado: string | null;
  destinatario: string | null;
  tecnica: string | null;
  video: string | null;
}

export interface Serie {
  label: string;
  obras: Obra[];
}

export interface ObrasAño {
  label: string;
  series: Record<string, Serie>; // keys como "2018", "2019"...
}

export interface ObrasData {
  obrasAño: ObrasAño;
}
