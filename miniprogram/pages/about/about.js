Page({
  data: {
    stats: {},
    version: '1.0.0',
    releaseDate: '2024-01-01'
  },

  onLoad: function () {
    this.loadStats()
  },

  onShow: function () {
    this.loadStats()
  },

  loadStats: function () {
    const app = getApp()
    const stats = app.getStats()
    
    this.setData({
      stats: stats
    })
  },

  shareGame: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  onShareAppMessage: function () {
    return {
      title: '数字大师 - 猜数字挑战',
      path: '/pages/index/index',
      imageUrl: '/images/share.jpg'
    }
  },

  contactSupport: function () {
    wx.showModal({
      title: '联系我们',
      content: '感谢你的支持！如有问题或建议，请通过微信联系我们。',
      confirmText: '知道了',
      showCancel: false
    })
  }
})