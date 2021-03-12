import React, { Component } from 'react'
import Taro, { getSetting } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Canvas, Image } from '@tarojs/components'

import './elemen.scss'



export default class Element extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() {}

  componentDidShow() { }

  componentDidHide() { }

  constructor() {
    super(...arguments)
    this.state = {
      curren: true,
      lists: [
        {
          'image': '//www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/elm_take_head.png',
          'images':
            [
              'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_blue_1.png',
              'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_blue_2.png',
              'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_blue_3.png',
            ],
          'guo': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/right_blue.png',
          'erweima': 'https://img.alicdn.com/imgextra/i1/6000000000020/O1CN01wNgkKM1C1CaHOMx7W_!!6000000000020-0-o2oad.jpg',
        },
        {
          'image': "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/elm_fruits_head.png",
          'images':
            [
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_purple_1.png",
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_purple_2.png",
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_purple_3.png"
            ],
          'guo': "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/right_purple.png",
          'erweima': 'https://img.alicdn.com/imgextra/i2/6000000004562/O1CN01B38yDu1jZRW2IjmBs_!!6000000004562-0-o2oad.jpg',
        }
      ],
      shareUrl:''
    }
  }

  btnclick(value) {
    let { curren } = this.state;
    curren = value;
    // 更新状态
    this.setState({ curren });
  }

  // 绘制海报
  getSetting=()=>{
    const Ctx = Taro.createCanvasContext('ctx', this);
    console.log('aaaaa')
    Ctx.beginPath();
    Ctx.setStrokeStyle('red')
    Ctx.setLineWidth(1);
    Ctx.rotate((Math.PI/30)*20-Math.PI/2);
    Ctx.moveTo(0,0);
    Ctx.lineTo(10-20,0);
    Ctx.stroke();
    Ctx.restore();
    Ctx.save();
    

    // 开始绘制
    Ctx.draw()

   
  }



  render() {
    const { curren } = this.state
    return (

      <View className='Element'>
        <View className="main" style={curren ? 'background:linear-gradient(to top, #027dd8, rgba(2, 137, 221, 1))' : 'background:rgb(34, 30, 120)'}>
          {/* 头部 */}
          <View className="nav">
            <View className="btn">
              <View className="btn_waimai" style={curren ? 'color:#027cd2;background:#fff' : 'color:#fff;background:rgb(39, 33, 93)'} onClick={() => { this.btnclick(true) }}>外卖</View>
              <View className="btn_guoshu" style={curren ? 'color:#fff;background:#027cd2' : 'color:rgb(39, 33, 93);background:#fff'} onClick={() => { this.btnclick(false) }}>果蔬</View>
            </View>

            <image src={curren ? this.state.lists[0].image : this.state.lists[1].image} style={curren == false ? 'height:14rem' : 'height:10rem'} alt="" />
          </View>
          {/* 使用步骤 */}
          <View className="process">
            <View className="pro_left">
              <image src={curren ? this.state.lists[0].images[0] : this.state.lists[1].images[0]} alt="" />
              先领卷
            </View>
            <image class='guo' src={curren ? this.state.lists[0].guo : this.state.lists[1].guo} alt="" />
            <View className="pro_main">
              <image src={curren ? this.state.lists[0].images[1] : this.state.lists[1].images[1]} alt="" />
              再下单
            </View>
            <image class='guo' src={curren ? this.state.lists[0].guo : this.state.lists[1].guo} alt="" />
            <View className="pro_right">
              <image src={curren ? this.state.lists[0].images[2] : this.state.lists[1].images[2]} alt="" />
              拿返利
            </View>
          </View>
          {/* 二维码 */}
          <View className="qrcode">
            <View className="qrcode_title" style={curren ? 'color:#027cd2' : 'color:rgb(39, 33, 93)'}>长按识别二维码领红包</View>
            <image src={curren ? this.state.lists[0].erweima : this.state.lists[1].erweima} alt="" srcset="" />
            <View className="btns">
              <View className="btns1" style={curren ? 'color:#fff;background:#027cd2' : 'color:#fff;background:rgb(39, 33, 93)'}>分享赚钱</View>
              <View className="btns2" style={curren ? 'color:#027cd2;background:#fff' : 'color:rgb(39, 33, 93);border:1px solid #ffc11b'}>复制文案</View>
            </View>
            {/* 点击之后的遮罩 */}
            <View className="qrcode_shade">
              <View className="shade"></View>
              <View className="can">
                <image src="" alt="" />
                <Text class='te1'>长按图片发送给朋友或保存到手机</Text>
                <Text class='te2'>好友通过海报领券购买，您可赚取佣金</Text>
                <View className="btns">
                  <View className="btn1">复制链接</View>
                  <View className="btn2">关闭</View>
                </View>
              </View>
              <Canvas canvasId='ctx' id='ctx' type='2d' />
            </View>


          </View>
          {/* 返利注意事项 */}
          <View className="careful">
            <View className="careful_main">
              <View className="careful_title" style={curren ? 'color:#027cd2' : 'color:rgb(39, 33, 93)'}>
                <Text style={curren ? 'background:#027cd2' : 'background:rgb(39, 33, 93)'}></Text>
              返利注意事项
            </View>
              <View className="careful_con">
                <View>1.领券下单均有返利，返利按照订单实际支付金额为准；</View>
                <View>2.必须使用从本页获得的红包码领券，领券后使用红包下单才有返利；</View>
                <View>3.领券后在红包有效期内下单均有返利；</View>
                <View>4.饿了么绑定的手机号，需与领券登陆的手机号一致；</View>
                <View>5.下单后30分钟内会有订单返现提醒；</View>
                <View>6.无论饿了么新老客户，每个手机每天可领一次，红包金额随机发放。</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
