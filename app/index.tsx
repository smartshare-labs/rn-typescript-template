import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';
import Logger, { LogLevel }  from './src/services/Logger';

// import { YellowBox } from 'react-native';
// console.disableYellowBox = true;
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import App from './src/components/App';

class ExampleApp extends Component {

  componentWillMount() {

    Logger.CreateLogger({
      logzToken: 'UGaqOFupBadZZCYdBoFTwKTrSKRcUaTa',  // <-- Put Logz.io (looks like an MD5 hash) here
      toConsole: __DEV__,
      level: LogLevel.Info, // TODO: change this back to info
      sendIntervalMs: 60000,
      logzType: `Smartshare-${Platform.OS}`,
      bufferSize: 1000,
      deviceId: '',
      bundleId: '',
      logAppState: true,
      logNetState: true,
      logRNErrors: true,
    });

    Logger.info(`Smartshare - Starting up`);

  }

  render() {
    return (
        <App />
    );
  }
}


AppRegistry.registerComponent('app', () => ExampleApp);