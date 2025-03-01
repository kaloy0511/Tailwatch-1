import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3", // Background color from your previous style
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.3, // Keeping a subtle background effect
  },

  loginBox: {
    width: "85%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20, // Rounded input fields like the previous design
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },

  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },

  checkboxText: {
    fontSize: 14,
    color: "#000",
  },

  loginButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d79d99", // Soft pink from the previous style
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  bottomText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "bold",
    marginTop: 5,
  },

  // Signup and Forgot Password Buttons
  Signup: {
    backgroundColor: "#d79d99",
    paddingVertical: height * 0.015,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  // Bottom section with a gradient-like feel
  Frame3: {
    width: "100%",
    height: height * 0.18,
    backgroundColor: "#aa708b", // Purple accent from your old design
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },

  Frame3text: {
    fontWeight: "bold",
    fontSize: width * 0.045,
    color: "#fff",
    marginBottom: 10,
  },
  signupButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#d79d99",
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  
  bottomText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  
});

export default styles;
