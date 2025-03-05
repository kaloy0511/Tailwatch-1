import { StyleSheet, Dimensions } from "react-native";

const SettingStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fceed3",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 30,
      color: "#6d4c41",
    },
    settingOption: {
      width: "90%",
      padding: 15,
      backgroundColor: "#dcdcdc",
      borderRadius: 10,
      marginBottom: 15,
      alignItems: "center",
    },
    settingText: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  export default SettingStyles;