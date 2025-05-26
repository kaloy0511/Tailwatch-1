import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7c3c7",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerImagePlaceholder: {
    width: 150,
    height: 80,
    backgroundColor: "#ccc", // Placeholder background color
    borderRadius: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#3a4e66",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonIcon: {
    fontSize: 24,
    color: "#3a4e66",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#3a4e66",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4a4a4a",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 15,
    color: "#4a4a4a",
  },
  submitButton: {
    backgroundColor: "#3a4e66",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;