//index.js
const db = wx.cloud.database()

const app = getApp()

Page({
  data: {
    swiper:[],
    content_swiper:[],
    city:['郑州','洛阳','开封','邯郸','成都','上海','东京','重庆','更多'],
    num:0,
    house:[]
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
      // console.log(res.data);
      this.setData({
        content_swiper:this.data.content_swiper.concat(res.data)
      })
    })

    // goods房子
    db.collection('indexs').where({
      _id: "11a6d5c15f9a634c0074125c3cb2eb5b"
    }).get().then(res=> {
      // console.log(res.data[0].RECORDS.slice(0,4),111);
      this.setData({
        house:this.data.house.concat(res.data[0].RECORDS.slice(0,4))
      })
    })

    // // 测试
    // db.collection('detail').where({
    //   _id: "11a6d5c15f9a6111007411ac6164084b"
    // }).get().then(res=> {
    //   console.log(res.data,111);
    // })
  

  },
  highlight(e){
    this.setData({
      num:e.currentTarget.dataset.index
    })
  },
  more(){
    wx.navigateTo({
      url: '../more/more',
    })
  }

})
