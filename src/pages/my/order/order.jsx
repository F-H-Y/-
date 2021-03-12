import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Taro from '@tarojs/taro'

import './order.scss'
import "taro-ui/dist/style/components/tabs.scss";

export default class Element extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }


    render() {
        const tabList = [{ title: '全部' }, { title: '美团' }, { title: '饿了么' }, { title: '电影' }]
        return (
            <View className='Order'>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0} >
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
                            <View className="tail">---我是底线了---</View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
                            <View className="tail">---我是底线了---</View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={2}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
                            <View className="tail">---我是底线了---</View>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={3}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
                            <View className="tail">---我是底线了---</View>
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}
