export interface Hero {
    id: number;
    img: string;
    name: string;
    description: string;
    comics: Object[];
}

export interface Page {
    indexPage: number;
    total: number;
    itemPerPage: number;
    dataPage: number;
    sort: string;
    search?: string;
}

export interface Comic {
    id: number;
    title: string;
    number: string;
    description: string;
    img: string;
    visible: boolean;
}