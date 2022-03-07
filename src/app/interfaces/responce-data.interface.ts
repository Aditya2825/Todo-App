import { Todo } from './todo.interface';

export interface ResponceData {
    success?: boolean;
    message?: string;
    data?: Todo[] | null | any;
    error?: Error | null;
    resource?: string;
}
