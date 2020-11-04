// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:"../../images/11-小猪.png",
    login:"登录/注册",
    nickName:"111",
    active:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
            console.log(666,res);
            
            that.setData({
              avatarUrl:res.data.avatarUrl,
              nickName:res.data.nickName,
              active:false
            })
          }
        }
      }
    })
  },

  login(){
    wx.navigateTo({
      url: '../authorization/authorization',
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
    console.log(1111);
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