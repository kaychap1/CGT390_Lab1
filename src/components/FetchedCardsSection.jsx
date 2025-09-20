
import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Dropdown from './Dropdown.jsx';
import Wrapper from './Wrapper.jsx';

const FetchedCardsSection = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('All');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
        const uniqueTitles = [...new Set(data.map(user => user.company.bs))];
        setTitles(uniqueTitles);
      });
  }, []);

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    if (title === 'All') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.company.bs === title);
      setFilteredUsers(filtered);
    }
  };

  return (
    <div>
      <Wrapper>
        <h2>Fetched Profiles</h2>
        <Dropdown onSelect={handleTitleSelect} options={titles} />
      </Wrapper>
      <div>
        {filteredUsers.map(user => (
          <Wrapper key={user.id}>
            <Card
              name={user.name}
              description={user.company.bs}
              image={`https://i.pravatar.cc/150?u=${user.id}`}
            />
          </Wrapper>
        ))}
      </div>
    </div>
  );
};

export default FetchedCardsSection;
