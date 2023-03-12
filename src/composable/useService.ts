import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;

export const GetProfileDocument = gql`
    query getProfile {
  profile {
    id
    name
    email
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a Vue component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetProfileQuery();
 */
export function useGetProfileQuery(options: VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, {}, options);
}
export function useGetProfileLazyQuery(options: VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetProfileQuery, GetProfileQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, {}, options);
}
export type GetProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetProfileQuery, GetProfileQueryVariables>;
export const GetNameDocument = gql`
    query getName {
  profile {
    name
  }
}
    `;

/**
 * __useGetNameQuery__
 *
 * To run a query within a Vue component, call `useGetNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNameQuery();
 */
export function useGetNameQuery(options: VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetNameQuery, GetNameQueryVariables>(GetNameDocument, {}, options);
}
export function useGetNameLazyQuery(options: VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetNameQuery, GetNameQueryVariables>(GetNameDocument, {}, options);
}
export type GetNameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetNameQuery, GetNameQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EmailLoginParams = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type GithubLoginParams = {
  code: Scalars['String'];
};

export type LoginParams = {
  email?: InputMaybe<EmailLoginParams>;
  github?: InputMaybe<GithubLoginParams>;
};

export type LoginResp = {
  __typename?: 'LoginResp';
  accessToken: Scalars['String'];
  expires: Scalars['Int'];
  idToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  delete: Scalars['String'];
  login: LoginResp;
};


export type MutationLoginArgs = {
  by: LoginParams;
};

export type Profile = {
  __typename?: 'Profile';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  profile: Profile;
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', id: string, name: string, email: string } };

export type GetNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNameQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', name: string } };
