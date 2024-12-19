export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  
  export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  export const formateInteger = (number) => {
    return number.toLocaleString('en-IN');
  };