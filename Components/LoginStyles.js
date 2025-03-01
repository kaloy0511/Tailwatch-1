import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E9C1", // Light cream color from UI
  },

  // Top Bar
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#88506B", // Dark purple
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  navLinks: {
    flexDirection: "row",
    gap: 15,
  },
  navText: {
    color: "#fff",
    fontWeight: "bold",
  },
  settingsIcon: {
    color: "#fff",
  },

  // Search Bar
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 5,
  },

  // Community Feed
  feedContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userResidence: {
    fontSize: 12,
    color: "#666",
  },
  followText: {
    color: "#1877F2",
    fontWeight: "bold",
  },
  postContent: {
    backgroundColor: "#D3D3D3",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  postText: {
    color: "#666",
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#88506B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    padding: 10,
  },
  homeButton: {
    backgroundColor: "#E5B4A5",
    padding: 15,
    borderRadius: 50,
  },
  profileIcon: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  profilePicSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default styles;
