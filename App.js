let keys

document.addEventListener('keydown', function abc(event) {
    keys = event.key;
    call();
})
function call() {
    let Array =
        ["Ant", "Apple", "Artist", "Air", "Astronaut", "Acorn", "Arrow", "Aided", "Ache", "Alarm",
            "Bag", "Ball", "Bee", "Boat", "Born", "Big", "Bingo", "Baby", "Bake", "Boy",
            "Cookie", "Can", "Cat", "Call", "Car", "Cloud", "Clock", "Clap", "Cinema", "Corn",
            "Desk", "Deer", "Dice", "Dart", "Dog", "Doll", "Dish", "Dad", "Door", "Drink",
            "Eat", "Emit", "Enter", "Exit", "Excel", "Emanate", "Endow", "Entail", "Exceed", "Egg",
            "Fast", "Food", "Fair", "Fall", "Fan", "Farm", "Fly", "Frog", "Face", "Fish",
            "Game", "Gap", "Gate", "Girl", "Glance", "Glasses", "Glove", "Glue", "Go", "Goal",
            "Had", "Help", "Holy", "Hat", "Hid", "Hop", "Hide", "Hot", "Heal", "House",
            "Ice", "Igloo", "Iguana", "Ink", "Insect", "Inside", "Iron", "Island", "Islam", "Iran",
            "Joke", "Jitters", "Joe", "Join", "Jinx", "Joyful", "Jungle", "Jot", "Jail", "Junk",
            "Kite", "Ketchup", "Kit", "Kid", "Keep", "Key", "KicK", "Kind", "Kitchen", "King",
            "Ladybird", "Llama", "Love", "Luck", "Ladder", "Lead", "Learn", "Legend", "Leisure", "Leopard",
            "Man", "Mango", "Map", "Milk", "Monkey", "March", "Market", "Mist", "Meal", "Melon",
            "Nap", "Napkin", "Neat", "Need", "Nation", "Narrow", "Nice", "Noise", "Nurse", "Nut",
            "Orange", "Owl", "Ocean", "Olive", "Onion", "Oil", "Orbit", "Opera", "Oven", "Oval",
            "Pen", "Pencil", "Paper", "Plate", "Plant", "Pillow", "Phone", "Pineapple", "Pan", "Pumpkin",
            "Queen", "Quilt", "Quill", "Quarter", "Quartz", "Quest", "Queue", "Quick", "Quiet", "Quote",
            "Rat", "Ring", "Rocket", "River", "Rope", "Rose", "Rabbit", "Rain", "Rock", "Road",
            "Sun", "Star", "Snake", "Ship", "Shell", "Spoon", "Stone", "Shirt", "Sand", "Sock",
            "Tiger", "Table", "Tree", "Train", "Tap", "Tool", "Turtle", "Tomato", "Tent", "Towel",
            "Umbrella", "Uniform", "Unicorn", "Urn", "Utensil", "Universe", "Usage", "Urban", "Update", "Uplift",
            "Van", "Vase", "Vest", "Violin", "Vegetable", "Village", "Vision", "Victory", "Volume", "Violet",
            "Water", "Wolf", "Window", "Wheel", "Whistle", "Watch", "Wing", "Wood", "Wagon", "Wrist",
            "X-ray", "Xylophone", "Xenon", "Xerox", "X-axis", "Xenonlight", "Xyloid", "Xylem", "Xerophyte", "Xyst",
            "Yak", "Yam", "Yard", "Yarn", "Yellow", "Yolk", "Yacht", "Year", "Youth", "Yoga",
            "Zebra", "Zero", "Zoo", "Zip", "Zipper", "Zone", "Zoom", "Zeal", "Zigzag", "Zenith"]
    let empty = [];

    let abc = document.getElementById("h2")
    for (let i = 0; i < Array.length; i++) {
        if (Array[i][0].toLowerCase() == keys) {
            empty.push(Array[i])
        }
        // abc.innerHTML = `I Have No Word For This Letter`
        // if(empty !== ){
        //     console.log("khalii");

        // }
        let randon = Math.floor(Math.random() * empty.length)
        abc.innerHTML = empty[randon]

    }



}
// call();
