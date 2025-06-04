import { StyleSheet } from "react-native";

const NotificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8D5",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4B1E35",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  notificationBox: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#E08989",
    borderRadius: 8,
    alignItems: "center",
    width: "50%",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NotificationStyles;
