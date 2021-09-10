import GithubImage from './github.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  console.log(userData);


  return (
    <div className="container text-center">
      <h1 className="py-5">
        GITHUB PROFILE
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">

            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-outline-dark">
                Search
              </button>
            </span>
          </div>

        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={GithubImage}
            className="responsive rounded-circle"
            alt=""
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />
            <h1 className="pt-5">
              <a href="https://github.com/clarcolaco" target="_new">
                {userData.name}
              </a>
            </h1>
            <h3>{userData.location}</h3>
            <h3>{userData.bio} @ working at: {userData.company}</h3>
            <h5>Public repos: {userData.public_repos} // Following: {userData.following} // Followers: {userData.followers}</h5>
            <h5>
              <a href={userData.blog} target="_new" className="text-info">
                Site</a> ++ {userData.email}

            </h5>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
