/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type homeOwner$ref = any;
export type homeRepositoryNameQueryVariables = {|
  name: string,
  owner: string,
|};
export type homeRepositoryNameQueryResponse = {|
  +repository: ?{|
    +owner: {|
      +$fragmentRefs: homeOwner$ref
    |},
    +name: string,
  |}
|};
export type homeRepositoryNameQuery = {|
  variables: homeRepositoryNameQueryVariables,
  response: homeRepositoryNameQueryResponse,
|};
*/


/*
query homeRepositoryNameQuery(
  $name: String!
  $owner: String!
) {
  repository(owner: $owner, name: $name) {
    owner {
      __typename
      ...homeOwner
      id
    }
    name
    id
  }
}

fragment homeOwner on RepositoryOwner {
  __isRepositoryOwner: __typename
  login
  avatarUrl
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "homeRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "homeOwner"
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "homeRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isRepositoryOwner"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "login",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatarUrl",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c4ddb500ecde0050cf39cf9dbfded7b6",
    "id": null,
    "metadata": {},
    "name": "homeRepositoryNameQuery",
    "operationKind": "query",
    "text": "query homeRepositoryNameQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(owner: $owner, name: $name) {\n    owner {\n      __typename\n      ...homeOwner\n      id\n    }\n    name\n    id\n  }\n}\n\nfragment homeOwner on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  login\n  avatarUrl\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37af9eb37d57026d399e899c99c351d9';

module.exports = node;
