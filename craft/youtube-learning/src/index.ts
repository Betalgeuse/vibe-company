 import { Store } from './modules/store';
 import { YoutubeCollector } from './modules/youtube-collector';
 import { TranscriptFetcher } from './modules/transcript-fetcher';
 import { AiSummarizer } from './modules/ai-summarizer';
 import { ReportGenerator } from './modules/report-generator';
 import * as path from 'path';
 
 const command = process.argv[2] || 'demo';
 
 async function runCollect() {
   const apiKey = process.env.YOUTUBE_API_KEY;
   if (!apiKey) { console.error('YOUTUBE_API_KEY 환경변수를 설정하세요.'); process.exit(1); }
   const collector = new YoutubeCollector(apiKey);
   const channels = Store.getChannels();
   const videos = await collector.collectAll(channels);
   const added = Store.addVideos(videos);
   console.log(`[완료] ${added}개 신규 영상 저장`);
 }
 
 async function runSummarize() {
   const openaiKey = process.env.OPENAI_API_KEY;
   if (!openaiKey) { console.error('OPENAI_API_KEY 환경변수를 설정하세요.'); process.exit(1); }
   const fetcher = new TranscriptFetcher();
   const summarizer = new AiSummarizer(openaiKey);
   const videos = Store.getVideos().filter(v => !v.isSummarized);
   console.log(`[요약] ${videos.length}개 미요약 영상 처리 시작`);
   for (const video of videos) {
     try {
       const segments = await fetcher.fetch(video.youtubeVideoId);
       if (segments.length === 0) { console.warn(`  - ${video.title}: 자막 없음, 건너뜀`); continue; }
       const summary = await summarizer.summarize(video.id, video.title, segments);
       Store.addSummary(summary);
       video.isSummarized = true;
       console.log(`  - ${video.title}: 요약 완료`);
     } catch (e: any) {
       console.error(`  - ${video.title}: 실패 - ${e.message}`);
     }
   }
   Store.saveVideos(Store.getVideos());
   console.log('[완료] 요약 처리 끝');
 }
 
 async function runReport() {
   const reportDir = path.join(__dirname, '..', 'reports');
   const generator = new ReportGenerator(reportDir);
   const videos = Store.getVideos();
   const summaries = Store.getSummaries();
   const channels = Store.getChannels();
   const now = new Date();
   const weekEnd = now.toISOString().slice(0, 10);
   const weekStartDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
   const weekStart = weekStartDate.toISOString().slice(0, 10);
   const filepath = generator.generate(videos, summaries, channels, weekStart, weekEnd);
   console.log(`[완료] 리포트 생성: ${filepath}`);
 }
 
 async function runDemo() {
   console.log('=== 데모 데이터 시딩 ===');
   require('./seed-demo');
   console.log('\n=== 리포트 생성 ===');
   await runReport();
   console.log('\n데모 완료! reports/ 폴더의 HTML을 브라우저에서 열어보세요.');
 }
 
 async function main() {
   switch (command) {
     case 'collect': await runCollect(); break;
     case 'summarize': await runSummarize(); break;
     case 'report': await runReport(); break;
     case 'demo': await runDemo(); break;
     default:
       console.log(`
 YouTube Learning Report MVP
 
 사용법:
   npm run collect    - 유튜브 채널에서 최신 영상 수집
   npm run summarize  - 수집된 영상 AI 요약
   npm run report     - 주간 리포트 HTML 생성
   npm run demo       - 데모 데이터로 리포트 생성
       `);
   }
 }
 
 main().catch(e => { console.error(e); process.exit(1); });
