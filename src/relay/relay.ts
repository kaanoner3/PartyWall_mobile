import { graphql } from 'relay-hooks';
// get-graphql-schema http://localhost:8080/graphql > schema.graphql
graphql`
  mutation relaySignUpMutation($input: createUserMutationInput!) {
    createUserMutation(input: $input) {
      userId
      token
    }
  }
`;

graphql`
  mutation relayLogInMutation($input: loginMutationInput!) {
    loginMutation(input: $input) {
      userId
      token
    }
  }
`;
graphql`
  mutation relayCreateItemMutation($input: createItemMutationInput!) {
    createItemMutation(input: $input) {
      item {
        id
        name
        price
        quantity
        userName
        categoryName
        attributes {
          weight
          volume
          description
        }
      }
    }
  }
`;
graphql`
  mutation relayRemoveItemMutation($input: removeItemMutationInput!) {
    removeItemMutation(input: $input) {
      deletedId
    }
  }
`;
graphql`
  query relayAllItemsQuery {
    itemQuery {
      allItems {
        id
        name
        price
        quantity
        userName
        categoryName
        attributes {
          weight
          volume
          description
        }
      }
    }
  }
`;

graphql`
  query relayUserItemsQuery($userId: String!) {
    userQuery {
      person(userId: $userId) {
        items {
          edges {
            node {
              id
              name
              price
              quantity
              userName
              categoryName
              attributes {
                weight
                volume
                description
              }
            }
          }
        }
      }
    }
  }
`;
