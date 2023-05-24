import './App.css'

function App() {
    const handleAddServerToMongo = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const newID = {name, email};
      console.log(newID);
      fetch('http://localhost:5000/data', {
        method: 'POST', 
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newID)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }
  return (
    <>
    
      <h1>simple data load mongo</h1>
      <form onSubmit={handleAddServerToMongo}>
        <input type="text" name='name' />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
   
    </>
  )
}

export default App
