const splitRoutePath = (routePath: string): string[] => {
    const routeParts = routePath.split('/').filter((part) => part !== '')

    const routeArray: string[] = []
    let currentRoute = ''

    for (const part of routeParts) {
        currentRoute += `/${part}`
        routeArray.push(currentRoute)
    }

    return routeArray
}

export {
    splitRoutePath
}