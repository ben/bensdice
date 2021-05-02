Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "bensdice-gears", name: "Ben's Dice: Gears"}, false);
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/bensdice/gears/d6.glb",
		system: "bensdice-gears"
	});
});
