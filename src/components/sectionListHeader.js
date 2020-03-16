

import * as React from 'react';
import { Text} from 'react-native';

class SectionListHeader extends React.Component{

    render(){
        const {title}= this.props;


        return(
                   <Text>{title}</Text>
        );

        
    }
            
    
    
}
export default SectionListHeader;