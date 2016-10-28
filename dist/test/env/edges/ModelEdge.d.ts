import { ApiEdgeDefinition } from "../../../src/edge/ApiEdgeDefinition";
import { ApiEdgeQueryContext } from "../../../src/edge/ApiEdgeQueryContext";
import { ApiEdgeQueryResponse } from "../../../src/edge/ApiEdgeQueryResponse";
export declare class Model {
    id: string;
    constructor(obj: any);
}
export declare class ModelEdge<ModelType extends Model> implements ApiEdgeDefinition {
    name: string;
    pluralName: string;
    idField: string;
    provider: ModelType[];
    protected createModel: (obj: any) => ModelType;
    methods: any;
    relations: never[];
    inspect: () => string;
    private applyMapping(item, fields);
    private static applyFilter(item, filter);
    private applyFilters(item, filters);
    getEntry: (context: ApiEdgeQueryContext) => Promise<ApiEdgeQueryResponse>;
    listEntries: (context: ApiEdgeQueryContext) => Promise<ApiEdgeQueryResponse>;
    createEntry: (context: ApiEdgeQueryContext, body: any) => Promise<ApiEdgeQueryResponse>;
    updateEntry: (context: ApiEdgeQueryContext, body: any) => Promise<ApiEdgeQueryResponse>;
    patchEntry: (context: ApiEdgeQueryContext, body: any) => Promise<ApiEdgeQueryResponse>;
    updateEntries: (context: ApiEdgeQueryContext, body: any) => Promise<ApiEdgeQueryResponse>;
    removeEntry: (context: ApiEdgeQueryContext) => Promise<ApiEdgeQueryResponse>;
    removeEntries: (context: ApiEdgeQueryContext) => Promise<ApiEdgeQueryResponse>;
    exists: (context: ApiEdgeQueryContext) => Promise<ApiEdgeQueryResponse>;
    callMethod: (context: ApiEdgeQueryContext, body: any) => Promise<ApiEdgeQueryResponse>;
}
