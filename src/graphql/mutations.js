/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPetstore = /* GraphQL */ `
  mutation CreatePetstore(
    $input: CreatePetstoreInput!
    $condition: ModelPetstoreConditionInput
  ) {
    createPetstore(input: $input, condition: $condition) {
      id
      name
      description
      age
      animalType
      createdAt
      updatedAt
    }
  }
`;
export const updatePetstore = /* GraphQL */ `
  mutation UpdatePetstore(
    $input: UpdatePetstoreInput!
    $condition: ModelPetstoreConditionInput
  ) {
    updatePetstore(input: $input, condition: $condition) {
      id
      name
      description
      age
      animalType
      createdAt
      updatedAt
    }
  }
`;
export const deletePetstore = /* GraphQL */ `
  mutation DeletePetstore(
    $input: DeletePetstoreInput!
    $condition: ModelPetstoreConditionInput
  ) {
    deletePetstore(input: $input, condition: $condition) {
      id
      name
      description
      age
      animalType
      createdAt
      updatedAt
    }
  }
`;
