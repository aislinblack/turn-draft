const rookieNames = new Set(["Jeremiyah Love","Jadarian Price","Carnell Tate","Makai Lemon","KC Concepcion","De'Zhaun Stribling","Jordyn Tyson","Denzel Boston","Jonah Coleman","Kenyon Sadiq","Mike Washington Jr.","Omar Cooper Jr.","Emmett Johnson","Ja'Kobi Lane","Caleb Douglas","Germie Bernard","Antonio Williams","Malachi Fields"]);
const players = [
  [1,"Jahmyr Gibbs","RB","DET",1.7],[2,"Bijan Robinson","RB","ATL",1.5],[3,"Ja'Marr Chase","WR","CIN",3.4],[4,"Puka Nacua","WR","LAR",4.3],
  [5,"Jaxon Smith-Njigba","WR","SEA",6.1],[6,"Christian McCaffrey","RB","SF",6.0],[7,"Jonathan Taylor","RB","IND",7.7],[8,"Amon-Ra St. Brown","WR","DET",8.8],
  [9,"James Cook","RB","BUF",10.1],[10,"CeeDee Lamb","WR","DAL",11.3],[11,"Ashton Jeanty","RB","LV",12.5],[12,"Justin Jefferson","WR","MIN",12.9],
  [13,"Saquon Barkley","RB","PHI",16.7],[14,"De'Von Achane","RB","MIA",15.0],[15,"Chase Brown","RB","CIN",19.0],[16,"Drake London","WR","ATL",18.2],
  [17,"Omarion Hampton","RB","LAC",15.5],[18,"A.J. Brown","WR","NE",25.4],[19,"Kenneth Walker III","RB","KC",16.8],[20,"Brock Bowers","TE","LV",22.1],
  [21,"Derrick Henry","RB","BAL",22.5],[22,"Nico Collins","WR","HOU",25.0],[23,"Trey McBride","TE","ARI",20.3],[24,"George Pickens","WR","DAL",26.7],
  [25,"Chris Olave","WR","NO",31.0],[26,"Malik Nabers","WR","NYG",30.7],[27,"Rashee Rice","WR","KC",30.7],[28,"Josh Allen","QB","BUF",33.5],
  [29,"Kyren Williams","RB","LAR",32.9],[30,"Javonte Williams","RB","DAL",34.2],[31,"Jeremiyah Love","RB","ARI",22.8],[32,"DeVonta Smith","WR","PHI",40.3],
  [33,"Breece Hall","RB","NYJ",31.7],[34,"Tetairoa McMillan","WR","CAR",37.8],[35,"Josh Jacobs","RB","GB",31.2],[36,"Zay Flowers","WR","BAL",42.8],
  [37,"Tee Higgins","WR","CIN",39.1],[38,"Garrett Wilson","WR","NYJ",39.8],[39,"Travis Etienne","RB","NO",35.4],[40,"Colston Loveland","TE","CHI",44.1],
  [41,"Emeka Egbuka","WR","TB",43.1],[42,"Lamar Jackson","QB","BAL",52.7],[43,"Jaylen Waddle","WR","DEN",48.3],[44,"Ladd McConkey","WR","LAC",43.3],
  [45,"Cam Skattebo","RB","NYG",42.8],[46,"Luther Burden","WR","CHI",47.0],[47,"D'Andre Swift","RB","CHI",54.5],[48,"Quinshon Judkins","RB","CLE",50.7],
  [49,"Davante Adams","WR","LAR",53.3],[50,"Terry McLaurin","WR","WAS",53.9],[51,"Bucky Irving","RB","TB",41.4],[52,"David Montgomery","RB","HOU",52.2],
  [53,"TreVeyon Henderson","RB","NE",49.2],[54,"Drake Maye","QB","NE",64.4],[55,"Tyler Warren","TE","IND",53.2],[56,"Jameson Williams","WR","DET",56.1],
  [57,"Joe Burrow","QB","CIN",70.9],[58,"D.J. Moore","WR","BUF",59.7],[59,"Mike Evans","WR","SF",55.4],[60,"Bhayshul Tuten","RB","JAX",56.3],
  [61,"Christian Watson","WR","GB",65.0],[62,"Rome Odunze","WR","CHI",62.9],[63,"Jadarian Price","RB","SEA",64.9],[64,"Jayden Daniels","QB","WAS",78.1],
  [65,"Carnell Tate","WR","TEN",59.8],[66,"Parker Washington","WR","JAX",81.2],[67,"Jaylen Warren","RB","PIT",70.5],[68,"Brian Thomas Jr.","WR","JAX",70.8],
  [69,"Tucker Kraft","TE","GB",75.0],[70,"Jalen Hurts","QB","PHI",85.6],[71,"Marvin Harrison Jr.","WR","ARI",72.7],[72,"Harold Fannin","TE","CLE",73.3],
  [73,"Caleb Williams","QB","CHI",97.6],[74,"Rhamondre Stevenson","RB","NE",80.2],[75,"Tony Pollard","RB","TEN",78.8],[76,"DK Metcalf","WR","PIT",77.7],
  [77,"Courtland Sutton","WR","DEN",83.5],[78,"Kyle Pitts","TE","ATL",81.9],[79,"Rico Dowdle","RB","PIT",85.8],[80,"Sam LaPorta","TE","DET",85.5],
  [81,"RJ Harvey","RB","DEN",74.7],[82,"Justin Herbert","QB","LAC",98.8],[83,"Dak Prescott","QB","DAL",105.3],[84,"Chuba Hubbard","RB","CAR",71.2],
  [85,"Michael Wilson","WR","ARI",83.0],[86,"Chris Godwin","WR","TB",87.6],[87,"J.K. Dobbins","RB","DEN",92.3],[88,"Jonathon Brooks","RB","CAR",119.7],
  [89,"Trevor Lawrence","QB","JAX",109.4],[90,"Alec Pierce","WR","IND",77.8],[91,"Ricky Pearsall","WR","SF",97.2],[92,"Quentin Johnston","WR","LAC",97.6],
  [93,"Michael Pittman Jr.","WR","PIT",97.5],[94,"Jaxson Dart","QB","NYG",100.8],[95,"Blake Corum","RB","LAR",98.2],[96,"Kyle Monangai","RB","CHI",87.7],
  [97,"Makai Lemon","WR","PHI",80.8],[98,"George Kittle","TE","SF",105.5],[99,"Travis Kelce","TE","KC",107.6],[100,"Wan'Dale Robinson","WR","TEN",101.9],
  [102,"Dallas Goedert","TE","PHI",103],[103,"Mark Andrews","TE","BAL",110],[104,"T.J. Hockenson","TE","MIN",111],
  [105,"Josh Downs","WR","IND",113],[106,"Deebo Samuel Sr.","WR","SF",114],[107,"Aaron Jones Sr.","RB","MIN",115],[108,"Matthew Golden","WR","GB",117],
  [109,"Jordan Mason","RB","MIN",120],[110,"Jakobi Meyers","WR","JAX",81],[111,"Khalil Shakir","WR","BUF",90],[112,"Jayden Reed","WR","GB",91],
  [113,"Xavier Worthy","WR","KC",92],[114,"Bo Nix","QB","DEN",84],[115,"Brock Purdy","QB","SF",85],[116,"Matthew Stafford","QB","LAR",86],
  [117,"Patrick Mahomes","QB","KC",94],[118,"Kenny Gainwell","RB","TB",98],[119,"Woody Marks","RB","HOU",123],[120,"Stefon Diggs","WR","WAS",124],
  [121,"KC Concepcion","WR","CLE",126],[122,"Romeo Doubs","WR","NE",128],[123,"De'Zhaun Stribling","WR","SF",129],[124,"Tank Dell","WR","HOU",130],
  [125,"Jalen Coker","WR","CAR",131],[126,"Rashid Shaheed","WR","SEA",132],[127,"Kyler Murray","QB","MIN",133],[128,"Tyler Shough","QB","NO",134],
  [129,"Jared Goff","QB","DET",135],[130,"Zach Charbonnet","RB","SEA",137],[131,"Alvin Kamara","RB","NO",138],[132,"Tyjae Spears","RB","TEN",139],
  [133,"Brian Robinson Jr.","RB","ATL",141],[134,"Tyler Allgeier","RB","ARI",142],[135,"Denzel Boston","WR","CLE",143],[136,"Jerry Jeudy","WR","CLE",144],
  [137,"Jalen McMillan","WR","TB",145],[138,"Calvin Ridley","WR","TEN",146],[139,"Caleb Douglas","WR","MIA",147],[140,"Adonai Mitchell","WR","NYJ",148],
  [141,"Jake Ferguson","TE","DAL",149],[142,"Baker Mayfield","QB","TB",149],[143,"Malik Willis","QB","MIA",150],[144,"Travis Hunter","WR","JAX",151],
  [145,"Jordyn Tyson","WR","NO",152],[146,"Tre Tucker","WR","LV",153],[147,"Keaton Mitchell","RB","LAC",154],[148,"Isiah Pacheco","RB","DET",155],
  [149,"Jonah Coleman","RB","DEN",156],[150,"Tank Bigsby","RB","PHI",157],[151,"Kenyon Sadiq","TE","NYJ",158],[152,"Hunter Henry","TE","NE",159],
  [153,"Brandon Aubrey","K","DAL",165],[154,"Cameron Dicker","K","LAC",178],[155,"Ka'imi Fairbairn","K","HOU",184],[156,"Jake Bates","K","DET",186],
  [157,"Houston Texans","DST","HOU",169],[158,"Seattle Seahawks","DST","SEA",171],[159,"Los Angeles Rams","DST","LAR",173],[160,"Denver Broncos","DST","DEN",175],
  [161,"Philadelphia Eagles","DST","PHI",177],[162,"Pittsburgh Steelers","DST","PIT",181],[163,"Minnesota Vikings","DST","MIN",183],[164,"Baltimore Ravens","DST","BAL",185],
  [165,"Mike Washington Jr.","RB","LV",157],[166,"Emmett Johnson","RB","KC",173],[167,"Malachi Fields","WR","NYG",226],[168,"Ja'Kobi Lane","WR","BAL",210],
  [169,"Germie Bernard","WR","PIT",222],[170,"Antonio Williams","WR","WAS",274],[171,"Omar Cooper Jr.","WR","NYJ",195]
].map(([rank,name,pos,team,adp]) => ({rank,name,pos,team,adp,rookie:rookieNames.has(name),id:name.toLowerCase().replace(/[^a-z0-9]+/g,"-")}));

