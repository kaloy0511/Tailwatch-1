import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7c3c7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    position: "relative", // Allows positioning of the dog icon behind the title
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#3a4e66",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 1, // Ensures the title is above the dog icon
  },
  dogIcon: {
    position: "absolute",
    width: 100,
    height: 100,
    top: -20, // Adjusts the position of the icon
    zIndex: 0, // Ensures the icon is behind the title
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: "#4a4a4a",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#3a4e66",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 10,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: "#3a4e66",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#4a4a4a",
    fontWeight: "bold",
    marginBottom: 10,
  },
  petSignUpButton: {
    backgroundColor: "#f4b844",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  petSignUpText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orLoginWith: {
    fontSize: 14,
    color: "#4a4a4a",
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;