// Save to local storage
export const saveToLocalStorage = (object) => {
    Object.keys(object).forEach(key => {
        localStorage.setItem(key, object[key]);
    });
}

export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const clearLocalStorage = () => {
    localStorage.clear();
}

