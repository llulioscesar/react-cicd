import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { CreateTaskDto, UpadateTaskDto } from './dto';

export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
};

class Crud {
    private url: string = 'https://djceo2312c.execute-api.us-east-1.amazonaws.com/dev';
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: this.url,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public create = async (data: CreateTaskDto): Promise<Task> => {
        return await this.axios.post<Task, AxiosResponse<Task>>(`/tasks`, data)
            .then((response: AxiosResponse<Task>) => response.data);
    };

    public getById = async (id: string): Promise<Task> => {
        return await this.axios.get<Task, AxiosResponse<Task>>(`/tasks/${id}`)
            .then((response: AxiosResponse<Task>) => response.data);
    }

    public update = async (id: string, data: UpadateTaskDto): Promise<Task> => {
        return await this.axios.put<Task, AxiosResponse<Task>>(`/tasks/${id}`, data)
            .then((response: AxiosResponse<Task>) => response.data);
    }

    public delete = async (id: string): Promise<void> => {
        await this.axios.delete<void, AxiosResponse<void>>(`/tasks/${id}`);
    }

    public getAll = async (): Promise<Task[]> => {
        return await this.axios.get<Task[], AxiosResponse<Task[]>>(`/tasks`)
            .then((response: AxiosResponse<Task[]>) => response.data);
    }
}

export default new Crud();