import { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Band = {
  __typename?: 'Band'
  name?: Maybe<Scalars['String']>
  recordLabel?: Maybe<Scalars['String']>
}

export type Festival = {
  __typename?: 'Festival'
  name?: Maybe<Scalars['String']>
  bands?: Maybe<Array<Maybe<Band>>>
}

export type FestivalBand = {
  __typename?: 'FestivalBand'
  name?: Maybe<Scalars['String']>
  festivals?: Maybe<Array<Maybe<FestivalName>>>
}

export type FestivalName = {
  __typename?: 'FestivalName'
  name?: Maybe<Scalars['String']>
}

export type LabelFestivalBand = {
  __typename?: 'LabelFestivalBand'
  label?: Maybe<Scalars['String']>
  bands?: Maybe<Array<Maybe<FestivalBand>>>
}

export type Query = {
  __typename?: 'Query'
  festivals: Array<Maybe<Festival>>
  bands: Array<Maybe<Band>>
  recordLabels: Array<Maybe<RecordLabel>>
  festival: Array<Maybe<FestivalName>>
  festivalBands: Array<Maybe<FestivalBand>>
  label: Array<Maybe<LabelFestivalBand>>
  labels: Array<Maybe<LabelFestivalBand>>
}

export type QueryFestivalArgs = {
  name: Scalars['String']
}

export type QueryFestivalBandsArgs = {
  name: Scalars['String']
}

export type QueryLabelArgs = {
  label: Scalars['String']
}

export type RecordLabel = {
  __typename?: 'RecordLabel'
  name?: Maybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Band: ResolverTypeWrapper<Band>
  String: ResolverTypeWrapper<Scalars['String']>
  Festival: ResolverTypeWrapper<Festival>
  FestivalBand: ResolverTypeWrapper<FestivalBand>
  FestivalName: ResolverTypeWrapper<FestivalName>
  LabelFestivalBand: ResolverTypeWrapper<LabelFestivalBand>
  Query: ResolverTypeWrapper<{}>
  RecordLabel: ResolverTypeWrapper<RecordLabel>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Band: Band
  String: Scalars['String']
  Festival: Festival
  FestivalBand: FestivalBand
  FestivalName: FestivalName
  LabelFestivalBand: LabelFestivalBand
  Query: {}
  RecordLabel: RecordLabel
  Boolean: Scalars['Boolean']
}

export type BandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Band'] = ResolversParentTypes['Band'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  recordLabel?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FestivalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Festival'] = ResolversParentTypes['Festival'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bands?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Band']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FestivalBandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FestivalBand'] = ResolversParentTypes['FestivalBand'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  festivals?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FestivalName']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FestivalNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FestivalName'] = ResolversParentTypes['FestivalName'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LabelFestivalBandResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LabelFestivalBand'] = ResolversParentTypes['LabelFestivalBand'],
> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  bands?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FestivalBand']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  festivals?: Resolver<
    Array<Maybe<ResolversTypes['Festival']>>,
    ParentType,
    ContextType
  >
  bands?: Resolver<
    Array<Maybe<ResolversTypes['Band']>>,
    ParentType,
    ContextType
  >
  recordLabels?: Resolver<
    Array<Maybe<ResolversTypes['RecordLabel']>>,
    ParentType,
    ContextType
  >
  festival?: Resolver<
    Array<Maybe<ResolversTypes['FestivalName']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFestivalArgs, 'name'>
  >
  festivalBands?: Resolver<
    Array<Maybe<ResolversTypes['FestivalBand']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFestivalBandsArgs, 'name'>
  >
  label?: Resolver<
    Array<Maybe<ResolversTypes['LabelFestivalBand']>>,
    ParentType,
    ContextType,
    RequireFields<QueryLabelArgs, 'label'>
  >
  labels?: Resolver<
    Array<Maybe<ResolversTypes['LabelFestivalBand']>>,
    ParentType,
    ContextType
  >
}

export type RecordLabelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecordLabel'] = ResolversParentTypes['RecordLabel'],
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Band?: BandResolvers<ContextType>
  Festival?: FestivalResolvers<ContextType>
  FestivalBand?: FestivalBandResolvers<ContextType>
  FestivalName?: FestivalNameResolvers<ContextType>
  LabelFestivalBand?: LabelFestivalBandResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  RecordLabel?: RecordLabelResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
