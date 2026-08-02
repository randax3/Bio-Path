import { createClient } from '@supabase/supabase-js';

// القيم تُقرأ من متغيّرات البيئة (.env)، فلا تُكتب المفاتيح داخل الكود
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

export const isSupabaseReady = Boolean(url && key);
export const supabase = isSupabaseReady ? createClient(url, key) : null;
