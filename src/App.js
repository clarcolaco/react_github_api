import GithubImage from './github.png';
import './App.css';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit!");

  }


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
        <img
          src={GithubImage}
          className="responsive rounded circle"
          alt=""
          height="200px" />

        <h1 className="pt-5">
          <a href="https://github.com/clarcolaco/" target="_blank">Clarissa Colaco</a>
        </h1>
        <h3>Cascavel</h3>
        <p>
          <a href="https://www.linkedin.com/in/clarissa-colaco-ramos/" target="_blank" className="text-info">
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
