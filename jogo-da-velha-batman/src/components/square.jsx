function Square({ value, onSquareClick }) {
    let icon;
    if (value === "X") {
      icon = <span style={{ fontSize: '2rem' }}>🦇</span>; //morcego
    } else if (value === "O") {
      icon = <i className="bi bi-circle-fill text-warning fs-1"></i>; // Bola 
    }
  
    return (
      <button
        className="btn btn-dark border border-warning m-1 d-flex justify-content-center align-items-center"
        style={{ width: "80px", height: "80px" }}
        onClick={onSquareClick}
      >
        {icon}
      </button>
    );
  }
  
  export default Square;
  