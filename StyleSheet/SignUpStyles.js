import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fcefd7", // Light beige background
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
  },
  appTitle: {
    fontFamily: "Fredoka One",
    fontSize: 32,
    color: "#4a6a85",
    marginBottom: 16,
  },
  accountCreationTitle: {
    fontFamily: "Fredoka One",
    fontSize: 24,
    color: "#4a6a85",
    marginBottom: 16,
  },
  signUpBox: {
    backgroundColor: "#a9c3ca", // Light blue background
    borderRadius: 16,
    padding: 24,
    width: "100%",
  },
  input: {
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    color: "#4a6a85",
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Fredoka One",
  },
  dateInput: {
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    color: "#4a6a85",
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Fredoka One",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    backgroundColor: "#4a6a85", // Dark blue button
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  createAccountButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Fredoka One",
  },
});