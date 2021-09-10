import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5">
        Github profile
      </h1>
      <form>
        <div className="form-group">
         
          <div className="input-group">

            <input 
            type="text" 
            className="form-control" 
            required
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-sucess">
                Search
              </button>
            </span>
          </div>

        </div>
      </form>
    </div>
  );
}

export default App;
