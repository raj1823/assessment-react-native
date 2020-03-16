import * as React from 'react';
import { Text} from 'react-native';

class SectionListItems extends React.Component{

    render(){
        const {itemlist}=this.props
        return(
            <Text>{itemlist}</Text>
        )
    }
}
export default SectionListItems;