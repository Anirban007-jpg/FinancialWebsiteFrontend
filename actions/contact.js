import fetch from 'isomorphic-fetch';

export const emailContactForm = data => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/contact`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
