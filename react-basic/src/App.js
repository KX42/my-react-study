import React from "react"
import './app.css'
const name = "233"
const getName = ()=>{
  return 2333;
}
const songs = [
  {id: 1, name: 'song1'},
  {id: 2, name: 'song2'},
  {id: 3, name: 'song3'}
]

const getTag = (type) =>{
  if(type === 1){
    return <h1>Tag1</h1>
  }
  if(type === 2){
    return <h1>Tag2</h1>
  }
  if(type === 3){
    return <h1>Tag3</h1>
  }
}
const style = {
  color: 'red',
  fontSize: '30px'
}
const flag = false

function Hello(){ // Must be uppercase
  return <div>hello</div>
}

class HelloComponent extends React.Component{
  render(){
    return <div>this is a class component</div>
  }
}

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloComponent/>
      {name}
      { getName() }
      <u1>
        { songs.map(song=> <li key= {song.id}> {song.name} </li>) }
      </u1>
      { flag ? (
          <div>
            <span>this is span</span>
          </div>
          ) : null
      }
      {true && <span>span2</span>}
      {getTag(1)}
      <span style={style}>span with color</span>
      <span className={'active'}>this is active class</span>
    </div>
  );
}
export default App;

