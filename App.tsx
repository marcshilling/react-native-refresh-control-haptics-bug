/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        style={{flex: 1}}
        data={[1, 2, 3, 4, 5]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="red"
          />
        }
        renderItem={() => (
          <View
            style={{height: 40, marginBottom: 5, backgroundColor: 'gray'}}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default App;