const saved = JSON.parse(localStorage.getItem("turn-draft-state") || "null");
const state = { teams: 12, slot: 1, scoring: "ppr", qbFormat: "1qb", benchCount: 7, pressure: "early", bengalsRoom: true, upside: true, picks: [], filter: "ALL", search: "", visible: 36, ...(saved || {}) };
const qbByes = {BUF:7,BAL:13,NE:11,WAS:7,PHI:10,CIN:6,CHI:10,LAC:7,DAL:14,JAX:7,NYG:8,DEN:10,KC:5,MIN:6,NO:8,DET:6,LAR:11,SF:8,TB:10,MIA:6,IND:13};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const save = () => localStorage.setItem("turn-draft-state", JSON.stringify(state));
const findPlayer = (id) => players.find(p => p.id === id);
const overallToLabel = (overall) => `${Math.ceil(overall/state.teams)}.${String(((overall-1)%state.teams)+1).padStart(2,"0")}`;

const totalRounds = () => 9 + state.benchCount;
function myPickNumbers(rounds=totalRounds()) {
  return Array.from({length:rounds}, (_,i) => {
    const round = i + 1;
    const within = round % 2 ? state.slot : state.teams - state.slot + 1;
    return (round - 1) * state.teams + within;
  });
}

function getCurrentOverall() { return state.picks.length + 1; }
function isMyPick(overall=getCurrentOverall()) { return myPickNumbers().includes(overall); }
function nextMyPicks() { const current=getCurrentOverall(); return myPickNumbers().filter(n => n >= current).slice(0,6); }

