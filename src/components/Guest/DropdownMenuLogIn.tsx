import React, { useState } from "react";
import {
  Button,
  ClickAwayListener,
  Grid,
  Grow,
  Link,
  Paper,
  Popper,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { RegistrationPage } from "../Customer/RegistrationPage";
import { validate } from "email-validator";
import { getUser } from "../../actions/accountAction";
import { createToken } from "../../utils/constants";


interface Props {
  anchorRef: any;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DropdownMenu: React.FC<Props> = ({ anchorRef, open, setOpen }) => {
  const [email, setEmail] = useState("");
  // const [login, setLogin] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClickLoginIn = () => {
    dispatch(getUser(createToken(email, password)));
  };

  const handleClickRegistration = () => {
    console.log("registration");
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const emailValidate = (e: string) => {
    const email = e;
    if (validate(email)) {
      setEmail(email);
      console.log(email);
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                margin="normal"
                padding="2em"
                noValidate
                autoComplete="off"
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  item
                  xs="auto"
                >
                  <p>Sign In to your Account</p>

                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    onChange={(e) => emailValidate(e.target.value.trim())}
                    error={!emailIsValid}
                    // value={email}
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    // error={!passwordIsValid}
                    // value={password}
                  />

                  <Link href="#" color="inherit">
                    Forgot Password?
                  </Link>
                  <div style={{ margin: "2em" }}>
                    <Button
                      variant="contained"
                     onClick={() => handleClickLoginIn}
                    >
                      Sign In
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleClickRegistration}
                    >
                      Create Account
                    </Button>
                  </div>
                </Grid>
              </Box>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default DropdownMenu;
