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
  // update for version 3c; remove all nouns in the upper half for RC bias.
  // CLAIM: a claim whose truth or falsity is not presupposed.
  nouns["CLAIM"].push("assertion")
  //nouns["CLAIM"].push("assessment")
  nouns["CLAIM"].push("assumption")
  nouns["CLAIM"].push("belief")
  nouns["CLAIM"].push("claim")
  nouns["CLAIM"].push("conclusion")
  //nouns["CLAIM"].push("feeling")
  nouns["CLAIM"].push("finding")
  //nouns["CLAIM"].push("inkling")
  //nouns["CLAIM"].push("news")
  nouns["CLAIM"].push("opinion")
  //nouns["CLAIM"].push("perception")
  nouns["CLAIM"].push("presumption")
  //nouns["CLAIM"].push("remark")
  nouns["CLAIM"].push("reminder")
  nouns["CLAIM"].push("revelation")
  nouns["CLAIM"].push("rumor")
  nouns["CLAIM"].push("speculation")
  //nouns["CLAIM"].push("statement")
  nouns["CLAIM"].push("suggestion")
  //nouns["CLAIM"].push("theory")
  //nouns["CLAIM"].push("view")
  nouns["CLAIM"].push("assurance")
  //nouns["CLAIM"].push("message")
  nouns["CLAIM"].push("contention")
  //nouns["CLAIM"].push("impression")
  //nouns["CLAIM"].push("sense")
  //nouns["CLAIM"].push("intuition")
  nouns["CLAIM"].push("conjecture")
  nouns["CLAIM"].push("conviction")
  nouns["CLAIM"].push("thought")
  //nouns["CLAIM"].push("feeling")
  //nouns["CLAIM"].push("idea")
  nouns["CLAIM"].push("indication")
  nouns["CLAIM"].push("implication")
  //nouns["CLAIM"].push("guess")
  //nouns["CLAIM"].push("story")
  //nouns["CLAIM"].push("report")

  //nouns["ACCUSATION"].push("allegation")
  //nouns["ACCUSATION"].push("accusation")
  nouns["ACCUSATION"].push("insinuation") 
  //nouns["ACCUSATION"].push("complaint")
  nouns["ACCUSATION"].push("suspicion")

  //nouns["FACT"].push("truth")
  nouns["FACT"].push("fact")
  nouns["FACT"].push("reminder")
  //nouns["FACT"].push("proof")
  nouns["FACT"].push("realization")
  nouns["FACT"].push("possibility")
  //nouns["FACT"].push("observation")
  //nouns["FACT"].push("understanding")
  //nouns["FACT"].push("disclosure")
  
  nounsByThatBiasOrder = [];
  
  
  
  
  nounsByThatBiasOrder = [];
  
  
  
  // Nouns selected according to the average of the three log-frequencies
  //nounsByThatBiasOrder.push("story")
  //nounsByThatBiasOrder.push("report")
  //nounsByThatBiasOrder.push("assessment")
  //nounsByThatBiasOrder.push("truth")
  //nounsByThatBiasOrder.push("declaration")
  //nounsByThatBiasOrder.push("complaint")
  nounsByThatBiasOrder.push("admission")
  //nounsByThatBiasOrder.push("disclosure")
  nounsByThatBiasOrder.push("confirmation")
  //nounsByThatBiasOrder.push("remark")
  //nounsByThatBiasOrder.push("news")
  //nounsByThatBiasOrder.push("proof")
  //nounsByThatBiasOrder.push("message")
  nounsByThatBiasOrder.push("announcement")
  //nounsByThatBiasOrder.push("statement")
  nounsByThatBiasOrder.push("thought")
  //nounsByThatBiasOrder.push("allegation")
  nounsByThatBiasOrder.push("indication")
  nounsByThatBiasOrder.push("insinuation")
  nounsByThatBiasOrder.push("recognition")
  nounsByThatBiasOrder.push("speculation")
  //nounsByThatBiasOrder.push("accusation")
  nounsByThatBiasOrder.push("reminder")
  nounsByThatBiasOrder.push("rumor")
  nounsByThatBiasOrder.push("finding")
  //nounsByThatBiasOrder.push("idea")
  //nounsByThatBiasOrder.push("feeling")
  nounsByThatBiasOrder.push("conjecture")
  //nounsByThatBiasOrder.push("perception")
  nounsByThatBiasOrder.push("certainty")
  nounsByThatBiasOrder.push("revelation")
  nounsByThatBiasOrder.push("understanding")
  nounsByThatBiasOrder.push("claim")
  //nounsByThatBiasOrder.push("view")
  //nounsByThatBiasOrder.push("observation")
  nounsByThatBiasOrder.push("conviction")
  nounsByThatBiasOrder.push("presumption")
  //nounsByThatBiasOrder.push("intuition")
  nounsByThatBiasOrder.push("opinion")
  nounsByThatBiasOrder.push("conclusion")
  nounsByThatBiasOrder.push("notion")
  nounsByThatBiasOrder.push("suggestion")
  //nounsByThatBiasOrder.push("sense")
  nounsByThatBiasOrder.push("suspicion")
  nounsByThatBiasOrder.push("assurance")
  nounsByThatBiasOrder.push("realization")
  nounsByThatBiasOrder.push("implication")
  nounsByThatBiasOrder.push("assertion")
  //nounsByThatBiasOrder.push("impression")
  nounsByThatBiasOrder.push("contention")
  nounsByThatBiasOrder.push("assumption")
  nounsByThatBiasOrder.push("belief")
  nounsByThatBiasOrder.push("fact")
  nounsByThatBiasOrder.push("possibility")
  
  nounsFoils = {"assertion":"adulthood fat",
				"assessment":"guaranteed glad",
				"assumption":"installing pre",
				"belief":"invest miss",
				"claim":"apart pre",
				"conclusion":"facilitate cent",
				"declaration":"facilitate cent",
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
				"implication":"facilitate sell",
				"possibility":"facilitate sell",
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
  
  //topNouns = _.sample(topNouns, topNouns.length);
  topNouns = _.shuffle(topNouns);
  
  
  console.log("LENGTH", topNouns.length, topNouns);
  
  
  
  continuations238 = []
  
  for(i=0; i<36; i++) {
	  continuations238.push([]);
  }
  
  
  continuations238[0].push({item : "238_Critical_VN1", s : "that the teacher who the principal saw yesterday /annoyed the student, /and it /was confirmed today.",a : "x-x-x apart kid cent miss located pre jack depending okay estimated surreal anti require, guy hill fat ourselves block."   , n : "CLAIM ACCUSATION", q : "The student was annoyed by the ______?", unselected_verb : "diciplined", q_ac : "teacher", q_aiS1 : "", q_aiS3 : "principal"})
  continuations238[0].push({item : "238_Critical_VN1", s : "that the teacher who the principal saw yesterday /diciplined the student, /and it /was confirmed today.",a : "x-x-x apart kid cent miss located pre jack depending okay estimated surreal anti require, guy hill fat ourselves block."    , n : "CLAIM ACCUSATION", q : "The student was diciplined by the ______?", unselected_verb : "annoyed", q_ac : "teacher", q_aiS1 : "", q_aiS3 : "principal"})
  
  continuations238[1].push({item : "238_Critical_VN2", s : "that the doctor who the nurse helped this morning /bothered the patients, /but it /was hard to believe.",a : "x-x-x yours pre cent know toward hill yeah pulls prices jack seconds freedoms vote consists, app lord road park card leading."  , n : "CLAIM FACT", q : "The patients were bothered by the ______?", unselected_verb : "treated", q_ac : "doctor", q_aiS1 : "", q_aiS3 : "nurse"})
  continuations238[1].push({item : "238_Critical_VN2", s : "that the doctor who the nurse helped this morning /treated the patients, /but it /was hard to believe.",a : "x-x-x yours pre cent know toward hill yeah pulls prices jack seconds freedoms vote consists, app lord road park card leading."  , n : "CLAIM FACT", q : "The patients were treated by the ______?", unselected_verb : "bothered", q_ac : "doctor", q_aiS1 : "", q_aiS3 : "nurse"})
  
  continuations238[2].push({item : "238_Critical_VN3", s : "that the president who the secretary called yesterday /impressed the commander, /but it /was controversial.",a : "x-x-x yours glad hour know ourselves fun guy alongside recent apartment disappear jack accidents, mom app race practitioners.", n : "CLAIM", q : "The commander was impressed by the ______?", unselected_verb : "appointed", q_ac : "president", q_aiS1 : "", q_aiS3 : "secretary"})
  continuations238[2].push({item : "238_Critical_VN3", s : "that the president who the secretary called yesterday /appointed the commander, /but it /was controversial.",a : "x-x-x yours glad hour know ourselves fun guy alongside recent apartment disappear jack accidents, mom app race practitioners."  , n : "CLAIM", q : "The commander was appointed by the ______?", unselected_verb : "impressed", q_ac : "president", q_aiS1 : "", q_aiS3 : "secretary"})
  
  continuations238[3].push({item : "238_Critical_VN4", s : "that the victim who the driver rescued last night /shocked the criminal, /and it /appeared on TV.",a : "x-x-x apart pre cent know toward dad lake expand optimal yeah china genesis drop anywhere, ago app ministry jack GROW.", n : "CLAIM FACT", q : "The criminal was shocked by the ______?", unselected_verb : "sued", q_ac : "victim", q_aiS1 : "", q_aiS3 : "driver"})
  continuations238[3].push({item : "238_Critical_VN4", s : "that the victim who the driver rescued last night /sued the criminal, /and it /appeared on TV.",a : "x-x-x apart pre cent know toward dad lake expand optimal yeah china genesis drop anywhere, ago app ministry jack GROW." , n : "CLAIM FACT", q : "The criminal was sued by the ______?", unselected_verb : "shocked", q_ac : "victim", q_aiS1 : "", q_aiS3 : "driver"})
  
  continuations238[4].push({item : "238_Critical_VN5", s : "that the guest who the cousin invited last year /pleased the uncle, /and it /drove Jill crazy.",a : "x-x-x apart pre cent walk shown yeah sale inches letting anti lake jewelry jack wears, guy app cents Slab scale.", n : "CLAIM FACT", q : "The uncle was pleased by the ______?", unselected_verb : "visited", q_ac : "guest", q_aiS1 : "", q_aiS3 : "cousin"})
  continuations238[4].push({item : "238_Critical_VN5", s : "that the guest who the cousin invited last year /visited the uncle, /and it /drove Jill crazy.",a : "x-x-x apart pre cent walk shown yeah sale inches letting anti lake jewelry jack wears, guy app cents Slab scale." , n : "CLAIM FACT", q : "The uncle was visited by the ______?", unselected_verb : "pleased", q_ac : "guest", q_aiS1 : "", q_aiS3 : "cousin"})
  
  continuations238[5].push({item : "238_Critical_VN6", s : "that the psychiatrist who the surgeon assisted for hours /horrified the patient, /and it /became widely known.",a : "x-x-x apart sick cent miss supplemented hill wind formats monetary draw weird fragrance vote reached, fun app winner remind wants.", n : "CLAIM FACT", q : "The patient was horrified by the ______?", unselected_verb : "diagnosed", q_ac : "psychiatrist", q_aiS1 : "", q_aiS3 : "surgeon"})
  continuations238[5].push({item : "238_Critical_VN6", s : "that the psychiatrist who the surgeon assisted for hours /diagnosed the patient, /and it /became widely known.",a : "x-x-x apart sick cent miss supplemented hill wind formats monetary draw weird fragrance vote reached, fun app winner remind wants." , n : "CLAIM FACT", q : "The patient was diagnosed by the ______?", unselected_verb : "horrified", q_ac : "psychiatrist", q_aiS1 : "", q_aiS3 : "surgeon"})
  
  continuations238[6].push({item : "238_Critical_VN7", s : "that the local who the guide called at breakfast /amazed the tourist, /and it /was absolutely true.",a : "x-x-x apart mid jobs eat along how yeah yours stupid same reduction sexism door jointly, ago vs pre depression cent.", n : "CLAIM", q : "The tourist was amazed by the ______?", unselected_verb : "phoned", q_ac : "local", q_aiS1 : "", q_aiS3 : "guide"})
  continuations238[6].push({item : "238_Critical_VN7", s : "that the local who the guide called at breakfast /phoned the tourist, /and it /was absolutely true.",a : "x-x-x apart mid jobs eat along how yeah yours stupid same reduction sexism door jointly, ago vs pre depression cent." , n : "CLAIM", q : "The tourist was phoned by the ______?", unselected_verb : "amazed", q_ac : "local", q_aiS1 : "", q_aiS3 : "guide"})
  
  continuations238[7].push({item : "238_Critical_VN8", s : "that the actor who the fans loved deeply /astonished the director, /and it /appeared to be true.",a : "x-x-x yours sick cent miss aware ones pre suck civil defeat compendium bag provides, anti hill daughter heat app park.", n : "CLAIM", q : "The director was astonished by the ______?", unselected_verb : "welcomed", q_ac : "actor", q_aiS1 : "", q_aiS3 : "fans"})
  continuations238[7].push({item : "238_Critical_VN8", s : "that the actor who the fans loved deeply /welcomed the director, /and it /appeared to be true.",a : "x-x-x yours sick cent miss aware ones pre suck civil defeat compendium bag provides, anti hill daughter heat app park." , n : "CLAIM", q : "The director was welcomed by the ______?", unselected_verb : "astonished", q_ac : "actor", q_aiS1 : "", q_aiS3 : "fans"})
  
  continuations238[8].push({item : "238_Critical_VN9", s : "that the banker who the company trusted with the money /reassured the customer, /and it /proved to be true.", a : "x-x-x apart pre cent eat soften cool bus whether chronic walk yeah thank taekwondo fun produces, ago hill guitar talk lake wear.", n : "CLAIM", q : "The customer was reassured by the ______?", unselected_verb : "decieved", q_ac : "banker", q_aiS1 : "", q_aiS3 : "company"})
  continuations238[8].push({item : "238_Critical_VN9", s : "that the banker who the company trusted with the money /decieved the customer, /and it /proved to be true.", a : "x-x-x apart pre cent eat soften cool bus whether chronic walk yeah thank taekwondo fun produces, ago hill guitar talk lake wear." , n : "CLAIM", q : "The customer was decieved by the ______?", unselected_verb : "reassured", q_ac : "banker", q_aiS1 : "", q_aiS3 : "company"})
 
  continuations238[9].push({item : "238_Critical_VN10", s : "that the judge who the jury spoke with earlier today /vindicated the defendant, /and it /was true.", a : "x-x-x yours sick cent eat shown ones sale grow steam heat advent provide hamburgers hour enjoyable, fun hill okay park.", n : "CLAIM", q : "The defendant was vindicated by the _______?", unselected_verb : "acquitted", q_ac : "judge", q_aiS1 : "", q_aiS3 : "jury"})
  continuations238[9].push({item : "238_Critical_VN10", s : "that the judge who the jury spoke with earlier today /acquitted the defendant, /and it /was true.", a : "x-x-x yours sick cent eat shown ones sale grow steam heat advent provide hamburgers hour enjoyable, fun hill okay park." , n : "CLAIM", q : "The defendant was acquitted by the _______?", unselected_verb : "vindicated", q_ac : "judge", q_aiS1 : "", q_aiS3 : "jury"})
 
  continuations238[10].push({item : "238_Critical_VN11", s : "that the captain who the crew trusted deeply /motivated the sailor, /and it /was nice to hear.", a : "x-x-x apart mid cent miss located yeah holy pray volumes tablet migration cup undone, goal app kid hill dad anti.", n : "CLAIM FACT", q : "The sailor was motivated by the ______?", unselected_verb : "commanded", q_ac : "captain", q_aiS1 : "", q_aiS3 : "crew"})
  continuations238[10].push({item : "238_Critical_VN11", s : "that the captain who the crew trusted deeply /commanded the sailor, /and it /was nice to hear.", a : "x-x-x apart mid cent miss located yeah holy pray volumes tablet migration cup undone, goal app kid hill dad anti." , n : "CLAIM FACT", q : "The sailor was commanded by the ______?", unselected_verb : "motivated", q_ac : "captain", q_aiS1 : "", q_aiS3 : "crew"})
 
  continuations238[11].push({item : "238_Critical_VN12", s : "that the manager who the boss authorized last year /saddened the intern, /but it /seemed absurd.", a : "x-x-x apart pre cent eat whereas mid holy onto disability yeah lake bohemian door teamed, mark app animal wander.", n : "CLAIM FACT", q : "The intern was saddened by the ______?", unselected_verb : "hired", q_ac : "manager", q_aiS1 : "", q_aiS3 : "boss"})
  continuations238[11].push({item : "238_Critical_VN12", s : "that the manager who the boss authorized last year /hired the intern, /but it /seemed absurd.", a : "x-x-x apart pre cent eat whereas mid holy onto disability yeah lake bohemian door teamed, mark app animal wander." , n : "CLAIM FACT", q : "The intern was hired by the ______?", unselected_verb : "saddened", q_ac : "manager", q_aiS1 : "", q_aiS3 : "boss"})

  continuations238[12].push({item : "238_Critical_VN13", s : "that the bully who the parents met at school /repulsed the children, /and it /was entirely correct.", a : "x-x-x apart pre hour eat versa yes ones towards holy app please smoother jack appeared, miss cent anti calendar senator.", n : "CLAIM FACT ACCUSATION", q : "The children were repulsed by the ______?", unselected_verb : "harassed", q_ac : "bully", q_aiS1 : "", q_aiS3 : "parents"})
  continuations238[12].push({item : "238_Critical_VN13", s : "that the bully who the parents met at school /harassed the children, /and it /was entirely correct.", a : "x-x-x apart pre hour eat versa yes ones towards holy app please smoother jack appeared, miss cent anti calendar senator." , n : "CLAIM FACT ACCUSATION", q : "The children were harassed by the ______?", unselected_verb : "repulsed", q_ac : "bully", q_aiS1 : "", q_aiS3 : "parents"})

  continuations238[13].push({item : "238_Critical_VN14", s : "that the plaintiff who the lawyer interrogated for hours /scared the witness, /and it /was in the news.", a : "x-x-x apart mid cent eat visualize kid pre crying subterranean foot click themes god survive, jack sun ice kids took goes.", n : "CLAIM FACT", q : "The witness was scared by the ______?", unselected_verb : "interrupted", q_ac : "plaintiff", q_aiS1 : "", q_aiS3 : "lawyer"})
  continuations238[13].push({item : "238_Critical_VN14", s : "that the plaintiff who the lawyer interrogated for hours /interrupted the witness, /and it /was in the news.", a : "x-x-x apart mid cent eat visualize kid pre crying subterranean foot click themes god survive, jack sun ice kids took goes." , n : "CLAIM FACT", q : "The witness was interrupted by the ______?", unselected_verb : "scared", q_ac : "plaintiff", q_aiS1 : "", q_aiS3 : "lawyer"})
 
  continuations238[14].push({item : "238_Critical_VN15", s : "that the drunkard who the thug hit in the face /stunned the bartender, /and it /sounded hilarious.", a : "x-x-x apart mid cent hear outgrown pre dad rife yeah glad mom else regents app delegated, fund tax consult platforms.", n : "CLAIM FACT", q : "The bartender was stunned by the ______?", unselected_verb : "outwitted", q_ac : "drunkard", q_aiS1 : "", q_aiS3 : "thug"})
  continuations238[14].push({item : "238_Critical_VN15", s : "that the drunkard who the thug hit in the face /outwitted the bartender, /and it /sounded hilarious.", a : "x-x-x apart mid cent hear outgrown pre dad rife yeah glad mom else regents app delegated, fund tax consult platforms." , n : "CLAIM FACT", q : "The bartender was outwitted by the ______?", unselected_verb : "stunned", q_ac : "drunkard", q_aiS1 : "", q_aiS3 : "thug"})
 
  continuations238[15].push({item : "238_Critical_VN16", s : "that the medic who the survivor thanked today /astonished the surgeon, /but it /was true.", a : "x-x-x yours mid cent hear laude hill ones weddings nightly march rotational cup pursued, pre app ways jack.", n : "CLAIM", q : "The surgeon was astonished by the _______?", unselected_verb : "greeted", q_ac : "medic", q_aiS1 : "", q_aiS3 : "survivor"})
  continuations238[15].push({item : "238_Critical_VN16", s : "that the medic who the survivor thanked today /greeted the surgeon, /but it /was true.", a : "x-x-x yours mid cent hear laude hill ones weddings nightly march rotational cup pursued, pre app ways jack." , n : "CLAIM", q : "The surgeon was greeted by the _______?", unselected_verb : "astonished", q_ac : "medic", q_aiS1 : "", q_aiS3 : "survivor"})
 
  continuations238[16].push({item : "238_Critical_VN17", s : "that the bystander who the soldier taught last year /encouraged the swimmer, /and it /was surprising.", a : "x-x-x yours mid hour eat fluctuate ice pre thereby summit cent yeah properties jack cropped, term app cash incentives.", n : "CLAIM FACT", q : "The swimmer was encouraged by the ______?", unselected_verb : "rescued", q_ac : "bystander", q_aiS1 : "", q_aiS3 : "soldier"})
  continuations238[16].push({item : "238_Critical_VN17", s : "that the bystander who the soldier taught last year /rescued the swimmer, /and it /was surprising.", a : "x-x-x yours mid hour eat fluctuate ice pre thereby summit cent yeah properties jack cropped, term app cash incentives." , n : "CLAIM FACT", q : "The swimmer was rescued by the ______?", unselected_verb : "encouraged", q_ac : "bystander", q_aiS1 : "", q_aiS3 : "soldier"})
  
  continuations238[17].push({item : "238_Critical_VN18", s : "that the fisherman who the gardener helped last month /delighted the politician, /and it /was on the news.", a : "x-x-x apart pre hour eat overtaken mid yeah coincide memory card smart providers app comprising, cent kid eye dad guy whom.", n : "CLAIM FACT", q : "The politician was delighted by the ______?", unselected_verb : "admired", q_ac : "fisherman", q_aiS1 : "", q_aiS3 : "gardener"})
  continuations238[17].push({item : "238_Critical_VN18", s : "that the fisherman who the gardener helped last month /admired the politician, /and it /was on the news.", a : "x-x-x apart pre hour eat overtaken mid yeah coincide memory card smart providers app comprising, cent kid eye dad guy whom." , n : "CLAIM FACT", q : "The politician was admired by the ______?", unselected_verb : "delighted", q_ac : "fisherman", q_aiS1 : "", q_aiS3 : "gardener"})

  continuations238[18].push({item : "238_Critical_VN19", s : "that the janitor who the organizer criticized every week /amused the audience, /and it /was funny.", a : "x-x-x apart mid cent eat majored anti jack premieres parameters click yeah artery wall contains, ago vs jobs coast.", n : "CLAIM FACT", q : "The audience was amused by the ______?", unselected_verb : "ignored", q_ac : "janitor", q_aiS1 : "", q_aiS3 : "organizer"})
  continuations238[18].push({item : "238_Critical_VN19", s : "that the janitor who the organizer criticized every week /ignored the audience, /and it /was funny.", a : "x-x-x apart mid cent eat majored anti jack premieres parameters click yeah artery wall contains, ago vs jobs coast." , n : "CLAIM FACT", q : "The audience was ignored by the ______?", unselected_verb : "amused", q_ac : "janitor", q_aiS1 : "", q_aiS3 : "organizer"})
 
  continuations238[19].push({item : "238_Critical_VN20", s : "that the investor who the scientist consulted for years /disappointed the entrepreneur, /and it /drove everyone crazy.", a : "x-x-x apart mid hour walk trillion yeah dad depending sophomore kid weird thanksgiving ring disabilities, kids anti cents remember voice.", n : "CLAIM FACT", q : "The entrepreneur was disappointed by the ______?", unselected_verb : "deceived", q_ac : "investor", q_aiS1 : "", q_aiS3 : "scientist"})
  continuations238[19].push({item : "238_Critical_VN20", s : "that the investor who the scientist consulted for years /deceived the entrepreneur, /and it /drove everyone crazy.", a : "x-x-x apart mid hour walk trillion yeah dad depending sophomore kid weird thanksgiving ring disabilities, kids anti cents remember voice." , n : "CLAIM FACT", q : "The entrepreneur was deceived by the ______?", unselected_verb : "disappointed", q_ac : "investor", q_aiS1 : "", q_aiS3 : "scientist"})
 
  continuations238[20].push({item : "238_Critical_VN21", s : "that the officer who the firefighter insulted viciously /discouraged the homeowner, /but it /went unnoticed.", a : "x-x-x apart pre cent know located mid wall cultivating formulas interplay earthquakes yes bulletins, luck ice gift phosphate.", n : "CLAIM FACT", q : "The homeowner was discouraged by the ______?", unselected_verb : "saved", q_ac : "officer", q_aiS1 : "", q_aiS3 : "firefighter"})
  continuations238[20].push({item : "238_Critical_VN21", s : "that the officer who the firefighter insulted viciously /saved the homeowner, /but it /went unnoticed.", a : "x-x-x apart pre cent know located mid wall cultivating formulas interplay earthquakes yes bulletins, luck ice gift phosphate." , n : "CLAIM FACT", q : "The homeowner was saved by the ______?", unselected_verb : "discouraged", q_ac : "officer", q_aiS1 : "", q_aiS3 : "firefighter"})
 
  continuations238[21].push({item : "238_Critical_VN22", s : "that the agent who the FBI sent to the scene /confused the criminal, /and it /was acknowledged.", a : "x-x-x yours pre cent eat aware holy hill PRAY lots cup ago weird potatoes wish includes, grow sun eye temperatures.", n : "CLAIM FACT", q : "The criminal was confused by the ______?", unselected_verb : "arrested", q_ac : "agent", q_aiS1 : "", q_aiS3 : "FBI"})
  continuations238[21].push({item : "238_Critical_VN22", s : "that the agent who the FBI sent to the scene /arrested the criminal, /and it /was acknowledged.", a : "x-x-x yours pre cent eat aware holy hill PRAY lots cup ago weird potatoes wish includes, grow sun eye temperatures." , n : "CLAIM FACT", q : "The criminal was arrested by the ______?", unselected_verb : "confused", q_ac : "agent", q_aiS1 : "", q_aiS3 : "FBI"})
  
  continuations238[22].push({item : "238_Critical_VN23", s : "that the plumber who the apprentice consulted yesterday /puzzled the woman, /and it /was true.", a : "x-x-x yours mid jobs eat raining pre yeah showcasing psychosis awareness expanse goal shall, mark vs gay cent.", n : "CLAIM", q : "The woman was puzzled by the ______?", unselected_verb : "assisted", q_ac : "plumber", q_aiS1 : "", q_aiS3 : "apprentice"})
  continuations238[22].push({item : "238_Critical_VN23", s : "that the plumber who the apprentice consulted yesterday /assisted the woman, /and it /was true.", a : "x-x-x yours mid jobs eat raining pre yeah showcasing psychosis awareness expanse goal shall, mark vs gay cent." , n : "CLAIM", q : "The woman was assisted by the ______?", unselected_verb : "puzzled", q_ac : "plumber", q_aiS1 : "", q_aiS3 : "apprentice"})

  continuations238[23].push({item : "238_Critical_VN24", s : "that the senator who the diplomat supported fully /troubled the opponent, /and it /deserved attention.", a : "x-x-x apart sick cent know realise kid fine figuring ourselves click headache bet crashing, kids wall composer happening.", n : "CLAIM FACT", q : "The opponent was troubled by the ______?", unselected_verb : "defeated", q_ac : "senator", q_aiS1 : "", q_aiS3 : "diplomat"})
  continuations238[23].push({item : "238_Critical_VN24", s : "that the senator who the diplomat supported fully /defeated the opponent, /and it /deserved attention.", a : "x-x-x apart sick cent know realise kid fine figuring ourselves click headache bet crashing, kids wall composer happening." , n : "CLAIM FACT", q : "The opponent was defeated by the ______?", unselected_verb : "troubled", q_ac : "senator", q_aiS1 : "", q_aiS3 : "diplomat"})

  continuations238[24].push({item : "238_Critical_VN25", s : "that the fiancé who the pastor met this afternoon /startled the bride, /and it /did not surprise anyone.", a : "x-x-x apart mid cent app astray mark pre evenly lake hill ourselves reactors term lasts, goal vs miss pro episodes latest.", n : "CLAIM FACT", q : "The bride was startled by the ______?", unselected_verb : "married", q_ac : "fiancé", q_aiS1 : "", q_aiS3 : "pastor"})
  continuations238[24].push({item : "238_Critical_VN25", s : "that the fiancé who the pastor met this afternoon /married the bride, /and it /did not surprise anyone.", a : "x-x-x apart mid cent app astray mark pre evenly lake hill ourselves reactors term lasts, goal vs miss pro episodes latest." , n : "CLAIM FACT", q : "The bride was married by the ______?", unselected_verb : "startled", q_ac : "fiancé", q_aiS1 : "", q_aiS3 : "pastor"})

  continuations238[25].push({item : "238_Critical_VN26", s : "that the businessman who the exectutives backed wholeheartedly /surprised the employee, /and it /came as a disappointment.", a : "x-x-x apart pre cent walk criticizing fun guy symbolising autumn meteorological hilarious bed survived, hill jack baby wear uses considerations.", n : "CLAIM FACT ACCUSATION", q : "The employee was surprised by the ______?", unselected_verb : "punished", q_ac : "businessman", q_aiS1 : "", q_aiS3 : "exectutives"})
  continuations238[25].push({item : "238_Critical_VN26", s : "that the businessman who the exectutives backed wholeheartedly /punished the employee, /and it /came as a disappointment.", a : "x-x-x apart pre cent walk criticizing fun guy symbolising autumn meteorological hilarious bed survived, hill jack baby wear uses considerations." , n : "CLAIM FACT ACCUSATION", q : "The employee was punished by the ______?", unselected_verb : "surprised", q_ac : "businessman", q_aiS1 : "", q_aiS3 : "exectutives"})

  continuations238[26].push({item : "238_Critical_VN27", s : "that the repairman who the neighbor caught last night /enraged the woman, /and it /broke her family's heart.", a : "x-x-x apart mid cent app semesters glad pre secondly inches lots truth roadway seat shall, guy vs brand hear deployed users.", n : "CLAIM FACT ACCUSATION", q : "The woman was enraged by the ______?", unselected_verb : "robbed", q_ac : "repairman", q_aiS1 : "", q_aiS3 : "neighbor"})
  continuations238[26].push({item : "238_Critical_VN27", s : "that the repairman who the neighbor caught last night /robbed the woman, /and it /broke her family's heart.", a : "x-x-x apart mid cent app semesters glad pre secondly inches lots truth roadway seat shall, guy vs brand hear deployed users." , n : "CLAIM FACT ACCUSATION", q : " The woman was robbed by the ______?", unselected_verb : "enraged", q_ac : "repairman", q_aiS1 : "", q_aiS3 : "neighbor"})

  continuations238[27].push({item : "238_Critical_VN28", s : "that the criminal who the stranger saw this evening /baffled the officer, /and it /seemed concerning.", a : "x-x-x apart sick cent know gorgeous yes cool indicate wide yeah winners stellar seat anymore, miss app movies percentage.", n : "CLAIM FACT ACCUSATION", q : "The officer was baffled by the ______?", unselected_verb : "abducted", q_ac : "criminal", q_aiS1 : "", q_aiS3 : "stranger"})
  continuations238[27].push({item : "238_Critical_VN28", s : "that the criminal who the stranger saw this evening /abducted the officer, /and it /seemed concerning.", a : "x-x-x apart sick cent know gorgeous yes cool indicate wide yeah winners stellar seat anymore, miss app movies percentage." , n : "CLAIM FACT ACCUSATION", q : "The officer was abducted by the ______?", unselected_verb : "baffled", q_ac : "criminal", q_aiS1 : "", q_aiS3 : "stranger"})

  continuations238[28].push({item : "238_Critical_VN29", s : "that the customer who the vendor welcomed kindly /terrified the clerk, /and it /was verified yesterday.", a : "x-x-x apart sick hour app enjoying pre why depict factions raging courtroom anti exams, hill vs dad rankings democrats.", n : "CLAIM", q : "The clerk was terrified by the ______?", unselected_verb : "contacted", q_ac : "customer", q_aiS1 : "", q_aiS3 : "vendor"})
  continuations238[28].push({item : "238_Critical_VN29", s : "that the customer who the vendor welcomed kindly /contacted the clerk, /and it /was verified yesterday.", a : "x-x-x apart sick hour app enjoying pre why depict factions raging courtroom anti exams, hill vs dad rankings democrats." , n : "CLAIM", q : "The clerk was contacted by the ______?", unselected_verb : "terrified", q_ac : "customer", q_aiS1 : "", q_aiS3 : "vendor"})
   
  continuations238[29].push({item : "238_Critical_VN30", s : "that the people who the staffer appointed this month /concerned the president, /and it /caused unrest.", a : "x-x-x apart mid hour eat except jack why nonstop satellite yeah sorry awareness hill meanwhile, fun anti mobile tailor.", n : "CLAIM FACT", q : "The president was concerned by the ______?", unselected_verb : "fired", q_ac : "people", q_aiS1 : "", q_aiS3 : "staffer"})
  continuations238[29].push({item : "238_Critical_VN30", s : "that the people who the staffer appointed this month /fired the president, /and it /caused unrest.", a : "x-x-x apart mid hour eat except jack why nonstop satellite yeah sorry awareness hill meanwhile, fun anti mobile tailor." , n : "CLAIM FACT", q : "The president was fired by the ______?", unselected_verb : "concerned", q_ac : "people", q_aiS1 : "", q_aiS3 : "staffer"})

  continuations238[30].push({item : "238_Critical_VN31", s : "that the politician who the mobster bribed for years /appalled everyone, /and it /gave John the chills.", a : "x-x-x apart pre hour eat accomplish fat cat airbags setups yeah stuff vascular addition, lake jack hill Cent sale piping.", n : "CLAIM FACT", q : "Everyone was appalled by the ______?", unselected_verb : "detested", q_ac : "politician", q_aiS1 : "", q_aiS3 : "mobster"})
  continuations238[30].push({item : "238_Critical_VN31", s : "that the politician who the mobster bribed for years /detested everyone, /and it /gave John the chills.", a : "x-x-x apart pre hour eat accomplish fat cat airbags setups yeah stuff vascular addition, lake jack hill Cent sale piping." , n : "CLAIM FACT", q : "Everyone was detested by the ______??", unselected_verb : "appalled", q_ac : "politician", q_aiS1 : "", q_aiS3 : "mobster"})
    
  continuations238[31].push({item : "238_Critical_VN32", s : "that the carpenter who the craftsman taught for decades /interested the apprentice, /and it /came as a disappointment.", a : "x-x-x apart jobs cent eat gardening mid cat visualize planet yeah centers apartments spot flashbacks, hate hill anti die app municipalities.", n : "CLAIM FACT ACCUSATION", q : "The apprentice was interested in the ______?", unselected_verb : "hurt", q_ac : "carpenter", q_aiS1 : "", q_aiS3 : "craftsman"})
  continuations238[31].push({item : "238_Critical_VN32", s : "that the carpenter who the craftsman taught for decades /hurt the apprentice, /and it /came as a disappointment.", a : "x-x-x apart jobs cent eat gardening mid cat visualize planet yeah centers apartments spot flashbacks, hate hill anti die app municipalities." , n : "CLAIM FACT ACCUSATION", q : "The apprentice was hurt by the ______?", unselected_verb : "interested", q_ac : "carpenter", q_aiS1 : "", q_aiS3 : "craftsman"})

  continuations238[32].push({item : "238_Critical_VN33", s : "that the analyst who the CEO fired last week /frightened the shareholders, /and it /seemed concerning.", a : "x-x-x apart pre cent eat whereby hill wild VARY parks glad holy repertoire lake nevertheless, jack sun movies profession.", n : "CLAIM FACT ACCUSATION", q : "The shareholders were frightened by the ______?", unselected_verb : "met", q_ac : "analyst", q_aiS1 : "", q_aiS3 : "CEO"})
  continuations238[32].push({item : "238_Critical_VN33", s : "that the analyst who the CEO fired last week /met the shareholders, /and it /seemed concerning.", a : "x-x-x apart pre cent eat whereby hill wild VARY parks glad holy repertoire lake nevertheless, jack sun movies profession." , n : "CLAIM FACT ACCUSATION", q : "The shareholders were met by the ______?", unselected_verb : "frightened", q_ac : "analyst", q_aiS1 : "", q_aiS3 : "CEO"})
    
  continuations238[33].push({item : "238_Critical_VN34", s : "that the tenant who the landlord spoke to yesterday /irritated the neighbors, /but it /proved to be valid.", a : "x-x-x apart sick cent eat closes dad guy teamwork facts soul fantastic brightest trip comprised, ago jack finger bill god modes.", n : "CLAIM ACCUSATION", q : "The neighbors were irritated by the ______?", unselected_verb : "questioned", q_ac : "tenant", q_aiS1 : "", q_aiS3 : "landlord"})
  continuations238[33].push({item : "238_Critical_VN34", s : "that the tenant who the landlord spoke to yesterday /questioned the neighbors, /but it /proved to be valid.", a : "x-x-x apart sick cent eat closes dad guy teamwork facts soul fantastic brightest trip comprised, ago jack finger bill god modes." , n : "CLAIM ACCUSATION", q : "The neighbors were questioned by the ______?", unselected_verb : "irritated", q_ac : "tenant", q_aiS1 : "", q_aiS3 : "landlord"})
    
  continuations238[34].push({item : "238_Critical_VN35", s : "that the pharmacist who the clerk loved for years /distracted the customer, /and it /sounded surprising.", a : "x-x-x apart sick cent miss showcasing sad pre minus basic lots scale incentives lake occurred, goal sun marines interstate.", n : "CLAIM FACT", q : "The customer was distracted by the ______?", unselected_verb : "interrogated", q_ac : "pharmacist", q_aiS1 : "", q_aiS3 : "clerk"})
  continuations238[34].push({item : "238_Critical_VN35", s : "that the pharmacist who the clerk loved for years /interrogated the customer, /and it /sounded surprising.", a : "x-x-x apart sick cent miss showcasing sad pre minus basic lots scale incentives lake occurred, goal sun marines interstate." , n : "CLAIM FACT", q : "The customer was interrogated by the ______?", unselected_verb : "distracted", q_ac : "pharmacist", q_aiS1 : "", q_aiS3 : "clerk"})

  continuations238[35].push({item : "238_Critical_VN36", s : "that the researcher who the reviewers evaluated positively /intrigued the professor, /and it /seemed concerning.", a : "x-x-x apart mid cent know comprehend pre dad encompass fireworks procession abolition trip celebrate, ago hill dinner referendum.", n : "CLAIM FACT", q : "The professor was intrigued by the ______?", unselected_verb : "plagiarized", q_ac : "researcher", q_aiS1 : "", q_aiS3 : "reviewers"})
  continuations238[35].push({item : "238_Critical_VN36", s : "that the researcher who the reviewers evaluated positively /plagiarized the professor, /and it /seemed concerning.", a : "x-x-x apart mid cent know comprehend pre dad encompass fireworks procession abolition trip celebrate, ago hill dinner referendum." , n : "CLAIM FACT", q : "The professor was plagiarized by the ______?", unselected_verb : "intrigued", q_ac : "researcher", q_aiS1 : "", q_aiS3 : "reviewers"})

  
  for(i=0; i<36; i++) {
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
  continuationsChosen = continuationsChosen.slice(0, topNouns.length);
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
  
  continuations = JSON.parse(JSON.stringify(nounsAndVerbsAssignment));
  console.log(conditionAssignment);
  
  conditions_chosen = [];
  continuationsChosen = []
  for(i = 0; i<conditionAssignment.length; i++) {
	  continuations[i][0].noun = topNouns[i];
	  continuations[i][1].noun = topNouns[i];
	  continuations[i][0].s = "The "+topNouns[i]+" was "+continuations[i][0].s + " .";
	  continuations[i][1].s = "The "+topNouns[i]+" was "+continuations[i][1].s + " .";
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
	  a.push(".")
	  r = item.r.split(" ");
	  itemNounFoils = nounsFoils[topNouns[i]].split(" ");
	  a[1] = itemNounFoils[0]
	  a[2] = itemNounFoils[1]
	  //randomly permute embedded subjects
	  item.swap_nouns = Math.random() > 0.5;
	  	if(item.swap_nouns) {
			s[5] = item.q_aiS3
			s[8] = item.q_ac
			item.q_aiS3 = s[8]
			item.q_ac = s[5]
		}
	item.q_aiS1 = topNouns[i]

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
  

  control_filler_condition_ordering = {"critical_nohead_incompatible" : _.sample([true, false]),
									   "critical_single_incompatible" : _.sample([true, false]),
									   "critical_double_incompatible" : _.sample([true, false]),
									   "critical_nohead_compatible" : _.sample([true, false]),
									   "critical_single_compatible" : _.sample([true, false]),
									   "critical_double_compatible" : _.sample([true, false]),
  }
  control_filler_condition_seen = {"critical_nohead_incompatible" : false,
	"critical_single_incompatible" : false,
	"critical_double_incompatible" : false,
	"critical_nohead_compatible" : false,
	"critical_single_compatible" : false,
	"critical_double_compatible" : false,
}

  control_fillers = [];
  for (i=0; i < continuationsChosen.length; i++){
	curr_item = JSON.parse(JSON.stringify(continuationsChosen[i]));
	curr_condition = curr_item.condition;
	use_n1_subj = control_filler_condition_ordering[curr_condition] & (!control_filler_condition_seen[curr_condition])
	if(use_n1_subj){
		curr_subj = curr_item.noun
	}
	else{
		curr_subj = curr_item.q_ac
	}
	curr_verb = curr_item.unselected_verb
	control_filler_condition_seen[curr_condition] = true;
	
	curr_regions = nounsAndVerbsAssignment[i][0].r.split(" ")
	curr_words = nounsAndVerbsAssignment[i][0].s.split(" ")
	curr_foils = nounsAndVerbsAssignment[i][0].a.split(" ")
	filler_regions = ["REGION_D0", "REGION_N0"];
	filler_words = ["The", curr_subj];
	filler_foils = curr_foils.slice(0, 2);
	for (j=0; j<curr_regions.length; j++){
		if((!curr_regions[j].startsWith("REGION_W0")) && (!curr_regions[j].startsWith("REGION_0")) && (!curr_regions[j].startsWith("REGION_1")) && (!curr_regions[j].startsWith("REGION_3") && (!curr_regions[j].startsWith("REGION_4")))){
			filler_regions.push(curr_regions[j]);
			if(curr_regions[j] == "REGION_2_0"){
				filler_words.push(curr_verb);
			}
			else{
				filler_words.push(curr_words[j].replace(",", ""));
			}
			filler_foils.push(curr_foils[j+2].replace(",", ""));
		}
	}
	filler_words[filler_words.length-1] = filler_words[filler_words.length-1] + ".";
	filler_foils[filler_foils.length-1] = filler_foils[filler_foils.length-1] + ".";
	filler_regions.push("REGION_CQ");
	filler_words.push(".");
	filler_foils.push(".");
	curr_item.s = filler_words.join(" ");
	curr_item.r = filler_regions.join(" ");
	curr_item.a = filler_foils.join(" ");
	curr_item.q = curr_item.q.split(' ');
	curr_item.q = curr_item.q.slice(0, curr_item.q.length-4).concat([curr_verb], curr_item.q.slice(curr_item.q.length-3, curr_item.q.length));
	curr_item.q = curr_item.q.join(" ");
	if(use_n1_subj){
		og_n2 = curr_item.q_ac;
		curr_item.q_ac = curr_subj;
		curr_item.q_aiS1 = og_n2;
	}
	curr_item.condition = 'control_filler_' + curr_item.condition
	control_fillers.push(curr_item)
  }

  //todo: fix comp questions of these fillers by swapping the verb; and fix answers so that correct answer is actually correct, add compq region to end
  
  
  
  fillers = []
  fillers.push({s:"The divorcee has come to love her life ever since she got divorced. .", a:"x-x-x nearly else bed took fell lord cup air stand base web keyboard. .", q : "The divorcee loves her ______?", q_ac : "life", q_aiS1 : "husband", q_aiS3 : "puppy"}) 
  fillers.push({s:"The mathematician at the banquet baffled the philosopher although she rarely needed anyone else's help. .", a:"x-x-x rebelling trip lot corpses audible kept inspections appeared card branch moving happen polish oh. .", q : "The ______ was baffled at the banquet?", q_ac : "philosopher", q_aiS1 : "mathematician", q_aiS3 : "physicist"}) 
  fillers.push({s:"The showman travels to different cities every month. .", a:"x-x-x citing terrain hall certainly listen write rates. month", q : "The ______ travels to different cities?", q_ac : "showman", q_aiS1 : "magician", q_aiS3 : "month"}) 
  fillers.push({s:"The roommate takes out the garbage every week. .", a:"x-x-x attest doubt sold lose enables worst anti. week", q : "The garbage is taken out by the ______", q_ac : "roommate", q_aiS1 : "parents", q_aiS3 : "children"}) 
  fillers.push({s:"The dragon wounded the knight although he was far too crippled to protect the princess. .", a:"x-x-x endorses funding plan borrow question walk tree pop key teammate stay society map indicate. princess", q : "The dragon wounded the ______?", q_ac : "knight", q_aiS1 : "princess", q_aiS3 : "king"}) 
  fillers.push({s:"The office-worker worked through the stack of files on his desk quickly. .", a:"x-x-x appreciating forget arrived lady prone wife treat fall born rain western. desk", q : "The office-worker worked through the ______?", q_ac : "files", q_aiS1 : "desk", q_aiS3 : "budget"}) 
  fillers.push({s:"The firemen at the scene apprehended the arsonist because there was a great deal of evidence pointing to his guilt. .", a:"x-x-x originate war sure among outsourcing cent deviance anymore mouth fun us enter laws yes produced observer plus bill weigh. guilt", q : "The arsonist was apprehended by the ______?", q_ac : "firemen", q_aiS1 : "guilt", q_aiS3 : "police"}) 
  fillers.push({s:"During the season, the choir holds rehearsals in the church regularly. .", a:"x-x-x nice called, us haunt anger prophecies laws thus issues customers. season", q : "Rehearsals are held by the ______?", q_ac : "choir", q_aiS1 : "season", q_aiS3 : "band"}) 
  fillers.push({s:"The speaker who the historian offended kicked a chair after the talk was over and everyone had left the room. .", a:"x-x-x criticises holy sad activated fraction upside mom files cases lot know port lord holy products port van guy how. historian", q : "The chair was kicked by the ______?", q_ac : "speaker", q_aiS1 : "historian", q_aiS3 : "everyone"}) 
  fillers.push({s:"The milkman punctually delivers the milk at the door every day. .", a:"x-x-x obstruct clerestory librarians lose quit ats nor took weird join. door", q : "The ______ delivers the milk?", q_ac : "milkman", q_aiS1 : "cyclist", q_aiS3 : "mother"}) 
  fillers.push({s:"The quarterback dated the cheerleader although this hurt her reputation around school. .", a:"x-x-x empties fairy sit propagation violence tell east lake represents access placed. school", q : "The quarterback dated the ______?", q_ac : "cheerleader", q_aiS1 : "model", q_aiS3 : "school"}) 
  fillers.push({s:"The citizens of France eat oysters. citizens", a:"x-x-x allege anti Amount girl lattice. .", q : "Oysters are eaten by the ______?", q_ac : "citizens", q_aiS1 : "clams", q_aiS3 : "otters"}) 
  fillers.push({s:"The bully punched the kid after all the kids had to leave to go to class. .", a:"x-x-x arousing rituals eat what birth felt ha ha sun lake forms link jack size feels. class", q : "The kid was punched by the ______?", q_ac : "bully", q_aiS1 : "class", q_aiS3 : "thief"}) 
  fillers.push({s:"After the argument, the husband ignored his wife. .", a:"x-x-x plus suggests, cent without harmony seen here. argument", q : "The husband ignored the ______?", q_ac : "wife", q_aiS1 : "argument", q_aiS3 : "child"}) 
  fillers.push({s:"The engineer who the lawyer who was by the elevator scolded blamed the secretary but nobody listened to his complaints. .", a:"x-x-x succumbing oh ha defend feet mine ones ha shouting rescind ounces sort including ats happen infantry laws far protecting. lawyer", q : "The secretary was blamed by the ______", q_ac : "engineer", q_aiS1 : "lawyer", q_aiS3 : "elevator"}) 
  fillers.push({s:"The librarian put the book onto the shelf. .", a:"x-x-x impede east grow this wave grow bacon. librarian", q : "The book was put onto the ______", q_ac : "shelf", q_aiS1 : "librarian", q_aiS3 : "cart"}) 
  fillers.push({s:"The photographer processed the film on time. .", a:"x-x-x prematurely eliminate ago yes non nor. time", q : "The film was processed by the ______?", q_ac : "photographer", q_aiS1 : "director", q_aiS3 : "time"})
  fillers.push({s:"The spider that the boy who was in the yard captured scared the dog since it was larger than the average spider. .", a:"x-x-x enclosing sad cent been hell pro say jack earn resource expert file gets ended list per decide lady anti imagine quotes. boy", q : "The dog was scared by the ______?", q_ac : "spider", q_aiS1 : "boy", q_aiS3 : "yard"}) 
  fillers.push({s:"The sportsman goes jogging in the park regularly. .", a:"x-x-x incurring hear outback hope fell been processes. road", q : "The sportsman goes jogging in the ______?", q_ac : "park", q_aiS1 : "road", q_aiS3 : "track"}) 
  fillers.push({s:"The customer who was on the phone contacted the operator because the new long-distance pricing plan was extremely inconvenient. .", a:"x-x-x equates okay yeah bill sun maybe desperate wish wondered married link an unfortunately chronic miss yes residence inscriptions. plan", q : "The operator was contacted by the ______?", q_ac : "customer", q_aiS1 : "plan", q_aiS3 : "agent"}) 
  fillers.push({s:"The private tutor explained the assignment carefully. .", a:"x-x-x reproduce bumps amendment lot kilometers centuries. student", q : "The assignment was explained by the ______?", q_ac : "tutor", q_aiS1 : "general", q_aiS3 : "professor"}) 
  fillers.push({s:"The audience who was at the club booed the singer before the owner of the bar could remove him from the stage. .", a:"x-x-x solidly anti mid sir why me levee glad argued larger rich lying east done yes worse allows term file rose there. owner", q : "The audience booed the ______?", q_ac : "singer", q_aiS1 : "owner", q_aiS3 : "club"}) 
  fillers.push({s:"The defender is constantly scolding the keeper. .", a:"x-x-x disembark sick definition dilation yeah albeit. coach", q : "The keeper is scolded by the ______?", q_ac : "defender", q_aiS1 : "coach", q_aiS3 : "ball"}) 
  fillers.push({s:"The hippies who the police at the concert arrested complained to the officials while the last act was going on stage. .", a:"x-x-x possesses sale room anyone oh fit writers resource completion kill cup discussed worst darn yes grow sick worry sir older. police", q : "The ______ complained to the officials?", q_ac : "hippies", q_aiS1 : "police", q_aiS3 : "stage"}) 
  fillers.push({s:"The natives on the island captured the anthropologist because she had information that could help the tribe. .", a:"x-x-x emanating fat else forget managers plan misconceptions release pick away combination die gonna darn gets shake. information", q : "The anthropologist was captured by the ______?", q_ac : "natives", q_aiS1 : "information", q_aiS3 : "hunters"}) 
  fillers.push({s:"The trainee knew that the task which the director had set for him was impossible to finish within a week. .", a:"x-x-x recursively easy jack eat earn prime note together wind word lose anti girl commission gun served degree cup thus. director", q : "The ______ was impossible to finish?", q_ac : "task", q_aiS1 : "director", q_aiS3 : "trainee"}) 
  fillers.push({s:"The administrator who the nurse from the clinic supervised scolded the medic while a patient was brought into the emergency room. .", a:"x-x-x unmask hell fact forth none anti scales detectives pungent nice smoky match lake islands boys imagine view luck recommend able. nurse", q : "The medic was scolded by the ______?", q_ac : "administrator", q_aiS1 : "nurse", q_aiS3 : "patient"}) 
  fillers.push({s:"The company was sure that its new product, which its researchers had developed, would soon be sold out. .", a:"x-x-x closely mind dad sir cent nor another, throw drug accompanied eyes everybody, south page ha trip whom. company", q : "The ______ would soon be sold out?", q_ac : "product", q_aiS1 : "company", q_aiS3 : "researchers"}) 
  fillers.push({s:"The astronaut that the journalists who were at the launch worshipped criticized the administrators after he discovered a potential leak in the fuel tank. .", a:"x-x-x supervises oh oh necessarily bed sure size yeah hungry vigorously calculated died reinforcements gotta rose electrical kept countries dean pain told laid cat. journalists", q : "The administrators were criticized by the ______?", q_ac : "astronaut", q_aiS1 : "journalists", q_aiS3 : "launch"}) 
  fillers.push({s:"The janitor who the doorman who was at the hotel chatted with bothered a guest but the manager decided not to fire him for it. .", a:"x-x-x conclude fat us intakes east ones miss ha today bedding mid tendency vote woods oh law however healthy rest kid wide road lake jack. doorman", q : "The guest was bothered by the ______?", q_ac : "janitor", q_aiS1 : "doorman", q_aiS3 : "manager"}) 
  fillers.push({s:"The technician at the show repaired the robot while people were taking a break for coffee. .", a:"x-x-x devoting hate been guys comrades cup sells sweet stupid sale policy met today sale cannot. people", q : "The robot was repaired by the ______?", q_ac : "technician", q_aiS1 : "people", q_aiS3 : "break"}) 
  fillers.push({s:"The salesman feared that the printer which the customer bought was damaged. .", a:"x-x-x dosing robust walk bar knocked weeks mid sciences impact map premier. salesman", q : "The printer was bought by the ______?", q_ac : "customer", q_aiS1 : "salesman", q_aiS3 : "damage"}) 
  fillers.push({s:"The students studied the surgeon whenever he performed an important operation. .", a:"x-x-x reused summary stay advised indicate file something cent president companies. students", q : "The operations are performed by the ______?", q_ac : "surgeon", q_aiS1 : "students", q_aiS3 : "study"}) 
  fillers.push({s:"The locksmith can crack the safe easily. safe", a:"x-x-x exert okay firms met took agreed. .", q : "The locksmith can crack the ______ easily?", q_ac : "safe", q_aiS1 : "wall", q_aiS3 : "plumber"}) 
  fillers.push({s:"The woman who was in the apartment hired the plumber despite the fact that he couldn't fix the toilet. .", a:"x-x-x seeking cool sea hear dad basically plain lie jerseys reached eyes came mom sit football bell cent enters. toilet", q : "The plumber was hired by the ______?", q_ac : "woman", q_aiS1 : "toilet", q_aiS3 : "apartment"}) 
  fillers.push({s:"Yesterday the swimmer saw only a turtle at the beach. turtle", a:"x-x-x nice hurdles ways fund web intake anti sold china. .", q : "The swimmer saw a ______?", q_ac : "turtle", q_aiS1 : "whale", q_aiS3 : "lizard"}) 
  fillers.push({s:"The surgeon who the detective who was on the case consulted questioned the coroner because the markings on the body were difficult to explain. .", a:"x-x-x responding way web belonging bad girl ways soul hope databases profitable soul bullion playing hour explores ball won fun hope statement town windows. detective", q : "The coroner was questioned by the ______?", q_ac : "surgeon", q_aiS1 : "detective", q_aiS3 : "case"}) 
  fillers.push({s:"The gangster who the detective at the club followed implicated the waitress because the police suspected he had murdered the shopkeeper. .", a:"x-x-x rejoining lack how arbitrary far came held economic contracted park realizes animals read except religions bed case displays size furthering. detective", q : "The waitress was implicated by the ______?", q_ac : "gangster", q_aiS1 : "detective", q_aiS3 : "club"}) 
  fillers.push({s:"During the party everybody was dancing to rock music. party", a:"x-x-x buy comes otherwise few monster pay ago agree. .", q : "Everybody was dancing at the ______?", q_ac : "party", q_aiS1 : "music", q_aiS3 : "concert"}) 
  fillers.push({s:"The fans at the concert loved the guitarist because he played with so much energy. .", a:"x-x-x besting holy via citizen older seat cooperate limited keep cancer sit does mass months. band", q : "The guitarist was loved by the ______?", q_ac : "fans", q_aiS1 : "band", q_aiS3 : "manager"}) 
  fillers.push({s:"The intern comforted the patient because he was in great pain. .", a:"x-x-x predate receptive wind noticed percent kid move park basis win. pain", q : "The patient was comforted by the ______?", q_ac : "intern", q_aiS1 : "pain", q_aiS3 : "nurse"}) 
  fillers.push({s:"The casino hired the daredevil because he was confident that everything would go according to plan. .", a:"x-x-x commences sword yes universes protect does her describes add understand china six authority ways down. casino", q : "The ______ was confident?", q_ac : "daredevil", q_aiS1 : "casino", q_aiS3 : "plan"}) 
  fillers.push({s:"The beggar is often scrounging for cigarettes. .", a:"x-x-x officially mid feels concourses fan agreements. cigarette", q : "The ______ is scrounging?", q_ac : "beggar", q_aiS1 : "mouse", q_aiS3 : "officer"}) 
  fillers.push({s:"The cartoonist who the readers supported pressured the dean because she thought that censorship was never appropriate. .", a:"x-x-x diversifying heat god whoever communist legalized jack den perfect keep account oh affiliates feet learn description. readers", q : "The dean was pressured by the ______?", q_ac : "cartoonist", q_aiS1 : "readers", q_aiS3 : "censorship"}) 
  fillers.push({s:"The prisoner who the guard attacked tackled the warden although he had no intention of trying to escape. .", a:"x-x-x certainly luck fine aimed suitable teaming mind invent congress mom grow boy describes pick author walk poetry. guard", q : "The warden was tackled by the ______?", q_ac : "prisoner", q_aiS1 : "guard", q_aiS3 : "escape"}) 
  fillers.push({s:"The passer-by threw the cardboard box into the trash-can with great force. .", a:"x-x-x succumbs quiet draw equitable his lord wish quarterly born agree agree. passer-by", q : "The cardboard box was thrown into the ______?", q_ac : "trash-can", q_aiS1 : "passer-by", q_aiS3 : "fire"}) 
  fillers.push({s:"The biker who the police arrested ran a light since he was driving under the influence of alcohol. .", a:"x-x-x rehabilitate risk glad except breaking pain goal exist reach till loss opinion rules nor presented find discuss. police", q : "The ______ ran a red light?", q_ac : "biker", q_aiS1 : "police", q_aiS3 : "alcohol"}) 
  fillers.push({s:"The scientists who were in the lab studied the alien while the blood sample was run through the computer. .", a:"x-x-x evict holy yes add goes bob monster son lacks wanna lie agree update wish ha reality note everyone. computer", q : "The scientists studied the ______?", q_ac : "alien", q_aiS1 : "computer", q_aiS3 : "lab"}) 
  fillers.push({s:"The student quickly finished his homework assignments. .", a:"x-x-x putting healthy southern wife airports magistrates. .", q : "The homework assignment was finished by the ______?", q_ac : "student", q_aiS1 : "teacher", q_aiS3 : "parent"}) 
  fillers.push({s:"The environmentalist who the demonstrators at the rally supported calmed the crowd until security came and sent everyone home. .", a:"x-x-x angering yeah sad perpendicular bed lot valve marketing spills best laugh spend contract me sure mom function hair. demonstrators", q : "The crowd was calmed by the ______?", q_ac : "environmentalist", q_aiS1 : "demonstrators", q_aiS3 : "security"}) 
  fillers.push({s:"The producer shoots a new movie every year. .", a:"x-x-x shortly pierce page anti enjoy peace mom. .", q : "A new movie is shot by the ______?", q_ac : "producer", q_aiS1 : "director", q_aiS3 : "cinematographer"}) 
  fillers.push({s:"The rebels who were in the jungle captured the diplomat after they threatened to kill his family for not complying with their demands. .", a:"x-x-x memorably girl body soul girl visits memories card nuisance feels guys scientists says able move please pain ball nostalgic sir learn drivers. .", q : "The diplomat was threatened by the ______?", q_ac : "rebels", q_aiS1 : "family", q_aiS3 : "jungle"}) 
  fillers.push({s:"Dinosaurs ate other reptiles during the stone age. .", a:"x-x-x earl write exporter minute guys wants dad. .", q : "Reptiles were eaten by the ______?", q_ac : "dinosaurs", q_aiS1 : "stone-age", q_aiS3 : "birds"}) 
  fillers.push({s:"The manager who the baker loathed spoke to the new pastry chef because he had instituted a new dress code for all employees. .", a:"x-x-x contemplates anti map walks tenuous voted ats goal anti devoid skip weekend star mind veterinary lose dad sides want rose knew indicates. .", q : "The ______ spoke to the new pastry chef?", q_ac : "manager", q_aiS1 : "baker", q_aiS3 : "employees"}) 
  fillers.push({s:"The teacher doubted that the test that had taken him a long time to design would be easy to answer. .", a:"x-x-x totalling grinder star feet them your miss miles song anti oh her ha posted enjoy door fund foot county. .", q : "The ______ took the teacher a long time to design?", q_ac : "test", q_aiS1 : "syllabus", q_aiS3 : "classroom"}) 
  fillers.push({s:"The cook who the servant in the kitchen hired offended the butler and then left the mansion early to see a movie at the local theater. .", a:"x-x-x admirably trip cell justify cool lose wanting rough collapse runs thirds gold term miss rate evolved ideas bill code mean miles yeah hear their acquire. .", q : "The butler was offended by the ______?", q_ac : "cook", q_aiS1 : "servant", q_aiS3 : "movie"}) 
  
  for(i=0; i<fillers.length; i++) {
	  fillers[i].condition = "filler"
	  fillers[i].item = "Filler_"+i
  }
  
  practice = [];
  
  practice.push({s:"The semester will start next week, but the students and teachers are not ready. semester", a:"x-x-x thrives anti wages body sold, sin sky entitled sky concrete oil him goods. students", q : "The ______ will start next week?", q_ac : "semester", q_aiS1 : "exams", q_aiS3 : "punishment", practice : true})
  practice.push({s:"The mother of the prisoner sent him packages that contained cookies and novels. prisoner", a:"x-x-x defraud dry arm amounted rare nor rhythmic fund authority blossom me defect. cookies", q : "The mother sent packages to the ______?", q_ac : "prisoner", q_aiS1 : "cookies", q_aiS3 : "novels", practice : true})
  practice.push({s:"The reporter had dinner yesterday with the baseball player who Kevin admired. reporter", a:"x-x-x quantify joy reduce organisms rise sum attained tended sin Troop flowing. Kevin", q : "The ______ had dinner with the baseball player?", q_ac : "reporter", q_aiS1 : "Kevin", q_aiS3 : "anchor", practice : true})
  practice.push({s:"The therapist set up a meeting with the upset woman and her husband yesterday. therapist", a:"x-x-x forestall ten sit sum absence wave ran keeps exist dry sum settled remainder. husband", q : "The meeting was set up by the ______?", q_ac : "therapist", q_aiS1 : "woman", q_aiS3 : "husband", practice : true})
  
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
  
  fullStimuli = practice.concat(fillersAndCritical);
  
  item_ids = [];
  
  console.log( fullStimuli);
  return fullStimuli;
	   
  }
  
  
