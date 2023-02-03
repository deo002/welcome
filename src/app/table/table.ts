interface header {
    headerValue: string;
    isSortable: boolean;
}

export interface Table {
    headers: header[];
    rows: (string | HTMLElement)[][];
    paginationSize: number;
    messageOnEmptyTable: string;
}