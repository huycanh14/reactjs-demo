import {useState} from 'react'

const orders = [100, 200, 300];
function App() {

  // const total = orders.reduce((total, cur) => total + cur);

  // const [counter, setCounter] = useState(1);
  // console.log('not callBack', total);
  // init State - callBack
  // const [counter, setCounter] = useState(total);
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log('callBack',total);
    return total;
  });

  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi"
  })

  const handleIncrease = () => {
    // setCounter(counter + 1);

    // callBack
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  const handleUpdate = () => {
    // setInfo({bio: "Yeu mau hong"});
    // setInfo({...info,bio: "Yeu mau hong"});
    setInfo(prev  => ({
      ...prev,
      bio: "Yeu mau hong"
    }));
  }
  
  return (
    <div className="App">
      {/* <h1>{counter}</h1> */}
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <h1> {JSON.stringify(info)} </h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
