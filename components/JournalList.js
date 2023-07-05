import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';

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
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  listContent: {
    paddingTop: 10,
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