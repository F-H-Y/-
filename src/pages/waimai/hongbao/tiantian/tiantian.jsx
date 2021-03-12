import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem, AtIcon } from 'taro-ui'

import './tiantian.scss'
import "taro-ui/dist/style/components/accordion.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class Element extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            open: false,
            open1: false,
            open2: false,
        }
    }
    handleClick(value) {
        this.setState({
            open: value,
        })
    }

    handleClick1(value) {
        this.setState({
            open1: value,
        })
    }

    handleClick2(value) {
        this.setState({
            open2: value,
        })
    }

    render() {
        return (
            <View className='TianTian'>
                {/* 顶部图片 */}
                <View className="img_top">
                    <image src="https://p1.meituan.net/dptakeaway/57b172c5e3018c684f4876074b0bf79037068.png" alt="" />
                </View>

                {/* 综合排序*/}
                <View className="content">
                    <View className="content_left">
                        <Text>综合排名</Text>
                        <AtIcon value='chevron-down' size='10' color='rgb(213,213,213)'></AtIcon>
                    </View>
                    <View className="content_center">
                        <Text>品类</Text>
                        <AtIcon value='chevron-down' size='10' color='rgb(213,213,213)'></AtIcon>
                    </View>
                    <View className="content_right">
                        <Text>速度</Text>
                        <AtIcon value='chevron-down' size='10' color='rgb(213,213,213)'></AtIcon>
                    </View>
                </View>

                {/* 主要内容 */}
                <View className="container">
                    <View className="lis">
                        <View className="lis_top">
                            <View className="top_left">
                                <image src="https://p0.meituan.net/168.126.90/waimaipoi/becc7216b03e7669f4caa11a30b6f63362142.jpg" alt="" />
                            </View>
                            <View className="top_center">
                                <View className="top_center_title">
                                    张哥跷脚牛肉·拌面
                                </View>
                                <View className="center_con">
                                    <Text>起送￥20</Text>
                                    <Text>免配送费</Text>
                                    <Text>56分钟</Text>
                                </View>
                                <View className="center_bottom">
                                    <Text class='man'>满减</Text>
                                    <Text>满11减5；满38减8；满50减12</Text>
                                </View>
                            </View>
                            <View className="top_right">
                                <image src="https://p1.meituan.net/dptakeaway/bc8ab420052d68bd5aa20625acc916f41572.png" alt="" />
                            </View>

                        </View>
                        <View className="lis_bottom">
                            <View className="td_lis">
                                <View className="td_lis_top">
                                    <Text>热销</Text>
                                    <image mode='aspectFit' src="https://p0.meituan.net/270.176.90/xianfu/55a5d16bb542eedf3d508c22ab75fbac303246.jpg" alt="" />
                                </View>
                                <View className="td_lis_bottom">
                                    <Text class='text_title'>❤️麻辣香锅超值单人套餐+1米❤️</Text>
                                    <View className="bottom_text">
                                        <Text class='xian'><Text>￥</Text>18.8</Text>
                                        <Text class='yuan'>￥49.8</Text>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}
