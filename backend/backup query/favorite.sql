CREATE TABLE post_likes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);