export interface Album {
    id:          string;
    ref:         string;
    name:        string;
    title:       string;
    description: string;
    duration:    number;
    url:         string;
    like?:       string;
    tags?:       string[];
    status:      string;
}

export interface List {
    id: string;
    list: string[];
}

export interface UserLists {
    id: string,
    name: string,
    email: string,
    password: string,
    status: string
}