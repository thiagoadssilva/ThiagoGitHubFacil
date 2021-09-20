import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import { FaSearch} from 'react-icons/fa';
import {Footer} from './Footer';
import Switch from '@material-ui/core/Switch';


import '../styles/repositories.scss';

export function RepositoryList(){
  const [repositories, setRepositories] = useState();
  const [value, setValue] = useState('');
  const [controlSearch, setControlSearch] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  function handleChange(event){
    setValue(event.target.value)
  }

  function handleSearch(){
    setControlSearch(controlSearch + 1)
  }

  function handleChangeTheme() {
    setIsDarkTheme(!isDarkTheme);
}

  useEffect(() =>{
    if(value != ''){
      if(controlSearch > 0){
        fetch('https://api.github.com/users/'+value+'/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        //.then(data => console.log(data))
      }
    }
  },[controlSearch])

  return(

    <div className="list-search">
      <div className={isDarkTheme ? "footerOne-dark search" : "footerOne-light search"} >
        <input 
          type="text" 
          className={isDarkTheme ? "input-dark inputText" : "input-light inputText"}
          name="search" 
          value={value} 
          placeholder="Informe o nome do seu repositório.." 
          onChange={handleChange} 
        />
        
        <FaSearch onClick={handleSearch} className={isDarkTheme ? "button-dark button" : "button-light button"}/>

        <div>
          <label className={isDarkTheme ? "footerOne-dark" : "footerOne-light"}>Light</label>
          <Switch checked={isDarkTheme} onClick={handleChangeTheme}/>
          <label className={isDarkTheme ? "footerOne-dark" : "footerOne-light"}>Dark</label>
        </div>
      </div>

      <div className="list">
        <ul className="cartItem">
          {repositories &&
            repositories.map(repository => {
              return <RepositoryItem isDarkTheme={isDarkTheme} key={repository.name} repository={repository}/>
            })
          }
        </ul>
      </div>
      <Footer isDarkTheme={isDarkTheme}/>
    </div>
  );

}