import * as babylon from '@babel/parser';
import * as types from '@babel/types';
import { MixedOutput, Module, ReadOnlyGraph, SerializerOptions } from 'metro';
import { SerializerConfigT } from 'metro-config';
export type Serializer = NonNullable<SerializerConfigT['customSerializer']>;
export type SerializerParameters = Parameters<Serializer>;
type Ast = babylon.ParseResult<types.File>;
export declare function isModuleEmptyFor(ast?: Ast): boolean;
export declare function treeShakeSerializer(entryPoint: string, preModules: readonly Module<MixedOutput>[], graph: ReadOnlyGraph, options: SerializerOptions): Promise<SerializerParameters>;
export declare function accessAst(output: MixedOutput): Ast | undefined;
export declare function isShakingEnabled(graph: ReadOnlyGraph, options: SerializerOptions): boolean;
export {};
