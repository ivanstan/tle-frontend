import React from "react";

export class GoogleAnalytics extends React.Component<any, any> {

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const { history } = this.props

    console.log(history);

    // @ts-ignore
    const gtag = window.gtag;

    if (history.action === 'POP' && typeof (gtag) === 'function') {
      gtag('config', 'G-M6WV4512EL', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
      });
    }
  }

  render() {
    return null;
  }
}
