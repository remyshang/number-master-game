Page({
  data: {
    targetNumber: 0,
    attempts: 0,
    gameActive: false,
    feedback: '',
    feedbackType: '',
    inputValue: '',
    showHint: false,
    hintText: ''
  },

  onLoad: function () {
    this.initGame()
  },

  onShow: function () {
    this.loadGameData()
  },

  initGame: function () {
    const targetNumber = Math.floor(Math.random() * 100) + 1
    this.setData({
      targetNumber: targetNumber,
      attempts: 0,
      gameActive: true,
      feedback: '猜一个1到100之间的数字吧！',
      feedbackType: '',
      inputValue: '',
      showHint: false,
      hintText: ''
    })
  },

  makeGuess: function (e) {
    const guess = parseInt(e.detail.value)
    
    if (!this.data.gameActive) {
      this.showFeedback('请先开始新游戏！', 'error')
      return
    }
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      this.showFeedback('请输入1到100之间的数字！', 'error')
      return
    }
    
    const newAttempts = this.data.attempts + 1
    
    if (guess === this.data.targetNumber) {
      this.handleWin(newAttempts)
    } else if (guess < this.data.targetNumber) {
      this.showFeedback('📈 太小了！再大一点', 'warning')
    } else {
      this.showFeedback('📉 太大了！再小一点', 'warning')
    }
    
    this.setData({
      attempts: newAttempts,
      inputValue: ''
    })
  },

  handleWin: function (attempts) {
    let message = `🎉 恭喜！答案就是${this.data.targetNumber}！你用了${attempts}次尝试`
    let feedbackType = 'success'
    
    if (!this.data.showHint) {
      message += ' 🌟 完美通关！'
    }
    
    this.setData({
      gameActive: false,
      feedback: message,
      feedbackType: feedbackType
    })
    
    const app = getApp()
    app.recordGame({
      attempts: attempts,
      usedHint: this.data.showHint
    })
    
    this.loadGameData()
  },

  showFeedback: function (message, type) {
    this.setData({
      feedback: message,
      feedbackType: type
    })
  },

  newGame: function () {
    this.initGame()
  },

  useHint: function () {
    if (!this.data.gameActive || this.data.showHint) return
    
    const half = 50
    let hint = ''
    
    if (this.data.targetNumber <= half) {
      hint = '神秘数字在1到50之间'
    } else {
      hint = '神秘数字在51到100之间'
    }
    
    this.setData({
      showHint: true,
      hintText: hint
    })
  },

  shareGame: function () {
    const app = getApp()
    const stats = app.getStats()
    
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  onShareAppMessage: function () {
    const app = getApp()
    const stats = app.getStats()
    
    return {
      title: `数字大师 - 我用了${stats.bestScore || '?'}次猜中数字！`,
      path: '/pages/index/index',
      imageUrl: '/images/share.jpg'
    }
  },

  loadGameData: function () {
    const app = getApp()
    const stats = app.getStats()
    
    this.setData({
      bestScore: stats.bestScore,
      totalGames: stats.totalGames
    })
  }
})