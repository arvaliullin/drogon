import './spinner.css';

function Spinner(){
  return (
    <div className="spinner">
      <div className="spinner__circle"></div>
      <div className="spinner__text">Loading...</div>
    </div>
  );
}

export default Spinner;
