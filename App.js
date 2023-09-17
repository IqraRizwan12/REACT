import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const name = 'Hello World'
  const obj = {name:'Hello World Object'}
  const data = ['We','are','United']
  const list = [{name:'Hello World 1'},{name:'Hello World 2'},{name:'Hello World 3'}]
  const complex = [{company:'XYZ',jobs:['Javascript','React']},{company:'ABC',jobs:['Angular JS','Ionic']}]
  const [hide,setHide]= useState(false)
  function hideTheImage(){
    setHide(!hide)
  }

  return (
    <div className="App">
      <header className="App-header">

        {hide == false &&<h1> hello World</h1>}
        <button onClick={hideTheImage}>Hide</button>
        
        {/* <h1>
         {name}
        </h1>


        <h1>
         {obj.name}
        </h1>



        <ul>
          {data.map(function(item){
            return <li>{item}</li> 
          })}
        </ul>



       <ol>
        {list.map(function(item){
          return <li>{item.name}</li>

        })}
       </ol>



       <table border="2">
        <tr>
          <th>Company</th>
          <th>Jobs</th>
        </tr>
        {complex.map(function(item){
          return <tr>
            <td>{item.company}</td>
            <td>
              <ol>
                {item.jobs.map(function(job){
                  return <li>{job}</li>
                })}
               
              </ol>
            </td>
              
          </tr>

        })}
       </table> */}



       
      </header>
    </div>
  );
}

export default App;
