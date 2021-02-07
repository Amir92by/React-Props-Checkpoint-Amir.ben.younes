import './App.css';
import Profil from './profile/profil'
import photocv from './assets/photocv.jpg'


function App () {
    const handleName = (fullName) =>{alert(`My name is ${fullName} `)}
    return (
        <div classeName="App">
         
          <Profil
           fullName = 'Amir Ben Younes'
           bio = "Hello, Amir ben younes from tunisia,I work as a Designer. At the moment , I am doing an intensive course in programming at 'Go My Code' to come a  Full stack Js developer "
           profession= 'Designer'
           handleName={handleName}


           >
           <img src={photocv}  alt='photoCv' />    
            
        </Profil>
           
        </div>
    );
}

export default App;
