export interface Filter {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export function convert(filter: Filter, color: string): string;

export function applyColorFilter(filter: Filter, color: string): string;