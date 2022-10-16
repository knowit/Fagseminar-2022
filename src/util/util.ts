import type { TimeRecord, TimeSlotInfo } from "../models/airtable";
import speakerPhotosJson from "../json/speaker_photos_new.json";

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

export function getNiceType(type: string): string {
  switch (type) {
    case "lightningTalk":
      return "Lyntale";
    case "talk":
      return "Foredrag";
    case "interactiveTalk":
      return "Interaktivt Foredrag";
    case "workshop":
      return "Workshop";
    case "discussion":
      return "Diskusjons gruppe";
    case "other":
      return "Other";
    default:
      return "";
  }
}

export function firstLetterUppercase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getImageUrl(slot: TimeRecord) {
  const speakerPhoto = speakerPhotosJson.find(
    (photo) => photo.apiID === slot.id
  );

  return speakerPhoto != null ? speakerPhoto.photoName : "";
}

export function getSpeakerPhoto(slot: TimeRecord) {
  return speakerPhotosJson.find((photo) => photo.apiID === slot.id);
}

export function getRowAndCol(
  slot: TimeRecord,
  startTimes: string[],
  rooms: string[]
) {
  return [
    rooms.findIndex((value) => slot.fields.room === value) + 1, //col
    startTimes.findIndex((value) => slot.fields.start === value) + 1, //row
  ];
}

export function uniqueFilter(value: any, index: any, self: any[]) {
  return self.indexOf(value) === index;
}

export function applicableRooms(slots: TimeRecord[]) {
  return slots.map((value) => value.fields.room).filter(uniqueFilter);
}

export function applicableStartTimes(slots: TimeRecord[]) {
  return slots.map((value) => value.fields.start).filter(uniqueFilter);
}
