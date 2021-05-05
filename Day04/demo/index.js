//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    books:[]
  },

  onLoad: function () {
      //发送异步的HTTPS请求
      wx.request({
        url:'https://api.douban.com/v2/book/search?q=javascript&apikey=0df993c66c0c636e29ecbb5344252a4a',
        method:'get',
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        success:res=>{
          this.setData({
            books:res.data.books
          });
        }
      });
  }
})
