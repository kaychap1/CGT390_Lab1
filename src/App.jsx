
import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Intro from './components/Intro.jsx';
import Wrapper from './components/Wrapper.jsx';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import Dropdown from './components/Dropdown.jsx';
import Search from './components/Search.jsx';

function App() {
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [searchValue, setSearchValue] = useState('');

  const profiles = [
    { name: 'john doe', description: 'Leader', image: image1 },
    { name: 'jane doe', description: 'Engineer', image: image2 },
  ];

  // Handler for the dropdown selection
  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  // Handler for the search input
  const handleNameSearch = (name) => {
    setSearchValue(name.toLowerCase());
  };

  // Combined filter logic
  const filteredProfiles = profiles.filter((profile) => {
    const positionMatch = selectedPosition === 'All' || profile.description === selectedPosition;
    const nameMatch = profile.name.toLowerCase().includes(searchValue);
    return positionMatch && nameMatch;
  });

  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <Wrapper>
        <Intro />
      </Wrapper>
      <Wrapper>
        {/* Pass the correct handlers to the components */}
        <Search onSearch={handleNameSearch} />
        <Dropdown onSelect={handlePositionSelect} />
      </Wrapper>
      
      <div>
        {filteredProfiles.map((profile, index) => (
          <Wrapper key={index}>
            <Card
              name={profile.name}
              description={profile.description}
              image={profile.image}
            />
          </Wrapper>
        ))}
      </div>
    </>
  );
}

export default App;
