/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, Text} from 'react-native';

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
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          padding: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="red"
          />
        }>
        <Text style={{textAlign: 'center'}}>
          {
            '^ Pull to refresh ^\n\nThen, comment out tintColor, reload app, and try again'
          }
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
