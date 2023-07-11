function employees(info) {
  const employees = info.reduce((acc, curr) => {
    const nameEmployee = curr;
    acc[nameEmployee] = nameEmployee.length;
    return acc;
  }, {});
  Object.entries(employees).forEach(([key, value]) => {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  });
}
