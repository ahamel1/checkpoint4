import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: solid 2px #badac9;
	width: 50%;
	height: 70vh;
	margin: 2rem auto;
	box-shadow: 1rem 1rem 1px 1px #badac9;
	${(props) => props.theme.mediaMax.small`
    width: 80%;
    margin: 3rem auto;
    height: 100%;
  `}
`;

const Text = styled.p`
	text-transform: uppercase;
	padding: 0.6rem;
	text-align: center;
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 60%;
	${(props) => props.theme.mediaMax.small`
    margin: 2rem;
    width: 80%;
  `}
`;

const Input = styled.input`
	border-radius: 6px;
	margin-bottom: 1rem;
	padding: 0.6rem;
	text-transform: uppercase;
	border: 1px solid #badac9;
`;

const InputBtn = styled(Input)`
	background: #badac9;
	&:hover {
		background: #678a77;
		color: white;
		transition: all 0.3s ease-out;
	}
`;

export default function Form() {
	const send = () =>
		toast.success("Merci ! Je vous contacte le plus vite possible");
	const errorForm = () => toast.warning("Il y a un problème.");

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
			<Text>
				Vous rechercher une personne curieuse et pleine de vie ? N'hésitez pas à
				me contacter !
			</Text>
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
				<Input
					type="text"
					name="firstname"
					placeholder="Prénom"
					onChange={handleAddFirstname}
					value={firstname}
					required
				/>
				<Input
					type="text"
					name="lastname"
					placeholder="Nom"
					onChange={handleAddLastname}
					value={lastname}
					required
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleAddEmail}
					value={email}
					required
				/>
				<Input
					type="tel"
					name="phone"
					placeholder="Téléphone"
					onChange={handleAddPhone}
					value={phone}
				/>
				<Input
					type="textarea"
					wrap="hard"
					style={{
						height: "10vw",
						overflowWrap: "break-word",
						overflowY: "auto",
						textOverflow: "ellipsis",
						overflow: "hidden",
						whiteSpace: "nowrap",
					}}
					name="message"
					placeholder="Un petit mot ?"
					onChange={handleAddMessage}
					value={message}
					required
				/>
				<InputBtn id="buttonform" type="submit" value="Envoyer" />
			</FormContainer>
		</Container>
	);
}
