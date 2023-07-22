const Hello = (props) =>{
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}


const App = () => {
  const name = 'bob';
  const age = 21;
  return(
    
    <div>
      <h1>Greetings</h1>
      <Hello name = 'perry' age = {21}/>
      <Hello name = {name} age = {age}/>
    </div>
  )
}

export default App;
