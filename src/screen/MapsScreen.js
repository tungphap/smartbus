import React from 'react';
import {
    BackHandler, AsyncStorage,
    Image, View, Text,
    TouchableOpacity, Dimensions,
    Picker, ToastAndroid, ActivityIndicator, Alert,
} from 'react-native';
import LogoImage from '../images/Icon03.png';
import LogOut from '../images/logout_IC.png';
import IconBus from '../images/bus-icon.png';
import IconRegion from '../images/location-512.png';
import {
    styleGetGPS, bodyView,
    headStyle, logoLogOut,
    logoHead, styleMap, btnGetGPS,
    btnLuot1, btnLuot2, viewpickerRoute,
    pickerRoute
} from '../styles'; //css
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 10.852892;
const LONGITUDE = 106.626182;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companny_id: null,
            route_id: '',
            tram_id: null,
            luot: 'Luot_di',
            enable: false,
            routes: [],
            getgps: 0,
            station_order: null,
            direction: 0,
            markers: [],
            busstation: [],
            region: {
                latitude: LATITUDE, // vi do
                longitude: LONGITUDE,//kinh do
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
        };
        this.onMapPress = this.onMapPress.bind(this);
    }

    getLocation = async (getgps = null) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (getgps === '1') {
                    ToastAndroid.show(getgps + ' ' + this.state.route_id + ' ' + this.state.tram_id, ToastAndroid.SHORT)
                    this.postApiBusstation(position.coords)
                }
                _this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            }
        )
    }

    onMapPress(e) {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: `foo${id++}`,
                },
            ],
        });
    }
    goBack() {

    }

    render() {
        const { route_id, region, tram_id, station_order, routes, busstation, markers, luot } = this.state;
        return (
            <View style={bodyView}>
                <View>
                    <View style={headStyle}>
                        <View>
                            <TouchableOpacity onPress={() => this.getLocation()}>
                                <Image source={IconRegion} style={logoLogOut} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={LogoImage} style={logoHead} />
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => this.goBack()}>
                                <Image source={LogOut} style={logoLogOut} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <MapView
                        style={styleMap}
                        initialRegion={this.state.region}
                        onPress={this.onMapPress}
                        provider={this.props.provider}
                    >
                        {this.state.markers.map(marker => (
                            <Marker
                                title={marker.key}
                                key={marker.key}
                                coordinate={marker.coordinate}
                            />
                        ))}
                    </MapView>
                </View>
            </View>
        );
    }
}