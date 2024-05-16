
import fetch from 'isomorphic-fetch';

export const createDebtor = (debtor, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/createDebtor`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(debtor)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const UpdateDebtorLedgerBalance = (Account_Name, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/updateDebtorAccount`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify({Account_Name})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};