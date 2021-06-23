import React, { Component } from "react";
import "./Form.style.css";
import FormComponent from "./FormComponent";

class Form extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			lastname: "",
			age: 18,
			gender: "female",
			destination: "",
			isVegan: false,
			isKosher: false,
			isLactoseFree: false,
		};
	}

	handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		type === "checkbox"
			? this.setState({
					[name]: checked,
			  })
			: this.setState({
					[name]: value,
			  });
	};

	render() {
		return <FormComponent handleChange={this.handleChange} {...this.state} />;
	}
}

export default Form;
