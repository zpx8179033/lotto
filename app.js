//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {  
        if (res.code){
          wx.request({
            url: 'https://www.oneinwan.cn/WeiXin/getSessionKeyByCode?js_code=' + res.code,
            success:function(result){
              if (result.statusCode===200){
                let userInfo = JSON.parse(result.data.result);
                console.log(userInfo);
                sessionStorage.setItem('openid', userInfo.openid);
                wx.request({
                  url: 'https://www.oneinwan.cn/User/getUserInfoByOpenid?open_id='+userInfo.openid,
                  success:function(result){
                    console.info(result);
                  }
                })
              }
            }
          })
        }
      }
    })
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
