// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    //存储轮播图
    swipers:[
      'http://static.zongheng.com/upload/recommend/0f/55/0f559ae37f1e9ddf1909b6d60c911234.jpeg',
      'http://static.zongheng.com/upload/recommend/d9/a2/d9a2edf5a4ffef5afc5283168fe51013.jpeg',
      'http://static.zongheng.com/upload/recommend/96/0e/960e8aa48135c1b7936f689bc2f16f23.jpeg',
      'http://static.zongheng.com/upload/recommend/ba/5c/ba5cb7104b17c036016a22ba2979d05b.jpeg',
      'http://static.zongheng.com/upload/recommend/f8/a7/f8a73c58c8dae0914d5a9191e3fe06a0.jpeg'
      ],
      //存储精选项目及其图书信息
      epub:[]
  },
  
  onLoad() {
    //原始信息的副本
    let epub=this.data.epub;
    //console.log(epub);
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method:'GET',
      success: res=>{
        //console.log(res.data.epub);
        //获取到的epub是一个数组，遍历得到数组中的每个对象
        res.data.epub.forEach(item => {
          //声明一个空对象
          let obj={};
          //把遍历得到的对象中的title放到obj对象中
          //对象属性赋值
          obj.title=item.title;
          //获取当前精选项目图书信息
          wx.request({
            url: 'https://api.zhuishushenqi.com/ranking/'+item._id,
            method:'GET',
            success:res=>{
              //console.log(res);
              obj.books=res.data.ranking.books;

              //因为是异步请求，所以需要把以下代码写到第二次请求里面，保证获取到数据后，重新赋值
              //将obj对象添加到局部变量epub中
              epub.push(obj);
              //重新赋值data中的epub
              this.setData({
                epub:epub
              });
            }
          })
        });
        console.log(this.data.epub);
      }
    
    })
  }
})