import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ReportScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    alignItems: "center",
    padding: width * 0.05,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: width * 0.03,
    backgroundColor: "#aa708b",
    paddingHorizontal: width * 0.05,
  },

  backButton: {
    padding: width * 0.02,
    backgroundColor: "#fff",
    borderRadius: width * 0.02,
  },

  backButtonText: {
    fontSize: width * 0.04,
    color: "#aa708b",
    fontWeight: "bold",
  },

  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginVertical: width * 0.05,
    color: "#333",
  },

  imageContainer: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.04,
    marginBottom: width * 0.05,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: width * 0.04,
  },

  imagePlaceholder: {
    color: "#555",
    textAlign: "center",
    fontSize: width * 0.04,
  },

  input: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: width * 0.02,
    padding: width * 0.04,
    fontSize: width * 0.04,
    marginBottom: width * 0.04,
    minHeight: height * 0.15,
    textAlignVertical: "top",
  },

  submitButton: {
    backgroundColor: "#aa708b",
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.1,
    borderRadius: width * 0.03,
  },

  submitButtonText: {
    color: "white",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
});

export default ReportScreenStyles;
