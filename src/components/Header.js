import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";

import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { CryptoState } from "../CryptoContext";

import { useNavigate } from 'react-router-dom';

import React from 'react'

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {

  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  console.log(currency)
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (

    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate(`/`)} 
          variant="h6"
          className={classes.title} > Crypto Universe</Typography>

                     
               <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>

        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header