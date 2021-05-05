// pages/page05/page05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //上传图片到云存储空间，然后写入云数据库
  upload(){
      //获取云数据库对象
      let db = wx.cloud.database();
      let collect = db.collection('images');
      //选择图片
      wx.chooseImage({
        count: 1,
        sourceType:['album','camera'],
        success:res=>{
          //获取选择图片的临时路径
          let filePath = res.tempFilePaths[0];
          //获取文件扩展名
          let extension = filePath.substr(filePath.lastIndexOf('.') + 1).toLowerCase();
          //生成主文件名
          let mainname = '' + Date.now() + Math.ceil(Math.random() * 99999);
          //生成新的文件全称
          let filename = mainname + '.' + extension;
          //将文件上传到云存储空间内
          wx.cloud.uploadFile({
            filePath:filePath,
            cloudPath:filename,
            success:res=>{
              //将上传文件的fileID属性写入到云数据库中
              collect.add({
                data:{
                    'path':res.fileID
                }
              })
            }
          });
        }
      })
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