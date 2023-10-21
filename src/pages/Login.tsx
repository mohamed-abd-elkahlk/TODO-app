import { useState } from "react";
import { client } from "../api/Axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  return (
    <div>
      <div>
        <label htmlFor="emial">gmial</label>
        <input
          type="email"
          name="emial"
          id=""
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="emial"
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            setData({
              email: username,
              password,
            });
            client.post("/auth/login", data).then((res) => console.log(res));
          }}
        />
      </div>
    </div>
  );
}

export default Login;
