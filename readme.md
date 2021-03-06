## 0- 项目名称
基于Nodejs+vue实现极客信息发布系统
## 1-项目导学页

### 1.1 - 项目介绍
极客学院的信息发布系统，通过后台配置的内容在前台中进行展示，支撑企业的信息发布和信息管理，运营人员会定期发布极客学院的新的动态及技术内容帮助大家及时的掌握前沿技术动态，更好的学习规划。为此需要一套信息管理发布系统来方便对他的内容进行发布、修改、删帖和分类等。

### 1.2 - 教学目标
本项目为 Node.js 构建 Web API，并使用 Vue 配合 Element-ui 构建管理后台。主要考察对 Vue 在后台项目中的应用能力，分成以下五个部分：
- 一、Node.js API
- 二、Vue
- 三、Vue-router 
- 四、Element-ui

### 1.3 - 前置技能

### 1.4 - 学习周期
| 总时长   | 任务 1   | 任务 2   | 任务 3   | 任务 4   | 任务 5   | 任务 6   | 任务 7   | 任务 8   | 任务 9   | 
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
| 19h   | 2h   | 2h   | 3h   | 2h   | 2h   | 2h   | 2h   | 2h   | 2h   | 

### 1.5 - 配套资料
* 设计稿
* 产品流程图

![图片](https://uploader.shimo.im/f/valhfAWED9AW9oje.png!thumbnail)
![图片](https://uploader.shimo.im/f/XEL20xyE0oADzelo.png!thumbnail)

### 1.6 - 效果示例图

![图片](https://uploader.shimo.im/f/RQk3mIAd810Qvh6T.png!thumbnail)
![图片](https://uploader.shimo.im/f/4b4PRJ3rKe8B0Z5a.png!thumbnail)
![图片](https://uploader.shimo.im/f/VGUGQMu42TUtSWt9.png!thumbnail)

![图片](https://uploader.shimo.im/f/LpyH9SeeZyw7ou5K.png!thumbnail)


![图片](https://uploader.shimo.im/f/nd2DqJwG9volGRHW.png!thumbnail)

![图片](https://uploader.shimo.im/f/TPQ5r6ZtXgoKzZNp.png!thumbnail)

## 2-项目剖析页
### 2.1 - 项目解读
使用 Node.js 的 Express 及 Vue 完成用户、文章内容信息的管理。管理人员登录后台，可对文章分类及其中的内容进行管理。项目主要包含以下几个模块：
 
1. 前台
  1. 首页
  2. 展示详情页
2. 后台
  1. 后台登录
  2. 用户管理
    1. 用户增删改查
  3. 文章分类管理
    1. 文章分类增删改查
  4. 文章内容管理
    1. 文章列表
    2. 文章编辑
    3. 文章添加
### 2.3 - 技能要求 
* 掌握 HTML
* 掌握 CSS
* 掌握 Less
* 掌握 JavaScript
* 掌握 Axios
* 掌握 Nodejs
* 掌握 MySQL
* 了解 Vue
* 了解 Vue-router
* 了解 Element-ui


### 2.4 - 项目拆解
本项目主要分为  9 个任务：

任务一： 环境搭建
主要通过 express-generator 快速搭建 Web 服务框架，在项目目录下创建admin文件夹并使用 Vue-Cli 快速搭建前端框架。

任务二：Vue 路由模版配置
主要通过 vue-router 配置生成后台各个页面及访问路径。

任务三：页面样式
主要通过 Element-ui 完成后台页面的结构与样式。

任务四：Node.js API 
主要通过 knex.js 连接 MySQL，梳理需求完成所有的 API 接口。

任务五：用户和分类
主要通过API 获取、发送的用户数据实现用户、分类的增删改查。

任务六：登录与退出
主要通过 JWT 实现用户登录状态的管理。

任务七：文章管理
主要通过API 获取、发送的文章数据实现文章的增删改查。

任务八：前台页面配置
主要通过 nunjucks 生成首页和详情页的模版并进行数据填充。

任务九：后台页面配置
通过 Vue-CLI 的打包配置，定义打包文件打包位置，并在路由中定义渲染此模版。

任务十：项目优化
主要通过自己的想法，对项目进行调整和修改。