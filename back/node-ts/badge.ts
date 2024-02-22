type AttributeType = "brand" | "theme" | "variant" | "subvariant" | "subclases" | "weightAlertType" | "iconWeightAlertType" ;

interface propsI {
    id: string,
    family: boolean,
    available: (()=>boolean) | boolean ,
    skip: boolean
}

interface fieldsI{
    attributeName: AttributeType;
    level: number;
    props: propsI[];
    end: boolean;
}

interface componentI{
    component: string;
    fields: fieldsI[];
}
/***************
export interface DarkType {
    id: 'dark',
    variante: "standard" | "neutral",
    family: true
  }
  
  interface LightType {
    id: 'light',
    variante: "standard" | "neutral",
    family: true
  }
  export interface personalTypes {
    brand: 'Personal',
    theme: LightType | DarkType
  }

  export interface flowTypes {
    brand: 'Flow',
    theme: DarkType
  }
  export interface ButtonTypes {
    variant: personalTypes | flowTypes
  }
  
  const Button.FC<ButtonTypes> = ({variant}) => 
  
  
  <Button variant={{brand: 'Personal', theme: { id: 'light', variant="standard"  family: true}}} />
  
  
  import Button from "teco/button"
  
  let com = { componentName: "accordion", fields: [ { attributeName: "brand", props: [ { id: "personal", family: true, available: () => true, skip: false, },{ id: "flow", family: true, available: () => true, skip: false, } ] },{ attributeName: "theme", props: [ { id: "light", family: true, available: () => true, skip: false, },{ id: "dark", family: true, available: () => true, skip: false, } ] },{ attributeName: "variant", props: [ { id: "primary", family: true, available: () => true, skip: false, },{ id: "secondary", family: true, available: () => true, skip: false, },{ id: "tertiary", family: true, available: () => true, skip: false, },{ id: "select", family: true, available: () => true, skip: false, },{ id: "bold", family: true, available: () => true, skip: false, } ] },{ attributeName: "subvariant", props: [ { id: "standard", family: true, available: () => true, skip: false, },{ id: "success", family: true, available: () => true, skip: false, },{ id: "warning", family: true, available: () => true, skip: false, },{ id: "delete", family: true, available: () => true, skip: false, },{ id: "error", family: true, available: () => true, skip: false, },{ id: "neutral", family: true, available: () => true, skip: false, },{ id: "informative", family: true, available: () => true, skip: false, },{ id: "highlight", family: true, available: () => true, skip: false, } ] } ] }
  *********** */
  
// const components:componentI[] = 
// [
//     {
//         component: "badge",
//         fields: [{
//                 attributeName: "brand",
//                 level: 1,
//                 props: [
//                     {
//                         id: "personal",
//                         family: true,
//                         available:  () => true,
//                         skip: false
//                     },
//                     {
//                         id: "flow",
//                         family: true,
//                         available: () =>  true,
//                         skip: false
//                     }
//                 ],
//                 end: false
//             }, // => [personal, flow]
//             {
//                 attributeName: "theme",
//                 level: 2,
//                 props: [
//                     {
//                         id: "dark",
//                         family: true,
//                         available: () => true, //isAvailableTheme("dark") /*{ fields.attributeName === 'brand' && fields.props.id === 'personal' ? 'false' : 'true'}*/,
//                         skip: false
//                     },
//                     {
//                         id: "light",
//                         family: true,
//                         available: () => true, //isAvailableTheme("light") /*fields.attributeName === 'brand' && fields.props.id === 'flow' ? 'true' : 'false' */,
//                         skip: false
//                     }
//                 ],
//                 end: false// => [dark, light]
//             },
//             {
//                 attributeName: "variant",
//                 level: 3,
//                 props: [
//                     {
//                         id:  "primary",		
//                         family: true,
//                         available:  () => true,
//                         skip: false
//                     }
//                 ],
//                 end: false
//         },
//         {
//             attributeName: "subvariant",
//             level: 4,
//             props: [
//                 {
//                     id:  "standard",		
//                     family: true,
//                     available: () =>  true,
//                     skip: false
//                 },
//                 {
//                     id: "neutral",
//                     family: true,
//                     available: () => true,
//                     skip: false
//                 }
//             ],
//             end: true
//         }
//     ]},
// ]
// /* [
//     ["personal", "flow"],
//     ["dark", "light"],
//     ["primary", "secondary", "tertiary"],
//     ["standard", "neutral"]
//  ] */



