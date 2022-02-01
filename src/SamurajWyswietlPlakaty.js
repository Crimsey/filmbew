import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from "./static/images/galeria.jpg";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{background: 'black', color: 'white', border: 'solid 1px black'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="zwiastuny"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wyświetl plakaty
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{background: 'black', color: 'white', fontWeight: 'bold', fontSize: '16px'}}>
          PRZEJDŹ DO SEKCJI 
        </Button>
      </CardActions>
    </Card>
  );
}
