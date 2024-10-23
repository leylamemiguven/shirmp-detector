
import React, {useState, useEffect} from  'react';

import './App.css';
import userEvent from '@testing-library/user-event';

//1)
// create a button that increments a count after 3 secs
// function App() {

//   const [count, setCount] = useState(0)

//   // const increment = () => {
//   //   setTimeout(() => {
//   //     setCount(prev => prev + 1)
//   //   }, 3000);
    
//   // }

//   const increment = () => {
//     setCount(prev => prev + 1)
//   }

//   useEffect(() =>{
//     const intervalId = setInterval(increment, 3000); //don't forget to use intervalId and to later clear it to stop sporradic changes 

//     return () => {
//       clearInterval(intervalId); // Clear the interval on component unmount
//     };

//   },[])


//   return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment count after 3 secs</button>

//       </div>
//   );
// };


// export default App;

// 2)
//given an array of names, have names display on the page
// function App() {
//   const arr = ['Leyla', 'Zeynep','Tyler','Ipek','Swapna','Amber'];




//   return (
//       <div>
//         {arr.map(name => <p>{name}</p>)}
//       </div>
//   );
// };


// export default App;



// 3)
// Challenge: Create a countdown timer that starts from a specified number of seconds when a button 
// is clicked. Display the remaining time on the screen, and ensure that the timer stops when it reaches zero.
// function App() {
//   const countdownVal = 10;
//   const [counter, setCounter] = useState(countdownVal);
//   const [countdownActive, setCountdownActive] = useState(false);

//   const startCountdown = () => {
//     setCountdownActive(true); // Start the countdown
//   };

//   useEffect(() => {
//     let intervalId;

//     if (countdownActive && counter > 0) {
//       intervalId = setInterval(() => {
//         setCounter(prev => prev - 1);
//       }, 1000);
//     } else if (counter === 0) {
//       clearInterval(intervalId);
//       setCountdownActive(false); // Stop the countdown when it reaches zero
//       setCounter(countdownVal); // Reset the counter to the initial value
//     }

//     return () => {
//       clearInterval(intervalId); // Clean up the interval on component unmount
//     };
//   }, [countdownActive, counter]); // Run the effect when countdownActive or counter changes

//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={startCountdown} disabled={countdownActive}>Start Countdown</button>
//     </div>
//   );
// }

// export default App;



// 4)
// Fetch user data from a public API (e.g., https://jsonplaceholder.typicode.com/users)
// when the component mounts. Display the user names in a list.

// function App() {

//   const [users, setUsers] = useState([])


//   useEffect(()=>{
//       fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) =>resp.json())
//     .then((data) => {
//       console.log(data)
//       const names = data.map(item => item.name)
//       setUsers(names)
//     })



//   },[])
  
  

    
//   return (
//     <div>
//       {users.map(name => <p>{name}</p>)}
//     </div>
//   );
// }

// export default App;



//5)
// Challenge: Create a button that toggles between light and dark themes. 
// Save the user's theme preference in local storage so that it persists between page refreshes.


// function App() {

//   const savedTheme = JSON.parse(localStorage.getItem('userSelectedTheme'));
//   const [theme, setTheme] =useState(savedTheme !== null ? savedTheme : true)


//   useEffect(() => {
//     localStorage.setItem('userSelectedTheme', JSON.stringify(theme));
    

//     console.log(localStorage.getItem('userSelectedTheme'))
  
  
//   }, [theme]);



    
//   const lightTheme = {
//     backgroundColor: 'white',
//     color: 'black',
//     padding: '4em'
//   }

//   const darkTheme = {
//     backgroundColor: 'black',
//     color: 'white',
//     padding: '4em'



//   }

//   const changeTheme = () => {
//     setTheme(prev => !prev)

//   }

  

//   return (
//     <div style={
//       theme ? lightTheme : darkTheme
//     }>
//       <p>Click button to change the theme</p>
//       <button onClick={changeTheme}>Change Theme </button>

//     </div>
//   );
// }

// export default App;


// 6)
// Auto-Refresh Data
// Challenge: Create a component that fetches and displays a random joke from an API (e.g., https://api.chucknorris.io/jokes/random) 
//   every 5 seconds. Include a button that allows the user to fetch a new joke immediately.



// function App() {

