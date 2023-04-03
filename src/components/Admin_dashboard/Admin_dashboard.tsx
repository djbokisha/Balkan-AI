import { useEffect, useState } from "react";
import "./Admin_dashboard.css";
import Axios from "axios";
import { User } from "../../interfaces/user.interface";

function Admin_dashboard() {
  const [appData, setAppData] = useState<User[] | []>([]);
  const [filterdata, setfilterData] = useState(appData);

  useEffect(() => {
    getUsers();
  }, []);

  const filterFunction = (searchTerm: any, objKey: any) => {
    const filteredData = filterdata.filter((obj: any) => {
      return obj[objKey].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setfilterData(filteredData);
    if (searchTerm !== "") {
      return filteredData;
    } else {
      setfilterData(appData);
    }
  };

  async function getUsers() {
    const { data } = await Axios.get("http://localhost:5000/users");

    console.log(data);
    setAppData(data);
    setfilterData(data);
  }

  // function addTokens(user: Partial<User>) {
  //   Axios.patch("http://localhost:5000/tokens/addTokens", null, {
  //     params: {
  //       email: user.email!,
  //     },
  //   });
  // }

  function removeAllTokens(user: User) {
    Axios.patch(`http://localhost:5000/tokens/removeTokens`, null, {
      params: { email: user.email },
    })
      .then((res) => {
        console.log(res);

        const updatedUsers = appData.map((u) =>
          u.id === user.id ? { ...user, tokens: (user.tokens! = 0) } : u
        );
        setAppData(updatedUsers);
        setfilterData(updatedUsers);
        console.log(updatedUsers);
      })
      .catch((error) => console.log(error));
  }

  function removeTokens(user: User) {
    Axios.patch(`http://localhost:5000/tokens/removeTokens`, null, {
      params: { email: user.email },
    })
      .then((res) => {
        console.log(res);

        const updatedUsers = appData.map((u) =>
          u.id === user.id ? { ...user, tokens: user.tokens! - 20000 } : u
        );
        setAppData(updatedUsers);
        setfilterData(updatedUsers);
        console.log(updatedUsers);
      })
      .catch((error) => console.log(error));
  }

  function addTokens(user: User) {
    Axios.patch(`http://localhost:5000/tokens/addTokens`, null, {
      params: { email: user.email },
    })
      .then((res) => {
        console.log(res);

        const updatedUsers = appData.map((u) =>
          u.id === user.id ? { ...user, tokens: user.tokens! + 20000 } : u
        );
        setAppData(updatedUsers);
        setfilterData(updatedUsers);
      })
      .catch((error) => console.log(error));
  }
  const tableData = () => {
    return filterdata.map((user, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>{user.id!}</td>
            <td> {user.username!} </td>
            <td> {user.email!} </td>
            <td> {user.tokens!} </td>
            <td> {user.payments!} </td>
            <td>
              <button onClick={() => addTokens(user)}>Add 20K Tokens</button>/
              <button onClick={() => removeTokens(user)}>
                Remove 20K Tokens
              </button>{" "}
              /
              <button onClick={() => removeAllTokens(user)}>
                Remove All Tokens
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div className="App">
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => filterFunction(e.target.value, "username")}
      ></input>
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={(e) => filterFunction(e.target.value, "email")}
      ></input>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>tokens</th>
            <th>last payment</th>
            <th>action</th>
          </tr>
        </thead>
        {tableData()}
      </table>
    </div>
  );
}

export default Admin_dashboard;
