import taskItems from "./taskItems";

export default interface bucketItems {
    id?: number;
    name: string;
    description?: string;
    color: string;
    maxItems?: number;
    value?: number;
    items: taskItems[];
    callback: () => void;
}