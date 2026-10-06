:root{
  --bg:#0b1220;
  --panel:#0f1a32;
  --card:#111f3e;
  --card2:#0d1831;
  --text:#e9eefc;
  --muted:#b7c3e6;
  --line:rgba(255,255,255,.10);
  --accent:#53d3a5;
  --accent2:#7aa7ff;
  --shadow: 0 18px 60px rgba(0,0,0,.45);
  --radius:16px;
  --radius2:22px;
  --max:1100px;
  --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans Bengali", "Hind Siliguri", sans-serif;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--font);
  background:
    radial-gradient(900px 400px at 15% 15%, rgba(83,211,165,.15), transparent 55%),
    radial-gradient(900px 400px at 85% 25%, rgba(122,167,255,.15), transparent 55%),
    radial-gradient(1100px 600px at 40% 110%, rgba(83,211,165,.10), transparent 50%),
    var(--bg);
  color:var(--text);
  line-height:1.55;
}

a{color:inherit; text-decoration:none}
img{max-width:100%; display:block; border-radius:14px}
.container{max-width:var(--max); margin:0 auto; padding:0 18px}

.skip{
  position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden;
}
.skip:focus{left:18px; top:12px; width:auto; height:auto; background:#fff; color:#000; padding:10px 12px; border-radius:10px}

.topbar{
  position:sticky; top:0; z-index:40;
  background: rgba(11,18,32,.65);
  backdrop-filter: blur(10px);
  border-bottom:1px solid var(--line);
}
.topbar__inner{
  display:flex; align-items:center; justify-content:space-between;
  gap:14px; padding:12px 0;
}
.brand{display:flex; align-items:center; gap:12px; min-width: 0}
.brand__mark{
  width:40px; height:40px;
  display:grid; place-items:center;
  border-radius:12px;
  background: linear-gradient(135deg, rgba(83,211,165,.18), rgba(122,167,255,.18));
  border:1px solid var(--line);
}
.brand__text{min-width:0}
.brand__name{font-weight:800; letter-spacing:.2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
.brand__meta{font-size:12.5px; color:var(--muted)}

.navbtn{
  display:none;
  border:1px solid var(--line);
  background: rgba(255,255,255,.06);
  color:var(--text);
  padding:10px 12px;
  border-radius:12px;
}
.nav{
  display:flex; gap:14px; flex-wrap:wrap;
  justify-content:flex-end;
}
.nav a{
  font-size:14px;
  padding:8px 10px;
  border-radius:12px;
  border:1px solid transparent;
  color:var(--muted);
}
.nav a:hover{border-color:var(--line); color:var(--text); background: rgba(255,255,255,.05)}

.hero{padding:28px 0 6px}
.hero__inner{display:grid; grid-template-columns: 1.2fr .9fr; gap:18px; align-items:stretch}
.hero__content{
  border-radius: var(--radius2);
  padding:24px;
  border:1px solid var(--line);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  box-shadow: var(--shadow);
}
.pill{
  display:inline-flex; gap:8px; align-items:center;
  padding:6px 10px;
  border-radius:999px;
  background: rgba(83,211,165,.12);
  border:1px solid rgba(83,211,165,.20);
  color: #dffbf0;
  font-size:13px;
  margin:0 0 10px;
}
.hero h1{margin:.1rem 0 .25rem; font-size: 34px; line-height:1.15}
.lead{margin:0 0 16px; color:var(--muted); max-width: 62ch}

.hero__cta{display:flex; gap:10px; flex-wrap:wrap; margin: 12px 0 14px}
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.06);
  color: var(--text);
}
.btn--primary{
  border-color: rgba(83,211,165,.25);
  background: linear-gradient(135deg, rgba(83,211,165,.22), rgba(83,211,165,.10));
}
.btn--ghost{color: var(--muted)}
.btn:hover{transform: translateY(-1px)}
.btn:active{transform: translateY(0)}

