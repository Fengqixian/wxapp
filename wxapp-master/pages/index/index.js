

Page({
  data: {
    
    inputShowed: false,
    inputVal: "",
    latitude: "",
    longitude: "",
    speed:"",
    accuracy:"",
    fueltype:"CNG",
    height:'25vh',
    markers: [{
      iconPath: "/images/station_flag.png",
      id: 0,
      latitude: 30.721589,
      longitude: 103.90256,
      width: 30,
      height: 30,
    
      callout: { content:"厚普001", display:"ALWAYS"}
    }],
    viewColor: ['#FFC125', '#FF4040', '#C9C9C9', '#B3EE3A','#A52A2A'],
    direction:"up"
  },
  onLoad:function(){
    
    this.mapCtx = wx.createMapContext('SelectStationMap');
    
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
       var  latitude = res.latitude
       var longitude = res.longitude
       var speed = res.speed
       var accuracy = res.accuracy
      
       that.setData({
         latitude: latitude,
         longitude: longitude,
         speed: speed,
         accuracy: accuracy
       });
      }
    })
    
  
  }, regionchange(e) {
    this.setData({
      height: '25vh'
    });
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  Selectfueltype:function(){//修改燃料类型
    
    var ftype = this.data.fueltype;
    
    if (ftype =="LNG"){
      this.setData({
        fueltype: "CNG"
      });
    }else{
      this.setData({
        fueltype: "LNG"
      });
    }
    console.log(this.data.fueltype);
  },
  click_view_stationView:function(){
    console.log(this.data.height);
    if (this.data.height=="25vh"){
      this.setData({
        height: '53vh',
        direction: "down"
      });
      }else{
      this.setData({
        height: '25vh',
        direction: "up"
      });
      }
    

  },
  userManager:function(){

    wx.navigateTo({
      url: '../recording/recording',
    })
  },
  go_i_address:function(){

    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(latitude);
        console.log(longitude);
        that.setData({
          latitude: latitude,
          longitude: longitude,
          speed: speed,
          accuracy: accuracy
        });
      }
    })
  },
  go_station:function(e){
    wx.navigateTo({
      url: '../recharge/recharge',
    })
  }
});