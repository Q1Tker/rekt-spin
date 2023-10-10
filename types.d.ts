interface SpinData {
    data: { option: string }[],
    start: boolean,
    winner: number,
    removeWhenSelected: boolean,
    inputValue: string,
    showConfetti: boolean,
    dialog: {
        message: string,
        opened: boolean
    }
}