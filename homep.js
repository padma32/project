import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function ButtonAppBar() {
    let n=useNavigate
  return (
    <Box sx={{ flexGrow: 1 }} class="L" >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My AIRLINES
          </Typography>
          
          <div class="loginbutton">
            <Button variant="contained" href="login">
              Login
            </Button>
            </div>
       
          <div class="signupbutton">
            <Button variant="contained" href="signup">SignUp</Button>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;
