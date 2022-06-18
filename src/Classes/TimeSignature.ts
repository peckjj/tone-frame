import { Beats } from "../Enums/Beats";
import { Note } from "./Note";

export class TimeSignature {
    readonly beatUnit: number;
    readonly perMeasure: number;
    readonly bpm: number;

    constructor(perMeasure: number, beatUnit: number, bpm: number) {
        this.beatUnit = beatUnit;
        this.perMeasure = perMeasure;
        this.bpm = bpm;
    }

    copy() {
        return new TimeSignature(this.perMeasure, this.beatUnit, this.bpm);
    }

    /**
     * 
     * @returns Time in milliseconds for a Thirtysecond note
     */
    clockTime(): number {
        let time: number;

        time = this.halfNoteTime() / (32 / 2);

        return Math.floor(time);
    }

    halfNoteTime(): number {
        let beats = this.beatUnit / 2;

        let minutes = beats / this.bpm;

        let milliseconds = minutes * 60 * 1000;

        return Math.floor(milliseconds);
    }

    wholeNoteTime(): number {
        return Math.floor(this.halfNoteTime() / (this.beatUnit / 2) * this.perMeasure);
    }

    noteTime(note: Note): number {
        if (note.getBeat() === Beats.w) {
            return this.wholeNoteTime();
        } else if (note.getBeat() === Beats.th) {
            return this.wholeNoteTime() / 3;
        }

        return Math.floor(this.halfNoteTime() * note.getBeat() * 2);
    }


}