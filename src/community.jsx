import React, { useState, useEffect } from 'react';
import { specialties } from './quizData.js';
import { supabase, isSupabaseReady } from './supabaseClient.js';

export const TELEGRAM_URL = 'https://t.me/+rjYqineVlf8xMzJk';

const EM = '#10B981', EMD = '#059669', EML = '#ECFDF5';
const PUR = '#7C3AED', PURD = '#6D28D9', PURL = '#F5F0FF';

const TYPES_AR = ['تدريب', 'بحث', 'مسابقة', 'منحة', 'تطوّع', 'دورة', 'إعلان عام'];
const TYPES_EN = ['Internship', 'Research', 'Competition', 'Scholarship', 'Volunteer', 'Course', 'Announcement'];

const STR = {
  ar: {
    title: 'مجتمع Bio Path', intro: 'الطلاب يتشاركون الفرص ويوصلون لبعض، من جميع الجامعات',
    tgTitle: 'قروب Bio Path على تلجرام', tgDesc: 'تحديثات الفرص والمسارات أول بأول، ونقاش مباشر', tgBtn: 'انضم للقروب',
    boardTitle: 'لوحة الفرص', boardSub: 'فرص مرتبطة بالتخصصات، وتظهر أيضاً داخل صفحة كل تخصص',
    annTitle: 'لوحة الإعلانات', annSub: 'فرص وإعلانات عامة غير مرتبطة بتخصص معيّن',
    contribTitle: 'شكراً للمساهمين', contribSub: 'الطلاب اللي أثروا الموقع بمشاركاتهم (من اختاروا يظهرون بأسمائهم)',
    all: 'الكل', interested: 'مهتم', shareBtn: '＋ شارك فرصة تعرفها', by: 'شاركها', anon: 'مشارك',
    formHint: 'لو ربطت الفرصة بتخصص، بتظهر داخل صفحة ذاك التخصص. لو خليتها «عامة» بتظهر في لوحة الإعلانات فقط.',
    fTitle: 'عنوان الفرصة', fType: 'النوع', fSpecialty: 'التخصص المرتبط', fNone: 'غير مرتبط (يظهر في الإعلانات)',
    fDeadline: 'الموعد / آخر أجل', fDesc: 'وصف مختصر', fName: 'اسمك', fUni: 'جامعتك', optional: '(اختياري)',
    submit: 'أرسل للمراجعة', sending: 'جارٍ الإرسال...',
    okMsg: '✅ شكراً لك! مشاركتك وصلت وهي الآن قيد المراجعة، وبتظهر بعد اعتمادها للتأكد من دقتها.',
    errMsg: 'صار خطأ أثناء الإرسال، حاول مرة ثانية.', needTitle: 'اكتب عنوان الفرصة أول.',
    loading: 'جارٍ التحميل...', empty: 'ما فيه فرص معتمدة بعد، كن أول من يشارك.',
    emptySpecialty: 'لا توجد فرص مضافة لهذا التخصص بعد.', notReady: 'صفحة المجتمع قيد الإعداد.',
    countLabel: 'مشاركة',
  },
  en: {
    title: 'Bio Path Community', intro: 'Students share opportunities and connect, from every university',
    tgTitle: 'Bio Path Telegram group', tgDesc: 'Live updates on opportunities and paths, and direct discussion', tgBtn: 'Join the group',
    boardTitle: 'Opportunities Board', boardSub: 'Tied to specialties, and also shown inside each specialty page',
    annTitle: 'Announcements', annSub: 'General opportunities not tied to a specialty',
    contribTitle: 'Thanks to contributors', contribSub: 'Students who enriched the site (those who chose to show their names)',
    all: 'All', interested: 'Interested', shareBtn: '＋ Share an opportunity', by: 'by', anon: 'Contributor',
    formHint: 'If you tie it to a specialty, it also appears on that specialty page. If left general, it appears only in Announcements.',
    fTitle: 'Opportunity title', fType: 'Type', fSpecialty: 'Related specialty', fNone: 'Not related (shows in Announcements)',
    fDeadline: 'Deadline', fDesc: 'Short description', fName: 'Your name', fUni: 'Your university', optional: '(optional)',
    submit: 'Send for review', sending: 'Sending...',
    okMsg: '✅ Thank you! Your submission was received and is under review. It will appear once approved.',
    errMsg: 'Something went wrong, please try again.', needTitle: 'Please enter a title first.',
    loading: 'Loading...', empty: 'No approved opportunities yet, be the first to share.',
    emptySpecialty: 'No opportunities added for this specialty yet.', notReady: 'Community page is being set up.',
    countLabel: 'shares',
  },
};

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const fmt = (n, lang) => (lang === 'ar' ? toAr(n) : String(n));
const specName = (id, lang) => {
  const s = specialties.find((x) => x.id === id);
  return s ? s[lang].name : '';
};
const specColor = (id) => {
  const s = specialties.find((x) => x.id === id);
  return s ? s.color : EMD;
};

