// pages/collect/collect.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    house:[],
    user:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: "收藏" })      

    wx.showLoading({
      title: '加载中',  ////加载出现
    })

    // goods房子数据
    db.collection('pig').where({
      name: "more"
    }).get().then(res=> {
      if(res.errMsg=="collection.get:ok"){
        wx.hideLoading()   ///加载消失
      }
      
      console.log(res.data[0].RECORDS.slice(0,10),111);
      this.setData({
        house:this.data.house.concat(res.data[0].RECORDS.slice(0,10))
      })
    })
  },

  login(){
    wx.navigateTo({
      url: '../authorization/authorization',
    })
  },
  detail(e){
    //  console.log(e.currentTarget.dataset.index);
      wx.navigateTo({
        url: '../detail/detail?id='+e.currentTarget.dataset.index,
      })
    },

  getData(){
    var that=this
    var openid
    wx.getStorage({
      key: 'openid',
      success (res) {
        console.log(res,'openid')
        openid=res.data
      },
    })

    wx.getStorage({
      key: 'userInfo',
      success (res) {
        console.log(res,'userInfo')
        if(openid){
          console.log(1111);
          if(res.data){
            that.setData({
              user:true   ///表示已经登录
            })
          }
        }
      }
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
    var that=this;
      setTimeout(() => {
      that.getData()
      }, 1000);
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