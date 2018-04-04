/**
 * desc：Login
 * author：yanshu lee
 * date： 2018/4/3
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation'
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }
    static navigationOptions = ({navigation}) => ({
        header: null,
    });
    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {
        return true
    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {

    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {

    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar barStyle="light-content"/>
                <ImageBackground source={require("../image/Login/bg.png")} style={{flex:1,alignItems:"center"}}>
                    <View style={styles.shandow}>

                    </View>
                    <View style={styles.photo}>

                    </View>
                    <View style={styles.input1}>

                        <Image source={require("../image/email.png")} style={styles.icon}/>
                        <TextInput style={styles.text}/>
                    </View>
                    <View style={styles.input2}>
                        <Image source={require("../image/lock.png")} style={styles.icon}/>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.text}/>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName: 'Tab'})
                            ]
                        });
                        this.props.navigation.dispatch(resetAction);
                    }} style={styles.login}>
                        <Text style={{backgroundColor:"rgba(0,0,0,0)",color:"#fff",fontSize:24}}>
                            登录
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.forgotPassword}>
                        <Text style={{color:"#fff"}}>
                            忘记密码
                        </Text>
                    </View>
                    <View style={styles.signIn}>
                        <Text style={{color:"#fff"}}>
                            新用户点击注册
                        </Text>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    shandow:{position:'absolute',width:"100%",height:"100%",backgroundColor:"#000",opacity:0.73,alignItems:"center"},
    photo:{height:80,width:80,backgroundColor:"#fff",borderRadius:40,position:"absolute",top:100,justifyContent:"center",flexDirection:'row'},
    input1:{height:50,width:300,backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",bottom:400,justifyContent:"center",flexDirection:'row'},
    input2:{height:50,width:300,backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",bottom:320,justifyContent:"center",flexDirection:'row'},
    login:{height:47,width:240,backgroundColor:"#eacb20",borderRadius:30,position:"absolute",bottom:240,justifyContent:"center",alignItems:"center"},
    forgotPassword:{height:50,width:240,position:"absolute",bottom:180,justifyContent:"center",alignItems:"center"},
    signIn:{height:50,width:'100%',position:"absolute",bottom:0,borderTopWidth:1,borderTopColor:"#fff",justifyContent:"center",alignItems:"center"},
    icon:{height:30,width:40,marginTop:10,backgroundColor:"#eacb20"},
    text:{flex:1,color:"#fff",fontSize:16}
});