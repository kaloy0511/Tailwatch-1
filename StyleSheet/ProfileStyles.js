import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
    alignItems: "center",
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#E08989",
    borderRadius: 10,
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#4B1E35",
  },
  profilePictureContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ddd",
  },
  profileEditIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 4,
  },
  gearIcon: {
    color: "#fff",
    fontSize: 14,
  },
  userId: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    color: "#4B1E35",
  },
  infoContainer: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B1E35",
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#E08989",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 20,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
