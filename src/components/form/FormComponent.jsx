import React from "react";

export default function FormComponent(props) {
	return (
		<div>
			<form>
				<label>
					firstname:
					<input
						type="text"
						name="firstname"
						value={props.firstname}
						placeholder="firstname"
						onChange={props.handleChange}
					/>
				</label>
				<br />
				<label>
					lastname:
					<input
						type="text"
						name="lastname"
						value={props.lastname}
						placeholder="lastname"
						onChange={props.handleChange}
					/>
				</label>
				<br />
				<label>
					age:
					<input
						type="number"
						name="age"
						value={props.age}
						placeholder="age"
						onChange={props.handleChange}
					/>
				</label>
				<br />
				<label>
					gender:
					<input
						type="radio"
						name="gender"
						value="male"
						onChange={props.handleChange}
					/>
					male
					<input
						type="radio"
						name="gender"
						value="female"
						onChange={props.handleChange}
					/>
					female
				</label>
				<br />
				<label>
					destination:
					<select
						type="select"
						name="destination"
						onChange={props.handleChange}
					>
						<option>select ......</option>
						<option>Algeria</option>
						<option>Canada</option>
						<option>Poland</option>
					</select>
				</label>
				<br />

				<label>
					<input
						type="checkbox"
						name="isVegan"
						onChange={props.handleChange}
						checked={props.isVegan}
					/>
					Vegan?
				</label>
				<br />

				<label>
					<input
						type="checkbox"
						name="isKosher"
						onChange={props.handleChange}
						checked={props.isKosher}
					/>
					Kosher?
				</label>
				<br />

				<label>
					<input
						type="checkbox"
						name="isLactoseFree"
						onChange={props.handleChange}
						checked={props.isLactoseFree}
					/>
					Lactose Free?
				</label>
				<br />

				<button>Submit</button>
			</form>
			<div className="display">
				<p>firstname: {props.firstname}</p>
				<p>lastname: {props.lastname}</p>
				<p>age: {props.age}</p>
				<p>gender: {props.gender}</p>
				<p>destination: {props.destination}</p>
				<p>
					dietary restrictions:
					{props.isKosher ? " Kosher " : ""}
					{props.isLactoseFree ? "LactoseFree " : ""}
					{props.isVegan ? "Vegan " : ""}
				</p>
			</div>
		</div>
	);
}
