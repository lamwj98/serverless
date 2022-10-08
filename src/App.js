import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("")


  useEffect(() => {
    axios.get("https://ozujkabor65f6qi4xyuv3adxpe0bqmhv.lambda-url.ap-northeast-1.on.aws/").then(
      (res) => {
          setData(res.data)
      }).catch((err) => console.log(err))

  }, [])

  return (
    <div className="App">
      <h2>
        SGD Exchange Rate
      </h2>
      {data["timestamp"] && <p>Updated as of: {String(new Date(data["timestamp"]))}</p>}
      {data["rates"] && Object.keys(data["rates"]).map((key, index) => {
        return <p key={index}>
          {key}: {data["rates"][key]}
        </p>
      })
      }
    </div>
  );
}

export default App;
