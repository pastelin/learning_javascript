import { findInvoiceById } from './data/invoices';

// Ejemplo usando metodos por referencia
findInvoiceById(3).then(console.log).catch(console.error);
