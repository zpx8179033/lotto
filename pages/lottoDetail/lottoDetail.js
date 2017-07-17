var detailmeun = [{
  id: 0,
  name: '万宝',
  isSelected: false
}, {
  id: 1,
  name: '进度',
  isSelected: false
}, {
  id: 2,
  name: '领奖',
  isSelected: false
},{
    id: 3,
    name: '发起者',
    isSelected: false
},{
    id: 4,
    name: '说明',
    isSelected: false
}];
var prizeInfo = {};
prizeInfo={
  img:"http://i1.yongche.name/media/g2/M03/18/04/rBEBJVlnIfSIZwleAAAgTr2R7yYAAJXSwP_o4sAACBm826.png",
  title:'话费充值200元充值卡',
  price:'200',
  label: ['京东直购', '什么鬼'],
  shengyu:200,
  all:400
}
var myJoin = {};
myJoin = {
  count:4,
  list:[
    {
      time:'2017-7-13 16:42:38',
      code:'3424'
    },
    {
      time:'2017-7-13 16:42:27',
      code:'4239'
    },
    {
      time: '2017-7-13 16:42:38',
      code: '5321'
    },
    {
      time: '2017-7-13 16:42:27',
      code: '6633'
    }
  ]
}

Page({
  data:{
    id:0,
    detailmeun:detailmeun,
    currentIndex:0,
    prizeInfo:prizeInfo,
    myJoin:myJoin
  },
  
  onLoad:function(option){
    console.log(option);
    if(option.id){
      this.setData({
        id: option.id
      })
    }
  },
  detailSwitch:function(e) {
    var currentIndex = 0;
    console.log(e);
    if (e.detail && (e.detail.current || e.detail.current == 0)) {
      currentIndex = e.detail.current;
      console.log(currentIndex)
    } else {
      //啥意思
      currentIndex = e.currentTarget.dataset.id;
    }
    this.setData({currentIndex: currentIndex});
    
  },
  
})



