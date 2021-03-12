import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtTabBar, AtForm, AtSwitch } from 'taro-ui'
import PropTypes from 'prop-types'

import './meituan.scss'



export default class Meituan extends Component {

  componentWillMount() { }

  componentDidMount() { 
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor() {
    super(...arguments)
    this.state = {
      curren: true,
      lists:[
        {'image':'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/mt_take_head.png',
          'images':
            [
                'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_yellow_1.png',
                'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_yellow_2.png',
                'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_yellow_3.png',
            ],
          'guo':'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/right_yellow.png',
          'erweima':'https://www.qihuanchuangke.cn/addons/hc_takeout/goods/meituan_waimai_.png?v=1615259622',
        },
        {
          'image':"https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/mt_supermarket_head.png",
          'images':
            [
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_green_1.png",
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_green_2.png",
              "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/process_green_3.png"
            ],
          'guo':"https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/right_green.png",
          'erweima':'https://www.qihuanchuangke.cn/addons/hc_takeout/goods/meituan_shangchao_.png?v=1615337899',
        }
      ]
    }
  }

  btnclick(value){
    let {curren} = this.state;
    curren=value;
    // 更新状态
    this.setState({curren});
  }




  render() {
    const {curren} = this.state
    return (
      <View className='Meituan'>
        <View className="main" style={curren ? 'background:rgb(255, 193, 27)' : 'background:rgb(54, 187, 99)'}>
          {/* 头部 */}
          <View className="nav">
            <View className="btn">
              <View className="btn_waimai" style={curren  ? 'color:rgb(255, 193, 27);background:#fff' : 'color:#fff;background:rgb(54, 187, 99)'} onClick={()=>{this.btnclick(true)}}>外卖</View>
              <View className="btn_guoshu" style={curren  ? 'color:#fff;background:rgb(255, 193, 27)'   : 'color:rgb(54, 187, 99);background:#fff'} onClick={()=>{this.btnclick(false)}}>果蔬</View>
            </View>

            <image  src={curren  ?this.state.lists[0].image :this.state.lists[1].image} style={curren ==false ? 'height:14rem' : 'height:10rem'} alt="" />
          </View>
          {/* 使用步骤 */}
          <View className="process">
            <View className="pro_left">
              <image src={curren  ?this.state.lists[0].images[0] :this.state.lists[1].images[0]} alt="" />
              先领卷
            </View>
            <image class='guo' src={curren  ?this.state.lists[0].guo :this.state.lists[1].guo} alt="" />
            <View className="pro_main">
              <image src={curren ?this.state.lists[0].images[1] :this.state.lists[1].images[1]} alt="" />
              再下单
            </View>
            <image class='guo' src={curren ?this.state.lists[0].guo :this.state.lists[1].guo} alt="" />
            <View className="pro_right">
              <image src={curren ?this.state.lists[0].images[2] :this.state.lists[1].images[2]} alt="" />
              拿返利
            </View>
          </View>
          {/* 二维码 */}
          <View className="qrcode">
            <View className="qrcode_title" style={curren  ? 'color:rgb(255, 193, 27)' : 'color:rgb(54, 187, 99)'}>长按识别二维码领红包</View>
            <image src={curren ?this.state.lists[0].erweima :this.state.lists[1].erweima} alt="" srcset="" />
            <View className="btns">
              <View className="btns1" style={curren ? 'color:#fff;background:rgb(255, 193, 27)' : 'color:#fff;background:rgb(54, 187, 99)'}>分享赚钱</View>
              <View className="btns2" style={curren ? 'color:rgb(255, 193, 27);background:#fff' : 'color:rgb(54, 187, 99);border:1px solid rgb(54, 187, 99)'}>复制文案</View>
            </View>
          </View>
          {/* 返利注意事项 */}
          <View className="careful">
            <View className="careful_main">
              <View className="careful_title" style={curren  ? 'color:rgb(255, 193, 27)' : 'color:rgb(54, 187, 99)'}>
                <Text style={curren ? 'background:rgb(255, 193, 27)' : 'background:rgb(54, 187, 99)'}></Text>
              返利注意事项
            </View>
              <View className="careful_con">
                <View>1.美团外卖，必须使用带<Text>【渠道专享】</Text>标记的优惠券才有返利；</View>
                <View>2.领券后在红包有效期内下单均有返利；</View>
                <View>3.美团绑定的手机号，需与领券登陆的手机号一致；</View>
                <View>4.无论美团新老用户，每个手机号每天可领一次，红包金额随机发放。</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
