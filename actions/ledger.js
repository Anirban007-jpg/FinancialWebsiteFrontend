
import fetch from 'isomorphic-fetch';

export const createLedger = (ledger, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/createLedger`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(ledger)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const displayLedger = () => {
    // console.log("isplay");
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/displayLedgers`, {
        method: 'GET',
    })
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const displayDebtors = () => {
    // console.log("isplay");
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/displayDebtors`, {
        method: 'GET',
    })
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
};


export const displayCreditors = () => {
    // console.log("isplay");
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/displayCreditors`, {
        method: 'GET',
    })
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
};
