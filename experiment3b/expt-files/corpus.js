// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, 'includes', {
	  value: function(searchElement, fromIndex) {
  
		// 1. Let O be ? ToObject(this value).
		if (this == null) {
		  throw new TypeError('"this" is null or not defined');
		}
  
		var o = Object(this);
  
		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;
  
		// 3. If len is 0, return false.
		if (len === 0) {
		  return false;
		}
  
		// 4. Let n be ? ToInteger(fromIndex).
		//    (If fromIndex is undefined, this step produces the value 0.)
		var n = fromIndex | 0;
  
		// 5. If n ≥ 0, then
		//  a. Let k be n.
		// 6. Else n < 0,
		//  a. Let k be len + n.
		//  b. If k < 0, let k be 0.
		var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
		function sameValueZero(x, y) {
		  return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
		}
  
		// 7. Repeat, while k < len
		while (k < len) {
		  // a. Let elementK be the result of ? Get(O, ! ToString(k)).
		  // b. If SameValueZero(searchElement, elementK) is true, return true.
		  // c. Increase k by 1. 
		  if (sameValueZero(o[k], searchElement)) {
			return true;
		  }
		  k++;
		}
  
		// 8. Return false
		return false;
	  }
	});
  }
  
  exp.condition = 0; //Math.floor(Math.random()*2);
  console.log("Condition "+exp.condition)
  
  
  
  
  
  var stimuliContext =  makeStimsContext();
  var stimuliContextPart = {};
  stimuliContextPart[1] = stimuliContext.slice(0, Math.floor(stimuliContext.length/4))
  stimuliContextPart[2] = stimuliContext.slice(Math.floor(stimuliContext.length/4), Math.floor(2*stimuliContext.length/4))
  stimuliContextPart[3] = stimuliContext.slice(Math.floor(2*stimuliContext.length/4), Math.floor(3*stimuliContext.length/4))
  stimuliContextPart[4] = stimuliContext.slice(Math.floor(3*stimuliContext.length/4))
  
  console.log("@@@");
  console.log(stimuliContextPart[1].length);
  console.log(stimuliContextPart[2].length);
  console.log(stimuliContextPart[3].length);
  console.log(stimuliContextPart[4].length);
  console.log(stimuliContext.length);
  
  console.log(stimuliContextPart[1]);
  console.log(stimuliContextPart[2]);
  console.log(stimuliContextPart[3]);
  console.log(stimuliContextPart[4]);
  
  
  function makeStimsContext() {
	   console.log("MAKE STIMS CONTEXT")
  
  
	   fillers = [];
	   stims = [];
	  critical = [];
	   
	   conditionAssignment = [];
	   conditionsCounts = [0, 0, 0, 0, 0, 0];
	  condOrderRand = Math.random();
	  condSignRand = Math.random();
	  if(condOrderRand > 0.66667) {
		  cond1 = -3;
		  cond2 = 2;
		  cond3 = -1;
		  cond4 = 3;
		  cond5 = -2;
		  cond6 = 1;
	  } else if(condOrderRand > 0.33333) {
		  cond1 = 1;
		  cond2 = -2;
		  cond3 = 3;
		  cond4 = -1;
		  cond5 = 2;
		  cond6 = -3;
	  }
	  else {
		  cond1 = 2;
		  cond2 = -1;
		  cond3 = 3;
		  cond4 = -2;
		  cond5 = 1;
		  cond6 = -3;
	  }
	  if(condSignRand > 0.5) {
		  conditionAssignment.push(cond1)
		  conditionAssignment.push(cond2)
		  conditionAssignment.push(cond3)
		  conditionAssignment.push(cond4)
		  conditionAssignment.push(cond5)
		  conditionAssignment.push(cond6)
		  conditionAssignment.push(-cond1)
		  conditionAssignment.push(-cond2)
		  conditionAssignment.push(-cond3)
		  conditionAssignment.push(-cond4)
		  conditionAssignment.push(-cond5)
		  conditionAssignment.push(-cond6)
	  }
	  else {
		  conditionAssignment.push(-cond1)
		  conditionAssignment.push(-cond2)
		  conditionAssignment.push(-cond3)
		  conditionAssignment.push(-cond4)
		  conditionAssignment.push(-cond5)
		  conditionAssignment.push(-cond6)
		  conditionAssignment.push(cond1)
		  conditionAssignment.push(cond2)
		  conditionAssignment.push(cond3)
		  conditionAssignment.push(cond4)
		  conditionAssignment.push(cond5)
		  conditionAssignment.push(cond6)
	  }
	//   }
	   console.log(conditionAssignment); 
	  
  nouns = {}
  
  nouns["CLAIM"] = []
  nouns["ACCUSATION"] = []
  nouns["FACT"] = []
  
  // CLAIM: a claim whose truth or falsity is not presupposed.
  nouns["CLAIM"].push("assertion")
  nouns["CLAIM"].push("assessment")
  nouns["CLAIM"].push("assumption")
  nouns["CLAIM"].push("belief")
  nouns["CLAIM"].push("claim")
  nouns["CLAIM"].push("conclusion")
  nouns["CLAIM"].push("feeling")
  nouns["CLAIM"].push("finding")
  nouns["CLAIM"].push("idea")
  nouns["CLAIM"].push("inkling")
  nouns["CLAIM"].push("news")
  nouns["CLAIM"].push("opinion")
  nouns["CLAIM"].push("perception")
  nouns["CLAIM"].push("presumption")
  nouns["CLAIM"].push("remark")
  nouns["CLAIM"].push("reminder")
  nouns["CLAIM"].push("revelation")
  nouns["CLAIM"].push("rumor")
  nouns["CLAIM"].push("speculation")
  nouns["CLAIM"].push("statement")
  nouns["CLAIM"].push("suggestion")
  nouns["CLAIM"].push("theory")
  nouns["CLAIM"].push("view")
  nouns["CLAIM"].push("assurance")
  nouns["CLAIM"].push("message")
  nouns["CLAIM"].push("contention")
  nouns["CLAIM"].push("impression")
  nouns["CLAIM"].push("opinion")
  nouns["CLAIM"].push("sense")
  nouns["CLAIM"].push("presumption")
  nouns["CLAIM"].push("revelation")
  nouns["CLAIM"].push("intuition")
  nouns["CLAIM"].push("conjecture")
  nouns["CLAIM"].push("conviction")
  nouns["CLAIM"].push("thought")
  nouns["CLAIM"].push("claim")
  nouns["CLAIM"].push("conclusion")
  nouns["CLAIM"].push("feeling")
  nouns["CLAIM"].push("finding")
  nouns["CLAIM"].push("idea")
  nouns["CLAIM"].push("indication")
  nouns["CLAIM"].push("presumption")
  nouns["CLAIM"].push("revelation")
  nouns["CLAIM"].push("rumor")
  nouns["CLAIM"].push("speculation")
  nouns["CLAIM"].push("guess")
  nouns["CLAIM"].push("story")
  nouns["CLAIM"].push("report")

  nouns["ACCUSATION"].push("allegation")
  nouns["ACCUSATION"].push("accusation")
  nouns["ACCUSATION"].push("insinuation") 
  nouns["ACCUSATION"].push("complaint")
  nouns["ACCUSATION"].push("suspicion")

  nouns["FACT"].push("truth")
  nouns["FACT"].push("fact")
  nouns["FACT"].push("reminder")
  nouns["FACT"].push("proof")
  nouns["FACT"].push("realization")
  nouns["FACT"].push("observation")
  nouns["FACT"].push("understanding")
  nouns["FACT"].push("disclosure")
  
  nounsByThatBiasOrder = [];
  
  
  
  
  nounsByThatBiasOrder = [];
  
  
  
  // Nouns selected according to the average of the three log-frequencies
  nounsByThatBiasOrder.push("story")
  nounsByThatBiasOrder.push("report")
  nounsByThatBiasOrder.push("assessment")
  nounsByThatBiasOrder.push("truth")
  nounsByThatBiasOrder.push("declaration")
  nounsByThatBiasOrder.push("complaint")
  nounsByThatBiasOrder.push("admission")
  nounsByThatBiasOrder.push("disclosure")
  nounsByThatBiasOrder.push("confirmation")
  nounsByThatBiasOrder.push("remark")
  nounsByThatBiasOrder.push("news")
  nounsByThatBiasOrder.push("proof")
  nounsByThatBiasOrder.push("message")
  nounsByThatBiasOrder.push("announcement")
  nounsByThatBiasOrder.push("statement")
  nounsByThatBiasOrder.push("thought")
  nounsByThatBiasOrder.push("allegation")
  nounsByThatBiasOrder.push("indication")
  nounsByThatBiasOrder.push("recognition")
  nounsByThatBiasOrder.push("speculation")
  nounsByThatBiasOrder.push("accusation")
  nounsByThatBiasOrder.push("reminder")
  nounsByThatBiasOrder.push("rumor")
  nounsByThatBiasOrder.push("finding")
  nounsByThatBiasOrder.push("idea")
  nounsByThatBiasOrder.push("feeling")
  nounsByThatBiasOrder.push("conjecture")
  nounsByThatBiasOrder.push("perception")
  nounsByThatBiasOrder.push("certainty")
  nounsByThatBiasOrder.push("revelation")
  nounsByThatBiasOrder.push("understanding")
  nounsByThatBiasOrder.push("claim")
  nounsByThatBiasOrder.push("view")
  nounsByThatBiasOrder.push("observation")
  nounsByThatBiasOrder.push("conviction")
  nounsByThatBiasOrder.push("presumption")
  nounsByThatBiasOrder.push("intuition")
  nounsByThatBiasOrder.push("opinion")
  nounsByThatBiasOrder.push("conclusion")
  nounsByThatBiasOrder.push("notion")
  nounsByThatBiasOrder.push("suggestion")
  nounsByThatBiasOrder.push("sense")
  nounsByThatBiasOrder.push("suspicion")
  nounsByThatBiasOrder.push("assurance")
  nounsByThatBiasOrder.push("realization")
  nounsByThatBiasOrder.push("assertion")
  nounsByThatBiasOrder.push("impression")
  nounsByThatBiasOrder.push("contention")
  nounsByThatBiasOrder.push("assumption")
  nounsByThatBiasOrder.push("belief")
  nounsByThatBiasOrder.push("fact")
  
  nounsFoils = {"assertion":"adulthood fat",
				"assessment":"guaranteed glad",
				"assumption":"installing pre",
				"belief":"invest miss",
				"claim":"apart pre",
				"conclusion":"facilitate cent",
				"feeling":"anymore pre",
				"finding":"watched pre",
				"idea":"gone wish",
				"inkling":"spanned glad",
				"news":"else pre",
				"opinion":"anymore dad",
				"perception":"positioned cent",
				"presumption":"anymore glad",
				"remark":"behave ice",
				"reminder":"delivers mom",
				"revelation":"accelerate pre",
				"rumor":"edged feet",
				"speculation":"researching feet",
				"statement":"recommend mid",
				"suggestion":"downloaded mid",
				"theory":"ignore dad",
				"view":"gone pre",
				"assurance":"enforcing fat",
				"message":"anymore pre",
				"contention":"benefiting pre",
				"impression":"facilitate sell",
				"opinion":"anymore mid",
				"sense":"apart cent",
				"presumption":"warehousing join",
				"revelation":"conversely cent",
				"intuition":"optimized glad",
				"conjecture":"benefiting pre",
				"conviction":"accomplish else",
				"thought":"anymore pre",
				"conclusion":"accomplish foot",
				"feeling":"anymore buy",
				"finding":"letting pre",
				"idea":"gone holy",
				"indication":"accelerate holy",
				"presumption":"researching cup",
				"revelation":"conversely cent",
				"rumor":"suing hair",
				"speculation":"installing sell",
				"guess":"yours pre",
				"story":"apart hear",
				"report":"anyway luck",
				"allegation":"benefiting eat",
				"accusation":"configured sell",
				"insinuation":"benefiting eat", 
				"complaint":"preparing feet",
				"suspicion":"undergone pull",
				"truth":"apart lose",
				"fact":"else glad",
				"reminder":"regulate fat",
				"proof":"yours glad",
				"realization":"documenting shut",
				"observation":"encountered pre",
				"understanding":"characterised cent",
				"disclosure":"preferably cold"};
  
  
  
  topNouns = [];
  for(n = 0; n<nounsByThatBiasOrder.length; n++) {
	  success = false;
	  for(key in nouns) {
		  if(nouns[key].includes(nounsByThatBiasOrder[n])) {
			  success = true;
		  }
	  }
	  if(!success) {
		 console.log("EXCLUDED", nounsByThatBiasOrder[n], success, nouns["HOPE"]);
	  }
	  if(success) {
		  topNouns.push(nounsByThatBiasOrder[n]);
	  }
  }
  
  
  //topNouns = [];
  
  console.log("------------------------")
  console.log("TOP NOUNS BEFORE SLICING", topNouns);
  
  topNouns1 = _.sample(topNouns.slice(0, 15), 12);
  topNouns2 = _.sample(topNouns.slice(topNouns.length-15, topNouns.length), 12);
  //topNouns2 = topNouns.slice(10, 20);
  
  
  console.log(topNouns1);
  console.log(topNouns2);
  console.log("SELECTION");
  topNouns = [];
  for(i=0; i<6; i++) {
	  selected1 = (Math.random() > 0.5) ? 2*i : 2*i+1;
	  selected2 = (Math.random() > 0.5) ? 2*i : 2*i+1;
	  console.log(selected1, selected2, topNouns1.length, topNouns2.length);
	  topNouns.push(topNouns1[selected1]);
	  topNouns.push(topNouns2[selected2]);
  }
  
  
  // for now, only use topNouns1
  
  
  console.log("LENGTH", topNouns.length, topNouns);
  
  
  
  continuations238 = []
  
  for(i=0; i<42; i++) {
	  continuations238.push([]);
  }
  
  
  continuations238[0].push({item : "238_Critical_VN1", s : "that the teacher who the principal liked /annoyed the student, /but it /was only a malicious smear.",a : "x-x-x apart pre cent hour located mid jack ourselves thick phoenix wall follows, hill sun global ride app generates moons."   , n : "CLAIM ACCUSATION", q : "The student was annoyed by the ______?"})
  continuations238[0].push({item : "238_Critical_VN1", s : "that the teacher who the principal liked /failed the student, /but it /was only a malicious smear.",a : "x-x-x apart pre cent hour located mid jack ourselves thick phoenix wall follows, hill sun global ride app generates moons."    , n : "CLAIM ACCUSATION", q : "The student was failed by the ______?"})
  
  continuations238[1].push({item : "238_Critical_VN2", s : "that the doctor who the colleague mistrusted /bothered the patients, /but it /seemed hard to believe.",a : "x-x-x else cash cent jack whilst pre holy reinforce arrowheads retailer mid enjoying, goal vs videos hill ring dollars."  , n : "CLAIM FACT", q : "The patients were bothered by the ______?"})
  continuations238[1].push({item : "238_Critical_VN2", s : "that the doctor who the colleague mistrusted /cured the patients, /but it /seemed hard to believe.",a : "x-x-x else cash cent jack whilst pre holy reinforce arrowheads retailer mid enjoying, goal vs videos hill ring dollars."  , n : "CLAIM FACT", q : "The patients were cured by the ______?"})
  
  continuations238[2].push({item : "238_Critical_VN3", s : "that the president who the farmer admired /impressed the commander, /but it /was entirely bogus.",a : "x-x-x apart glad cent eat ourselves yeah okay meters collide awareness pre disorders, ways wall ice sciences maths.", n : "CLAIM", q : "The commander was impressed by the ______?"})
  continuations238[2].push({item : "238_Critical_VN3", s : "that the president who the farmer admired /appointed the commander, /but it /was entirely bogus.",a : "x-x-x apart glad cent eat ourselves yeah okay meters collide awareness pre disorders, ways wall ice sciences maths."  , n : "CLAIM", q : "The commander was appointed by the ______?"})
  
  continuations238[3].push({item : "238_Critical_VN4", s : "that the victim who the swimmer rescued /surprised the criminal, /and it /appeared on TV.",a : "x-x-x else anti cent eat toward mid lake teaming adviser overview jack involves, miss dad download hall grow.", n : "CLAIM FACT", q : "The criminal was surprised by the ______?"})
  continuations238[3].push({item : "238_Critical_VN4", s : "that the victim who the swimmer rescued /sued the criminal, /and it /appeared on TV.",a : "x-x-x else anti cent eat toward mid lake teaming adviser overview jack involves, miss dad download hall grow." , n : "CLAIM FACT", q : "The criminal was sued by the ______?" })
  
  continuations238[4].push({item : "238_Critical_VN5", s : "that the guest who the cousin invited /pleased the uncle, /and it /drove Jill crazy.",a : "x-x-x apart sick hour eat grows pre hill argues letting arsenal push aimed, anti cent cents Heap prime.", n : "CLAIM FACT", q : "The uncle was pleased by the ______?"})
  continuations238[4].push({item : "238_Critical_VN5", s : "that the guest who the cousin invited /visited the uncle, /and it /drove Jill crazy.",a : "x-x-x apart sick hour eat grows pre hill argues letting arsenal push aimed, anti cent cents Heap prime." , n : "CLAIM FACT", q : "The uncle was visited by the ______?" })
  
  continuations238[5].push({item : "238_Critical_VN6", s : "that the psychiatrist who the nurse assisted /horrified the patient, /and it /became widely known.",a : "x-x-x else cash jack hear investigates hill tree cents outcomes paperback cent suppose, sell guys global sticks build.", n : "CLAIM FACT", q : "The patient was horrified by the ______?"})
  continuations238[5].push({item : "238_Critical_VN6", s : "that the psychiatrist who the nurse assisted /diagnosed the patient, /and it /became widely known.",a : "x-x-x else cash jack hear investigates hill tree cents outcomes paperback cent suppose, sell guys global sticks build." , n : "CLAIM FACT", q : "The patient was diagnosed by the ______?" })
  
  continuations238[6].push({item : "238_Critical_VN7", s : "that the driver who the guide called /amazed the tourist, /and it /was absolutely true.",a : "x-x-x apart pre hour know abroad holy dad hence annual realms term founded, cent wall sir healthcare grow.", n : "CLAIM", q : "The tourist was amazed by the ______?"})
  continuations238[6].push({item : "238_Critical_VN7", s : "that the driver who the guide called /phoned the tourist, /and it /was absolutely true.",a : "x-x-x apart pre hour know abroad holy dad hence annual realms term founded, cent wall sir healthcare grow." , n : "CLAIM", q : "? The tourist was phoned by the ______? @" })
  
  continuations238[7].push({item : "238_Critical_VN8", s : "that the actor who the fans loved /astonished the director, /and it /appeared to be true.",a : "x-x-x apart mid hour eat shown pre hill ford miles treatise cup contains, laws app pregnant cent sir bill.", n : "CLAIM", q : "The director was astonished by the ______?"})
  continuations238[7].push({item : "238_Critical_VN8", s : "that the actor who the fans loved /greeted the director, /and it /appeared to be true.",a : "x-x-x apart mid hour eat shown pre hill ford miles treatise cup contains, laws app pregnant cent sir bill." , n : "CLAIM", q : "The director was greeted by the ______?" })
  
  continuations238[8].push({item : "238_Critical_VN9", s : "that the banker who the analyst defrauded /excited the customer, /but it /proved to be made up.", a : "x-x-x yours sick cent know stroll cool bus staring hydroxide phoenix jack wherever, pre holy soccer kid runs ride hear.", n : "CLAIM", q : "The customer was excited by the ______?"})
  continuations238[8].push({item : "238_Critical_VN9", s : "that the banker who the analyst defrauded /trusted the customer, /but it /proved to be made up.", a : "x-x-x yours sick cent know stroll cool bus staring hydroxide phoenix jack wherever, pre holy soccer kid runs ride hear." , n : "CLAIM", q : "The customer was trusted by the ______?" })
 
  continuations238[9].push({item : "238_Critical_VN10", s : "that the judge who the attorney hated /vindicated the defendant, /but it /was a lie.", a : "x-x-x apart mid hour miss shown fat kid enjoying forty customize page disasters, cent hill cat eat jobs.", n : "CLAIM", q : "The defendant was vindicated by the _______?"})
  continuations238[9].push({item : "238_Critical_VN10", s : "that the judge who the attorney hated /acquitted the defendant, /but it /was a lie.", a : "x-x-x apart mid hour miss shown fat kid enjoying forty customize page disasters, cent hill cat eat jobs." , n : "CLAIM", q : "The defendant was acquitted by the _______?" })
 
  continuations238[10].push({item : "238_Critical_VN11", s : "that the captain who the crew trusted /motivated the sailor, /and it /was nice to hear.", a : "x-x-x else okay cent hear located mom why suck volumes continent pre enters, goal wall jack sale sun anti.", n : "CLAIM FACT", q : "The sailor was motivated by the ______?"})
  continuations238[10].push({item : "238_Critical_VN11", s : "that the captain who the crew trusted /commanded the sailor, /and it /was nice to hear.", a : "x-x-x else okay cent hear located mom why suck volumes continent pre enters, goal wall jack sale sun anti." , n : "CLAIM FACT", q : "The sailor was commanded by the ______?" })
 
  continuations238[11].push({item : "238_Critical_VN12", s : "that the manager who the boss authorized /saddened the intern, /but it /seemed absurd.", a : "x-x-x else anti cent eat whereas pre jack onto illustrate savannah holy oppose, hill app movies runway.", n : "CLAIM FACT", q : "The intern was saddened by the ______?"})
  continuations238[11].push({item : "238_Critical_VN12", s : "that the manager who the boss authorized /hired the intern, /but it /seemed absurd.", a : "x-x-x else anti cent eat whereas pre jack onto illustrate savannah holy oppose, hill app movies runway." , n : "CLAIM FACT", q : "The intern was hired by the ______?" })

  continuations238[12].push({item : "238_Critical_VN13", s : "that the bully who the children hated /surprised the boy, /and it /was entirely correct.", a : "x-x-x breakdowns pre camp eat eaten yes lake enjoying villa vibrant jack nor, mark app note channels engines.", n : "CLAIM FACT ACCUSATION", q : "The boy was surprised by the ______?"})
  continuations238[12].push({item : "238_Critical_VN13", s : "that the bully who the children hated /harassed the boy, /and it /was entirely correct.", a : "x-x-x breakdowns pre camp eat eaten yes lake enjoying villa vibrant jack nor, mark app note channels engines." , n : "CLAIM FACT ACCUSATION", q : "The boy was harassed by the ______?" })

  continuations238[13].push({item : "238_Critical_VN14", s : "that the plaintiff who the jury interrogated /startled the witness, /and it /made it into the news.", a : "x-x-x else mom cent miss encompass holy dad till degeneration turnaround hill thunder, ice sun walk oh guys kid yeah.", n : "CLAIM FACT", q : "The witness was startled by the ______?"})
  continuations238[13].push({item : "238_Critical_VN14", s : "that the plaintiff who the jury interrogated /interrupted the witness, /and it /made it into the news.", a : "x-x-x else mom cent miss encompass holy dad till degeneration turnaround hill thunder, ice sun walk oh guys kid yeah." , n : "CLAIM FACT", q : "The witness was interrupted by the ______?" })
 
  continuations238[14].push({item : "238_Critical_VN15", s : "that the drunkard who the thug hit /stunned the bartender, /and it /sounded hilarious.", a : "x-x-x else week jack eat furlongs yeah sale lows pre phonology glad revisited, hill app buffalo announces.", n : "CLAIM FACT", q : "The bartender was stunned by the ______?"})
  continuations238[14].push({item : "238_Critical_VN15", s : "that the drunkard who the thug hit /outwitted the bartender, /and it /sounded hilarious.", a : "x-x-x else week jack eat furlongs yeah sale lows pre phonology glad revisited, hill app buffalo announces." , n : "CLAIM FACT", q : "The bartender was outwitted by the ______?" })
 
  continuations238[15].push({item : "238_Critical_VN16", s : "that the medic who the survivor thanked /surprised the surgeon, /but it /turned out to be untrue.", a : "x-x-x apart pre cent know della mid lake smoothly unicorn pyramid lord thereof, jack hill nation walk park hair caster.", n : "CLAIM", q : "The surgeon was surprised by the _______?"})
  continuations238[15].push({item : "238_Critical_VN16", s : "that the medic who the survivor thanked /greeted the surgeon, /but it /turned out to be untrue.", a : "x-x-x apart pre cent know della mid lake smoothly unicorn pyramid lord thereof, jack hill nation walk park hair caster." , n : "CLAIM", q : "The surgeon was greeted by the _______?" })
 
  continuations238[16].push({item : "238_Critical_VN17", s : "that the lifeguard who the soldier taught /encouraged the swimmer, /and it /took the townspeople by surprise.", a : "x-x-x yours dad cent know diversify pre gift amongst button propose app opposes, laws tax vote ago republished vs believes.", n : "CLAIM FACT", q : "The swimmer was encouraged by the ______?"})
  continuations238[16].push({item : "238_Critical_VN17", s : "that the lifeguard who the soldier taught /rescued the swimmer, /and it /took the townspeople by surprise.", a : "x-x-x yours dad cent know diversify pre gift amongst button propose app opposes, laws tax vote ago republished vs believes." , n : "CLAIM FACT", q : "The swimmer was rescued by the ______?" })
  
  continuations238[17].push({item : "238_Critical_VN18", s : "that the fisherman who the gardener helped /delighted the politician, /and it /was on the news.", a : "x-x-x else bill jack miss entertain dad mom coincide mobile dividend app kilometers, guy pre ago announces nor whereas.", n : "CLAIM FACT", q : "The politician was delighted by the ______?"})
  continuations238[17].push({item : "238_Critical_VN18", s : "that the fisherman who the gardener helped /admired the politician, /and it /was on the news.", a : "x-x-x else bill jack miss entertain dad mom coincide mobile dividend app kilometers, guy pre ago announces nor whereas." , n : "CLAIM FACT", q : "The politician was admired by the ______?" })

  continuations238[18].push({item : "238_Critical_VN19", s : "that the janitor who the organizer criticized /amused the audience, /and it /was funny.", a : "x-x-x gone lose cent app onwards anti holy endorsing disclosure bundle jack includes, ago vs lord coast.", n : "CLAIM FACT", q : "The audience was amused by the ______?"})
  continuations238[18].push({item : "238_Critical_VN19", s : "that the janitor who the organizer criticized /ignored the audience, /and it /was funny.", a : "x-x-x gone lose cent app onwards anti holy endorsing disclosure bundle jack includes, ago vs lord coast." , n : "CLAIM FACT", q : "The audience was ignored by the ______?" })
 
  continuations238[19].push({item : "238_Critical_VN20", s : "that the investor who the scientist detested /disappointed the entrepreneur, /and it /drove everyone crazy.", a : "x-x-x apart pre cent miss tolerate sir mom depending arousing ministries holy disabilities, fun camp cents consists mouth.", n : "CLAIM FACT", q : "The entrepreneur was disappointed by the ______?"})
  continuations238[19].push({item : "238_Critical_VN20", s : "that the investor who the scientist detested /deceived the entrepreneur, /and it /drove everyone crazy.", a : "x-x-x apart pre cent miss tolerate sir mom depending arousing ministries holy disabilities, fun camp cents consists mouth." , n : "CLAIM FACT", q : "The entrepreneur was deceived by the ______?" })
 
  continuations238[20].push({item : "238_Critical_VN21", s : "that the firefighter who the neighbor insulted /discouraged the homeowner, /but it /went unnoticed.", a : "x-x-x apart mid camp eat accelerates pre yes mutually twenties modules rate federated, miss vs gift disparity.", n : "CLAIM FACT", q : "The homeowner was discouraged by the ______?"})
  continuations238[20].push({item : "238_Critical_VN21", s : "that the firefighter who the neighbor insulted /rescued the homeowner, /but it /went unnoticed.", a : "x-x-x apart mid camp eat accelerates pre yes mutually twenties modules rate federated, miss vs gift disparity." , n : "CLAIM FACT", q : "The homeowner was rescued by the ______?" })
 
  continuations238[21].push({item : "238_Critical_VN22", s : "that the agent who the FBI sent /confused the criminal, /and it /was acknowledged.", a : "x-x-x gone pre cent miss forth mid ones TIL deep enjoying cup achieved, ball hill ice competitions.", n : "CLAIM FACT", q : "The criminal was confused by the ______?"})
  continuations238[21].push({item : "238_Critical_VN22", s : "that the agent who the FBI sent /arrested the criminal, /and it /was acknowledged.", a : "x-x-x gone pre cent miss forth mid ones TIL deep enjoying cup achieved, ball hill ice competitions." , n : "CLAIM FACT", q : "The criminal was arrested by the ______?" })
  
  continuations238[22].push({item : "238_Critical_VN23", s : "that the plumber who the apprentice consulted /puzzled the woman, /and it /was true.", a : "x-x-x apart cool cent walk flanked holy yeah deposition footsteps syllable mid shall, miss vs sea hill.", n : "CLAIM", q : "The woman was puzzled by the ______?"})
  continuations238[22].push({item : "238_Critical_VN23", s : "that the plumber who the apprentice consulted /assisted the woman, /and it /was true.", a : "x-x-x apart cool cent walk flanked holy yeah deposition footsteps syllable mid shall, miss vs sea hill." , n : "CLAIM", q : "The woman was assisted by the ______?" })

  continuations238[23].push({item : "238_Critical_VN24", s : "that the senator who the diplomat supported /troubled the opponent, /and it /deserved attention.", a : "x-x-x else foot jack miss discuss fun mid figuring breathing semester pre delivers, hour kids guessing chocolate.", n : "CLAIM FACT", q : "The opponent was troubled by the ______?"})
  continuations238[23].push({item : "238_Critical_VN24", s : "that the senator who the diplomat supported /defeated the opponent, /and it /deserved attention.", a : "x-x-x else foot jack miss discuss fun mid figuring breathing semester pre delivers, hour kids guessing chocolate." , n : "CLAIM FACT", q : "The opponent was defeated by the ______?" })

  continuations238[24].push({item : "238_Critical_VN25", s : "that the fiancé who the author met /startled the bride, /but it /did not surprise anyone.", a : "x-x-x else glad cent hear affirm holy jack beyond lake scramble app grams, pre vs sun yes downtown senate.", n : "CLAIM FACT", q : "The bride was startled by the ______?"})
  continuations238[24].push({item : "238_Critical_VN25", s : "that the fiancé who the author met /married the bride, /but it /did not surprise anyone.", a : "x-x-x else glad cent hear affirm holy jack beyond lake scramble app grams, pre vs sun yes downtown senate." , n : "CLAIM FACT", q : "The bride was married by the ______?" })

  continuations238[25].push({item : "238_Critical_VN26", s : "that the businessman who the sponsor backed /surprised the employee, /and it /came as a disappointment.", a : "x-x-x formulated hair hour eat accommodate jack hill unaware angels kitchen wall diabetes, pass lie male join nor concentrations.", n : "CLAIM FACT ACCUSATION", q : "The employee was surprised by the ______?"})
  continuations238[25].push({item : "238_Critical_VN26", s : "that the businessman who the sponsor backed /fired the employee, /and it /came as a disappointment.", a : "x-x-x formulated hair hour eat accommodate jack hill unaware angels kitchen wall diabetes, pass lie male join nor concentrations." , n : "CLAIM FACT ACCUSATION", q : "The employee was fired by the ______?" })

  continuations238[26].push({item : "238_Critical_VN27", s : "that the thief who the detective caught /enraged the woman, /and it /broke her family's heart.", a : "x-x-x substrates dad cent bag watts holy mid renewable bottom resorts drop shall, pre jack click app deployed users.", n : "CLAIM FACT ACCUSATION", q : "The woman was enraged by the ______?"})
  continuations238[26].push({item : "238_Critical_VN27", s : "that the thief who the detective caught /robbed the woman, /and it /broke her family's heart.", a : "x-x-x substrates dad cent bag watts holy mid renewable bottom resorts drop shall, pre jack click app deployed users." , n : "CLAIM FACT ACCUSATION", q : " The woman was robbed by the ______?" })

  continuations238[27].push({item : "238_Critical_VN28", s : "that the criminal who the stranger distracted /baffled the officer, /and it /seemed concerning.", a : "x-x-x childbirth sea hour jack anywhere fat mom moreover adjustment fossils yeah follows, pre cent liquid referendum.", n : "CLAIM FACT ACCUSATION", q : "The officer was baffled by the ______?"})
  continuations238[27].push({item : "238_Critical_VN28", s : "that the criminal who the stranger distracted /abducted the officer, /and it /seemed concerning.", a : "x-x-x childbirth sea hour jack anywhere fat mom moreover adjustment fossils yeah follows, pre cent liquid referendum." , n : "CLAIM FACT ACCUSATION", q : "The officer was abducted by the ______?" })

  continuations238[28].push({item : "238_Critical_VN29", s : "that the customer who the vendor welcomed /terrified the clerk, /and it /was very believable.", a : "x-x-x apart mid cent walk enjoying lake holy pierce prestige peninsula sad hangs, hill sun vote jack patrolling.", n : "CLAIM", q : "The clerk was terrified by the ______?"})
  continuations238[28].push({item : "238_Critical_VN29", s : "that the customer who the vendor welcomed /contacted the clerk, /and it /was very believable.", a : "x-x-x apart mid cent walk enjoying lake holy pierce prestige peninsula sad hangs, hill sun vote jack patrolling." , n : "CLAIM", q : "The clerk was contacted by the ______?" })
   
  continuations238[29].push({item : "238_Critical_VN30", s : "that the commander who the president appointed /was confirmed yesterday, /and it /troubled people.", a : "x-x-x apart mid hall eat depending kid yeah ourselves boyfriend box streets adventure, dad cent suspense wonder.", n : "CLAIM FACT", q : "The ______ was confirmed yesterday?"})
  continuations238[29].push({item : "238_Critical_VN30", s : "that the commander who the president appointed /was fired yesterday, /and it /troubled people.", a : "x-x-x apart mid hall eat depending kid yeah ourselves boyfriend box streets adventure, dad cent suspense wonder." , n : "CLAIM FACT", q : "The ______ was fired yesterday?" })
    
  continuations238[30].push({item : "238_Critical_VN31", s : "that the trickster who the woman recognized /was acknowledged by the police, /and it /calmed people down.", a : "x-x-x else wish cent hear redevelop pre mom twice invitation guys destination push miss happen, app hill basins choose wind.", n : "CLAIM FACT", q : "The police acknowledged the ______?"})
  continuations238[30].push({item : "238_Critical_VN31", s : "that the trickster who the woman recognized /was arrested by the police, /and it /calmed people down.", a : "x-x-x else wish cent hear redevelop pre mom twice invitation guys destination push miss happen, app hill basins choose wind." , n : "CLAIM FACT", q : "The police arrested the ______?" })
    
  continuations238[31].push({item : "238_Critical_VN32", s : "that the politician who the farmer trusted /was refuted three days ago, /but it /did not bother the farmer.", a : "x-x-x apart mid hour know facilitate pre lake genres blowing yeah runways weird sell sale, jack guys mind sir client app relies.", n : "CLAIM FACT", q : "The ______ was refuted three days ago?"})
  continuations238[31].push({item : "238_Critical_VN32", s : "that the politician who the farmer trusted /was elected three days ago, /but it /did not bother the farmer.", a : "x-x-x apart mid hour know facilitate pre lake genres blowing yeah runways weird sell sale, jack guys mind sir client app relies." , n : "CLAIM FACT", q : "The ______ was elected three days ago?" })
    
  continuations238[32].push({item : "238_Critical_VN33", s : "that the politician who the banker bribed /seemed credible to everyone, /and it /gave John the chills.", a : "x-x-x else mom cent eat recognizes pre kid biking soften extent pharmacy cup episodes, bag hill hear Walk yeah filler.", n : "CLAIM FACT", q : "The ______ seemed credible to everyone?"})
  continuations238[32].push({item : "238_Critical_VN33", s : "that the politician who the banker bribed /seemed corrupt to everyone, /and it /gave John the chills.", a : "x-x-x else mom cent eat recognizes pre kid biking soften extent pharmacy cup episodes, bag hill hear Walk yeah filler." , n : "CLAIM FACT", q : "The ______ seemed corrput to everyone?" })
    
  continuations238[33].push({item : "238_Critical_VN34", s : "that the sculptor who the painter admired /made headlines in the US, /and it /did not surprise anyone.", a : "x-x-x apart mid cent miss coincide pre fat raining puppies tour exchanged hour guys OH, anti mom dad jack agencies option.", n : "CLAIM FACT", q : "The ______ made headlines in the US?"})
  continuations238[33].push({item : "238_Critical_VN34", s : "that the sculptor who the painter admired /made sculptures in the US, /and it /did not surprise anyone.", a : "x-x-x apart mid cent miss coincide pre fat raining puppies tour exchanged hour guys OH, anti mom dad jack agencies option." , n : "CLAIM FACT", q : "The ______ made sculptures in the US?" })
    
  continuations238[34].push({item : "238_Critical_VN35", s : "that the runner who the psychiatrist treated /was widely known in France, /but it /turned out to be incorrect.", a : "x-x-x apart sick cent miss admire anti lord philanthropy kingdom jack update anybody hear Affront, dad app handle need sir case workforce.", n : "CLAIM", q : "The ______ was widely known in France?"})
  continuations238[34].push({item : "238_Critical_VN35", s : "that the runner who the psychiatrist treated /won the marathon in France, /but it /turned out to be incorrect.", a : "x-x-x apart sick cent miss admire anti lord philanthropy kingdom jack update anybody hear Affront, dad app handle need sir case workforce." , n : "CLAIM", q : "The ______ won the marathon in France?" })
    
  continuations238[35].push({item : "238_Critical_VN36", s : "that the analyst who the banker trusted /appeared on TV this morning, /and it /was very believable.", a : "x-x-x apart sick hour eat whereas fun sir loudly tourist literacy pre AL yeah keeping, anti hill cent lake blueprints.", n : "CLAIM", q : "The ______ appeared on TV this morning?"})
  continuations238[35].push({item : "238_Critical_VN36", s : "that the analyst who the banker trusted /repaired the TV this morning, /and it /was very believable.", a : "x-x-x apart sick hour eat whereas fun sir loudly tourist literacy pre AL yeah keeping, anti hill cent lake blueprints." , n : "CLAIM", q : "The ______ repaired the TV this morning?" })
    
  continuations238[36].push({item : "238_Critical_VN37", s : "that the child who the medic rescued /was mentioned in newspapers, /and it /seemed very interesting.", a : "x-x-x else pre cent miss shown anti lake amend squeeze china amendment lady midfielder, goal jack senate vote partnership.", n : "CLAIM FACT", q : "The ______ was mentioned in newspapers?"})
  continuations238[36].push({item : "238_Critical_VN37", s : "that the child who the medic rescued /wrote articles in newspapers, /and it /seemed very interesting.", a : "x-x-x else pre cent miss shown anti lake amend squeeze china amendment lady midfielder, goal jack senate vote partnership." , n : "CLAIM FACT", q : "The ______ wrote articles in newspapers?" })
    
  continuations238[37].push({item : "238_Critical_VN38", s : "that the carpenter who the craftsman carried /confused the apprentice, /and it /came as a disappointment.", a : "x-x-x benefiting sea hour eat calculate mid mom lifetimes weekend blog app punishable, hate vs jack dad miss municipalities.", n : "CLAIM FACT ACCUSATION", q : "The apprentice was confused by the ______?"})
  continuations238[37].push({item : "238_Critical_VN38", s : "that the carpenter who the craftsman carried /hurt the apprentice, /and it /came as a disappointment.", a : "x-x-x benefiting sea hour eat calculate mid mom lifetimes weekend blog app punishable, hate vs jack dad miss municipalities." , n : "CLAIM FACT ACCUSATION", q : "The apprentice was hurt by the ______?" })

  continuations238[38].push({item : "238_Critical_VN39", s : "that the daughter who the sister found /frightened the grandmother, /and it /seemed concerning.", a : "x-x-x configured sea camp eat enjoying yeah mid toward click subsidies cent accountable, miss jack movies referendum.", n : "CLAIM FACT ACCUSATION", q : "The grandmother was frightened by the ______?"})
  continuations238[38].push({item : "238_Critical_VN39", s : "that the daughter who the sister found /greeted the grandmother, /and it /seemed concerning.", a : "x-x-x configured sea camp eat enjoying yeah mid toward click subsidies cent accountable, miss jack movies referendum." , n : "CLAIM FACT ACCUSATION", q : "The grandmother was greeted by the ______?" })
    
  continuations238[39].push({item : "238_Critical_VN40", s : "that the tenant who the foreman looked for /annoyed the shepherd, /but it /proved to be made up.", a : "x-x-x apart pre cent rose admire mid guy flanked videos ring madness week pandemic, anti jack pocket sit card guys app.", n : "CLAIM ACCUSATION", q : "The shepherd was annoyed by the ______?"})
  continuations238[39].push({item : "238_Critical_VN40", s : "that the tenant who the foreman looked for /questioned the shepherd, /but it /proved to be made up.", a : "x-x-x apart pre cent rose admire mid guy flanked videos ring madness week pandemic, anti jack pocket sit card guys app." , n : "CLAIM ACCUSATION", q : "The shepard was questioned by the ______?" })
    
  continuations238[40].push({item : "238_Critical_VN41", s : "that the pharmacist who the stranger saw /distracted the customer, /and it /sounded surprising.", a : "x-x-x yours sick cent miss conversely pre wild moreover lake complexity mid achieved, hill vs hardest capability.", n : "CLAIM FACT", q : "The customer was distracted by the ______?"})
  continuations238[40].push({item : "238_Critical_VN41", s : "that the pharmacist who the stranger saw /questioned the customer, /and it /sounded surprising.", a : "x-x-x yours sick cent miss conversely pre wild moreover lake complexity mid achieved, hill vs hardest capability." , n : "CLAIM FACT", q : "The customer was questioned by the ______?" })

  continuations238[41].push({item : "238_Critical_VN42", s : "that the surgeon who the patient thanked /shocked his colleagues, /but it /seemed to be untrue.", a : "x-x-x yours pre cent know raining hate ones towards modesty picnic trip midfielder, fun app dinner park nor techno.", n : "CLAIM", q : "His colleagues were shocked by the ______?"})
  continuations238[41].push({item : "238_Critical_VN42", s : "that the surgeon who the patient thanked /cured his colleagues, /but it /seemed to be untrue.", a : "x-x-x yours pre cent know raining hate ones towards modesty picnic trip midfielder, fun app dinner park nor techno." , n : "CLAIM", q : "His colleagues were cured by the ______?" })
  // TODO 238 Note the order the compatible and incompatible is wrong. For consistency, this is fixed downstream in the processing script. Later, better fix this here.
  
  
  for(i=0; i<42; i++) {
	  for(j=0; j<2; j++) {
		  s = continuations238[i][j].s.split(" ");
		  regions = [];
		  reg_id = 0;
		  within_reg = 0;
		  for(k = 0; k<s.length; k++) {
			  if(k == 3) {
				  reg_id = 1;
				  within_reg = 0;
			  } else if(s[k][0] == "/") {
				  reg_id ++;
				  within_reg = 0;
					   s[k] = s[k].substr(1);
			  }
			  regions.push("REGION_"+reg_id+"_"+within_reg);
			  within_reg++;
		  }
		  continuations238[i][j].s = s.join(" ")
		  continuations238[i][j].r = regions.join(" ");
		  console.log(continuations238[i][j]);
		  console.log(s.length, regions.length);
	  }
	  a = continuations238[i][0];
	  b = continuations238[i][1];
	  continuations238[i] = [b,a];
  
  }
  
  
  console.log(continuations238);
  
  continuations = continuations238
  
  console.log(continuations);
  
  
  
  for(i = 0; i<continuations.length; i++) {
	  console.log(i, continuations[i]);
	  for(j =0; j<2; j++) {
				  continuations[i][j].condition = "continuations"
		  continuations[i][j].n = continuations[i][j].n.split(" ")
	  }
  }
  
  
  continuationsChosen = _.shuffle(continuations);
  console.log(continuationsChosen);
  
  
  
  
  
  console.log(topNouns);
  
  FAILED = true;
  matching_attempts = 0;
  while(FAILED) {
  topNouns = _.shuffle(topNouns);
  
  matching_attempts = matching_attempts+1;
	  if(matching_attempts > 10) {
		  CRASH();
	  }
	  nounsAndVerbsCopied = [...continuationsChosen]
		  nounsAndVerbsAssignment = []
	  FAILED = false;
  //	console.log(topNouns);
		  for(n = 0; n<topNouns.length; n++) {
  //		console.log(n);
				  relevantContinuations = [];
			  noun = topNouns[n]
  //		console.log(noun);
				  for(c = 0; c<nounsAndVerbsCopied.length; c++) {
  //			console.log(c);
  //			console.log(nounsAndVerbsCopied[c].n);
  
			  for(d = 0; d<nounsAndVerbsCopied[c][0].n.length; d++) {
  //				console.log(nounsAndVerbsCopied[c].n[d]);
  //				console.log(noun, nouns[nounsAndVerbsCopied[c].n[d]]);
								  console.log(nounsAndVerbsCopied[c][0].n, d);
						  if(nouns[nounsAndVerbsCopied[c][0].n[d]].includes(noun)) {
				  //	console.log("found "+noun);
								 relevantContinuations.push(c);
							  }
			  }
				  }
		  console.log("CONSIDERING NOUN", noun, n, "Remaining conts.", nounsAndVerbsCopied.length, relevantContinuations);
				  if(relevantContinuations.length == 0) {
					  FAILED = true;
					  break
				  } else {
						 chosen = _.sample(relevantContinuations, 1);
			  //console.log(chosen);
			  nounsAndVerbsAssignment.push(nounsAndVerbsCopied[chosen]);
			  nounsAndVerbsCopied.splice(chosen, 1);
			  //console.log(nounsAndVerbsCopied.length)
				  }
		  }
		  console.log("ATTEMPTS", matching_attempts);
  }
  
  
  
  console.log(nounsAndVerbsAssignment);
  console.log(topNouns);
  conditionAssignment = _.shuffle(conditionAssignment);
  
  continuations = nounsAndVerbsAssignment;
  console.log(conditionAssignment);
  
  conditions_chosen = [];
  continuationsChosen = []
  for(i = 0; i<continuations.length; i++) {
	  continuations[i][0].noun = topNouns[i];
	  continuations[i][1].noun = topNouns[i];
	  continuations[i][0].s = "The "+topNouns[i]+" was "+continuations[i][0].s+ " " + topNouns[i];
	  continuations[i][1].s = "The "+topNouns[i]+" was "+continuations[i][1].s+ " " + topNouns[i];
	  continuations[i][0].r = "REGION_D0 REGION_N0 REGION_W0 "+continuations[i][0].r+" REGION_CQ";
	  continuations[i][1].r = "REGION_D0 REGION_N0 REGION_W0 "+continuations[i][1].r+" REGION_CQ";
	  console.log(continuations[i]);
	  if(conditionAssignment[i] < 0) {
		  item = continuations[i][0];
		  if(conditionAssignment[i] == -1) { 
				  item["condition"] = "critical_nohead_incompatible"
		  } else if(conditionAssignment[i] == -2) {
				  item["condition"] = "critical_single_incompatible" 
		  } else if (conditionAssignment[i] == -3) {
				  item["condition"] = "critical_double_incompatible"
		  }
  
		  words1 = continuations[i][0].s.split(" ")
		  words2 = continuations[i][1].s.split(" ")
		  regions = item.r.split(" ");
		  item.distractor_condition = "none";
		  
	  } else {
		  item = continuations[i][1];
		  if(conditionAssignment[i] == 1) { 
				  item["condition"] = "critical_nohead_compatible"
		  } else if(conditionAssignment[i] == 2) {
				  item["condition"] = "critical_single_compatible" 
		  } else if (conditionAssignment[i] == 3) {
				  item["condition"] = "critical_double_compatible"
		  }
		  words1 = continuations[i][0].s.split(" ")
		  words2 = continuations[i][1].s.split(" ")
		  regions = item.r.split(" ");
		  item.distractor_condition = "none";
		  }

	  item.a = continuations[i][0].a;
	  s_ = [];
	  a_ = [];
	  r_ = [];
	  s = item.s.split(" ");
	  a = item.a.split(" ");
	  a.push(s[5])
	  r = item.r.split(" ");
	  itemNounFoils = nounsFoils[topNouns[i]].split(" ");
	  a[1] = itemNounFoils[0]
	  a[2] = itemNounFoils[1]

	  console.log(r);
	  condition = item["condition"]
  
	  for(j=0; j<s.length; j++) {
		  if(condition.startsWith("critical_nohead")) {
			  s_.push(s[j]);
			  a_.push(a[j]);
			  r_.push(r[j]);
		  }
		  else if(condition.startsWith("critical_single") && (!r[j].startsWith("REGION_W0")) && (!r[j].startsWith("REGION_1")) && (!r[j].startsWith("REGION_3"))) {
			  s_.push(s[j].replace(",", ""));
			  a_.push(a[j].replace(",", ""));
			  r_.push(r[j]);
		  }
		  else if(condition.startsWith("critical_double") && (!r[j].startsWith("REGION_W0")) && (!r[j].startsWith("REGION_3"))) {
			  s_.push(s[j].replace(",", ""));
			  a_.push(a[j].replace(",", ""));
			  r_.push(r[j]);
		  }
		  
	  }
	  item.s = s_.join(" ")
	  item.a = a_.join(" ")
	  item.r = r_.join(" ")
  
  
	  continuationsChosen.push(item)
	  conditions_chosen.push(condition);
  }
  
  
  console.log("CONTINUATIONS CHOSEN");
  console.log(continuationsChosen);
  criticalChosen = continuationsChosen
  console.log(conditions_chosen.sort());
  exp.conditions_chosen = conditions_chosen.sort();
  
  
  
  
  
  fillers = []
  fillers.push({s:"The divorcee has come to love her life ever since she got divorced. life", a:"x-x-x nearly else bed took fell lord cup air stand base web keyboard. husband", q : "The divorcee loves her ______?"}) 
  fillers.push({s:"The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help. philosopher", a:"x-x-x rebelling trip lot corpses audible kept inspections appeared card branch moving happen polish oh. mathematician", q : "The ______ was baffled at the banquet?"}) 
  fillers.push({s:"The showman travels to different cities every month. showman", a:"x-x-x citing terrain hall certainly listen write rates. month", q : "The ______ travels to different cities?"}) 
  fillers.push({s:"The roommate takes out the garbage every week. roommate", a:"x-x-x attest doubt sold lose enables worst anti. week", q : "The garbage is taken out by the ______"}) 
  fillers.push({s:"The dragon wounded the knight although he was far too crippled to protect the princess. knight", a:"x-x-x endorses funding plan borrow question walk tree pop key teammate stay society map indicate. princess", q : "The dragon wounded the ______?"}) 
  fillers.push({s:"The office-worker worked through the stack of files on his desk quickly. files", a:"x-x-x appreciating forget arrived lady prone wife treat fall born rain western. desk", q : "The office worker worked through the ______?"}) 
  fillers.push({s:"The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt. firemen", a:"x-x-x originate war sure among outsourcing cent deviance anymore mouth fun us enter laws yes produced observer plus bill weigh. guilt", q : "The arsonist was apprehended by the ______?"}) 
  fillers.push({s:"During the season, the choir holds rehearsals in the church regularly. choir", a:"x-x-x nice called, us haunt anger prophecies laws thus issues customers. season", q : "Rehearsals are held by the ______?"}) 
  fillers.push({s:"The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room. speaker", a:"x-x-x criticises holy sad activated fraction upside mom files cases lot know port lord holy products port van guy how. historian", q : "The chair was kicked by the ______?"}) 
  fillers.push({s:"The milkman punctually delivers the milk at the door every day. milkman", a:"x-x-x obstruct clerestory lesbians lose quit ass nor took weird join. door", q : "The ______ delivers the milk?"}) 
  fillers.push({s:"The quarterback dated the cheerleader although this hurt her reputation around school. cheerleader", a:"x-x-x empties fairy sit propagation violence tell east lake represents access placed. school", q : "The quarterback dated the ______?"}) 
  fillers.push({s:"The citizens of France eat oysters. citizens", a:"x-x-x allege anti Amount girl lattice. clams", q : "Oysters are eaten by the ______?"}) 
  fillers.push({s:"The bully punched the kid after all the kids had to leave to go to class. bully", a:"x-x-x arousing rituals eat what birth felt ha ha sun lake forms link jack size feels. class", q : "The kid was punched by the ______?"}) 
  fillers.push({s:"After the argument, the husband ignored his wife. wife", a:"x-x-x plus suggests, cent without harmony seen here. argument", q : "The husband ignored the ______?"}) 
  fillers.push({s:"The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints. engineer", a:"x-x-x succumbing oh ha defend feet mine ones ha shouting rescind ounces sort including ass happen infantry laws far protecting. lawyer", q : "The secretary was blamed by the ______"}) 
  fillers.push({s:"The librarian put the book onto the shelf. shelf", a:"x-x-x impede east grow this wave grow bacon. librarian", q : "The book was put onto the ______"}) 
  fillers.push({s:"The photographer processed the film on time. photographer", a:"x-x-x prematurely eliminate ago yes non nor. time", q : "The film was processed by the ______?"})
  fillers.push({s:"The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider. spider", a:"x-x-x enclosing sad cent been hell pro say jack earn resource expert file gets ended list per decide lady anti imagine quotes. boy", q : "The dog was scared by the ______?"}) 
  fillers.push({s:"The sportsman goes jogging in the park regularly. park", a:"x-x-x incurring hear outback hope fell been processes. road", q : "The sportsman goes jogging in the ______?"}) 
  fillers.push({s:"The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient. customer", a:"x-x-x equates okay yeah bill sun maybe desperate wish wondered married link an unfortunately chronic miss yes residence inscriptions. plan", q : "The operator was contacted by the ______?"}) 
  fillers.push({s:"The private tutor explained the assignment carefully. tutor", a:"x-x-x reproduce bumps amendment lot kilometers centuries. student", q : "The assignment was explained by the ______?"}) 
  fillers.push({s:"The audience who was at the club booed the singer before the owner of the bar could remove him from the stage. singer", a:"x-x-x solidly anti mid sir why me levee glad argued larger rich lying east done yes worse allows term file rose there. owner", q : "The audience booed the ______?"}) 
  fillers.push({s:"The defender is constantly scolding the keeper. defender", a:"x-x-x disembark sick definition dilation yeah albeit. coach", q : "The keeper is scolded by the ______?"}) 
  fillers.push({s:"The hippies who the police at the concert arrested complained to the officials while the last act was going on stage. hippies", a:"x-x-x possesses sale room anyone oh fit writers resource completion kill cup discussed worst damn yes grow sick worry sir older. police", q : "The ______ complained to the officials?"}) 
  fillers.push({s:"The natives on the island captured the anthropologist because she had information that could help the tribe. natives", a:"x-x-x emanating fat else forget managers plan misconceptions release pick away combination die gonna damn gets shake. information", q : "The anthropologist was captured by the ______?"}) 
  fillers.push({s:"The trainee knew that the task which the director had set for him was impossible to finish within a week. task", a:"x-x-x recursively easy jack eat earn prime note together wind word lose anti girl commission gun served degree cup thus. director", q : "The ______ was impossible to finish?"}) 
  fillers.push({s:"The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room. administrator", a:"x-x-x unmask hell fact forth none anti scales detectives pungent nice smoky match lake islands boys imagine view luck recommend able. nurse", q : "The medic was scolded by the ______?"}) 
  fillers.push({s:"The company was sure that its new product, which its researchers had developed, would soon be sold out. product", a:"x-x-x closely mind dad sir cent nor another, throw drug accompanied eyes everybody, south page ha trip whom. company", q : "The ______ would soon be sold out?"}) 
  fillers.push({s:"The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank. astronaut", a:"x-x-x supervises oh oh necessarily bed sure size yeah hungry vigorously calculated died reinforcements gotta rose electrical kept countries dean pain told laid cat. journalists", q : "The administrators were criticized by the ______?"}) 
  fillers.push({s:"The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it. janitor", a:"x-x-x conclude fat us intakes east ones miss ha today bedding mid tendency vote woods oh law however healthy rest kid wide road lake jack. doorman", q : "The guest was bothered by the ______?"}) 
  fillers.push({s:"The technician at the show repaired the robot while people were taking a break for coffee. technician", a:"x-x-x devoting hate been guys comrades cup sells sweet stupid sale policy met today sale cannot. people", q : "The robot was repaired by the ______?"}) 
  fillers.push({s:"The salesman feared that the printer which the customer bought was damaged. customer", a:"x-x-x dosing robust walk bar knocked weeks mid sciences impact map premier. salesman", q : "The printer was bought by the ______?"}) 
  fillers.push({s:"The students studied the surgeon whenever he performed an important operation. surgeon", a:"x-x-x reused summary stay advised indicate file something cent president companies. students", q : "The operations are performed by the ______?"}) 
  fillers.push({s:"The locksmith can crack the safe easily. safe", a:"x-x-x exert okay firms met took agreed. wall", q : "The locksmith can crack the ______ easily?"}) 
  fillers.push({s:"The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet. woman", a:"x-x-x seeking cool sea hear ass basically plain lie jerseys reached eyes came mom sit football bell cent enters. toilet", q : "The plumber was hired by the ______?"}) 
  fillers.push({s:"Yesterday the swimmer saw only a turtle at the beach. turtle", a:"x-x-x nice hurdles ways fund web intake anti sold china. whale", q : "The swimmer saw a ______?"}) 
  fillers.push({s:"The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain. surgeon", a:"x-x-x responding way web belonging bad girl ways soul hope databases profitable soul bullion playing hour explores ball won fun hope statement town windows. detective", q : "The coroner was questioned by the ______?"}) 
  fillers.push({s:"The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper. gangster", a:"x-x-x rejoining lack how arbitrary far came held economic contracted park realizes animals read except religions bed case displays size furthering. detective", q : "The waitress was implicated by the ______?"}) 
  fillers.push({s:"During the party everybody was dancing to rock music. party", a:"x-x-x buy comes otherwise few monster pay ago agree. music", q : "Everybody was dancing at the ______?"}) 
  fillers.push({s:"The fans at the concert loved the guitarist because he played with so much energy. fans", a:"x-x-x besting holy via citizen older seat cooperate limited keep cancer sit does mass months. band", q : "The guitarist was loved by the ______?"}) 
  fillers.push({s:"The intern comforted the patient because he was in great pain. intern", a:"x-x-x predate receptive wind noticed percent kid move park basis win. pain", q : "The patient was comforted by the ______?"}) 
  fillers.push({s:"The casino hired the daredevil because he was confident that everything would go according to plan. daredevil", a:"x-x-x commences sword yes universes protect does her describes add understand china six authority ways down. casino", q : "The ______ was confident?"}) 
  fillers.push({s:"The beggar is often scrounging for cigarettes. beggar", a:"x-x-x officially mid feels concourses fan agreements. cigarette", q : "The ______ is scrounging?"}) 
  fillers.push({s:"The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate. cartoonist", a:"x-x-x diversifying heat god whoever communist legalized jack den perfect keep account oh affiliates feet learn description. readers", q : "The dean was pressured by the ______?"}) 
  fillers.push({s:"The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape. prisoner", a:"x-x-x certainly luck fine aimed suitable teaming mind invent congress mom grow boy describes pick author walk poetry. guard", q : "The warden was tackled by the ______?"}) 
  fillers.push({s:"The passer-by threw the cardboard box into the trash-can with great force. trash-can", a:"x-x-x succumbs quiet draw equitable his lord wish quarterly born agree agree. passer-by", q : "The cardboard box was thrown into the ______?"}) 
  fillers.push({s:"The biker who the police arrested ran a light since he was driving under the influence of alcohol. biker", a:"x-x-x rehabilitate risk glad except breaking pain goal exist reach till loss opinion rules nor presented find discuss. police", q : "The ______ ran a light?"}) 
  fillers.push({s:"The scientists who were in the lab studied the alien while the blood sample was run through the computer. alien", a:"x-x-x evict holy yes add goes bob monster son lacks wanna lie agree update wish ha reality note everyone. computer", q : "The scientists studied the ______?"}) 
  fillers.push({s:"The student quickly finished his homework assignments. student", a:"x-x-x putting healthy southern wife airports magistrates. teacher", q : "The homework assignment was finished by the ______?"}) 
  fillers.push({s:"The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home. environmentalist", a:"x-x-x angering yeah sad perpendicular bed lot valve marketing spills best laugh spend contract me sure mom function hair. demonstrators", q : "The crowd was calmed by the ______?"}) 
  fillers.push({s:"The producer shoots a new movie every year. producer", a:"x-x-x shortly pierce page anti enjoy peace mom. director", q : "A new movie is shot by the ______?"}) 
  fillers.push({s:"The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands. rebels", a:"x-x-x memorably girl body soul girl visits memories card nuisance feels guys scientists says able move please pain ball nostalgic sir learn drivers. family", q : "The diplomat was threatened by the ______?"}) 
  fillers.push({s:"Dinosaurs ate other reptiles during the stone age. dinosaurs", a:"x-x-x earl write exporter minute guys wants dad. stone-age", q : "Reptiles were eaten by the ______?"}) 
  fillers.push({s:"The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees. manager", a:"x-x-x contemplates anti map walks tenuous voted ass goal anti devoid skip weekend star mind veterinary lose dad sides want rose knew indicates. baker", q : "The ______ spoke to the new pastry chef?"}) 
  fillers.push({s:"The teacher doubted that the test that had taken him a long time to design would be easy to answer. test", a:"x-x-x totalling grinder star feet them your miss miles song anti oh her ha posted enjoy door fund foot county. teacher", q : "The ______ would be easy to answer?"}) 
  fillers.push({s:"The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater. cook", a:"x-x-x admirably trip cell justify cool lose wanting rough collapse runs thirds gold term miss rate evolved ideas bill code mean miles yeah hear their acquire. servant", q : "The butler was offended by the ______?"}) 
  
  for(i=0; i<fillers.length; i++) {
	  fillers[i].condition = "filler"
	  fillers[i].item = "Filler_"+i
  }
  
	  practice = [];
  
  practice.push({s:"The semester will start next week, but the students and teachers are not ready. semester", a:"x-x-x thrives anti wages body sold, sin sky entitled sky concrete oil him goods. students", q : "The ______ will start next week?", practice : true})
  practice.push({s:"The mother of the prisoner sent him packages that contained cookies and novels. prisoner", a:"x-x-x defraud dry arm amounted rare nor rhythmic fund authority blossom me defect. cookies", q : "The mother sent packages to the ______?", practice : true})
  practice.push({s:"The reporter had dinner yesterday with the baseball player who Kevin admired. reporter", a:"x-x-x quantify joy reduce organisms rise sum attained tended sin Troop flowing. Kevin", q : "The ______ had dinner with the baseball player?", practice : true})
  practice.push({s:"The therapist set up a meeting with the upset woman and her husband yesterday. therapist", a:"x-x-x forestall ten sit sum absence wave ran keeps exist dry sum settled remainder. husband", q : "The meeting was set up by the ______?", practice : true})
  
  for(i=0; i<practice.length; i++) {
	  practice[i].condition = "filler"
	  practice[i].item = "Practice_"+i
  }
  
  
  
  
  function separatedShuffle(x, y) {
	  indices_x = [...Array(x.length).keys()].map(function(x){ return ["x",x]})
	  indices_y = [...Array(y.length).keys()].map(function(x){ return ["y",x]})
	  if(indices_x.length <= indices_y.length+5) {
		  CRASH()
	  }
	  console.log(indices_x);
	  console.log(indices_y);
	  result = indices_x.concat(indices_y);
	  attempts_order = 0;
	  console.log("SHUFFLING");
	  result = _.shuffle(result);
	  for(i=0; i+1<result.length; i++) {
		  if(result[i][0] == "y" && result[i+1][0] == "y") {
			  candidate_positions = [];
					  for(j=0; j+2<result.length; j++) {
							 if(result[j][0] == "x" && result[j+1][0] == "x" && result[j+2][0] == "x") {
					 candidate_positions.push(j+1);
				 }
			  }
			  console.log(i, "CANDIDATES", candidate_positions);
			  SELECTED_NEW_POSITION = _.sample(candidate_positions, 1)[0];
			  X = result[i];
			  Y = result[SELECTED_NEW_POSITION]
			  result[SELECTED_NEW_POSITION] = X;
			  result[i] = Y;
		  }
	  }
	  for(i=0; i+1<result.length; i++) {
		  if(result[i][0] == "y" && result[i+1][0] == "y") {
			  console.log("THIS SHOULD NOT HAPPEN", i);
		  }
	  }
	  result_ = []
	  for(i = 0; i<result.length; i++) {
		  if(result[i][0] == "x") {
			  result_.push(x[result[i][1]]);
		  } else {
			  result_.push(y[result[i][1]]);
		  }
	  }
	  return result_;
  }
  
  console.log("CRITICAL", criticalChosen);
  
  fillersAndCritical = separatedShuffle(_.sample(fillers, 36), criticalChosen);
  
  fullStimuli = _.shuffle(practice).concat(fillersAndCritical);
  
  item_ids = [];
  
  console.log( fullStimuli);
  return fullStimuli;
	   
  }
  
  
