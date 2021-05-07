import { graphql } from 'relay-hooks';
// get-graphql-schema http://localhost:8080/graphql > schema.graphql
graphql`
  mutation relaySignUpMutation($input: createUserMutationInput!) {
    createUserMutation(input: $input) {
      user {
        username
        password
      }
    }
  }
`;


graphql`
  mutation relayLogInMutation($input: createUserMutationInput!) {
    createUserMutation(input: $input) {
      user {
        username
        password
      }
    }
  }
`;
