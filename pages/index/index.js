//index.js
var lottoList=[]
for(var i=0;i<10;i++){
  var o={};
  o.id=i;
  o.name='iphone 6';
  o.price=3000;
  o.totalCopies=3200;
  o.currentCopies=1234;
  o.image ='http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  o.avatarUrl = '';
  o.nickName = '';
  o.unitPrice = 1;
  lottoList.push(o);
}
var lastLottoList = []
for (var i = 0; i < 2; i++) {
  var o = {};
  o.id = i;
  o.name = 'iphone 6';
  o.price = 3000;
  o.totalCopies = 3200;
  o.currentCopies = 3199;
  o.image = 'http://f10.baidu.com/it/u=3967905364,1965626044&fm=72';
  o.avatarUrl = '';
  o.nickName='';
  o.unitPrice=1;
  lastLottoList.push(o);
}

var menus=[{
    id:0,
    name:'万里挑一',
    isSelected:false
  }, {
    id: 1,
    name: '一锤定音',
    isSelected: false
  }, {
    id: 2,
    name: '万里说明',
    isSelected: false
  }];

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    lottoList:lottoList,
    lastLottoList: lastLottoList,
    currentIndex:0,
    menus:menus
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  toggleMenu:function(e){
    var currentIndex = 0;
    if (e.detail&&(e.detail.current||e.detail.current==0)){
      currentIndex = e.detail.current;
    }else{
      currentIndex=e.currentTarget.dataset.id;
    }
    this.setData({currentIndex:currentIndex});
  },
  toDetailPage:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e);
    wx.navigateTo({
      url: '../lottoDetail/lottoDetail?id='+id,
    })
  },
  onShareAppMessage: function () {
    return {
      title: '万里挑一',
      path: '/index/index'
    }
  },
  toBuy:function(e){
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '购买失败',
      icon: id
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      
      var lottoListTemp=lottoList.map(function(item){
        var temp=item;
        item.avatarUrl = userInfo.avatarUrl;
        item.nickName = userInfo.nickName;   
        return item;     
      })
      var lastLottoListTemp = lastLottoList.map(function (item) {
        var temp = item;
        item.avatarUrl = userInfo.avatarUrl;
        item.nickName = userInfo.nickName;
        return item;
      })

      //更新数据
      that.setData({
        userInfo: userInfo,
        lottoList: lottoListTemp,
        lastLottoList: lastLottoListTemp
      })
      console.log(userInfo);
    })
  }
})
