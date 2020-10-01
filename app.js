//app.js
App({
  onLaunch: function () {
    // cloud develop initial
    wx.cloud.init({
      env: "jane-7g2q8aard7b29d68",
    })
  },
  globalData: {
    userInfo: null,
    phoneNumber: "15310327717",
  }
})
