//Setting Variables
var hairList = ["blonde", "brown", "black", "red", "pink", "blue"];
var skinList = ["one", "two", "three", "four"];
var eyesList = ["blue", "brown", "green", "black"];
var genderList = ["male", "female", "non-binary person"];
var fname = ["Olivia", "Charlotte", "Susie", "Ellen"]; //female name
var mname = ["Noah", "William", "Michael", "Johnny"]; //male name
var nname = ["Alex", "Rowan", "Blake", "Jaiden"]; //neutral name
var lname = ["Moore", "Taylor", "Evans", "Castillo"]; //last names
var assess = ["innocent", "guilty"];
var createdNPC = "";
var createdCrime = "";
var hairSplit = ["short", "long"];
var accessoryList = ["necklace", "earrings", "nose_piercing", "brow_piercing", "choker"];
var clothesList = ["blue", "green", "grey", "orange", "pink", "white"];
var personalityList = ["aggressive", "neutral", "anxious", "cheerful"]; //"neutral", "anxious", "cheerful" (debugging)
var noteList = [];
var hairLength = "";

//Variables for Crime
var typeList = ["robbery", "burglary", "theft", "assault", "hit and run", "murder"];
var timeList = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"];

//These are for dialog and NPC behavior
var lawyer = false;
var anger = false;
var textHolder = 0;
var angerMeter = 0;
var tutorialCompleted = false;

let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let notes = document.getElementById("notes");
let caseInfo = document.getElementById("case");

let mouthId = document.getElementById("mouth");
let browsId = document.getElementById("brows");
let chatId = document.getElementById("chat");
var decisionTime = false;

//Classes here since it does not hoist

//This class is for the NPC
class NPC {
    constructor(firstname, lastname, gender, skin, eyes, hair, clothes, accessory, personality, assessment) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.skin = skin;
        this.eyes = eyes;
        this.hair = hair;
        this.clothes = clothes;
        this.accessory = accessory;
        this.personality = personality;
        this.assessment = assessment;
    }

    npcStats() {
        return `The NPC's name is ${this.firstname} ${this.lastname}, they are a ${this.gender} with skin tone ${this.skin}, ${this.eyes} eyes, and ${this.hair} hair wearing a ${this.clothes} shirt and ${this.accessory}. They are ${this.personality} and ${this.assessment}.`
    }
}

//Creating the crime object that was committed.
class Crime {
    constructor(timeofCrime, type, witnessOne, witnessTwo, witnessThree) {
        this.timeofCrime = timeofCrime;
        this.type = type;
        this.witnessOne = witnessOne;
        this.witnessTwo = witnessTwo;
        this.witnessThree = witnessThree;
    }

    crimeStats() {
        return `The crime is a ${this.type} which happened at ${this.timeofCrime}. Witnesses describe the perp as ${this.witnessOne}, ${this.witnessTwo}, and ${this.witnessThree}.`
    }
}

//Some functions

//This function is to create an NPC
function newNPC() {
    var selectedHair = hairList[Math.floor(Math.random()*hairList.length)]; //most of this is randomizing from the above lists
    var selectedGender = genderList[Math.floor(Math.random()*genderList.length)];
    var selectedSkin = skinList[Math.floor(Math.random()*skinList.length)];
    var selectedEyes = eyesList[Math.floor(Math.random()*eyesList.length)];
    var selectedClothes = clothesList[Math.floor(Math.random()*clothesList.length)];
    var selectedPersonality = personalityList[Math.floor(Math.random()*personalityList.length)];
    var selectedLast = lname[Math.floor(Math.random()*lname.length)];
    var isAccessory = Math.floor(Math.random() * 2);

    switch (selectedGender) { //I used a switch here so names would align with gender assigned
        case "male":
            var selectedName = mname[Math.floor(Math.random()*mname.length)];
            break;
        case "female":
            var selectedName = fname[Math.floor(Math.random()*fname.length)];
            break;
        case "non-binary person":
            var selectedName = nname[Math.floor(Math.random()*nname.length)];
            break;
        default:
            var selectedName = "Alex";
    }

    if (isAccessory == true) {
        var selectedAccessory = accessoryList[Math.floor(Math.random()*accessoryList.length)];
        console.log("The accessory is" + selectedAccessory)
    }
    else {
        var selectedAccessory = "none";
        console.log("They have no accessory.")
    }

    var selectedAssess = assess[Math.floor(Math.random()*assess.length)];

    return createdNPC = new NPC(selectedName, selectedLast, selectedGender, selectedSkin, selectedEyes, selectedHair, selectedClothes, selectedAccessory, selectedPersonality, selectedAssess); //sets the variable
}

