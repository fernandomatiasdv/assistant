const  fs = require("fs")

const toUpperFirstLetter = (word) =>
  word.substring(0, 1).toUpperCase() + word.substring(1, word.length);

const actions = ["hover", "focus", "active", "disabled"]
const properties = ["background", "color"]
const objeto = {
    brand: { theme:  ["personal", "flow"] },
    theme: { variant:  ["light", "dark"]  },
    variant: { subvariant:  ["primary", "secondary", "tertiary"]  },
    subvariant: { subsubvariant: ["hover", "focus"] },
    subsubvariant: { subsubsubvariant: ["aaa", "bbb", "ccc"]},
    subsubsubvariant: { null: ["111", "222", "333"]},
  };
  const repeatCharacter = (character, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
      result += character;
    }
    return result;
  }

  const parseValue = (item, action, property) => {
    const BRAND = ['personal', 'flow']
    const THEME = ['light', 'dark']
    const VARIANT = ['primary', 'secondary', 'tertiary']
    const SUBVARIANT = ['hover', 'focus']
    const SUBSUBVARIANT = ['aaa', 'bbb', 'ccc']
    const SUBSUBSUBVARIANT = ['111', '222', '333']

    
    let value = {}
    for(let i = 0 ; i < item.split('-').length; i++ ){
      subvalue = item.split('-')[i]
      if( BRAND.includes(subvalue.trim()) ){
        value = {...value, brand: subvalue, action, property}
      }
      /*
      ESTO FUNCIONA PARA AUTOMATIZAR TODO ESTO PERO RECIEN LO INTEGRARE CUANDO TENGA EL OBJETO TRAIDO DEL FRONT BIEN CREADO
      const getKey = (obj) => obj.lowerCase() // Sacar esta función de parseValue. Luego pasarle el object.keys del objeto que traigo del front
      if( getKey(BRAND).includes(subvalue.trim()) ){
        value = {...value, [getKey(BRAND)]: subvalue, action, property}
      }*/
      if( THEME.includes(subvalue.trim()) ){
        value = {...value, theme: subvalue, action,property}
      }
      if( VARIANT.includes(subvalue.trim()) ){
        value = {...value, variant: subvalue, action, property}
      }
      if( SUBVARIANT.includes(subvalue.trim()) ){
        value = {...value, subvariant: subvalue, action, property}
      }
      if( SUBSUBVARIANT.includes(subvalue.trim()) ){
        value = {...value, subsubvariant: subvalue, action, property}
      }
      if( SUBSUBSUBVARIANT.includes(subvalue.trim()) ){
        value = {...value, subsubsubvariant: subvalue, action, property}
      }

    }
    return value
  }

  const generateToken = (item) => {
    let token = ''
    for (let key in item) {
      //token += `${item[key]}-`
      
    }
    return token
  }

  const getActionValues = (item, action, property) => {
    item = item.replace(/: {\n/g, '-')
    const token = generateToken(parseValue(item, action, property))
    let value = `'var(--nv-sys-color-${token}`
    return value
  }

  function generateCombinations(objeto) {
    let combinations = [''];
    for (let key in objeto) {
      const newCombinations = [];
      const values = objeto[key];
  
      for (let subKey in values) {
        const subValues = values[subKey];
  
        combinations.forEach(combination => {
          subValues.forEach(value => {
            newCombinations.push(combination + (combination ? '-' : '') + value);
          });
        });
      }
  
      combinations = newCombinations;
    }

    return combinations;
}

const combinations = generateCombinations(objeto)

const componentType = combinations.join("' | '")

const classVariants = combinations.map((item) => {
  return item.replace(/-/g, ': {\n')
})

const completeBrackets = (item) => {
  let brackets = ''
  for (let i = 0; i < item.split('{').length-1  ; i++) {
    brackets += '}'
  }
  return brackets
}


let nameComponent = `badge`
let pathName = `${__dirname}${nameComponent}`
const componentName = toUpperFirstLetter(nameComponent)
let objetoJoin = `export type ${nameComponent}Type = '${componentType}';`

const createFolder = (folder) => {
    try {
        fs.mkdirSync(folder);
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
};

createFolder(pathName)

fs.writeFileSync(`${pathName}/${nameComponent}Type.ts`, objetoJoin, 'utf8');

const interfaceName = nameComponent+"Interface"

const objetoInterface = 
`import { ${nameComponent}Type } from './${nameComponent}Type';
export interface ${interfaceName} {
  token: ${nameComponent}Type;
};
`

const classComponent = 
`export class ${nameComponent}Class {
  public MATRIX: any;
  constructor() {
    this.MATRIX = {
      measures: {

      },
      colors: {
        ${classVariants.map((item, idx) => {
          return(
            `${repeatCharacter('\t', idx)}${item}: { 
${actions.map(action => action + ': { \n' + properties.map(property => 
    property + ': ' + getActionValues(item, action, property)+")'").join(',\n')+'\n}').join(',\n')
}}
${completeBrackets(item)}`
          )
        })}
      },
    }
  }
}`




componentBody = 
`import { ${interfaceName} } from './${interfaceName}';

const ${componentName} = (props:${interfaceName}) => {
  const {   } = props;
  return(
    <>
      // Tu código
    </>
  )
}

export default ${componentName};
`

fs.writeFileSync(`${pathName}/${nameComponent}Type.ts`, objetoJoin, 'utf8');
fs.writeFileSync(`${pathName}/${interfaceName}.ts`, objetoInterface, 'utf8');
fs.writeFileSync(`${pathName}/${nameComponent}Class.ts`, classComponent, 'utf8');
fs.writeFileSync(`${pathName}/${componentName}.tsx`, componentBody, 'utf8');
