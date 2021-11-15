
export interface output {
    estatus: boolean;
    output: string | null;
}

export interface ResponseEnpoint {
    res: ResponseData | null;
    error: boolean;
}

export interface ResponseData {
    name: string;
    id: string;
}

export interface UUIDData extends ResponseData {
    url?: string | undefined;
}