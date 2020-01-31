import { connect } from 'react-redux';
import * as filterActions from '../actions/filter'
import { bindActionCreators } from 'redux';
import Title from '../components/title'

const mapStateToProps = ({ info }) => ({
    filterBy: info.filterBy
  })
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
  })

  
  export default connect(mapStateToProps, mapDispatchToProps)(Title);
