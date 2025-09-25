
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Intro from './components/Intro.jsx';
import Wrapper from './components/Wrapper.jsx';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import Dropdown from './components/Dropdown.jsx';
import Search from './components/Search.jsx';
import AddProfile from './components/AddProfile.jsx';
import FetchedCardsSection from './components/FetchedCardsSection.jsx';

function NotFound() {
  return (
    <Wrapper>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </Wrapper>
  );
}

function App() {
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [profiles, setProfiles] = useState([
    { name: 'john doe', description: 'Leader', image: image1 },
    { name: 'jane doe', description: 'Engineer', image: image2 },
  ]);

  // Handler for the dropdown selection
  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
  };

  // Handler for the search input
  const handleNameSearch = (name) => {
    setSearchValue(name.toLowerCase());
  };

  // Handler for adding a new profile
  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
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
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </Wrapper>
      

      <Routes>
        <Route path="/" element={
          <>
            <Wrapper>
              <Search onSearch={handleNameSearch} />
              <Dropdown onSelect={handlePositionSelect} options={['Leader', 'Engineer']} />
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
            <FetchedCardsSection />
          </>
        } />
        <Route path="/about" element={<Intro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
