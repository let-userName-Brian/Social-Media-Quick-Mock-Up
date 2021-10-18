import React from "react";
import { Switch, Link, useRouteMatch, useParams, Route } from "react-router-dom";
import Card from '@mui/material/Card';
import { UserProfiles } from "./data";



export default function Profiles() {
    let { url, path } = useRouteMatch();
  
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Your Contacts</h1>

        <ul>
          <li>
            <Link to={`${url}/Benjamin-Button`}>
            <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">Benjamin Button</button>
            </Link>
          </li>
          <li>
            <Link to={`${url}/Henry-Data`}>
              <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">Henry Data</button>
            </Link>
          </li>
          <li>
            <Link to={`${url}/Nested-Data-Man`}>
            <button className="rounded-lg bg-indigo-400 px-4 py-2 mt-4 text-white font-bold hover:bg-indigo-500">Nested Data Man</button>
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${path}`} >
            <h3>Select a contact</h3>
          </Route>
          <Route path={`${path}/:nameId`}>
            <Details />
          </Route>
        </Switch>
      </div>
    );
  }

function Details() {
  let { nameId } = useParams();
  return(
    <div>
      <h3>{nameId}</h3>
      <h2>{}</h2>
    </div>
  )
}
  


import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


 //here are your profiles
export default function Details() {
    let { name } = useParams();
  
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
          component="img"
          height="300"
          image='https://cdna.artstation.com/p/assets/images/images/021/935/626/large/irina-nikiforova-purple.jpg?1573507084'
          alt="your pic"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          The main user 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          wow, much wow indeed. You are amazing, much WOW. 
          </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">Make great</Button>
          <Button size="small">Wow button</Button>
      </CardActions>
      </Card>
    )
  }
