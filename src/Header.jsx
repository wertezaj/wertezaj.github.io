import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




function Header() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])


    return (
        <>
            <header className={darkMode ? 'dark' : ''}>
                <ul>
                    <li>
                        <a href="/">index</a>
                        <a href="species">species</a>
                        <button onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header