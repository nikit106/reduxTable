import React, {Component} from 'react';
import axios from 'axios'
import '../App.css';
import ItemCard from './itemCard'
import Title from '../containers/title'



class App extends Component {

componentWillMount() {
  const { setInfo } = this.props
  axios.get('https://api.myjson.com/bins/hmguy').then(({data}) => {
  setInfo(data)
  })
}



 render() {
   const { info } = this.props
   return(
    
    <table className = "table">
            <thead className = "tableThread">
                <tr className = "tableTr">
                    <Title />
                </tr>
            </thead>
            <tbody className = "tableTbody">
            {
                info && info.map(item => (
                <ItemCard {...item} />
              ))
            }
            </tbody>
    </table>
   )
 }
}


export default App;
