import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useState } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Button, TextField } from '@material-ui/core'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  
 
  
  const handleSubmit=(e)=>{
      e.preventDefault()






      if (title) {
          console.log(title)
      }
      
      if (detail) {
          console.log(detail)
      }
  }

  return (
    <>
    
    <Grid container>
    <Grid item xs='12'>
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      
      <main className={classes.content}>
        <Toolbar />
      
      </main>

      <Grid container spacing={2}>
      <Grid xs='3' md='3' style={{textAlign:'center'}}>
      <Paper style={{backgroundColor:'cyan'}}>
</Paper>
</Grid>

<Grid xs='3' md='3' style={{textAlign:'center'}}>
      <Paper style={{backgroundColor:'cyan'}}>
<Typography style={{marginTop: '90PX'}}>
 Classwork
</Typography>
</Paper>
</Grid>

<Grid xs='6' md='6' style={{textAlign:'center'}}>
<Paper style={{backgroundColor: 'burlywood'}}>
<Typography style={{marginTop: '90PX'}}>
 People
</Typography>
</Paper>
</Grid>

</Grid>



    </div>


    </Grid>

    <Grid item xs='12' md='12' style={{textAlign:'center'}}>
      <Paper style={{backgroundColor: 'aqua'}}>
      <Typography paragraph>
  Facilitators
</Typography>
</Paper>
      </Grid>


    </Grid>

    
   

    
 
</>
  );
}