function turnRead(player) {
  const pick = getCurrentOverall();
  if (state.bengalsRoom && player.team === "CIN") return ["CIN FAN TAX", "reach"];
  const diff = player.adp - pick;
  if (diff >= 8) return ["VALUE +" + Math.round(diff), "value"];
  if (diff <= -8) return ["REACH " + Math.round(Math.abs(diff)), "reach"];
  return ["FAIR RANGE", "fair"];
}

function positionWeight(player) {
  const minePlayers = state.picks.filter(p => p.mine).map(p => findPlayer(p.id)).filter(Boolean);
  const roster = minePlayers.map(p => p.pos);
  const counts = roster.reduce((a,p) => ({...a,[p]:(a[p]||0)+1}),{});
  let weight = 0;
  const round = Math.ceil(getCurrentOverall()/state.teams);
  if (player.pos === "RB" && (counts.RB||0) < 2) weight += 16;
  if (player.pos === "WR" && (counts.WR||0) < 2) weight += state.scoring === "ppr" ? 18 : 14;
  if (player.pos === "TE" && !counts.TE) weight += 18;
  const flexFilled = (counts.RB||0) + (counts.WR||0) + (counts.TE||0) >= 6;
  if (["RB","WR","TE"].includes(player.pos) && !flexFilled) weight += 5;
  if (player.pos === "QB" && !counts.QB) {
    weight += state.qbFormat === "superflex" ? 25 : ({normal:-7,early:-3,run:5}[state.pressure]);
  }
  if (player.pos === "QB" && counts.QB && state.qbFormat === "1qb") {
    weight += counts.QB >= 2 ? -90 : (round >= 10 ? 4 : -55);
    const starterQB=minePlayers.find(p=>p.pos==="QB");
    if (starterQB && qbByes[starterQB.team] === qbByes[player.team]) weight -= 60;
  }
  if (counts[player.pos] >= 3) weight -= 6;
  if (player.pos === "K" || player.pos === "DST") weight += round < totalRounds()-2 ? -90 : (counts[player.pos] ? -35 : 18);
  if (player.rookie && state.upside && round >= 9) weight += round >= 12 ? 18 : 10;
  if (state.bengalsRoom && player.name === "Joe Burrow" && !(counts.QB||0) && getCurrentOverall() === 25) weight += 75;
  return weight;
}

