function make_slides(f) {
    var slides = {};

    slides.consent = slide({
        name: "consent",
        start: function() {
            exp.startT = Date.now();
            $("#consent_2").hide();
            exp.consent_position = 0;
        },
        button: function() {
            exp.go(); //use exp.go() if and only if there is no "present" data.
        }
    });



    slides.i0 = slide({
        name: "i0",
        start: function() {
            exp.startT = Date.now();
        }
    });

    slides.instructions1 = slide({
        name: "instructions1",
        start: function() {
            $(".instruction_condition").html("Between subject intruction manipulation: " + exp.instruction);
        },
        button: function() {
            exp.go(); //use exp.go() if and only if there is no "present" data.
        }
    });


/////////////////////////////////////
    slides.rest = slide({
        name: "rest",
        start: function() {
		msg = ""
		exp.rest_phase += 1;
		if(exp.errors > 6.25) {
			msg = "You have been making more errors than most other participants. Please try to be more accurate in your responses."
		} else if(exp.errors > 5.0) {
			msg = "Most participants make fewer errors. Try to be more accurate in your responses."
		} else if(exp.errors > 3.25) {
			msg = "You are doing okay, though the majority of participants make fewer errors."
		} else if(exp.errors < 1.25) {
			msg = "You are doing very well!"
		} else {
			msg = "You are doing well. This number of errors is similar to most other participants."
		}
            $(".error-info").html("You have made " + exp.errors + " errors. "+msg);
		exp.errors=0;
        },
        button: function() {
            exp.go(); //use exp.go() if and only if there is no "present" data.
        }
    });




    ////////////////////////////////////////////


    for (mazeGroup = 1; mazeGroup <= 4; mazeGroup++) {
        slides["maze" + mazeGroup] = slide({
            name: "maze",
            present: stimuliContextPart[mazeGroup],
            present_handle: function(stim) {

                console.log(stim);
                this.stim = stim;
                console.log(stim);
                this.words = this.stim.s.split(" ");
                this.alts = this.stim.a.split(" ");
                this.compq = this.stim.q; 
                this.order = [];
                this.mazeResults = [];
                this.correct = [];
                for (i = 0; i < this.words.length; i++) {
                    this.order.push(_.sample([0, 1], 1)[0]);
                    this.mazeResults.push([null, null]);
                    this.correct.push(null);
                }
                if(this.stim.practice){
                    if(this.stim.item == "Practice_0"){
                        this.comp_q_order = [0,1,2]
                    }
                    else if(this.stim.item == "Practice_1"){
                        this.comp_q_order = [1,0,2]
                    }
                    else if(this.stim.item == "Practice_2"){
                        this.comp_q_order = [1,2,0]
                    }
                    else if(this.stim.item == "Practice_3"){
                        this.comp_q_order = [2,1,0]
                        $(".Maze-barrow").html("&nbsp;");
                    }
                }
                else{
                    this.comp_q_order = _.shuffle([0,1,2])
                    $(".Maze-barrow").html("&nbsp;");
                }
                 //if not the practice round - if practice round, then preset this.
                this.comp_q_answers = [this.stim.q_ac, this.stim.q_aiS1, this.stim.q_aiS3]
                this.comp_q_answers = [this.comp_q_answers[this.comp_q_order[0]], this.comp_q_answers[this.comp_q_order[1]], this.comp_q_answers[this.comp_q_order[2]] ]
                words = ["hallo"]
                this.redo = true; // redo when people make an error
                var t = this;
                var repeat = true;
                this.currentWord = 0;
                this.stoppingPoint = this.words.length
                this.delay_response = false;
                console.log(stim.r);
                if (stim.r != null) {
                    this.regions = stim.r.split(" ");
                } else {
                    this.regions = this.words;
                    this.regions[(this.regions.length)-1] = "FILLER_CQ"
                }
                console.log(this.regions);
                this.listener = function(event) {
                    console.log(event);
                    console.log(t.currentWord);
                    var time = new Date().getTime();
                    var code = event.keyCode;
                    if(t.delay_response){
                        console.log("Do nothing");
                    }
                    else if (t.currentWord == -1) {
                        console.log("Current word -1 ");
                        t.currentWord = 0;
                        t.showWord(t.currentWord);
                        $(".Maze-error").html("");
                        if (t.redo) {
                            console.log("REPEATING");
                            $(".Maze-lword").show();
                            $(".Maze-rword").show();
                            $(".Maze-larrow").show();
                            $(".Maze-rarrow").show();
                            return;
                        } else {
                            t.button();
                            return;
                        }
                    } else if (t.currentWord == -2) {
                        t.button();
                        return;
                    } else if ((code == 69 || code == 73) && (!((code == 69 && t.order[t.currentWord] == 0) || (code == 73 && t.order[t.currentWord] == 1))) && t.currentWord == 0) {
                        console.log("Do nothing");
                    } else if (code == 69 || code == 73 || (t.currentWord == t.stoppingPoint-1 && code == 32)) {
                        var word = t.currentWord;
                        if (word <= t.stoppingPoint) {
                            if (word < t.stoppingPoint-1) {
                            correct = ((code == 69 && t.order[word] == 0) || (code == 73 && t.order[word] == 1)) ? "yes" : "no";
                            }
                            else{
                                correct = ((code == 69 && t.comp_q_order[0] == 0) || (code == 73 && t.comp_q_order[1] == 0) || (code == 32 && t.comp_q_order[2] == 0)) ? "yes" : "no"; 
                                t.comp_q_response = ""
                                if(code == 69){
                                    t.comp_q_response = t.comp_q_answers[0]
                                }
                                else if (code == 73){
                                    t.comp_q_response = t.comp_q_answers[1]
                                }
                                else if (code == 32){
                                    t.comp_q_response = t.comp_q_answers[2]
                                }
                            }
                            if (t.correct[word] == null) {
                                t.mazeResults[word][0] = time;
                                t.mazeResults[word][1] = t.previousTime;
                                t.correct[word] = correct
                                console.log(t.mazeResults);
                                console.log(t.correct);
                            }
                            if (correct == "no" & t.redo) {
				    if(t.stim.practice != true) {
   				         exp.errors += 1;
   				         exp.total_errors += 1;
				    }
                                $(".Maze-error").html("Incorrect. Please try again.");
 //                               $(".Maze-lword").hide();
   //                             $(".Maze-rword").hide();
     //                           $(".Maze-larrow").hide();
       //                         $(".Maze-rarrow").hide();
//                                t.currentWord = -1;
                                return true;
                            } else if (correct == "no") {
                                if(t.stim.practice){
                                    $(".Maze-counter").html("Correct! Press any key to continue.");
                                }
                                else{
                                    $(".Maze-counter").html("Press any key to continue.");
                                }
                                $(".Maze-lword").hide();
                                $(".Maze-rword").hide();
                                $(".Maze-bword").hide();
                                $(".Maze-larrow").hide();
                                $(".Maze-rarrow").hide();
                                $(".Maze-barrow").hide();
                                $(".Maze-compq").html("&nbsp;");
                                $(".Maze-compq").addClass('Maze-inactive-compq').removeClass('Maze-active-compq');
                                t.currentWord = -1;
                                return true;
                            } else if (correct == "yes") {
                                $(".Maze-error").html("");
                            }
                        }
                        t.previousTime = time;
                        ++(t.currentWord);
                        if (t.currentWord >= t.stoppingPoint) {
                            if(t.stim.practice){
                                $(".Maze-counter").html("Correct! Press any key to continue.");
                            }
                            else{
                                $(".Maze-counter").html("Press any key to continue.");
                            }
                            $(".Maze-lword").hide();
                            $(".Maze-rword").hide();
                            $(".Maze-bword").hide();
                            $(".Maze-larrow").hide();
                            $(".Maze-rarrow").hide();
                            $(".Maze-barrow").hide();
                            $(".Maze-compq").html("&nbsp;");
                            $(".Maze-compq").addClass('Maze-inactive-compq').removeClass('Maze-active-compq');
                            t.currentWord = -2;
                            t.redo = true;
                            return true;
                        }
                        t.showWord(t.currentWord);
                        if (t.currentWord == t.stoppingPoint-1) {
                            $(".Maze-compq").html(t.compq);
                            $(".Maze-compq").addClass('Maze-active-compq').removeClass('Maze-inactive-compq');
                            $(".Maze-lword").hide();
                            $(".Maze-rword").hide();
                            $(".Maze-bword").hide();
                            $(".Maze-larrow").hide();
                            $(".Maze-rarrow").hide();
                            $(".Maze-barrow").hide();
                            t.delay_response = true;
                            if(!t.stim.practice){
                                t.redo = false;
                            }
                            setTimeout(() => { $(".Maze-lword").show();
                                                $(".Maze-rword").show();
                                                $(".Maze-bword").show();
                                                $(".Maze-larrow").show();
                                                $(".Maze-rarrow").show();
                                                $(".Maze-barrow").show();
                                                t.delay_response = false;}, 1000);
                        }
                        return false;
                    } else {
                        return true;
                    }
                }
                document.addEventListener('keydown', this.listener);
                this.showWord(0);

                $(".Maze-lword").show();
                $(".Maze-rword").show();
                $(".Maze-larrow").show();
                $(".Maze-rarrow").show();
            },

            showWord: function(w) {
                if (this.currentWord < this.stoppingPoint - 1) {
                    $(".Maze-lword").html((this.order[this.currentWord] === 0) ?
                        this.words[this.currentWord] : this.alts[this.currentWord]);
                    $(".Maze-rword").html((this.order[this.currentWord] === 0) ?
                        this.alts[this.currentWord] : this.words[this.currentWord]);
                    exp.wordsSoFar++;
                    $(".Maze-counter").html("Words so far: " + exp.wordsSoFar);
                    this.previousTime = new Date().getTime();
                }
                else if (this.currentWord == this.stoppingPoint - 1) {

                    $(".Maze-lword").html(this.comp_q_answers[0]);
                    $(".Maze-rword").html(this.comp_q_answers[1]);
                    $(".Maze-bword").html(this.comp_q_answers[2]);
                    this.previousTime = new Date().getTime();
                }
            },

            button: function() {
                console.log("CALL BUTTON");
                document.removeEventListener('keydown', this.listener);
                this.log_responses();
                _stream.apply(this); //use exp.go() if and only if there is no "present" data.
            },

            init_sliders: function() {
                utils.make_slider("#slider0_ctxt", function(event, ui) {
                    exp.sliderPost = ui.value;
                });
            },
            log_responses: function() {
                document.removeEventListener('keydown', this.listener);
                console.log(this.words);
                console.log(this.mazeResults);
                byWords = [];
                for (i = 0; i < this.words.length; i++) {
                    switch_side = false;
                    if(i > 0 & (this.order[i-1] != this.order[i])){
                    	switch_side = true;
                    }
                    byWords.push({
                        "word": this.words[i],
                        "rt": this.mazeResults[i][0] - this.mazeResults[i][1],
                        "correct": this.correct[i],
                        "region": this.regions[i],
                        "alt": this.alts[i],
                        "order": this.order[i],
                        "switch_side":switch_side
                        })
                    console.log(byWords[byWords.length - 1]);
                }
                console.log(byWords);
                dataForThisTrial = {
                    "sentence": this.stim.s,
                    "item": this.stim.item,
                    "condition": this.stim.condition,
                    "swap_nouns": this.stim.swap_nouns,
                    "byWords": byWords,
                    "noun": this.stim.noun,
                    "distractor_condition": this.stim.distractor_condition,
                    "slide_number": exp.phase,
                    "comp_q": this.stim.q,
                    "comp_q_order": this.comp_q_order,
                    "comp_q_order_words": this.comp_q_answers,
                    "comp_q_response": this.comp_q_response,
                    "comp_q_correct": byWords[byWords.length-1]["correct"]
                };
                exp.data_trials.push(dataForThisTrial);
                console.log(exp.data_trials[exp.data_trials.length - 1]);

		    // UPLOADING RESULTS
            },
        })
    };



// Subject Information
    slides.subj_info = slide({
        name: "subj_info",
        submit: function(e) {
            //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
            exp.subj_data = {
                language: $("#language").val(),
                enjoyment: $("#enjoyment").val(),
                asses: $('input[name="assess"]:checked').val(),
                comments: $("#comments").val(),
                suggested_pay: $("#suggested_pay").val(),
		    errors : exp.total_errors//,
//		    conditions : exp.conditions_chosen
            };
		console.log(exp.subj_data);
            exp.go(); //use exp.go() if and only if there is no "present" data.
        }
    });

    slides.thanks = slide({
        name : "thanks",
        start : function() {
          exp.data= {
              "trials" : exp.data_trials,
              "catch_trials" : exp.catch_trials,
              "system" : exp.system,
              //"condition" : exp.condition,
              "subject_information" : exp.subj_data,
              "time_in_minutes" : (Date.now() - exp.startT)/60000
          };
          proliferate.submit(exp.data);
        }
      });

    return slides;
}

