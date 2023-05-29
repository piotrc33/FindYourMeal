export function removeHtmlTags(str: string): string {
  return str.replace(/<[^>]+>/g, "");
}
