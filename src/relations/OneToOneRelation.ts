import {ApiEdgeDefinition} from "../edge/ApiEdgeDefinition";
import {ApiEdgeRelation, ApiEdgeRelationTypes} from "./ApiEdgeRelation";
import {Api} from "../Api";
import {OneToManyRelation} from "./OneToManyRelation";

export class OneToOneRelation extends ApiEdgeRelation {
    name: string;
    relationId: string;
    relatedId: string;
    from: ApiEdgeDefinition;
    to: ApiEdgeDefinition;

    constructor(from: ApiEdgeDefinition,
                to: ApiEdgeDefinition,
                options: { relationId: string|null, relatedId: string|null, name: string|null }
                    = { relationId: null, relatedId: null, name: null }) {
        super(from, to);
        this.name = options.name || to.name;
        this.relatedId = options.relatedId || from.idField;
        this.relationId = options.relationId || to.name + Api.defaultIdPostfix
    }

    getType() { return 'one-to-one' }
}

ApiEdgeRelationTypes['one-to-one'] = OneToOneRelation;