async function add(a, b) {
    throw new Error('Something went wrong');
}

add(5, 5).then((d) => {
    console.log(d)
}).catch(() => { })