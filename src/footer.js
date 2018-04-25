import React from 'react';


export const Footer = (props) => {
    return(
     <div>
         <h1>footer Goes here</h1>
         <nav className="navbar navbar-default">
			<ul className="nav navbar-nav">
              <li className=""><a href="#">{props.linka}</a></li>
              <li><a href="#">{props.linkb}</a></li>
        	</ul>
         </nav>
      </div>  
    )
}



