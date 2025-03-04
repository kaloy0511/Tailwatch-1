import { StyleSheet, Dimensions } from "react-native";

const width = 375; // Standard mobile width
const height = 667; // Standard mobile height

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    width,
    height,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#aa708b",
    justifyContent: "space-between",
    width,
  },

  navLinks: {
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
    marginHorizontal: 5,
  },

  navText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 6,
  },

  logo: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  searchBarContainer: {
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
    marginVertical: 6,
  },

  searchBar: {
    width: "100%",
    padding: 5,
  },

  settingsIcon: {
    width: 26,
    height: 26,
  },

  postContainer: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fceed3",
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    paddingHorizontal: 10,
  },

  profileImage: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    marginRight: 6,
  },

  userName: {
    fontWeight: "bold",
    fontSize: 13,
  },

  residence: {
    fontSize: 11,
    color: "#777",
  },

  followText: {
    color: "blue",
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: 11,
  },

  postBox: {
    width: "90%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 7,
  },

  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 7,
    marginTop: 6,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#aa708b",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    alignItems: "center",
    width,
    position: "absolute",
    bottom: 0,
  },

  navIcon: {
    width: 26,
    height: 26,
  },

  homeIcon: {
    width: 38,
    height: 38,
    position: "absolute",
    top: -16,
    backgroundColor: "#c28e9e",
    padding: 6,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default homeStyles;