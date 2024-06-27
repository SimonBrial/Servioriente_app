export default function convertHtmlToString(htmlContent: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const textWithoutTags = doc.body.innerText;
  return textWithoutTags;
}
