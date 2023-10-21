import { useEffect, useState } from "react";
import { client } from "../api/Axios";
export default function Userdashbord() {
  const [todo, setTodo] = useState(0);
  useEffect(() => {
    client.get("/todo").then((response) => console.log(response));
  });
  return <div>Userdashbord</div>;
}
