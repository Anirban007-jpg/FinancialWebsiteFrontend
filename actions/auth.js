
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const individualSignup = data => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/registerasindividual`, {
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

export const companySignup = data => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/register`, {
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

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('loggedinuser');
    next();

    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};
// get cookie
export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }else {
        return false;
    }
};
// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('loggedinuser', data.individual);
    next();
};


// autheticate user by pass data to cookie and localstorage
export const authenticateforcompanyuser = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('loggedinuser', data.company);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('loggedinuser')) {
                return JSON.parse(localStorage.getItem('loggedinuser'));
            } else {
                return false;
            }
        }
    }else{
        return false;
    }
};



// export const isAuthforCompanyuser = () => {
//     if (process.browser) {
//         const cookieChecked = getCookie('token');
//         if (cookieChecked) {
//             if (localStorage.getItem('loggedincompanyuser')) {
//                 return JSON.parse(localStorage.getItem('loggedincompanyuser'));
//             } else {
//                 return false;
//             }
//         }
//     }else{
//         return false;
//     }
// };

export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('loggedinuser')) {
            let auth = JSON.parse(localStorage.getItem('loggedinuser'));
            auth = user;
            localStorage.setItem('loggedinuser', JSON.stringify(auth));
            next();
        }
    }
};

export const forgotPassword = ({Email}) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/forgotpassword`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Email})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProfile = token => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/individual/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const forgotPasswordforcompanyusers = ({Company_email}) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/forgotpasswordforCompany`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Company_email})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = resetInfo => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/reset-password`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signin = info => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const companysignin = info => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/companylogin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (token, individual) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/updateIndividualProfile`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body:  individual
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};