function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function showScreen() {
    let num = document.getElementById("rooms").value;
    let room2 = document.getElementById("room2");
    let room3 = document.getElementById("room3");

    if (num == 1) {
        room2.style.display = "none";
        room3.style.display = "none";
    }

    if (num == 2) {
        room2.style.display = "block";
        room3.style.display = "none";
    }

    if (num == 3) {
        room2.style.display = "block";
        room3.style.display = "block";
    }

    //This took me quite a while to figure out, I'm not sure if the video was meant to show us how you set it up. I referred to this link https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
}

function estimate() {
    let num = document.getElementById("rooms").value;

    if (num == 1) {
        let name = document.getElementById("name").value;
        let length = parseFloat(document.getElementById("rm1length").value);
        let width = parseFloat(document.getElementById("rm1width").value);
        let height = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt = ((length * height * 2) + (length * width * 2));
        let cost = (totalSqFt * .65);
        document.getElementById("rm1cost").value = cost;

        var totalCost = cost;
        document.getElementById("estimate").innerHTML = name + ", your estimate is $" + totalCost + ".";
    }

    if (num == 2) {
        let name = document.getElementById("name").value;
        let length = parseFloat(document.getElementById("rm1length").value);
        let width = parseFloat(document.getElementById("rm1width").value);
        let height = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt = ((length * height * 2) + (length * width * 2));
        let cost = (totalSqFt * .65);
        document.getElementById("rm1cost").value = cost;

        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
        let cost2 = (totalSqFt2 * .65);
        document.getElementById("rm2cost").value = cost2;

        var totalCost = cost + cost2;
        document.getElementById("estimate").innerHTML = name + ", your estimate is $" + totalCost + ".";
    }

    if (num == 3) {
        let name = document.getElementById("name").value;
        let length = parseFloat(document.getElementById("rm1length").value);
        let width = parseFloat(document.getElementById("rm1width").value);
        let height = parseFloat(document.getElementById("rm1height").value);
        let totalSqFt = ((length * height * 2) + (length * width * 2));
        let cost = (totalSqFt * .65);
        document.getElementById("rm1cost").value = cost;

        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt2 = ((length2 * height2 * 2) + (length2 * width2 * 2));
        let cost2 = (totalSqFt2 * .65);
        document.getElementById("rm2cost").value = cost2;

        let length3 = parseFloat(document.getElementById("rm3length").value);
        let width3 = parseFloat(document.getElementById("rm3width").value);
        let height3 = parseFloat(document.getElementById("rm3height").value);
        let totalSqFt3 = ((length3 * height3 * 2) + (length3 * width3 * 2));
        let cost3 = (totalSqFt3 * .65);
        document.getElementById("rm3cost").value = cost3;

        var totalCost = cost + cost2 + cost3;
        document.getElementById("estimate").innerHTML = name + ", your estimate is $" + totalCost + ".";
    }
    

    //I'm not sure if this is how you wanted this function to look, but it's immediately how I thought to do it and it works well.
}