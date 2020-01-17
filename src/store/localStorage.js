export const loadState = () => {
    try {
        const localStorageState = localStorage.getItem('list')
        if (localStorageState === null) {
            return undefined
        }

        return JSON.parse(localStorageState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem('list', localStorageState)
    } catch (e) {
        console.log(e)
    }
}