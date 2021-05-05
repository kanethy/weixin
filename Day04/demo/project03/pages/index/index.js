// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    subjects:[]
  },
  
  onLoad() {
    wx.request({
      url: 'https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method:'GET',
      header:{
        'content-type':'application/x-www-form-urlencoded' 
      },
      success:res=>{
        console.log(res);
        this.setData({
          subjects:res.data.subjects
        })
      }
    })
  },
  
  
})