// const componentName = components[0].component
// const fields = components[0].fields.map((elemento) => elemento.attributeName);

// const getFieldsByAttributeName = (attributeName: string) => {
//     return components[0].fields.filter((elemento) => elemento.attributeName === attributeName); 
// }

/*let ids: propsI[] = [];
fields.forEach((elemento, idx) => {
    const fieldsByAttributeName = getFieldsByAttributeName(elemento);
    ids.push(fieldsByAttributeName.map(field => ({
        id: field.props.id,
        family: field.props.family,
        available: field.props.available,
        skip: field.props.skip
    })));
})
*/

const data = {
    componentName: "accordion",
    fields: [
        {
            attributeName: "brand",
            props: [
                {
                    id: "personal",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "flow",
                    family: true,
                    available: () => true,
                    skip: false,
                }
            ]
        },{
            attributeName: "theme",
            props: [
                {
                        id: "light",
                        family: true,
                        available: () => true,
                        skip: false,
                    },{
                        id: "dark",
                        family: true,
                        available: () => true,
                        skip: false,
                    }
            ]
        },{
            attributeName: "variant",
            props: [
                {
                    id: "primary",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "secondary",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "tertiary",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "select",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "bold",
                    family: true,
                    available: () => true,
                    skip: false,
                }
            ]
        },{
            attributeName: "subvariant",
            props: [
                {
                    id: "standard",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "success",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "warning",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "delete",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "error",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "neutral",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "informative",
                    family: true,
                    available: () => true,
                    skip: false,
                },{
                    id: "highlight",
                    family: true,
                    available: () => true,
                    skip: false,
                }
            ]
        }
    ]
}
  


 const getFieldsByAttributeName = (attributeName: string) => {
     return data.fields.filter((elemento) => elemento.attributeName === attributeName); 
 }

 const getAttributeNames = () => {
    return data.fields.map((elemento) => elemento.attributeName);
}

const attributeName = getAttributeNames();

let elemento3Array:string[] = [];
let elemento2Array:typeof elemento3Array[] = [];

attributeName.map(elemento => {
    const fieldsByAttributeName = getFieldsByAttributeName(elemento);
    let x = 0;
    let y = 0;
    fieldsByAttributeName.forEach(elemento2 => {
        elemento2.props.forEach(elemento3 => {
            elemento3Array.push(elemento3.id); 
        })
        elemento2Array.push(elemento3Array)
        elemento3Array = [];
    })
})

const limits:number[] = elemento2Array.map(elemento => elemento.length);


limits.forEach((elemento, index) => {

    elemento2Array[index].forEach((elemento2, index2) => {
        if(index2 === elemento - 1){
            console.log(elemento2)
        }else{
            console.log(elemento2 + "-")
            if(index2 === elemento - 1){
                console.log(elemento2)
            }
        }
    })
})








