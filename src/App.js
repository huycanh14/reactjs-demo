import {useState} from 'react'

// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJs'
  },
];

const gifts = [
  "CPU i9",
  "RAM 32GB RGB",
  "RGB Keyboard"
]
function App() {

  const [gift, setGift] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(3);

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }

  const handleSubmit = () => {
    
    // Call API
    console.log({
      name,
      email
    });
  }
  // console.log(name);
  return (
    <div className="App">
      <div style={{padding: 32}}>

        {courses.map((course, index) => (
          <div key={index}>
            <input type="radio" name="course" 
                checked={checked === course.id} 
                onChange={() => setChecked(course.id)} 
              /> {course.name}
          </div>
        ))}

        <h1>{ gift || 'Chua co phan thuong'}</h1>
        <button onClick={randomGift}>Lay phan thuong</button>


        <input type="text" onChange={e => setName(e.target.value)} value={name}/>
        <input type="text" onChange={e => setEmail(e.target.value)} value={email}/>

        {/* <button onClick={() => setName('Nguyen Van BBBB')}>Change name</button> */}
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default App;
