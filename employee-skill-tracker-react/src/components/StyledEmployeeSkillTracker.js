import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
text-align:center;
`;

const Heading = styled.h3`
color:blue;
text-shadow:1px 1px 2px gray;
`;

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`;

const Input = styled.input`
width:200px;
padding:8px;
margin:10px;
border-radius:5px;
border:1px solid lightgray;

:focus{
border:1px solid green;
outline:none;
}
`;

const Button = styled.button`
padding:8px 15px;
margin:10px;
background:#007acc;
color:white;
border:none;
border-radius:6px;
cursor:pointer;

:hover{
background:#005f99;
}
`;

const ButtonRow = styled.div`
display:flex;
justify-content:center;
gap:4px;
`;

const Error = styled.p`
color:red;
font-weight:bold;
`;

const Result = styled.div`
margin-top:20px;
`;

function StyledEmployeeSkillTracker() {
const [name, setName] = useState("");
const [skill, setSkill] = useState("");
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

if (!name || !skill) {
setError("Please fill out all fields.");
setSubmitted(false);
} else {
setError("");
setSubmitted(true);
}
};

const handleReset = () => {
setName("");
setSkill("");
setSubmitted(false);
setError("");
};

return (

<Container>

<Heading>Employee Skill Tracker</Heading>

<Form onSubmit={handleSubmit}>

<Input
placeholder="Enter Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<Input
placeholder="Enter Skill"
value={skill}
onChange={(e) => setSkill(e.target.value)}
/>

<ButtonRow>
<Button type="submit">Submit</Button>
<Button type="button" onClick={handleReset}>Reset</Button>
</ButtonRow>

</Form>

{error && <Error>{error}</Error>}

{submitted && (
<Result>
  <p>Name: {name}</p>
  <p>Skill: {skill}</p>
  {skill.toLowerCase() === "react" ? (
    <p>Excellent choice! React is in high demand.</p>
  ) : (
    <p>Great! Keep sharpening your skills.</p>
  )}
</Result>
)}

</Container>

);
}

export default StyledEmployeeSkillTracker;