function availablePlayers() { const gone=new Set(state.picks.map(p=>p.id)); return players.filter(p=>!gone.has(p.id)); }
function recommendations() {
  const pick=getCurrentOverall();
  return availablePlayers().map(p => ({...p,score:Math.round(120 - p.rank*.8 + positionWeight(p) + Math.max(0,p.adp-pick)*.1)})).sort((a,b)=>b.score-a.score || a.rank-b.rank).slice(0,3);
}

function renderTimeline() {
  const current=getCurrentOverall();
  const picks=nextMyPicks();
  $("#pickTimeline").innerHTML=picks.map((n,i)=>`<div class="timeline-pick ${n===current?'active':''}"><strong>${overallToLabel(n)}</strong><span>#${n} OVERALL${i===0?' · NEXT':''}</span></div>`).join("");
}

function renderHeader() {
  const overall=getCurrentOverall(), mine=isMyPick(overall);
  const nextPick=myPickNumbers().find(n=>n>overall);
  $("#currentPick").textContent=overallToLabel(overall);
  $("#overallPick").textContent=`#${overall}`;
  $("#statusText").textContent=`${state.picks.length?'LIVE DRAFT':'PRE-DRAFT'} · PICK ${overallToLabel(overall)}`;
  $("#clockHint").textContent=mine ? "Your pick. Use the board and room read." : nextPick ? `${nextPick-overall} selections until your next pick.` : "Draft complete. Review your roster.";
  document.body.classList.toggle("my-turn",mine);
  $("#myTurnAlert").classList.toggle("show",mine);
  $("#alertPick").textContent=`PICK ${overallToLabel(overall)} · #${overall} OVERALL`;
  document.title=mine?`YOUR PICK ${overallToLabel(overall)} — Turn Draft`:`Pick ${overallToLabel(overall)} — Turn Draft`;
}