/// init ///
function init() {
    repeatWorker = false;

    exp.current_score_click = 0;
    exp.total_quiz_trials_click = 0;

    exp.current_score = 0;
    exp.total_quiz_trials = 0;
    exp.hasDoneTutorialRevision = false;
    exp.shouldDoTutorialRevision = false;
    exp.hasEnteredInterativeQuiz = false;

    exp.trials = [];
    exp.catch_trials = [];
    exp.instruction = _.sample(["instruction1", "instruction2"]);
    exp.system = {
        Browser: BrowserDetect.browser,
        OS: BrowserDetect.OS,
        screenH: screen.height,
        screenUH: exp.height,
        screenW: screen.width,
        screenUW: exp.width
    };

    //blocks of the experiment:
    exp.structure = [];
    exp.structure.push('i0')
    exp.structure.push('consent')
    exp.structure.push('instructions1')
    exp.structure.push('maze1')
    exp.structure.push('rest')
    exp.structure.push('maze2')
    exp.structure.push('rest')
    exp.structure.push('maze3')
    exp.structure.push('rest')
    exp.structure.push('maze4')

    exp.structure.push('subj_info')
    exp.structure.push('thanks');


    exp.data_trials = [];
    //make corresponding slides:
    exp.slides = make_slides(exp);

    exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
    //relies on structure and slides being defined

    $('.slide').hide(); //hide everything

    //make sure turkers have accepted HIT (or you're not in mturk)
    $("#start_button").click(function() {
        if (turk.previewMode) {
            $("#mustaccept").show();
        } else {
            $("#start_button").click(function() {
                $("#mustaccept").show();
            });
            exp.go();
        }
    });

    exp.order_questionnaires = _.sample([
        [0, 1],
        [1, 0]
    ])

    exp.wordsSoFar = 0;
	exp.total_errors = 0;
	exp.errors = 0;
	exp.rest_phase=0;

    exp.go(); //show first slide
}
