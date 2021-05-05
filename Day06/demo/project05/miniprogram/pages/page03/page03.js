//1，连接到云数据库 -- 返回Database对象
let db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        results:[]
    },
    //在云数据库中插入记录
    insert(){
        //2,在集合中插入记录-- 返回Collection对象
        let collect = db.collection('comments');
        collect.add({
            data:{
                uname:'jack',
                age:32,
                frients:[
                    {
                        uname:'frank',
                        sex:false
                    },
                    {
                        uname:"lili",
                        sex:true
                    }
                ]
            }
        });

    },
    //在云数据库中查找所有记录
    selectAll(){
        //2,在集合中插入记录-- 返回Collection对象
        let collect = db.collection('comments');
        //获取集合的全部数据
        collect.get({
            success:res=>{
                this.setData({
                    results:res.data
                })
            }
        })
    },
     //查询指定字段
    specialField(){
         //2,在集合中插入记录-- 返回Collection对象
         let collect = db.collection('comments');
        collect.field({
            uname:true,
            age:true,
            _id:false,
            "frients.uname":true
        }).get({
            success:res=>{
                this.setData({
                    results:res.data
                })
            }
        })
    },
    //指定排序字段
    orderBy(){
         //2,在集合中插入记录-- 返回Collection对象
         let collect = db.collection('comments');
         collect.field({
                uname:true,
                age:true,
                _id:false
         }).orderBy('age','asc').get({
             success:res=>{
                this.setData({
                    results:res.data
                })
             }
         })
    },
    //限制从第几条返回及返回的数量
    skipAndLimit(){
        //2,在集合中插入记录-- 返回Collection对象
        let collect = db.collection('comments');
        collect.field({
            uname:true,
            age:true,
            _id:false
        }).orderBy('age','asc').skip(3).limit(3).get().then(res=>{
            this.setData({
                results:res.data
            })
        })
    },
    //指定查询条件
    byCondition(){
        //2,在集合中插入记录-- 返回Collection对象
        let collect = db.collection('comments');
        collect.field({
            uname:true,
            age:true,
            _id:false
        }).orderBy('age','asc').where({
            age:db.command.gte(30)
        }).get().then(res=>{
            this.setData({
                results:res.data
            })
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