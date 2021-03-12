import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Taro from '@tarojs/taro'

import './team.scss'
import "taro-ui/dist/style/components/tabs.scss";

export default class Element extends Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }




    render() {

        return (
            <View className='Servic'>
                {/* 头部的背景图片 */}
                <View className="bg"></View>

                {/* 顶部的图片 */}
                <View className="img">
                    <image src="https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/chat_top.png" alt="" />
                </View>

                {/* 中间的主题内容 */}
                <View className="mian">
                    
                    {/* 九宫格样式 */}
                    <View className="lis">
                        <View className="main_item">
                            <Text>推广赚钱</Text>
                        </View>
                        <View className="main_item">
                            <Text>优惠活动</Text>
                        </View>
                        <View className="main_item">
                            <Text>立拿返现</Text>
                        </View>
                        <View className="main_item">
                            <Text>折扣通知</Text>
                        </View>
                        <View className="main_item">
                            <Text>领内部券</Text>
                        </View>
                        <View className="main_item">
                            <Text>升级团长</Text>
                        </View>
                    </View>

                    {/* 客服 */}
                    <View className="share">
                        <image src="https://www.qihuanchuangke.cn/attachment/images/31/2021/01/slylCIM3Qc7M3NTZsM3iTQ3Z9SymSl.jpg" alt=""/>
                        <Text>客服</Text>
                        <Text>微信<Text>ask562</Text></Text>
                        <View className="btn">一键复制</View>

                    </View>
                </View>
            </View>
        )
    }
}
