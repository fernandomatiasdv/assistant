/*const objeto = { 
    brand: {theme: ["personal","flow"]},
    theme: {variant: ["light","dark"]},
    variant: {subvariant: ["primary","secondary", "tertiary"]},
    subvariant: {null: ["hover","focus"]},
};


function dft(graph: Record<string, string[]>, source: string) {
    const stack = [source];
    let token = ""
    while (stack.length > 0) {
        const current = stack.pop();
        if (current !== undefined && current in graph && graph[current] !== undefined) {
            for (const neighbor of graph[current]) {
                token += "-"+neighbor;
                stack.push(neighbor);
            }
            console.log(token);
        }
    }
    return stack;
}

console.log(dft(objeto, "brand"));
*/

type ObjetoType = {
  [key: string]: ObjetoType | string[] | undefined;
};

const objeto: ObjetoType = {
  brand: { theme:  ["personal", "flow"] },
  theme: { variant:  ["light", "dark"]  },
  variant: { subvariant:  ["primary", "secondary", "tertiary"]  },
  subvariant: { null: ["hover", "focus"] },
};
/*
const grafo = {
  brand: ["theme"],
  theme: ["variant"],
  variant: ["subvariant"],
  subvariant: [],
};
*/

const getObjectFromKey = (obj: ObjetoType, key: string) => {
  let subToken = "";
  const values = obj[key] | [];
  const lonValues = values.length
  for(let i = 0; i < lonValues; i++){
    subToken[i] = values[i];  // ["personal", "flow"]
  }
  return subToken;
}

let x = 0, y = 0
let originalObject = new Object(objeto);
let originalKeys: string[] = Object.keys(originalObject);
const valueToPrint:string[][] = [];

function generateCombinations(obj: ObjetoType, currentCombination: string = ""): string[][] {
  const keys = Object.keys(obj);

//  currentCombination += keys[0]; // 'brand-'
for(let key = 0; key < keys.length; key++){

  = getObjectFromKey(obj, keys[key]);
}
//  currentCombination += keys[1] + "-"; // 'brand-theme-'
  //const value = originalObject[0];
  //const values = value[keys[1]];

  /* ************** 

  keys.forEach((key) => {
    const values = obj[key];
    if (values && Array.isArray(values)) {
      x = values.length
      for(let i = 0; i < x; i++){
        valueToPrint[x][1] = values[i];
        x++;
      }
    }
  })
*/


  /* ************** 
  if (keys.length === 1) {
    const key = keys[0];
    const values = obj[key];
    if (values && Array.isArray(values)) {
      values.forEach((value) => {
        valueToPrint.push(`${currentCombination}${value}`);
      });
    }
  } else {
    const key = keys[0];
    currentCombination += key + "-";
    const values = obj[key];
    if (values && !Array.isArray(values)) {
      Object.entries(values).forEach(([subKey, subValues]) => {
        // ACA DEBUGEAR********************
        if (subValues && Array.isArray(subValues)) {
          //const newCombination = `${currentCombination}${subKey === "null" ? "" : subKey + "-"}`;
          if(subKey !== "null" && subKey !== null){
            subValues.forEach((sv) => {
              currentCombination = `${currentCombination}${sv}`;
            });
          }
//          const newCombination = `${currentCombination}${subKey === "null" ? "" : subValues + "-"}`;
          const newObject: ObjetoType = { [key]: { ...values } };
          //delete newObject[key];
          generateCombinations(newObject, currentCombination);
        }
      });
    }
  }

  */
  return valueToPrint;
}

const values = generateCombinations(objeto);
values.forEach((value) => console.log(value));
