import { StyleSheet } from "react-native";

const NotificationStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fceed3",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6d4c41",
    marginBottom: 20,
  },
  listContainer: {
    width: "100%",
  },
  notificationBox: {
    width: "100%",
    padding: 15,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#aa708b",
    borderRadius: 8,
    alignItems: "center",
    width: "50%",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NotificationStyles;
