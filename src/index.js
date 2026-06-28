// Das ist die "Schaltzentrale" deiner Seite.
// Jede Anfrage (egal ob normale Seite oder API) kommt zuerst hier an.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Fall 1: Die Anfrage geht an /api/generate
    // -> Wir rufen Claude auf und verstecken dabei den API-Key
    if (url.pathname === "/api/generate" && request.method === "POST") {
      return handleGenerate(request, env);
    }

    // Fall 2: Alles andere (index.html, css/styles.css, Bilder, etc.)
    // -> Wir liefern einfach die normalen Dateien aus, wie bisher
    return env.ASSETS.fetch(request);
  },
};

async function handleGenerate(request, env) {
  try {
    const body = await request.json();
    const userPrompt = body.prompt;

    if (!userPrompt) {
      return new Response(
        JSON.stringify({ error: "Kein 'prompt' mitgeschickt." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Der geheime Key kommt aus den Cloudflare-Einstellungen (env),
    // steht NICHT in dieser Datei.
    const apiKey = env.ANTHROPIC_API_KEY;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system:
          "Du schreibst kurze, natürliche Texte auf Deutsch. " +
          "Vermeide typische KI-Phrasen wie 'Zudem', 'Darüber hinaus', " +
          "'In der heutigen digitalen Welt'. Schreib direkt und einfach, " +
          "wie ein Mensch es tun würde, keine Aufzählungen, keine Floskeln.",
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    const data = await response.json();
    const textAnswer = data.content?.[0]?.text || "Keine Antwort erhalten.";

    return new Response(JSON.stringify({ result: textAnswer }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Etwas ist schiefgelaufen: " + error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
