export const loadGoogleAPI = () => {
    if (document.querySelector('script[src="https://apis.google.com/js/api.js"]')) {
      return Promise.resolve();
    }
  
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  };