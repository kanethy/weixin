// pages/page01/page01.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    f1(){
        wx.navigateTo({
          url: '/pages/page02/page02'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        console.log('page01.onload');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('page01.onready')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('page01.onshow')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('page01.onhide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('page01.onunload')
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