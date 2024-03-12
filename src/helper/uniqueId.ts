const uniqueId = (): string => {
    return Math.floor(Math.random() * Date.now()).toString(16);
}

export {
    uniqueId
}
