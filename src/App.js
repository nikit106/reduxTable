import React, {Component} from 'react';
import { connect } from 'react-redux';

import {setInfo} from './actions/info.js'



class App extends Component {
  render(){

    console.log(this.props)
    const { info } = this.props.info
    const { setInfo } = this.props
    const newInfo = [{
      id: 324324,
      title: 'qweerrtytyuyuiuio'
    }]
    return (
    <div>
      <h1>{info[0].title}</h1>
      <button onClick = {setInfo(newInfo)}>SET INFO</button>
    </div>
    )
  }
}


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setInfo: info => dispatch(setInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