function renderPlayers() {
  const query=state.search.toLowerCase();
  const filtered=availablePlayers().filter(p => (state.filter==="ALL"||p.pos===state.filter) && (`${p.name} ${p.team}`).toLowerCase().includes(query));
  const visible=filtered.slice(0,state.visible);
  $("#playerTable").innerHTML=visible.map(p=>{
    const [read,klass]=turnRead(p);
    return `<tr><td class="rank">${p.rank}</td><td class="player-cell"><strong>${p.name}${p.rookie?'<span class="rookie-tag">R</span>':''}</strong><span>${p.team}</span></td><td><span class="position ${p.pos}">${p.pos==='DST'?'D/ST':p.pos}</span></td><td class="adp">${p.adp.toFixed(1)}</td><td><span class="turn-read ${klass}">${read}</span></td><td><div class="pick-buttons"><button class="draft-button" data-draft="${p.id}" data-owner="other" type="button">Taken</button><button class="draft-button mine-button" data-draft="${p.id}" data-owner="mine" type="button">Mine</button></div></td></tr>`;
  }).join("") || `<tr><td colspan="6" class="empty-state">No available players match that search.</td></tr>`;
  $("#loadMore").style.display=filtered.length>state.visible?"block":"none";
}

function renderRecommendations() {
  $("#recommendationList").innerHTML=recommendations().map((p,i)=>`<div class="rec-player"><span class="rec-rank">0${i+1}</span><div><strong>${p.name}</strong><small>${p.pos} · ${p.team} · ADP ${p.adp}</small></div><span class="rec-score">${Math.max(p.score,1)}</span></div>`).join("");
}

function renderRoster() {
  const mine=state.picks.filter(p=>p.mine).map(p=>({...findPlayer(p.id),overall:p.overall}));
  $("#rosterCount").textContent=`${mine.length} drafted`;
  const counts=mine.reduce((a,p)=>({...a,[p.pos]:(a[p.pos]||0)+1}),{});
  const flexCount=Math.max(0,(counts.RB||0)-2)+Math.max(0,(counts.WR||0)-2)+Math.max(0,(counts.TE||0)-1);
  const starters=Math.min(counts.QB||0,1)+Math.min(counts.RB||0,2)+Math.min(counts.WR||0,2)+Math.min(counts.TE||0,1)+Math.min(flexCount,1)+Math.min(counts.K||0,1)+Math.min(counts.DST||0,1);
  const slots=[["QB",counts.QB||0,1],["RB",counts.RB||0,2],["WR",counts.WR||0,2],["TE",counts.TE||0,1],["FLEX",flexCount,1],["K",counts.K||0,1],["D/ST",counts.DST||0,1],["BENCH",Math.max(0,mine.length-starters),state.benchCount]];
  $("#starterStatus").innerHTML=slots.map(([label,n,need])=>`<span class="slot-status ${n>=need?'filled':''}">${label} ${Math.min(n,need)}/${need}</span>`).join("");
  $("#rosterList").innerHTML=mine.length?mine.map(p=>`<div class="roster-chip"><span class="position ${p.pos}">${p.pos}</span><strong>${p.name}</strong><span>${overallToLabel(p.overall)}</span></div>`).join(""):`<p class="empty-state">Your picks will collect here.</p>`;
}

function renderLog() {
  $("#picksCount").textContent=`${state.picks.length} / ${state.teams*totalRounds()}`;
  const recent=state.picks.slice(-6).reverse();
  $("#pickLog").innerHTML=recent.length?recent.map(p=>{const player=findPlayer(p.id);return `<div class="log-row"><span>${overallToLabel(p.overall)}</span><strong>${player.name}</strong><span>${p.mine?'YOU':player.pos}</span></div>`}).join(""):`<p class="empty-state">Mark players as the draft unfolds.</p>`;
}

function renderPressure() {
  const config={normal:{width:"20%",badge:"COOL",verdict:"Hard pass",window:"Rounds 6–8",text:"In a typical 1QB room, early quarterback costs too much RB/WR value."},early:{width:"50%",badge:"WARM",verdict:"Luxury reach",window:"4.12 / 5.01",text:"One early QB is a data point, not a run. Try Burrow at your next turn while elite position players fall now."},run:{width:"90%",badge:"HOT",verdict:"Defensible",window:"Take at 3.01",text:"If three or more top quarterbacks go before pick 24, your room has reset the market. Burrow at the turn becomes defensible."}}[state.pressure];
  const roomConfig=state.bengalsRoom?{width:"82%",badge:"HOMER TAX",verdict:"Take him",window:"3.01",text:"Your knowledge of this room matters more than public ADP. Burrow will not survive to 4.12, so secure him with the second pick of your turn."}:config;
  $("#pressureMeter").style.width=roomConfig.width; $("#pressureBadge").textContent=roomConfig.badge; $("#burrowVerdict").textContent=roomConfig.verdict; $("#fallbackWindow").textContent=roomConfig.window; $("#pressureExplanation").textContent=roomConfig.text;
  $$("#qbPressure button").forEach(b=>b.classList.toggle("active",b.dataset.value===state.pressure));
  $("#bengalsToggle").classList.toggle("active",state.bengalsRoom); $("#bengalsToggle b").textContent=state.bengalsRoom?"ON":"OFF";
  $("#upsideToggle").classList.toggle("active",state.upside); $("#upsideToggle b").textContent=state.upside?"ON":"OFF";
}

