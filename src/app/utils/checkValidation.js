export const checkValidation = (user) => {
    const currentDate = new Date();
    const expireDate = new Date(user.expireDate);
    return expireDate > currentDate;
}
