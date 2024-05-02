
import { StyleSheet, Text, View } from 'react-native';

function CustomText(props){
    return(
        <>
        <Text> Hello </Text>
        <Text> {props.title}</Text>
        </>
    )
}

export default CustomText;