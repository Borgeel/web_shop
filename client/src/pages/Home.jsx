import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState();

  const URL = useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch();
      } catch (error) {
        console.log(error.message);
      }
    };
    return () => {
      second;
    };
  }, [third]);

  const fetchUser = () => {};

  return <div>Home hiiii</div>;
};

export default Home;
