import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;

export const ProfileDocument = gql`
    query profile {
  profile
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a Vue component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProfileQuery();
 */
export function useProfileQuery(options: VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, {}, options);
}
export function useProfileLazyQuery(options: VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProfileQuery, ProfileQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, {}, options);
}
export type ProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProfileQuery, ProfileQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  profile: Scalars['String'];
};

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: string };
