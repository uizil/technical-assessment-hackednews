import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import seedData from './../../seed_data'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            page: "page one"
        }
        this.handelPageOne = this.handelPageOne.bind(this)
        this.handelPageTwo = this.handelPageTwo.bind(this)

    }

    
    topTenAuthor(array, result=[], indexes=[]) {
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
        return this.topTenAuthor(array, result, indexes)
    }

    handelPageOne() {
        this.setState({page: 'page one'})    
    }

    handelPageTwo() {
        this.setState({page: 'page two'})    
    }
    render() {
        const dataAuthor = this.topTenAuthor(seedData)
        const dataList = seedData.slice(0, 10).map((elm, index) => {
            
            return <TopTen dataStorie={elm} key={index} page={this.state.page} dataAuthor={dataAuthor[index]}/>
        }) 
        
        return (
            <main>
                
                <button onClick={this.handelPageOne}>Top Ten Stories</button>
                <button onClick={this.handelPageTwo}>Top Ten Authors</button>
                {this.state.page === "page one" && <h1> Top Ten Stories </h1>}
                {this.state.page === "page two" && <h1> Top Ten Author </h1>}

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

