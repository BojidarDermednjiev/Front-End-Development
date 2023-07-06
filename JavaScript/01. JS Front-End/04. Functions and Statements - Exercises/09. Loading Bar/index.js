function solve(percentage) {
  const output = function (percentage) {
    return console.log(
      percentage === 100
        ? `${percentage}% Complete! \n[${`%`.repeat(percentage / 10)}]`
        : `${percentage}% [${`%`.repeat(percentage / 10)}${`.`.repeat(
            100 / 10 - percentage / 10
          )}] \nStill loading...`
    );
  };
  output(percentage);
}
