import { Component } from 'react'
import { View, Text , Swiper , SwiperItem } from '@tarojs/components'
import { AtButton ,AtTabBar, AtForm, AtSwitch} from 'taro-ui'
import PropTypes from 'prop-types'
import Waimai from '../waimai/waimai.jsx'
import Element from '../elemen/elemen.jsx'
import Meituan from '../meituan/meituan.jsx'
import My from '../my/my.jsx'
import Taro from '@tarojs/taro'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      dan:[<Waimai/>,<Element/>,<Meituan/>,<My/>]
    }
  }

  // 点击切换页面
  handleClick (value) {
    this.setState({
      current: value,
    })

    if(this.state.current==0 || this.state.current==1){
       Taro.setNavigationBarTitle({
        title: '外卖红包'
      });
    }else{
      Taro.setNavigationBarTitle({
        title: '💡专注外卖红包发放💡'
      });
    }
   
  }



  render () {
    return (
      <View className='index'>
        {/* {this.state.current == 0 && <Waimai/>}
        {this.state.current == 1 && <Element/>}
        {this.state.current == 2 && <Meituan/>}
        {this.state.current == 3 && <My/>} */}

        {
          this.state.dan.map((cont,index)=>
            this.state.current == index && cont
          )
        }
        {/* 标签栏 */}
        <AtTabBar
        fixed
        selectedColor ={this.state.current==0 ? 'rgb(255,4,44)' :  this.state.current ==1 ?'rgb(28,171,255)': this.state.current ==2 ?'rgb(252,204,0)':this.state.current ==3 ?'rgb(255,19,61)':'rgb(0,0,0)'}
        color='#000'
        tabList={[
          { title: '外卖红包', image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/take_icon.png',selectedImage:'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/take_btn_icon.png'},
          { title: '饿了吗' ,image:'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/elm_icon.png',selectedImage:'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/elm_btn_icon.png?v=1'},
          { title: '美团', image: 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/mt_icon.png' ,selectedImage:'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/mt_btn_icon.png?v=1'},
          { title: '个人中心', image:'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/my_icon.png',selectedImage:"https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/my_btn_icon.png"}
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
        />

      </View>
    )
  }
}
