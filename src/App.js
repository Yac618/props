
import './App.css';
import Profile from './Profile/Profile' ;
import image from './image.webp'
function App() {
  const handleClick = (FullName)=> alert (`my name is ${FullName}`) 
  return (
    <Profile FullName ="Youssef Hamrouni" bio="hhfgoh " profession="Etudiant "  handleClick= { handleClick}>
      {image}
    </Profile>
 
    
    
    
    
    
      
  );
}

export default App;
