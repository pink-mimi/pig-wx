// pages/city/city.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexList: [],
    city:[],
    num:0,
    hot_city:[
      {
        name:["北京","上海","成都",'广州','深圳','香港','三亚','重庆']
      },
      {
        name:["东京","大阪","京都",'曼谷','普吉岛','清迈','芭提雅','苏梅岛']
      }
    ],
    city2:['爱丁堡', '艾克斯' , '埃里温' , '阿利坎特',  '阿姆斯特丹']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 1000)

    //获取城市数据
    db.collection('pig').where({
      name: "city"
    }).get().then(res=> {
      var a=[]
      for(var i=0 ;i<res.data[0].RECORDS.length;i++){
        a.push(res.data[0].RECORDS[i].letter)
      }
      // console.log(res.data[0].RECORDS);
      this.setData({
        city:this.data.city.concat(res.data[0].RECORDS),
        indexList:this.data.indexList.concat(a)
      })

      if(res.errMsg=="collection.get:ok"){
        wx.hideLoading()   ///加载消失
      }

    })
  },
  qiehuan(e){
    console.log(e.currentTarget.dataset.index);
    this.setData({
      num:e.currentTarget.dataset.index
    })
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