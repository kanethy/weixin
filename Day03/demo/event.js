// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //按钮事件绑定的函数 -- tap
  tap(){
      console.log('button is tap');
  },

  longtap(){
    console.log('button is longtap');
  },

  f1(){
    console.log('button.tap');
  },
  f2(){
    console.log('button.longtap');
  },
  f3(){
    console.log('button.longpress');
  },

  f4(){
    console.log('view.tap');
  },

  f5(){
    console.log('button.bindtap');
  },

  f6(){
    console.log('button.catchtap');
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