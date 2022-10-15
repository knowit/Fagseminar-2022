/// <reference types="astro/astro-jsx" />

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
  pic?: astroHTML.JSX.ImgHTMLAttributes;
}

export interface TimeRecord {
  id: string;
  createdTime: Date;
  fields: TimeSlotInfo;
}
