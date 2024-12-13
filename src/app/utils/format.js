export const formatNumber = (number) => {
    if (!number) return '';
    let formattedNumber = number.trim();
    formattedNumber = formattedNumber.replace(/\s/g, '');
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
        address.code,
        address.city,
        address.state,
        address.country,
    ];

    // Filter out any undefined or empty parts
    const filteredParts = parts.filter(part => part && part.trim() !== '');

    // Join the parts with commas and spaces
    return filteredParts.join(', ');
}

export const formatDate = (date) => {
    if (!date) return '';
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    // const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[dateObj.getMonth()];
    return `${day.toString().padStart(2, '0')} ${monthName} ${year}`;
}


export const formatCurrency = (amount) => {
    if (amount < 0 && !amount) return '';
    return `₹ ${amount.toLocaleString('en-IN')}/-`;
}

export const formateInteger = (amount) => {
    if (amount < 0 && !amount) return '';
    return `${amount.toLocaleString('en-IN')}`;
}

