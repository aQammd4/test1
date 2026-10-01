const ex=[["📱","گوشیم شارژ نداشت!"],["🐱","گربه‌م کیبوردو خورد"],["🧠","مغزم رفته بود مرخصی"],["✨","ستاره‌ها تو برج بد بودن"],["🍦","بستنی نخورده بودم، عقلم کار نمی‌کرد"],["🙏","فقط چون خیلی دوستت دارم!"]];
const g=document.getElementById('grid'),pick=document.getElementById('pick');
ex.forEach(([e,t])=>{const b=document.createElement('button');b.className='ex';b.innerHTML='<span>'+e+'</span>'+t;
b.onclick=()=>{pick.textContent=e+' '+t+' ... باشه باشه، بهانه‌ها همه بامزه بودن ولی حق با توئه، ببخشید! 😅';burst(6)};g.appendChild(b)});
function fl(em){const s=document.createElement('div');s.className='float';s.textContent=em;s.style.left=Math.random()*100+'vw';s.style.animationDuration=(6+Math.random()*7)+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),13000)}
const E=['💛','🌸','🎈','⭐','💖','🌼','🍭'];
setInterval(()=>fl(E[Math.random()*E.length|0]),700);
function burst(n){for(let i=0;i<n;i++)setTimeout(()=>fl(E[Math.random()*E.length|0]),i*80)}
const nm=document.getElementById('nm');
document.getElementById('name').oninput=e=>nm.textContent=e.target.value.trim()||'رفیقم';
const no=document.getElementById('no');
function dodge(){const w=document.getElementById('btns').clientWidth-no.offsetWidth;no.style.position='absolute';no.style.left=Math.max(0,Math.random()*w)+'px';no.style.top=(Math.random()*50)+'px'}
no.addEventListener('mouseover',dodge);no.addEventListener('touchstart',e=>{e.preventDefault();dodge()},{passive:false});no.onclick=dodge;
document.getElementById('yes').onclick=()=>{const m=document.getElementById('msg');m.style.display='block';
m.innerHTML='ایوووول! 🎉 مرسی که بخشیدی '+nm.textContent+' جان! قول می‌دم دیگه تکرار نشه... بستنی با من 🍦💛';burst(60);m.scrollIntoView({behavior:'smooth'})};
