// pages/page04/page04.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    //修改记录
    modify(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.where({
            age:db.command.gte(0)
        }).update({
            data:{
                //在现在的年龄基础上加5，如果是要减5，括号里面就填-5
                age:db.command.inc(5)
            }
        })
    },
    //删除记录
    remove(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.where({
            age:db.command.gte(20)
        }).remove({
            success:res=>{
                console.log(res.stats.removed)
            }
        })
    },
    //按照id查找记录
    byID(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        let doc = collect.doc("79550af26054a4d20aed75041971714f");
        doc.get({
            success:res=>{
                console.log(res)
            }
        })
        
    },
    //按照id删除记录
    removeByID(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.doc('79550af26054a4d20aed75041971714f').remove({
            success:res=>{
                console.log(res)
            }
        })
    },
    //按照id更新记录
    updateByID(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.doc('79550af26054a4d20aed75041971714g').update({
            data:{
                age:29
            }
        })
    },
    //按照id替换更新记录
    setByID(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.doc('79550af26054a4d20aed75041971714h').set({
            data:{
                age:29,
                uname:'kaneth',
                classDate:new Date()
            },
            success:res=>{
                console.log(res)
            }
        }),
        collect.doc('abcdsw').set({
            data:{
                age:30,
                uname:'kanethy',
                classDate: new Date()
            },
            success:res=>{
                console.log(res)
            }
        })
    },
    //查询记录数量
    count(){
        let db = wx.cloud.database();
        let collect = db.collection('comments');
        collect.where({
            age:db.command.gt(20)
        }).count({
            success:res=>{
                console.log(res)
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