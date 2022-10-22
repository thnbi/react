import "./Info.css"

function Info(){
   return (
      <div className="info">
         <img src="../../img/me.jpg" alt=""></img>
         <h1>Renato Freitas</h1>
         <h2>Web Developer</h2>
         <a href="github.com/thnbi" className="info-link">github.com/thnbi</a>
         <div className="buttons">
            <a className="info-button email" href="mailto:renatofreitas1302@gmail.com"><p>Email</p></a>
            <a className="info-button linkedin" href="##"><p>Linkedin</p></a>
         </div>
      </div>
   )
}

export default Info