let db = require("../../database/connection");

function calculateSimilarity(query, title) {
  const queryWords = query.toLowerCase().split(" ");
  const titleWords = title.toLowerCase().split(" ");

  const commonWords = queryWords.filter((word) =>
    titleWords.includes(word)
  ).length;

  return commonWords / queryWords.length;
}

function searchs(query, data) {
  const results = data
    .map((user) => ({
      user,
      score: calculateSimilarity(query, user.username),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  return results.map((result) => result.user);
}

function FnSearchUsers(req, res) {
  let { search } = req.query;

  db.query(
    `SELECT \`id\`, \`username\`, \`profile_url\` FROM \`users\``,
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      let Result = searchs(search, result);
      res.status(200).json({
        status: 200,
        result: Result,
      });
    }
  );

  if (!search) {
    return res.status(400).json({ message: "Please provide a search query." });
  }
}

module.exports = FnSearchUsers;
