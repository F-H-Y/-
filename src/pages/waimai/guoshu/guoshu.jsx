import React, { Component } from 'react'
import { View, Image,Text} from '@tarojs/components'
import { AtInput, AtButton} from 'taro-ui'

import './guoshu.scss'

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

    render() {
        return (
            <View className='Hongbao'>
                {/* 顶部图片 */}
                <View className="hong_top">
                    <image src='https://p1.meituan.net/travelcube/6a63b5fce61875aae1ed5c825385f1b5183209.jpg.webp@750w_374h_80q' alt="" />
                </View>

                {/* 手机号验证 */}
                <View className="hong_pro">
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

                {/* 活动规则*/}
                <View className="hd">
                    <image className='hd' mode='aspectFit' src="https://p0.meituan.net/travelcube/312f2a0b75e520faf83012aa9e2121785269.png.webp@750w_63h_80q" alt=""/>
                </View>
                
                <View className="hong_rule">
                    <Text>1.本次活动中红包领取时间截止至2021年12月31日24点；</Text>
                    <Text>2.红包可在美团或美团外卖最新版客户端、美团外卖小程序下单且选择在线支付时使用；</Text>
                    <Text>3.红包仅限非到店自取商超生鲜订单，超市便利、蔬菜水果、送药上门频道使用；</Text>
                    <Text>4.使用红包时下单手机号码必须与收餐人手机号码、领取红包时输入的手机号码一致；</Text>
                    <Text>5.此活动为部分区域有效，具体红包使用有效期及红包金额以实际收到为准；</Text>
                    <Text>6.其余问题详见美团外卖客户端“我的—红包—美团红包、商家代金券使用说明"；</Text>
                    <Text>7.活动过程中，任何活动参与方存在虚假交易、恶意套利、作弊等不诚信行为，美团外卖有权取消活动参与方的活动资格，并保留依法追究法律责任的权利；</Text>
                    <Text>8.活动期间，如出现不可抗力或情势变更的情况，美团外卖可依相关法律法规的规定主张免责；</Text>
                    <Text>9.如有其它疑问请咨询美团外卖客服10109777。</Text> 
                </View>

            </View>
        )
    }
}
