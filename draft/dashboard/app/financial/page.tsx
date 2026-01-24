'use client';

import { useState } from 'react';

// 2025년 2월~12월 재무 예측 (목표: 연 매출 2억, 2월 말 현금흐름 양전환)
const MONTHLY_DATA = [
  { month: '2월', revenue: 5000000, cost: 3000000, customers: 3, avgDeal: 1666667, note: '첫 프로젝트 3건 시작' },
  { month: '3월', revenue: 10000000, cost: 4000000, customers: 5, avgDeal: 2000000, note: '입소문 + 레퍼럴' },
  { month: '4월', revenue: 15000000, cost: 5000000, customers: 6, avgDeal: 2500000, note: 'PMF 검증' },
  { month: '5월', revenue: 18000000, cost: 6000000, customers: 7, avgDeal: 2571429, note: '프로세스 안정화' },
  { month: '6월', revenue: 20000000, cost: 7000000, customers: 8, avgDeal: 2500000, note: '팀 확장 시작' },
  { month: '7월', revenue: 22000000, cost: 8000000, customers: 9, avgDeal: 2444444, note: '마케팅 강화' },
  { month: '8월', revenue: 20000000, cost: 8000000, customers: 8, avgDeal: 2500000, note: '여름 비수기' },
  { month: '9월', revenue: 25000000, cost: 9000000, customers: 10, avgDeal: 2500000, note: '하반기 시작' },
  { month: '10월', revenue: 25000000, cost: 9000000, customers: 10, avgDeal: 2500000, note: '안정 성장' },
  { month: '11월', revenue: 20000000, cost: 8000000, customers: 8, avgDeal: 2500000, note: '연말 준비' },
  { month: '12월', revenue: 20000000, cost: 8000000, customers: 8, avgDeal: 2500000, note: '연말 정산' },
];

// 누적 계산
function calculateCumulative(data: typeof MONTHLY_DATA) {
  let cumRevenue = 0;
  let cumProfit = 0;
  let cumCashFlow = -5000000; // 초기 투자 (운영자금)
  
  return data.map((row) => {
    cumRevenue += row.revenue;
    const profit = row.revenue - row.cost;
    cumProfit += profit;
    cumCashFlow += profit;
    
    return {
      ...row,
      profit,
      cumRevenue,
      cumProfit,
      cashFlow: profit,
      cumCashFlow,
    };
  });
}

const formatKRW = (num: number) => {
  if (num >= 100000000) return `${(num / 100000000).toFixed(1)}억`;
  if (num >= 10000000) return `${(num / 10000).toFixed(0)}만`;
  if (num >= 10000) return `${(num / 10000).toFixed(0)}만`;
  return num.toLocaleString();
};

const formatFullKRW = (num: number) => {
  return num.toLocaleString() + '원';
};

