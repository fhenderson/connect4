export interface ResetAction {
    type: "RESET_BOARD";
}

export function resetBoard(): ResetAction {
    console.log('RESET_BOARD')

    return {
        type: "RESET_BOARD"
    }
}