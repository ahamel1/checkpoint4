import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

export default function Form() {
  const send = () =>
    toast.success("Merci ! Je vous contacte le plus vite possible");
  const errorForm = () => toast("Il y a un problème.");

  const [person, setPerson] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const postPerson = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const list = await axios.post(`http://localhost:8000/contact`, {
        firstname,
        lastname,
        email,
        phone,
        message,
      });
      setPerson(person.data);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setMessage("");
      send();
    } catch (err) {
      setError(err);
      errorForm();
    }
  };

  const handleAddFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleAddLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleAddEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <Container>
      <FormContainer onSubmit={postPerson}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={handleAddFirstname}
          value={firstname}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          onChange={handleAddLastname}
          value={lastname}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleAddEmail}
          value={email}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          onChange={handleAddPhone}
          value={phone}
        />
        <input
          type="textarea"
          name="message"
          placeholder="Un petit mot ?"
          onChange={handleAddMessage}
          value={message}
          required
        />
        <input type="submit" value="Allez, c'est partie !" />
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  border: solid 2px #badac9;
  width: 50%;
  height: 70vh;
  margin: 2rem auto;
  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    height: 100%;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 2rem auto;
`;
