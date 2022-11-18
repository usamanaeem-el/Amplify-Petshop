import { Auth, API } from 'aws-amplify';

//Add user into group
export const addToGroup = async () => {
  let apiName = 'AdminQueries';
  let path = '/addUserToGroup';
  let myInit = {
    body: {
      username: 'usama.naeem+customer5@emerald-labs.com',
      groupname: 'Customer',
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  return await API.post(apiName, path, myInit);
};

//List users of specific group
let nextToken;

export const listCustomers = async (limit) => {
  let apiName = 'AdminQueries';
  let path = '/listUsersInGroup';
  let myInit = {
    queryStringParameters: {
      groupname: 'Customer',
      limit: limit,
      token: nextToken,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },
  };
  const { NextToken, ...rest } = await API.get(apiName, path, myInit);
  nextToken = NextToken;
  return rest;
};
