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