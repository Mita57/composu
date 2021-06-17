import {$host} from "./index";

export const getAllProjsByUser = async (email) => {
    const data = await $host.get('api/project/getProjectsByUser', {
        params: {
            user: email
        }
    });
    return data;
}

export const addProject = async (email) => {
    const data = await $host.post('api/project/addProject', {
    });
    return data;
}

export const getAll = async (email) => {
    const data = await $host.get('api/project/getAll');
    return data;
}

export const getByID = async (id) => {
    const {data} = await $host.get('api/project/getProjectById', {
        params: {
            id: id
        }
    });
    return data;
}

export const getByFilter = async (filter) => {
    const {data} = await $host.get('api/project/getProjectsWithFilter', {
        params: {
            filter: filter
        }
    });
    return data;
}