import {useState} from 'react';
import {serviceSubscribe, serviceUnsubscribe} from '../ApiFunctions/serviceActions';
import '../scss/card.scss';
import Loader from './Loader';

function Card({name, description, image, isSubbed, service, forceRefresh}: any) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCardClick = async () => {
        setIsLoading(true);
        try {
            if (isSubbed) {
                await serviceUnsubscribe(service);
            } else {
                await serviceSubscribe(service);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
            forceRefresh(true);
        }
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} height={90} />
            </div>
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{description}</p>
                <button
                    className={'card-button ' + (isSubbed && 'card-button-subbed')}
                    onClick={() => {
                        handleCardClick();
                    }}>
                    {isLoading && <Loader />}
                    {isSubbed ? <>Unsubscribe</> : <>Subscribe</>}
                </button>
            </div>
        </div>
    );
}

export default Card;
