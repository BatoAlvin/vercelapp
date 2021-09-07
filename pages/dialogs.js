import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ViewListIcon from "@material-ui/icons/ViewList";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GroupIcon from "@material-ui/icons/Group";
import ReorderIcon from "@material-ui/icons/Reorder";
import { CssBaseline } from "@material-ui/core";
import Link from "next/link";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

{/* <CssBaseline />
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
      </Drawer> */}

      <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Paper>
              <Box pt={1} textAlign="left" fontWeight='bold'>
                
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <label>Title</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="text"
            fullWidth
          />

<label>Question</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            fullWidth
          />

<label>Description</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
          />

<label>Status</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Status"
            type="text"
            fullWidth
          />

<label>Due date</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
