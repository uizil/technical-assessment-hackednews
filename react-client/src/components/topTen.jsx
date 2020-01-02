import React from 'react';


// import seedData from './../../../seed_data'
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
class TopTen extends React.Component {
  constructor(props) {
    super()
  }


  render() {
    if(this.props.page === 'page one') {
      return(<div>
        <table>
          
          <tbody>
            <tr>
              <td>{this.props.dataStorie.title}</td>
              <td>{this.props.dataStorie.by.id}</td>
            </tr>
          </tbody>
          
        </table>
    </div>)
    } else {
      return(<div>
        { <table>
          
          <tbody>
            <tr>
              <td>{this.props.dataAuthor.title}</td>
              <td>{this.props.dataAuthor.by.id}</td>
            </tr>
          </tbody>
          
        </table> }
        
    </div>)
    }
  }
} 
export default TopTen;