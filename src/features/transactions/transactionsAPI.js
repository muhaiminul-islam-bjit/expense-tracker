import axios from '../../utils/axios';

export const getTransactions = async () => {
    const response = await axios.get('/transactions');

    return response.data;
}

export const addTransection = async (data) => {
    const response =  await axios.post('/transactions', data);

    return response.data;
}

export const editTransection = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`,data);

    return response.data;
}

export const deleteTransection = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
}