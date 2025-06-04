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
    paddingHorizontal: 15, // Match HomeStyle header spacing
    paddingVertical: 15,
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
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
  settingsIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e4057",
    textAlign: "center",
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: "#666",
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 120,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    color: "#000",
    marginBottom: 20,
    textAlignVertical: "top",
  },
  submitButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#2e4057",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;