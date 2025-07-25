export interface ArtElement {
  nombre: string;
  description: string;
  link: string;
};

export interface Collection {
  name: string;
  key: string;
}

export type ArtSheet = ArtElement[];
export type CollectionSheet = Collection[];