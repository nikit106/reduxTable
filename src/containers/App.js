import { connect } from 'react-redux';
import * as infoActions  from '../actions/info';
import App from '../components/App.jsx';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js'

const sortBy = (info, filterBy) =>{
  switch (filterBy) {
    case 'Name':
      return orderBy(info, 'Name', 'decs');
    case 'Email':
      return orderBy(info, 'Email', 'decs');
    case 'Phone':
      return orderBy(info, 'Phone', 'decs');
    case 'Company':
        return orderBy(info, 'Company', 'decs');
    default:
      return info
  }
}

const mapStateToProps = ({ info }) => ({
    info: sortBy(info.items, info.filterBy)
  })
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(infoActions, dispatch),
  })

  
  export default connect(mapStateToProps, mapDispatchToProps)(App);