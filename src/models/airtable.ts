export interface TimeSlotInfo {
  id: string;
  start: string;
  speakerFavourites?: string;
  title: string;
  room: string;
  speakerImage?: {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
  }[];
  description?: string;
  speakerBio?: string;
  speakerRecreation?: string;
  duration: number;
  end: string;
  date: string;
  userIds?: string;
  speakerConsent?: boolean;
  speakerImageUrl?: string;
  email?: string;
  type: string;
}

export interface TimeRecord {
  id: string;
  createdTime: Date;
  fields: TimeSlotInfo;
}

enum rooms {
  SDP = "Salone dei Papi",
  SLO = "Sala Lambertini + Odescalchi",
  SOA = "Sala Ottoboni + Aldobrandini",
  SPDR = "Sala Piccolomini + Della Rovere",
  SC = "Sala Chigi",
}
