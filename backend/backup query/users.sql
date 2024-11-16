CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE,
    password VARCHAR(60),
    email VARCHAR(100) UNIQUE,
    create_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
    role ENUM('admin', 'writer') DEFAULT 'writer',
    bio TEXT,
    profile_url VARCHAR(255),
    fullname VARCHAR(50),
    birthDay DATE,
    gender ENUM('male', 'female', 'other'),
    phone VARCHAR(11)
);