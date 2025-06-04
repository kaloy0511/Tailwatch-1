import { StyleSheet } from "react-native";

const SettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCE8D5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4B1E35",
  },
  settingOption: {
    width: "90%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B1E35",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    backgroundColor: "#E08989",
    borderRadius: 10,
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SettingStyles;
