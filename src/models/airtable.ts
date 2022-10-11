export interface TimeSlotInfo {
  start: string;
  title: string;
  room: string;
  description?: string;
  copresenters?: string;
  workshopMax?: number;
  language: string;
  speaker_bio?: string;
  speaker_company: string;
  duration: number;
  end: string;
  date: string;
  userIds?: string;
  speaker_consent?: boolean;
  speaker_image_url?: string;
  email?: string;
  type: string;
  required_knowledge?: string;
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
