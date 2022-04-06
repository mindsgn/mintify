import {useWalletConnect} from '@walletconnect/react-native-dapp';
import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

export default function App(): JSX.Element {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  return (
    <View>
      <TouchableOpacity onPress={connectWallet}>
        <Text>Connect a Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}
