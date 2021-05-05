// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      className:'Web2004',
      students:[
        {
          studentName:'朱泽宇',
          age:18,
          //true表示男,false表示女
          sex:true,
          //1表示专科,2表示本科,3表示研究生,4表示硕士,5表示博士
          education:1
        },
        {
          studentName:' 孙笑川',
          age:19,
          sex:false,
          education:2
        },
        {
          studentName:'张西西',
          age:16,
          sex:true,
          education:3
        },
        {
          studentName:'萌老闹',
          age:81,
          sex:true,
          education:4
        },
        {
          studentName:'冯小拓',
          age:22,
          sex:false,
          education:5
        }
      ]
      
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