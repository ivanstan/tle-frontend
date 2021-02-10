import React from "react";
import { HideOnScroll } from "./HideOnScroll";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export function Navigation(props: any) {
  return (
    <HideOnScroll {...props}>
      <AppBar position="static">
        <Toolbar>
          <Button href={'/'}>
            <Typography variant="h6">
              TLE API
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
