/**
 * Describes the length of time that a note should play. Represented as a 
 * proportion for universal applicatoin to different time signatures
 * 
 * w Whole Note
 * h Half Note
 * q Quarter Note
 * e Eighth Note
 * s Sixteenth Note
 * t Thirtysecond Note
 * 
 * Attach 'd' before a note to make it 'dotted'
 * eg. Beats.dq (Dotted Quarter Note)
 * 
 * @enum {number}
 */
export enum Beats {
    w = 1,
    h = 1/2,
    q = 1/4,
    e = 1/8,
    s = 1/16,
    t = 1/32,
    dw = Beats.w + Beats.h,
    dh = Beats.h + Beats.q,
    dq = Beats.q + Beats.e,
    de = Beats.e + Beats.s,
    ds = Beats.s + Beats.t,
    th = Beats.w + Beats.q,
    tq = Beats.h / 3,
    te = Beats.q / 3,
    ts = Beats.e / 3,
    tt = Beats.s / 3 
}