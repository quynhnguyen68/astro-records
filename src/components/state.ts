import { signal } from "@preact/signals";

export type PlayerTrack = {
  track: string;
  albumName: string;
  albumId: string;
  artist: string;
  imageUrl: string;
};

export const isPlaying = signal(false);
export const currentTrack = signal<PlayerTrack | null>(null);
