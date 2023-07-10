function meetings(infoAbouthMeetingsFromConsole) {
  const schedule = infoAbouthMeetingsFromConsole.reduce((acc, curr) => {
    const [dayOfTheWeek, name] = curr.split(" ");
    console.log(
      acc.hasOwnProperty(dayOfTheWeek)
        ? `Conflict on ${dayOfTheWeek}!`
        : `Scheduled for ${dayOfTheWeek}`
    );
    if (!acc.hasOwnProperty(dayOfTheWeek)) acc[dayOfTheWeek] = name;
    return acc;
  }, {});

  Object.entries(schedule).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}