//   const [joke,setJoke] = useState('')

//   const fetchJoke = () => {
//     fetch('https://api.chucknorris.io/jokes/random')
//     .then((resp)=>resp.json())
//     .then((data)=> {
//        console.log(data)
//        setJoke(data.value)

//     })

//   }

//   useEffect(() => {

//     const intervalId = setInterval(fetchJoke, 5000)
//     return () => {
//       clearInterval(intervalId )
//     }


//   },[])


  
// const getJoke = () =>{
//   fetchJoke()

// }
   
//   return (
//     <div>
//       <h3>{joke}</h3>
//       <button onClick={getJoke}>Get joke</button>


//     </div>
//   );
// }

// export default App;


//7
// Repeat the frontend challenge for foreplay


// function App() {

//   const [closet, setClosetItems] = useState(['Shoes', 'Glasses','Kimono'])
//   const [suitcase, setSuitcaseItems] = useState(['Dress'])
//   console.log('closet',closet)
//   console.log('suitcase',suitcase)


//   const moveItem = (item) =>{
//     if (closet.includes(item)){
//       setClosetItems(prev => prev.filter(closetItem => closetItem !== item))
//       setSuitcaseItems(prev => [...prev, item])
//     }
//     else if (suitcase.includes(item)){
//       setSuitcaseItems(prev => prev.filter(suitcaseItem => suitcaseItem !== item))
//       setClosetItems(prev => [...prev, item])
//     }
//   }


//   const styles = {
//     display: 'flex',

//   }

   
//   return (
//     <div>

//       <h1>Closet</h1>
//         <div style={styles}>
//           {closet.map(item => {
//             return (
//             <div>
//               <p>{item}</p>
//               {/* <button onClick={moveItem(item)}>Move</button> I am immedeatly rendering here I don't want this to happen so I will use this instead  */}
//               <button onClick={() => moveItem(item)}>Move</button>
//             </div>)

            
//           })}
//         </div>
        
//         <h1>Suitcase</h1>
//         <div style={styles}>
//           {suitcase.map(item => {
//             return (
//             <div>
//               <p>{item}</p>
//               {/* <button onClick={moveItem(item)}>Move</button> I am immedeatly rendering here I don't want this to happen so I will use this instead  */}
//               <button onClick={() => moveItem(item)}>Move</button>
              

//             </div>
//             )
//                       })}

    

//         </div>




//     </div>
//   );
// }

// export default App;



// Form with Validation

// Challenge: Create a simple form with fields for name and email. Implement basic validation 
// (e.g., name cannot be empty, email must be in the correct format) and display validation messages when the form is submitted.

// function App() {

//   const [name, setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [error, setError] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       setError('Name is required');
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Email is not valid');
//     } else {
//       console.log('Form submitted:', { name, email });
//       setError(''); // Clear the error
//       setName('');
//       setEmail('');
//     }

//   }


//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         <label>Email</label>
//         <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         <button type="submit">Submit</button>

//       </form>
//       {error && <p>The information submitted is not valid</p>}

//     </div>
//   );
// }

// export default App;


//Image Carousel
// Build an image carousel component that allows users to navigate through a series of images. 
// Implement "Next" and "Previous" buttons and automatic sliding every few seconds.

function App() {

  const fetchUrl = 'https://picsum.photos/v2/list?page=1&limit=10'
  const [images, setImages] = useState([])
  const [imageIndex, setImageIndex] = useState(0)



  const incrementIndex = () => {
    setImageIndex(prev => prev + 1)
  }

  const decrementIndex = () => {
    setImageIndex(prev => prev - 1)
  }

  useEffect(() => {

    fetch(fetchUrl)
    .then((resp) => resp.json())
    .then(data =>{

      //console.log(data)
      const imageSources = data.map(item => item.download_url)
      setImages(imageSources)
 
    })

  },[])

  const styles = {
    width: '200px',
    height: '200px',
  }

  console.log(images[imageIndex])


  return (

    <div>
      <button disabled={imageIndex === 0} onClick={decrementIndex}>Previous</button>
      {/* {images.map(url => <img style={styles} src={url}></img>)} */}
      <img style={styles} src={images[imageIndex]}></img>
      <button disabled={imageIndex === images.length} onClick={incrementIndex}>Next</button>
    </div>
  );
}

export default App;
