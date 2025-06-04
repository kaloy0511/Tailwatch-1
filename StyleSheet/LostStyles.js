import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2e4057",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    fontSize: 14,
    color: "#000",
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e4057",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#d9d9d9",
  },
  info: {
    flex: 1,
  },
  infoButton: {
    backgroundColor: "#2e4057",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  infoButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#2e4057",
  },
  uploadContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e4057",
    marginBottom: 10,
  },
  uploadInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    backgroundColor: "#2e4057",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;