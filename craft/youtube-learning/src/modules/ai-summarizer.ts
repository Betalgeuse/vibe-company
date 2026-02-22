 import OpenAI from 'openai';
 import { TranscriptSegment, VideoSummary, TimestampNote } from '../types';
 
 export class AiSummarizer {
   private client: OpenAI;
 
   constructor(apiKey: string) {
     this.client = new OpenAI({ apiKey });
   }
 
   async summarize(videoId: string, title: string, segments: TranscriptSegment[]): Promise<VideoSummary> {
     const fullText = segments.map(s => s.text).join(' ');
     const timestampedText = segments
       .filter((_, i) => i % 10 === 0)
       .map(s => {
         const m = Math.floor(s.offset / 1000 / 60);
         const sec = Math.floor((s.offset / 1000) % 60);
         return `[${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}] ${s.text}`;
       })
       .join('\n');
 
     const prompt = `당신은 유튜브 영상 요약 전문가입니다.
 
 영상 제목: "${title}"
 
 아래 자막 내용을 분석하여 JSON 형식으로 응답해주세요:
 
 {
   "coreSummary": "핵심 내용 3~5문장 요약",
   "insights": ["인사이트 1", "인사이트 2", "인사이트 3"],
   "keywords": ["키워드1", "키워드2", "키워드3", "키워드4", "키워드5"],
   "timestamps": [
     {"time": "MM:SS", "label": "해당 시점의 핵심 주제"}
   ]
 }
 
 --- 자막 (타임스탬프 포함) ---
 ${timestampedText.slice(0, 8000)}
 
 --- 전체 자막 텍스트 ---
 ${fullText.slice(0, 4000)}`;
 
     const response = await this.client.chat.completions.create({
       model: 'gpt-4o-mini',
       messages: [{ role: 'user', content: prompt }],
       response_format: { type: 'json_object' },
       temperature: 0.3,
     });
 
     const content = response.choices[0]?.message?.content || '{}';
     const parsed = JSON.parse(content);
 
     return {
       videoId,
       coreSummary: parsed.coreSummary || '요약 실패',
       insights: parsed.insights || [],
       keywords: parsed.keywords || [],
       timestamps: (parsed.timestamps || []) as TimestampNote[],
       createdAt: new Date().toISOString(),
     };
   }
 }
