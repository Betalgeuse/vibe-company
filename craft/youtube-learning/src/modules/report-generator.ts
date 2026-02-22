 import { Video, VideoSummary, WeeklyReport, Channel } from '../types';
 import * as fs from 'fs';
 import * as path from 'path';
 
 export class ReportGenerator {
   private outputDir: string;
 
   constructor(outputDir: string) {
     this.outputDir = outputDir;
     if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
   }
 
   generate(
     videos: Video[],
     summaries: VideoSummary[],
     channels: Channel[],
     weekStart: string,
     weekEnd: string
   ): string {
     const channelMap = new Map(channels.map(c => [c.id, c]));
     const summaryMap = new Map(summaries.map(s => [s.videoId, s]));
 
     const grouped = new Map<string, { video: Video; summary: VideoSummary }[]>();
     for (const v of videos) {
       const s = summaryMap.get(v.id);
       if (!s) continue;
       const cat = channelMap.get(v.channelId)?.category || '기타';
       if (!grouped.has(cat)) grouped.set(cat, []);
       grouped.get(cat)!.push({ video: v, summary: s });
     }
 
     const allKeywords = summaries.flatMap(s => s.keywords);
     const kwCount = new Map<string, number>();
     allKeywords.forEach(k => kwCount.set(k, (kwCount.get(k) || 0) + 1));
     const topKeywords = [...kwCount.entries()]
       .sort((a, b) => b[1] - a[1])
       .slice(0, 10)
       .map(([k]) => k);
 
     const html = this.buildHtml(grouped, channelMap, topKeywords, weekStart, weekEnd, videos.length);
     const filename = `report-${weekStart}-${weekEnd}.html`;
     const filepath = path.join(this.outputDir, filename);
     fs.writeFileSync(filepath, html, 'utf-8');
     console.log(`[Report] 생성 완료: ${filepath}`);
     return filepath;
   }
 
   private buildHtml(
     grouped: Map<string, { video: Video; summary: VideoSummary }[]>,
     channelMap: Map<string, Channel>,
     topKeywords: string[],
     weekStart: string,
     weekEnd: string,
     totalVideos: number
   ): string {
     let sections = '';
     for (const [category, items] of grouped) {
       let cards = '';
       for (const { video, summary } of items) {
         const chName = channelMap.get(video.channelId)?.name || '알 수 없음';
         const tsHtml = summary.timestamps
           .map(t => `<a href="https://youtube.com/watch?v=${video.youtubeVideoId}&t=${this.timeToSeconds(t.time)}" target="_blank" class="ts">${t.time}</a> ${t.label}`)
           .join('<br>');
         cards += `
           <div class="card">
             <div class="card-header">
               <img src="${video.thumbnailUrl}" alt="" class="thumb">
               <div>
                 <h3><a href="https://youtube.com/watch?v=${video.youtubeVideoId}" target="_blank">${video.title}</a></h3>
                 <span class="meta">${chName} · ${video.publishedAt.slice(0, 10)}</span>
               </div>
             </div>
             <p class="summary">${summary.coreSummary}</p>
             <div class="section-label">핵심 인사이트</div>
             <ul>${summary.insights.map(i => `<li>${i}</li>`).join('')}</ul>
             <div class="section-label">키워드</div>
             <div class="keywords">${summary.keywords.map(k => `<span class="kw">${k}</span>`).join('')}</div>
             <div class="section-label">타임스탬프</div>
             <div class="timestamps">${tsHtml || '없음'}</div>
           </div>`;
       }
       sections += `<div class="category"><h2>${category} (${items.length})</h2>${cards}</div>`;
     }
 
     return `<!DOCTYPE html>
 <html lang="ko">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>주간 학습 리포트 | ${weekStart} ~ ${weekEnd}</title>
 <style>
 * { margin: 0; padding: 0; box-sizing: border-box; }
 body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f0f14; color: #e0e0e0; line-height: 1.6; }
 .container { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
 .hero { text-align: center; margin-bottom: 48px; }
 .hero h1 { font-size: 2rem; color: #fff; margin-bottom: 8px; }
 .hero .period { color: #888; font-size: 0.95rem; }
 .stats { display: flex; gap: 16px; justify-content: center; margin: 24px 0; }
 .stat { background: #1a1a24; border: 1px solid #2a2a3a; border-radius: 12px; padding: 16px 24px; text-align: center; }
 .stat .num { font-size: 1.8rem; font-weight: 700; color: #6c63ff; }
 .stat .label { font-size: 0.8rem; color: #888; }
 .top-kw { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 16px 0 40px; }
 .top-kw span { background: #1e1e2e; border: 1px solid #3a3a5a; border-radius: 20px; padding: 6px 14px; font-size: 0.85rem; color: #a0a0ff; }
 .category h2 { font-size: 1.3rem; color: #8b83ff; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #2a2a3a; }
 .card { background: #16161e; border: 1px solid #2a2a3a; border-radius: 12px; padding: 24px; margin-bottom: 20px; transition: border-color 0.2s; }
 .card:hover { border-color: #6c63ff; }
 .card-header { display: flex; gap: 16px; margin-bottom: 16px; }
 .thumb { width: 160px; height: 90px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }
 .card h3 { font-size: 1.05rem; color: #fff; }
 .card h3 a { color: inherit; text-decoration: none; }
 .card h3 a:hover { color: #8b83ff; }
 .meta { font-size: 0.8rem; color: #888; }
 .summary { margin: 12px 0; color: #ccc; font-size: 0.95rem; }
 .section-label { font-size: 0.75rem; color: #6c63ff; text-transform: uppercase; letter-spacing: 1px; margin: 12px 0 6px; font-weight: 600; }
 ul { padding-left: 20px; }
 li { color: #bbb; font-size: 0.9rem; margin-bottom: 4px; }
 .keywords { display: flex; flex-wrap: wrap; gap: 6px; }
 .kw { background: #22223a; border-radius: 4px; padding: 3px 10px; font-size: 0.8rem; color: #a0a0ff; }
 .timestamps { font-size: 0.85rem; color: #999; }
 .ts { color: #6c63ff; text-decoration: none; font-weight: 600; }
 .ts:hover { text-decoration: underline; }
 footer { text-align: center; color: #555; font-size: 0.8rem; margin-top: 60px; }
 @media (max-width: 640px) { .card-header { flex-direction: column; } .thumb { width: 100%; height: auto; } .stats { flex-direction: column; align-items: center; } }
 </style>
 </head>
 <body>
 <div class="container">
   <div class="hero">
     <h1>주간 학습 리포트</h1>
     <div class="period">${weekStart} ~ ${weekEnd}</div>
     <div class="stats">
       <div class="stat"><div class="num">${totalVideos}</div><div class="label">영상 수</div></div>
       <div class="stat"><div class="num">${[...new Set([...grouped.keys()])].length}</div><div class="label">카테고리</div></div>
     </div>
     <div class="section-label" style="text-align:center">이번 주 핫 키워드</div>
     <div class="top-kw">${topKeywords.map(k => `<span>${k}</span>`).join('')}</div>
   </div>
   ${sections}
   <footer>Generated by YouTube Learning Report MVP</footer>
 </div>
 </body>
 </html>`;
   }
 
   private timeToSeconds(time: string): number {
     const [m, s] = time.split(':').map(Number);
     return (m || 0) * 60 + (s || 0);
   }
 }
