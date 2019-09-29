export const changePath = (pathName: string) => {
    window.history.pushState({}, '', pathName)
    window.dispatchEvent(new Event('popstate')) // Emulation of popstate event
}

