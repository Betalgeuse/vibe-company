 import { Channel, Video } from '../types';
 
 const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
 
 export class YoutubeCollector {
   private apiKey: string;
 
   constructor(apiKey: string) {
     this.apiKey = apiKey;
   }
 
   async fetchRecentVideos(channel: Channel, maxResults = 10): Promise<Video[]> {
     const searchUrl = `${YOUTUBE_API_BASE}/search?` +
       `key=${this.apiKey}` +
       `&channelId=${channel.youtubeChannelId}` +
       `&part=snippet` +
       `&order=date` +
       `&type=video` +
       `&maxResults=${maxResults}`;
 
     const res = await fetch(searchUrl);
     if (!res.ok) throw new Error(`YouTube API error: ${res.status} ${await res.text()}`);
     const data = await res.json();
 
     return (data.items || []).map((item: any) => ({
       id: item.id.videoId,
       channelId: channel.id,
       youtubeVideoId: item.id.videoId,
       title: item.snippet.title,
       publishedAt: item.snippet.publishedAt,
       duration: '',
       thumbnailUrl: item.snippet.thumbnails?.high?.url || '',
       collectedAt: new Date().toISOString(),
       isSummarized: false,
     }));
   }
 
   async collectAll(channels: Channel[]): Promise<Video[]> {
     const allVideos: Video[] = [];
     for (const ch of channels.filter(c => c.isActive)) {
       try {
         const videos = await this.fetchRecentVideos(ch);
         allVideos.push(...videos);
         console.log(`[Collect] ${ch.name}: ${videos.length}개 영상 수집`);
       } catch (e: any) {
         console.error(`[Collect] ${ch.name} 수집 실패: ${e.message}`);
       }
     }
     return allVideos;
   }
 }
