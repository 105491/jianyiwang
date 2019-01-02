/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : jianyi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 16:23:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` varchar(10) NOT NULL,
  `num` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '3', '../img/list_01.jpg', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269');
INSERT INTO `order` VALUES ('2', '3', '../img/list_02.jpg', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269');

-- ----------------------------
-- Table structure for shoppinglist
-- ----------------------------
DROP TABLE IF EXISTS `shoppinglist`;
CREATE TABLE `shoppinglist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `sales` int(255) DEFAULT NULL,
  `comment` int(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `img_2` varchar(255) DEFAULT NULL,
  `img_3` varchar(255) DEFAULT NULL,
  `img_4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppinglist
-- ----------------------------
INSERT INTO `shoppinglist` VALUES ('1', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '368', '38', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('2', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '189', '23', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg');
INSERT INTO `shoppinglist` VALUES ('3', '  欧姆龙 腕式电子血压计 HEM-6131   HD130(3527) DF', '339', '50', '6', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg');
INSERT INTO `shoppinglist` VALUES ('4', '  泰尔茂 手腕式电子血压计 白色 ES*W400WH   HD130(3527) DF', '259', '44', '2', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg');
INSERT INTO `shoppinglist` VALUES ('5', '  欧姆龙 腕式电子血压计 HEM-8622 HD130(3527) DF  ', '580', '10', '3', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('6', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '368', '38', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('7', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '189', '23', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg');
INSERT INTO `shoppinglist` VALUES ('8', '  欧姆龙 腕式电子血压计 HEM-6131   HD130(3527) DF', '339', '50', '6', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg');
INSERT INTO `shoppinglist` VALUES ('9', '  泰尔茂 手腕式电子血压计 白色 ES*W400WH   HD130(3527) DF', '259', '44', '2', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg');
INSERT INTO `shoppinglist` VALUES ('10', '  欧姆龙 腕式电子血压计 HEM-8622 HD130(3527) DF  ', '580', '10', '3', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('11', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '368', '38', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('12', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '189', '23', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg');
INSERT INTO `shoppinglist` VALUES ('13', '  欧姆龙 腕式电子血压计 HEM-6131   HD130(3527) DF', '339', '50', '6', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg');
INSERT INTO `shoppinglist` VALUES ('14', '  泰尔茂 手腕式电子血压计 白色 ES*W400WH   HD130(3527) DF', '259', '44', '2', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg');
INSERT INTO `shoppinglist` VALUES ('15', '  欧姆龙 腕式电子血压计 HEM-8622  HD130(3527) DF ', '580', '10', '3', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('16', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '368', '38', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('17', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '189', '23', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg', '../img/list_02.jpg');
INSERT INTO `shoppinglist` VALUES ('18', '  欧姆龙 腕式电子血压计 HEM-6121  HD130(3527) DF', '269', '368', '38', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg', '../img/list_01.jpg');
INSERT INTO `shoppinglist` VALUES ('19', '  欧姆龙 腕式电子血压计 HEM-6131   HD130(3527) DF', '339', '50', '6', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg', '../img/list_03.jpg');
INSERT INTO `shoppinglist` VALUES ('20', '  泰尔茂 手腕式电子血压计 白色 ES*W400WH   HD130(3527) DF', '259', '44', '2', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg', '../img/list_04.jpg');

-- ----------------------------
-- Table structure for user_inf
-- ----------------------------
DROP TABLE IF EXISTS `user_inf`;
CREATE TABLE `user_inf` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inf
-- ----------------------------
INSERT INTO `user_inf` VALUES ('47', '13288035636', 'Aa123456', null, '2018-12-29 16:15:18');
INSERT INTO `user_inf` VALUES ('53', '13288035636', 'Aa123456', null, '2018-12-29 16:17:31');
INSERT INTO `user_inf` VALUES ('54', '13288035636', 'Aa123456', null, '2018-12-29 16:17:39');
SET FOREIGN_KEY_CHECKS=1;