newNPC();

// Setting Image and info for NPC
function infoSet() {
    var gender = createdNPC.gender;
    var skin = createdNPC.skin;
    var eyes = createdNPC.eyes;
    var hair = createdNPC.hair;
    var clothes = createdNPC.clothes;
    var accessory = createdNPC.accessory;

    if (gender == "male") {
        hairLength = "short";
    }
    else if (gender == "female") {
        hairLength = "long";
    }
    else if (gender == "non-binary person") {
        hairLength = hairSplit[Math.floor(Math.random()*hairSplit.length)];
    }

    document.getElementById("npcName").innerHTML = createdNPC.firstname + " " + createdNPC.lastname;
    document.getElementById("hair").src = "images/" + hairLength + "_" + hair + ".png";
    document.getElementById("skin").src = "images/skin_" + skin + ".png";
    document.getElementById("eyes").src = "images/eyes_" + eyes + ".png";
    document.getElementById("clothes").src = "images/clothes_" + clothes + ".png";

    if (accessory == "none") {
        document.getElementById("accessory").style.visibility = "hidden";
    }
    else {
        document.getElementById("accessory").src = "images/" + accessory + ".png";
        document.getElementById("accessory").style.visibility = "visible";
    }
    
    mouthId.src = "images/mouth_neutral.png";
    browsId.src = "images/brows_neutral.png";

}

infoSet();

//Generating the crime and witness report!
function newCrime() {
    var selectedCrime = typeList[Math.floor(Math.random()*typeList.length)];
    var selectedTime = timeList[Math.floor(Math.random()*timeList.length)];
    var listOne = [createdNPC.hair, createdNPC.clothes];
    var listTwo = [createdNPC.eyes, createdNPC.personality];

    if (createdNPC.assessment == "guilty" && createdNPC.accessory != "none") {
        var listThree = [createdNPC.accessory, hairLength]; //list three is slightly different depending on if there is an accessory or not

        var selectedOne = listOne[Math.floor(Math.random()*listOne.length)];
        var selectedTwo = listTwo[Math.floor(Math.random()*listTwo.length)];
        var selectedThree = listThree[Math.floor(Math.random()*listThree.length)];

        //Adding text at the state for the case to show appropriately
        if (selectedOne == createdNPC.hair) {
            selectedOne = "Hair Color: " + createdNPC.hair;
        }
        else {
            selectedOne = "Clothes Color: " + createdNPC.clothes;
        }

        if (selectedTwo == createdNPC.eyes) {
            selectedTwo = "Eye Color: " + createdNPC.eyes;
        }
        else {
            selectedTwo = "Personality: " + createdNPC.personality;
        }

        if (selectedThree == createdNPC.accessory) {
            selectedThree = "Accessory: " + createdNPC.accessory;
        }
        else {
            selectedThree = "Hair Length: " + hairLength;
        }
    }
    else if (createdNPC.assessment == "guilty" && createdNPC.accessory == "none") {
        var listThree = [createdNPC.gender, hairLength];

        var selectedOne = listOne[Math.floor(Math.random()*listOne.length)];
        var selectedTwo = listTwo[Math.floor(Math.random()*listTwo.length)];
        var selectedThree = listThree[Math.floor(Math.random()*listThree.length)];

        if (selectedOne == createdNPC.hair) {
            selectedOne = "Hair Color: " + createdNPC.hair;
        }
        else {
            selectedOne = "Clothes Color: " + createdNPC.clothes;
        }

        if (selectedTwo == createdNPC.eyes) {
            selectedTwo = "Eye Color: " + createdNPC.eyes;
        }
        else {
            selectedTwo = "Personality: " + createdNPC.personality;
        }

        if (selectedThree == createdNPC.gender) {
            selectedThree = "Gender: " + createdNPC.gender;
        }
        else {
            selectedThree = "Hair Length: " + hairLength;
        }
    }
    else {
        var selectedOne = "Hair Color: " + hairList[Math.floor(Math.random()*hairList.length)];
        var selectedTwo = "Clothes Color: " + clothesList[Math.floor(Math.random()*clothesList.length)];
        var selectedThree = "Hair Length: " + hairLength;
    }

    return createdCrime = new Crime(selectedTime, selectedCrime, selectedOne, selectedTwo, selectedThree)
}

