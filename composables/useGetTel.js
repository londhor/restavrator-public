export default (str) => `tel:${str.replace(/\D+/g,'').padStart(12, '380')}`