.mini{display:grid; grid-template-columns: repeat(3,1fr); gap:10px}
.mini__card{
  border:1px solid var(--line);
  border-radius: 14px;
  padding: 10px 12px;
  background: rgba(255,255,255,.04);
}
.mini__label{font-size:12px; color:var(--muted)}
.mini__value{font-weight:700; margin-top:2px}

.hero__panel{height:100%}
.panel{
  height:100%;
  border-radius: var(--radius2);
  padding:16px;
  border:1px solid var(--line);
  background: linear-gradient(180deg, rgba(122,167,255,.10), rgba(255,255,255,.02));
  box-shadow: var(--shadow);
}
.panel__head{display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom: 10px}
.panel__title{margin:0; font-size:16px}
.select{
  width: 180px;
  border-radius: 12px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.06);
  color: var(--text);
  padding:8px 10px;
}

.tableWrap{
  overflow:auto;
  border:1px solid var(--line);
  border-radius: 14px;
  background: rgba(0,0,0,.12);
}
.table{width:100%; border-collapse: collapse; font-size: 14px}
.table th,.table td{padding:10px 12px; border-bottom:1px solid var(--line)}
.table th{text-align:left; color: #dbe5ff; background: rgba(255,255,255,.04)}
.table td:last-child{font-weight:700}
.hint{margin:10px 0 0; color: var(--muted); font-size: 12.5px}

.section{padding: 28px 0}
.section--alt{
  background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.00));
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
}
.section__head h2{margin:0; font-size: 22px}
.section__head p{margin:6px 0 0; color: var(--muted)}

.grid2{display:grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px}
.card{
  border:1px solid var(--line);
  border-radius: var(--radius);
  padding: 16px;
  background: rgba(255,255,255,.04);
}
.card h3{margin:0 0 8px; font-size: 16px}
.muted{color:var(--muted); margin:0 0 10px}
.list{margin:0; padding-left: 18px; color: var(--muted)}
.list li{margin: 6px 0}

.chips{display:flex; gap:8px; flex-wrap:wrap; margin-top: 8px}
.chip{
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.04);
  color: var(--muted);
}

.notices{display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px}
.notice{
  border:1px solid var(--line);
  border-radius: 16px;
  padding: 14px;
  background: linear-gradient(180deg, rgba(83,211,165,.10), rgba(255,255,255,.02));
}
.notice__title{margin:0 0 6px; font-weight:800}
.notice__meta{font-size: 12.5px; color: var(--muted); margin:0 0 10px}
.notice__body{margin:0; color: #dce6ff}

.kv{display:flex; flex-direction:column; gap:10px}
.kv__row{display:flex; gap:10px; justify-content:space-between; border-bottom:1px dashed var(--line); padding-bottom:10px}
.kv__k{color: var(--muted)}
.kv__v{font-weight:800}

.gallery{display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px}
.shot{
  margin:0;
  border:1px solid var(--line);
  border-radius: 16px;
  padding: 10px;
  background: rgba(255,255,255,.03);
}
.shot figcaption{margin-top:8px; font-size:12.5px; color:var(--muted)}

.map iframe{
  width:100%;
  height: 380px;
  border:0;
  border-radius: 14px;
}

.footer{
  border-top:1px solid var(--line);
  padding: 18px 0;
  background: rgba(0,0,0,.12);
}
.footer__inner{display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap}
.footer__title{font-weight:900}
.footer__meta{color:var(--muted); font-size: 13px}

@media (max-width: 920px){
  .hero__inner{grid-template-columns: 1fr}
  .mini{grid-template-columns: 1fr}
  .notices{grid-template-columns: 1fr}
  .gallery{grid-template-columns: 1fr}
  .grid2{grid-template-columns: 1fr}
  .navbtn{display:inline-flex}
  .nav{display:none}
  .nav.is-open{display:flex; flex-direction:column; align-items:flex-start}
  .select{width: 100%}
}
