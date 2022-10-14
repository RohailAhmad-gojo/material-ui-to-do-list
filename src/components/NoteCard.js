import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


const useStyles = makeStyles({
   avatar:{
     backgroundColor: (note) => {
       if (note.category == 'work'){
          return yellow[700]
       }
       if (note.category == 'money'){
         return pink[500]
       }
       if (note.category == 'todos'){
         return blue[500]
       }
       return green[500]
     }
   }
})

export default function NoteCard({ note, handleDelete }) {
const  classes = useStyles(note)


  return (
    <div>
        <Card elecvation={1}>
            <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {note.category[0].toUppert}
              </Avatar>
            }
            action={ <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline/>
          </IconButton>
          }
          title={note.title}
          subheader={note.category}
            />
            <CardContent>
                <Typography variant= "body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
