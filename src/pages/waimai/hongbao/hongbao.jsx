import React, { Component } from 'react'
import { View, Image,Text} from '@tarojs/components'
import { AtInput, AtButton} from 'taro-ui'
import Taro from '@tarojs/taro'

import './hongbao.scss'

export default class Element extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            value: ''
        }
    }
    handleChange(value) {
        this.setState({
            value
        })
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value
    }

    // 点击更多商家
    modeClick(){
        Taro.navigateTo({
            url:'../hongbao/tiantian/tiantian'
        });
        Taro.setNavigationBarTitle({
            title: '天天神卷'
        });
    }

    render() {
        return (
            <View className='Hongbao'>
                {/* 顶部图片 */}
                <View className="hong_top">
                    <image src='https://p1.meituan.net/travelcube/faaad8b3a089b1adb237921e1b4dc873246109.png.webp' alt="" />
                </View>

                {/* 手机号验证 */}
                <View className="hong_pro">
                    <View className="pro_img">
                        <image src="https://p0.meituan.net/travelcube/8465cfaf15f81e48190f8f98026d4b3769689.png.webp@750w_80q" alt="" />
                    </View>
                    <View className="pro_p">
                        <AtInput
                            clear
                            type='text'
                            maxLength='4'
                            placeholder='请输入手机号'
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        >
                        </AtInput>
                        <AtInput
                            name='value1'
                            type='text'
                            placeholder='请填写验证码'
                            value={this.state.value1}
                            onChange={this.handleChange.bind(this)}
                        />
                        <AtButton >登录领取红包</AtButton>
                    </View>
                </View>

                {/* 天天神卷 */}
                <View className="hong_container">
                    <View className="container_main">
                        <View className="main_img">
                            <image mopde='aspectFit' src="https://p0.meituan.net/travelcube/15e652e3b68ac401cc2ad82ec863aea312050.png@750w_80q" alt=""/>
                        </View>
                        <View className="main_list">
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                            <View className="lists">
                                <image src="https://p0.meituan.net/waimaipoi/35e047719b06053fedefdcfff2907f5385270.jpg@200w_178h_80q_1e_1c" alt=""/>
                                <View className="list_title">黑泷太郎（翠微超市奶茶店）</View>
                                <View className="list_btn">满10减2</View>
                            </View>
                        </View>
                        <View className="main_btn" onClick={this.modeClick}> 
                           {'更多商家>>'}
                        </View>
                    </View>
                </View>

                {/* 活动规则*/}
                <View className="hong_rule">
                    <View className="rule_title">活动规则</View>
                    <Text>1.本次活动中红包领取时间截止至2021年12月31日24点；</Text>
                    <Text>2.红包可在美团APP、美团外卖APP、美团外卖小程序下单且选择在线支付时使用；</Text>
                    <Text>3.红包仅限非到店自取外卖订单，下午茶、夜宵、美食、蛋糕、甜点饮品频道使用；</Text>
                    <Text>4.外卖新人首单红包限新用户（设备、手机号、美团账号均未在美团外卖下过单）首次下单使用，且不与其他优惠（首减、满减、满赠、套餐增、折扣菜）同享；</Text>
                    <Text>5.使用红包时下单手机号码必须与收餐人手机号码、领取红包时输入的手机号码一致；</Text>
                    <Text>6.此活动为部分区域有效，具体红包使用有效期及红包金额以实际收到为准；</Text>
                    <Text>7.其余问题详见美团外卖客户端“我的—红包—美团红包、商家代金券使用说明"；</Text>
                    <Text>8.活动过程中，任何活动参与方存在虚假交易、恶意套利、作弊等不诚信行为，美团外卖有权取消活动参与方的活动资格，并保留依法追究法律责任的权利；</Text>
                    <Text>9.活动期间，如出现不可抗力或情势变更的情况，美团外卖可依相关法律法规的规定主张免责；</Text>
                    <Text>10.如有其它疑问请咨询美团外卖客服10109777。</Text> 
                </View>

            </View>
        )
    }
}
