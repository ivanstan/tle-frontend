import React from "react";
import { RedocStandalone } from "redoc";

export class Docs extends React.Component {
  render() {
    return <>
      <RedocStandalone
        specUrl="https://tle.ivanstanojevic.me/api/tle.json"
        options={{
          nativeScrollbars: false,
          disableSearch: true,
          expandResponses: "200,201",
          theme: {
            colors: {
              success: { main: '#4aa564', },
              primary: { main: '#0b3d91' },
              error: { main: '#dd361c' },
              http: {
                get: '#4aa564',
              }
            },
            rightPanel: {
              backgroundColor: '#212121'
            },
          },
        }}
      />
    </>;
  }
}
