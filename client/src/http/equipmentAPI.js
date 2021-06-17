import {$host} from "./index";

export const getAllByUser = async (email) => {
    const data = await $host.get('api/equipment/getEquipmentByUser', {
        params: {
            user: email
        }
    });
    return data;
}

export const getByID = async (email) => {
    const {data} = await $host.get('api/equipment/getEquipmentById', {
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