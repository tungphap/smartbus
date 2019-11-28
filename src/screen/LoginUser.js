import React from 'react';
import {
    TextInput, AsyncStorage,
    Text, View, ToastAndroid,
    Image, TouchableOpacity,
    Picker, Alert
} from 'react-native'
import LogoImage from '../images/Icon.png';
import { introText, introLogo, viewpickerCompanny, homeWrap, btnLogin, pickerCompanny, textInputLogin } from '../styles';
import { getCompany } from '../libs'
import global from '../global'

export default class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: ''
        }
    }

    getDataRoutes = () => {
        if(this.state.pass !== ''){
            const company_id = getCompany(this.state.pass, global.host);
            if(company_id ==='' || company_id == 'No_Company'){
                ToastAndroid.show('hello world', ToastAndroid.SHORT)
            }else {
                AsyncStorage.setItem('company_id', company_id);
                this.props.navigation.navigate('AppSrc')
            }
        }else{
            Alert.alert('Status', 'Password empty');
        }
    }

    render() {
        return (
            <View style={homeWrap}>
                <Image source={LogoImage} style={introLogo} />
                <Text style={[introText, { color: '#00e673', margin: 10 }]} allowFontScaling={false}>SMART BUS</Text>
                <TextInput
                    autoCapitalize='none' // khoong viet hoa chu cai dau tien
                    style={textInputLogin}
                    placeholder='Nhập mật khẩu công ty...'
                    secureTextEntry={true}
                    onChangeText={(pass) => this.setState({ pass })}>
                </TextInput>
                <TouchableOpacity style={btnLogin}
                    onPress={()=> this.getDataRoutes()}>
                    <Text style={{color: 'white', fontSize:20, fontWeight: 'bold'}}>Get Route</Text>
                </TouchableOpacity>
            </View>
        );
    }
}