//index.js
const db = wx.cloud.database()

const app = getApp()

Page({
  data: {
    swiper:[],
    content_swiper:[],
    city:['郑州','洛阳','开封','邯郸','成都','上海','东京','重庆','更多'],
  },

  onLoad: function() {

    //获取顶部轮播图片
    db.collection('indexs').where({
      name: "swiper"
    }).get().then(res=> {
      // console.log(res.data);
      this.setData({
        swiper:this.data.swiper.concat(res.data)
      })
    })
    // index第二个轮播
    db.collection('indexs').where({
      name: "content_swiper"
    }).get().then(res=> {
      console.log(res.data);
      this.setData({
        content_swiper:this.data.content_swiper.concat(res.data)
      })
    })
  

  },

})
