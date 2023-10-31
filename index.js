import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById("root")
const root = createRoot(domNode)

function Header(){
      return(  
      <header>
            <nav>
                <img src="./react_logo.png" width="40px"/>
            </nav>
        </header>
        )
}
function Footer(){
    return (
        <footer>
            <small>2023 YT</small>
        </footer>
    )
}
function MainContent(){
    return(
    <div>
    <h1>Reasons I'm excited to learn React</h1>
        <ol>
            <li>It's popular library, so I'll be able to fit in with cool kids!</li>
            <li>I'm more likely to get a job as developer if I know React</li>
            
        </ol>
    </div>
    )
}
function Page(){
   return( 
        <div>
        <Header />
        <MainContent />
        <Footer />
        </div> 
         )
}

root.render(<Page/>)