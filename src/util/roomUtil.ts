export function getRoomName(room: string) {
  switch (room) {
    case "SDP":
      return "Salone dei Papi";
    case "SLO":
      return "Lambertini + Odescalchi";
    case "SOA":
      return "Ottoboni + Aldobrandini";
    case "SPDR":
      return "Piccolomini + Della Rovere";
    case "SC":
      return "Chigi";
    default:
      return "";
  }
}
