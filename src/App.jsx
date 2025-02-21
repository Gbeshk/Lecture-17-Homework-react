import "./App.css";
import Header from "./components/Header/Header";
import ShoePictures from "./components/ShoePictures/ShoePictures";
import Info from "./components/Info/Info";
import { useState } from "react";

function App() {
  const [added, setAdded] = useState(false);
  const [total, setTotal] = useState(0);
  return (
    <>
      <Header added={added} setAdded={setAdded} total={total} />
      <div className="flex items-center medium:justify-between max-w-[1015px] w-full  flex-wrap justify-center gap-[20px] !mt-[80px]">
        <ShoePictures />
        <Info
          added={added}
          setAdded={setAdded}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default App;
