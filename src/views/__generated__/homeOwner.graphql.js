/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type homeOwner$ref: FragmentReference;
declare export opaque type homeOwner$fragmentType: homeOwner$ref;
export type homeOwner = {|
  +login: string,
  +avatarUrl: any,
  +$refType: homeOwner$ref,
|};
export type homeOwner$data = homeOwner;
export type homeOwner$key = {
  +$data?: homeOwner$data,
  +$fragmentRefs: homeOwner$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "homeOwner",
  "selections": [
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
    }
  ],
  "type": "RepositoryOwner",
  "abstractKey": "__isRepositoryOwner"
};
// prettier-ignore
(node/*: any*/).hash = '4f21cdab44586d9e8ec7343988f5377a';

module.exports = node;
