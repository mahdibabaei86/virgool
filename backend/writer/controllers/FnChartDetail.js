let db = require("../../database/connection");

function FnChartDetail(req, res) {
  let userID = req.info.id;
  let query = `WITH months AS (
    SELECT 'January' AS month
    UNION ALL SELECT 'February'
    UNION ALL SELECT 'March'
    UNION ALL SELECT 'April'
    UNION ALL SELECT 'May'
    UNION ALL SELECT 'June'
    UNION ALL SELECT 'July'
    UNION ALL SELECT 'August'
    UNION ALL SELECT 'September'
    UNION ALL SELECT 'October'
    UNION ALL SELECT 'November'
    UNION ALL SELECT 'December'
)
SELECT 
    m.month,
    COALESCE(COUNT(DISTINCT v.post_id), 0) AS views,
    COALESCE(COUNT(p.id), 0) AS total_posts,
    COALESCE((SELECT COUNT(*) FROM user_follows f WHERE f.followed_id = p.user_id), 0) AS followers,
    COALESCE((SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id), 0) AS comments
FROM months m
LEFT JOIN posts p ON MONTHNAME(p.created_at) = m.month AND p.user_id = ?
LEFT JOIN view_posts v ON p.id = v.post_id
GROUP BY m.month
ORDER BY FIELD(m.month, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
`;

  db.query(query, [userID], (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    let formatData = {
      data: {
        posts: result.map((data) => data.total_posts),
        followers: result.map((data) => data.followers),
        comments: result.map((data) => data.comments),
        views: result.map((data) => data.views),
      },
    };

    res.status(200).json({
      status: 200,
      result: formatData,
    });
  });
}

module.exports = FnChartDetail;
