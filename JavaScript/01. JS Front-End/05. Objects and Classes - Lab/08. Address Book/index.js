function adressBook(info) {
  const addressBook = info.reduce((acc, curr) => {
    const [person, address] = curr.split(":");
    acc[person] = address;
    return acc;
  }, {});
  Object.entries(addressBook)
    .sort()
    .forEach(([key, value]) => {
      console.log(`${key} -> ${value}`);
    });
}
