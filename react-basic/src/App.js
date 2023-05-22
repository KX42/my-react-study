import React from "react"
import './app.css'

/* Initial Data and Settings*/
const name = "233"
const songs = [
    {id: 1, name: 'song1'},
    {id: 2, name: 'song2'},
    {id: 3, name: 'song3'}
]
const getName = ()=>{
  return 2333;
}
const flag = false
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


/* Function Component */
function Hello(){ // Must be uppercase
  return <div>hello</div>
}

/*Class Component*/
class HelloComponent extends React.Component{
  render(){
    return <div>this is a class component</div>
  }
}

/* Function Component with handler*/
function HelloActive(){
    const clickHandler = ()=>{
        /* The message will be shown in console of web page*/
        console.log('The event in HelloActive Component is activated.')
    }
    return <div onClick={clickHandler}>Say Hello!</div>
}

/*Class Component with handler*/
class HelloComponentActive extends React.Component{
    clickHandler=()=>{
        console.log('The event in HelloComponentActive class is activated.')
    }
    render(){
        return <div onClick={this.clickHandler}>This is HelloComponentActive, click to activate it!</div>
    }
}

function App() {
  return (
    <div className="App">
      <Hello/>
      <HelloComponent/>
      {name}
      {getName()}
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
      <span style={style}> span with color </span>

        {/* Here I use template 'active' */}
        <span className={'active'}>this is active class</span>

        {/* This is a function component with click handler */}
        <HelloActive/>

        {/* This is a class component with click handler */}
        <HelloComponentActive/>
    </div>
  );
}
export default App;

