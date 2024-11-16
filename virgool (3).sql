-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2024 at 05:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `virgool`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `user_id`, `post_id`, `created_at`) VALUES
(15, 14, 8, '2024-11-11 15:40:49'),
(22, 12, 14, '2024-11-11 17:37:46'),
(23, 12, 32, '2024-11-11 17:47:10'),
(31, 12, 8, '2024-11-11 17:54:22'),
(34, 12, 5, '2024-11-11 18:00:31'),
(37, 12, 15, '2024-11-11 18:41:29');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'فناوری', '2024-11-04 18:19:45'),
(2, 'استارتاپ', '2024-11-04 18:19:45'),
(3, 'کسب‌وکار', '2024-11-04 18:19:45'),
(4, 'بازاریابی', '2024-11-04 18:19:45'),
(5, 'برنامه‌نویسی', '2024-11-04 18:19:45'),
(6, 'طراحی', '2024-11-04 18:19:45'),
(7, 'سرمایه‌گذاری', '2024-11-04 18:19:45'),
(8, 'زندگی و مهارت‌ها', '2024-11-04 18:19:45'),
(9, 'خودشناسی', '2024-11-04 18:19:45'),
(10, 'روانشناسی', '2024-11-04 18:19:45'),
(11, 'سبک زندگی', '2024-11-04 18:19:45'),
(12, 'ورزش', '2024-11-04 18:19:45'),
(13, 'سلامتی', '2024-11-04 18:19:45'),
(14, 'سینما و تلویزیون', '2024-11-04 18:19:45'),
(15, 'کتاب و ادبیات', '2024-11-04 18:19:45'),
(16, 'علم و دانش', '2024-11-04 18:19:45'),
(17, 'آموزش و یادگیری', '2024-11-04 18:19:45'),
(18, 'گردشگری', '2024-11-04 18:19:45'),
(19, 'آشپزی', '2024-11-04 18:19:45'),
(20, 'موسیقی', '2024-11-04 18:19:45');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `user_id`, `parent_id`, `content`, `created_at`) VALUES
(1, 32, 12, NULL, 'پست عالی بود ✌️', '2024-11-09 18:18:58'),
(2, 32, 12, NULL, 'پست عالی بود دمت گرم 😁😁 ✌️', '2024-11-09 18:19:50'),
(3, 32, 12, NULL, 'پست عالی بود دمت گرم 😁😁 ✌️', '2024-11-09 18:20:25'),
(4, 32, 12, NULL, 'پست عالی بود دمت گرم 😁😁 ✌️', '2024-11-09 18:21:41'),
(5, 32, 12, NULL, 'sss', '2024-11-09 20:42:11'),
(6, 32, 12, NULL, 'aaaaaaaaaaaaaaaaaaaaaaaaa', '2024-11-09 20:42:44'),
(7, 32, 12, 1, '[value-4]', '2024-11-09 21:49:42'),
(8, 32, 14, 1, '[value-42222]', '2024-11-09 22:02:33'),
(9, 32, 12, NULL, 'اگر این پست', '2024-11-10 12:44:25'),
(10, 32, 12, NULL, 'چی میگی ؟ 😒', '2024-11-10 12:54:51'),
(11, 32, 12, NULL, 'aswqeqweqweqwe', '2024-11-10 12:57:56'),
(12, 32, 12, NULL, 'اش کاش', '2024-11-10 12:58:40'),
(13, 32, 12, 10, 'میشه حرف نزنی ؟ 👁️', '2024-11-10 12:59:20'),
(14, 32, 12, NULL, 'از مطلب شما بسیار لذت بردم اما', '2024-11-10 13:01:55'),
(15, 32, 12, NULL, 'اگر این پست', '2024-11-10 13:03:18'),
(16, 5, 12, NULL, 'اگر این پست', '2024-11-10 13:03:44'),
(17, 5, 12, NULL, 'میخواهم بدانم که', '2024-11-10 13:03:46'),
(18, 5, 12, NULL, 'اش کاش', '2024-11-10 13:03:47'),
(19, 5, 12, NULL, 'از مطلب شما بسیار لذت بردم اما', '2024-11-10 13:03:48'),
(20, 5, 12, NULL, 'مفید بود ولی', '2024-11-10 13:03:50'),
(21, 32, 12, NULL, 'میخواهم بدانم که', '2024-11-10 13:21:13'),
(22, 14, 12, NULL, 'اگر این پست', '2024-11-10 13:25:29'),
(23, 14, 12, NULL, 'میخواهم بدانم که', '2024-11-10 13:26:03'),
(24, 14, 12, 22, 'دروغ گو', '2024-11-10 13:26:27'),
(25, 14, 12, NULL, 'از مطلب شما بسیار لذت بردم اما', '2024-11-12 16:30:50'),
(26, 32, 12, NULL, 'سلام من تونی استارک هستم 🥸🥸', '2024-11-12 19:38:47');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(11) DEFAULT 'published',
  `category_id` int(11) DEFAULT NULL,
  `cover_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `content`, `created_at`, `updated_at`, `status`, `category_id`, `cover_url`) VALUES
(5, 12, 'meta mask', '<h2>راهنمای جامع تکنولوژی‌های نوین در دنیای دیجیتال</h2><p>نویسنده: <strong>تونی استارک</strong></p><h2>مقدمه</h2><p>در دنیای امروز، تکنولوژی‌های نوین نقش بسیار مهمی در زندگی انسان‌ها ایفا می‌کنند. این تکنولوژی‌ها روز به روز پیشرفت کرده و زندگی ما را متحول کرده‌اند. در این مقاله، به بررسی چند تکنولوژی مهم و کاربردهای آن‌ها در دنیای دیجیتال می‌پردازیم.</p><h2>تکنولوژی‌های نوین</h2><p>در ادامه، به معرفی چند تکنولوژی نوین می‌پردازیم:</p><ul><li><strong>هوش مصنوعی (AI):</strong> هوش مصنوعی یکی از مهم‌ترین تکنولوژی‌های روز است که توانسته است بسیاری از صنایع را متحول کند.</li><li><strong>واقعیت مجازی (VR):</strong> واقعیت مجازی، تکنولوژی‌ای است که به کاربران این امکان را می‌دهد تا در دنیای مجازی زندگی کنند.</li><li><strong>اینترنت اشیاء (IoT):</strong> اینترنت اشیاء به اتصال دستگاه‌ها و اشیاء به اینترنت و به همدیگر اشاره دارد.</li></ul><p>این تکنولوژی‌ها در زندگی روزمره تاثیرات بسیاری دارند. به طور مثال، هوش مصنوعی در بسیاری از برنامه‌های کاربردی از جمله خودروهای خودران و تشخیص بیماری‌ها استفاده می‌شود.</p><h2>تصاویر تکنولوژی‌ها</h2><p>در اینجا چند تصویر از کاربردهای مختلف تکنولوژی‌های نوین آورده شده است:</p><p><img src=\"https://via.placeholder.com/300\" alt=\"هوش مصنوعی\"></p><p>تصویر مربوط به کاربرد هوش مصنوعی در صنعت پزشکی.</p><p><img src=\"https://via.placeholder.com/300\" alt=\"واقعیت مجازی\"></p><p>تصویر مربوط به کاربرد واقعیت مجازی در آموزش.</p><h2>مزایا و معایب تکنولوژی‌های نوین</h2><p>همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:</p><p>همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:</p><p>همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:</p><p>همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:همه تکنولوژی‌ها مزایا و معایب خاص خود را دارند. در این بخش به بررسی برخی از آن‌ها می‌پردازیم:</p><ol><li>مزایا:<ul><li>افزایش بهره‌وری</li><li>بهبود کیفیت زندگی</li><li>کاهش هزینه‌ها در صنایع مختلف</li></ul></li><li>معایب:<ul><li>تهدید برای مشاغل سنتی</li><li>چالش‌های امنیتی و حریم خصوصی</li><li>وابستگی بیشتر به تکنولوژی</li></ul></li></ol><p>برای اطلاعات بیشتر می‌توانید به <a href=\"https://www.example.com\">وبسایت ما</a> مراجعه کنید.</p>', '2024-11-06 18:19:11', '2024-11-16 16:04:14', 'published', 15, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(8, 12, 'TonyStark', '[value-3]', '2024-11-07 09:14:55', '2024-11-07 09:14:55', 'published', 1, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(12, 12, 'TonyStark', '[value-3]', '2024-11-07 09:15:35', '2024-11-07 09:15:35', 'published', 1, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(14, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(15, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(16, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(17, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(18, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(19, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(20, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(21, 14, '[value-2]', '[value-3]', '2024-11-07 11:21:17', '2024-11-07 11:21:17', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(22, 14, 'STARK', '[value-3]', '2024-11-07 11:21:17', '2024-11-08 05:54:18', 'published', 2, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(32, 12, 'نابغه میلیاردر', '<blockquote><p>تونی استارک نابغه مشهور</p></blockquote><p>&nbsp;</p><p>https://www.youtube.com/embed/wuBevBZLa40</p><p>&nbsp;</p><p>لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم لوریم اپسوم&nbsp;</p><p><a href=\"http://google.com\">لینک شخصی سازی شده</a></p><p>&nbsp;</p><figure class=\"media\"><oembed url=\"https://www.youtube.com/embed/wuBevBZLa40\"></oembed></figure><p>&nbsp;</p><h2>چرا نابغه است؟</h2><h3>IQ چقدر دارد؟</h3><p><i>او ایا نابغه است؟</i></p><figure class=\"table\"><table><tbody><tr><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td></tr><tr><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr><tr><td>5</td><td>55</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>55</td><td>5</td></tr><tr><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr><tr><td>5</td><td>5</td><td>5</td><td>5</td><td>55</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr></tbody></table></figure><p>&nbsp;</p><ol><li>آیا او باهوش است</li><li>او نابغه نیست<ol><li>&nbsp;</li></ol></li></ol>', '2024-11-09 12:59:23', '2024-11-16 16:04:14', 'published', 4, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(33, 12, 'ewrqewrerew', '<p>wrwerewrwerqw</p>', '2024-11-12 20:02:24', '2024-11-16 16:04:14', 'published', 7, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg'),
(34, 12, 'قثفصثقفقثفقثفثق', '<p>&nbsp;</p><p>سلام من اینجا استارک هستم</p><figure class=\"image\"><img style=\"aspect-ratio:564/564;\" src=\"http://localhost:5000/uploads/1731481451731-785390738.jpg\" width=\"564\" height=\"564\"></figure><p>سلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستمسلام من اینجا استارک هستم</p>', '2024-11-13 07:04:31', '2024-11-16 16:04:14', 'published', 3, 'https://i.ebayimg.com/images/g/QqwAAOSwNfZdRWmg/s-l1200.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `post_likes`
--

CREATE TABLE `post_likes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_likes`
--

INSERT INTO `post_likes` (`id`, `user_id`, `post_id`) VALUES
(5, 1, 5),
(8, 1, 22),
(6, 2, 5),
(9, 2, 22),
(10, 4, 22),
(7, 8, 5),
(11, 8, 22),
(59, 12, NULL),
(60, 12, NULL),
(61, 12, NULL),
(62, 12, NULL),
(83, 12, NULL),
(84, 12, NULL),
(85, 12, NULL),
(86, 12, NULL),
(87, 12, NULL),
(78, 12, 8),
(75, 12, 14),
(77, 12, 15),
(80, 12, 20),
(79, 12, 21),
(98, 12, 32),
(101, 12, 33);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `create_At` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('active','inactive','banned') DEFAULT 'active',
  `role` enum('admin','writer') DEFAULT 'writer',
  `bio` text DEFAULT NULL,
  `profile_url` varchar(255) DEFAULT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `birthDay` date DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `create_At`, `status`, `role`, `bio`, `profile_url`, `fullname`, `birthDay`, `gender`, `phone`) VALUES
(1, '1', '2', '3', '2024-11-04 15:19:46', 'active', 'writer', '4', '5', '6', NULL, NULL, NULL),
(2, 'tonystark', '12345', 'tony@gmail.com', '2024-11-04 15:25:50', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(4, 'tonystarks', '12345', 'tony@gmails.com', '2024-11-04 15:27:23', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(8, 'tonystarksss', '$2a$13$9Uv80/olk6A7sr32rhxDjuJ52lLPZkx3KCcuqipMEfbCPdT232xTu', 'tony@gmails.coms', '2024-11-04 15:30:42', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(10, 'tonystarkssss', '$2a$11$gjmdsgNflzWcapI9hhxSBufuu.ZB0DbM0xk.X7nhLSGNQsJ3mUk.6', 'tony@gmails.comss', '2024-11-04 15:45:05', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(11, 'tonystarkssssss', '$2a$11$FDM6Stw2IwvaTWNOESt9LOcZg9pVSVJRzyq7QiV.VqdIrRLwZja.W', 'tony@gmails.comsss', '2024-11-04 15:53:07', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(12, 'ali', '$2a$11$1FBdZSe3zQjnUeX/2nhM7eVkrsVtpL4I8yAdEbFcpvs10lDVXgRAm', 'ali@gmail.coms', '2024-11-04 16:07:38', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(14, 'mahdi', '$2a$11$Ttr41qqxRJPVGeiT1sOKuuqkSMGgIMZi.RiZvg0MzdCQlt.NEHOg6', 'mahdi@gmail.coms', '2024-11-06 18:09:31', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'مهدی بابائی', NULL, NULL, NULL),
(15, 'hhhhh', '$2a$11$hCAxmHbca.DYWmRJPyenS.xav2ZXZwozkTsj4JrbsDtAb6LU7jrgS', 'hhhhh@gmail.com', '2024-11-12 19:23:27', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL),
(20, 'hhhshh', '$2a$11$QtetopYliDx0bOhi3pFvR.uSqVIx2Jdn4rtRPhAYnQljJhMI/D00O', 'hhhhsh@gmail.com', '2024-11-12 19:25:56', 'active', 'writer', 'کاربر شاد ویرگول', 'https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg', 'user virgool', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_follows`
--

