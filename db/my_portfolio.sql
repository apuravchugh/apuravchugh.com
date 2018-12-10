SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `tbl_category` (
  `category_id` int(10) NOT NULL,
  `category_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `tbl_category` (`category_id`, `category_name`) VALUES
(1, 'graphic design'),
(2, 'web design'),
(3, 'brand identity'),
(4, 'web development');

CREATE TABLE `tbl_project` (
  `project_id` int(10) NOT NULL,
  `project_name` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `project_description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `project_thumb` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `project_img1` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `project_img2` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL,
  `project_attachment` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `project_url` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `tbl_project` (`project_id`, `project_name`, `project_description`, `project_thumb`, `project_img1`, `project_img2`, `project_attachment`, `project_url`, `category_id`) VALUES
(9, '', '','portfolio3.jpg', 'portfolio3.jpg', '', NULL, NULL, 4),
(10, '', '','portfolio4.jpg', 'portfolio4.jpg', '', NULL, NULL, 4),
(11, '', '','portfolio5.jpg', 'portfolio5.jpg',  '', NULL, NULL,4),
(12, '', '','portfolio6.jpg', 'portfolio6.jpg',  '', NULL, NULL,4),
(13, '', '','portfolio1.jpg', 'portfolio1.jpg',  '', NULL, NULL,4),
(14, '', '','portfolio2.jpg', 'portfolio2.jpg',  '', NULL, NULL,4);

ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`category_id`);

ALTER TABLE `tbl_project`
  ADD PRIMARY KEY (`project_id`);

ALTER TABLE `tbl_category`
  MODIFY `category_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `tbl_project`
  MODIFY `project_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;