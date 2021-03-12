import { Component } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtTabBar, AtForm, AtSwitch, AtCurtain } from 'taro-ui'
import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/curtain.scss";
import './wai.scss'

// 轮播图组件
class App extends Component {
  static propTypes = {
    banners: PropTypes.array.isRequired,
  }
  render() {
    const { banners } = this.props;
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        autoplay>
        {
          banners.map((bannerimg, index) =>
            <SwiperItem key={index}>
              <View className='demo-text-1'><image src={bannerimg} /></View>
            </SwiperItem>
          )
        }
      </Swiper>
    )
  }
}

// 点餐提醒组件
class Remind extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
  }
  render() {
    const { handleChange, value } = this.props;
    return (
      <View className='remind_view'>
        <View className='content'>
          <View className="left">
            <View className='top'>红包点餐提醒</View>
            <View className='bottom'>再忙也要按时吃饭哦</View>
          </View>
          <View className="right">
            <AtForm >
              <AtSwitch title='提醒我' color='#ff1a2a' checked={value} onChange={handleChange} />
            </AtForm>
            <View className='cont'>95%用户已选择</View>
          </View>
        </View>
      </View>
    )
  }
}

// 主要内容
class Detail extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    handChange:PropTypes.func.isRequired,
    gardenChange:PropTypes.func.isRequired,
    meituanClick:PropTypes.func.isRequired,
    shangChao:PropTypes.func.isRequired
  }
  render() {
    const { lists,handChange,gardenChange,meituanClick ,shangChao} = this.props;
    return (
      <View className='Detail_div'>
        {
          lists.map((cont, index) =>
            <View className='Detail_lists' key={index}>
              <image className='bg' src={cont.bg} />
              <View className="left">
                <image src={cont.logo} />
                <View className="text">{cont.logo_title}</View>
              </View>
              <View className="content">
                <View className='title1'>{cont.title}</View>
                <View className='money'>
                  <View className="qian">
                    {cont.qian}
                    <Text className='dan'>元</Text>
                  </View>

                  <Text className="remain">今日仅剩{cont.num}个</Text>
                </View>

              </View>
              <View className="right">
                <View className="btn" onClick={index==0? meituanClick :index==1 ? shangChao:(index ==2 ? handChange : (index ==3 && gardenChange))} >免费领取</View>
              </View>
            </View>
          )
        }

      </View>
    )
  }
}

// 提醒我点击之后
class Shade extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    shadeClick: PropTypes.func.isRequired,
  }
  render() {
    const { value, shadeClick } = this.props;
    return (
      <View className="shade_main" style={value ? 'display:block' : 'display:none'}>
        <View className='shade' onclick={shadeClick}>

        </View>
        <View className="shade_content" >
          <View className="content_top">
            <Text>长按识别二维码 关注公众号</Text>
            <image show-menu-by-longpress='true' src="https://www.qihuanchuangke.cn/attachment/images/31/2021/01/G22Ill8JM615L6MXgqI3JMX5XjWeNX.jpg" alt="" />
          </View>
          <View className="content_center">
            <image src="https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/img/focus_bg.png" alt="" />
          </View>
          <View className="content_bottom">
            <Text>关注后</Text>
            <Text>接收红包点餐提醒</Text>
          </View>
        </View>
      </View>



    )
  }
}

// 点击饿了么天天抢红包
class Every extends Component {
  static propTypes = {
    isOpened: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }
  render() {
    const { isOpened, onClose} = this.props;
    return (
      <View>
        <AtCurtain isOpened={isOpened} onClose={onClose.bind(this)}>
          <image
            show-menu-by-longpress='true'
            src='https://img.alicdn.com/imgextra/i1/6000000004626/O1CN01Pfo1jL1k2krk1np5l_!!6000000004626-0-o2oad.jpg'
          />
          <Text>长按识别二维码，领取外卖红包</Text>
          <View className="btn" onclick={onClose.bind(this)}>我知道了</View>
        </AtCurtain>
       
      </View>
    )
  }
}

