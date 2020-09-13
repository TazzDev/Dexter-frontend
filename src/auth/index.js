import { API } from '../config';

export const addLiveRoom = room => {
    return fetch(`${API}/livestream`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(room)
    })
        .then(response => response.json())
        .then(resjson => {return resjson})
        .catch(err => console.log(err))

}

//function to return all the current live rooms
export const getLiveRooms = () => {
    return fetch(`${API}/livestream/find`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(resjson => {return resjson})
        .catch(err => console.log(err))

}

export const deleteLiveRoom = streamlink => {
    console.log(streamlink)
    return fetch(`${API}/livestream/findstreamlink?streamlink=${streamlink}`, {
        method: 'DELETE',
        redirect: 'follow'
        })
        .then(response => response.json())
        .then(resjson => {return resjson})
        .catch(err => console.log(err))

}

// fetching the API for signup and exporting to Signup.js
export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        //Get data here
        .catch(err => {
            console.log(err);
        });
};

//Fetching the API for signin and exporting it to Signin.js
export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

//Grabbing the JWT and storing it to the local storage and exporting the function
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
};

//Deleting the JWT from local storage when the user hits signout
export const signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};