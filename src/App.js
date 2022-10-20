import './App.css';

const number = 2222;
const singers = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer2' },
  { name: 'Habib', job: 'singer' },
  { name: 'Imran', job: 'singer2' }
]

const singerStyle = {
  color: 'red',
  backgroundColor: 'yellow',
  borderRadius: 10,
  padding: 10
}

function App() {
  const players = ['Mushfiq', 'Tamim', 'Sakib', 'Mashrafee', 'Mahmudullah']
  return (
    <div className="App">
      {
        players.map(player => <li>{player}</li>)
      }

      {/* {
        players.map(player => <Person name={player}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={players[0]} position="Keeper"></Person>
      <Person name={players[2]} position="Batsman"></Person> */}
      <h3>New React Component</h3>
      <Friend name="Salman"></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.position}</p>
    </div>
  );
}

function Friend(props) {
  return (
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>Job: Engineer</p>
    </div>
  )
}

export default App;
