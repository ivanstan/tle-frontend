import React from "react";
import { HideOnScroll } from "./HideOnScroll";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export function Navigation(props: any) {
  return (
    <HideOnScroll {...props}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Button href={'#/'}>
            <Typography variant="h6">
              TLE API
            </Typography>
          </Button>

          <Button href={'#/'}>
            Index
          </Button>
          <Button href={'#/browse'}>
            Browse
          </Button>
          <Button href={'#docs'}>
            Documentation
          </Button>
          <Button href={'#health'}>
            Health
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
