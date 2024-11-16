// let db = require("../../database/connection");

// function FnCountViews(req, res) {
//   let { postID, userID } = req.body;
//   db.query(
//     `INSERT INTO view_posts (user_id, post_id) VALUES (?,?)`,
//     [userID, postID],
//     (error, result) => {
//       if (error) {
//         if (error.code == "ER_DUP_ENTRY") {
//           res.status(409).json({
//             status: 409,
//             message: "The post has already been seen",
//           });
//           return;
//         }

//         res.status(501).json({
//           status: 501,
//           message: "Error Internal Server",
//         });

//         return;
//       }
//       res.status(201).json({
//         status: 201,
//         message: "The post has been successfully viewed",
//       });
//     }
//   );
// }

// module.exports = FnCountViews;
