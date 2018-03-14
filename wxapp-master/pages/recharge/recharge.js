Page({

  /**
   * 页面的初始数据
   */
  data: {
    gunArray: [[0, '01', 'white'], [1, '02', 'white'], [2, '03', 'white'], [3, '04', 'white'], [4,'05', 'white']],
    Previous_id:0,  //flage
    select_gunNumber:'',
    isAgree:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  bindAgreeChange: function (e) {
    console.log('同意条款')
    this.setData({
      isAgree: !!e.detail.value.length
    });
    console.log(this.data.isAgree)
  },
  cilck_gun:function(e){
  
    
    var i = e.currentTarget.dataset.id;
    var array_up=this.data.gunArray[i][2];
    
    var str ='gunArray['+i+'][2]';
    var old_str = 'gunArray[' + this.data.Previous_id + '][2]';
    if (str == old_str){
      this.setData({
        Previous_id: e.currentTarget.dataset.id,
        [str]: "green"
      });
    }else{
      this.setData({
        select_gunNumber: e.currentTarget.dataset.text,
        Previous_id: e.currentTarget.dataset.id,
        [str]: "green",
        [old_str]: "white"
      });
    }
    
  },
  cilck_pay:function(){
    var gunNumber = this.data.select_gunNumber;
    if (gunNumber==''){
      
      wx.showModal({
        title: '提示',
        content: '请选择枪号！',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } 
        }
      })  
    } else if (!this.data.isAgree){
    
      wx.showModal({
        title: '提示',
        content: '请勾选阅读并同意相关条款！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })  
    }else{
        console.log("go pay");
    }
  }
})