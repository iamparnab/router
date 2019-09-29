import React from 'react'
import { changePath } from '../utils'
import { RouterProps } from '../models'

const Router = (props: RouterProps) => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

    const pathChangeHandler = () => {
        setCurrentPath(window.location.pathname)
    }

    React.useEffect(() => {
        window.addEventListener('popstate', pathChangeHandler)
        return () => window.removeEventListener('popstate', pathChangeHandler)
    }, [currentPath])

    return props.render(changePath)
}

export default Router

