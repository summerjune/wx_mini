//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
  },
  tel:function(e){
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber,
    })
  }

})
