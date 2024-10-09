import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredUserData =  userData.filter((user) => {
    return user?.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.social?.GitHub.split("https://github.com/")[1].toLowerCase().includes(searchTerm.toLowerCase());
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={setSearchTerm} />
      <Sidebar />
      <Main userData={filteredUserData} />
    </div>
  );
}

export default App;
