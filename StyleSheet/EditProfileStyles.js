import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
    alignItems: "center",
    paddingTop: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#2e4057", // Updated to match the header color of other pages
    borderRadius: 5,
    marginBottom: 15,
  },
  backButtonText: {
    color: "#fff", // Updated to match the text color of other pages
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#4B1E35",
  },
  infoContainer: {
    marginTop: 10,
    width: "80%",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B1E35",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  editButton: {
    backgroundColor: "#E08989",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
