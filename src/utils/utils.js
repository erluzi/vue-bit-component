function getStyle(el, prop) {
    return getComputedStyle(el)[prop]
}

export {
    getStyle
}