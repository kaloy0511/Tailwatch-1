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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#4B1E35",
  },
  imageContainer: {
    marginTop: 10,
    width: 200,
    height: 350,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  imagePlaceholder: {
    color: "#555",
    textAlign: "center",
    fontSize: 12,
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
    minHeight: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#E08989",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
