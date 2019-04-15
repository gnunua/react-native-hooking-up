import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={info => {
      return (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      );
    }}
  />
);

export default PlaceList;

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
