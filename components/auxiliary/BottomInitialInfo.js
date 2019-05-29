import React from 'react';

import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const BottomInitialInfo = (props) => {
    return (
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>
                {props.firstText}
            </Text>
            <TouchableOpacity onPress={props.buttonCallback}>
                <Text style={styles.signupButton}>
                    {props.secondText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    signupTextCont: {
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
        width: '100%'
    },
    signupText: {
        color: '#000',
        fontSize: 16
    },
    signupButton: {
        color: '#666',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default BottomInitialInfo;
