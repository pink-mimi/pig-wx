// pages/detail/detail.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    house_detail:[],
    house:[],
    jiazai:true
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

    console.log(options.id,88888888888);

     //获取房源详情
    db.collection('pig').where({
      name: "detail"

    }).get().then(res=> {
      console.log(res.data[0].RECORDS[options.id],222222222);
      this.setData({
        house_detail:[]
      })
      this.data.house_detail.push(res.data[0].RECORDS[options.id])
      this.setData({
        house_detail:this.data.house_detail
      })
      console.log(this.data.house_detail,888);


      if(res.errMsg=="collection.get:ok"){
        wx.hideLoading()   ///加载消失
      }
      
    })

    // goods房子
    db.collection('pig').where({
      name: "index"
    }).get().then(res=> {
      // console.log(res.data[0].RECORDS,111);
      this.setData({
        house:this.data.house.concat(res.data[0].RECORDS.slice(0,10))
      })
    })
  
  },

  detail(e){
  //  console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.index,
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