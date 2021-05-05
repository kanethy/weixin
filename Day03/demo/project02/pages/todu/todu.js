// pages/todu/todu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //待办事项变量数组
        toduList:['上课','运动','培训','逛街'],
        //待办事项变量
        worker:""
  
    },

    remove(event){
        wx.showModal({
          content: '您是否确认删除？',
          title: '删除待办事项',
          success: (result) => {
              //如果点击确认按钮
              if(result.confirm){
                //获取通过自定义属性传递的被删除元素的id
                let id = event.target.dataset.id;
                //获取到原来信息的副本
                let toduList = this.data.toduList;
                //删除选中的id的信息，splice得到的是删除的元素，所以需要先得到副本
                toduList.splice(id,1);
                this.setData({
                    //重新赋值
                    toduList:toduList
                })
              }
          },
        })
    },

    input(event){
        //获取输入框的值
        let worker = event.detail.value;
        //修改待办事项变量的值
        this.setData({
            worker:worker
        })
    },
    add(){
        //获取待办事项变量的值
        let worker = this.data.worker;
        if(worker.length==0){
            wx.showToast({
              title: '待办事项禁止为空',
              duration: 3000,
              icon:"none",
              mask: true,
            })
        }else{
            //获取待办事项数组
            let toduList = this.data.toduList;
            //把获取到的待办事项变量值添加到待办事项数组
            toduList.push(worker);
            //重新赋值
            this.setData({
                toduList:toduList,
                //添加完后输入框情况,input组件需要添加属性value={{worker}}
                worker:''
            })
        }

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