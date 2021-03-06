import React from "react";
import {Text, Platform, StyleSheet} from "react-native";
import colors from "../config/color";

const Title = React.memo(function Title({children, customStyles}){
    return (
        <Text style={[styles.title, customStyles]}>{children}</Text>
    )
}
)

const SubTitle = React.memo(function SubTitle({children, customStyles}){
    return (
        <Text style={[styles.subTitle, customStyles]}>{children}</Text>
    )
}
)

const AppText = React.memo(function AppText({children, customStyles, onPress}){
    return (
        <Text style={[styles.text, customStyles]}>{children}</Text>
    )
}
)

// function BoldText({children, customStyles}){
//     return (
//         <Text style={[styles.text, customStyles]}>{children}</Text>
//     )
// }

const styles = StyleSheet.create({
    title:{
        fontSize: 36,
        fontWeight: "800",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.mainWhite
    },
    subTitle:{
        fontSize: 30,
        fontWeight: "400",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.mainWhite
    },
    appText:{
        fontSize: 15,
        color: colors.mainWhite,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
});

export {
    Title,
    SubTitle,
    AppText,
}