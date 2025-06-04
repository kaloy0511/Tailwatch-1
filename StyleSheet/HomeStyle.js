import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#4B1E35",
    fontWeight: "bold",
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  createPostContainer: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  postComposer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  composerPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  createPostInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  imageUploadLabel: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#E08989",
    justifyContent: "center",
    alignItems: "center",
  },
  postButton: {
    backgroundColor: "#E08989",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  composerPreview: {
    alignItems: "center",
    marginTop: 10,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  postContainer: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    padding: 10,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B1E35",
  },
  userResidence: {
    fontSize: 14,
    color: "#999",
  },
  followText: {
    marginLeft: "auto",
    fontSize: 14,
    color: "#E08989",
    fontWeight: "bold",
  },
  postBox: {
    marginTop: 10,
  },
  postText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
});