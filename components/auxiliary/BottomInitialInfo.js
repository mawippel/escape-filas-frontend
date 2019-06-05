import React from 'react';

import { 
    TouchableOpacity
} from 'react-native';
import { ViewBottomInfo, DefaultText, BoldText } from './styles'

const BottomInitialInfo = (props) => {
    return (
        <ViewBottomInfo>
            <DefaultText>
                {props.firstText}
            </DefaultText>
            <TouchableOpacity onPress={props.buttonCallback}>
                <BoldText>
                    {props.secondText}
                </BoldText>
            </TouchableOpacity>
        </ViewBottomInfo>
    )
}

export default BottomInitialInfo;
