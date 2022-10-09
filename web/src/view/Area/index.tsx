import React, { useEffect, useState } from "react";
import './index.scss'
import Header from "../../components/Header";
import CreateAreaModal from "./CreateAreaModal";

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

    useEffect(() => {
        console.log("fetching areas");
        //todo fetch areas
    }, [])

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