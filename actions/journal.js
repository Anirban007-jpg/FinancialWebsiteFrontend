import fetch from 'isomorphic-fetch';

export const stimulatejournal = (info, token) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/stimulatejournal`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(info)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};