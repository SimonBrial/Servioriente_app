"use client";

import { Checkbox, Stack } from "@mantine/core";
import { TitleLayout } from "./TitleLayout";
// import { CalendarInput } from "../inputs/CalendarInput";
import { ItemFilterLayout } from "./ItemFilterLayout";
import { useDataBaseStore } from "@/store/db-store";

export function GeneralFilterLayout(): JSX.Element {
  const { fnSetField, filterFields } = useDataBaseStore();
  // const [value, setValue] = useState<string[]>([]);
  const checkboxValues = [
    "nombre",
    "apellido",
    "vehiculo",
    "placa",
    "estado",
    "telefono",
    "correo",
    "status",
    "cumpleaños",
    "facebook",
    "instagram",
  ];
  // console.log(filterFields);
  return (
    <Stack
      gap={"xs"}
      styles={{
        root: { padding: "1rem" },
      }}
    >
      <TitleLayout title="Filtrar Categoria" color="" icon="" onText={false} />
      <Checkbox.Group
        value={filterFields}
        onChange={(filterFields) => fnSetField(filterFields)}
      >
        <Stack gap={"xs"}>
          {checkboxValues.map((item, index) => (
            <ItemFilterLayout label={item} key={index} />
          ))}
        </Stack>

        {/* <ItemFilterLayout label="Apellido" />
        <ItemFilterLayout label="Vehiculo" />
        <ItemFilterLayout label="Estado" />
        <ItemFilterLayout label="Telefono" />
        <ItemFilterLayout label="Red Social" />
        <ItemFilterLayout label="Estatus" /> */}
        {/* <CalendarInput title="Desde" width="200px" withTitle /> */}
      </Checkbox.Group>
    </Stack>
  );
}

{
  /*
function filtrarPropiedades(arreglo, propiedades) {
  return arreglo.map(obj => {
    let nuevoObjeto = {};
    propiedades.forEach(propiedad => {
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
  { id: 3, nombre: "Luis", edad: 28, apellido: "Martínez" }
];

const propiedadesADesplegar = ["id", "nombre", "edad"];
const resultado = filtrarPropiedades(datos, propiedadesADesplegar);

console.log(resultado);
*/
}
