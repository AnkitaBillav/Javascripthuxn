function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error(`An error occurred while parsing JSON: ${error.message}`);
    return null;
  }
}
const validJSON = '{"name":"huxn","age":19}';
const invalidJSON = '{"name":"HUXN","age":19,}';

const result1 = parseJSON(validJSON); // Valid JSON
const result2 = parseJSON(invalidJSON); // Invalid JSON

console.log(result1); // Output: { name: 'huxn', age: 19 }
console.log(result2); // Output: null (and error message in console)
