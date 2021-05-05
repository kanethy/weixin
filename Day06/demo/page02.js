// pages/page02/page02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //存储图片上传后的fileID
      path:''
  },

  upload(){
    //1.先让用户选择图片
    wx.chooseImage({
      count: 2,
      sourceType:['album','camera'],
      success:res=>{         
        //获取选择的图片文件路径
        let filePath = res.tempFilePaths[0];
        //获取图片文件的扩展名
        let extension = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
        //生成主文件名 Date.now()返回数字，Math.ceil返回也是数字，如果不加空字符串，两个数字相加返回的是相加的数字，不是拼接
        let mainame = '' + Date.now() +  Math.ceil(Math.random() * 9999999);
        //生成新的文件全称
        let filename = mainame + '.' + extension;
        //2.上传图片
        wx.cloud.uploadFile({
          //要上传的文件的路径
          filePath:filePath,
          //云存储路径
          cloudPath:filename,
          success:res=>{
              //console.log(res);
              this.setData({
                path:res.fileID
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