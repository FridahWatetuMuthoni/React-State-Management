import useData from "./hooks/useData";
import Person from "./components/Person";
import Footer from "./components/Footer";
import { memo } from "react";
import Post from "./components/Post";
import Product from './components/Product'

function App() {
  const { data } = useData()

  //Making sure that the footer component rerender only when something is different
  const MemorizedFooter = memo(Footer)
  return (
    <div className="App">
      <section className="margin">
        <h1>Persons Section</h1>
        {
        data.map((person,index) => {
          return <Person key={index} {...person} />
        })
      }
      </section>
      <section className="margin">
        <MemorizedFooter/>
      </section>
      <section className="margin">
        <Post/>
      </section>
      <section className="margin">
        <Product/>
      </section>
      </div>
  );
}

export default App;
