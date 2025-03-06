import './App.css'
import CreateButton from './MyButton'
import CreateSearch from './Searchbar'
import CreateHomeButton from './MyHomeButton'
import { useState } from 'react'

function Navbar() {

  const [search, setSearch] = useState('');

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  }


  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', backgroundColor: 'turquoise' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
          <div style={{gap: 5 }}>
            <CreateHomeButton name="Home" />
            <CreateButton name="About" />
            <CreateButton name="Services" />
          </div>
          <CreateSearch placeholder="Search..." setState={handleSearch} state={search}/>
        </nav>
      </header>
    </> 
  )
}

export default Navbar;
