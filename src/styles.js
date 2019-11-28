import { Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');
const styleHead = Platform.OS === 'ios' ? height * 0.025 : 0;
module.exports = {
    //login screen
    homeWrap: {
        flex: 1,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'e9ecef'
    },
    introLogo: {
        width: 0.3 * width,
        height: 0.3 * width
    },
    textInputLogin: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        width: width * 0.9,
        height: height * 0.08,
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 5,
        fontSize: (height * 0.08) / 3,
    },//end login

    //Maps  Screen
    bodyView: {
        flex: 1,
        height,
        width,
        backgroundColor: '#F5F5F5',
        marginTop: styleHead
    },
    headStyle: {
        padding: 10,
        width,
        backgroundColor: '#1FA15D',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height * 0.1 - styleHead,
        borderBottomWidth: 1,
        borderColor: '#A3A3C6',
        flexDirection: 'row',
    },
    iconTab: {
        width: 0.04 * height,
        height: 0.04 * height,
    },
    tabStyle: {
        backgroundColor: '#1FA15D',
        height: height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTab: {
        fontSize: 0.03 * height,
        marginBottom: 10,
        color: '#fff'
    },
    iconLoginSrc: {
        width: 0.3 * width,
        height: 0.3 * width,
        marginBottom: 30
    },
    viewpickerCompanny: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        width: width * 0.9,
        height: height * 0.08,
        alignItems: 'center',
        fontSize: (height * 0.08) / 3,
    },
    viewpickerRoute:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        width: width * 0.9 / 2,
        height: height * 0.07,
        alignItems: 'center',
        fontSize: (height * 0.07) / 3,
    },
    pickerRoute:{
        width: (width * 0.9) / 2 - 1,
        height: (height * 0.07) - 1,
    },
    pickerCompanny:{
        width: (width * 0.9) - 1,
        height: (height * 0.08) - 1,
    },
    btnLuot1: {
        backgroundColor: '#1FA15D',
        borderRadius: 20,
        width: (width * 0.9 / 2) / 2- 1,
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center'
    },
    btnLuot2: {
        backgroundColor: '#A8A8A8',
        borderRadius: 20,
        width: (width * 0.9 / 2) / 2- 1,
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center'
    },
    btnGetGPS: {
        backgroundColor: '#1FA15D',
        borderRadius: 20,
        width: (width * 0.9 / 2) - 5,
        alignItems: 'center',
        height: height * 0.07,
        justifyContent: 'center'
    },
    logoQr: {
        width: 0.4 * width,
        height: 0.4 * width
    },
    btnLogin: {
        marginTop: 10,
        backgroundColor: '#1FA15D',
        borderRadius: 50,
        width: width * 0.9,
        alignItems: 'center',
        height: height * 0.08,
        justifyContent: 'center'
    },
    introView: {
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1FA15D'
    },
    introText: {
        fontSize: 0.04 * height,
        fontWeight: 'bold',
        color: '#fff'
    },
    iconEdit: {
        width: 0.06 * height,
        height: 0.06 * height,
    },
    iconLogoutBtn: {
        width: 0.06 * height,
        height: 0.06 * height,
    },
    logoHead: {
        width: 0.08 * height - styleHead,
        height: 0.08 * height - styleHead,
        padding: 10
    },
    logoLogOut: {
        width: 0.05 * height - styleHead,
        height: 0.05 * height - styleHead,
        padding: 10,
    },
    textInfor: {
        margin: (height * 0.18) * 0.0001
    },
    infoView: {
        justifyContent: 'center',
        width,
        height: height * 0.2,
        backgroundColor: '#fff',
        padding: 10
    },
    viewTwoColumn: {
        width: width - 5,
        height: height * 0.25,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.02 * height,
    },
    viewInfoAvatar: {
        justifyContent: 'center',
        width: (width / 3) * 2,
        height: height * 0.2,
        marginLeft: 5,
    },
    viewAvatar: {
        width: (width / 3),
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: height * 0.01,
    },
    infoText18: {
        fontSize: 16,
        color: '#000'
    },
    infoText14: {
        fontSize: 14,
        color: '#000'
    },
    infoText20: {
        fontSize: 18,
        color: '#000'
    },
    infoText25: {
        fontSize: 23,
        color: '#000',
    },
    textBold: {
        fontWeight: 'bold',
    },
    preview: {
        width: width,
        height: height * 0.8
    },
    viewItemDate: {
        width: (width / 11) * 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    bodyBottom: {
        height: height * 0.53 - 20,
        marginTop: 0.02 * height,
        backgroundColor: '#fff',
    },
    styleMap:{
        width:width,
        height: (height * 0.78 ) / 3 *2 + (0.09 * height),
        marginTop: 0.01 * height,
    },
    styleGetGPS:{
        width:width,
        height: (height * 0.78 ) / 3 - (0.05 * height),
        marginTop: 0.01 * height,
    },
    headTitleFlatlist: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width
    },
    textTransaction: {
        fontSize: (height * 0.06) / 2.5,
        color: '#000'
    },
    viewInputEdit: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    viewEditBtn: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width,
        padding: 10
    },
    editBtn: {
        backgroundColor: '#1FA15D',
        borderRadius: 50,
        margin: 0.03 * height,
        width: width * 0.4,
        height: 0.08 * height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameView: {
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: height * 0.1,
        backgroundColor: '#fff',
        padding: 10
    },
    nameText: {
        fontSize: (height * 0.18) * 0.23,
        color: '#000',
    },
    iconInfo: {
        marginLeft: 0.02 * height,
        width: 0.05 * height,
        height: 0.05 * height,
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: 0.02 * height,
        backgroundColor: '#fff',
        borderRadius: 50,
        width: width * 0.9,
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewInfoText: {
        fontSize: (height * 0.18) * 0.13,
        color: '#000'
    },
    viewInfoText2: {
        fontSize: (height * 0.08) / 3,
        color: '#000'
    },
    textInputEdit: {
        width: (width * 0.9) - (0.05 * height),
        height: height * 0.08,
        textAlign: 'center',
        fontSize: (height * 0.08) / 3
    },
    pickDate: {
        marginTop: 0.02 * height,
        width: (width * 0.9) - (0.07 * height),
        height: height * 0.08,
    },
    styleDatePicker: {
        dateText: {
            fontSize: (height * 0.08) / 3,
        },
        dateTouchBody: {
            borderWidth: 0
        },
        dateInput: {
            borderWidth: 0
        },
        placeholderText:{
            fontSize: (height * 0.08) / 3,
        }
    }

}
