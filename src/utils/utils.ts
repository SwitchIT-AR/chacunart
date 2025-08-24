export function encodeSpaces(text: string): string {
  return text.replace(/ /g, "%20");
}