newCrime();

//This is the master function to get the state of the game, based on the option selected and the variables declared
function getText(opt) {
    

    if (tutorialCompleted == false) {
        if (opt == 1) {
            tutorialText(false);
        }
        else {
            tutorialText(true);
        }
        
    }
    else if (decisionTime) {
        if (createdNPC.assessment == "innocent") {
            if (opt == 1) {
                win();
            }
            else if (opt == 2) {
                lose();
            }
        }
        else {
            if (opt == 1) {
                lose();
            }
            else if (opt == 2) {
                win();
            }
        }
    }
    else if (anger == true) {
        lose();
    }
    else {
        console.log("button pressed")
        dialogCall(opt);
    }

}


//This is the brief explanation of how the game works, the chat box is small so I have it change a couple times based on textHolder number. 
function tutorialText(skip) {
    textHolder += 1;
    if (textHolder == 1 && skip == false) {
        chatId.innerHTML = "You will talk to them to get clues, which you can view in notes. These will help you keep track of their story.";
    }
    else if (textHolder == 2 && skip == false) {
        chatId.innerHTML = "You can view the case details, including witness description, in the case. Sometimes a witness will provide bad details.";
    }
    else if (textHolder == 3 && skip == false) {
        chatId.innerHTML = "Not all subjects will be friendly or cooperative. Some of them may even have an angry outburst or call a lawyer before you are finished.";
        opt1.innerHTML = "Start";
        textHolder = 0;
        tutorialCompleted = true;
    }
    else if (skip == true) {
        opt1.innerHTML = "Start";
        textHolder = 0;
        tutorialCompleted = true;
    }
}

//This is for the end, when you must decide if they are innocent or guilty.
function makeDecision() {
    opt1.innerHTML = "Innocent";
    opt2.innerHTML = "Guilty";
    decisionTime = true;
}

//Winning function
function win() {
    if (createdNPC.assessment == "innocent") {
        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_smile.png";

        chatId.innerHTML = "That's right! They were innocent!";
        opt1.style.visibility = "hidden";
        opt2.style.visibility = "hidden";
        notes.style.visibility = "hidden";
        caseInfo.style.visibility = "hidden";
    }
    else {
        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_frown.png";
        
        chatId.innerHTML = "That's right! They were guilty!"
        opt1.style.visibility = "hidden";
        opt2.style.visibility = "hidden";
        notes.style.visibility = "hidden";
        caseInfo.style.visibility = "hidden";
    }
    noteList.splice(0, noteList.length); // This is to empty the array.
}

//Losing function
function lose() {
    if (anger == false) {
        if (createdNPC.assessment == "innocent") {
            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            chatId.innerHTML = "Unfortunately, they were innocent.";
            opt1.style.visibility = "hidden";
            opt2.style.visibility = "hidden";
            notes.style.visibility = "hidden";
            caseInfo.style.visibility = "hidden";
        }
        else {
            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_smile.png";

            chatId.innerHTML = "Unfortunately, they were guilty."
            noteList.splice(0, noteList.length);
            opt1.style.visibility = "hidden";
            opt2.style.visibility = "hidden";
            notes.style.visibility = "hidden";
            caseInfo.style.visibility = "hidden";
        }
    }
    else {
        if (lawyer == true) {
            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_neutral.png";

            chatId.innerHTML = "They called their lawyer.";
            noteList.splice(0, noteList.length);
            opt1.style.visibility = "hidden";
            opt2.style.visibility = "hidden";
            notes.style.visibility = "hidden";
            caseInfo.style.visibility = "hidden";
        }
        else {
            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_frown.png";

            chatId.innerHTML = "They had an angry outburst."
            noteList.splice(0, noteList.length);
            opt1.style.visibility = "hidden";
            opt2.style.visibility = "hidden";
            notes.style.visibility = "hidden";
            caseInfo.style.visibility = "hidden";
        }
        
    }
    
}

//This will display the gathered notes in the chat box.
function noteCall() {
    var output = "";
    for (var i = 0; i < noteList.length; i++) {
        output += noteList[i] + " ";
    }
    chatId.innerHTML = output;
}

