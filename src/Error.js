import React from 'react';
import { Link } from 'react-router-dom';


 function Error()
 {

    return(
        <div>
           <h6 className="text-warning fw-semibold fs-4 p-2 text-center">Oops! Page Not Found ⚡</h6>
<p className="fs-5 text-dark text-center"> There is nothing here..!</p>

     <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img 
        src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" 
        alt="Error"
        style={{ width: "650px", maxWidth: "50%" }}/>
    </div>
    <div style={{ textAlign: "center", marginTop: "5px" }}>
        <Link className="btn btn-dark" to="/">
          🔙 Go Home
        </Link>
      </div>

        </div>
    )
 };
 

 export default Error;