import React from 'react'
import withTheme from '../../theme/Theme'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

function NotFound({ theme }) {
    const navigate = useNavigate()

    return (
        <div style={ { backgroundColor: theme.textSecondary } } className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
                <Button label="Go back home" onClick={ () => navigate('/admin/hospitals/approved') } />
            </div>
        </div>
    )
}

export default withTheme(NotFound)
