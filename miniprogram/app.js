App({
  onLaunch: function () {
    this.initGameData()
    this.checkUpdate()
  },

  initGameData: function () {
    const gameData = wx.getStorageSync('gameData') || {
      totalGames: 0,
      bestScore: null,
      scores: [],
      lastPlayDate: null
    }
    this.globalData = gameData
  },

  checkUpdate: function () {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
        }
      })
    }
  },

  recordGame: function (score) {
    this.globalData.totalGames++
    this.globalData.lastPlayDate = new Date().toISOString()
    
    if (!this.globalData.bestScore || score.attempts < this.globalData.bestScore) {
      this.globalData.bestScore = score.attempts
    }
    
    this.globalData.scores.push({
      attempts: score.attempts,
      date: new Date().toLocaleDateString(),
      usedHint: score.usedHint || false,
      timestamp: Date.now()
    })
    
    if (this.globalData.scores.length > 100) {
      this.globalData.scores = this.globalData.scores.slice(-100)
    }
    
    wx.setStorageSync('gameData', this.globalData)
  },

  getLeaderboard: function (limit = 10) {
    const sortedScores = [...this.globalData.scores].sort((a, b) => a.attempts - b.attempts)
    return sortedScores.slice(0, limit)
  },

  getStats: function () {
    return {
      totalGames: this.globalData.totalGames,
      bestScore: this.globalData.bestScore,
      averageAttempts: this.globalData.scores.length > 0 
        ? Math.round(this.globalData.scores.reduce((sum, score) => sum + score.attempts, 0) / this.globalData.scores.length)
        : 0
    }
  }
})