import Panel from '../../../../components/Panel';
import withTheme from '../../../../theme/Theme'
import { useParams } from 'react-router-dom'
import { agentDetailsPanel } from '../constants'
import { useEffect, useState } from 'react';
import httpService from '../../../../api/httpService';
import GeneralDetails from './GeneralDetails';
import UsersAdded from './UsersAdded';
import HospitalsAdded from './HospitalsAdded';
import EditDetails from './EditDetails';

function AgentDetails({ theme }) {
    const { agentId } = useParams();
    const [agent, setAgent] = useState(null);
    const [selectedTab, setSelectedTab] = useState(agentDetailsPanel[0]);
    useEffect(() => {
        const getAgentDetails = async () => {
            try {
                if (!agentId) return;
                const agent = await httpService.get(`agents/${agentId}`);
                setAgent(agent);
            } catch (error) {
                console.log(error);
            }
        }
        getAgentDetails();
    }, [agentId]);
    if (!agent) return <div>Loading...</div>;
    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            <div style={ { backgroundColor: theme.secondary } } className='flex flex-col flex-grow rounded overflow-y-scroll h-full p-4'>
                <Panel header={ agentDetailsPanel } body={ selectedTab === agentDetailsPanel[0]
                    ? <GeneralDetails agent={ agent } />
                    : selectedTab === agentDetailsPanel[1]
                        ? <UsersAdded users={ agent?.usersAdded } />
                        : selectedTab === agentDetailsPanel[2]
                            ? <HospitalsAdded hospitals={ agent?.hospitalsAdded } />
                            : <EditDetails agent={ agent } /> }
                    selectedTab={ selectedTab } onSelect={ setSelectedTab } />
            </div>
        </div>
    )
}

export default withTheme(AgentDetails);