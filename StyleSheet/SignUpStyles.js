import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e4057",
    marginBottom: 5,
  },
  accountCreationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e4057",
    marginBottom: 20,
  },
  signUpBox: {
    width: "85%",
    maxWidth: 400,
    backgroundColor: "#eaf4f4",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#f0f0f0",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },
  createAccountButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2e4057",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  createAccountButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  petSignUpButton: {
    backgroundColor: "#fdb827",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  petSignUpText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;