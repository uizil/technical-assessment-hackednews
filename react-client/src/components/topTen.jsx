import React from 'react';
// import seedData from './../../../seed_data'
// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopTen = props => (
  <div>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.data.title}</td>
        <td>{props.data.by.id}</td>
      </tr>
    </tbody>
    
  </table>
</div>
);

export default TopTen;