// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
//params，形参，代表所有参数所组成的对象
exports.main = async (params) => {
   //完成任意两个参数的加法
   //num1和num2就是参数对象的两个属性
   //这个属性可以想象成自定义函数的两个属性
   return params.num1 + params.num2;
    
}