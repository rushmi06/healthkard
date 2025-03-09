export const isUserLoggedIn = () => {
    return localStorage.getItem('userToken') !== null;
}

export const isHospitalLoggedIn = () => {
    return localStorage.getItem('hospitalToken') !== null;
}
