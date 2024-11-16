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
    .map((post) => ({
      post,
      score: calculateSimilarity(query, post.title),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  return results.map((result) => result.post);
}

function FnSearchPost(req, res) {
  let { search } = req.query;

  if (!search) {
    return res.status(400).json({ message: "Please provide a search query." });
  }

  let query = `SELECT 
    p.id, 
    u.username,
    u.profile_url,
    u.fullname AS writer_name,
    u.profile_url AS profile,
    p.title, 
    p.content, 
    p.created_at, 
    p.category_id, 
    p.cover_url,
    COUNT(DISTINCT l.id) AS count_like,
    COUNT(DISTINCT c.id) AS count_comment
FROM 
    posts p
LEFT JOIN
	users u ON p.user_id = u.id
LEFT JOIN 
    post_likes l ON p.id = l.post_id
LEFT JOIN 
    comments c ON p.id = c.post_id
GROUP BY 
    p.id;
`;
  db.query(query, (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    let searchResult = searchs(search, result);
    res.status(200).json({
      status: 200,
      result: searchResult,
    });
  });
}

module.exports = FnSearchPost;
