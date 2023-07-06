import React from 'react'
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

const JournalList = ({ entries }) => {
  const renderEntry = ({ item }) => {
    return <Text style={styles.entry}>{item}</Text>
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={renderEntry}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      >
        {item => <Text style={styles.entry}>{item}</Text>}
      </FlatList>
    </View>
  );
};

export default JournalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 30 : 40,
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
    marginLeft: Platform.OS === 'ios' ? 20 : 2,
    marginRight: Platform.OS === 'ios' ? 20 : 2,
  },
  listContent: {
    padding: 100,
  },
  entry: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
});