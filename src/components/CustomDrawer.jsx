import { Dimensions, Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Profile from '../../src/assets/profile.png';
import { IconButton } from '@react-native-material/core';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
const {width} = Dimensions.get("screen");
import { handleSignOut } from '../navigations/StackNavigator';

const CustomDrawer = props => {
    const image = { uri: "https://www.construtoraplaneta.com.br/wp-content/uploads/2022/01/fundo-sus-02.jpg" };

    return (
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>

        <DrawerContentScrollView {...props} style={styles.drawer}>
            {/* <ImageBackground source={image} style={styles.image}> */}
                <Image 
                    source={Profile} 
                    style={styles.profilePhoto} 
                    resizeMode="contain">    
                </Image>
            
            <Text style={styles.nameText} >Danilo Ataide</Text>

            <Text style={styles.textButtonViewProfile}>Administrador</Text>  

            <IconButton 
                style={styles.buttonIcon} 
                onPress={handleSignOut}
                icon={ <FontAwesome color="white" name="sign-out" size={18} />}
            ></IconButton>

            <View style={styles.drawerListWrapper}>
                <DrawerItemList {...props} />
            </View>
            {/* <TouchableOpacity 
            style={styles.button} 
            // onPress={() => navigation.navigate('SignIn')}
            >
                <FontAwesome style={styles.buttonIcon} name="sign-out" size={18}/>
                <Text style={styles.buttonText}>
                    Sign Out
                </Text>
            </TouchableOpacity> */}
         {/* </ImageBackground>  */}
        </DrawerContentScrollView>
        </ImageBackground>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        // height: 250,
    },
    profilePhoto: {
        width: 110,
        height: 110,
        borderRadius: 110/2,
        marginTop: 30,
        position: 'relative',
        alignSelf: 'flex-start',
        // left: 0,
        top: 0,
        left: 15,
        borderWidth: 4,
        borderColor: '#fff',
    },
    nameText: {
        paddingHorizontal: 15,
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // left: width/2-110,
        alignSelf: 'flex-start',
      },  
    textButtonViewProfile: {
        paddingHorizontal: 15,
        // left: width/2-110,
        fontSize: 12,
        marginTop: 6,
        color: '#fff',
        alignSelf: 'flex-start',
      },  
    drawerListWrapper: {
        top: 30,
        backgroundColor: 'transparent',
        bottom: 0
    },
    buttonIcon: {
        paddingHorizontal: 15,
        // left: width/2-110,
        marginTop: 15,
        color: '#fff',
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: 'red',
        bottom: 20,
        height: 50,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 0,
        paddingBottom: 0,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingStart: 5
    },
    buttonIcon: {
        color: "#fff",
        paddingEnd: 5,
        alignSelf: 'center'
      }
})