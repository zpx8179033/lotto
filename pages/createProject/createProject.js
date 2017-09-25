var result =`{
  "products":[
    {
      "id":0,
      "url":"https://item.jd.com/3133857.html",
      "name": "Apple iPhone 7 128G",
      "image": "https://img14.360buyimg.com/n1/s546x546_jfs/t4642/110/753072126/121222/5556881f/58d484a0N1d9d2ebf.jpg",
      "price": 5799
    },
    {
      "id":1,
      "url":"https://item.jd.com/4386717.html",
      "name": "小米6 6GB+64GB",
      "image": "https://img14.360buyimg.com/n1/s546x546_jfs/t5215/252/15502760/100416/cb06f1da/58f709adN45511018.jpg",
      "price": 2799
    },
    {
      "id":2,
      "url":"https://item.jd.com/4390094.html",
      "name": "小米 红米Note4X 全网通版 3GB+32GB",
      "image": "https://img14.360buyimg.com/n0/jfs/t6361/18/1453135886/155619/cb739479/59521207N35ae90e3.jpg",
      "price": 999
    },
    {
      "id":3,
      "url":"https://item.jd.com/12883073909.html",
      "name": "bong 4 智能手环",
      "image": "https://img14.360buyimg.com/n0/jfs/t5149/228/1456845066/145923/261f3faf/59104a45N73b3d773.jpg",
      "price": 199
    },
    {
      "id":4,
      "url":"https://item.jd.com/11193291142.html",
      "name": "App Store 充值卡 100元",
      "image": "https://img14.360buyimg.com/n0/jfs/t3094/138/5574117710/267723/ab604ad7/5875cb37N20759aa0.jpg",
      "price": 100
    },
    {
      "id":5,
      "url":"https://item.jd.com/200100520001.html",
      "name": "全国移动流量充值卡 1000M",
      "image": "https://img11.360buyimg.com/n1/jfs/t3112/57/3049397404/56535/1480f9d2/57eb7cd3Ncc883cc1.png",
      "price": "39.90"
    }
  ]
}`;

// createProject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'第一步',
    products: [],
    currentIndex:0,
    selectedProduct:{},
    productProperty:{
      unitPrice:0,
      copies:0,
    },
    submitDisplay:false
  },
  toSecondStep:function(e){
    this.setData({
        currentIndex: 1,
        title:'第二步'
      });
  },
  checkPrice:function(){
    let isDisplay = false
    if (this.data.productProperty.unitPrice * this.data.productProperty.copies - this.data.selectedProduct.price>=0){
      isDisplay=true
    }
    this.setData({
      submitDisplay: isDisplay
    })
  },
  inputCopiesChanged:function(e){
    var value=e.detail.value;
    this.setData({
      productProperty:{
        copies:value,
        unitPrice: this.data.productProperty.unitPrice,
      }
    })
    this.checkPrice();
  },
  inputUnitPriceChanged: function (e) {
    var value = e.detail.value;
    this.setData({
      productProperty: {
        copies: this.data.productProperty.copies,
        unitPrice: value,
      }
    })
    this.checkPrice();
  },
  copyProductUrl: function (e) {
    var url = e.currentTarget.dataset.url;
    if(url){
      wx.setClipboardData({
        data: url,
      })
      wx.showModal({
        content: '已经复制到剪切板，请到浏览器中打开',
        title: '复制成功',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  selectOne: function (e) {
    var id = e.currentTarget.dataset.id;
    var tempProducts=this.data.products;
    tempProducts.map(function(item, index){
      if(index===id){
        item.isSelected=true;        
      }else{
        item.isSelected = false;
      }
      return item;
    })
    this.setData({
      products:tempProducts,
      selectedProduct:tempProducts[id]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tempProducts = JSON.parse(result).products;
    tempProducts=tempProducts.map(function(item){
      item.isSelected=false;
      return item;
    })
    tempProducts[0].isSelected=true;
    this.setData({
      products: tempProducts,
      selectedProduct: tempProducts[0]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})