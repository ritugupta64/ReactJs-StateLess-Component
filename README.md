-> We create stateless component when we're not using any state in our component and its good for the performance purpose. here we use the 'const' keyword instead of class and ES6 function definition and remove the render method from here.

-> And pass the props as a parameter 

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