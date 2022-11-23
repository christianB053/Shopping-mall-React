import { useState, useContext } from "react";
import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";
import { callAPIResponse } from "../../database/callAPI";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";

export default function HomePage() {
  const [loadData, setLoadData] = useState(null);
  useContext(callAPIResponse).then((data) => {
    setLoadData(data);
  });

  return (
    <main>
      {loadData !== null ? (
        <>
          <ul>
            {loadData.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </ul>
          <Cart />
        </>
      ) : (
        <FailLoadData />
      )}
    </main>
  );
}
