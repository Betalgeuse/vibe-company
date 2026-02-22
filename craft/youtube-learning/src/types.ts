 export interface Channel {
   id: string;
   name: string;
   youtubeChannelId: string;
   category: string; // 투자, 경제, 시사, 인터뷰
   isActive: boolean;
   createdAt: string;
 }
 
 export interface Video {
   id: string;
   channelId: string;
   youtubeVideoId: string;
   title: string;
   publishedAt: string;
   duration: string;
   thumbnailUrl: string;
   collectedAt: string;
   isSummarized: boolean;
 }
 
 export interface TranscriptSegment {
   text: string;
   offset: number;
   duration: number;
 }
 
 export interface VideoSummary {
   videoId: string;
   coreSummary: string;
   insights: string[];
   keywords: string[];
   timestamps: TimestampNote[];
   createdAt: string;
 }
 
 export interface TimestampNote {
   time: string; // "03:25"
   label: string;
 }
 
 export interface WeeklyReport {
   id: string;
   weekStart: string;
   weekEnd: string;
   summaries: VideoSummary[];
   generatedAt: string;
 }
