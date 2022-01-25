export declare class MersenneTwister {
    private N;
    private M;
    private MATRIX_A;
    private UPPER_MASK;
    private LOWER_MASK;
    private mt;
    private mti;
    constructor(seed: number);
    genrand_int32(): number;
    genrand_int31: () => number;
    genrand_real1: () => number;
    random: () => number;
    genrand_real3: () => number;
    genrand_res53: () => number;
    private init_genrand;
    private init_by_array;
}
//# sourceMappingURL=main.d.ts.map