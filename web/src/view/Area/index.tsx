import React, {useEffect, useState} from 'react';
import './index.scss';
import Header from '../../components/Header';
import CreateAreaModal from './CreateAreaModal';
import {useNavigate} from 'react-router-dom';
import getAreas from '../../ApiFunctions/getAreas';
import {getUser} from '../../ApiFunctions/getUser';

const buttons = [
    {
        name: 'SERVICES',
        path: '/services',
        isButton: false,
    },
    {
        name: 'AREAS',
        path: '/areas',
        isButton: false,
    },
    {
        name: 'LOG OUT',
        path: '/',
        isButton: true,
    },
];

const AreaPage = () => {
    const [areas, setAreas] = useState([]);
    const [isCreateMode, setIsCreateMode] = useState(false);
    const [forceRefresh, setForceRefresh] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (forceRefresh === false) return;
        const fetchAreas = async () => {
            try {
                const res = await getAreas();
                return res;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAreas().then((res) => {
            setAreas(res);
        });
        setForceRefresh(false);
    }, [forceRefresh]);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser();
            return user[0];
        };
        fetchUser().then((user) => {
            setUser(user);
        });
    }, []);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const accessToken = urlParams.get('token');
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        } else {
            if (!localStorage.getItem('accessToken') && !localStorage.getItem('jwt')) {
                console.log('back to login');
                navigate('/login');
            }
        }
    }, [navigate]);

    return (
        <div className="areaPage">
            <Header buttons={buttons} />
            {isCreateMode && <CreateAreaModal setIsOpened={setIsCreateMode} setForceRefresh={setForceRefresh} user={user} />}
            <div className="areaPageContent">
                <div className="areaPageTitle">Areas list</div>
                <div className="areaPageList">
                    {areas.map((area: any, i: number) => (
                        <div key={i} className="areaPageItem">
                            <div className="areaPageItemName">{area.name}</div>
                        </div>
                    ))}
                </div>
                <div className="areaPageCreate">
                    <button className="areaPageCreateButton" onClick={() => setIsCreateMode(true)}>
                        Create new area
                    </button>
                </div>
            </div>
            <br />
        </div>
    );
};

export default AreaPage;
