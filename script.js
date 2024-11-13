const $ = document;

let userName = 'Amir';

function isLogin(user) {
    if (user.userName === 'Amir') {
        return true;
    } else {
        return false;
    };
};

const test = () => false;

const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
};
