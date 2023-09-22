function fetchUrl(url) {
    console.log(`fetching ${url}...`, this.firstName);
};

const user = {
    firstName: "Bob"
};

function debounce(callback, delay) {
    let timer = null;

    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

//
const fetching = debounce(fetchUrl.bind(user), 300); // отменяются предыдущие вызовы и выполняется только последний, по задержке

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);







