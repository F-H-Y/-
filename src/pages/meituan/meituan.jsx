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
    // ????????????
    this.setState({curren});
  }




  render() {
    const {curren} = this.state
    return (
      <View className='Meituan'>
        <View className="main" style={curren ? 'background:rgb(255, 193, 27)' : 'background:rgb(54, 187, 99)'}>
          {/* ?????? */}
          <View className="nav">
            <View className="btn">
              <View className="btn_waimai" style={curren  ? 'color:rgb(255, 193, 27);background:#fff' : 'color:#fff;background:rgb(54, 187, 99)'} onClick={()=>{this.btnclick(true)}}>??????</View>
              <View className="btn_guoshu" style={curren  ? 'color:#fff;background:rgb(255, 193, 27)'   : 'color:rgb(54, 187, 99);background:#fff'} onClick={()=>{this.btnclick(false)}}>??????</View>
            </View>

            <image  src={curren  ?this.state.lists[0].image :this.state.lists[1].image} style={curren ==false ? 'height:14rem' : 'height:10rem'} alt="" />
          </View>
          {/* ???????????? */}
          <View className="process">
            <View className="pro_left">
              <image src={curren  ?this.state.lists[0].images[0] :this.state.lists[1].images[0]} alt="" />
              ?????????
            </View>
            <image class='guo' src={curren  ?this.state.lists[0].guo :this.state.lists[1].guo} alt="" />
            <View className="pro_main">
              <image src={curren ?this.state.lists[0].images[1] :this.state.lists[1].images[1]} alt="" />
              ?????????
            </View>
            <image class='guo' src={curren ?this.state.lists[0].guo :this.state.lists[1].guo} alt="" />
            <View className="pro_right">
              <image src={curren ?this.state.lists[0].images[2] :this.state.lists[1].images[2]} alt="" />
              ?????????
            </View>
          </View>
          {/* ????????? */}
          <View className="qrcode">
            <View className="qrcode_title" style={curren  ? 'color:rgb(255, 193, 27)' : 'color:rgb(54, 187, 99)'}>??????????????????????????????</View>
            <image src={curren ?this.state.lists[0].erweima :this.state.lists[1].erweima} alt="" srcset="" />
            <View className="btns">
              <View className="btns1" style={curren ? 'color:#fff;background:rgb(255, 193, 27)' : 'color:#fff;background:rgb(54, 187, 99)'}>????????????</View>
              <View className="btns2" style={curren ? 'color:rgb(255, 193, 27);background:#fff' : 'color:rgb(54, 187, 99);border:1px solid rgb(54, 187, 99)'}>????????????</View>
            </View>
          </View>
          {/* ?????????????????? */}
          <View className="careful">
            <View className="careful_main">
              <View className="careful_title" style={curren  ? 'color:rgb(255, 193, 27)' : 'color:rgb(54, 187, 99)'}>
                <Text style={curren ? 'background:rgb(255, 193, 27)' : 'background:rgb(54, 187, 99)'}></Text>
              ??????????????????
            </View>
              <View className="careful_con">
                <View>1.??????????????????????????????<Text>??????????????????</Text>?????????????????????????????????</View>
                <View>2.???????????????????????????????????????????????????</View>
                <View>3.??????????????????????????????????????????????????????????????????</View>
                <View>4.??????????????????????????????????????????????????????????????????????????????????????????</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
