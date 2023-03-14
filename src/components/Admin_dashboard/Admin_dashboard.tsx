import { useState } from "react";
import "./Admin_dashboard.css";

function Admin_dashboard() {
  const data = [
    {
      username: "sai",
      email: "22",
      tokens: "50",
    },
    {
      username: "sai",
      email: "22",
      tokens: "75",
    },
    {
      username: "saifknfkf",
      email: "29",
      tokens: "65",
    },
    {
      username: "dfgffgsai",
      email: "21",
      tokens: "99",
    },
    {
      username: "sadsfai",
      email: "28",
      tokens: "55",
    },
    {
      username: "sharavni",
      email: "22",
      tokens: "35",
    },
    {
      username: "saikrishna",
      email: "18",
      tokens: "95",
    },
    {
      username: "krishna",
      email: "26",
      tokens: "75",
    },
    {
      username: "madhu",
      email: "20",
      tokens: "65",
    },
    {
      username: "dev",
      email: "25",
      tokens: "65",
    },
    {
      username: "rohith",
      email: "22",
      tokens: "85",
    },
    {
      username: "mobin",
      email: "21",
      tokens: "95",
    },
  ];

  const [appData] = useState(data);
  const [filterdata, setfilterData] = useState(appData);

  // const searchJobs = (searchKey) => {
  //   const text = data.filter((obj) =>
  //     Object.keys(obj).some((key) =>
  //       obj[key].toLowerCase().includes(searchKey.toLowerCase())
  //     )
  //   );
  //   setfilterData(text);
  //   if (searchKey !== "") {
  //     return text;
  //   } else {
  //     setfilterData(data);
  //   }
  // };

  const filterFunction = (searchTerm: any, objKey: any) => {
    const filteredData = filterdata.filter((obj: any) => {
      return obj[objKey].toLowerCase().includes(searchTerm.toLowerCase());
    });
    setfilterData(filteredData);
    if (searchTerm !== "") {
      return filteredData;
    } else {
      setfilterData(data);
    }
  };

  const tableData = () => {
    return filterdata.map((user, index) => {
      return (
        <tr key={index}>
          <td> {user.username} </td>
          <td> {user.email} </td>
          <td> {user.tokens} </td>
          <td>/</td>
          <td>
            {" "}
            <button>Remove</button> / <button>Add Tokens</button>
          </td>
        </tr>
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
      <input
        type="text"
        name="tokens"
        placeholder="Tokens"
        onChange={(e) => filterFunction(e.target.value, "tokens")}
      ></input>

      <table>
        <thead>
          <tr>
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
