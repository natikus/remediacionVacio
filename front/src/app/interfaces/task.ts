
export interface TaskPost {
    nombre: string;
    duracion: number;
}
export interface Task extends TaskPost{
    id_tarea:   number;
    id_usuario: number;
    creador:    string;
    usuarios:   string[];
}