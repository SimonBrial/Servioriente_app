/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

import { ListDBProps } from "@/interface/interface";

/* type ObjProperty = {
  [key: string]: any;
}; */

export const filterDataByFields = (
  dataArray: ListDBProps[],
  propertiesArray: string[],
): ListDBProps[] => {
  return dataArray.map((data: ListDBProps) => {
    let newObj: Partial<ListDBProps> = {};
    propertiesArray.forEach((property: string) => {
      if (data.hasOwnProperty(property)) {
        newObj[property as keyof ListDBProps] = data[property];
      }
    });
    return newObj as ListDBProps;
  });
};

/* function filtrarPropiedades(arreglo, propiedades) {
  return arreglo.map((obj) => {
    let nuevoObjeto = {};
    propiedades.forEach((propiedad) => {
      if (obj.hasOwnProperty(propiedad)) {
        nuevoObjeto[propiedad] = obj[propiedad];
      }
    });
    return nuevoObjeto;
  });
}

// Ejemplo de uso:
const datos = [
  { id: 1, nombre: "Juan", edad: 30, apellido: "Pérez" },
  { id: 2, nombre: "Ana", edad: 25, apellido: "García" },
  { id: 3, nombre: "Luis", edad: 28, apellido: "Martínez" },
];

const propiedadesADesplegar = ["id", "nombre", "edad"];
const resultado = filtrarPropiedades(datos, propiedadesADesplegar);

console.log(resultado); */
