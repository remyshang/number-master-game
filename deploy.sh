#!/bin/bash

# GitHub Pages 部署脚本
# 用于部署数字大师游戏到 GitHub Pages

# 配置变量
REPO_NAME="number-master-game"
GITHUB_USERNAME="remyshang"  # 替换为你的GitHub用户名
DEPLOY_BRANCH="gh-pages"
SOURCE_DIR="."

echo "🚀 开始部署数字大师游戏到 GitHub Pages..."

# 检查Git是否已安装
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装，请先安装 Git"
    exit 1
fi

# 检查GitHub CLI是否已安装
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI 未安装，将使用传统方式提交"
    USE_GH_CLI=false
else
    echo "✅ GitHub CLI 已安装"
    USE_GH_CLI=true
fi

# 创建并切换到部署分支
echo "📂 创建部署分支..."
git checkout -b $DEPLOY_BRANCH 2>/dev/null || git checkout $DEPLOY_BRANCH

# 如果是空分支，设置远程仓库
if [ -z "$(git remote -v)" ]; then
    echo "🔗 设置远程仓库..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# 添加所有文件
echo "📝 添加文件到Git..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "部署数字大师游戏到GitHub Pages $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到GitHub
echo "📤 推送到GitHub..."
if [ "$USE_GH_CLI" = true ]; then
    # 使用GitHub CLI
    gh repo create $REPO_NAME --public --source=. --remote=origin --push
else
    # 使用传统Git方式
    git push -u origin $DEPLOY_BRANCH
fi

echo "✅ 部署完成！"
echo "🎯 你的游戏将在以下地址可用："
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "⏳ 等待几分钟后即可访问"

# 提示如何访问
echo ""
echo "📱 访问方式："
echo "1. 直接访问: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo "2. 或下载number-master-game.html文件在浏览器中打开"