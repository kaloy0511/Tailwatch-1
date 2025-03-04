import { StyleSheet } from "react-native";

const ReportScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6ec",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6d4c41",
    marginTop: 60,
    marginBottom: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#d4a373",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  imagePlaceholder: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderColor: "#d4a373",
    borderWidth: 1,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#e76f51",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    width: "90%",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ReportScreenStyles;