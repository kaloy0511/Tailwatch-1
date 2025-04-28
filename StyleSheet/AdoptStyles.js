import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6e4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2e4057",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 10,
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e4057",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  petCard: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    alignItems: "center",
  },
  petImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    marginBottom: 10,
  },
  petInfo: {
    width: "100%",
    marginBottom: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e4057",
    marginBottom: 5,
  },
  petDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  reviewButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#fdb827",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2e4057",
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;