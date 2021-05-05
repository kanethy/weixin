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
          age:db.command.inc(-5)
        },
        success:res=>{
            console.log(res);
        }
      });
  },

  //删除记录
  remove(){
      let db = wx.cloud.database();
      let collect = db.collection('comments');
      collect.where({
          age:db.command.gte(20)
      }).remove({
        success:res=>{
            console.log(res.stats.removed);
        }
      })
  },

  //按id查找记录
  byId(){
      let db = wx.cloud.database();
      let collect = db.collection('comments');
      let doc = collect.doc('ac5f38825f3f7765000fa95258047f15');
      console.log(doc.get({
        success:res=>{
          console.log(res);
        }
      }));
  },

  removeById(){
    let db = wx.cloud.database();
    let collect = db.collection('comments');
    collect.doc('ac5f38825f3f7765000fa95258047f11').remove({
      success:res=>{
          console.log(res);
      }
    })
  },
  //更新记录
  updateById(){
      let db = wx.cloud.database();
      let collect = db.collection('comments');
      collect.doc('ac5f38825f3f7765000fa95258047f12').update({
        data:{
            age:33
        }
      })
  },
  //替换更新记录
  setById(){
    let db = wx.cloud.database();
    let collect = db.collection('comments');
    collect.doc('abcdef').set({
      data:{
          age:17,
          username:'吴华',
          classDate:new Date()
      },
      success:res=>{
          console.log(res);
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