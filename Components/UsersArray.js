import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (user) => {
  try {
    const users = await AsyncStorage.getItem("users");
    const usersArray = users ? JSON.parse(users) : [];

    // Check if the user already exists and update their information
    const updatedUsers = usersArray.map((existingUser) =>
      existingUser.username === user.username ? user : existingUser
    );

    // If the user doesn't exist, add them
    const userExists = usersArray.some((existingUser) => existingUser.username === user.username);
    if (!userExists) {
      updatedUsers.push(user);
    }

    await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));

    // Set the updated user as the current user
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
    console.log("Current User:", user); // Debug log
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving current user:", error);
    return null;
  }
};
