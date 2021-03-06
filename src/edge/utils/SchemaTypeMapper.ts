export class SchemaTypeMapper {
    private static mapField(field: any, typeMapper: (type: any) => any): any {
        if(Array.isArray(field)) {
            //TODO
            throw new Error("Array mapping is not yet supported")
        }
        else if(field && typeof field == "object" && field.type) {
            return {
                ...field,
                type: typeMapper(field.type)
            }
        }
        else {
            return typeMapper(field)
        }
    }

    private static mapSchemaFieldType(type: any): any {
        switch(type) {
            case Number:
                return 'number';
            case String:
                return 'string';
            case Boolean:
                return 'boolean';
            default:
                if(Array.isArray(type)) {
                    //TODO
                    throw new Error("Array mapping is not yet supported")
                }
                else if(type && typeof type == "object") {
                    return SchemaTypeMapper.exportSchema(type)
                }
        }
    }

    private static mapFieldTypeSchema(type: any): any {
        switch(type) {
            case 'number':
                return Number;
            case 'string':
                return String;
            case 'boolean':
                return Boolean;
            default:
                if(Array.isArray(type)) {
                    //TODO
                    throw new Error("Array mapping is not yet supported")
                }
                else if(type && typeof type == "object") {
                    return SchemaTypeMapper.importSchema(type)
                }
        }
    }

    static exportSchema(field: any): any {
        const output: { [key: string]: any } = {};
        Object
            .keys(field)
            .forEach(key =>
                output[key] = SchemaTypeMapper.mapField(field[key], SchemaTypeMapper.mapSchemaFieldType));

        return output
    }

    static importSchema(field: any): any {
        const output: { [key: string]: any } = {};
        Object
            .keys(field)
            .forEach(key =>
                output[key] = SchemaTypeMapper.mapField(field[key], SchemaTypeMapper.mapFieldTypeSchema));

        return output
    }
}