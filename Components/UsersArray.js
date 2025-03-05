import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user) => {
  try {
    const users = await AsyncStorage.getItem("users");
    const usersArray = users ? JSON.parse(users) : [];

    usersArray.push(user);
    await AsyncStorage.setItem("users", JSON.stringify(usersArray));

    // Set the latest registered user as the current user (for login session)
    await AsyncStorage.setItem("currentUser", JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

export const getUsers = async () => {
  try {
    const users = await AsyncStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Error retrieving users:", error);
    return [];
  }
};

// Get currently logged-in user
export const getCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving current user:", error);
    return null;
  }
};
