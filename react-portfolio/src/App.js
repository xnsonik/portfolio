import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header>
        <div class="container">
          <h1>MY PORTFOLIO</h1>
        </div>
      </header>
         <div className='about-me'>
         <h2>About me:</h2>
         </div>
        <div class="container2">
          <p> My name is Saule, and 17 y.o. <br></br>
          I am a web developer who loves to create innovative interfaces using 
          React, JavaScript, CSS and other technologies. My goal is to make projects that inspire me.</p>
        </div>
    
      <section class="projects">
          <h2>My Projects:</h2>
        
          <a href="https://www.figma.com/design/paATF165uI4MPqNkfwLByi/4?node-id=0-1&t=8iOIYW7vRxTpY4CM-1" class="button" target="_blank">
          <h3>LuluLook</h3>
          <p>Online-shop</p>
          </a>

          <a href="https://www.figma.com/design/Q7jbRthqm6KUreft0wEKi4/Light-Webflow-Agency-Landingage-Template-by-FasterUI.com-(Community)-(Copy)?node-id=6106-35&t=lG87uJxeEiogUrRI-1" class="button" target="_blank">
          <h3>OnStudy</h3>
          <p>Online-ourses</p>
          </a>
          
      </section>
    
      <footer>
        <div class="container">
          <p>© 2024, my-portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
