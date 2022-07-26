import { faker } from "@faker-js/faker";
import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function generateData() {
  const users = [];

  const usersError = [];

  const length = faker.datatype.number({
    min: 1,
    max: 50,
  });

  const randomAge = () =>
    faker.datatype.number({
      min: 16,
      max: 100,
    });

  for (let i = 0; i < length; i++) {
    const id = i;
    const name = faker.name.firstName();
    const age = randomAge();
    users.push({ id, name, age });
    usersError.push({ id, name, age: age.toString() });
  }

  return { users, usersError };
}

async function generateDb() {
  const data = generateData();
  const dbPath = await join(__dirname, "./db.json");
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf8");
}

generateDb();