//This will display details of the case in the chat box.
function caseCall() {
    var crimeCommitted = createdCrime.type;
    var timeCommitted = createdCrime.timeofCrime;
    var evidenceOne = createdCrime.witnessOne;
    var evidenceTwo = createdCrime.witnessTwo;
    var evidenceThree = createdCrime.witnessThree;

    chatId.innerHTML = "Crime: " + crimeCommitted + " Time: " + timeCommitted + "</br>Witness claims the perp has: " + evidenceOne + " " + evidenceTwo + " " + evidenceThree;
}

//This changes the textholder and calls for the appropriate dialog tree.
function dialogCall(opt) {
    
    opt1.style.visibility = "hidden"; //I've been debugging this for a while
    opt2.style.visibility = "hidden";
    textHolder += 1;
    //console.log("Textholder is " + textHolder);
    notes.style.visibility = "visible";
    caseInfo.style.visibility = "visible";

    if (createdNPC.personality == "aggressive") {
        aggressiveDialog(opt);
    }
    else if (createdNPC.personality == "neutral") {
        neutralDialog(opt);
    }
    else if (createdNPC.personality == "anxious") {
        anxiousDialog(opt);
    }
    else if (createdNPC.personality == "cheerful") {
        cheerfulDialog(opt);
    }
}

//Past here is the NPC Dialog, there are four which are all similar with slight differences for a little more personality.
function aggressiveDialog(opt) {
    var timeCrime = createdCrime.timeofCrime;
    var typeCrime = createdCrime.type;
    var state = createdNPC.assessment;
    
    opt1.style.visibility = "visible";
    opt2.style.visibility = "visible";


    if (opt == 2) { //This keeps track of how angry the person is.
        angerMeter += 1;
    }

    if (textHolder == 1) { //Starting Dialog
        noteList.splice(0, noteList.length);
        chatId.innerHTML = "Why am I here? I didn't do anything!";
        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_frown.png";
    
        opt1.innerHTML = "I am just going to ask some questions. Where were you yesterday at " + timeCrime + "?";
        opt2.innerHTML = "We don't know that yet. Where were you yesterday at " + timeCrime + "?";

    }
    else if (textHolder == 2 && opt == 1) { //Reacton and note taking carries on based on player options
        chatId.innerHTML = "I was at home, which isn't a crime.";
        noteList.push("Location: Home");
        console.log("Noted: " + noteList);
    
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "You're right, it is not a crime. Did you happen to hear about a " + typeCrime + " yesterday? Do you know the victim?";
        opt2.innerHTML = "We'll see about that. What do you know about the " + typeCrime + " yesterday? Do you know the victim?";

    }
    else if (textHolder == 2 && opt == 2) {
        chatId.innerHTML = "I don't know, I don't keep track of the time.";
        noteList.push("Location: Unaccounted");
        console.log("Noted: " + noteList);
        
        mouthId.src = "images/mouth_neutral.png";

        opt1.innerHTML = "Then do know you the victim?";
        opt2.innerHTML = "Right... Do you know the victim from anywhere?";

    }
    else if (textHolder == 3 && opt == 1) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "No, I have no idea who that is.";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_neutral.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I do.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

            browsId.src = "images/brows_neutral.png";

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I know them. What about it?!";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know them.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
    }
    else if (textHolder == 3 && opt == 2) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "Why do you sound suspicious? I don't know who they are!";
            noteList.push("Does not know victim.");

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Are you going to blame me for the " + typeCrime + "?! Yes, I know them!";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "You're being a real pest! No, I don't know them!";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_frown.png";
        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I know them. What about it?!";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_down.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know them. Are you trying to say I did it?!";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_down.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "I have no idea who that person is!";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_down.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }
        }

    }
    else if (textHolder == 4 && opt == 1  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I don't remember seeing them.";
            noteList.push("Did not see the victim.");

            browsId.src = "images/brows_neutral.png";
            mouthId.src = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't know, people can look the same!";
            noteList.push("Unsure if seen the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";
        }

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 4 && opt == 2  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I think you're trying to accuse me! No, I didn't see them!";
            noteList.push("Did not see the victim.");
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I'm going to hurt you if you keep being rude!";
            noteList.push("Unsure if seen the victim.");
        }

        browsId = "images/brows_down.png";
        mouthId = "images/mouth_frown.png";

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 5 && opt == 1 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "Yes, I was with friends.";
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "No, I was alone most the day.";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";

        }
        else if (state == "guilty") {
            chatId.innerHTML = "No, I was alone most the day.";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 5 && opt == 2 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "Yes! I do! I was with friends all day!"
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "I think that's none of your business!";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I think that's none of your business!";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_frown.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 6) {
        decisionTime = true;
        makeDecision();
    }
    else if (angerMeter >= 3) {
        chatId.innerHTML = "LEAVE ME ALONE!"

        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_frown.png";

        anger = true;
        lawyer = false;

        opt1.innerHTML = "End."
        opt2.style.visibility = "hidden";
    }
}

