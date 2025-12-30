import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const PaymentsContext = createContext(null);

export function PaymentsProvider({ children }) {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('payments'));
        if (stored) setPayments(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem('payments', JSON.stringify(payments));
    }, [payments]);

    const addPayment = (data) =>
        setPayments((p) => [...p, { ...data, id: uuid() }]);

    const deletePayment = (id) =>
        setPayments((p) => p.filter((x) => x.id !== id));

    return (
        <PaymentsContext.Provider value={{ payments, addPayment, deletePayment }}>
            {children}
        </PaymentsContext.Provider>
    );
}

export const usePayments = () => useContext(PaymentsContext);
