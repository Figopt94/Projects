const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 9;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 7;
  } else {
    return 'Invalid day';
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = (idealHours = 8) => idealHours * 7;

console.log(getActualSleepHours()); // se quiseres ver a soma
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
 let actualSleepHours = getActualSleepHours();
 let idealSleepHours = getIdealSleepHours(8); 

 if (actualSleepHours === idealSleepHours) {
  return `User got the perfect amount of sleep. Hours in debt: ${actualSleepHours - idealSleepHours}`;
  } else if (actualSleepHours > idealSleepHours) {
  return `User got more sleep than needed. Excessive sleep hours: ${actualSleepHours - idealSleepHours}`;
  } else {
  return `User should get some rest. Hours in debt: ${Math.abs(actualSleepHours - idealSleepHours)}`;
 }
}

console.log(calculateSleepDebt());