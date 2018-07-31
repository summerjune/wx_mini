//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stringArray:
    [
      [
        {
          str: '王姗姗',
          styleClass:'textH1'
        },
        {
          str: '女 | 36岁 （1982年6月）',
          styleClass: ''
        },
        {
          str: '上海澳马信息技术服务有限公司 — 系统开发部 需求管理、系统设计、软件开发',
          styleClass: ''
        },
        {
          str: ' --> 1年微信小程序开发经验',
          styleClass: ''
        },
        {
          str: ' --> 2年需求管理和系统设计经验',
          styleClass: ''
        },
        {
          str: ' --> 5年软件测试经验',
          styleClass: ''
        },
        {
          str: '联系方式: 186 - 1680 - 6674',
          styleClass: ''
        },
        {
          str: 'Email: 54june@163.com',
          styleClass: ''
        }
      ],
      [
        {
          str: '2007年 ~至今',
          styleClass: 'textH1'
        },
        {
          str: '上海澳马信息技术服务有限公司 — 软件开发工程师',
          styleClass: ''
        },
        {
          str: '系统开发部，工作研究方向主要为：',
          styleClass: ''
        },
        {
          str: ' --> 微信小程序开发',
          styleClass: ''
        },
        {
          str: ' --> 大数据分析',
          styleClass: ''
        },
        {
          str: ' --> 系统原型设计',
          styleClass: ''
        },
        {
          str: ' --> 系统测试',
          styleClass: ''
        },
        {
          str: '参与的主要项目',
          styleClass: 'textH1'
        },
        {
          str: '上海久事公共交通集团——“城市智慧公交一体化指挥调度技术示范基地”项目',
          styleClass: ''
        }
      ]
    ]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber,
    })
  }

})
