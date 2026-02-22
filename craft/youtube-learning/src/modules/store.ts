 import * as fs from 'fs';
 import * as path from 'path';
 import { Channel, Video, VideoSummary } from '../types';
 
 const DATA_DIR = path.join(__dirname, '..', '..', 'data');
 
 function ensureDir() {
   if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
 }
 
 function readJson<T>(file: string, fallback: T): T {
   const fp = path.join(DATA_DIR, file);
   if (!fs.existsSync(fp)) return fallback;
   return JSON.parse(fs.readFileSync(fp, 'utf-8'));
 }
 
 function writeJson(file: string, data: any) {
   ensureDir();
   fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), 'utf-8');
 }
 
 export const Store = {
   getChannels: (): Channel[] => readJson('channels.json', []),
   saveChannels: (data: Channel[]) => writeJson('channels.json', data),
 
   getVideos: (): Video[] => readJson('videos.json', []),
   saveVideos: (data: Video[]) => writeJson('videos.json', data),
   addVideos: (newVideos: Video[]) => {
     const existing = Store.getVideos();
     const ids = new Set(existing.map(v => v.youtubeVideoId));
     const unique = newVideos.filter(v => !ids.has(v.youtubeVideoId));
     Store.saveVideos([...existing, ...unique]);
     return unique.length;
   },
 
   getSummaries: (): VideoSummary[] => readJson('summaries.json', []),
   saveSummaries: (data: VideoSummary[]) => writeJson('summaries.json', data),
   addSummary: (s: VideoSummary) => {
     const existing = Store.getSummaries();
     Store.saveSummaries([...existing.filter(x => x.videoId !== s.videoId), s]);
   },
 };
