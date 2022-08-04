import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
//   const token = window.localStorage?.getItem("token");
  useEffect(() => {
    axios
      .get(url, { headers: { auth: localStorage?.getItem("token") } })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Erro de requisição GET", error);
      });
  }, [url]);

  return data;
}
export default useRequestData
