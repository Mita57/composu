import {$host} from "./index";

export const getAll = async () => {
    const {data} = await $host.get('api/musicians/getAll');
    return data;
}

export const getByID = async (email) => {
    const {data} = await $host.get('api/musicians/getById', {
        params: {
            email: email
        }
    });
    return data;
}

export const getByFilter = async (filter) => {
    const {data} = await $host.get('api/musicians/getByFilter', {
        params: {
            filter: filter
        }
    });
    return data;
}