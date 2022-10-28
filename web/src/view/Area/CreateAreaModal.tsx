import { useState } from "react";
import './index.scss'

import createArea from "../../ApiFunctions/createArea";
import Loader from "../../components/Loader";

interface AreaParam {
    id: number,
    name: string,
    params: {
        placeholder: string,
        name: string,
        type?: string
    }[]
}

const actionsList : AreaParam[] = [{
    "id": 1,
    "name": "New tweet from @X",
    "params": [{
        "placeholder": "Twitter username to fetch",
        "name": "twitterAccount"
    }],
    }, {
    "id": 2,
    "name": "New follower on account X",
    "params": [{
        "placeholder": "Twitter id to lookup",
        "name": "twitterId"
    }],
    }, {
        "id": 3,
        "name": "New flight 50km around coordinates X Y",
        "params": [{
            "placeholder": "Latitude",
            "name": "lat"
        }, {
            "placeholder": "Longitude",
            "name": "lon"
        }],
    }, {
        "id": 4,
        "name": "New Google calendar event in less than an hour",
        "params": [{
            "placeholder": "Google calendar id",
            "name": "calendarId"
        }],
    }]

const reactionsList : AreaParam[] = [{
    "id": 1,
    "name": "Send mail to Y",
    "params": [{
        "placeholder": "Subject of the mail",
        "name": "subject"
    }, {
        "placeholder": "Contents of the mail",
        "name": "message"
    }, {
        "placeholder": "Mail address to send to",
        "name": "to"
    }]
    }, {
    "id": 2,
    "name": "Send message to Discord webhook X",
    "params": [{
        "placeholder": "Discord webhook url",
        "name": "webhook"
    }, {
        "placeholder": "Message to send",
        "name": "content"
    }, {
        "placeholder": "Username to send as",
        "name": "username"
    }, {
        "placeholder": "Avatar url to send as",
        "name": "avatar_url"
    }]
    }, {
        "id": 3,
        "name": "Create new Google calendar event",
        "params": [{
            "placeholder": "Google calendar id",
            "name": "reaCalendarId"
        }, {
            "placeholder": "Event name",
            "name": "summary"
        }, {
            "placeholder": "Event description",
            "name": "description"
        }, {
            "placeholder": "Event start date",
            "name": "startDate",
            "type": "datetime-local"
        }, {
            "placeholder": "Event end date",
            "name": "endDate",
            "type": "datetime-local"
        }]
}]

const CreateAreaModal = ({setForceRefresh, setIsOpened} : any) => {
    const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    const [actionId, setActionId] = useState(0);
    const [reactionId, setReactionId] = useState(0);
    const [actionParams, setActionParams] = useState<{[key: string]: string}>({});
    const [reactionParams, setReactionParams] = useState<{[key: string]: string}>({});
    const [isLoading, setIsLoading] = useState(false);

    const submitArea = async () => {
        console.log("creating area");
        const area = {
            actionId,
            reactionId,
            ...actionParams,
            ...reactionParams,
            name,
            accessToken: localStorage.getItem('accessToken'),
        }
        console.log(area);
        try {
            setIsLoading(true);
            const res = await createArea(area);
            console.log(res);
            setForceRefresh(true);
            setIsOpened(false);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

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
                                <option key={action.id} value={action.id}>{action.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="areaModalParams">
                        {actionsList.find((param : any) => param.id === actionId)?.params.map((param : any) =>
                            <input key={param.name} className="areaModalActionsParamsInput" placeholder={param.placeholder} value={actionParams[param.name] ?? ""} onChange={(e) => setActionParams({...actionParams, [param.name]: e.target.value})}/>
                        )}
                    </div>
                </div>
                <div className="areaModalReactions">
                    <div className="areaModalReactionsTitle">Reactions</div>
                    <div className="areaModalReactionsList">
                        <select className="areaModalReactionsListSelect" value={reactionId} onChange={(e) => setReactionId(parseInt(e.target.value))}>
                            <option defaultChecked/>
                            {reactionsList.map((reaction) =>
                                <option key={reaction.id} value={reaction.id}>{reaction.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="areaModalParams">
                        {reactionsList.find((param : any) => param.id === reactionId)?.params.map((param : any) =>
                            <input type={param?.type ?? "text"} key={param.name}  className="areaModalReactionsParamsInput" placeholder={param.placeholder} value={reactionParams[param.name] ?? ""} onChange={(e) => setReactionParams({...reactionParams, [param.name]: e.target.value})}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="areaModalButtons">
                <button className="areaModalButtonsCreate" onClick={() => submitArea()}> { isLoading && <Loader /> }Create</button>
            </div>
        </div>
    </div>
  );
}

export default CreateAreaModal;