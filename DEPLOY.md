# 🚀 部署指南

## 快速部署选项

### 1. GitHub Pages（推荐，免费）

**步骤1：创建GitHub仓库**
1. 登录GitHub
2. 点击 "New repository"
3. 仓库名称：`number-master-game`
4. 选择Public（免费）
5. 点击 "Create repository"

**步骤2：推送代码**
```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/number-master-game.git

# 推送代码
git push -u origin main
```

**步骤3：启用GitHub Pages**
1. 进入仓库设置
2. 找到 "Pages" 选项
3. Source选择 "Deploy from a branch"
4. Branch选择 "main"
5. 点击 "Save"
6. 等待1-2分钟，访问生成的URL

### 2. Netlify（推荐，免费）

**步骤1：连接GitHub**
1. 访问 [netlify.com](https://netlify.com)
2. 点击 "Sign up"
3. 选择 "Git Gateway"（无需GitHub token）
4. 选择刚才创建的GitHub仓库

**步骤2：配置部署**
1. Build command: 留空
2. Publish directory: 留空
3. 点击 "Deploy site"

**步骤3：自定义域名（可选）**
1. 部署完成后，点击 "Site settings"
2. 找到 "Domain management"
3. 添加自定义域名

### 3. Vercel（推荐，免费）

**步骤1：导入项目**
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择刚才创建的GitHub仓库

**步骤2：部署配置**
1. Project Name: `number-master`
2. Framework Preset: "Other"
3. 点击 "Deploy"

### 4. 本地部署（最简单）

**方法1：直接打开**
```bash
# 双击打开 index.html 文件
# 或者用浏览器打开
open index.html
```

**方法2：使用Python简单服务器**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# 然后访问 http://localhost:8000
```

## 📱 部署后测试

### 功能测试
- [ ] 游戏功能正常
- [ ] 排行榜显示正确
- [ ] 数据统计准确
- [ ] 响应式设计正常

### 性能测试
- [ ] 页面加载速度
- [ ] 移动端兼容性
- [ ] 跨浏览器兼容性

### 分享测试
- [ ] 社交媒体分享功能
- [ ] 链接可正常访问

## 🎯 推广准备

### 社交媒体文案
```
🎯 数字大师 - 猜数字游戏挑战！

测试你的直觉，挑战最少次数记录！
简单有趣，适合休闲娱乐。

🔗 游戏链接：[你的游戏URL]

#猜数字游戏 #益智游戏 #休闲游戏
```

### 推广渠道
1. 微信朋友圈
2. 微博
3. 游戏群组
4. 朋友推荐
5. 相关论坛

## 📊 数据收集

### 关键指标
- 访问量
- 游戏完成率
- 排行榜参与度
- 用户反馈

### 分析工具
- Google Analytics（可选）
- 百度统计（可选）
- 简单的访问计数器

## 🚀 立即行动

**现在就可以开始：**

1. **创建GitHub仓库**
2. **推送代码**
3. **启用GitHub Pages**
4. **分享给朋友**
5. **收集反馈**

预计完成时间：5-10分钟！

---

**享受游戏，挑战极限！** 🎯