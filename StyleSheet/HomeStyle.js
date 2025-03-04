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
    width: width * 0.12, // 12% of screen width
    height: width * 0.12,
    borderRadius: width * 0.06,
  },

  searchBar: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  settingsIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },

  postContainer: {
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fceed3",
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    marginRight: 10,
  },

  userName: {
    fontWeight: "bold",
    fontSize: width * 0.045,
  },

  residence: {
    fontSize: width * 0.035,
    color: "#777",
  },

  followText: {
    color: "blue",
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },

  postBox: {
    width: "90%",
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
  },

  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // Ensures proper aspect ratio
    borderRadius: 10,
    marginTop: 10,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#aa708b",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },

  navIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },

  homeIcon: {
    width: width * 0.12,
    height: width * 0.12,
    position: "absolute",
    top: -20,
    backgroundColor: "#c28e9e",
    padding: 10,
    borderRadius: width * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default homeStyles;
