CREATE TABLE view_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    FOREIGN KEY (post_id) REFERENCES posts(id)
)