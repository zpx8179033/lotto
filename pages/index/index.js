//index.js
var lottoList=[]
for(var i=0;i<5;i++){
  var o={};
  o.id=i;
  o.name='iphone 6';
  o.price=3000;
  o.totalCopies=3200;
  o.currentCopies=1234;
  o.image ='http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  lottoList.push(o);
}

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    lottoList:lottoList
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  toDetailPage:function(){
    console.log(this)
    wx.navigateTo({
      url: '../lottoDetail/lottoDetail',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