function populateSettings() {
  $("#teamCount").value=String(state.teams); $("#scoring").value=state.scoring; $("#qbFormat").value=state.qbFormat; $("#benchCount").value=String(state.benchCount);
  $("#draftSlot").innerHTML=Array.from({length:state.teams},(_,i)=>`<option value="${i+1}">${i+1}${i===0?'st':i===1?'nd':i===2?'rd':'th'}</option>`).join(""); $("#draftSlot").value=String(state.slot);
}

function render() { renderHeader(); renderTimeline(); renderPlayers(); renderRecommendations(); renderRoster(); renderLog(); renderPressure(); populateSettings(); save(); }
function toast(message) { const el=$("#toast"); el.textContent=message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),1800); }

document.addEventListener("click", (event) => {
  const menu=event.target.closest("[data-menu]");
  if(menu){ const actions=menu.closest(".draft-actions"); $$(".draft-actions").forEach(a=>a!==actions&&a.classList.remove("open")); actions.classList.toggle("open"); return; }
  const draft=event.target.closest("[data-draft]");
  if(draft){ const player=findPlayer(draft.dataset.draft), overall=getCurrentOverall(); state.picks.push({id:player.id,mine:draft.dataset.owner==="mine",overall}); render(); toast(`${player.name} marked at ${overallToLabel(overall)}`); return; }
  if(!event.target.closest(".draft-actions")) $$(".draft-actions").forEach(a=>a.classList.remove("open"));
});

$("#playerSearch").addEventListener("input",e=>{state.search=e.target.value;state.visible=36;renderPlayers();});
$("#positionFilters").addEventListener("click",e=>{if(!e.target.dataset.position)return;state.filter=e.target.dataset.position;state.visible=36;$$("#positionFilters button").forEach(b=>b.classList.toggle("active",b===e.target));renderPlayers();});
$("#loadMore").addEventListener("click",()=>{state.visible+=30;renderPlayers();});
$("#qbPressure").addEventListener("click",e=>{if(!e.target.dataset.value)return;state.pressure=e.target.dataset.value;render();});
$("#bengalsToggle").addEventListener("click",()=>{state.bengalsRoom=!state.bengalsRoom;render();toast(`Bengals-fan room ${state.bengalsRoom?'on':'off'}`);});
$("#upsideToggle").addEventListener("click",()=>{state.upside=!state.upside;render();toast(`Rookie upside mode ${state.upside?'on':'off'}`);});
$("#undoButton").addEventListener("click",()=>{const pick=state.picks.pop();if(pick){render();toast(`Undid ${findPlayer(pick.id).name}`);}});
$("#resetButton").addEventListener("click",()=>{if(state.picks.length && !confirm("Clear every recorded pick?"))return;state.picks=[];render();toast("Draft board reset");});
$("#teamCount").addEventListener("change",e=>{state.teams=Number(e.target.value);state.slot=Math.min(state.slot,state.teams);state.picks=[];render();toast("League size updated; board reset");});
$("#draftSlot").addEventListener("change",e=>{state.slot=Number(e.target.value);state.picks=[];render();toast("Draft slot updated; board reset");});
$("#scoring").addEventListener("change",e=>{state.scoring=e.target.value;render();});
$("#qbFormat").addEventListener("change",e=>{state.qbFormat=e.target.value;if(state.qbFormat==="superflex")state.pressure="run";render();});
$("#benchCount").addEventListener("change",e=>{state.benchCount=Number(e.target.value);render();toast(`Draft set to ${totalRounds()} rounds`);});

render();
