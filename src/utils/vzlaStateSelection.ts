/* eslint-disable array-callback-return */
import { VenezuelaStates } from "../data/venezuela";

export function getVenezuelaState(countryState: string): string[] {
  let municipiosArray: string[] = [];
  if (VenezuelaStates !== undefined) {
    for (let i = 0; i < VenezuelaStates.length; i++) {
      if (
        VenezuelaStates[i].estado.toLocaleLowerCase() ===
        countryState.toLocaleLowerCase()
      ) {
        municipiosArray = VenezuelaStates[i].municipios.map(
          (municipio, index) => {
            return municipio.municipio;
          },
        );
      }
    }
  }
  return municipiosArray;
}
