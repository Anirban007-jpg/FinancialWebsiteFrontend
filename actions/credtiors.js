import fetch from 'isomorphic-fetch';

export const createCreditor= (creditor, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/createCreditor`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(creditor)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const UpdateCreditorLedgerBalance = (Account_Name, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/updateCreditorAccount`, {
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