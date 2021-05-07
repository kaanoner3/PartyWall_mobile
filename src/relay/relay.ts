import { graphql } from 'relay-hooks';
// get-graphql-schema http://localhost:8080/graphql > schema.graphql
graphql`
  mutation relaySignUpMutation($input: createUserMutationInput!) {
    createUserMutation(input: $input) {
        token
    }
  }
`;


graphql`
  mutation relayLogInMutation($input: loginMutationInput!) {
    loginMutation(input: $input) {
      token
    }
  }
`;
