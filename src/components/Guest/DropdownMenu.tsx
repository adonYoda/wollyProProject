import React from "react";
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface Props {
anchorRef: any
open: boolean
setOpen: (value: boolean) => void
}



const DropdownMenu: React.FC<Props> = ({
  anchorRef,
  open,
  setOpen

}) => {
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
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
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', display: "flex"},
      }}
      margin = "normal"
      padding= "2em"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World"
          value = {email}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> 
        </div>
        </Box>
               
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
  );
};

export default DropdownMenu;