// 点击饿了么果蔬红包
class Garden extends Component {
  static propTypes = {
    isgarden: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }
  render() {
    const { isgarden, onClose } = this.props;
    return (
      <View>
        <AtCurtain isOpened={isgarden} onClose={onClose.bind(this)}>
          <image
            show-menu-by-longpress='true'
            src='https://img.alicdn.com/imgextra/i3/6000000006375/O1CN01FTRSqn1wxna5NIfG9_!!6000000006375-0-o2oad.jpg'
          />
          <Text>长按识别二维码，领取外卖红包</Text>
          <View className="btn" onclick={onClose.bind(this)}>我知道了</View>
        </AtCurtain>
      </View>
    )
  }
}

export default class Waimai extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  constructor() {
    super(...arguments)
    this.state = {
      value: false,
      isOpened: false,
      isgarden:false,
      banners: [
        "https://www.qihuanchuangke.cn/attachment/images/31/2021/02/p9MMg7T8j78VMoVjOBGg8MtTo8Gjjg.jpg",
        "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img1.png",
        "https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img3.png",
        "https://www.qihuanchuangke.cn/attachment/images/31/2021/01/Na6gVKMz2t1i6trNgGkcvKR9G5CgG1.jpg",
        "https://www.qihuanchuangke.cn/attachment/images/31/2021/02/Gq4y5XQXb1haVv58PvAV1818z4gdU4.jpg",
      ],
      lists: [
        {
          'bg': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/meituan_bg.png',
          'logo': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/meituan_logo.png',
          'logo_title': '美团外卖',
          'title': '美团外卖红包',
          'qian': '56',
          'num': 511,
        },
        {
          'bg': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/meituan_bg.png',
          'logo': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/meituan_logo.png',
          'logo_title': '美团外卖',
          'title': '美团商超红包',
          'qian': '34',
          'num': 218,
        },
        {
          'bg': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/elm_bg.png',
          'logo': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/elm_logo.png',
          'logo_title': '饿了么',
          'title': '饿了么天天抢红包',
          'qian': '66',
          'num': 496,
        },
        {
          'bg': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/img/elm_bg.png',
          'logo': 'https://www.qihuanchuangke.cn/addons/hc_takeout/template/mobile/images/icon/elm_logo.png',
          'logo_title': '饿了么',
          'title': '饿了么果蔬红包',
          'qian': '20',
          'num': 235
        }
      ]
    }
  }

  // 提醒我
  handleChange = value => {
    this.setState({ value })
  }

  // 点击提醒事件
  shadeClick = (value) => {
    value = false;
    this.setState({ value })
  }

  // 点击美团红包
  meituanClick(){
    // console.log('进入美团红包了')
    Taro.navigateTo({
      url:'../waimai/hongbao/hongbao'
    })
    Taro.setNavigationBarTitle({
      title: '外卖红包天天领'
    });
  }

  // 点击美团红包超市
  shangChao(){
    console.log('进入美团商超红包了')
    Taro.navigateTo({
      url:"../waimai/guoshu/guoshu"
    })
    Taro.setNavigationBarTitle({
      title: '商超生鲜红包天天领',

    });
  }

  // 饿了么天天抢红包
  handChange=(isOpened)=> {
    isOpened=true
    this.setState({
      isOpened
    })
  }

  
  // 饿了么果蔬红包
  gardenChange=(isgarden)=> {
    isgarden=true
    this.setState({
      isgarden
    })
  }


  // 关闭幕布
  onClose=(isOpened,isgarden)=> {
    isOpened=false;
    isgarden=false;
    this.setState({
      isOpened,
      isgarden
    })
  }


  render() {
    return (

      <View className='index'>
        {/* 轮播图 */}
        <App banners={this.state.banners} />

        {/* 提醒我 */}
        <Remind handleChange={this.handleChange} value={this.state.value} />

        {/* 内容 */}
        <Detail lists={this.state.lists} shangChao={this.shangChao} handChange={this.handChange} gardenChange={this.gardenChange} meituanClick={this.meituanClick}/>

        {/*提醒我点击之后*/}
        <Shade value={this.state.value} shadeClick={this.shadeClick} />

        {/* 点击饿了么天天抢红包 */}
        <Every isOpened={this.state.isOpened} onClose={this.onClose}  />

        {/* 点击饿了么果蔬红包 */}
        <Garden isgarden={this.state.isgarden}  onClose={this.onClose}/>
      </View>
    )
  }
}
