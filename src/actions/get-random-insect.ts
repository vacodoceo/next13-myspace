"use server";

import { faker } from "@faker-js/faker";

export const getRandomInsect = async () => {
  return {
    insect: faker.animal.insect(),
    environment: process.env.ENVIRONMENT,
  };
};
