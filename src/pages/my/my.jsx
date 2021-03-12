import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import PropTypes from 'prop-types'

import './my.scss'

import "taro-ui/dist/style/components/grid.scss";



export default class My extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }



  render() {
    return (

      <View className='my'>
        <image className='myimg' src="https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/ellipse.png" alt="" />
        <View className="my_User">
          <image src="" alt="" />
          <View className="my_logo">立即登陆</View>
        </View>
        <View className="card">
          {/* 可提现金额 */}
          <View className="card_item ca">
            <View className="card_top">
              <View className="left">
                <View className="left_title">可提现金额（含手续费%）</View>
                <View className="left_money">¥</View>
                <View className="wait">待提现 <Text>¥0.000</Text></View>
              </View>
              <View className="right">
                <View className="right_btn">立即提现</View>
                <View className="right_text">提现记录</View>
              </View>
            </View>
            <View className="card_bottom">
              <View>
                <Text>昨日收益</Text>
                <Text className='card_num'>¥0.000</Text>
              </View>
              <View>
                <Text>昨日收益</Text>
                <Text className='card_num'>¥0.000</Text>
              </View>
              <View>
                <Text>昨日收益</Text>
                <Text className='card_num'>¥0.000</Text>
              </View>
              <View>
                <Text>昨日收益</Text>
                <Text className='card_num'>¥0.000</Text>
              </View>
            </View>
          </View>

          {/* 图片 */}
          <View className="card_img ca">
            <image src="https://www.qihuanchuangke.cn/attachment/images/31/2021/01/a81r8rkN186Cr0GF6AlRFZQddJR1qk.gif" alt="" />
          </View>

          {/* 栅格 */}
          <View className="grid ca">
            <AtGrid mode='square' hasBorder={false} columnNum='4' data={
              [
                {
                  image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/order_icon.png',
                  value: '我的订单'
                },
                {
                  image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/menu_icon1.png',
                  value: '我的团队'
                },
                {
                  image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/menu_icon2.png',
                  value: '邀请好友'
                },
                {
                  image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/menu_icon3.png',
                  value: '我的收益'
                },
                {
                  image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/menu_icon4.png',
                  value: '联系客服'
                }
               
              ]
            } />
          </View>
        </View>
      </View>
    )
  }
}
