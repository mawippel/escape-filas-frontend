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
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
        width: '100%'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default BottomInitialInfo;
