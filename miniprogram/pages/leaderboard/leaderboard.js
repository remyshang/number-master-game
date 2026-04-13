Page({
  data: {
    leaderboard: [],
    stats: {},
    loading: true
  },

  onLoad: function () {
    this.loadLeaderboard()
  },

  onShow: function () {
    this.loadLeaderboard()
  },

  loadLeaderboard: function () {
    const app = getApp()
    const leaderboard = app.getLeaderboard(20)
    const stats = app.getStats()
    
    this.setData({
      leaderboard: leaderboard,
      stats: stats,
      loading: false
    })
  },

  onShareAppMessage: function () {
    return {
      title: '数字大师 - 排行榜',
      path: '/pages/leaderboard/leaderboard',
      imageUrl: '/images/share.jpg'
    }
  },

  formatRank: function (index) {
    const ranks = ['🥇', '🥈', '🥉']
    return ranks[index] || `${index + 1}`
  },

  getBadgeClass: function (item) {
    if (!item.usedHint) return 'rank-badge perfect'
    return 'rank-badge hint'
  },

  getBadgeText: function (item) {
    if (!item.usedHint) return '完美通关'
    return '使用提示'
  }
})