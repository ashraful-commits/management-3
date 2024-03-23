export function formatScope(text) {
  const paragraphs = text
    .split("\n")
    .map((paragraph) => `${paragraph.trim()}<br>`)
  return paragraphs.join("\n\n")
}

export function BackToMain(text) {
  const paragraphs = text
    .split("<br>")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "")
  return paragraphs.join("\n")
}
