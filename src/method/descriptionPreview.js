function descriptionPreview(content) {
  const textContent = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${textContent.slice(0, 130)}...`;
}

export { descriptionPreview };
