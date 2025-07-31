import { useQuery } from "@tanstack/react-query";
import { SHEETS } from "../utils/endpoints"
import { ArtSheet, CollectionSheet } from "../utils/Global.types";

const getArtSheetData = async (sheet: string): Promise<ArtSheet> => {
  const request = new Request(SHEETS(sheet), {
    method: 'GET',
    headers: {
      'Content-Type': 'json/application',
    }
  });

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error('No se pudo conectar con Sheets');
  };

  return response.json();
};

export const useArtSheetData = (sheetName: string) => {
  return useQuery({
    queryKey: ['art', sheetName],
    queryFn: () => getArtSheetData(sheetName),
    retry: 1
  });
};

const getCollectionData = async (sheet: string): Promise<CollectionSheet> => {
  const request = new Request(SHEETS(sheet), {
    method: 'GET',
    headers: {
      'Content-Type': 'json/application',
    }
  });

  const response = await fetch(request);

  if (!response.ok) {
    throw new Error('No se pudo conectar con Sheets');
  };

  return response.json();
};

export const useCollectionData = (sheetName: string) => {
  return useQuery({
    queryKey: ['collections', sheetName],
    queryFn: () => getCollectionData(sheetName),
    retry: 1
  });
};