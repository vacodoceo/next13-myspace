"use server";

import { faker } from "@faker-js/faker";

export const getRandomInsect = async () => {
  return faker.animal.insect();
};
