/** React Imports */
import React, { FC } from 'react'

/** Components */
import WorkspaceHeader from '../components/workspace-header'

/** Main Export Props */
type Props = {
    children: React.ReactNode
}

/** Main Export */
const layout: FC<Props> = ({ children }) => {
    return (
        <div style={{minHeight: '100vh', backgroundColor: '#E7F3EB'}}>
            <WorkspaceHeader />
            {children}
        </div>
    )
}

export default layout