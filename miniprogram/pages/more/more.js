// pages/more/more.js

const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
   option1: [
      { text: '推荐排序', value: 0 },
      { text: '好评优先', value: 1 },
      { text: '低价优先', value: 2 },
    ],
    option2: [
      { text: '价格', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    option3: [
      { text: '位置', value: 'A' },
      { text: '好评排序', value: 'B' },
      { text: '销量排序', value: 'C' },
    ],
    option4: [
      { text: '帅选', value: '一' },
      { text: '好评排序', value: '二' },
      { text: '销量排序', value: '三' },
    ],
    value1: 0,
    value2: 'a',
    value3: 'A',
    value4: '一',
    house:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中',
    // })

    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getData(){
       //获取房型数据

       wx.showLoading({
        title: '加载中',
      })

       db.collection('pig').where({
        name: "more"
      }).get().then(res=> {
        if(res.errMsg=="collection.get:ok"){
          wx.hideLoading()   ///加载消失
        }
        
        console.log(res.data[0].RECORDS);
        this.setData({
          house:this.data.house.concat(res.data[0].RECORDS)
        })
      })
  },
  city(){
    wx.navigateTo({
      url: '../city/city',
    })
  },
  detail(e){
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.dataset.index,
    })
    console.log(e.currentTarget.dataset.index);
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
    this.getData()
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
    this.setData({
      house:[]
    })
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(1111);
    
    this.getData()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})