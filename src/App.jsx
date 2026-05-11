import Header from './Header.jsx'
import Body from './Body.jsx'

function App() {

  return(
  /*adding a component here, so adding it like this looks like html
  //but we are calling the Header function from the Header.jsx file 
  can write it like this <Header></Header>
  or short hand below*/

  //need to wrap this in a fragment to do this 
  <>
  <Header/>
  <Body/>

  </>
  );
 
}

export default App