function OppCard({ o, lang, onLike, liked }) {
  const s = STR[lang];
  const color = o.specialty ? specColor(o.specialty) : EMD;
  const tagText = o.specialty ? `${specName(o.specialty, lang)}${o.type ? ' · ' + o.type : ''}` : (o.type || s.annTitle);
  const who = o.author_name ? o.author_name : s.anon;
  return (
    <div style={{ border: '1px solid #e8efed', borderRadius: 16, padding: 15, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ alignSelf: 'flex-start', fontSize: 11, fontWeight: 800, padding: '4px 11px', borderRadius: 999, background: color + '1A', color }}>{tagText}</span>
      <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0A392B' }}>{o.title}</h3>
      {o.description ? <p style={{ fontSize: 13, color: '#38524a' }}>{o.description}</p> : null}
      {o.deadline ? <p style={{ fontSize: 12, color: '#6b807a', fontWeight: 600 }}>📅 {o.deadline}</p> : null}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 3 }}>
        <button onClick={() => onLike(o)} disabled={liked}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${liked ? EM : '#e2e8e6'}`, background: liked ? EML : '#fff', color: liked ? EMD : '#475f57', borderRadius: 999, padding: '5px 12px', fontSize: 12.5, fontWeight: 800, cursor: liked ? 'default' : 'pointer' }}>
          {liked ? '💚' : '🤍'} {s.interested} <b>{fmt(o.interested || 0, lang)}</b>
        </button>
        <span style={{ fontSize: 11, color: '#94a3a0', fontWeight: 700 }}>
          {s.by}: {who}{o.author_university ? ' · ' + o.author_university : ''}
        </span>
      </div>
    </div>
  );
}

export function CommunityPage({ lang = 'ar', t }) {
  const s = STR[lang];
  const types = lang === 'ar' ? TYPES_AR : TYPES_EN;
  const [opps, setOpps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState(() => new Set());
  const [form, setForm] = useState({ title: '', type: types[0], specialty: '', deadline: '', description: '', author_name: '', author_university: '' });
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState(null); // {kind:'ok'|'err', text}

  useEffect(() => {
    let alive = true;
    (async () => {
      if (!isSupabaseReady) { setLoading(false); return; }
      try {
        const { data, error } = await supabase.from('opportunities').select('*').eq('status', 'approved').order('created_at', { ascending: false });
        if (!alive) return;
        if (error) throw error;
        setOpps(data || []);
      } catch (e) {
        if (alive) setOpps([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const tagged = opps.filter((o) => o.specialty);
  const announcements = opps.filter((o) => !o.specialty);
  const presentSpecialties = specialties.filter((sp) => tagged.some((o) => o.specialty === sp.id));
  const shown = filter === 'all' ? tagged : tagged.filter((o) => o.specialty === filter);

  const contributors = (() => {
    const map = new Map();
    opps.forEach((o) => {
      if (!o.author_name) return;
      map.set(o.author_name, (map.get(o.author_name) || 0) + 1);
    });
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  })();

  const like = async (o) => {
    if (likedIds.has(o.id) || !isSupabaseReady) return;
    setLikedIds((prev) => new Set(prev).add(o.id));
    setOpps((prev) => prev.map((x) => (x.id === o.id ? { ...x, interested: (x.interested || 0) + 1 } : x)));
    try { await supabase.rpc('add_interest', { opp: o.id }); } catch (e) { /* تجاهل بصمت */ }
  };

  const submit = async () => {
    if (!form.title.trim()) { setMsg({ kind: 'err', text: s.needTitle }); return; }
    if (!isSupabaseReady) { setMsg({ kind: 'err', text: s.errMsg }); return; }
    setSending(true); setMsg(null);
    try {
      const row = {
        title: form.title.trim(),
        description: form.description.trim() || null,
        type: form.type || null,
        deadline: form.deadline.trim() || null,
        specialty: form.specialty || null,
        author_name: form.author_name.trim() || null,
        author_university: form.author_university.trim() || null,
      };
      const { error } = await supabase.from('opportunities').insert(row);
      if (error) throw error;
      setMsg({ kind: 'ok', text: s.okMsg });
      setForm({ title: '', type: types[0], specialty: '', deadline: '', description: '', author_name: '', author_university: '' });
    } catch (e) {
      setMsg({ kind: 'err', text: s.errMsg });
    } finally {
      setSending(false);
    }
  };

  const setF = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const card = { background: '#fff', borderRadius: 20, boxShadow: '0 6px 22px rgba(10,57,43,.06)', overflow: 'hidden', borderTop: `3px solid ${EM}` };
  const secHd = { padding: '15px 20px', display: 'flex', alignItems: 'center', gap: 11, borderBottom: '1px solid #eef2f0' };
  const icBox = (bg, col) => ({ width: 36, height: 36, borderRadius: 11, display: 'grid', placeItems: 'center', fontSize: 18, background: bg, color: col });
  const inp = { border: '1px solid #dbe4e1', borderRadius: 10, padding: '9px 11px', fontSize: 13.5, fontFamily: 'inherit', background: '#fff', width: '100%' };
  const fld = { flex: 1, minWidth: 150, display: 'flex', flexDirection: 'column', gap: 5 };
  const lbl = { fontSize: 12, fontWeight: 800, color: '#475f57' };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ background: 'linear-gradient(120deg,#0A392B,#10B981)', color: '#fff', borderRadius: 20, padding: 24, textAlign: 'center' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>🌿 {s.title}</h1>
        <p style={{ opacity: 0.92, fontSize: 14, marginTop: 5 }}>{s.intro}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap', justifyContent: 'space-between', background: 'linear-gradient(120deg,#2AABEE,#229ED9)', color: '#fff', borderRadius: 20, padding: '18px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <div style={{ width: 48, height: 48, borderRadius: 15, background: 'rgba(255,255,255,.2)', display: 'grid', placeItems: 'center', fontSize: 25 }}>✈️</div>
          <div><b style={{ fontSize: 16, fontWeight: 800 }}>{s.tgTitle}</b><br /><span style={{ fontSize: 12.5, opacity: 0.92 }}>{s.tgDesc}</span></div>
        </div>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" style={{ background: '#fff', color: '#229ED9', borderRadius: 12, padding: '11px 20px', fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>{s.tgBtn}</a>
      </div>

      {/* لوحة الفرص */}
      <div style={card}>
        <div style={secHd}>
          <div style={icBox(EML, EMD)}>💡</div>
          <div><h2 style={{ fontSize: 16.5, fontWeight: 800 }}>{s.boardTitle}</h2><div style={{ fontSize: 12.5, color: '#6b807a', fontWeight: 600 }}>{s.boardSub}</div></div>
        </div>
        <div style={{ padding: '18px 20px' }}>
          {presentSpecialties.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
              {[{ id: 'all', name: s.all }, ...presentSpecialties.map((sp) => ({ id: sp.id, name: sp[lang].name }))].map((c) => {
                const on = filter === c.id;
                return <span key={c.id} onClick={() => setFilter(c.id)} style={{ border: `1px solid ${on ? EMD : '#dbe4e1'}`, background: on ? EMD : '#fff', color: on ? '#fff' : '#475f57', borderRadius: 999, padding: '6px 14px', fontSize: 12.5, fontWeight: 800, cursor: 'pointer' }}>{c.name}</span>;
              })}
            </div>
          )}

          {loading ? <p style={{ color: '#6b807a', fontWeight: 600 }}>{s.loading}</p>
            : shown.length === 0 ? <p style={{ color: '#94a3a0', fontWeight: 600 }}>{s.empty}</p>
              : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 13 }}>
                {shown.map((o) => <OppCard key={o.id} o={o} lang={lang} onLike={like} liked={likedIds.has(o.id)} />)}
              </div>}

          <button onClick={() => setShowForm((v) => !v)} style={{ width: '100%', marginTop: 14, border: `1.5px dashed ${PUR}`, background: PURL, borderRadius: 14, padding: 13, fontWeight: 800, color: PURD, cursor: 'pointer', fontSize: 14 }}>{s.shareBtn}</button>

          {showForm && (
            <div style={{ marginTop: 14, border: '1px solid #e8efed', borderRadius: 16, padding: 16, background: '#FBFCFD' }}>
              <div style={{ fontSize: 11.5, color: PURD, fontWeight: 700, background: PURL, borderRadius: 8, padding: '7px 10px', marginBottom: 10 }}>💡 {s.formHint}</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                <div style={fld}><label style={lbl}>{s.fTitle}</label><input style={inp} value={form.title} onChange={setF('title')} /></div>
                <div style={fld}><label style={lbl}>{s.fType}</label><select style={inp} value={form.type} onChange={setF('type')}>{types.map((tp) => <option key={tp}>{tp}</option>)}</select></div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                <div style={fld}><label style={lbl}>{s.fSpecialty} <span style={{ fontWeight: 600, color: '#94a3a0' }}>{s.optional}</span></label>
                  <select style={inp} value={form.specialty} onChange={setF('specialty')}>
                    <option value="">{s.fNone}</option>
                    {specialties.map((sp) => <option key={sp.id} value={sp.id}>{sp[lang].name}</option>)}
                  </select></div>
                <div style={fld}><label style={lbl}>{s.fDeadline}</label><input style={inp} value={form.deadline} onChange={setF('deadline')} /></div>
              </div>
              <div style={{ ...fld, marginBottom: 10 }}><label style={lbl}>{s.fDesc}</label><textarea rows={2} style={{ ...inp, resize: 'vertical' }} value={form.description} onChange={setF('description')} /></div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                <div style={fld}><label style={lbl}>{s.fName} <span style={{ fontWeight: 600, color: '#94a3a0' }}>{s.optional}</span></label><input style={inp} value={form.author_name} onChange={setF('author_name')} /></div>
                <div style={fld}><label style={lbl}>{s.fUni} <span style={{ fontWeight: 600, color: '#94a3a0' }}>{s.optional}</span></label><input style={inp} value={form.author_university} onChange={setF('author_university')} /></div>
              </div>
              <button onClick={submit} disabled={sending} style={{ color: '#fff', border: 'none', borderRadius: 11, padding: '11px 22px', fontWeight: 800, cursor: sending ? 'default' : 'pointer', fontSize: 14, background: 'linear-gradient(180deg,#7C3AED,#6D28D9)' }}>{sending ? s.sending : s.submit}</button>
              {msg && <div style={{ marginTop: 12, borderRadius: 12, padding: '12px 15px', fontWeight: 700, fontSize: 13.5, background: msg.kind === 'ok' ? '#DCFCE7' : '#FEF2F2', border: `1px solid ${msg.kind === 'ok' ? '#86EFAC' : '#FCA5A5'}`, color: msg.kind === 'ok' ? '#166534' : '#B91C1C' }}>{msg.text}</div>}
            </div>
          )}
        </div>
      </div>

      {/* لوحة الإعلانات */}
      {announcements.length > 0 && (
        <div style={card}>
          <div style={secHd}>
            <div style={icBox(EML, EMD)}>📢</div>
            <div><h2 style={{ fontSize: 16.5, fontWeight: 800 }}>{s.annTitle}</h2><div style={{ fontSize: 12.5, color: '#6b807a', fontWeight: 600 }}>{s.annSub}</div></div>
          </div>
          <div style={{ padding: '18px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 13 }}>
            {announcements.map((o) => <OppCard key={o.id} o={o} lang={lang} onLike={like} liked={likedIds.has(o.id)} />)}
          </div>
        </div>
      )}

      {/* شكراً للمساهمين */}
      {contributors.length > 0 && (
        <div style={{ ...card, borderTopColor: PUR }}>
          <div style={secHd}>
            <div style={icBox(PURL, PUR)}>🏅</div>
            <div><h2 style={{ fontSize: 16.5, fontWeight: 800 }}>{s.contribTitle}</h2><div style={{ fontSize: 12.5, color: '#6b807a', fontWeight: 600 }}>{s.contribSub}</div></div>
          </div>
          <div style={{ padding: '18px 20px', display: 'flex', flexWrap: 'wrap', gap: 13 }}>
            {contributors.map(([name, count], i) => {
              const colors = [EM, PUR, '#0A392B', EMD, PURD, '#34D399'];
              const col = colors[i % colors.length];
              return (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 82, textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: 18, background: col }}>{name.slice(0, 2)}</div>
                  <div style={{ fontSize: 12, fontWeight: 800 }}>{name}</div>
                  <div style={{ fontSize: 10, color: '#94a3a0', fontWeight: 700 }}>{fmt(count, lang)} {s.countLabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// قائمة مصغّرة تُعرض داخل صفحة التخصص (قسم فرص وتوصيات)
export function SpecialtyOpportunities({ specialtyId, lang = 'ar' }) {
  const s = STR[lang];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      if (!isSupabaseReady) { setLoading(false); return; }
      try {
        const { data, error } = await supabase.from('opportunities').select('*').eq('status', 'approved').eq('specialty', specialtyId).order('created_at', { ascending: false });
        if (!alive) return;
        if (error) throw error;
        setItems(data || []);
      } catch (e) {
        if (alive) setItems([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [specialtyId]);

  if (loading) return <p style={{ fontSize: 13, color: '#6b807a', fontWeight: 600 }}>{s.loading}</p>;
  if (items.length === 0) return (
    <div style={{ borderRadius: 8, padding: 16, textAlign: 'center', border: '1.5px dashed rgba(10,57,43,0.15)', background: '#FBFBFE' }}>
      <p style={{ fontSize: 13, color: '#6b807a', fontWeight: 600 }}>{s.emptySpecialty}</p>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((o) => (
        <div key={o.id} style={{ border: '1px solid #e8efed', borderRadius: 12, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: '#0A392B' }}>{o.title}</h4>
            {o.type ? <span style={{ fontSize: 10.5, fontWeight: 800, color: EMD, background: EML, borderRadius: 999, padding: '3px 9px', whiteSpace: 'nowrap' }}>{o.type}</span> : null}
          </div>
          {o.description ? <p style={{ fontSize: 12.5, color: '#38524a', marginTop: 4 }}>{o.description}</p> : null}
          <div style={{ display: 'flex', gap: 12, marginTop: 6, fontSize: 11.5, color: '#94a3a0', fontWeight: 700 }}>
            {o.deadline ? <span>📅 {o.deadline}</span> : null}
            <span>{s.by}: {o.author_name || s.anon}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
