function solve(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  const currentSpeedLimit = speedLimits[area];
  const speedOver = speed - currentSpeedLimit;
  const speedMessage =
    speedOver <= 20
      ? `speeding`
      : speedOver <= 40
      ? `excessive speeding`
      : `reckless driving`;
  console.log(
    speedOver <= 0
      ? `Driving ${speed} km/h in a ${currentSpeedLimit} zone`
      : `The speed is ${Math.abs(
          speedOver
        )} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedMessage}`
  );
}
