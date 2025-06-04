import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B1E35",
    marginBottom: 20,
    textAlign: "center",
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4B9CD3",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  sendButton: {
    padding: 10,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4B9CD3",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#2e4057",
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
});