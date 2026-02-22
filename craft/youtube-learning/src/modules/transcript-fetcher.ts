 import { YoutubeTranscript } from 'youtube-transcript';
 import { TranscriptSegment } from '../types';
 
 export class TranscriptFetcher {
   async fetch(videoId: string): Promise<TranscriptSegment[]> {
     try {
       const items = await YoutubeTranscript.fetchTranscript(videoId, { lang: 'ko' });
       return items.map(item => ({
         text: item.text,
         offset: item.offset,
         duration: item.duration,
       }));
     } catch {
       try {
         const items = await YoutubeTranscript.fetchTranscript(videoId, { lang: 'en' });
         return items.map(item => ({
           text: item.text,
           offset: item.offset,
           duration: item.duration,
         }));
       } catch (e: any) {
         console.warn(`[Transcript] ${videoId} 자막 없음: ${e.message}`);
         return [];
       }
     }
   }
 
   mergeToText(segments: TranscriptSegment[]): string {
     return segments.map(s => s.text).join(' ');
   }
 
   formatTimestamp(seconds: number): string {
     const m = Math.floor(seconds / 60);
     const s = Math.floor(seconds % 60);
     return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
   }
 }
