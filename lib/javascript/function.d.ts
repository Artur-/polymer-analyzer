/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import * as estree from 'estree';
import { Document, Feature, Privacy, Resolvable, SourceRange, Warning } from '../model/model';
import { Annotation as JsDocAnnotation } from './jsdoc';
export declare class ScannedFunction implements Resolvable {
    name: string;
    description?: string;
    summary?: string;
    jsdoc?: JsDocAnnotation;
    sourceRange: SourceRange;
    astNode: estree.Node;
    warnings: Warning[];
    params?: {
        name: string;
        type?: string;
    }[];
    return?: {
        type?: string;
        desc: string;
    };
    privacy: Privacy;
    constructor(name: string, description: string, summary: string, privacy: Privacy, astNode: estree.Node, jsdoc: JsDocAnnotation, sourceRange: SourceRange, params?: {
        name: string;
        type?: string;
    }[], returnData?: {
        type?: string;
        desc: string;
    });
    resolve(_document: Document): Function;
}
declare module '../model/queryable' {
    interface FeatureKindMap {
        'function': Function;
    }
}
export declare class Function implements Feature {
    name: string;
    description?: string;
    summary?: string;
    privacy: Privacy;
    kinds: Set<string>;
    identifiers: Set<string>;
    sourceRange: SourceRange;
    astNode: any;
    warnings: Warning[];
    params?: {
        name: string;
        type?: string;
    }[];
    return?: {
        type?: string;
        desc: string;
    };
    constructor(scannedFunction: ScannedFunction);
    toString(): string;
}