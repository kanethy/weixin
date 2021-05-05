//index.js
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
 
  onLoad: function () {
      //原始信息的副本
      let epub = this.data.epub;
      // 获取精选项目及其图书信息
      wx.request({
        url:'https://api.zhuishushenqi.com/ranking/gender',
        method:'GET',
        success:res=>{
            let response = res.data.epub;
            //item变量当前精选项目对象,包含_id、title等属性
            response.forEach(item=>{
                //创建对象
                let object = {};
                //对象属性赋值
                object.title = item.title;
                /////////////////////////////////////
                //获取当前精选项目图书信息
                wx.request({
                  url:'https://api.zhuishushenqi.com/ranking/' + item._id,
                  method:'GET',
                  success:res=>{
                    //对象属性赋值,
                    //res.data.ranking.books代表服务器返回的当前精选项目的图书信息,为array类型
                    object.books = res.data.ranking.books;
                    //将对象添加到epub局部变量中
                    epub.push(object);   
                    //更改data中的epub变量
                    this.setData({
                      epub:epub
                    });
                  }
                })
                //////////////////////////////////          
            });
           
           //console.log(this.data.epub);
        }
        
      });
      
  }
})
