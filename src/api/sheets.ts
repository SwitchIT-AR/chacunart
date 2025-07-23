import { useQuery } from "@tanstack/react-query";
import { SHEETS } from "../utils/endpoints"
import { Sheet } from "../utils/Global.types";

const getSheetData = async (sheet: string): Promise<Sheet> => {
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

export const useGetSheetData = (sheetName: string) => {
  return useQuery({
    queryKey: ['elements', sheetName],
    queryFn: () => getSheetData(sheetName),
    retry: 1
  });
};