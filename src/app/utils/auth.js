export const isUserLoggedIn = () => {
    return localStorage.getItem('userToken') !== null;
}
