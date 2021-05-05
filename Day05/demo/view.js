// pages/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储图书的ID
    id:'',
    //存储图书信息
    info:{},
    //存储文章是否存在评论
    hasComments:false,
    //存储文章的评论信息
    comments:[],
    //当前的页码
    page:1,
    //每页显示的评论数量
    pagesize:15
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let id = options.id;
      console.log('初始情况下获取的文章的ID' + id);
      //获取图书信息
      wx.request({
        url:'https://api.zhuishushenqi.com/book/' + id,
        method:'GET',
        success:res=>{
            this.setData({
              info:res.data,
              id:id
            });           
        }
      });
      //获取图书的评论
      wx.request({
        url:'https://api.zhuishushenqi.com/post/review/by-book?book=' + id + '&sort=updated&start=0&limit=' + this.data.pagesize,
        method:'GET',
        success:res=>{
          //console.log(res);
          this.setData({
            hasComments:!!res.data.total,
            comments:res.data.reviews
          })
        }
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
      let page = this.data.page;
      page++;
      this.setData({
        page:page
      });
      //计算从第几条记录开始返回
      let start = (page - 1) * this.data.pagesize;
      console.log('当前文章的ID' + this.data.id);
      //以计算出来的start为URL的组成部分，向服务器发送异步的请求
      wx.request({
        url: 'https://api.zhuishushenqi.com/post/review/by-book?book=' + this.data.id + '&sort=updated&start=' + start + '&limit=' + this.data.pagesize,
        success:res=>{
          this.setData({
            comments:res.data.reviews
          })
        }
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})