
export default interface taskItems {
    id?: number;
    bucketId?: number;
    title: string;
    name?: string;
    description?: string;
    priority: number;
    state: number;
    callback: () => void;

}