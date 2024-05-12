import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const PRODUCT = import.meta.env.VITE_PRODUCT;
  const [value, setValue] = useState({
    name: "",
    age: "",
    iamge: "",
  });
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  // ! GET
  const getData = async () => {
    try {
      const { data } = await axios.get(PRODUCT);
      console.log(`Successfully get: ${data}`);
      console.log(data);
      setIsloading(false);
      setData(data);
    } catch (e) {
      console.log(`Error getting data: ${e}`);
      setIsloading(false);
    }
  };
  // !  GET
  useEffect(() => {
    getData();
  }, []);

  // ! POST
  const postData = async () => {
    const { data } = await axios.post(PRODUCT, { name: value });
    getData();
    console.log(data);
  };
  // ! POST
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <h1>Todo</h1>
          </div>
          <div className="hed-input">
            <input
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => setValue({ ...value, age: e.target.value })}
              value={value.age}
              type="text"
              placeholder="Age"
            />
            <input
              onChange={(e) => setValue({ ...value, iamge: e.target.value })}
              value={value.iamge}
              type="text"
              placeholder="IMG url"
            />
            <button onClick={postData}>Add</button>
          </div>
          <div className="list">
            {isloading ? (
              <h1>Loading...</h1>
            ) : (
              <div>
                {data.map((item: TODO.Product) => (
                  <h1>{item.name}</h1>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
