export interface TimeSlotInfo {
  start: string;
  title: string;
  room: string;
  description?: string;
  copresenters?: string;
  workshopMax?: number;
  language: string;
  speakerBio?: string;
  speakerCompany: string;
  duration: number;
  end: string;
  date: string;
  userIds?: string;
  speakerConsent?: boolean;
  speakerImageUrl?: string;
  email?: string;
  type: string;
  requiredKnowledge?: string;
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
