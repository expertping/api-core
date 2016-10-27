import {ApiEdgeDefinition} from "../edge/ApiEdgeDefinition";
import {OneToManyRelation} from "../relations/OneToManyRelation";
import {OneToOneRelation} from "../relations/OneToOneRelation";
import {ApiEdgeQueryContext} from "../edge/ApiEdgeQueryContext";

export class PathSegment {
    edge: ApiEdgeDefinition;
    relation: OneToManyRelation;

    inspect = () => {
        return '';
    }
}

export class EdgePathSegment extends PathSegment {
    edge: ApiEdgeDefinition;
    relation: OneToManyRelation;

    constructor(edge: ApiEdgeDefinition, relation: OneToManyRelation) {
        super();
        this.edge = edge;
        this.relation = relation;
    }

    inspect = () => {
        return `[${this.edge.name}]`;
    }
}

export class EntryPathSegment extends PathSegment {
    edge: ApiEdgeDefinition;
    relation: OneToManyRelation;
    id: string;

    constructor(edge: ApiEdgeDefinition, id: string, relation: OneToManyRelation) {
        super();
        this.edge = edge;
        this.relation = relation;
        this.id = id;
    }

    inspect = () => {
        return `${this.edge.name}(${this.id})`;
    }
}

export class RelatedFieldPathSegment extends  PathSegment {
    edge: ApiEdgeDefinition;
    relation: OneToOneRelation;

    constructor(edge: ApiEdgeDefinition, relation: OneToOneRelation) {
        super();
        this.edge = edge;
        this.relation = relation;
    }

    inspect = () => {
        return `${this.edge.name}.${this.relation.name}`;
    }
}

export class ApiRequestPath {
    segments: PathSegment[] = [];

    add = (segment: PathSegment) => {
        this.segments.push(segment);
    };

    inspect = () => {
        return this.segments.map(segment => segment.inspect()).join(' -> ');
    }
}

export enum ApiRequestType {
    Create,
    Read,
    Update,
    Delete,
    Exists
}

export class ApiRequest {
    type: ApiRequestType;
    path: ApiRequestPath;
    context: ApiEdgeQueryContext; //Should be request context

    constructor() {
        this.path = new ApiRequestPath();
        this.type = ApiRequestType.Read;
        this.context = new ApiEdgeQueryContext();
    }
}