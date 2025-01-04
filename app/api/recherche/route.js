// /app/api/recherche/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  // Simuler une recherche dans une base de données
  const mockData = [
    "Professeur de mathématiques",
    "Professeur de français",
    "Professeur d'anglais",
    "Professeur de sciences",
  ];

  const results = mockData.filter((item) =>
    item.toLowerCase().includes(q.toLowerCase())
  );

  return new Response(JSON.stringify({ results }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}
