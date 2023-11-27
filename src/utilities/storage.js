// Set item in Local Storage
const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting item in Local Storage:", error);
  }
};

// Get item from Local Storage
const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error getting item from Local Storage:", error);
    return null;
  }
};

// Delete item from Local Storage
const deleteLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting item from Local Storage:", error);
  }
};

export { getLocalStorageItem, setLocalStorageItem, deleteLocalStorageItem };
