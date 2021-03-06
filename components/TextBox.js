import {TextInput, StyleSheet, Dimensions, View} from "react-native";
import colors from "../config/color";
import {Ionicons} from "@expo/vector-icons"

function TextBox({placeholder, onChange, value, icon, isSecured, lines, onFocus, customStyles}){
    return (
        <View style={[styles.inputContainer, customStyles]}>
            <TextInput
            underlineColorAndroid="transparent"
            multiline={lines? true: false}
            numberOfLines={lines? lines:1}
            spellCheck={false}
            secureTextEntry={isSecured? isSecured:false} 
            style={[styles.textbox, customStyles]}
            placeholder={placeholder} 
            placeholderTextColor={colors.dimWhite}
            placeholderStyle={styles.placeholder}
            onChangeText={(text)=> onChange? onChange(text):null}
            onFocus={()=> onFocus? onFocus():null}
            value={value}
            clearButtonMode="always"
            />

            {icon?<Ionicons name={icon.name} size={20} color={colors.dimWhite} style={styles.icon} onPress={()=> icon.onPress?icon.onPress():null}/>:null}  
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        height: Dimensions.get("window").height / 14,
        borderWidth: 2,
        borderColor: colors.secondaryColor,
        borderRadius: 15,
        margin: 10,
        fontSize: 20
    },
    textbox: {
        flex: 1,
        height: "100%",
        paddingLeft: 10,
        color: colors.mainWhite
    },
    icon:{
        paddingRight: 10
    },
    placeholder:{
       fontSize: 40
    }
})

export default TextBox;