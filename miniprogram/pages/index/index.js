//index.js
const db = wx.cloud.database()

const app = getApp()

Page({
  data: {
    swiper:[],

  },

  onLoad: function() {

    //获取顶部轮播图片
    db.collection('indexs').where({
      _id: "swiper"
    }).get().then(res=> {
      console.log(res.data[0].imgs)
      this.setData({
        swiper:this.data.swiper.concat(res.data[0].imgs)
      })
    })
  },

})
