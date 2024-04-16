import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Listearticle = () => {
  const [articles, setArticles] = useState([])


  // useEffect = (() => {
  //   loadArticles()
  // },[])
  
  const loadArticles = async () => {
    
    try {
      const res = await axios.get('http://localhost:3001/api/articles');/************************************************ */
      setArticles(res.data)//on va le remplir
      console.log(res.data)
    } catch (error) {
      
      console.log("Error: "+error)
    }
  }
  //méthode handleDelete de la bouton Delete
  const handleDelete=async(id)=>{
    try {
      if(window.confirm("Vous etes Sur de supprimer vos articles")){
      await axios.delete(`http://localhost:3001/api/articles/${id}`)
      loadArticles()
      }
    } catch (error) {
      console.log(error)
    }
  }
 

  useEffect( () => {
    loadArticles()
  }, [])
  return (
    <div>
      Liste des articles
      <div className='container'>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="btn btn-outline-info" to="/InsertArt"><i class="fa-solid fa-plus"></i></Link>
        </div>
      </nav>
      
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Marque</th>
          <th>Quantite</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((art,index)=>
        <tr key={index}>
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.marque}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td>
            <Link className='btn btn-outline-info btn-sm'
            to={`/ViewArt/${art._id}`}>
              <i class="fa-regular fa-eye"></i>
             </Link>
             &nbsp;
             <Link className='btn btn-outline-warning btn-sm'
            to={`/EditArt/${art._id}`}>
              <i class ="fa-solid fa-pen-to-square"></i> 
              </Link>
             &nbsp;
        
          <Button variant="danger" onClick={()=>handleDelete(art._id)}><i class="fa-solid fa-trash"></i>      </Button>
          </td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
    </div>//<div du container>
    
  )
}

export default Listearticle
