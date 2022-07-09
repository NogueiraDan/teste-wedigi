import React, { useState } from "react";

const Teste = () => {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const repositoriesLocal = JSON.parse(localStorage.getItem("repositories"));
    setRepositories(repositoriesLocal);
  }, []);

  return (
    <div>
      {repositories.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default Teste;
