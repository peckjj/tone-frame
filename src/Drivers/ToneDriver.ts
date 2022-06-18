import { Note } from "../Classes/Note";
import { ISourceDriver } from "../Interfaces/ISourceDriver";
import * as Tone from 'tone';
import { Pitch } from "../Enums/Pitch";
import { Beats } from "../Enums/Beats";

export class ToneDriver implements ISourceDriver {
    private synth;

    private toneStarted = false;

    constructor() {
        this.synth = new Tone.Synth().toDestination();
        console.log(this.synth);
    }

    async playNote(note: Note, time: number): Promise<void> {
        if (!this.toneStarted) {
            await Tone.start();
            this.toneStarted = true;
        }
        console.log(Tone.now());
        console.log(new Date().getTime());
        await this.synth.triggerAttackRelease(this.mapNote(Pitch[note.getPitch()]), (time / 1000).toFixed(1));
        console.log("Playing note: " + this.mapNote(Pitch[note.getPitch()]) + " (" + Beats[note.getBeat()] + ") for " + time / 1000 + " seconds");
        return new Promise(res => {
            setTimeout(res, time);
        });
    }

    mapNote(note: string): string {
        if (note === Pitch[Pitch.MIDDLE_C]) {
            return 'C4';
        }

        return note;
    }
}