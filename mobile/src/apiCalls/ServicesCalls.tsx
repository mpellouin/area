import {getItem} from '../components/storage/localStorage';

const serviceSubscribe = async (id: number) => {
  const response = await fetch(
    `http://area.eu-west-3.elasticbeanstalk.com/services/subscribe/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${getItem('jwt')}`,
      },
    },
  );
  return response.json();
};

const serviceUnsubscribe = async (id: number) => {
  const response = await fetch(
    `http://area.eu-west-3.elasticbeanstalk.com/services/unsubscribe/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${getItem('jwt')}`,
      },
    },
  );
  return response.json();
};

export {serviceSubscribe, serviceUnsubscribe};