export default function FinancialPage() {
  const [showDetails, setShowDetails] = useState(false);
  const data = calculateCumulative(MONTHLY_DATA);
  
  const totalRevenue = data[data.length - 1].cumRevenue;
  const totalProfit = data[data.length - 1].cumProfit;
  const avgMonthlyRevenue = totalRevenue / data.length;
  const goalRevenue = 200000000;
  const goalAchievement = (totalRevenue / goalRevenue * 100).toFixed(1);
  
  // 현금흐름 양전환 시점 찾기
  const breakEvenMonth = data.find(d => d.cumCashFlow > 0)?.month || 'N/A';
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="text-6xl">💰</span>
            <h1 className="text-5xl font-bold text-white">
              Financial Projection 2025
            </h1>
          </div>
          <p className="text-xl text-blue-200 mt-4 max-w-2xl mx-auto">
            luerre AI 연간 재무 계획 - 목표 매출 2억원
          </p>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* 연 매출 목표 */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-100 text-sm font-medium">연 매출 목표</span>
              <span className="text-3xl">🎯</span>
            </div>
            <div className="text-4xl font-bold mb-1">2억원</div>
            <div className="text-green-200 text-sm">
              달성률: {goalAchievement}%
            </div>
            <div className="mt-3 bg-green-800/50 rounded-full h-3">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${Math.min(100, parseFloat(goalAchievement))}%` }}
              />
            </div>
          </div>

          {/* 예상 매출 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100 text-sm font-medium">예상 총 매출</span>
              <span className="text-3xl">📈</span>
            </div>
            <div className="text-4xl font-bold mb-1">{formatKRW(totalRevenue)}</div>
            <div className="text-blue-200 text-sm">
              월평균: {formatKRW(avgMonthlyRevenue)}
            </div>
          </div>

          {/* 예상 순이익 */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-100 text-sm font-medium">예상 순이익</span>
              <span className="text-3xl">💎</span>
            </div>
            <div className="text-4xl font-bold mb-1">{formatKRW(totalProfit)}</div>
            <div className="text-purple-200 text-sm">
              이익률: {(totalProfit / totalRevenue * 100).toFixed(1)}%
            </div>
          </div>

          {/* 현금흐름 양전환 */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-100 text-sm font-medium">현금흐름 양전환</span>
              <span className="text-3xl">🔥</span>
            </div>
            <div className="text-4xl font-bold mb-1">{breakEvenMonth}</div>
            <div className="text-orange-200 text-sm">
              목표: 2월 말
            </div>
          </div>
        </div>

        {/* 손익계산서 스타일 테이블 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white">📊 월별 손익계산서 (P&L)</h2>
            <p className="text-blue-100 mt-1">2025년 2월 ~ 12월</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">월</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">매출</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">비용</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">순이익</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">누적 매출</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-gray-700">현금흐름</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">고객수</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, idx) => (
                  <tr key={row.month} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-bold text-gray-900">{row.month}</td>
                    <td className="px-6 py-4 text-right text-green-600 font-medium">
                      {formatFullKRW(row.revenue)}
                    </td>
                    <td className="px-6 py-4 text-right text-red-500 font-medium">
                      -{formatFullKRW(row.cost)}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${row.profit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                      {row.profit >= 0 ? '+' : ''}{formatFullKRW(row.profit)}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {formatKRW(row.cumRevenue)}
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${row.cumCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {row.cumCashFlow >= 0 ? '✅ ' : '⚠️ '}{formatKRW(row.cumCashFlow)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {row.customers}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{row.note}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100">
                <tr className="font-bold">
                  <td className="px-6 py-4 text-gray-900">합계</td>
                  <td className="px-6 py-4 text-right text-green-700">{formatFullKRW(totalRevenue)}</td>
                  <td className="px-6 py-4 text-right text-red-600">-{formatFullKRW(totalRevenue - totalProfit)}</td>
                  <td className="px-6 py-4 text-right text-blue-700">{formatFullKRW(totalProfit)}</td>
                  <td className="px-6 py-4 text-right">-</td>
                  <td className="px-6 py-4 text-right text-green-700">{formatKRW(data[data.length-1].cumCashFlow)}</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* 가정 및 전제 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
            <h2 className="text-2xl font-bold text-white">📋 핵심 가정</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">매출 가정</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  평균 프로젝트 단가: 200~300만원
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  월 신규 고객: 3~10건
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  리피트 고객 비율: 30%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  결제 조건: 착수금 50% + 완료금 50%
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">비용 가정</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  인건비: 매출의 40~50%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  인프라/도구: 월 50~100만원
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  마케팅: 월 50만원 (초기)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  초기 운영자금: 500만원
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 리스크 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
            <h2 className="text-2xl font-bold text-white">⚠️ 리스크 요인</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold text-red-700">High Risk</h4>
                <p className="text-gray-600 text-sm mt-1">첫 고객 확보 지연</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold text-orange-700">Medium Risk</h4>
                <p className="text-gray-600 text-sm mt-1">프로젝트 지연/취소</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-bold text-yellow-700">Low Risk</h4>
                <p className="text-gray-600 text-sm mt-1">경쟁사 진입</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-50 transition"
          >
            ← Command Dashboard
          </a>
          <a 
            href="/buyback" 
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow hover:bg-gray-50 transition"
          >
            ⏰ Buy Back Time
          </a>
        </div>
      </div>
    </main>
  );
}
