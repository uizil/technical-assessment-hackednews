import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import seedData from './../../seed_data'

// const App = (props) => {
    
//     const dataList = seedData.slice(0, 10).map((elm, index) => (
//         <TopTen data={elm} key={index}/>
//     )) 
    
//     return (
//     <div>
//         <button>Top Ten Stories</button>
//         <button>Top Ten Authors</button>
//         {dataList}
//     </div>)
    
// };

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 0
        }
        this.handelPageOne = this.handelPageOne.bind(this)
        this.handelPageTwo = this.handelPageTwo.bind(this)

    }

    
    topten(array, result=[], indexes=[]) {
        if(result.length === 10) {
            return result;
        }
        let max = 0;
        let index = 0;
        for(let i = 0; i < array.length; i++) {
            if(!indexes.includes(i) && array[i].by.karma > max) {
                 max = array[i].by.karma
                 index = i
            }
        }
        result.push(array[index])
        indexes.push(index)
        return this.topten(array, result, indexes)
    }

    handelPageOne() {
        this.setState({page: 'page one'})    
    }

    handelPageTwo() {
        this.setState({page: 'page two'})    
    }
    render() {
        const dataAuthor = this.topten(seedData)
        const dataList = seedData.slice(0, 10).map((elm, index) => {
            
            return <TopTen dataStorie={elm} key={index} page={this.state.page} dataAuthor={dataAuthor[index]}/>
        }) 
        
        return (
            <main>
                
                <h1> Top Ten Stories </h1>
                <button onClick={this.handelPageOne}>Top Ten Stories</button>
                <button onClick={this.handelPageTwo}>Top Ten Authors</button>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                </table>
                {dataList}
            </main>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

