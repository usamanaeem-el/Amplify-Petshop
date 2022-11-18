/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBuyer = /* GraphQL */ `
  subscription OnCreateBuyer {
    onCreateBuyer {
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
export const onUpdateBuyer = /* GraphQL */ `
  subscription OnUpdateBuyer {
    onUpdateBuyer {
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
export const onDeleteBuyer = /* GraphQL */ `
  subscription OnDeleteBuyer {
    onDeleteBuyer {
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
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet {
    onCreatePet {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet {
    onUpdatePet {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet {
    onDeletePet {
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
