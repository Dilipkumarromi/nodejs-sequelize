/**
 * difference between Obj1-->Obj2
 * @param oldObject --> New Json Object 
 * @param newObject --> Old Json Object
 * @returns 
 */
type JsonObject = { [key: string]: any };
const findJsonObjectDifferences = (oldObject: JsonObject, newObject: JsonObject): JsonObject => {
  const differences: JsonObject = {};
  Object.keys(newObject).forEach(key => {
    if (oldObject.hasOwnProperty(key)) {
      if (typeof newObject[key] === 'object' && typeof oldObject[key] === 'object') {
        const nestedDifferences = findJsonObjectDifferences(newObject[key], oldObject[key]);
        if (Object.keys(nestedDifferences).length !== 0) {
          differences[key] = nestedDifferences;
        }
      } else if (newObject[key] !== oldObject[key]) {
        differences[key] = { oldValue: oldObject[key], newValue: newObject[key] };
      }
    } else {
      differences[key] = { oldValue: null, newValue: newObject[key] };
    }
  });

  Object.keys(oldObject).forEach(key => {
    if (!newObject.hasOwnProperty(key)) {
      differences[key] = { oldValue: oldObject[key], newValue: null };
    }
  });
  const jsonArray = Object.keys(differences).map(key => ({ [key]: differences[key] }));

const result = jsonArray.map(obj => {
  const [key, value] = Object.entries(obj)[0];
  return {
    [`${key}.oldValue`]: value.oldValue,
    [`${key}.newValue`]: value.newValue
  };
});
  return result;
  return differences //--> diff value 
};
