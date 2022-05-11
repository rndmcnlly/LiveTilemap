class Demo extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        this.load.spritesheet("terrible", "terrible.png", {
            frameWidth: 32,
            frameHeigh: 32,
        });

        this.load.tilemapCSV("sheet", CSV_URL);

    }
    create() {
        let tilemap = this.make.tilemap({ key: "sheet", tileWidth: 32, tileHeight: 32});
        let layer = tilemap.createLayer(0, tilemap.addTilesetImage("terrible"), 0, 0);
    }
}


let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 256,
    height: 256,
    scene: [Demo]
});

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1u6eG3np6CDR5ZDjncRNEI2Zx3UxNxxExialb2_z87ws/edit#gid=0";
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSii0j-eh0O61htMEWibPA8JAosE1pYpGo1P-JnStxkP8fd4xH7uSQ12RVe6m4O_hnq6xyzUAOVq_j8/pub?gid=0&single=true&output=csv";

window.addEventListener('load', () => {
    document.getElementById("box").innerHTML = `<a target="_blank" href="${SHEET_URL}">edit me</a>`;
});
