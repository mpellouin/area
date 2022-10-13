import React, { useEffect, useState } from "react";
import './index.scss'
import Header from "../../components/Header";
import CreateAreaModal from "./CreateAreaModal";
import { useNavigate } from "react-router-dom";

const buttons = [
  {
      name: "HOME",
      path: "/",
      isButton: false
  },
  {
      name: "LOG OUT",
      path: "/",
      isButton: true
  }
]

const AreaPage = () => {
    const [areas, setAreas] = useState([])
    const [isCreateMode , setIsCreateMode] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            return;
        } else {
            // get accessToken urlParams and save it to localStorage
            // if no accessToken redirect to login
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const accessToken = urlParams.get('token');
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
            } else {
                navigate('/login');
            }
        }
    }, [navigate])

  return (
    <div className="areaPage">
        <Header buttons={buttons}/>
        {isCreateMode && 
            <CreateAreaModal />}
        <div className="areaPageContent">
            <div className="areaPageTitle">Areas list</div>
            <div className="areaPageList">
                {areas.map((area : any) =>
                    <div className="areaPageItem">
                        <div className="areaPageItemName">{area.name}</div>
                        <div className="areaPageItemDescription">{area.description}</div>
                    </div>
                )}
            </div>
            <div className="areaPageCreate">
                <button className="areaPageCreateButton" onClick={() => setIsCreateMode(true)}>Create new area</button>
            </div>
        </div>
    </div>
  );
}

export default AreaPage;