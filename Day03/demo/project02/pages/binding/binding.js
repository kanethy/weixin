// pages/binding/binding.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text:'1234',
        users:['lulu','chuchu','dd','tt','momo'],
        userInfo:{}
    },
    //event参数代表事件对象
    input(event){
        //先获取文本框的信息
        let text = event.detail.value;
        //再修改text的内容
        this.setData({
            text:text
        })
    },
    remove(event){
        //获取通过自定义属性传递的被删除元素的id
        let id = event.target.dataset.id;
        //获取到原来信息的副本
        let users = this.data.users;
        //删除选中的id的信息，splice得到的是删除的元素，所以需要先得到副本
        users.splice(id,1);
        //重新赋值
        this.setData({
            users:users
        })
    },
    getuserinfo(event){
        this.setData({
            userInfo:event.detail.userInfo
        }),
        console.log(event.detail.userInfo);
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