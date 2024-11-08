// index.ts (エッジ関数のファイル)
import { corsHeaders } from "../_shared/cors.ts";

console.log(`Function "browser-with-cors" up and running!`);

Deno.serve(async (req) => {
  // CORSプリフライトリクエスト (OPTIONSリクエスト) を処理
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name } = await req.json();
    const data = {
      message: `Hello ${name}!`,
    };

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    // error を Error 型にキャストして message にアクセス
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
