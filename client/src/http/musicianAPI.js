import {$host} from "./index";

export const getAll = async () => {
    const data = await $host.get('api/user/getAll');
    return data;
}

export const getByID = async (email) => {
    const {data} = await $host.get('api/user/userById', {
        params: {
            email: email
        }
    });
    return data;
}

export const getByFilter = async (filter) => {
    const {data} = await $host.get('api/user/getByFilter', {
        params: {
            filter: filter
        }
    });
    return data;
}