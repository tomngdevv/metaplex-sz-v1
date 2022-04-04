import { AppBar, Container, Grid } from '@material-ui/core';

const Navbar = () => {

  return (
    <AppBar position="static" style={{ backgroundColor: "#000" }}>
        <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        >
            <img src='smoking_zombie_logo.png' style={{width: "160px", margin: "20px 140px"}} alt="logo" />
        </Grid>
    </AppBar>
  );
};
export default Navbar;
