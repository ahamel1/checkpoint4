import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import "./style.css";

export default function ListPerson() {
  const [error, setError] = useState();
  const [state, setState] = useState({
    columns: [
      { title: "Prénom", field: "firstname" },
      { title: "Nom", field: "lastname" },
      { title: "Email", field: "email" },
      { title: "Téléphone", field: "phone" },
      { title: "Message", field: "message" },
    ],
    data: [],
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await axios.get(`http://localhost:8000/contact`);
        setState({ ...state, data: list.data });
      } catch (err) {
        setError(err);
      }
    };
    getList();
  }, []);

  return (
    <>
      {error ? (
        <div> Something went wrong </div>
      ) : (
        <MaterialTable
          style={{ width: "80vw" }}
          title="Demandes de contact"
          columns={state.columns}
          options={{
            headerStyle: {
              backgroundColor: "#badac9",
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            },
            cellStyle: {
              borderBottom: "thick double #badac9",
            },
          }}
          data={state.data}
          editable={{
            onRowAdd: (newData) => {
              return axios
                .post(`http://localhost:8000/contact`, newData)
                .then(() => {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                });
            },
            onRowUpdate: (newData, oldData) => {
              return axios
                .put(`http://localhost:8000/contact/${oldData.id}`, newData)
                .then(() => {
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                });
            },
            onRowDelete: (oldData) => {
              return axios
                .delete(`http://localhost:8000/contact/${oldData.id}`)
                .then(() => {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                });
            },
          }}
        />
      )}
    </>
  );
}
