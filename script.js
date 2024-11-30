const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  progressBar = document.querySelector(".progress-bar span"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  modal = document.querySelector(".modal"),
  modalMessage = document.querySelector(".modal-message"),
  closeModal = document.querySelector(".close-modal");

let correctWord, timer;

const words = [
  { word: "canvas", hint: "Fabric for painting" },
  { word: "garden", hint: "Planting space" },
  { word: "addition", hint: "Adding numbers" },
  { word: "library", hint: "Books collection" },
  { word: "expert", hint: "Highly skilled person" },
  { word: "comfort", hint: "Feeling of ease" },
  { word: "tongue", hint: "Mouth organ" },
  { word: "friend", hint: "Close companion" },
  { word: "computer", hint: "Electronic device for processing" },
  { word: "telephone", hint: "Device for communication" },
  { word: "mountain", hint: "Large landform" },
  { word: "ocean", hint: "Large body of saltwater" },
  { word: "chair", hint: "Seat with a backrest" },
  { word: "pen", hint: "Writing instrument" },
  { word: "guitar", hint: "Stringed musical instrument" },
  { word: "phone", hint: "Portable communication device" },
  { word: "watch", hint: "Timekeeping device" },
  { word: "bus", hint: "Public transport vehicle" },
  { word: "book", hint: "Collection of written or printed pages" },
  { word: "television", hint: "Device for viewing broadcasts" },
  { word: "table", hint: "Furniture with a flat surface" },
  { word: "door", hint: "Opening for entry or exit" },
  { word: "window", hint: "Opening for light and air" },
  { word: "dog", hint: "Domesticated carnivorous mammal" },
  { word: "cat", hint: "Small domesticated feline" },
  { word: "bird", hint: "Feathered flying animal" },
  { word: "fish", hint: "Aquatic animal" },
  { word: "refrigerator", hint: "Appliance for cooling food" },
  { word: "airplane", hint: "Flying vehicle" },
  { word: "ship", hint: "Large vessel for sea travel" },
  { word: "train", hint: "Rail transport vehicle" },
  { word: "camera", hint: "Device for capturing images" },
  { word: "laptop", hint: "Portable computer" },
  { word: "keyboard", hint: "Device for typing" },
  { word: "mouse", hint: "Pointing device for computers" },
  { word: "sun", hint: "Star at the center of the solar system" },
  { word: "moon", hint: "Natural satellite of Earth" },
  { word: "star", hint: "Luminous celestial body" },
  { word: "earth", hint: "Planet we live on" },
  { word: "fire", hint: "Combustion of materials" },
  { word: "water", hint: "Colorless liquid for drinking" },
  { word: "earthquake", hint: "Tremor caused by movement in Earth's crust" },
  { word: "volcano", hint: "Mountain with a crater for lava" },
  { word: "tree", hint: "Perennial plant with a trunk" },
  { word: "cloud", hint: "Visible mass of condensed water vapor" },
  { word: "rain", hint: "Precipitation in liquid form" },
  { word: "snow", hint: "Frozen precipitation" },
  { word: "wind", hint: "Movement of air" },
  { word: "mountain", hint: "Large natural elevation of the Earth's surface" },
  { word: "river", hint: "Flowing body of water" },
  { word: "lake", hint: "Large body of water surrounded by land" },
  { word: "desert", hint: "Dry, barren area of land" },
  { word: "forest", hint: "Large area covered chiefly with trees" },
  { word: "island", hint: "Piece of land surrounded by water" },
  { word: "beach", hint: "Shore of a body of water" },
  { word: "sand", hint: "Small grains of rock" },
  { word: "earth", hint: "Planet we live on" },
  { word: "soil", hint: "Earth's upper layer of ground" },
  { word: "oil", hint: "Viscous liquid from petroleum" },
  { word: "gold", hint: "Precious yellow metal" },
  { word: "silver", hint: "Precious metal, white and shiny" },
  { word: "diamond", hint: "Hard, transparent precious stone" },
  { word: "jewel", hint: "Precious stone or gem" },
  { word: "book", hint: "A written or printed work" },
  { word: "notebook", hint: "Book used for writing" },
  { word: "pencil", hint: "Writing instrument with lead" },
  { word: "eraser", hint: "Tool for removing pencil marks" },
  { word: "marker", hint: "Pen used for drawing or writing" },
  { word: "chalk", hint: "Stick of writing material used on boards" },
  { word: "scissors", hint: "Cutting tool with two blades" },
  { word: "glue", hint: "Sticky substance for bonding" },
  { word: "tape", hint: "Adhesive strip used for sticking things" },
  { word: "thread", hint: "Long, thin strand of material" },
  { word: "needle", hint: "Pointed tool for sewing" },
  { word: "sewing", hint: "Joining fabric with a needle and thread" },
  { word: "button", hint: "Small fastening device for clothing" },
  { word: "zipper", hint: "Fastener for clothing or bags" },
  { word: "fabric", hint: "Material used for making clothes" },
  { word: "leather", hint: "Tough material made from animal skin" },
  { word: "cotton", hint: "Soft fiber used for clothing" },
  { word: "wool", hint: "Fiber from sheep used for clothing" },
  { word: "coat", hint: "Outer garment worn for warmth" },
  { word: "hat", hint: "Headwear" },
  { word: "scarf", hint: "Piece of cloth worn around the neck" },
  { word: "gloves", hint: "Hand coverings" },
  { word: "shoes", hint: "Footwear" },
  { word: "socks", hint: "Garments worn on feet inside shoes" },
  { word: "suit", hint: "Formal outfit" },
  { word: "dress", hint: "Clothing for women" },
  { word: "shirt", hint: "Upper garment" },
  { word: "pants", hint: "Trousers worn on the lower body" },
  { word: "shorts", hint: "Short trousers" },
  { word: "skirt", hint: "Garment worn by women, covering the lower body" },
  { word: "tie", hint: "Clothing accessory for the neck" },
  { word: "belt", hint: "Strap worn around the waist" },
  { word: "wallet", hint: "Small case for carrying money" },
  { word: "bag", hint: "Container used to carry things" },
  { word: "backpack", hint: "Bag worn on the back" },
  { word: "suitcase", hint: "Large bag for travel" },
  { word: "umbrella", hint: "Device for protecting from rain" },
  { word: "sunglasses", hint: "Eyewear for protecting from sunlight" },
  { word: "watch", hint: "Timekeeping device worn on the wrist" },
  { word: "ring", hint: "Circular jewelry worn on fingers" },
  { word: "necklace", hint: "Jewelry worn around the neck" },
  { word: "bracelet", hint: "Jewelry worn around the wrist" },
  { word: "earrings", hint: "Jewelry worn on ears" },
  { word: "key", hint: "Device for unlocking something" },
  { word: "lock", hint: "Device for securing doors or containers" },
  { word: "safe", hint: "Secure container for valuables" },
  { word: "alarm", hint: "Device for warning or alerting" },
  { word: "camera", hint: "Device for capturing images" },
  { word: "video", hint: "Recording of moving images" },
  { word: "microscope", hint: "Instrument for viewing small objects" },
  { word: "telescope", hint: "Instrument for viewing distant objects" },
  { word: "binoculars", hint: "Optical instrument for viewing distant objects" }

];

function showNotification(message) {
  modalMessage.textContent = message;
  modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => modal.classList.add("hidden"));

function initGame() {
  clearInterval(timer);
  const random = words[Math.floor(Math.random() * words.length)];
  correctWord = random.word.toLowerCase();
  hintText.textContent = random.hint;
  wordText.textContent = random.word.split("").sort(() => Math.random() - 0.5).join("");
  inputField.value = "";
  initTimer(30);
}

function initTimer(maxTime) {
  let time = maxTime;
  timer = setInterval(() => {
    time--;
    progressBar.style.width = `${(time / maxTime) * 100}%`;
    if (time <= 0) {
      clearInterval(timer);
      showNotification(`Time's up! The correct word was ${correctWord.toUpperCase()}`);
    }
  }, 1000);
}

checkBtn.addEventListener("click", () => {
  if (inputField.value.toLowerCase() === correctWord) {
    showNotification(`Correct! The word is ${correctWord.toUpperCase()}`);
    initGame();
  } else {
    showNotification(`Oops! Try again.`);
  }
});

refreshBtn.addEventListener("click", initGame);

initGame();
