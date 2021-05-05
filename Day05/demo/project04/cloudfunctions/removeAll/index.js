// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let db = cloud.database({env:'cloud1-0g32jwb190e14119'});
    let collect = db.collection('comments');
    collect.where({
        bookid:db.command.eq('528f0486ae397ddf6200af8a')
    }).remove();
}