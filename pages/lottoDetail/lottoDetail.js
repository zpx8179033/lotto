Page({
  data:{
    id:0
  },
  
  onLoad:function(option){
    console.log(option);
    if(option.id){
      this.setData({
        id: option.id
      })
    }
  }
})
