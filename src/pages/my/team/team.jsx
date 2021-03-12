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
            <View className='Team'>

                {/* 我的团队 */}
                <View className="my_team">
                    <View className="my_title">
                        <image src="https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/icon_tuandui.png" alt="" />
                        我的团队
                    </View>
                    <View className="con"><Text>10</Text>人</View>
                </View>

                {/* 人数变化 */}
                <View className="team_change">
                    {/* 今日新增 */}
                    <View className="change_add kuang">
                        <View className="change_title">今日新增</View>
                        <View className="change_con"><Text>8</Text>人</View>
                    </View>

                    {/* 间隔 */}
                    <View className="ge"></View>

                    {/* 直推好友 */}
                    <View className="change_direct kuang">
                        <View className="change_title">直推好友</View>
                        <View className="change_con"><Text>8</Text>人</View>
                    </View>

                    {/* 间隔 */}
                    <View className="ge"></View>

                    {/* 间推好友 */}
                    <View className="change_indirect kuang">
                        <View className="change_title">间推好友</View>
                        <View className="change_con"><Text>8</Text>人</View>
                    </View>

                </View>

                {/* 底线 */}
                <View className="line">
                    ---我是底线了---
                </View>

            </View>
        )
    }
}
