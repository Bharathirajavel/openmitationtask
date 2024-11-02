import React from "react";
import './App.css';
import { Button , Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
      <div className="App">
        <header className="App-header">
        <Card className='mb-5' style={{color:'green', width:'150px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/59.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'red'}}>
              Mr Eino Karjala
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/pr1">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'green',width:'150px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/75.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'red'}}>
              Monsieur Toni Lecomte
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/pr2">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'green',width:'150px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/98.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'red'}}>
              Mr Akash Fernandes
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/pr3">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'green',width:'150px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/60.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'red'}}>
              Mr Giray Babacan
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/pr4">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'green',width:'150px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/women/53.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'red'}}>
              Mrs Pernille Borch
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/pr5">view details</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  )
}

export default App;
