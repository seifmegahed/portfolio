export const text = {
  introduction:
    "A video I saw ignited my interest for a really cool gaming experience: a floor transformed into an interactive game board! This project brings that vision to life with custom-built LED panels that react to your movements, immersing you directly in the action.",

  gameDescriptionTitle: "The Game",
  gameDescription:
    "The game takes place on a custom-built floor comprised of LED panels. These panels illuminate with vibrant colors and react to your movements, transporting you directly into the game world.",

  buildingPrototypeTitle: "Building the Prototype",
  buildingPrototype:
    "The first hurdle involved crafting the LED panels themselves. Using Fusion 360 software, I designed and 3D-printed prototypes to test functionality. These initial versions utilized 3D-printed parts and aluminum frames, topped with tempered glass for durability. LED strips provided illumination, diffused by acrylic sheets for a smooth visual effect.\n\nNext came the development of the electronic components. I built a sensor using pressure-sensitive materials and an ESP32 micro-controller board. This setup reads sensor data and controls the LED strips via transistors. While this single panel prototype functioned well, it lacked the scalability needed for a full-fledged game.",

  scalingUpTitle: "Scaling Up",
  scalingUp:
    "Creating multiple panels using the same 3D-printed approach wasn't practical. To overcome this limitation, I turned to plastic injection molding. After adapting the design for this manufacturing process and collaborating with a molding specialist, the final design was ready for CNC machining. The resulting mold proved successful, allowing for a test run of the first batch of panels.",

  connectingPiecesTitle: "Connecting the Pieces",
  connectingPieces:
    "With the physical components in place, I focused on the system's brain - the hardware and software that would control the panels. After exploring various wireless communication options (Wi-Fi, Bluetooth mesh) but the latency was noticeable in all of them, I opted for a wired solution using the CAN bus protocol. This automotive communication method offered the perfect balance of range, latency, and data transmission integrity for my needs.\n\nI devised a messaging protocol to initialize and position the panels within the system. Data is then broadcasted, allowing each panel to receive its specific commands based on its location. This communication system proved flawless and remarkably stable.",

  webControlledGameEngineTitle: "A Web-Controlled Game Engine",
  webControlledGameEngine:
    "To control game initialization and gameplay, a lightweight web application was developed. Built with React and Typescript, this web app runs on the local network and resides on the master node. The backend leverages ESPAsyncWebServer and AsyncTCP libraries (source code available on Github: <link>).\n\nThe current prototype game engine, written in C, creates a dynamic playing field. A row of red panels (lava) constantly shifts, with randomly generated blue bonus panels appearing within the flow. The engine detects player interaction with the panels and adjusts the score accordingly.",

  reachingNextLevelTitle: "Reaching the Next Level",
  reachingNextLevel:
    "This project has established a strong proof of concept for the hardware and software system. Now, the focus shifts to attracting potential clients. While my pricing is competitive with Chinese alternatives, building trust with established companies requires further brand development. Initial outreach targeted existing connections, but unfortunately, these efforts haven't yet yielded a partnership.",
};
