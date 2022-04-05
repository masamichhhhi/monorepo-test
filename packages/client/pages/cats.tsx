import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Cat, CatsApi } from "../openapi-generator";

const CatsPage: NextPage = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  useEffect(() => {
    const f = async () => {
      const api = new CatsApi();

      const response = await api.catsControllerFindAll();

      console.log(response);

      setCats(response.data);
    };

    f();
  }, []);

  return cats ? (
    <div>
      {cats.map((cat) => (
        <>
          <p>{cat.age}</p>
          <p>{cat.breed}</p>
        </>
      ))}
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default CatsPage;
