// import * as Tone from 'tone';

import { ISourceDriver } from "../Interfaces/ISourceDriver";
import { Melody } from "./Melody";
import { Note } from "./Note";

export class Instrument {
    private driver: ISourceDriver;
    private armedMelody: Melody | null;
    private melodies: Melody[];

    constructor(driver: ISourceDriver) {
        this.driver = driver;
        this.melodies = [];
        this.armedMelody = null;
    }

    playNote(note: Note, time: number) {
        this.driver.playNote(note, time);
    }

    armMelody(melody: Melody) {
        this.armedMelody = melody;
    }

    storeMelody(melody: Melody) {
        this.melodies.push(melody);
    }

    getMelody(melody: string | number | Melody): Melody | null {
        let selectedMelody: Melody | null | undefined;
        
        if (typeof melody === 'string') {
            selectedMelody = this.melodies.find(m => m.name === melody);
        } else if (typeof melody === 'number') {
            selectedMelody = this.melodies[melody];
        } else {
            selectedMelody = this.getMelody(melody.name);
        }

        return selectedMelody ? selectedMelody : null;
    }

    armStoredMelody(melody: string | number | Melody) {
        this.armedMelody = this.getMelody(melody);
    }

    async playMelody() {
        let note: Note;
        let time: number;

        if (!this.armedMelody) {
            throw new Error("No melody has been armed");
        }

        while (this.armedMelody.hasNext()) {
            note = this.armedMelody.next();
            time = this.armedMelody.timeSignature.noteTime(note);
            
            await this.driver.playNote(note, time);
        }
    }
}