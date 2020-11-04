// pages/authorization/authorization.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    nickname:false,
    phone:false,
    num:1,
    openid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

 
  nickname:function(e){
    // 查看是否授权
    var that=this
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              that.setData({
                nickname:true,
                // userInfo:res.userInfo,
                num:2
              })
              wx.setStorage({
                key:"userInfo",
                data:res.userInfo
              })
            }
          })

          // wx.setStorage({
          //   key:"userInfo",
          //   data:that.data.userInfo
          // })
        }
      }
    })
  },
  // phone: function (e) {

  // },
  phone() {
    // 定义调用云函数获取openid
        var page = this;
        wx.cloud.callFunction({
          name:'add',
          complete:res=>{
            console.log('openid--',res.result)
            var openid = res.result.openid
            page.setData({
            //   openid:openid,
              phone:true
            })
            wx.setStorage({
              key:"openid",
              data:openid
            })
          }
        })

        wx.showLoading({
          title: '加载中',
        })

        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 1000)
     
        wx.navigateBack({
          delta: 1,
        })

        // wx.hideLoading()
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
    // if(this.openid){
    //   wx.hideLoading()
    // }
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
    wx.hideLoading()

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