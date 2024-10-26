import Button from '../../../../../components/Button'
import withTheme from '../../../../../theme/Theme'

function Header({ title, description, theme }) {
    return (
        <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex gap-2 pb-2 px-4 py-2'>
            <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold'>{ title }</div>
                <div className='text-sm text-gray-500'>{ description }</div>
            </div>
            <Button label='Close' />
        </div>
    )
}

export default withTheme(Header)
