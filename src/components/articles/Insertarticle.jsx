import axios from "axios";
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Insertarticle = () => {
 
const [reference,setReference]=useState("")
const [marque,setMarque]=useState("")
const [designation,setDesignation]=useState("")

const [prix,setPrix]=useState(0)
const [qtestock,setQtestock]=useState(0)
const [imageart,setImageart]=useState("")
const [scategorieID,setScategorieID]=useState("")
const [scategories,setScategories]=useState([])

const navigate=useNavigate()
//méthode pour récupérer la liste des sous catégories
const getscategorie=async()=>{
try {
  await axios.get("http://localhost:3001/api/scategories")
  .then(res=>{
    setScategories(res.data)
  })
} catch (error) {
  console.log(error)
}
}
useEffect(()=>{
getscategorie()
},[])
/**************************************** */
const handlenavigate=async(e)=>{
  e.preventDefault()
  navigate("/listart")
}
const handlesubmit=async(e)=>{
  e.preventDefault()
  const article={
    reference:reference,
    designation:designation,
    marque:marque,
    prix:prix,
    qtestock:qtestock,
    imageart:imageart,
    scategorieID:scategorieID,
  }
  console.log(article)
  try {
     await axios.post ("http://localhost:3001/api/articles",article)
     .then(res=>{
      navigate("/listart")
     })
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="container">

<div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
<h4 align="center">Ajout Article</h4>

    <div className='container'>
      <h1>Référence:{reference}</h1>
      <Form >
      <Row className="mb-2">
      <Form.Group as={Col} md="6" >
<Form.Label >Référence </Form.Label>
<Form.Control
required
type="text"
placeholder="Référence"
value={reference}
onChange={(e)=>setReference(e.target.value)}
/>
</Form.Group>

      <Form.Group as={Col} md="6">
<Form.Label>Désignation </Form.Label>
<Form.Control
required
type="text"
placeholder="Désignation"
value={designation}
onChange={(e)=>setDesignation(e.target.value)}
/>
</Form.Group>
</Row>

<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Marque</Form.Label>
<Form.Control
type="text"
required
placeholder="Marque"
value={marque}
onChange={(e)=>setMarque(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<Form.Control
type="text"
placeholder="Image"
value={imageart}
onChange={(e)=>setImageart(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Catégorie</Form.Label>
<Form.Select 
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}>
  <option>Sélectionner scategories</option>
{scategories.map((scat,index)=>
      <option value={scat._id}>{scat.nomscategorie}</option>
      // nomscategorie mil api:http://localhost:3001/api/scategories
      )}
    </Form.Select>
</Form.Group>
</Row>

<Row className="mb-2">
  
  <div className="text-center p-1" >
<Button     as={Col} md="3" onClick={(e)=>handlesubmit(e)} variant="outline-success btn-sm">Enregistrer</Button>

<Button as={Col} md="3" onClick={(e)=>handlenavigate(e)} variant="outline-warning btn-sm">Annuler</Button>
      </div>  
</Row>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default Insertarticle
