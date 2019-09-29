
export interface PathProps {
    url: string,
    render: () => JSX.Element
}

export interface RouterProps {
    render: (changePath: (pathName: string) => void) => JSX.Element
}
export interface RouterRenderProps {
    changePath: (pathName: string) => void
}

export interface ExtraProps {
    data: any
}
export type ChangePathType = (pathName: string) => void