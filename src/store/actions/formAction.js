export const Types = {
    START_UPDATE: 'form/START_UPDATE',
    FINISH_UPDATE: 'form/FINISH_UPDATE'
}

export const Creators = {
    startUpdate: product => ({
        type: Types.START_UPDATE,
        product
    }),

    finishUpdate: _ => ({
        type: Types.FINISH_UPDATE,
    })

}