function neutralDialog(opt) {
    var timeCrime = createdCrime.timeofCrime;
    var typeCrime = createdCrime.type;
    var state = createdNPC.assessment;
    opt1.style.visibility = "visible";
    opt2.style.visibility = "visible";

    if (opt == 2) {
        angerMeter += 1;
    }

    if (textHolder == 1) {
        noteList.splice(0, noteList.length);
        chatId.innerHTML = "Hello officer.";
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "I am just going to ask some questions. Where were you yesterday at " + timeCrime + "?";
        opt2.innerHTML = "You don't need to be so calm. Where were you yesterday at " + timeCrime + "?";

    }
    else if (textHolder == 2 && opt == 1) {
        chatId.innerHTML = "I was at home, watching TV.";
        noteList.push("Location: Home");
        console.log("Noted: " + noteList);
    
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "Did you happen to hear about a " + typeCrime + " yesterday? Do you know the victim?";
        opt2.innerHTML = "We'll see about that. What do you know about the " + typeCrime + " yesterday? Do you know the victim?";

    }
    else if (textHolder == 2 && opt == 2) {
        chatId.innerHTML = "I don't know, I was really busy.";
        noteList.push("Location: Unaccounted");
        console.log("Noted: " + noteList);
        
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";

        opt1.innerHTML = "Then do know you the victim?";
        opt2.innerHTML = "Right... Do you know the victim from anywhere?";

    }
    else if (textHolder == 3 && opt == 1) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "No, I have no idea who that is.";
            noteList.push("Does not know victim.");

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I do.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

            browsId.src = "images/brows_neutral.png";
            mouthId.src = "images/mouth_neutral.png";

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I know who they are.";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know who they are.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
    }
    else if (textHolder == 3 && opt == 2) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "Why do you sound suspicious? I don't know who they are.";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Are you trying to say I committed the " + typeCrime + "? I know them, but not very well.";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I don't know them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_neutral.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I met them recently. Why?";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know them.";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "I don't believe I have met them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }
        }
    }
    else if (textHolder == 4 && opt == 1  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I don't remember seeing them.";
            noteList.push("Did not see the victim.");

            browsId.src = "images/brows_neutral.png";
            mouthId.src = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't know, people can look the same.";
            noteList.push("Unsure if seen the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";
        }

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 4 && opt == 2  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "Your questioning is aggressive. No, I didn't see them!";
            noteList.push("Did not see the victim.");

        }
        else if (state == "guilty") {
            chatId.innerHTML = "Please stop being so rude.";
            noteList.push("Unsure if seen the victim.");
        }

        browsId = "images/brows_down.png";
        mouthId = "images/mouth_frown.png";

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 5 && opt == 1 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "Yes, I was with friends.";
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "No, I was alone most the day.";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";

        }
        else if (state == "guilty") {
            chatId.innerHTML = "No, I was alone most the day.";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 5 && opt == 2 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "I have a couple of friends that were with me."
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "I don't think so...";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't think so...";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 6) {
        decisionTime = true;
        makeDecision();
    }
    else if (angerMeter >= 3) {
        chatId.innerHTML = "I am calling my lawyer!"

        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_frown.png";

        anger = true;
        lawyer = true;

        opt1.innerHTML = "End."
        opt2.style.visibility = "hidden";
    }
}

