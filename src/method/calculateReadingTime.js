function calculateReadingTime(content) {
  const textContent = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = textContent.split(" ").length;
  const wordsPerMinute = 200;
  const timeInMinutes = Math.ceil(wordCount / wordsPerMinute);
  return timeInMinutes;
}

export default calculateReadingTime;
