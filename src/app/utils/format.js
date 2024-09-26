export const formatNumber = (number) => {
    let formattedNumber = number;
    if (number.length !== 10) {
        formattedNumber = `+${number}`;
    } else {
        formattedNumber = `+91${number}`;
    }
    formattedNumber = formattedNumber.slice(0, 3) + ' ' + formattedNumber.slice(3, 8) + ' ' + formattedNumber.slice(8);
    return formattedNumber;
};
