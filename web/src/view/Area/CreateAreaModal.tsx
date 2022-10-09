import React, { useEffect, useState } from "react";
import './index.scss'

interface AreaParam {
    id: number,
    name: string,
    params: {
        [key: string]: string
    }[]
}

const actionsList : AreaParam[] = [{
    "id": 1,
    "name": "TWITTER - New tweet from @X",
    "params": [{
        "placeholder": "Twitter username to fetch",
        "name": "username"
    }],
}]

const reactionsList : AreaParam[] = [{
    "id": 1,
    "name": "GMAIL - Send X by Message to Y",
    "params": [{
        "placeholder": "Subject of the mail",
        "name": "subject"
    }, {
        "placeholder": "Contents of the mail",
        "name": "content"
    }, {
        "placeholder": "Mail address to send to",
        "name": "to"
    }]
}]

const CreateAreaModal = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [actionId, setActionId] = useState(0);
    const [reactionId, setReactionId] = useState(0);
    const [actionParams, setActionParams] = useState<{[key: string]: string}>({});
    const [reactionParams, setReactionParams] = useState<{[key: string]: string}>({});

  return (
    <div className="areaModal">
        <div className="areaModalContent">
            <div className="areaModalTitle">Create new area</div>
            <div className="areaModalGeneral">
                <input className="areaModalGeneralName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="flexRow">
                <div className="areaModalActions">
                    <div className="areaModalActionsTitle">Actions</div>
                    <div className="areaModalActionsList">
                        <select className="areaModalActionsListSelect" value={actionId} onChange={(e) => setActionId(parseInt(e.target.value))}>
                            <option defaultChecked/>
                            {actionsList.map((action) =>
                                <option value={action.id}>{action.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="areaModalParams">
                        {actionsList.find((param : any) => param.id === actionId)?.params.map((param : any) =>
                            <input className="areaModalActionsParamsInput" placeholder={param.placeholder} value={actionParams[param.name]} onChange={(e) => setActionParams({...actionParams, [param.name]: e.target.value})}/>
                        )}
                    </div>
                </div>
                <div className="areaModalReactions">
                    <div className="areaModalReactionsTitle">Reactions</div>
                    <div className="areaModalReactionsList">
                        <select className="areaModalReactionsListSelect" value={reactionId} onChange={(e) => setReactionId(parseInt(e.target.value))}>
                            <option defaultChecked/>
                            {reactionsList.map((reaction) =>
                                <option value={reaction.id}>{reaction.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="areaModalParams">
                        {reactionsList.find((param : any) => param.id === reactionId)?.params.map((param : any) =>
                            <input className="areaModalReactionsParamsInput" placeholder={param.placeholder} value={reactionParams[param.name]} onChange={(e) => setReactionParams({...reactionParams, [param.name]: e.target.value})}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="areaModalButtons">
                <button className="areaModalButtonsCreate">Create</button>
            </div>
        </div>
    </div>
  );
}

export default CreateAreaModal;