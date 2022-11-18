/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBuyer = /* GraphQL */ `
  mutation CreateBuyer(
    $input: CreateBuyerInput!
    $condition: ModelBuyerConditionInput
  ) {
    createBuyer(input: $input, condition: $condition) {
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
export const updateBuyer = /* GraphQL */ `
  mutation UpdateBuyer(
    $input: UpdateBuyerInput!
    $condition: ModelBuyerConditionInput
  ) {
    updateBuyer(input: $input, condition: $condition) {
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
export const deleteBuyer = /* GraphQL */ `
  mutation DeleteBuyer(
    $input: DeleteBuyerInput!
    $condition: ModelBuyerConditionInput
  ) {
    deleteBuyer(input: $input, condition: $condition) {
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
export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
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
