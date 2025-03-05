import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4B1E35",
  },
  petCard: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B1E35",
  },
  petDetails: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#E08989",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 20,
      color: "#aa708b",
  },
});
