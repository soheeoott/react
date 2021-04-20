import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        number: state.number
    }
}

export default connect(mapStateToProps)(DisplayNumber);