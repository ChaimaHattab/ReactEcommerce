import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Listarticlecard = () => {
const [articles,setArticle]=useState([])
useEffect(()=>{
loadarticle()
},[])

const loadarticle= async()=>{
    try {
        await axios.get("http://localhost:3001/api/articles")
        .then(res=>{
            setArticle(res.data)
        })
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className="container">
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    {articles.map((art,index)=>
    <Card sx={{ maxWidth: 'auto',margin:1 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={art.imageart}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {art.reference}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ( {art.designation.substring(0,20)})
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prix : {art.prix} DT
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={art.qtestock<=1}
variant="contained" color="secondary" size="large">
    {art.qtestock<=1? "OUT OF SOLD": "Add to cart"}

</Button>
      </CardActions>
    </Card>
  )}
  </div>
  </div>
)}

export default Listarticlecard