CREATE TABLE `user_follows` (
  `id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL,
  `followed_id` int(11) NOT NULL,
  `follow_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_follows`
--

INSERT INTO `user_follows` (`id`, `follower_id`, `followed_id`, `follow_date`) VALUES
(5, 1, 14, '2024-11-08 05:57:04'),
(6, 2, 14, '2024-11-08 05:57:04'),
(7, 4, 14, '2024-11-08 05:57:04'),
(8, 8, 14, '2024-11-08 05:57:04'),
(9, 10, 14, '2024-11-08 05:57:04'),
(10, 11, 14, '2024-11-08 05:57:04'),
(83, 12, 14, '2024-11-12 16:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `view_posts`
--

CREATE TABLE `view_posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `date_view` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `view_posts`
--

INSERT INTO `view_posts` (`id`, `user_id`, `post_id`, `date_view`) VALUES
(1, 14, 32, '2024-11-12 12:21:20'),
(3, 12, 32, '2024-11-12 12:24:39'),
(7, 12, 14, '2024-11-12 12:28:21'),
(14, 12, 12, '2024-11-12 12:29:50'),
(15, 12, 20, '2024-11-12 13:27:48'),
(26, 12, 5, '2024-11-12 13:28:09'),
(65, 12, 19, '2024-11-12 13:35:03'),
(81, 8, 5, '2024-11-12 15:10:52'),
(104, 12, 15, '2024-11-12 16:34:00'),
(106, 12, 16, '2024-11-12 16:34:03'),
(108, 12, 22, '2024-11-12 16:34:10'),
(112, 12, 17, '2024-11-12 16:34:27'),
(150, 12, 33, '2024-11-12 20:02:40'),
(154, 12, 34, '2024-11-13 07:04:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE_bookmark_userid_postId` (`user_id`,`post_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `post_likes`
--
ALTER TABLE `post_likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_post` (`user_id`,`post_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_follows`
--
ALTER TABLE `user_follows`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_follow` (`follower_id`,`followed_id`),
  ADD KEY `followed_id` (`followed_id`);

--
-- Indexes for table `view_posts`
--
ALTER TABLE `view_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`post_id`),
  ADD KEY `post_id` (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `post_likes`
--
ALTER TABLE `post_likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user_follows`
--
ALTER TABLE `user_follows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `view_posts`
--
ALTER TABLE `view_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bookmarks_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `post_likes`
--
ALTER TABLE `post_likes`
  ADD CONSTRAINT `post_likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_likes_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_follows`
--
ALTER TABLE `user_follows`
  ADD CONSTRAINT `user_follows_ibfk_1` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_follows_ibfk_2` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `view_posts`
--
ALTER TABLE `view_posts`
  ADD CONSTRAINT `view_posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `view_posts_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
