import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
    return (
      <div className='App'>
        <NavBar />
        <Main />
        <ItemListContainer/>
       </div>
    )
}

export default App;