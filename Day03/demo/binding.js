// pages/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text:'123',
      users:['唐三','王尚荣','彭雨鑫','李思源'],
      userInfo:{ }
  },

  // event参数代表事件对象
  input(event){
      //1.先获取到文本框中输入的信息
      let text = event.detail.value;      
      //2.修改text变量的值
      this.setData({
        text
      });
  },

  getphonenumber(event){
      console.log(event);
  },

  getuserinfo(event){
    this.setData({
      userInfo:event.detail.userInfo
    });
    
  },

  

  remove(event){
      //获取被删除元素的id -- 索引值
      let id = event.target.dataset.id;
      //获取到原来信息的副本
      let users = this.data.users;     
      //删除指定的成员
      users.splice(id,1);      
      //重新赋值
      this.setData({
        users:users
      });
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