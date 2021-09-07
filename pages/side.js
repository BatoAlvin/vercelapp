import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GroupIcon from "@material-ui/icons/Group";
import ReorderIcon from "@material-ui/icons/Reorder";
import { CssBaseline } from "@material-ui/core";
import Link from "next/link";
import { Container, Grid, Paper, Box, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    overflow: "auto",
    backgroundColor: "#D9E0E8",
    height: "90vh",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <ListItem button>
              <Link href="/">
                <ListItemIcon>
                  <DashboardIcon style={{ fill: "#1C64A2" }} />
                </ListItemIcon>
              </Link>

              <Link href="/">
                <ListItemText primary="Dashboard" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon style={{ fill: "#1C64A2" }} />
              </ListItemIcon>
              <ListItemText primary="My Class" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReorderIcon style={{ fill: "#A82E2E" }} />
              </ListItemIcon>
              <ListItemText primary="Modules" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon style={{ fill: "#1C64A2" }} />
              </ListItemIcon>
              <ListItemText primary="Facilitors" />
            </ListItem>
            <ListItem button>
              <Link href="/messages">
                <ListItemIcon>
                  <ChatBubbleOutlineIcon style={{ fill: "#10BC65" }} />
                </ListItemIcon>
              </Link>
              <Link href="/messages">
                <ListItemText primary="Slack" />
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ViewListIcon style={{ fill: "#ED7646" }} />
              </ListItemIcon>
              <ListItemText primary="Curriculum" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>

      <Grid container spacing={3}>
        <Grid item md="6" xs="6">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            
              <Box pt={5}>Classwork</Box>
            
          </Box>
        </Grid>

        <Grid item md="6" xs="6">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            
              <Box pt={5} pl={5} textAlign="center">
                People
              </Box>
            
          </Box>
        </Grid>

        

        <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            
              <Box textAlign="left" fontWeight='bold'>
                Facilitors
              </Box>
          
          </Box>
        </Grid>

        <Grid item md='12' xs='12'>
        <Paper>
        <Divider variant="middle"/>
        </Paper>
        </Grid>
       

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
        
              <Box>
                <Avatar src="/Bleach.jpg" />
              </Box>
            
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
          
              <Box textAlign="center">Mathew</Box>
          
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
        
              <Box textAlign="center">
                <ChatBubbleOutlineIcon style={{ fill: "#10BC65" }} />
              </Box>
            
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
