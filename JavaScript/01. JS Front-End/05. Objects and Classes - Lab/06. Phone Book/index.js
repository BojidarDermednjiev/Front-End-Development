function phoneBook(infoFromConsoleAbouthPhones) {
  const phoneNumbers = infoFromConsoleAbouthPhones.reduce((acc, curr) => {
    const [name, phone] = curr.split(" ");
    acc[name] = phone;
    return acc;
  }, {});
  Object.entries(phoneNumbers).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}
