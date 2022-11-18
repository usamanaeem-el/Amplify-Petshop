/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBuyer = /* GraphQL */ `
  query GetBuyer($id: ID!) {
    getBuyer(id: $id) {
      id
      name
      age
      pets {
        items {
          id
          name
          description
          age
          animalType
          createdAt
          updatedAt
          buyerPetsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBuyers = /* GraphQL */ `
  query ListBuyers(
    $filter: ModelBuyerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuyers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        pets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      name
      description
      age
      animalType
      buyer {
        id
        name
        age
        pets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      buyerPetsId
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        age
        animalType
        buyer {
          id
          name
          age
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        buyerPetsId
      }
      nextToken
    }
  }
`;
