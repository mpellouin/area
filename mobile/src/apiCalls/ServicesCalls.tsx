import {getItem} from '../components/storage/localStorage';

const serviceSubscribe = async (id: number) => {
  const response = await fetch(
    `http://localhost:8080/services/subscribe/${id}`,
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
    `http://localhost:8080/services/unsubscribe/${id}`,
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