/*

const brandsFiltered = brands[0].props.filter((element) => {
    // element.family !== true || element.skip === true  VER ESTOS CASOS
    if(element.available !== true ){
        
    }
    return element;
});



/*

let tokens: string[][] = [];
tokens.push(["personal", "flow"]);
tokens.push(["dark", "light"]);
tokens.push(["primary", "secondary", "tertiary"]);



const iterableTokens = (tokens: string[][]|string[], prev: string) => {
    tokens.forEach((token, index) => {
        if(Array.isArray(token)){
            iterableTokens(token, prev + token[index])
        }else{
            console.log(prev);
        }
    })
}

iterableTokens(tokens, "");

/*
tokens.forEach((token, index) => {
    //console.log(token);
    //console.log(index);
    token.forEach((token2, index2) => {
        console.log(token + token2);
        //console.log(index2);
    })
})

/*const createValueToken = (prev: string) => {


}





console.log(tokens);

/*

SEGUIR POR ACA, que POR ACA VIENE EL TEMA
interface ComponentNameType {
    componentName?: string;
}
const getToken = (componentName: ComponentNameType) => {
    let tokens = [[], [], [], [], [], [], []];
    let token = "";
    const {componentName: componentNameValue} = componentName;
    const component = components.filter((elemento) => elemento.component === componentNameValue);
    component[0].fields.forEach((fields) => {
        //fields.attributeName === 
        fields.props.forEach((props) => {
            console.log(props)
            /*if(props.available !== true){
                if(props.family !== true){
                    token = token + props.id + "-";
                }
                token = token + props.id + "-";
            } * / 
        })

    })
    /* 
    console.log(component);
    =>
    [
        {
            component: 'badge',
            fields: [ [Object], [Object], [Object], [Object] ]
        }
    ]
    */

    
    //getToken();
    
    //return token.slice(0, -1);
/*}

getToken({componentName: "badge"});


/*
<Badge token="personal-light-primary" />



/*
const dias = [{id: "lunes", visible: true}, {id: "martes", visible: false}, {id: "miercoles", visible: true}, {id: "jueves", visible: false}, {id: "viernes", visible: false}, {id: "sabado", visible: true}, {id: "domingo", visible: true}  ]
const primerosDias = ["1", "2", "3"]
const segundosDias = ["4", "5", "6"]

dias.forEach((dia) => {
    primerosDias.forEach((primerDia) => {
        segundosDias.forEach((segundoDia) => {
            if(dia.visible === true){
                console.log(dia.id +"-"+primerDia, segundoDia)
            }
        })
    })
})

// getToken("badge") => "badge-personal-dark-primary-standard"
// getToken("button") => "button-primary-standard"
// getToken("input") => "input-primary-standard"
// getToken("checkbox") => "checkbox-primary-standard"
// getToken("radio") => "radio-primary-standard"

// Si el componente no existe, devolver un string vacío.
// getToken("badge") => "badge-personal-dark-primary-standard"
/*
const getToken = (componentName: string) => {
    let token = "";
    const component = components.filter((elemento) => elemento.component === componentName);
    if(component.length === 0){
        return "";
    }else{
        component[0].fields.forEach((fields) => {
            fields.props.forEach((props) => {
                if(props.available !== true){
                    if(props.family !== true){
                        token = token + props.id + "-";
                    }
                    token = token + props.id + "-";
                }
            })

        })
        token +="\n"
    }
    return token.slice(0, -1);
}

const token = getToken("badge");
console.log(token);
 */

/*
let token = "";

components.forEach((component) => {
    component.fields.forEach((fields) => {
        fields.props.forEach((props) => {
            // VERLO DESPUES
            if(props.family === true){
                token = token + props.id + "-";
            }
            if(typeof props.available === "function"){
                const isAvailable = props.available();
                if(isAvailable === true){
                    //console.log( "component.component  ", component.component  )
                    //console.log( "fields.attributeName  ", fields.attributeName  )
                    //console.log( "props.id  ", props.id  )
                    //console.log(component.component+"-"+props.id)
                    

                }
            }
        })
    })
})













/*
const componentName = components[0].component; // [0] es el badge
const brands = components[0].fields.filter((elemento) => elemento.attributeName === "brand");
const brandsFiltered = brands[0].props.filter((element) => {
    // element.family !== true || element.skip === true  VER ESTOS CASOS
    if(element.available !== true ){
        
    }
    return element;
});

const isAvailableTheme = (idValue) => {
    const {id, available} = brands[0].props[0];
    if(brands[0].props[0].id === "personal"){
        return false;
    }else{
        return true;
    }
}


const nameType = componentName+"Type"


/*
const token = componentName + "-" + brands[0].attributeName + "-" + brands[0].props[0].id;

brands.forEach((elemento) => {
    elemento.props.forEach((elemento2) => {
        if(elemento2.available === "true"){
            elemento2.skip = false;
        }else{
            elemento2.skip = true;
        }
    })
})

*/