import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';
import seedData from './../../seed_data'

const App = (props) => {
    
    const dataList = seedData.slice(0, 10).map((elm, index) => (
        <TopTen data={elm} key={index}/>
    )) 
    
    return <div>{dataList}</div>
    
};

ReactDOM.render(<App/>, document.getElementById('app'));

