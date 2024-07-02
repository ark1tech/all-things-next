// Router Parameter Typing

export interface URLParams {
    params: {
        id: number;
        recipeName: string;
    };
    searchParams?: Record<string, string>;
}

export type Params = Pick<URLParams, "params">;