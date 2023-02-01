function largest(n, array) {
    let topElements = [];
    array.sort((a,b) => a-b);
    for(let i = 0; i < n; i++){
        topElements.unshift(array.pop());
    }
    return topElements;
}