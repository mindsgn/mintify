import { useWalletConnect } from '@walletconnect/react-native-dapp';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  // eslint-disable-next-line react-native/no-color-literals
  white: { backgroundColor: 'white' },
});

export default function Home(): JSX.Element {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);
  
  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}>
      {!connector.connected && (
        <TouchableOpacity onPress={connectWallet}>
          <Text>Connect a Wallet</Text>
        </TouchableOpacity>
      )}
      {!!connector.connected && (
        <TouchableOpacity onPress={killSession}>
          <Text>Kill Session</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}