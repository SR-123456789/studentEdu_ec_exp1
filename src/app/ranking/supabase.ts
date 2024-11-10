// supabase.ts
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// 環境変数を読み込む
dotenv.config();

// 環境変数から Supabase URL と KEY を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

// エラーチェック
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing in .env file");
}

// Supabase クライアントを作成
export const supabase = createClient(supabaseUrl, supabaseKey);