function anxiousDialog(opt) {
    var timeCrime = createdCrime.timeofCrime;
    var typeCrime = createdCrime.type;
    var state = createdNPC.assessment;
    opt1.style.visibility = "visible";
    opt2.style.visibility = "visible";

    if (opt == 2) {
        angerMeter += 1;
    }

    if (textHolder == 1) {
        noteList.splice(0, noteList.length);
        chatId.innerHTML = "Hello officer.";
        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "I am just going to ask some questions. Where were you yesterday at " + timeCrime + "?";
        opt2.innerHTML = "You don't need to be so calm. Where were you yesterday at " + timeCrime + "?";

        textHolder += 1;

    }
    else if (textHolder == 2 && opt == 1) {
        chatId.innerHTML = "I was at home, did something happen?.";
        noteList.push("Location: Home");
        console.log("Noted: " + noteList);
    
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "Did you happen to hear about a " + typeCrime + " yesterday? Do you know the victim?";
        opt2.innerHTML = "We'll see about that. What do you know about the " + typeCrime + " yesterday? Do you know the victim?";

    }
    else if (textHolder == 2 && opt == 2) {
        chatId.innerHTML = "I don't know, you don't have to be so stern.";
        noteList.push("Location: Unaccounted");
        console.log("Noted: " + noteList);
        
        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_frown.png";

        opt1.innerHTML = "Then do know you the victim?";
        opt2.innerHTML = "Don't waste my time. Do you know the victim from anywhere?";

    }
    else if (textHolder == 3 && opt == 1) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "No, I have no idea who that is. Are they okay?";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I do. Are they okay?";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Uhh, I think I know who they are.";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know who they are.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";

        }
    }
    else if (textHolder == 3 && opt == 2) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "Why do you sound suspicious? I don't know who they are!";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Are you trying to say I committed the " + typeCrime + "? I know them, but I promise I didn't do it!";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "I am sorry! No, I don't know them!";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I met them recently. Why?";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know them.";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "I don't believe I have met them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }
        }
    }
    else if (textHolder == 4 && opt == 1  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I don't remember seeing them.";
            noteList.push("Did not see the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't know, people can look the same!";
            noteList.push("Unsure if seen the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";
        }

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 4 && opt == 2  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "Please stop being accusatory! No, I didn't see them!";
            noteList.push("Did not see the victim.");
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I have no idea, you're pressuring me too much!";
            noteList.push("Unsure if seen the victim.");
        }

        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_frown.png";

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 5 && opt == 1 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "Yes, I was watching a show with friends.";
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "No, I was alone most the day.";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_raised.png";
            mouthId = "images/mouth_neutral.png";

        }
        else if (state == "guilty") {
            chatId.innerHTML = "No, I was alone most the day.";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_raised.png";
            mouthId = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 5 && opt == 2 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "I have friends! Don't just assume I don't! They were with me for a while."
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "I was just trying to have a nice day...";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_raised.png";
            mouthId = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I was just trying to have a nice day...";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_raised.png";
            mouthId = "images/mouth_frown.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 6) {
        decisionTime = true;
        makeDecision();
    }
    else if (angerMeter >= 3) {
        chatId.innerHTML = "I want my lawyer..."

        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_neutral.png";

        anger = true;
        lawyer = true;

        opt1.innerHTML = "End."
        opt2.style.visibility = "hidden";
    }
}

