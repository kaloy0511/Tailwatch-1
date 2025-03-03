import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#aa708b",
    justifyContent: "space-between",
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  searchBar: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  settingsIcon: {
    width: 30,
    height: 30,
  },

  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fceed3",
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  userName: {
    fontWeight: "bold",
  },

  residence: {
    fontSize: 12,
    color: "#777",
  },

  followText: {
    color: "blue",
    marginLeft: "auto",
    fontWeight: "bold",
  },

  postBox: {
    padding: 20,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#aa708b",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },

  navIcon: {
    width: 30,
    height: 30,
  },

  homeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: -25,
    backgroundColor: "#c28e9e",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default homeStyles;
