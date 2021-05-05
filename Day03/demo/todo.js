// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //待办事项数组
      todoList:['上课','培训','运动'],
      //待办事项变量
      worker:''
  },

  //删除待办项目项目
  remove(event){
    wx.showModal({
      title:'删除待办事项',
      content:'您确认要删除吗?',
      success:res=>{
        if(res.confirm){
          //获取通过自定义属性传递的被删除元素的ID
          let id = event.target.dataset.id;
          //获取原待办项目的副本
          let todoList = this.data.todoList;
          //根据ID删除指定成员
          todoList.splice(id,1);
          //重新赋值
          this.setData({
            todoList:todoList
          });
        }
      }
    });
  },

  //实时修改待办事项变量的值
  input(event){
      //获取输入框的信息
      let worker = event.detail.value;      
      //修改待办事项变量的值
      this.setData({
        worker:worker
      });
  },

  //单击"添加"按钮时将待办事项变量添加到待办事项数组
  add(){
      //获取待办事项变量的值
      let worker = this.data.worker;
      //将待办事项变量的值添加到待办事项数组
      let todoList = this.data.todoList;
      todoList.push(worker);
      this.setData({
        todoList:todoList
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