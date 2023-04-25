import "./LandingPage.css";




function LandingPage(props) {
 
    return (
      <div className="LandingPage">
        <h1 className="texto-borde">Welcome to Evil Puppy</h1>
        
        <div className="middle">
        <button className="btn btn1" onClick={props.login}>Enter Home</button>
        </div>
      </div>
    );
  }
  
  export default LandingPage;