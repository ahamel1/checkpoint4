import React from "react";
import "./burgermenu.css";
import cvPdf from "../data/CV ALTERNANCE WCS.pdf";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function BurgerMenu() {
	return (
		<Menu right width={"80%"}>
			<Link to="/contact">Contact</Link>
			<a href={cvPdf} download>
				<span className="fas fa-file-download"></span> CV
			</a>
		</Menu>
	);
}
