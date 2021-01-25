import React from 'react'
import NavBar from '../NavBar/NavBar';

export default function Layout({children}) {
    return (
        <div className="layout">
            <NavBar />
            <main className="content">
                {children}
            </main>
        </div>
    )
}
