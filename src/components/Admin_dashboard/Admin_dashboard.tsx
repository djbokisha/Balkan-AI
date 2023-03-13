import { useState } from "react";
import "./Admin_dashboard.css";

function Admin_dashboard() {
  const data = [
    {
      name: "sai",
      email: "22",
      tokens: "50",
    },
    {
      name: "sai",
      email: "22",
      tokens: "75",
    },
    {
      name: "saifknfkf",
      email: "29",
      tokens: "65",
    },
    {
      name: "dfgffgsai",
      email: "21",
      tokens: "99",
    },
    {
      name: "sadsfai",
      email: "28",
      tokens: "55",
    },
    {
      name: "sharavni",
      email: "22",
      tokens: "35",
    },
    {
      name: "saikrishna",
      email: "18",
      tokens: "95",
    },
    {
      name: "krishna",
      email: "26",
      tokens: "75",
    },
    {
      name: "madhu",
      email: "20",
      tokens: "65",
    },
    {
      name: "dev",
      email: "25",
      tokens: "65",
    },
    {
      name: "rohith",
      email: "22",
      tokens: "85",
    },
    {
      name: "mobin",
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
          <td> {user.name} </td>
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
        name="name"
        placeholder="Name"
        onChange={(e) => filterFunction(e.target.value, "name")}
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
            <th>name</th>
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
