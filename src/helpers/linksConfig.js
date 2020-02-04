import Home from '../components/views/Home';
import TalentProcesses from '../components/views/TalentProcesses';
import MGPD from '../components/views/MGPD';

const linksConfig = [
    {
        path: '/',
        exact: true,
        label: 'Home',
        component: Home
    },
    {
        path: '/talent-processes',
        label: 'Talent Processes',
        component: TalentProcesses
    },
    {
        path: '/making-great-promotions-decisions',
        label: 'Making Great Promotions Decisions',
        component: MGPD
    }
];

export default linksConfig;