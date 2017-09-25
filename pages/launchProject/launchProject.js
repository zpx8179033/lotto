//index.js
var allProject = []
for (var i = 0; i < 10; i++) {
  var o = {};
  o.id = i;
  o.name = '小米8';
  o.price = 3000;
  o.totalCopies = 3200;
  o.currentCopies = 3199;
  o.awardNumber = 456;
  o.image = 'http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  o.avatarUrl = '';
  if (i % 2 === 0) {
    o.isEnd = false;
  } else {
    o.isEnd = true;
  }
  o.nickName = '';
  o.unitPrice = 1;
  allProject.push(o);
}
var waitingList = []
for (var i = 0; i < 2; i++) {
  var o = {};
  o.id = i;
  o.name = '小米4';
  o.price = 3000;
  o.totalCopies = 3200;
  o.currentCopies = 3199;
  o.awardNumber = 456;
  o.image = 'http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  o.avatarUrl = '';
  o.nickName = '';
  o.unitPrice = 1;
  waitingList.push(o);
}

var endList = []
for (var i = 0; i < 2; i++) {
  var o = {};
  o.id = i;
  o.name = '小米4';
  o.price = 3000;
  o.totalCopies = 3200;
  o.currentCopies = 3199;
  o.awardNumber = 456;
  o.image = 'http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  o.avatarUrl = '';
  o.nickName = '';
  o.unitPrice = 1;
  endList.push(o);
}

var menus = [{
  id: 0,
  name: '全部',
  isSelected: false
}, {
  id: 1,
  name: '进行中',
  isSelected: false
}, {
  id: 2,
  name: '已结束',
  isSelected: false
}];

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    allProject: allProject,
    waitingList: waitingList,
    currentIndex: 0,
    menus: menus
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  toggleMenu: function (e) {
    var currentIndex = 0;
    if (e.detail && (e.detail.current || e.detail.current == 0)) {
      currentIndex = e.detail.current;
    } else {
      currentIndex = e.currentTarget.dataset.id;
    }
    this.setData({ currentIndex: currentIndex });
  },
  toDetailPage: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(e);
    wx.navigateTo({
      url: '../lottoDetail/lottoDetail?id=' + id,
    })
  },
  onShareAppMessage: function () {
    return {
      title: '万里挑一',
      path: '/index/index'
    }
  },
  toBuy: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '购买失败' + id,
      icon: id
    });
  },
  toAward: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '去领奖' + id,
      icon: id
    });
  },
  toCheck: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '去查看' + id,
      icon: id
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {

      var allProjectTemp = allProject.map(function (item) {
        var temp = item;
        item.avatarUrl = userInfo.avatarUrl;
        item.nickName = userInfo.nickName;
        return item;
      })
      var waitingListTemp = waitingList.map(function (item) {
        var temp = item;
        item.avatarUrl = userInfo.avatarUrl;
        item.nickName = userInfo.nickName;
        return item;
      })
      var endListTemp = endList.map(function (item) {
        var temp = item;
        item.avatarUrl = userInfo.avatarUrl;
        item.nickName = userInfo.nickName;
        return item;
      })

      //更新数据
      that.setData({
        userInfo: userInfo,
        allProject: allProjectTemp,
        waitingList: waitingListTemp,
        endList: endListTemp
      })
      console.log(userInfo);
    })
  }
})
