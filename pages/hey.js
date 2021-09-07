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
import { Grid, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ClippedDrawer from '../components/Sidebar/Sidebar';


const hello = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item md={6} xs={6} sm={6}>
          <Box>
            <Box  p={{ md: 5, xs: 7, sm: 3 }}>Classwork</Box>
          </Box>
        </Grid>

        <Grid item md={6} xs={6} sm={6}>
          <Box>
            <Box textAlign="center">
              People
            </Box>
          </Box>


        </Grid>

        
        <Grid item md={12} xs={12} sm={12}>
          <Box>
            <Box textAlign="center" bgcolor={{sm:'red'}}>
              Creed
            </Box>
          </Box>

          
        </Grid>

        {/* <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box pt={1} textAlign="left" fontWeight="bolder">
              Facilitors
            </Box>
          </Box>
        </Grid> */}

        {/* <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Divider variant="middle" />
          </Box>
        </Grid> */}

        {/* <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/Bleach.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">Andrew</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
              <Link
                href="https://oul-edu-learning.slack.com/archives/D014RT3HHLY"
                passHref={true}
                p={{ md: 5, xs: 7, sm: 3 }}
              >
                <ChatBubbleOutlineIcon
                  target="_blank"
                  style={{ fill: "#10BC65" }}
                ></ChatBubbleOutlineIcon>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/mk.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">Edna</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
              <Link
                href="https://oul-edu-learning.slack.com/archives/D02D5816EJ1"
                p={{ md: 5, xs: 7, sm: 3 }}
                passHref={true}
              >
                <ChatBubbleOutlineIcon
                  style={{ fill: "#10BC65" }}
                  target="_blank"
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box pt={1} textAlign="left" fontWeight="bold">
              Classmates
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/mk.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">John</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
            <Link href='' passHref={true}>
              <ChatBubbleOutlineIcon style={{ fill: "#10BC65" }} 
                    target="_blank"
              />
              </Link>
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
}

export default hello;