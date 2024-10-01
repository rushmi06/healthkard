export const formatNumber = (number) => {
    if (!number) return '';
    let formattedNumber = number.trim();
    if (formattedNumber.length !== 10) {
        formattedNumber = `+${formattedNumber}`;
    } else {
        formattedNumber = `+91${formattedNumber}`;
    }
    formattedNumber = formattedNumber.slice(0, 3) + ' ' + formattedNumber.slice(3, 8) + ' ' + formattedNumber.slice(8);
    return formattedNumber;
};


export const formateAddress = (address) => {
    if (!address) return '';

    const parts = [
        address.street,
        address.landmark,
        address.city,
        address.state,
        address.country,
        address.code
    ];

    // Filter out any undefined or empty parts
    const filteredParts = parts.filter(part => part && part.trim() !== '');

    // Join the parts with commas and spaces
    return filteredParts.join(', ');
}
