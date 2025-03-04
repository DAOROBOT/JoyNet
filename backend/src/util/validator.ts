const Validator = {
    is_number(x: any, range?: {start?: number | null, end?: number | null}): boolean {
        if (Validator.is_missing(x)) return false;
        const num = Number(x);
        if (isNaN(num)) return false;
        if (Validator.is_number(range?.start) && num < range?.start!) return false;
        if (Validator.is_number(range?.end) && num > range?.end!) return false;
        return true;
    },

    is_enum(value: any, enumObject: any): boolean {
        return Object.values(enumObject).includes(value);
    },

    parse_boolean(value: unknown): boolean | null {
        if (value === true || value === false) {
            return value;
        }
        if (value === 'true' || value === '1') {
            return true;
        }
        if (value === 'false' || value === '0') {
            return false;
        }
        return null; // Invalid boolean representation
    },

    is_missing(x: any): boolean {
        return x == null || x == undefined;
    },

    is_email(x: any): boolean {
        const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(x);
    },

    is_number_sequence(x: any, length: number): boolean {
        const regex: RegExp = new RegExp(`^\\d{${length},${length}}$`);
        return regex.test(x);
    }
};
export {Validator}

