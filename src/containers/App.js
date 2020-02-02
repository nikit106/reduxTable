import { connect } from 'react-redux';
import * as infoActions  from '../actions/info';
import App from '../components/App.jsx';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js'



const sortBy = (info, filterBy, sort) =>{
    console.log(sort)
    const sortType = sort === 'asc' ? 'desc' : 'asc'
    return orderBy(info, `${filterBy}`, `${sortType}`)
}

const mapStateToProps = ({ info }) => ({
    info: sortBy(info.items, info.filterBy, info.sort)
  })
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(infoActions, dispatch),
  })

  
  export default connect(mapStateToProps, mapDispatchToProps)(App);