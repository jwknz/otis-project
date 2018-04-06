var lastfloor = "0"

function playing(e) {

    responsiveVoice.setDefaultVoice("US English Female");

    const audio = e.target.id;

    // alert(audio);

    if (audio > 00 && audio < 13) {

        let sound;
        let label = document.querySelector('#floorNumber');

        switch (audio) {

            case "01": 
                sound = "Front-Door"
                label.innerHTML = "F"
            break;
            case "02": 
                sound = "Master-Bedroom"
                label.innerHTML = "B1"
            break;
            case "03": 
                sound = "Eethans-Bedroom"
                label.innerHTML = "B2"
            break;
            case "04": 
                sound = "Bathroom"
                label.innerHTML = "B3"
            break;
            case "05": 
                sound = "Back-Door"
                label.innerHTML = "B4"
            break;
            case "06": 
                sound = "Shower"
                label.innerHTML = "S"
            break;
            case "07": 
                sound = "Kitchen"
                label.innerHTML = "K"
            break;
            case "08": 
                sound = "Ethans-Office"
                label.innerHTML = "O1"
            break; 
            case "09": 
                sound = "Dad-Office"
                label.innerHTML = "O2"
            break; 
            case "10": 
                sound = "Lounge 1"    
                label.innerHTML = "L1"        
            break; 
            case "11": 
                sound = "Lounge 2"
                label.innerHTML = "L1"
            break; 
            default: 
                sound = ""
            break; 
        }

        responsiveVoice.speak(`${sound}`);
        
        if (lastfloor < audio) {
            responsiveVoice.speak("Going Up");
        }
        else {
            responsiveVoice.speak("Going Down");
        }

        lastfloor = audio;

        setTimeout(function() {
            let elevator = new Audio(`sounds/elevator.mp3`);
            elevator.play();
        }, 1000)
    }
}

let button = document.querySelectorAll('.button')

for (let x of button) {
    x.addEventListener('click', playing)
}