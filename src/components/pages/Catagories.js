import React, { useEffect, useState } from "react";
import CatagoryCard from "../CatagoryCard";

const Catagories = () => {
  const [qcatagory, setQcatagory] = useState([]);

  useEffect(() => {
    fetch("https://quiz-app-server-zeta.vercel.app/quiz/category")
      .then((res) => res.json())
      .then((data) => setQcatagory(data.data));
  }, []);

  return (
    <>
      
      <div class="grid grid-cols-5 gap-4">
        {qcatagory.map((cat) => (
          <CatagoryCard key={cat._id} cat={cat} />
        ))}
      </div>
    </>
  );
};

export default Catagories;