function cheerfulDialog(opt) {
    var timeCrime = createdCrime.timeofCrime;
    var typeCrime = createdCrime.type;
    var state = createdNPC.assessment;
    opt1.style.visibility = "visible";
    opt2.style.visibility = "visible";

    if (opt == 2) {
        angerMeter += 1;
    }

    if (textHolder == 1) {
        noteList.splice(0, noteList.length);
        chatId.innerHTML = "Hello, good day to you!";
        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_smile.png";
    
        opt1.innerHTML = "I am just going to ask some questions. Where were you yesterday at " + timeCrime + "?";
        opt2.innerHTML = "It's a bad day, by my count. Where were you yesterday at " + timeCrime + "?";

    }
    else if (textHolder == 2 && opt == 1) {
        chatId.innerHTML = "I was spending some time in the park.";
        noteList.push("Location: Park");
        console.log("Noted: " + noteList);
    
        browsId.src = "images/brows_neutral.png";
        mouthId.src = "images/mouth_neutral.png";
    
        opt1.innerHTML = "Did you happen to hear about a " + typeCrime + " yesterday? Do you know the victim?";
        opt2.innerHTML = "We'll see about that. What do you know about the " + typeCrime + " yesterday? Do you know the victim?";

    }
    else if (textHolder == 2 && opt == 2) {
        chatId.innerHTML = "I don't know, you don't have to be so stern.";
        noteList.push("Location: Unaccounted");
        console.log("Noted: " + noteList);
        
        browsId.src = "images/brows_raised.png";
        mouthId.src = "images/mouth_neutral.png";

        opt1.innerHTML = "Then do know you the victim?";
        opt2.innerHTML = "Don't waste my time. Do you know the victim from anywhere?";

    }
    else if (textHolder == 3 && opt == 1) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "No, I have no idea who that is. They're cute though! ... They are okay, right?";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I do know them. Are they okay?";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Uhh, I think I know who they are. I think I met them at the park last week!";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_smile.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know who they are.";
                noteList.push("Knows victim.");

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "No, I do not know them.";
                noteList.push("Does not know victim.");

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
    }
    else if (textHolder == 3 && opt == 2) {
        if (state == "innocent" && typeCrime == "murder") {
            chatId.innerHTML = "Why do you sound suspicious? I don't know who they are!";
            noteList.push("Does not know victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Have you ever seen them before?";
            opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
        }
        else if (state == "innocent" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Are you trying to say I committed the " + typeCrime + "? I know them, but I promise I didn't do it!";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "You're being a real pest! No, I don't know them!";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_down.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }

        }
        else if (state == "guilty" && typeCrime == "murder") {
            chatId.innerHTML = "Yes, I met them recently. Why?";
            noteList.push("Knows victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_frown.png";

            opt1.innerHTML = "Where did you last see them?";
            opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
        }
        else if (state == "guilty" && typeCrime != "murder") {
            if (Math.floor(Math.random() * 2) == true) {
                chatId.innerHTML = "Yes, I know them.";
                noteList.push("Knows victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_frown.png";

                opt1.innerHTML = "Where did you last see them?";
                opt2.innerHTML = "So you do know who they are, and I bet you saw them yesterday.";
            }
            else {
                chatId.innerHTML = "I don't believe I have met them.";
                noteList.push("Does not know victim.");

                browsId.src = "images/brows_raised.png";
                mouthId.src = "images/mouth_neutral.png";

                opt1.innerHTML = "Have you seen them before?";
                opt2.innerHTML = "I think you do know who they are, and you saw them yesterday.";
            }
        }
    }
    else if (textHolder == 4 && opt == 1  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I don't remember seeing them. I would remember!";
            noteList.push("Did not see the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't know, there was a lot going on.";
            noteList.push("Unsure if seen the victim.");

            browsId.src = "images/brows_raised.png";
            mouthId.src = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 4 && opt == 2  && angerMeter < 3) {
        if (state == "innocent") {
            chatId.innerHTML = "I think you're trying to accuse me! No, I didn't see them!";
            noteList.push("Did not see the victim.");
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I'm just trying to be a good person!";
            noteList.push("Unsure if seen the victim.");
        }

        browsId = "images/brows_raised.png";
        mouthId = "images/mouth_frown.png";

        opt1.innerHTML = "Do you have any alibis?";
        opt2.innerHTML = "I don't believe you. Can anyone vouch for you?";
    }
    else if (textHolder == 5 && opt == 1 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "Yes, I was playing games with some friends.";
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "No, I was alone most the day.";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";

        }
        else if (state == "guilty") {
            chatId.innerHTML = "No, I was alone most the day.";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_neutral.png";
            mouthId = "images/mouth_neutral.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 5 && opt == 2 && angerMeter < 3) {
        if (state == "innocent") {
            if (Math.floor(Math.random()*2) == true) {
                chatId.innerHTML = "You really should try to be cheerier. I was with my friends!"
                noteList.push("Has alibi.");
            }
            else {
                chatId.innerHTML = "I don't think I want to talk to a grump like you.";
                noteList.push("Does not have an alibi.");
            }

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_neutral.png";
        }
        else if (state == "guilty") {
            chatId.innerHTML = "I don't think I want to talk to a grump like you.";
            noteList.push("Does not have an alibi.");

            browsId = "images/brows_down.png";
            mouthId = "images/mouth_frown.png";
        }

        opt1.innerHTML = "I see.";
        opt2.style.visibility = "hidden";
    }
    else if (textHolder == 6) {
        decisionTime = true;
        makeDecision();
    }
    else if (angerMeter >= 3) {
        chatId.innerHTML = "I am calling my lawyer!"

        browsId.src = "images/brows_down.png";
        mouthId.src = "images/mouth_frown.png";

        anger = true;
        lawyer = true;

        opt1.innerHTML = "End."
        opt2.style.visibility = "hidden";
    }
}

console.log(createdNPC.npcStats());

//For context of what I am working on - it's a little game where you are a cop trying to figure out if the person is innocent or guilty