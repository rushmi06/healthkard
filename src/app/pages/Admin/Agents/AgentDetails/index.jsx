import withTheme from '../../../../theme/Theme'
import { useParams } from 'react-router-dom'
function AgentDetails({ theme }) {
    const { agentId } = useParams();
    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            <div style={ { backgroundColor: theme.secondary } } className='flex flex-col flex-grow rounded overflow-y-scroll h-full p-4'>
                { agentId }
            </div>
        </div>
    )
}

export default withTheme(AgentDetails);