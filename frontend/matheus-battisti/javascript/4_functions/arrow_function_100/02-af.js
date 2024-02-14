const helloPerson = (person) => {
  console.log(`02) Hello ${person}`);
};

helloPerson("Mikael");

const helloDefault = (personDefault = "User!") => {
  console.log(`03) Hello ${personDefault}!`);
};

helloDefault();
helloDefault("Erika");
